import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function WelcomeScreen({ onStart }: { onStart: () => void }) {
  return (
    <motion.section
      key="welcome"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.06, filter: "blur(12px)" }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
      className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 text-center"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-4xl font-light tracking-tight sm:text-6xl"
      >
        ሄይ... 👀
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.9 }}
        className="mt-6 max-w-md text-balance text-lg text-muted-foreground sm:text-2xl"
      >
        ለእርስዎ የተለየ ነገር አዘጋጅቼልዎታለሁ።
      </motion.p>

      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.7, duration: 0.7, ease: "backOut" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        onClick={onStart}
        className="glow-pink bg-aurora mt-14 inline-flex touch-manipulation items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-primary-foreground sm:text-lg"
      >
        <Sparkles className="h-5 w-5" />
        አስገራሚውን ይጀምሩ
        <Sparkles className="h-5 w-5" />
      </motion.button>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 mx-auto h-72 w-72 rounded-full bg-purple/25 blur-[100px]"
        animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-8 text-xs tracking-[0.3em] text-muted-foreground uppercase"
      >
        ለመጀመር ይንኩ
      </motion.p>
    </motion.section>
  );
}
