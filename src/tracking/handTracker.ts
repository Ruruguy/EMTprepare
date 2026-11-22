export interface HandPoint {
  x: number; // 0 ~ 1 normalized
  y: number; // 0 ~ 1 normalized
  z?: number;
}

export interface SingleHandState {
  id: number;           // 0: P1, 1: P2
  label: string;        // 'P1' | 'P2'
  color: string;        // 主色調
  accentColor: string;  // 捏合亮色
  isPinching: boolean;
  pinchDistance: number;
  cursorScreenX: number; // Pixels
  cursorScreenY: number; // Pixels
  cursorNormX: number;   // 0 ~ 1
  cursorNormY: number;   // 0 ~ 1
  landmarks: HandPoint[];
}

export interface MultiHandGestureState {
  handsCount: number;
  hands: SingleHandState[];
  temporarilyMissing?: number[];
}

export class HandTracker {
  private videoEl: HTMLVideoElement;
  private canvasEl: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D | null;
  private camera: any = null;
  private hands: any = null;

  private isRunning: boolean = false;
  private maxHands: number = 2; // 支援同時 2 位玩家同屏互動
  private isMultiplayerMode: boolean = false; // 單人模式下所有偵測到的手全歸屬 P1

  // 雙手平滑濾波紀錄
  private smoothCoords: { [id: number]: { x: number; y: number } } = {};
  private lastSeen = new Map<number, number>();
  private pinchStates: { [id: number]: boolean } = {
    0: false,
    1: false
  };

  private currentMultiState: MultiHandGestureState = {
    handsCount: 0,
    hands: []
  };

  private onStateChangeCallback: ((state: MultiHandGestureState) => void) | null = null;

  constructor(videoElement: HTMLVideoElement, overlayCanvas: HTMLCanvasElement) {
    this.videoEl = videoElement;
    this.canvasEl = overlayCanvas;
    this.ctx = overlayCanvas.getContext('2d');
    this.handleResize();
    window.addEventListener('resize', () => this.handleResize());
  }

  private handleResize() {
    this.canvasEl.width = window.innerWidth;
    this.canvasEl.height = window.innerHeight;
  }

  public setOnStateChange(cb: (state: MultiHandGestureState) => void) {
    this.onStateChangeCallback = cb;
  }

  public setMultiplayerMode(isMulti: boolean) {
    if (this.isMultiplayerMode !== isMulti) this.resetTracking();
    this.isMultiplayerMode = isMulti;
  }

  public async start(): Promise<boolean> {
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        console.warn('getUserMedia not available in this context, using mouse/touch mode.');
        return false;
      }
      if ((window as any).Hands && (window as any).Camera) {
        await this.initMediaPipe();
        return true;
      } else {
        console.warn('MediaPipe library not loaded yet, waiting or fallback...');
        return false;
      }
    } catch (e) {
      console.error('Failed to start hand tracker:', e);
      this.isRunning = false;
      return false;
    }
  }

  private async initMediaPipe() {
    const Hands = (window as any).Hands;
    const Camera = (window as any).Camera;

    this.hands = new Hands({
      locateFile: (file: string) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
      }
    });

    this.hands.setOptions({
      maxNumHands: this.maxHands,
      modelComplexity: 1,
      minDetectionConfidence: 0.65,
      minTrackingConfidence: 0.65
    });

    this.hands.onResults((results: any) => this.onResults(results));

    this.camera = new Camera(this.videoEl, {
      onFrame: async () => {
        if (this.isRunning && this.hands) {
          try {
            await this.hands.send({ image: this.videoEl });
          } catch (err) {
            // 忽略單幀推論錯誤
          }
        }
      },
      width: 1280,
      height: 720
    });

    this.isRunning = true;
    await this.camera.start();
  }

  public stop() {
    this.isRunning = false;
    this.resetTracking();
    if (this.camera) {
      try {
        this.camera.stop();
      } catch (e) {}
    }
  }

  private resetTracking() {
    this.lastSeen.clear();
    this.smoothCoords = {};
    this.pinchStates = {};
    this.currentMultiState = { handsCount: 0, hands: [] };
    this.ctx?.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
    this.onStateChangeCallback?.(this.currentMultiState);
  }

  private onResults(results: any) {
    if (!this.isRunning) return;
    const now = performance.now();
    const aspect = this.videoEl.videoWidth / this.videoEl.videoHeight || 16 / 9;
    if (!this.ctx) return;
    const w = this.canvasEl.width;
    const h = this.canvasEl.height;

    // 清空畫布
    this.ctx.clearRect(0, 0, w, h);

    const activeHands: SingleHandState[] = [];

    if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
      // 擷取前兩隻被偵測到的手
      const detectedRaw = results.multiHandLandmarks.slice(0, 2).map((landmarks: any[], originalIdx: number) => {
        const thumb = landmarks[4];
        const index = landmarks[8];
        const wrist = landmarks[0];
        const middleKnuckle = landmarks[9];

        // 鏡像座標翻轉 (Mirror)
        const mirroredThumbX = 1 - thumb.x;
        const mirroredIndexX = 1 - index.x;
        const rawX = (mirroredThumbX + mirroredIndexX) / 2;
        const rawY = (thumb.y + index.y) / 2;

        const palmDist = Math.max(0.001, Math.hypot((wrist.x - middleKnuckle.x) * aspect, wrist.y - middleKnuckle.y));
        const pinchDist = Math.hypot((thumb.x - index.x) * aspect, thumb.y - index.y);
        const pinchThreshold = palmDist * 0.42;
        const releaseThreshold = palmDist * 0.65;

        return {
          landmarks,
          rawX,
          rawY,
          minPinchDist: pinchDist,
          pinchThreshold,
          releaseThreshold,
          originalIdx
        };
      });

      // 比較兩種配對，讓手勢輸出順序改變時仍沿用上一幀的玩家。
      const cost = (index: number, id: number) => {
        const hand = detectedRaw[index];
        if (!hand) return 0;
        const previous = this.smoothCoords[id];
        if (previous) return Math.hypot(hand.rawX - previous.x, hand.rawY - previous.y);
        const side = this.isMultiplayerMode ? Math.abs(hand.rawX - id) : id;
        return 0.45 + 0.1 * side;
      };
      const swap = cost(0, 1) + cost(1, 0) < cost(0, 0) + cost(1, 1);
      detectedRaw.forEach((hData, handIdx) => {
        const handId = swap ? 1 - handIdx : handIdx;
        this.lastSeen.set(handId, now);
        const isP1 = !this.isMultiplayerMode || handId === 0;
        const color = isP1 ? '#3182CE' : '#E07A5F';
        const accentColor = isP1 ? '#63B3ED' : '#F6AD55';

        let label = isP1 ? 'P1 救護員' : 'P2 救護員';
        if (!this.isMultiplayerMode && detectedRaw.length > 1) {
          label = handId === 0 ? 'P1 救護員' : 'P1 (副手)';
        }

        // 靈敏且防誤觸的遲滯捏合狀態切換
        const wasPinching = this.pinchStates[handId] || false;
        if (!wasPinching) {
          if (hData.minPinchDist < hData.pinchThreshold) {
            this.pinchStates[handId] = true;
          }
        } else {
          if (hData.minPinchDist > hData.releaseThreshold) {
            this.pinchStates[handId] = false;
          }
        }

        const isPinching = this.pinchStates[handId];

        // 靈敏且平滑的 0.55 EMA 追蹤 (無延遲感，精準對位)
        if (!this.smoothCoords[handId]) {
          this.smoothCoords[handId] = { x: hData.rawX, y: hData.rawY };
        }
        const alpha = 0.55;
        this.smoothCoords[handId].x = this.smoothCoords[handId].x * (1 - alpha) + hData.rawX * alpha;
        this.smoothCoords[handId].y = this.smoothCoords[handId].y * (1 - alpha) + hData.rawY * alpha;

        const screenX = this.smoothCoords[handId].x * w;
        const screenY = this.smoothCoords[handId].y * h;

        activeHands.push({
          id: handId,
          label,
          color,
          accentColor,
          isPinching,
          pinchDistance: hData.minPinchDist,
          cursorScreenX: screenX,
          cursorScreenY: screenY,
          cursorNormX: this.smoothCoords[handId].x,
          cursorNormY: this.smoothCoords[handId].y,
          landmarks: hData.landmarks
        });

        // 繪製該玩家之全螢幕手部骨架
        this.drawSingleHandSkeleton(hData.landmarks, handId, isPinching, color, accentColor, label, w, h);
      });
    }

    const temporarilyMissing: number[] = [];
    for (const [id, timestamp] of this.lastSeen) {
      if (activeHands.some(hand => hand.id === id)) continue;
      if (now - timestamp < 180) {
        temporarilyMissing.push(id);
      } else {
        this.lastSeen.delete(id);
        delete this.smoothCoords[id];
        delete this.pinchStates[id];
      }
    }
    this.currentMultiState = {
      temporarilyMissing,
      handsCount: activeHands.length,
      hands: activeHands
    };

    if (this.onStateChangeCallback) {
      this.onStateChangeCallback(this.currentMultiState);
    }
  }

  // 繪製單手骨架（文青半透明細緻線條）
  private drawSingleHandSkeleton(
    landmarks: any[],
    handIdx: number,
    isPinching: boolean,
    mainColor: string,
    accentColor: string,
    label: string,
    w: number,
    h: number
  ) {
    if (!this.ctx) return;

    const CONNECTIONS = [
      [0,1],[1,2],[2,3],[3,4],
      [0,5],[5,6],[6,7],[7,8],
      [5,9],[9,10],[10,11],[11,12],
      [9,13],[13,14],[14,15],[15,16],
      [13,17],[17,18],[18,19],[19,20],[0,17]
    ];

    this.ctx.save();
    this.ctx.lineWidth = 3;
    this.ctx.strokeStyle = isPinching ? accentColor : mainColor;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';
    this.ctx.globalAlpha = 0.8;

    // 骨架連線
    CONNECTIONS.forEach(([i, j]) => {
      const p1 = landmarks[i];
      const p2 = landmarks[j];
      const x1 = (1 - p1.x) * w;
      const y1 = p1.y * h;
      const x2 = (1 - p2.x) * w;
      const y2 = p2.y * h;

      this.ctx!.beginPath();
      this.ctx!.moveTo(x1, y1);
      this.ctx!.lineTo(x2, y2);
      this.ctx!.stroke();
    });

    // 關節點
    landmarks.forEach((p, idx) => {
      const x = (1 - p.x) * w;
      const y = p.y * h;
      this.ctx!.beginPath();
      if (idx === 4 || idx === 8) {
        // 食指與大拇指
        this.ctx!.arc(x, y, isPinching ? 9 : 7, 0, Math.PI * 2);
        this.ctx!.fillStyle = isPinching ? accentColor : '#FAF5FF';
        this.ctx!.fill();
        this.ctx!.strokeStyle = mainColor;
        this.ctx!.lineWidth = 2.5;
        this.ctx!.stroke();
      } else {
        this.ctx!.arc(x, y, 4, 0, Math.PI * 2);
        this.ctx!.fillStyle = '#FFFFFF';
        this.ctx!.fill();
        this.ctx!.strokeStyle = mainColor;
        this.ctx!.lineWidth = 1.5;
        this.ctx!.stroke();
      }
    });

    // 捏合虛線指示
    const thumbX = (1 - landmarks[4].x) * w;
    const thumbY = landmarks[4].y * h;
    const indexX = (1 - landmarks[8].x) * w;
    const indexY = landmarks[8].y * h;
    const midX = (thumbX + indexX) / 2;
    const midY = (thumbY + indexY) / 2;

    this.ctx.beginPath();
    this.ctx.setLineDash([4, 4]);
    this.ctx.moveTo(thumbX, thumbY);
    this.ctx.lineTo(indexX, indexY);
    this.ctx.strokeStyle = isPinching ? accentColor : '#CBD5E0';
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
    this.ctx.setLineDash([]);

    // 標籤徽章 (P1 / P2 浮空在指尖旁)
    this.ctx.fillStyle = mainColor;
    this.ctx.beginPath();
    this.ctx.roundRect(midX - 32, midY - 32, 64, 20, 10);
    this.ctx.fill();
    this.ctx.strokeStyle = '#FFFFFF';
    this.ctx.lineWidth = 1.5;
    this.ctx.stroke();

    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.font = 'bold 10px sans-serif';
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillText(isPinching ? `${label} 抓取` : label, midX, midY - 22);

    this.ctx.restore();
  }

  public getMultiState(): MultiHandGestureState {
    return this.currentMultiState;
  }
}
