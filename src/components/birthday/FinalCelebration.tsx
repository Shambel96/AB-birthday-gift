import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function FinalCelebration({ name, onRestart }: { name: string; onRestart: () => void }) {
  return (
    <section className="section-pad relative flex min-h-[100svh] flex-col items-center justify-center text-center">
      <motion.h2
        initial={{ opacity: 0, scale: 0.85, filter: "blur(12px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 1.1 }}
        className="text-aurora max-w-4xl text-4xl leading-tight font-bold text-balance sm:text-7xl"
      >
        🎂 HAPPY BIRTHDAY, {name.toUpperCase()}! 🎂
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.9 }}
        className="mt-8 text-xl text-muted-foreground sm:text-2xl"
      >
        ይህ እስካሁን የእርስዎ ምርጥ ምዕራፍ ይሁን።
      </motion.p>

      <div className="mt-10 space-y-1 text-lg text-foreground/80 sm:text-xl">
        {["ተጨማሪ ፈገግታ።", "ተጨማሪ ጀብዱዎች።", "ተጨማሪ ትዝታዎች።", "ተጨማሪ ደስታ።"].map((line, i) => (
          <motion.p
            key={line}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 + i * 0.3, duration: 0.6 }}
          >
            {line}
          </motion.p>
        ))}
      </div>

      <motion.button
        onClick={onRestart}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        className="glass-card glow-pink mt-14 inline-flex touch-manipulation items-center gap-2 rounded-full px-7 py-4 text-base font-semibold"
      >
        <Heart className="h-5 w-5 text-pink" />
        ከመጀመሪያው ይጀምሩ
      </motion.button>
    </section>
  );
}
