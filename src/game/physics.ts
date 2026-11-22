export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rotation: number;
  vRot: number;
  alpha: number;
  decay: number;
  shape: 'star' | 'circle' | 'cross' | 'confetti';
}

export class ParticleSystem {
  private particles: Particle[] = [];
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D | null;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  private resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  public burst(x: number, y: number, isSuccess: boolean = true, count: number = 24) {
    const successColors = ['#F6E05E', '#68D391', '#4299E1', '#FC8181', '#FAF089', '#FAF7F2'];
    const errorColors = ['#E53E3E', '#CBD5E0', '#718096', '#4A5568'];
    const colors = isSuccess ? successColors : errorColors;

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 3 + Math.random() * 8;
      const shapes: Particle['shape'][] = isSuccess ? ['star', 'cross', 'confetti'] : ['circle', 'confetti'];
      const shape = shapes[Math.floor(Math.random() * shapes.length)];

      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (isSuccess ? 2.5 : 0),
        size: 6 + Math.random() * 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.2,
        alpha: 1.0,
        decay: 0.015 + Math.random() * 0.02,
        shape
      });
    }
  }

  public updateAndDraw() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.22; // 重力
      p.vx *= 0.98; // 空氣阻力
      p.rotation += p.vRot;
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate(p.rotation);
      this.ctx.globalAlpha = p.alpha;
      this.ctx.fillStyle = p.color;

      if (p.shape === 'star') {
        this.drawStar(this.ctx, 0, 0, 4, p.size, p.size / 2);
      } else if (p.shape === 'cross') {
        this.drawCross(this.ctx, 0, 0, p.size);
      } else if (p.shape === 'confetti') {
        this.ctx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size / 1.5);
      } else {
        this.ctx.beginPath();
        this.ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        this.ctx.fill();
      }
      this.ctx.restore();
    }
  }

  private drawStar(ctx: CanvasRenderingContext2D, cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number) {
    let rot = Math.PI / 2 * 3;
    let x = cx;
    let y = cy;
    const step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      ctx.lineTo(x, y);
      rot += step;

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      ctx.lineTo(x, y);
      rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.fill();
  }

  private drawCross(ctx: CanvasRenderingContext2D, cx: number, cy: number, size: number) {
    const w = size / 3;
    ctx.fillRect(cx - w / 2, cy - size / 2, w, size);
    ctx.fillRect(cx - size / 2, cy - w / 2, size, w);
  }
}
