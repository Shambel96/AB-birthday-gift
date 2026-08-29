import { motion } from "framer-motion";
import { Gift } from "lucide-react";

import { BirthdayCake } from "./BirthdayCake";

export function BirthdayHero({ name, onOpenGift }: { name: string; onOpenGift: () => void }) {
  return (
    <section className="section-pad relative flex min-h-[100svh] flex-col items-center justify-center text-center">
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-sm font-semibold tracking-[0.35em] text-cyan uppercase sm:text-base"
      >
        🎉 መልካም ልደት 🎉
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, scale: 0.85, filter: "blur(14px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1.1, ease: "easeOut" }}
        className="text-aurora mt-6 max-w-4xl text-4xl leading-[1.1] font-bold text-balance sm:text-7xl"
      >
        መልካም ልደት {name} ❤️
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="mt-8 text-lg text-muted-foreground sm:text-xl"
      >
        ዛሬ ዝም ብሎ ተራ ቀን አይደለም...
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 2.3, duration: 0.8 }}
        className="text-cosmos mt-2 text-2xl font-bold sm:text-4xl"
      >
        ያንተ ቀን ነው!
      </motion.p>

      <div className="mt-14">
        <BirthdayCake />
      </div>

      <motion.button
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        onClick={onOpenGift}
        className="glass-card glow-purple mt-14 inline-flex touch-manipulation items-center gap-2 rounded-full px-7 py-4 text-base font-semibold sm:text-lg"
      >
        <Gift className="h-5 w-5 text-pink" />
        ስጦታህን ክፈተው
      </motion.button>
    </section>
  );
}
