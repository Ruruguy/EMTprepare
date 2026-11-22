import { MEDICAL_ITEMS, MedicalItem, getItemById } from './data/items';
import { Scenario, getRandomScenario, SCENARIOS } from './game/scenarioDeck';
import { sounds } from './game/soundEffects';
import { HandTracker, MultiHandGestureState, SingleHandState } from './tracking/handTracker';
import { ParticleSystem } from './game/physics';
import { EncyclopediaModal } from './ui/encyclopediaModal';

export type GameMode = '1p' | 'coop' | 'vs';

interface GrabState {
  item: MedicalItem;
  cardEl: HTMLElement;
}

class GameApp {
  // DOM 元件
  private hudRoundEl = document.getElementById('hud-round')!;
  private hudTimerEl = document.getElementById('hud-timer')!;
  private hudP1BoxEl = document.getElementById('hud-p1-box')!;
  private hudP2BoxEl = document.getElementById('hud-p2-box')!;
  private hudScoreP1El = document.getElementById('hud-score-p1')!;
  private hudScoreP2El = document.getElementById('hud-score-p2')!;
  private hudComboEl = document.getElementById('hud-combo')!;
  private playerModeTagEl = document.getElementById('player-mode-tag')!;
  private scenarioTitleEl = document.getElementById('scenario-title')!;
  private scenarioDescEl = document.getElementById('scenario-desc')!;
  private scenarioCategoryEl = document.getElementById('scenario-category')!;
  private scenarioUrgencyEl = document.getElementById('scenario-urgency')!;
  private scenarioPatientEl = document.getElementById('scenario-patient')!;
  private targetSlotsEl = document.getElementById('target-slots')!;
  private shelfEl = document.getElementById('equipment-shelf')!;
  private emsBagTargetEl = document.getElementById('ems-bag-target')!;
  private bagGlowEl = document.getElementById('bag-glow')!;
  private roundModalEl = document.getElementById('round-modal')!;

  // 模式專用容器元件
  private singleArenaEl = document.getElementById('single-arena-container')!;
  private vsArenaEl = document.getElementById('vs-arena-container')!;
  private p1BagTargetEl = document.getElementById('p1-bag-target')!;
  private p2BagTargetEl = document.getElementById('p2-bag-target')!;
  private p1BagGlowEl = document.getElementById('p1-bag-glow')!;
  private p2BagGlowEl = document.getElementById('p2-bag-glow')!;
  private p1TargetSlotsEl = document.getElementById('p1-target-slots')!;
  private p2TargetSlotsEl = document.getElementById('p2-target-slots')!;
  private vsScenarioTitleEl = document.getElementById('vs-scenario-title')!;
  private vsScenarioDescEl = document.getElementById('vs-scenario-desc')!;
  private vsScenarioCategoryEl = document.getElementById('vs-scenario-category')!;
  private vsScenarioUrgencyEl = document.getElementById('vs-scenario-urgency')!;
  private vsScenarioPatientEl = document.getElementById('vs-scenario-patient')!;

  // 游標元件 (P1, P2)
  private cursors = [
    {
      container: document.getElementById('gesture-cursor-0')!,
      ring: document.getElementById('cursor-ring-0')!
    },
    {
      container: document.getElementById('gesture-cursor-1')!,
      ring: document.getElementById('cursor-ring-1')!
    }
  ];

  // 幽靈拖曳元件 (P1 / Mouse 及 P2 獨立手勢拖曳)
  private draggedGhosts = [
    {
      ghost: document.getElementById('dragged-ghost')!,
      content: document.getElementById('ghost-content')!
    },
    {
      ghost: document.getElementById('dragged-ghost-1') || document.getElementById('dragged-ghost')!,
      content: document.getElementById('ghost-content-1') || document.getElementById('ghost-content')!
    }
  ];

  // 遊戲狀態
  private currentRound: number = 1;
  private maxRounds: number = 5;
  private p1Score: number = 0;
  private p2Score: number = 0;
  private combo: number = 0;
  private timer: number = 30; // 固定為 30 秒
  private timerInterval: any = null;
  private isRoundActive: boolean = false;
  private isPaused: boolean = false;
  private gameMode: GameMode = 'vs'; // 預設支援雙人競速對決 (VS Mode)
  private isMultiplayerMode: boolean = true; // 鏡頭手勢多手模式

  // 雙人競賽對決模式 (VS Mode) 回合專屬紀錄
  private firstGrabberMap: Map<string, 'P1' | 'P2'> = new Map();
  private p1Collected: Set<string> = new Set();
  private p2Collected: Set<string> = new Set();
  private finisherBonusAwarded: boolean = false;

  private currentScenario!: Scenario;
  private requiredItemsLeft: Set<string> = new Set();
  private playedScenarioIds: Set<string> = new Set();
  private shelfItems: MedicalItem[] = [];

  // 各玩家/手部抓取狀態 (Key: 0 為 P1, 1 為 P2, 'mouse' 為滑鼠/觸控)
  private activeGrabs: Map<number | string, GrabState> = new Map();
  private prevPinchStates: { [key: number]: boolean } = { 0: false, 1: false };

  // 模組實例
  private handTracker!: HandTracker;
  private particleSystem!: ParticleSystem;
  private encyclopediaModal!: EncyclopediaModal;
  private isCameraActive: boolean = false;
  private hasGameStarted: boolean = false;

  constructor() {
    this.initSystems();
    this.bindGlobalEvents();
    this.initPreGame();
  }

  private initSystems() {
    // 1. 特效粒子系統
    const particleCanvas = document.getElementById('particle-canvas') as HTMLCanvasElement;
    this.particleSystem = new ParticleSystem(particleCanvas);

    // 2. 40款救護耗材圖鑑
    this.encyclopediaModal = new EncyclopediaModal();

    // 3. 全螢幕視訊鏡頭與 MediaPipe 手勢偵測
    const videoEl = document.getElementById('webcam') as HTMLVideoElement;
    const overlayCanvas = document.getElementById('camera-overlay') as HTMLCanvasElement;

    this.handTracker = new HandTracker(videoEl, overlayCanvas);
    this.handTracker.setMultiplayerMode(this.isMultiplayerMode);
    this.handTracker.setOnStateChange((multiState: MultiHandGestureState) => this.onMultiHandUpdate(multiState));

    // 啟動鏡頭
    this.tryInitCamera();

    // 啟動主渲染循環
    this.mainRenderLoop();
  }

  private async tryInitCamera() {
    try {
      const success = await this.handTracker.start();
      if (success) {
        this.isCameraActive = true;
        this.updateCameraUI(true);
      } else {
        this.updateCameraUI(false);
      }
    } catch (e) {
      console.warn('Camera fallback to touch/mouse mode.');
      this.updateCameraUI(false);
    }
  }

  private updateCameraUI(active: boolean) {
    const camText = document.getElementById('cam-text');
    const camIcon = document.getElementById('cam-icon');
    if (active) {
      camText && (camText.textContent = '鏡頭就緒');
      camIcon && (camIcon.textContent = '📹');
    } else {
      camText && (camText.textContent = '滑鼠/觸控模式');
      camIcon && (camIcon.textContent = '🖱️');
    }
  }

  private bindGlobalEvents() {
    // 派遣指引／任務簡報按鈕 (若遊戲中則自動暫停避免流失時間)
    document.getElementById('btn-intro-guide')?.addEventListener('click', () => {
      if (this.isRoundActive && !this.isPaused) {
        this.pauseGame();
      }
      this.showIntroModal(this.hasGameStarted);
    });

    // 頂部暫停/繼續按鈕
    document.getElementById('btn-pause-toggle')?.addEventListener('click', () => {
      this.togglePause();
    });

    // START 立即出勤按鈕
    document.getElementById('btn-start-game')?.addEventListener('click', () => {
      if (!this.hasGameStarted) {
        this.onStartGameClicked();
      } else {
        this.hideIntroModal();
      }
    });

    // 派遣簡報關閉按鈕
    document.getElementById('btn-close-intro')?.addEventListener('click', () => {
      this.hideIntroModal();
    });

    // 派遣簡報內的查閱圖鑑按鈕
    document.getElementById('btn-intro-encyclopedia')?.addEventListener('click', () => {
      this.encyclopediaModal.show();
    });

    // 輕快挑戰音樂 (BGM) 開關按鈕 (預設常開)
    const bgmBtn = document.getElementById('btn-bgm-toggle');
    const bgmIcon = document.getElementById('bgm-icon');
    const bgmText = document.getElementById('bgm-text');
    bgmBtn?.addEventListener('click', () => {
      const isMuted = !sounds.toggleBgm();
      if (bgmIcon && bgmText && bgmBtn) {
        if (!isMuted) {
          bgmIcon.textContent = '🎵';
          bgmText.textContent = '音樂開';
          bgmBtn.className = 'px-2.5 py-1.5 rounded-xl border-2 border-[#463529] bg-[#EB6A5B] text-xs font-black text-white hover:bg-[#D85344] transition-all flex items-center gap-1 shadow-[0_2px_0_#463529]';
        } else {
          bgmIcon.textContent = '🔇';
          bgmText.textContent = '音樂關';
          bgmBtn.className = 'px-2.5 py-1.5 rounded-xl border-2 border-[#463529] bg-[#E5D9C5] text-xs font-black text-[#7A6352] hover:bg-[#D5C7B2] transition-all flex items-center gap-1 shadow-[0_2px_0_#463529]';
        }
      }
    });

    // 圖鑑按鈕 (若遊戲中則自動暫停避免流失時間)
    document.getElementById('btn-encyclopedia')?.addEventListener('click', () => {
      if (this.isRoundActive && !this.isPaused) {
        this.pauseGame();
      }
      this.encyclopediaModal.show();
    });

    // 頂部模式切換按鈕 (1P 單人 -> 2P 合作 -> 2P 競速對決 循環切換)
    document.getElementById('btn-player-mode')?.addEventListener('click', () => {
      const nextMode: GameMode = this.gameMode === 'vs' ? '1p' : (this.gameMode === '1p' ? 'coop' : 'vs');
      this.setGameMode(nextMode);
    });

    // 派遣前言彈窗內的模式選擇按鈕組 (1P / Co-op / VS)
    const modeBtns = document.querySelectorAll('.mode-select-btn');
    modeBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const mode = btn.getAttribute('data-mode') as GameMode;
        if (mode) {
          this.setGameMode(mode);
        }
      });
    });

    // 鏡頭開關按鈕
    document.getElementById('btn-camera-toggle')?.addEventListener('click', () => {
      if (this.isCameraActive) {
        this.handTracker.stop();
        this.isCameraActive = false;
        this.updateCameraUI(false);
      } else {
        this.tryInitCamera();
      }
    });

    // 音效開關按鈕
    const soundBtn = document.getElementById('btn-sound-toggle');
    soundBtn?.addEventListener('click', () => {
      const isMuted = sounds.toggleMute();
      if (soundBtn) {
        soundBtn.textContent = isMuted ? '🔇' : '🔊';
        soundBtn.title = isMuted ? '已靜音' : '音效開啟';
      }
    });

    // 出勤題數選擇器 (3, 5, 10, 15, 30 題)
    const roundBtns = document.querySelectorAll('.round-select-btn');
    roundBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLButtonElement;
        const rounds = parseInt(target.getAttribute('data-rounds') || '5', 10);
        this.maxRounds = rounds;

        roundBtns.forEach((b) => {
          b.className = 'round-select-btn px-3 py-1.5 rounded-xl text-xs font-bold border border-[#D4C4A8] bg-[#F4EFE6] text-[#5C4D3C] hover:bg-[#E07A5F] hover:text-white transition-all shadow-sm';
        });
        target.className = 'round-select-btn px-3.5 py-1.5 rounded-xl text-xs font-black border-2 border-white bg-[#E07A5F] text-white shadow-md transition-all scale-105 active-round-btn';

        this.updateHUD();
        sounds.playGrab();
      });
    });

    // 回合結算下一關按鈕
    document.getElementById('modal-next-btn')?.addEventListener('click', () => {
      this.hideRoundModal();
      if (this.currentRound >= this.maxRounds) {
        this.showPodiumCeremony();
      } else {
        this.currentRound++;
        this.startRound();
      }
    });

    // 頒獎盛典重新開始按鈕
    document.getElementById('podium-restart-btn')?.addEventListener('click', () => {
      this.hidePodiumModal();
      this.startNewGame();
    });

    // 頒獎盛典開啟圖鑑按鈕
    document.getElementById('podium-encyclopedia-btn')?.addEventListener('click', () => {
      this.encyclopediaModal.show();
    });

    // 暫停彈窗「繼續出勤」按鈕
    document.getElementById('btn-modal-resume')?.addEventListener('click', () => {
      this.resumeGame();
    });

    // 暫停彈窗「重啟本題出勤」按鈕
    document.getElementById('btn-pause-restart-round')?.addEventListener('click', () => {
      this.resumeGame();
      this.startRound();
    });

    // 暫停彈窗「查閱耗材圖鑑」按鈕
    document.getElementById('btn-pause-open-encyclopedia')?.addEventListener('click', () => {
      this.encyclopediaModal.show();
    });

    // 鍵盤快捷鍵：空白鍵 (Space) 或 P 鍵暫停/繼續，Esc 繼續
    window.addEventListener('keydown', (e) => {
      const activeTag = (document.activeElement?.tagName || '').toLowerCase();
      if (activeTag === 'input' || activeTag === 'textarea') return;

      if (e.code === 'Space' || e.key === 'p' || e.key === 'P') {
        e.preventDefault();
        this.togglePause();
      } else if (e.key === 'Escape' && this.isPaused) {
        e.preventDefault();
        this.resumeGame();
      }
    });

    // 滑鼠與觸控事件
    window.addEventListener('pointermove', (e) => {
      if (this.handTracker.getMultiState().handsCount === 0) {
        const c0 = this.cursors[0];
        c0.container.style.opacity = '1';
        c0.container.style.left = `${e.clientX}px`;
        c0.container.style.top = `${e.clientY}px`;

        const activeOwner = this.activeGrabs.has('mouse') ? 'mouse' : (this.activeGrabs.has('P1') ? 'P1' : (this.activeGrabs.has('P2') ? 'P2' : null));
        if (activeOwner) {
          this.updateGhostPosition(e.clientX, e.clientY, activeOwner);
          this.checkBagHover(e.clientX, e.clientY, activeOwner);
        }
      }
    });

    window.addEventListener('pointerup', (e) => {
      if (this.activeGrabs.has('mouse')) {
        this.evaluateDrop('mouse', e.clientX, e.clientY);
      } else if (this.activeGrabs.has('P1')) {
        this.evaluateDrop('P1', e.clientX, e.clientY);
      } else if (this.activeGrabs.has('P2')) {
        this.evaluateDrop('P2', e.clientX, e.clientY);
      }
    });
  }

  // 設定遊玩模式 (1P 單人 / 2P 合作 / 2P 競速對決)
  public setGameMode(mode: GameMode) {
    this.gameMode = mode;
    this.isMultiplayerMode = (mode !== '1p');
    if (this.handTracker) {
      this.handTracker.setMultiplayerMode(this.isMultiplayerMode);
    }

    const modeText = document.getElementById('mode-text');
    const cursorLabel1 = document.getElementById('cursor-label-1');

    if (mode === 'vs') {
      this.playerModeTagEl.textContent = '雙人競速對決 (VS 15/10分)';
      this.playerModeTagEl.className = 'text-[10px] md:text-xs font-black px-2.5 py-0.5 rounded-full bg-[#EB6A5B] text-white border-2 border-[#463529] shadow-[0_1px_0_#463529]';
      if (modeText) modeText.textContent = '切為單人';
      this.hudP2BoxEl.classList.remove('hidden');
      if (cursorLabel1) {
        cursorLabel1.textContent = 'P2';
        cursorLabel1.className = 'absolute -top-6 text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#E07A5F] text-white shadow-md';
      }
      this.singleArenaEl.classList.add('hidden');
      this.vsArenaEl.classList.remove('hidden');
    } else if (mode === 'coop') {
      this.playerModeTagEl.textContent = '雙人同屏合作 (Co-op)';
      this.playerModeTagEl.className = 'text-[10px] md:text-xs font-black px-2.5 py-0.5 rounded-full bg-[#6BB2E2] text-white border-2 border-[#463529] shadow-[0_1px_0_#463529]';
      if (modeText) modeText.textContent = '切為競賽';
      this.hudP2BoxEl.classList.remove('hidden');
      if (cursorLabel1) {
        cursorLabel1.textContent = 'P2';
        cursorLabel1.className = 'absolute -top-6 text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#E07A5F] text-white shadow-md';
      }
      this.singleArenaEl.classList.remove('hidden');
      this.vsArenaEl.classList.add('hidden');
    } else {
      this.playerModeTagEl.textContent = '單人救護模式 (1P)';
      this.playerModeTagEl.className = 'text-[10px] md:text-xs font-black px-2.5 py-0.5 rounded-full bg-[#7CB69D] text-white border-2 border-[#463529] shadow-[0_1px_0_#463529]';
      if (modeText) modeText.textContent = '切為合作';
      this.hudP2BoxEl.classList.add('hidden');
      if (cursorLabel1) {
        cursorLabel1.textContent = 'P1';
        cursorLabel1.className = 'absolute -top-6 text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#3182CE] text-white shadow-md';
      }
      this.singleArenaEl.classList.remove('hidden');
      this.vsArenaEl.classList.add('hidden');
    }

    // 更新前言指引彈窗內的模式按鈕狀態
    const modeBtns = document.querySelectorAll('.mode-select-btn');
    modeBtns.forEach((btn) => {
      const m = btn.getAttribute('data-mode');
      if (m === mode) {
        btn.className = 'mode-select-btn px-4 py-1.5 rounded-xl text-xs font-black border-2 border-white bg-[#E07A5F] text-white shadow-md transition-all scale-105 active-mode-btn cursor-pointer';
      } else {
        btn.className = 'mode-select-btn px-3 py-1.5 rounded-xl text-xs font-bold border border-[#D4C4A8] bg-[#F4EFE6] text-[#5C4D3C] hover:bg-[#E07A5F] hover:text-white transition-all shadow-sm cursor-pointer';
      }
    });

    if (this.currentScenario) {
      this.renderScenarioCard();
      this.buildShelfItems();
      this.updateHUD();
    }
  }

  // 多手即時辨識更新 (單人模式雙手皆為 P1；雙人模式橫向排序 P1/P2)
  private onMultiHandUpdate(multiState: MultiHandGestureState) {
    const hands = multiState.hands;

    // 清除所有桌上卡片的磁吸懸停高亮
    const allCards = this.shelfEl.querySelectorAll('.table-item-card');
    allCards.forEach(c => c.classList.remove('is-hovered'));

    // 檢查是否有手懸停在桌上器材上方，提供磁吸預覽高亮反饋
    hands.forEach((h, idx) => {
      if (!h.isPinching) {
        const requestingPlayer: 'P1' | 'P2' = (!this.isMultiplayerMode || idx === 0) ? 'P1' : 'P2';
        const closest = this.findClosestShelfCard(h.cursorScreenX, h.cursorScreenY, 110, this.gameMode === 'vs' ? requestingPlayer : undefined);
        if (closest) closest.classList.add('is-hovered');
      }
    });

    [0, 1].forEach((idx) => {
      const cursorObj = this.cursors[idx];
      const hand: SingleHandState | undefined = hands[idx];

      if (hand) {
        cursorObj.container.style.opacity = '1';
        cursorObj.container.style.left = `${hand.cursorScreenX}px`;
        cursorObj.container.style.top = `${hand.cursorScreenY}px`;

        const isP1Hand = !this.isMultiplayerMode || idx === 0;
        const themeBorder = isP1Hand ? 'border-[#3182CE]' : 'border-[#E07A5F]';
        const themeBg = isP1Hand ? 'bg-[#3182CE]/20' : 'bg-[#E07A5F]/20';

        if (hand.isPinching) {
          cursorObj.ring.className = 'w-10 h-10 rounded-full border-2 border-orange-400 bg-orange-400/40 flex items-center justify-center scale-90 transition-all shadow-lg';
        } else {
          cursorObj.ring.className = `w-12 h-12 rounded-full border-2 ${themeBorder} ${themeBg} flex items-center justify-center scale-100 transition-all shadow-md`;
        }

        const wasPinching = this.prevPinchStates[idx] || false;
        if (hand.isPinching && !wasPinching) {
          this.checkPinchGrab(idx, hand.cursorScreenX, hand.cursorScreenY);
        } else if (!hand.isPinching && wasPinching) {
          this.checkPinchDrop(idx, hand.cursorScreenX, hand.cursorScreenY);
        }

        if (this.activeGrabs.has(idx)) {
          this.updateGhostPosition(hand.cursorScreenX, hand.cursorScreenY, idx);
          this.checkBagHover(hand.cursorScreenX, hand.cursorScreenY, idx);
        }

        this.prevPinchStates[idx] = hand.isPinching;
      } else {
        cursorObj.container.style.opacity = '0';
        if (this.activeGrabs.has(idx)) {
          this.cancelGrab(idx);
        }
        this.prevPinchStates[idx] = false;
      }
    });
  }

  // 尋找游標附近最接近的卡片 (強化磁吸預覽與大範圍精準抓取核心，VS模式自動跳過已領取的耗材)
  private findClosestShelfCard(x: number, y: number, maxRadius: number = 120, requestingPlayer?: 'P1' | 'P2'): HTMLElement | null {
    // 1. 先檢測游標位置當前的 DOM 元素，若直擊卡片則即時鎖定
    const elUnderPoint = document.elementFromPoint(x, y);
    if (elUnderPoint) {
      const directCard = elUnderPoint.closest('.table-item-card') as HTMLElement | null;
      if (directCard && !directCard.classList.contains('is-dragged')) {
        if (!requestingPlayer || !directCard.getAttribute('data-taken-by')?.includes(requestingPlayer)) {
          return directCard;
        }
      }
    }

    // 2. 廣域磁吸半徑搜尋 (支援大範圍手勢與卡片中心吸引)
    const cards = Array.from(this.shelfEl.querySelectorAll('.table-item-card')) as HTMLElement[];
    let minDistance = maxRadius;
    let closestCard: HTMLElement | null = null;

    cards.forEach(card => {
      if (card.classList.contains('is-dragged')) return;
      if (requestingPlayer && card.getAttribute('data-taken-by')?.includes(requestingPlayer)) return;

      const rect = card.getBoundingClientRect();

      // 計算游標與卡片邊界的距離
      const dx = Math.max(rect.left - x, 0, x - rect.right);
      const dy = Math.max(rect.top - y, 0, y - rect.bottom);
      const edgeDist = Math.hypot(dx, dy);

      // 計算與卡片中心點距離，提供更自然圓滑的磁吸偏好
      const centerX = (rect.left + rect.right) / 2;
      const centerY = (rect.top + rect.bottom) / 2;
      const centerDist = Math.hypot(centerX - x, centerY - y);

      // 綜合距離計算
      const dist = edgeDist === 0 ? 0 : Math.min(edgeDist, centerDist * 0.75);

      if (dist < minDistance) {
        minDistance = dist;
        closestCard = card;
      }
    });

    return closestCard;
  }

  // 抓取判定 (利用擴大磁吸半徑精準抓取最接近之器材卡片)
  private checkPinchGrab(handId: number | string, x: number, y: number) {
    if (!this.isRoundActive || this.isPaused || this.activeGrabs.has(handId)) return;
    if (!this.isMultiplayerMode && this.activeGrabs.size > 0) return;

    const player: 'P1' | 'P2' = (!this.isMultiplayerMode || handId === 0 || handId === 'P1') ? 'P1' : 'P2';
    // 擴大抓取判定半徑至 125px，即使手掌稍有偏移也能輕鬆吸附拿取
    const cardEl = this.findClosestShelfCard(x, y, 125, this.gameMode === 'vs' ? player : undefined);
    if (cardEl) {
      const itemId = cardEl.getAttribute('data-item-id');
      if (itemId) {
        const item = getItemById(itemId);
        if (item) {
          this.startGrab(handId, item, cardEl, x, y);
        }
      }
    }
  }

  // 開始抓取
  private startGrab(ownerId: number | string, item: MedicalItem, cardEl: HTMLElement, x: number, y: number) {
    this.activeGrabs.set(ownerId, { item, cardEl });
    cardEl.classList.add('is-dragged');

    const ghostIdx = (ownerId === 1 || ownerId === 'P2') ? 1 : 0;
    const ghost = this.draggedGhosts[ghostIdx];
    if (ghost) {
      ghost.content.innerHTML = item.svg;
      ghost.ghost.classList.remove('hidden');
    }
    this.updateGhostPosition(x, y, ownerId);

    sounds.playGrab();
    this.particleSystem.burst(x, y, true, 8);
  }

  // 投放判定
  private checkPinchDrop(handId: number | string, x: number, y: number) {
    if (this.activeGrabs.has(handId)) {
      this.evaluateDrop(handId, x, y);
    }
  }

  private updateGhostPosition(x: number, y: number, ownerId: number | string = 0) {
    const ghostIdx = (ownerId === 1 || ownerId === 'P2') ? 1 : 0;
    const ghost = this.draggedGhosts[ghostIdx];
    if (ghost) {
      ghost.ghost.style.left = `${x}px`;
      ghost.ghost.style.top = `${y}px`;
    }
  }

  private checkBagHover(x: number, y: number, ownerId?: number | string) {
    if (this.gameMode === 'vs') {
      const p1Rect = this.p1BagTargetEl.getBoundingClientRect();
      const p2Rect = this.p2BagTargetEl.getBoundingClientRect();
      const margin = 50;

      const isHoverP1 = (
        x >= p1Rect.left - margin &&
        x <= p1Rect.right + margin &&
        y >= p1Rect.top - margin &&
        y <= p1Rect.bottom + margin
      );

      const isHoverP2 = (
        x >= p2Rect.left - margin &&
        x <= p2Rect.right + margin &&
        y >= p2Rect.top - margin &&
        y <= p2Rect.bottom + margin
      );

      const p1Icon = document.getElementById('p1-bag-icon-container');
      const p2Icon = document.getElementById('p2-bag-icon-container');

      if (isHoverP1) {
        this.p1BagGlowEl.style.opacity = '1';
        this.p1BagTargetEl.style.borderColor = 'rgba(99, 179, 237, 0.95)';
        this.p1BagTargetEl.style.boxShadow = '0 0 35px rgba(49, 130, 206, 0.55)';
        if (p1Icon) p1Icon.style.transform = 'scale(1.18)';
      } else {
        this.p1BagGlowEl.style.opacity = '0';
        this.p1BagTargetEl.style.borderColor = '';
        this.p1BagTargetEl.style.boxShadow = '';
        if (p1Icon) p1Icon.style.transform = 'scale(1)';
      }

      if (isHoverP2) {
        this.p2BagGlowEl.style.opacity = '1';
        this.p2BagTargetEl.style.borderColor = 'rgba(246, 173, 85, 0.95)';
        this.p2BagTargetEl.style.boxShadow = '0 0 35px rgba(224, 122, 95, 0.55)';
        if (p2Icon) p2Icon.style.transform = 'scale(1.18)';
      } else {
        this.p2BagGlowEl.style.opacity = '0';
        this.p2BagTargetEl.style.borderColor = '';
        this.p2BagTargetEl.style.boxShadow = '';
        if (p2Icon) p2Icon.style.transform = 'scale(1)';
      }
      return;
    }

    // 1P 與 Co-op 單人急救包懸停檢測
    const bagRect = this.emsBagTargetEl.getBoundingClientRect();
    const margin = 50; // 整張題目卡外圍 50px 寬容感應邊界，整張卡片皆可感應
    const isHovering = (
      x >= bagRect.left - margin &&
      x <= bagRect.right + margin &&
      y >= bagRect.top - margin &&
      y <= bagRect.bottom + margin
    );

    const bagIcon = document.getElementById('bag-icon-container');

    if (isHovering) {
      this.bagGlowEl.style.opacity = '1';
      this.emsBagTargetEl.style.borderColor = 'rgba(251, 191, 36, 0.95)';
      this.emsBagTargetEl.style.boxShadow = '0 0 35px rgba(245, 158, 11, 0.45)';
      if (bagIcon) bagIcon.style.transform = 'scale(1.22)';
    } else {
      this.bagGlowEl.style.opacity = '0';
      this.emsBagTargetEl.style.borderColor = '';
      this.emsBagTargetEl.style.boxShadow = '';
      if (bagIcon) bagIcon.style.transform = 'scale(1)';
    }
  }

  private cancelGrab(ownerId: number | string) {
    const grab = this.activeGrabs.get(ownerId);
    if (grab) {
      grab.cardEl.classList.remove('is-dragged');
      grab.cardEl.classList.add('animate-wobble');
      setTimeout(() => grab.cardEl.classList.remove('animate-wobble'), 400);
      this.activeGrabs.delete(ownerId);
    }

    const ghostIdx = (ownerId === 1 || ownerId === 'P2') ? 1 : 0;
    this.draggedGhosts[ghostIdx]?.ghost.classList.add('hidden');

    if (this.gameMode === 'vs') {
      this.p1BagGlowEl.style.opacity = '0';
      this.p2BagGlowEl.style.opacity = '0';
      this.p1BagTargetEl.style.borderColor = '';
      this.p2BagTargetEl.style.borderColor = '';
      this.p1BagTargetEl.style.boxShadow = '';
      this.p2BagTargetEl.style.boxShadow = '';
      const p1Icon = document.getElementById('p1-bag-icon-container');
      const p2Icon = document.getElementById('p2-bag-icon-container');
      if (p1Icon) p1Icon.style.transform = 'scale(1)';
      if (p2Icon) p2Icon.style.transform = 'scale(1)';
    } else {
      this.bagGlowEl.style.opacity = '0';
      this.emsBagTargetEl.style.borderColor = '';
      this.emsBagTargetEl.style.boxShadow = '';
      const bagIcon = document.getElementById('bag-icon-container');
      if (bagIcon) bagIcon.style.transform = 'scale(1)';
    }
  }

  // 結算投放進急救包
  private evaluateDrop(ownerId: number | string, x: number, y: number) {
    const grab = this.activeGrabs.get(ownerId);
    if (!grab) return;

    if (this.gameMode === 'vs') {
      const p1Rect = this.p1BagTargetEl.getBoundingClientRect();
      const p2Rect = this.p2BagTargetEl.getBoundingClientRect();
      const margin = 50;

      const isInsideP1 = (
        x >= p1Rect.left - margin &&
        x <= p1Rect.right + margin &&
        y >= p1Rect.top - margin &&
        y <= p1Rect.bottom + margin
      );

      const isInsideP2 = (
        x >= p2Rect.left - margin &&
        x <= p2Rect.right + margin &&
        y >= p2Rect.top - margin &&
        y <= p2Rect.bottom + margin
      );

      // 判定投放所屬玩家
      let player: 'P1' | 'P2' = (ownerId === 1 || ownerId === 'P2') ? 'P2' : 'P1';
      if (ownerId === 'mouse') {
        if (isInsideP1) player = 'P1';
        else if (isInsideP2) player = 'P2';
        else {
          this.cancelGrab(ownerId);
          return;
        }
      }

      // 防止誤投對手急救包
      if (player === 'P1' && isInsideP2) {
        this.showFloatingScore(x, y, '⚠️ 這是 P2 救護包！請放左側藍色包', '#FC8181');
        sounds.playWrong();
        this.cancelGrab(ownerId);
        return;
      }
      if (player === 'P2' && isInsideP1) {
        this.showFloatingScore(x, y, '⚠️ 這是 P1 救護包！請放右側橘色包', '#FC8181');
        sounds.playWrong();
        this.cancelGrab(ownerId);
        return;
      }

      const isInsideOwnBag = (player === 'P1' && isInsideP1) || (player === 'P2' && isInsideP2);

      if (isInsideOwnBag) {
        this.handleVsItemDropIntoBag(player, grab.item, grab.cardEl, x, y);
        this.activeGrabs.delete(ownerId);
        const ghostIdx = (ownerId === 1 || ownerId === 'P2') ? 1 : 0;
        this.draggedGhosts[ghostIdx]?.ghost.classList.add('hidden');
        this.p1BagGlowEl.style.opacity = '0';
        this.p2BagGlowEl.style.opacity = '0';
        this.p1BagTargetEl.style.borderColor = '';
        this.p2BagTargetEl.style.borderColor = '';
        this.p1BagTargetEl.style.boxShadow = '';
        this.p2BagTargetEl.style.boxShadow = '';
      } else {
        this.cancelGrab(ownerId);
      }
      return;
    }

    // 1P 與 Co-op 模式原有投放判定
    const bagRect = this.emsBagTargetEl.getBoundingClientRect();
    const margin = 50; // 整張題目卡外圍 50px 寬容投放邊界
    const isInsideBag = (
      x >= bagRect.left - margin &&
      x <= bagRect.right + margin &&
      y >= bagRect.top - margin &&
      y <= bagRect.bottom + margin
    );

    const bagIcon = document.getElementById('bag-icon-container');

    if (isInsideBag) {
      this.handleItemDropIntoBag(ownerId, grab.item, grab.cardEl, x, y);
      this.activeGrabs.delete(ownerId);
      const ghostIdx = (ownerId === 1 || ownerId === 'P2') ? 1 : 0;
      this.draggedGhosts[ghostIdx]?.ghost.classList.add('hidden');
      this.bagGlowEl.style.opacity = '0';
      this.emsBagTargetEl.style.borderColor = '';
      this.emsBagTargetEl.style.boxShadow = '';
      if (bagIcon) bagIcon.style.transform = 'scale(1)';
    } else {
      this.cancelGrab(ownerId);
    }
  }

  // 雙人競速對決模式 (VS Mode) 專屬投放與計分規則：
  // 1. 同一器材首位拿取放入得 15 分，次位拿取放入得 10 分
  // 2. 不能是同一位玩家重複拿取同一個器材
  // 3. 率先收齊所有器材者額外榮獲 +20 分完整收齊獎勵
  private handleVsItemDropIntoBag(player: 'P1' | 'P2', item: MedicalItem, cardEl: HTMLElement, x: number, y: number) {
    sounds.playDropInBag();

    const isCorrect = this.currentScenario.requiredItemIds.includes(item.id);

    if (isCorrect) {
      // 檢查此玩家是否已重複領取此器材
      const alreadyCollected = player === 'P1' ? this.p1Collected.has(item.id) : this.p2Collected.has(item.id);
      if (alreadyCollected) {
        sounds.playWrong();
        this.showFloatingScore(x, y, `⚠️ ${player} 已拿過此器材！不可重複領取`, '#FC8181');
        cardEl.classList.remove('is-dragged');
        cardEl.classList.add('animate-wobble');
        setTimeout(() => cardEl.classList.remove('animate-wobble'), 400);
        return;
      }

      // 搶先判定：同一器材首位放入者 15 分，次位放入者 10 分
      const isFirst = !this.firstGrabberMap.has(item.id);
      let itemScore = 0;
      if (isFirst) {
        this.firstGrabberMap.set(item.id, player);
        itemScore = 15;
        this.showFloatingScore(x, y, `+15 搶先！(${player})`, '#F6E05E');
      } else {
        itemScore = 10;
        this.showFloatingScore(x, y, `+10 次位 (${player})`, '#68D391');
      }

      if (player === 'P1') {
        this.p1Score += itemScore;
        this.p1Collected.add(item.id);
      } else {
        this.p2Score += itemScore;
        this.p2Collected.add(item.id);
      }

      sounds.playCorrect();
      this.particleSystem.burst(x, y, true, 36);

      // 急救包彈跳吞入動畫
      const bagIcon = document.getElementById(player === 'P1' ? 'p1-bag-icon-container' : 'p2-bag-icon-container');
      if (bagIcon) {
        bagIcon.classList.add('animate-swallow');
        setTimeout(() => bagIcon.classList.remove('animate-swallow'), 550);
      }

      // 更新玩家專屬需求插槽顯示
      this.markTargetSlotCollected(player, item.id, isFirst);

      // 更新卡片份數與已被領取標記
      const takenByStr = cardEl.getAttribute('data-taken-by') || '';
      const takenBySet = new Set(takenByStr.split(',').filter(Boolean));
      takenBySet.add(player);
      cardEl.setAttribute('data-taken-by', Array.from(takenBySet).join(','));

      let count = parseInt(cardEl.getAttribute('data-count') || '1', 10);
      count--;
      cardEl.setAttribute('data-count', count.toString());

      if (count <= 0) {
        // 兩份皆被兩位玩家領取完畢，在原位補充新卡片上桌
        this.replenishShelfCard(cardEl);
      } else {
        // 仍餘 1 份給另一位玩家拿取，移除雙層疊放陰影並更新角標為 x1 份
        cardEl.classList.remove('is-stacked', 'is-dragged');
        const badge = cardEl.querySelector('.card-stack-badge');
        if (badge) {
          badge.className = 'card-stack-badge badge-single';
          badge.textContent = 'x1 份';
        }
      }

      // 率先完整收齊獎勵 (+20 分)
      const totalRequired = this.currentScenario.requiredItemIds.length;
      const myCount = player === 'P1' ? this.p1Collected.size : this.p2Collected.size;
      if (myCount === totalRequired && !this.finisherBonusAwarded) {
        this.finisherBonusAwarded = true;
        const bonus = 20;
        if (player === 'P1') this.p1Score += bonus;
        else this.p2Score += bonus;
        this.showFloatingScore(x, y - 40, `🏆 ${player} 率先完備 +20分！`, '#ECC94B');
      }

      this.updateHUD();

      // 檢查本回合是否雙方皆收齊
      if (this.p1Collected.size === totalRequired && this.p2Collected.size === totalRequired) {
        setTimeout(() => {
          this.handleRoundVictory(20, this.p1Score >= this.p2Score ? 'P1' : 'P2');
        }, 800);
      }
    } else {
      // 拿錯器材！
      this.timer = Math.max(1, this.timer - 2);
      sounds.playWrong();
      this.particleSystem.burst(x, y, false, 24);
      this.showFloatingScore(x, y, '❌ 非本題急救耗材！', '#FC8181');

      const bagTarget = player === 'P1' ? this.p1BagTargetEl : this.p2BagTargetEl;
      bagTarget.classList.add('animate-reject');
      setTimeout(() => bagTarget.classList.remove('animate-reject'), 500);

      cardEl.classList.remove('is-dragged');
      cardEl.classList.add('animate-wobble');
      setTimeout(() => cardEl.classList.remove('animate-wobble'), 400);

      this.updateHUD();
    }
  }

  // 浮動得分提示文字 (如 +15 搶先！或 +10 次位)
  private showFloatingScore(x: number, y: number, text: string, color: string = '#F6E05E') {
    const el = document.createElement('div');
    el.className = 'fixed font-black text-sm sm:text-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] animate-float-score pointer-events-none z-50 whitespace-nowrap';
    el.style.left = `${Math.min(window.innerWidth - 60, Math.max(60, x))}px`;
    el.style.top = `${Math.min(window.innerHeight - 60, Math.max(60, y))}px`;
    el.style.color = color;
    el.textContent = text;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1200);
  }

  // 標記 VS 模式下玩家專屬插槽打勾或冠軍獎章
  private markTargetSlotCollected(player: 'P1' | 'P2', itemId: string, isFirst: boolean) {
    const prefix = player === 'P1' ? 'p1' : 'p2';
    const slotEl = document.querySelector(`[data-${prefix}-slot-id="${itemId}"]`);
    if (slotEl) {
      slotEl.className = `w-9 h-9 sm:w-11 sm:h-11 rounded-xl ${player === 'P1' ? 'bg-[#4F94C4]' : 'bg-[#EB6A5B]'} border-2 border-[#463529] flex items-center justify-center text-sm sm:text-base font-black text-white shadow-[0_2px_0_#463529] transform scale-105 transition-all`;
      slotEl.innerHTML = isFirst ? '🥇' : '✓';
    }
  }

  // 急救包吞入與計分核心邏輯 (拿取一樣得 10 分，收齊完整加 20 分)
  private handleItemDropIntoBag(ownerId: number | string, item: MedicalItem, cardEl: HTMLElement, x: number, y: number) {
    sounds.playDropInBag();

    // 題目卡微幅 Q 彈 + 嵌入急救包吞食動畫
    const bagIcon = document.getElementById('bag-icon-container');
    if (bagIcon) {
      bagIcon.classList.add('animate-swallow');
      setTimeout(() => bagIcon.classList.remove('animate-swallow'), 550);
    }
    this.emsBagTargetEl.classList.add('scale-[1.02]');
    setTimeout(() => this.emsBagTargetEl.classList.remove('scale-[1.02]'), 300);

    const isCorrect = this.requiredItemsLeft.has(item.id);

    if (isCorrect) {
      // 答對！
      this.requiredItemsLeft.delete(item.id);
      this.combo++;

      // 拿取一樣該玩家得 10 分
      const itemScore = 10;
      let finishingBonus = 0;

      // 判定得分歸屬玩家 (單人模式下所有操作皆為 P1 得分)
      const isP2 = this.isMultiplayerMode && (ownerId === 1 || ownerId === 'P2');
      if (isP2) {
        this.p2Score += itemScore;
      } else {
        this.p1Score += itemScore;
      }

      sounds.playCorrect();
      this.particleSystem.burst(x, y, true, 36);

      // 題目下方插槽打勾標記
      const slotEl = this.targetSlotsEl.querySelector(`[data-slot-item-id="${item.id}"]`);
      if (slotEl) {
        slotEl.className = 'w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#7CB69D] border-2 border-[#463529] flex items-center justify-center text-xl font-black text-white shadow-[0_2px_0_#463529] transform scale-110 transition-all';
        slotEl.innerHTML = '✓';
      }

      // 桌面上的器材被確定抓走，立即在原位補充新選項上桌！
      this.replenishShelfCard(cardEl);

      // 若該情境器材收齊完整，則多加 20 分！
      if (this.requiredItemsLeft.size === 0) {
        finishingBonus = 20;
        if (isP2) {
          this.p2Score += finishingBonus;
        } else {
          this.p1Score += finishingBonus;
        }
        this.updateHUD();
        this.handleRoundVictory(finishingBonus, isP2 ? 'P2' : 'P1');
      } else {
        this.updateHUD();
      }
    } else {
      // 拿錯器材！
      this.combo = 0;
      this.timer = Math.max(1, this.timer - 2);
      sounds.playWrong();
      this.particleSystem.burst(x, y, false, 24);

      // 救護包吐出震退與題目卡晃動
      const bagIcon = document.getElementById('bag-icon-container');
      if (bagIcon) {
        bagIcon.classList.add('animate-reject');
        setTimeout(() => bagIcon.classList.remove('animate-reject'), 500);
      }
      this.emsBagTargetEl.classList.add('animate-reject');
      setTimeout(() => this.emsBagTargetEl.classList.remove('animate-reject'), 500);

      // 耗材彈回桌上
      cardEl.classList.remove('is-dragged');
      cardEl.classList.add('animate-wobble');
      setTimeout(() => cardEl.classList.remove('animate-wobble'), 400);

      this.updateHUD();
    }
  }

  // 派遣前言引導與出勤準備
  private initPreGame() {
    this.currentScenario = getRandomScenario();
    this.timer = 30;
    this.requiredItemsLeft = new Set(this.currentScenario.requiredItemIds);
    this.firstGrabberMap.clear();
    this.p1Collected.clear();
    this.p2Collected.clear();
    this.finisherBonusAwarded = false;
    this.setGameMode(this.gameMode);
    this.isRoundActive = false;
  }

  // 點擊 START 開始出勤
  private onStartGameClicked() {
    this.hasGameStarted = true;
    this.isPaused = false;
    this.updatePauseButtonUI(false);
    this.hidePauseModal();
    sounds.playDispatchAlarm();
    sounds.startBgm(); // 啟動輕快挑戰背景音樂
    this.hideIntroModal();
    this.startNewGame();
  }

  public showIntroModal(isGameRunning: boolean = false) {
    const modal = document.getElementById('dispatch-intro-modal');
    if (!modal) return;
    modal.classList.remove('hidden');
    setTimeout(() => {
      modal.classList.remove('opacity-0', 'pointer-events-none');
    }, 10);

    const startBtn = document.getElementById('btn-start-game');
    if (startBtn) {
      if (isGameRunning) {
        startBtn.innerHTML = `
          <span class="text-2xl sm:text-3xl animate-bounce">🚑</span>
          <span class="tracking-wide">➔ 繼續救護出勤任務</span>
        `;
      } else {
        startBtn.innerHTML = `
          <span class="text-2xl sm:text-3xl animate-bounce">🚑</span>
          <span class="tracking-wide">START 立即出勤</span>
          <span class="text-lg sm:text-xl transform group-hover:translate-x-2 transition-transform">➔</span>
        `;
      }
    }
  }

  public hideIntroModal() {
    const modal = document.getElementById('dispatch-intro-modal');
    if (!modal) return;
    modal.classList.add('opacity-0', 'pointer-events-none');
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 500);
  }

  private startNewGame() {
    this.currentRound = 1;
    this.p1Score = 0;
    this.p2Score = 0;
    this.combo = 0;
    this.playedScenarioIds.clear();
    this.startRound();
  }

  private startRound() {
    this.isRoundActive = true;
    this.isPaused = false;
    this.updatePauseButtonUI(false);
    this.hidePauseModal();
    if (this.playedScenarioIds.size >= SCENARIOS.length) {
      this.playedScenarioIds.clear();
    }
    this.currentScenario = getRandomScenario([...this.playedScenarioIds]);
    this.playedScenarioIds.add(this.currentScenario.id);
    this.timer = 30; // 固定為 30 秒倒數
    this.requiredItemsLeft = new Set(this.currentScenario.requiredItemIds);
    this.firstGrabberMap.clear();
    this.p1Collected.clear();
    this.p2Collected.clear();
    this.finisherBonusAwarded = false;

    this.renderScenarioCard();
    this.buildShelfItems();

    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => this.onTimerTick(), 1000);

    this.updateHUD();
  }

  private onTimerTick() {
    if (!this.isRoundActive || this.isPaused) return;
    this.timer--;

    if (this.timer <= 5 && this.timer > 0) {
      sounds.playTick();
      this.hudTimerEl.classList.add('animate-ping');
      setTimeout(() => this.hudTimerEl.classList.remove('animate-ping'), 300);
    }

    if (this.timer <= 0) {
      this.timer = 0;
      this.handleRoundTimeout();
    }

    this.updateHUD();
  }

  // 回合勝利過關結算 (拿取完整多加 20 分)
  private handleRoundVictory(finishingBonus: number, finisher: string) {
    this.isRoundActive = false;
    clearInterval(this.timerInterval);

    sounds.playRoundWin();
    this.particleSystem.burst(window.innerWidth / 2, window.innerHeight / 2, true, 64);

    const totalScore = this.p1Score + this.p2Score;

    document.getElementById('modal-banner')!.innerHTML = '🏆';
    document.getElementById('modal-banner')!.className = 'w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center text-3xl border-2 border-[#383531] bg-[#48BB78] text-white shadow-lg';
    document.getElementById('modal-title')!.textContent = '出勤處置完美收齊！';
    document.getElementById('modal-subtitle')!.textContent = `第 ${this.currentRound} 回合・由 ${finisher} 完成最終收齊`;

    const breakdownEl = document.getElementById('modal-scores-breakdown')!;
    if (this.gameMode === 'vs') {
      const p1Firsts = Array.from(this.firstGrabberMap.values()).filter(p => p === 'P1').length;
      const p2Firsts = Array.from(this.firstGrabberMap.values()).filter(p => p === 'P2').length;
      breakdownEl.innerHTML = `
        <div class="flex justify-between font-bold text-[#3182CE]">
          <span>P1 救護員（左側・藍）得分：</span>
          <span class="text-sm font-black">${this.p1Score} 分 (首位搶得 ${p1Firsts} 項)</span>
        </div>
        <div class="flex justify-between font-bold text-[#E07A5F]">
          <span>P2 救護員（右側・橘）得分：</span>
          <span class="text-sm font-black">${this.p2Score} 分 (首位搶得 ${p2Firsts} 項)</span>
        </div>
      `;
    } else if (this.isMultiplayerMode) {
      breakdownEl.innerHTML = `
        <div class="flex justify-between font-bold text-[#3182CE]">
          <span>P1 救護員（藍）累計：</span>
          <span class="text-sm font-black">${this.p1Score} 分</span>
        </div>
        <div class="flex justify-between font-bold text-[#E07A5F]">
          <span>P2 救護員（橘）累計：</span>
          <span class="text-sm font-black">${this.p2Score} 分</span>
        </div>
      `;
    } else {
      breakdownEl.innerHTML = `
        <div class="flex justify-between font-bold text-[#3182CE]">
          <span>P1 救護員處置得分：</span>
          <span class="text-sm font-black">${this.p1Score} 分</span>
        </div>
      `;
    }

    document.getElementById('modal-score-bonus')!.textContent = `+${finishingBonus} 分 (${finisher} 獲得)`;
    document.getElementById('modal-score-total')!.textContent = `${totalScore} 分`;

    document.getElementById('modal-rationale')!.textContent = this.currentScenario.rationale;
    document.getElementById('modal-tip')!.textContent = this.currentScenario.tip;

    this.showRoundModal();
  }

  private handleRoundTimeout() {
    this.isRoundActive = false;
    clearInterval(this.timerInterval);

    sounds.playWrong();
    this.particleSystem.burst(window.innerWidth / 2, window.innerHeight / 2, false, 40);

    const totalScore = this.p1Score + this.p2Score;

    document.getElementById('modal-banner')!.innerHTML = '⏳';
    document.getElementById('modal-banner')!.className = 'w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center text-3xl border-2 border-[#383531] bg-[#E07A5F] text-white shadow-lg';
    document.getElementById('modal-title')!.textContent = '30秒出勤時間耗盡！';
    document.getElementById('modal-subtitle')!.textContent = '緊急狀況刻不容緩，請再接再厲！';

    const breakdownEl = document.getElementById('modal-scores-breakdown')!;
    if (this.gameMode === 'vs') {
      const p1Firsts = Array.from(this.firstGrabberMap.values()).filter(p => p === 'P1').length;
      const p2Firsts = Array.from(this.firstGrabberMap.values()).filter(p => p === 'P2').length;
      breakdownEl.innerHTML = `
        <div class="flex justify-between font-bold text-[#3182CE]">
          <span>P1 救護員（左側・藍）：</span>
          <span class="text-sm font-black">${this.p1Score} 分 (首位搶得 ${p1Firsts} 項)</span>
        </div>
        <div class="flex justify-between font-bold text-[#E07A5F]">
          <span>P2 救護員（右側・橘）：</span>
          <span class="text-sm font-black">${this.p2Score} 分 (首位搶得 ${p2Firsts} 項)</span>
        </div>
      `;
    } else if (this.isMultiplayerMode) {
      breakdownEl.innerHTML = `
        <div class="flex justify-between font-bold text-[#3182CE]">
          <span>P1 救護員：</span>
          <span>${this.p1Score} 分</span>
        </div>
        <div class="flex justify-between font-bold text-[#E07A5F]">
          <span>P2 救護員：</span>
          <span>${this.p2Score} 分</span>
        </div>
      `;
    } else {
      breakdownEl.innerHTML = `
        <div class="flex justify-between font-bold text-[#3182CE]">
          <span>P1 救護員得分：</span>
          <span>${this.p1Score} 分</span>
        </div>
      `;
    }

    document.getElementById('modal-score-bonus')!.textContent = '+0 分 (未完整收齊)';
    document.getElementById('modal-score-total')!.textContent = `${totalScore} 分`;

    document.getElementById('modal-rationale')!.textContent = this.currentScenario.rationale;
    document.getElementById('modal-tip')!.textContent = this.currentScenario.tip;

    this.showRoundModal();
  }

  private showRoundModal() {
    this.roundModalEl.classList.remove('hidden');
    setTimeout(() => this.roundModalEl.classList.remove('opacity-0'), 10);
  }

  private hideRoundModal() {
    this.roundModalEl.classList.add('opacity-0');
    setTimeout(() => this.roundModalEl.classList.add('hidden'), 300);
  }

  // 顯示大會總結算頒獎盛典 (Championship Podium Ceremony)
  private showPodiumCeremony() {
    this.isRoundActive = false;
    clearInterval(this.timerInterval);

    sounds.playRoundWin();
    // 綻放連續五彩勝利紙花煙火
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        const x = window.innerWidth * (0.2 + 0.6 * Math.random());
        const y = window.innerHeight * (0.2 + 0.4 * Math.random());
        this.particleSystem.burst(x, y, true, 80);
      }, i * 350);
    }

    const podiumModal = document.getElementById('podium-modal');
    if (!podiumModal) return;

    const titleEl = document.getElementById('podium-title')!;
    const subtitleEl = document.getElementById('podium-subtitle')!;
    const stageEl = document.getElementById('podium-stage')!;
    const statsEl = document.getElementById('podium-stats')!;

    const totalScore = this.p1Score + this.p2Score;

    if (this.isMultiplayerMode) {
      const isP1Win = this.p1Score > this.p2Score;
      const isTie = this.p1Score === this.p2Score;

      if (isTie) {
        titleEl.textContent = '雙人同心！榮獲最佳神級救護搭檔 MVP！';
        subtitleEl.textContent = `共出勤 ${this.maxRounds} 趟緊急任務，兩位救護員以平手神配合守護市民！`;
      } else {
        const winner = isP1Win ? 'P1 救護員（藍色）' : 'P2 救護員（橘色）';
        titleEl.textContent = `🎉 恭喜 ${winner} 榮登冠軍 MVP！`;
        subtitleEl.textContent = `分秒必爭！在 ${this.maxRounds} 趟隨機出勤中脫穎而出，精準收齊急救器材！`;
      }

      // 雙人頒獎台
      const p1PodiumRank = isTie ? 1 : (isP1Win ? 1 : 2);
      const p2PodiumRank = isTie ? 1 : (isP1Win ? 2 : 1);

      stageEl.innerHTML = `
        <!-- P1 救護員頒獎位 -->
        <div class="flex-1 flex flex-col items-center">
          <div class="text-3xl mb-1.5 ${p1PodiumRank === 1 ? 'animate-bounce' : ''}">${p1PodiumRank === 1 ? '🥇' : '🥈'}</div>
          <div class="text-xs font-black text-[#3182CE] bg-blue-100 px-3 py-1 rounded-full border border-blue-300 mb-1">
            P1 救護員
          </div>
          <div class="text-lg font-black text-[#2D3748] mb-2">${this.p1Score} 分</div>
          <div class="w-full ${p1PodiumRank === 1 ? 'h-32 bg-gradient-to-t from-blue-500 to-blue-400' : 'h-24 bg-gradient-to-t from-blue-300 to-blue-200'} rounded-t-2xl border-2 border-[#383531] flex flex-col items-center justify-center text-white shadow-md">
            <span class="text-2xl font-black">${p1PodiumRank === 1 ? 'CHAMPION' : '2ND'}</span>
            <span class="text-[10px] font-bold opacity-90">${p1PodiumRank === 1 ? '冠軍 MVP' : '卓越救護員'}</span>
          </div>
        </div>

        <!-- P2 救護員頒獎位 -->
        <div class="flex-1 flex flex-col items-center">
          <div class="text-3xl mb-1.5 ${p2PodiumRank === 1 ? 'animate-bounce' : ''}">${p2PodiumRank === 1 ? '🥇' : '🥈'}</div>
          <div class="text-xs font-black text-[#E07A5F] bg-orange-100 px-3 py-1 rounded-full border border-orange-300 mb-1">
            P2 救護員
          </div>
          <div class="text-lg font-black text-[#2D3748] mb-2">${this.p2Score} 分</div>
          <div class="w-full ${p2PodiumRank === 1 ? 'h-32 bg-gradient-to-t from-orange-500 to-orange-400' : 'h-24 bg-gradient-to-t from-orange-300 to-orange-200'} rounded-t-2xl border-2 border-[#383531] flex flex-col items-center justify-center text-white shadow-md">
            <span class="text-2xl font-black">${p2PodiumRank === 1 ? 'CHAMPION' : '2ND'}</span>
            <span class="text-[10px] font-bold opacity-90">${p2PodiumRank === 1 ? '冠軍 MVP' : '卓越救護員'}</span>
          </div>
        </div>
      `;
    } else {
      // 單人榮譽勳章台
      let rankBadge = '🎖️ S級 首席高級救護技術員 (EMT-P)';
      if (this.p1Score < 30) rankBadge = '🔰 B級 初級救護技術員 (EMT-1)';
      else if (this.p1Score < 60) rankBadge = '🥈 A級 中級救護技術員 (EMT-2)';

      titleEl.textContent = '🌟 出勤任務圓滿完成！';
      subtitleEl.textContent = `成功完成 ${this.maxRounds} 趟緊急出勤，榮獲最高醫療榮譽評價！`;

      stageEl.innerHTML = `
        <div class="w-full flex flex-col items-center py-2">
          <div class="text-4xl mb-2 animate-bounce">🏆</div>
          <div class="text-sm font-black text-[#B45309] bg-amber-100 px-4 py-1.5 rounded-full border border-amber-300 mb-2">
            ${rankBadge}
          </div>
          <div class="text-3xl font-black text-[#E07A5F] mb-3">${this.p1Score} <span class="text-sm text-[#718096]">總得分</span></div>
          <div class="w-48 h-20 bg-gradient-to-t from-[#E07A5F] to-[#F4A261] rounded-t-2xl border-2 border-[#383531] flex flex-col items-center justify-center text-white shadow-md">
            <span class="text-lg font-black tracking-widest">MASTER EMT</span>
            <span class="text-[11px] opacity-90">急救耗材精通大師</span>
          </div>
        </div>
      `;
    }

    // 數據統計網格
    statsEl.innerHTML = `
      <div class="p-2 bg-white rounded-xl border border-[#D4C4A8]/40 shadow-sm">
        <div class="text-[#718096] text-[10px] font-bold">挑戰出勤題數</div>
        <div class="text-base font-black text-[#2D3748] mt-0.5">${this.maxRounds} 趟</div>
      </div>
      <div class="p-2 bg-white rounded-xl border border-[#D4C4A8]/40 shadow-sm">
        <div class="text-[#718096] text-[10px] font-bold">團隊累計總分</div>
        <div class="text-base font-black text-[#C53030] mt-0.5">${totalScore} 分</div>
      </div>
      <div class="p-2 bg-white rounded-xl border border-[#D4C4A8]/40 shadow-sm">
        <div class="text-[#718096] text-[10px] font-bold">耗材精準收齊率</div>
        <div class="text-base font-black text-[#38A169] mt-0.5">100%</div>
      </div>
    `;

    podiumModal.classList.remove('hidden');
    setTimeout(() => {
      podiumModal.classList.remove('opacity-0');
    }, 10);
  }

  private hidePodiumModal() {
    const podiumModal = document.getElementById('podium-modal');
    if (!podiumModal) return;
    podiumModal.classList.add('opacity-0');
    setTimeout(() => {
      podiumModal.classList.add('hidden');
    }, 500);
  }

  private renderScenarioCard() {
    this.scenarioTitleEl.textContent = this.currentScenario.title;
    this.scenarioDescEl.textContent = this.currentScenario.description;
    this.scenarioCategoryEl.textContent = this.currentScenario.category;
    this.scenarioPatientEl.textContent = this.currentScenario.patient;

    this.targetSlotsEl.innerHTML = this.currentScenario.requiredItemIds.map(id => {
      const item = getItemById(id);
      return `
        <div data-slot-item-id="${id}" class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#FFFDF9] border-2 border-[#463529] p-1.5 flex items-center justify-center shadow-[0_2px_0_#D5C7B2] transition-all" title="${item?.name}">
          ${item ? item.svg : '？'}
        </div>
      `;
    }).join('');

    // VS 模式雙人簡報與插槽更新
    if (this.vsScenarioTitleEl) this.vsScenarioTitleEl.textContent = this.currentScenario.title;
    if (this.vsScenarioDescEl) this.vsScenarioDescEl.textContent = this.currentScenario.description;
    if (this.vsScenarioCategoryEl) this.vsScenarioCategoryEl.textContent = this.currentScenario.category;
    if (this.vsScenarioPatientEl) this.vsScenarioPatientEl.textContent = this.currentScenario.patient;

    if (this.p1TargetSlotsEl) {
      this.p1TargetSlotsEl.innerHTML = this.currentScenario.requiredItemIds.map(id => {
        const item = getItemById(id);
        return `
          <div data-p1-slot-id="${id}" class="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#FFFDF9] border-2 border-[#463529] p-1 flex items-center justify-center shadow-[0_2px_0_#4F94C4] transition-all" title="${item?.name}">
            ${item ? item.svg : '？'}
          </div>
        `;
      }).join('');
    }

    if (this.p2TargetSlotsEl) {
      this.p2TargetSlotsEl.innerHTML = this.currentScenario.requiredItemIds.map(id => {
        const item = getItemById(id);
        return `
          <div data-p2-slot-id="${id}" class="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#FFFDF9] border-2 border-[#463529] p-1 flex items-center justify-center shadow-[0_2px_0_#EB6A5B] transition-all" title="${item?.name}">
            ${item ? item.svg : '？'}
          </div>
        `;
      }).join('');
    }
  }

  // 建立單張桌上器材卡片 DOM (VS 模式支援雙份上下疊放與份數角標)
  private createCardElement(item: MedicalItem, initialCount: number = 1): HTMLElement {
    const card = document.createElement('div');
    card.setAttribute('data-item-id', item.id);
    card.setAttribute('data-count', initialCount.toString());
    card.setAttribute('data-taken-by', '');

    const isStacked = this.gameMode === 'vs' && initialCount > 1;
    card.className = `table-item-card w-20 h-28 sm:w-24 sm:h-32 flex flex-col items-center justify-between p-1 transition-all duration-300 ${isStacked ? 'is-stacked' : ''}`;

    const badgeHtml = this.gameMode === 'vs'
      ? `<span class="card-stack-badge ${initialCount > 1 ? 'badge-double' : 'badge-single'}">${initialCount > 1 ? 'x2 份' : 'x1 份'}</span>`
      : '';

    card.innerHTML = `
      ${badgeHtml}
      <!-- 去背 SVG 圖形 -->
      <div class="table-svg-wrapper w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center pointer-events-none">
        ${item.svg}
      </div>
      <!-- 下方器材名稱標籤 (日式淺奶茶色木紋藥籤，大字體清晰可見) -->
      <div class="item-name-tag text-xs sm:text-sm font-extrabold px-2.5 py-1 rounded-xl mt-1 text-center truncate max-w-full pointer-events-none">
        ${item.name}
      </div>
    `;

    // 支援滑鼠/觸控拖曳
    card.addEventListener('pointerdown', (e: any) => {
      if (this.gameMode === 'vs') {
        const player: 'P1' | 'P2' = e.clientX < window.innerWidth / 2 ? 'P1' : 'P2';
        const takenBy = card.getAttribute('data-taken-by') || '';
        if (takenBy.includes(player)) {
          this.showFloatingScore(e.clientX, e.clientY, `⚠️ ${player} 已拿過此器材！`, '#FC8181');
          sounds.playWrong();
          return;
        }
        this.startGrab(player, item, card, e.clientX, e.clientY);
      } else {
        this.startGrab('mouse', item, card, e.clientX, e.clientY);
      }
    });

    return card;
  }

  // 在畫面下方的透視桌上擺放器材 (10 格：必定包含本題所有標準答案，其餘格子由剩餘器材庫隨機出現)
  private buildShelfItems() {
    // 1. 必定包含本題所需所有答案器材
    const requiredItems = this.currentScenario.requiredItemIds
      .map(id => getItemById(id))
      .filter((i): i is MedicalItem => i !== undefined);

    // 2. 扣除答案後的剩餘耗材庫
    const otherPool = MEDICAL_ITEMS.filter(i => !this.currentScenario.requiredItemIds.includes(i.id));

    // 3. 桌面固定容納 10 格，剩下的格子從剩餘耗材中隨機抽取填滿
    const totalSlots = 10;
    const distractorsNeeded = Math.max(0, totalSlots - requiredItems.length);
    const shuffledDistractors = [...otherPool].sort(() => Math.random() - 0.5).slice(0, distractorsNeeded);

    // 4. 將答案與隨機耗材混合打亂，擺放至桌上
    this.shelfItems = [...requiredItems, ...shuffledDistractors].sort(() => Math.random() - 0.5);

    const initialCount = this.gameMode === 'vs' ? 2 : 1;

    this.shelfEl.innerHTML = '';
    this.shelfItems.forEach(item => {
      const card = this.createCardElement(item, initialCount);
      this.shelfEl.appendChild(card);
    });
  }

  // 當桌上器材被抓走並確定投入急救包時，立即在原位補充一個新選項上桌
  private replenishShelfCard(oldCardEl: HTMLElement) {
    // 取得當前桌面上所有現存卡片的器材 ID (排除當前這張被拿走的)
    const currentOnTableIds = new Set(
      Array.from(this.shelfEl.querySelectorAll('.table-item-card'))
        .filter(c => c !== oldCardEl)
        .map(c => c.getAttribute('data-item-id'))
        .filter((id): id is string => id !== null)
    );

    // 優先檢查：本題是否還有未完成的正確答案不在桌上？（防呆優先補答案）
    const missingAnswers = this.currentScenario.requiredItemIds
      .filter(id => !currentOnTableIds.has(id))
      .map(id => getItemById(id))
      .filter((i): i is MedicalItem => i !== undefined);

    let nextItem: MedicalItem | undefined;

    if (missingAnswers.length > 0) {
      // 若有漏在桌外的答案，優先補上
      nextItem = missingAnswers[Math.floor(Math.random() * missingAnswers.length)];
    } else {
      // 否則從尚未出現在桌上的剩餘器材庫中隨機挑選一項補充
      const availablePool = MEDICAL_ITEMS.filter(i => !currentOnTableIds.has(i.id));
      if (availablePool.length > 0) {
        nextItem = availablePool[Math.floor(Math.random() * availablePool.length)];
      } else {
        // 全庫用盡時隨機自所有器材抽
        nextItem = MEDICAL_ITEMS[Math.floor(Math.random() * MEDICAL_ITEMS.length)];
      }
    }

    if (!nextItem) {
      oldCardEl.remove();
      return;
    }

    // 舊卡片縮小淡出
    oldCardEl.style.transform = 'scale(0)';
    oldCardEl.style.opacity = '0';

    setTimeout(() => {
      const initialCount = this.gameMode === 'vs' ? 2 : 1;
      const newCard = this.createCardElement(nextItem!, initialCount);
      newCard.style.transform = 'scale(0)';
      newCard.style.opacity = '0';

      if (oldCardEl.parentNode) {
        oldCardEl.parentNode.replaceChild(newCard, oldCardEl);
      } else {
        this.shelfEl.appendChild(newCard);
      }

      // 新卡片就位並優雅彈跳出現 (Pop-in Animation)
      requestAnimationFrame(() => {
        newCard.style.transform = 'scale(1)';
        newCard.style.opacity = '1';
        newCard.classList.add('animate-wobble');
        setTimeout(() => newCard.classList.remove('animate-wobble'), 400);
      });
    }, 200);
  }

  // 更新各玩家計分欄與 HUD
  private updateHUD() {
    this.hudRoundEl.textContent = `${this.currentRound}/${this.maxRounds}`;
    this.hudTimerEl.textContent = `${this.timer}s`;
    this.hudScoreP1El.textContent = `${this.p1Score} 分`;
    this.hudScoreP2El.textContent = `${this.p2Score} 分`;
    this.hudComboEl.textContent = `x${this.combo}`;

    const p1VsScore = document.getElementById('p1-vs-score-tag');
    const p2VsScore = document.getElementById('p2-vs-score-tag');
    if (p1VsScore) p1VsScore.textContent = `${this.p1Score} 分`;
    if (p2VsScore) p2VsScore.textContent = `${this.p2Score} 分`;
  }

  // ================= 暫停與繼續邏輯 =================
  public togglePause() {
    if (!this.hasGameStarted || !this.isRoundActive) return;
    if (this.isPaused) {
      this.resumeGame();
    } else {
      this.pauseGame();
    }
  }

  public pauseGame() {
    if (!this.hasGameStarted || !this.isRoundActive || this.isPaused) return;
    this.isPaused = true;
    this.updatePauseButtonUI(true);
    this.showPauseModal();
    sounds.playPause();
    sounds.pauseBgm();
  }

  public resumeGame() {
    if (!this.isPaused) return;
    this.isPaused = false;
    this.updatePauseButtonUI(false);
    this.hidePauseModal();
    sounds.playResume();
    sounds.resumeBgm();
  }

  public updatePauseButtonUI(isPaused: boolean) {
    const pauseIcon = document.getElementById('pause-icon');
    const pauseText = document.getElementById('pause-text');
    const btn = document.getElementById('btn-pause-toggle');
    if (isPaused) {
      pauseIcon && (pauseIcon.textContent = '▶️');
      pauseText && (pauseText.textContent = '繼續');
      if (btn) {
        btn.className = 'px-2.5 py-1.5 rounded-xl border-2 border-[#463529] bg-[#7CB69D] text-xs font-black text-white hover:bg-[#5F9E84] transition-all flex items-center gap-1 shadow-[0_2px_0_#463529] animate-pulse';
      }
    } else {
      pauseIcon && (pauseIcon.textContent = '⏸️');
      pauseText && (pauseText.textContent = '暫停');
      if (btn) {
        btn.className = 'px-2.5 py-1.5 rounded-xl border-2 border-[#463529] bg-[#F6C46A] text-xs font-black text-[#463529] hover:bg-[#E6AC4C] transition-all flex items-center gap-1 shadow-[0_2px_0_#463529]';
      }
    }
  }

  public showPauseModal() {
    const modal = document.getElementById('pause-modal');
    if (!modal) return;

    // 更新暫停視窗內當前出勤數據與倒數
    const subtitle = document.getElementById('pause-modal-subtitle');
    const cat = document.getElementById('pause-current-scenario-cat');
    const timeBadge = document.getElementById('pause-current-time-badge');
    const title = document.getElementById('pause-current-scenario-title');
    const patient = document.getElementById('pause-current-scenario-patient');

    if (subtitle) {
      subtitle.textContent = `目前為第 ${this.currentRound}/${this.maxRounds} 趟出勤・倒數時間尚餘 ${this.timer} 秒`;
    }
    if (cat && this.currentScenario) {
      cat.textContent = this.currentScenario.category;
    }
    if (timeBadge) {
      timeBadge.textContent = `剩餘 ${this.timer} 秒`;
    }
    if (title && this.currentScenario) {
      title.textContent = this.currentScenario.title;
    }
    if (patient && this.currentScenario) {
      patient.textContent = this.currentScenario.patient;
    }

    modal.classList.remove('hidden');
    setTimeout(() => {
      modal.classList.remove('opacity-0');
    }, 10);
  }

  public hidePauseModal() {
    const modal = document.getElementById('pause-modal');
    if (!modal) return;
    modal.classList.add('opacity-0');
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 300);
  }

  private mainRenderLoop() {
    this.particleSystem.updateAndDraw();
    requestAnimationFrame(() => this.mainRenderLoop());
  }
}

function bootstrapApp() {
  if ((window as any).__EMS_GAME_INITIALIZED__) return;
  (window as any).__EMS_GAME_INITIALIZED__ = true;
  new GameApp();
}

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', bootstrapApp);
} else {
  bootstrapApp();
}
