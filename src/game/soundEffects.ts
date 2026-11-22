class SoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;

  private initCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }

  // 1. 抓取啵聲 (Grab Pop)
  public playGrab() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(780, now + 0.08);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.1);
  }

  // 2. 投放進救護包 (Pouch Thud / Pop)
  public playDropInBag() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(260, now);
    osc.frequency.exponentialRampToValueAtTime(90, now + 0.12);

    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.16);
  }

  // 3. 正確判定鈴聲 (Japanese Wooden Marimba / Pentatonic Chime)
  public playCorrect() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const now = this.ctx!.currentTime + idx * 0.06;
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.22, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

      osc.connect(gain);
      gain.connect(this.ctx!.destination);

      osc.start(now);
      osc.stop(now + 0.3);
    });
  }

  // 4. 錯誤判定 (超級雞馬滑稽彈簧波音 / Wacky Boing)
  public playWrong() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(240, now);
    osc.frequency.linearRampToValueAtTime(140, now + 0.12);
    osc.frequency.linearRampToValueAtTime(200, now + 0.2);
    osc.frequency.linearRampToValueAtTime(90, now + 0.35);

    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.38);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.4);
  }

  // 5. 倒數計時急促滴答 (Clock Tick)
  public playTick() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(880, now);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.05);
  }

  // 6. 回合過關歡呼號角 (Round Victory Fanfare)
  public playRoundWin() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    const melody = [
      { f: 523.25, d: 0.1 },  // C5
      { f: 659.25, d: 0.1 },  // E5
      { f: 783.99, d: 0.1 },  // G5
      { f: 1046.5, d: 0.25 }  // C6
    ];

    let delay = 0;
    melody.forEach((note) => {
      const now = this.ctx!.currentTime + delay;
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(note.f, now);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + note.d + 0.1);

      osc.connect(gain);
      gain.connect(this.ctx!.destination);

      osc.start(now);
      osc.stop(now + note.d + 0.15);
      delay += note.d * 0.9;
    });
  }

  // 7. 119 救護派遣出勤警笛鐘聲 (Dispatch Chime)
  public playDispatchAlarm() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    const notes = [
      { f: 587.33, d: 0.14 }, // D5
      { f: 783.99, d: 0.14 }, // G5
      { f: 880.00, d: 0.28 }  // A5
    ];

    let delay = 0;
    notes.forEach((note) => {
      const now = this.ctx!.currentTime + delay;
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(note.f, now);

      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + note.d + 0.15);

      osc.connect(gain);
      gain.connect(this.ctx!.destination);

      osc.start(now);
      osc.stop(now + note.d + 0.2);
      delay += note.d;
    });
  }

  // ================= 8. 輕快挑戰背景音樂 (Procedural Challenge BGM) =================
  private isBgmPlaying: boolean = false;
  private isBgmMuted: boolean = false; // 預設常開 (Default ON)
  private bgmGainNode: GainNode | null = null;
  private bgmTimerId: any = null;
  private bgmStepIndex: number = 0;
  private nextNoteTime: number = 0;
  private readonly bgmTempo: number = 126; // 輕快跳躍 126 BPM
  private readonly stepDur: number = (60 / 126) / 4; // 16th 音符 ~0.119s

  // 64-step (4小節) 輕快和風木琴旋律 (C -> Am -> F -> G)
  private readonly bgmMelody: number[] = [
    // Bar 1: C Major (活潑跳躍)
    523.25, 0, 659.25, 783.99, 0, 659.25, 0, 523.25, 0, 587.33, 659.25, 0, 783.99, 0, 880.00, 0,
    // Bar 2: Am (清脆靈動)
    880.00, 0, 783.99, 659.25, 0, 523.25, 0, 659.25, 0, 523.25, 0, 440.00, 0, 523.25, 587.33, 0,
    // Bar 3: F Major (奔跑衝刺)
    659.25, 0, 523.25, 0, 587.33, 0, 523.25, 440.00, 0, 523.25, 0, 659.25, 0, 783.99, 0, 880.00,
    // Bar 4: G Major (明亮銜接)
    783.99, 0, 659.25, 0, 587.33, 0, 523.25, 0, 587.33, 0, 659.25, 0, 783.99, 0, 987.77, 0
  ];

  // 64-step 彈跳低音 Bassline
  private readonly bgmBass: number[] = [
    // Bar 1: C
    130.81, 0, 196.00, 0, 130.81, 0, 196.00, 0, 130.81, 0, 196.00, 0, 130.81, 0, 196.00, 0,
    // Bar 2: Am
    110.00, 0, 164.81, 0, 110.00, 0, 164.81, 0, 110.00, 0, 164.81, 0, 110.00, 0, 164.81, 0,
    // Bar 3: F
    87.31, 0, 130.81, 0, 87.31, 0, 130.81, 0, 87.31, 0, 130.81, 0, 87.31, 0, 130.81, 0,
    // Bar 4: G
    98.00, 0, 146.83, 0, 98.00, 0, 146.83, 0, 98.00, 0, 146.83, 0, 98.00, 0, 146.83, 0
  ];

  public startBgm() {
    this.initCtx();
    if (!this.ctx) return;

    if (!this.bgmGainNode) {
      this.bgmGainNode = this.ctx.createGain();
      this.bgmGainNode.gain.setValueAtTime(this.isBgmMuted ? 0 : 0.12, this.ctx.currentTime);
      this.bgmGainNode.connect(this.ctx.destination);
    }

    if (this.isBgmPlaying) return;
    this.isBgmPlaying = true;
    this.nextNoteTime = this.ctx.currentTime + 0.05;
    this.bgmStepIndex = 0;

    // Lookahead Scheduler (每 25ms 檢查未來 0.1s 的音符排程)
    this.bgmTimerId = setInterval(() => this.scheduleBgm(), 25);
  }

  public stopBgm() {
    this.isBgmPlaying = false;
    if (this.bgmTimerId) {
      clearInterval(this.bgmTimerId);
      this.bgmTimerId = null;
    }
  }

  public pauseBgm() {
    if (this.isBgmPlaying && this.bgmTimerId) {
      clearInterval(this.bgmTimerId);
      this.bgmTimerId = null;
      if (this.bgmGainNode && this.ctx) {
        this.bgmGainNode.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.1);
      }
    }
  }

  public resumeBgm() {
    if (this.isBgmPlaying && !this.bgmTimerId && !this.isBgmMuted) {
      if (this.ctx && this.bgmGainNode) {
        this.bgmGainNode.gain.linearRampToValueAtTime(0.12, this.ctx.currentTime + 0.1);
        this.nextNoteTime = this.ctx.currentTime + 0.05;
        this.bgmTimerId = setInterval(() => this.scheduleBgm(), 25);
      }
    }
  }

  // 暫停音效 (下降柔和提示音)
  public playPause() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.exponentialRampToValueAtTime(310, now + 0.14);
    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.18);
  }

  // 繼續音效 (上升活力提示音)
  public playResume() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(560, now + 0.14);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.18);
  }

  public toggleBgm(): boolean {
    this.isBgmMuted = !this.isBgmMuted;
    if (this.ctx && this.bgmGainNode) {
      const now = this.ctx.currentTime;
      this.bgmGainNode.gain.cancelScheduledValues(now);
      this.bgmGainNode.gain.setValueAtTime(this.bgmGainNode.gain.value, now);
      this.bgmGainNode.gain.linearRampToValueAtTime(this.isBgmMuted ? 0 : 0.12, now + 0.1);
    }
    if (!this.isBgmPlaying && !this.isBgmMuted) {
      this.startBgm();
    }
    return !this.isBgmMuted;
  }

  public isBgmActive(): boolean {
    return this.isBgmPlaying && !this.isBgmMuted;
  }

  private scheduleBgm() {
    if (!this.ctx || !this.isBgmPlaying || !this.bgmGainNode) return;

    const scheduleAheadTime = 0.1;
    while (this.nextNoteTime < this.ctx.currentTime + scheduleAheadTime) {
      this.playBgmStep(this.bgmStepIndex, this.nextNoteTime);
      this.nextNoteTime += this.stepDur;
      this.bgmStepIndex = (this.bgmStepIndex + 1) % 64;
    }
  }

  private playBgmStep(step: number, time: number) {
    if (!this.ctx || !this.bgmGainNode) return;

    // 1. 旋律 (木琴 / Marimba 泛音)
    const melFreq = this.bgmMelody[step];
    if (melFreq > 0) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(melFreq, time);

      gain.gain.setValueAtTime(0.35, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.16);

      osc.connect(gain);
      gain.connect(this.bgmGainNode);

      osc.start(time);
      osc.stop(time + 0.18);
    }

    // 2. 彈跳低音 (Bouncy Bass)
    const bassFreq = this.bgmBass[step];
    if (bassFreq > 0) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(bassFreq, time);

      gain.gain.setValueAtTime(0.45, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.22);

      osc.connect(gain);
      gain.connect(this.bgmGainNode);

      osc.start(time);
      osc.stop(time + 0.25);
    }

    // 3. 節奏 Shaker / Click (在 2, 6, 10, 14 反拍步階上輕觸)
    if (step % 4 === 2) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'square';
      osc.frequency.setValueAtTime(1400, time);

      gain.gain.setValueAtTime(0.08, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.035);

      osc.connect(gain);
      gain.connect(this.bgmGainNode);

      osc.start(time);
      osc.stop(time + 0.04);
    }
  }
}

export const sounds = new SoundEngine();
