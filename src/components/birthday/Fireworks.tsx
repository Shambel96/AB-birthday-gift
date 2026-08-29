import { useEffect, useRef } from "react";

type Spark = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  hue: number;
};

/** Canvas fireworks. Set `active` to start; `intensity` controls launch rate. */
export function Fireworks({ active, intensity = 0.02 }: { active: boolean; intensity?: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sparksRef = useRef<Spark[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!active) return;
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

    const explode = (x: number, y: number) => {
      const hue = Math.floor(Math.random() * 360);
      const n = 46;
      for (let i = 0; i < n; i++) {
        const a = (Math.PI * 2 * i) / n;
        const s = 1.5 + Math.random() * 3.5;
        sparksRef.current.push({
          x,
          y,
          vx: Math.cos(a) * s,
          vy: Math.sin(a) * s,
          life: 1,
          hue: hue + Math.random() * 40,
        });
      }
    };

    const tick = () => {
      ctx.fillStyle = "rgba(6, 4, 16, 0.22)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (Math.random() < intensity * 10) {
        explode(
          canvas.width * (0.15 + Math.random() * 0.7),
          canvas.height * (0.1 + Math.random() * 0.45),
        );
      }

      sparksRef.current = sparksRef.current.filter((s) => {
        s.vy += 0.03;
        s.vx *= 0.985;
        s.vy *= 0.985;
        s.x += s.vx;
        s.y += s.vy;
        s.life -= 0.012;
        if (s.life <= 0) return false;
        ctx.beginPath();
        ctx.fillStyle = `hsla(${s.hue}, 95%, 68%, ${s.life})`;
        ctx.arc(s.x, s.y, 2.1, 0, Math.PI * 2);
        ctx.fill();
        return true;
      });

      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      sparksRef.current = [];
    };
  }, [active, intensity]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-40 h-full w-full"
    />
  );
}
