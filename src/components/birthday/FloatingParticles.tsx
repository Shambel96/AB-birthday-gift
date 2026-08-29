import { motion } from "framer-motion";
import { useMemo } from "react";

const GLYPHS = ["❤️", "✨", "🎈", "⭐", "🎉", "💜"];

/** Emoji hearts / stars / balloons drifting upward across the whole page. */
export function FloatingParticles({ count = 14 }: { count?: number }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        glyph: GLYPHS[i % GLYPHS.length]!,
        size: 14 + Math.random() * 18,
        duration: 14 + Math.random() * 14,
        delay: Math.random() * 14,
        drift: (Math.random() - 0.5) * 120,
      })),
    [count],
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {items.map((p) => (
        <motion.span
          key={p.id}
          className="absolute bottom-[-10%] opacity-60 select-none"
          style={{ left: `${p.left}%`, fontSize: p.size }}
          animate={{ y: ["0vh", "-118vh"], x: [0, p.drift, 0], opacity: [0, 0.7, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {p.glyph}
        </motion.span>
      ))}
    </div>
  );
}
