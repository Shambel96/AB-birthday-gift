import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export function WishCandle({ onWish }: { onWish: () => void }) {
  const [blown, setBlown] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const handleBlow = () => {
    if (blown) return;
    setBlown(true);
    onWish();
    setTimeout(() => setRevealed(true), 1500);
  };

  return (
    <section className="section-pad relative flex min-h-[90svh] flex-col items-center justify-center text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-aurora text-3xl font-bold sm:text-5xl"
      >
        🕯️ አንድ ነገር ተመኝ
      </motion.h2>
      <p className="mt-4 max-w-md text-lg text-balance text-muted-foreground">
        ዐይንህን ጨፍን፣ ምኞትህን አስብ፣ እና ሻማውን አጥፋው...
      </p>

      <button
        onClick={handleBlow}
        aria-label="ሻማውን አጥፋው"
        className="relative mt-14 touch-manipulation"
      >
        <AnimatePresence>
          {!blown && (
            <motion.span
              key="flame"
              exit={{ opacity: 0, scale: 0.2, y: -30 }}
              transition={{ duration: 0.5 }}
              className="animate-flicker absolute -top-12 left-1/2 h-10 w-6 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_50px_16px_color-mix(in_oklab,var(--gold)_55%,transparent)]"
            >
              <span className="absolute inset-x-1.5 bottom-0 h-5 rounded-full bg-pink/70" />
            </motion.span>
          )}
        </AnimatePresence>
        <span className="block h-40 w-12 rounded-t-md bg-gradient-to-b from-foreground/90 to-pink/60 shadow-[0_0_60px_-20px_color-mix(in_oklab,var(--gold)_80%,transparent)]" />
        <span className="mx-auto mt-1 block h-3 w-20 rounded-full bg-foreground/20 blur-[1px]" />
      </button>

      {!blown && (
        <p className="mt-10 text-xs tracking-[0.3em] text-muted-foreground uppercase">ሻማውን ንካው</p>
      )}

      {/* dark veil right after blowing */}
      <AnimatePresence>
        {blown && !revealed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="pointer-events-none fixed inset-0 z-45 bg-background"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {revealed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            className="mt-12"
          >
            <p className="text-cosmos text-4xl font-bold sm:text-6xl">✨ ምኞትህ ተሰምቷል ✨</p>
            <p className="mt-4 text-lg text-muted-foreground">
              እውን እንዲሆንልህ እመኝልሃለሁ 12 yasakalek!!❤️
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
