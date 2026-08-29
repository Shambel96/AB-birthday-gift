import { useEffect, useRef } from "react";

type Piece = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rot: number;
  vr: number;
  color: string;
  life: number;
};

const COLORS = ["#c77dff", "#ff5fa2", "#5fe1ff", "#ffd166", "#ffffff"];

/**
 * Lightweight canvas confetti. Bump `burst` to fire a new burst.
 * `continuous` keeps a gentle rain going (used on the final screen).
 */
export function Confetti({
  burst = 0,
  continuous = false,
  origin = { x: 0.5, y: 0.4 },
  amount = 90,
}: {
  burst?: number;
  continuous?: boolean;
  origin?: { x: number; y: number };
  amount?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const piecesRef = useRef<Piece[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min((now - last) / 16.67, 3);
      last = now;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (continuous && piecesRef.current.length < 120 && Math.random() < 0.4) {
        piecesRef.current.push({
          x: Math.random() * canvas.width,
          y: -20,
          vx: (Math.random() - 0.5) * 1.2,
          vy: 1 + Math.random() * 1.6,
          size: 4 + Math.random() * 6,
          rot: Math.random() * Math.PI,
          vr: (Math.random() - 0.5) * 0.2,
          color: COLORS[Math.floor(Math.random() * COLORS.length)]!,
          life: 1,
        });
      }

      piecesRef.current = piecesRef.current.filter((p) => {
        p.vy += 0.035 * dt;
        p.vx *= 0.995;
        p.x += p.vx * dt * 2;
        p.y += p.vy * dt * 2;
        p.rot += p.vr * dt;
        if (p.y > canvas.height + 40) return false;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.9;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
        return true;
      });

      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [continuous]);

  useEffect(() => {
    if (!burst) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ox = canvas.offsetWidth * origin.x;
    const oy = canvas.offsetHeight * origin.y;
    for (let i = 0; i < amount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 7;
      piecesRef.current.push({
        x: ox,
        y: oy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 3,
        size: 5 + Math.random() * 7,
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.35,
        color: COLORS[Math.floor(Math.random() * COLORS.length)]!,
        life: 1,
      });
    }
  }, [burst, amount, origin.x, origin.y]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-50 h-full w-full"
    />
  );
}
