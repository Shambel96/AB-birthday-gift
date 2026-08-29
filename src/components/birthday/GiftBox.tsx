import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export function GiftBox({ onOpened }: { onOpened: () => void }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (open) return;
    setOpen(true);
    onOpened();
  };

  return (
    <section
      id="gift"
      className="section-pad relative flex min-h-[100svh] flex-col items-center justify-center text-center"
    >
      <AnimatePresence mode="wait">
        {!open ? (
          <motion.div
            key="closed"
            exit={{ opacity: 0, scale: 1.15 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-12 text-xl text-muted-foreground sm:text-2xl"
            >
              ውስጡ ምን እንዳለ እያሰብክ ነው? 👀
            </motion.p>

            <motion.button
              onClick={handleOpen}
              whileHover={{ scale: 1.06, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -12, 0] }}
              transition={{ y: { duration: 3.2, repeat: Infinity, ease: "easeInOut" } }}
              aria-label="ስጦታውን ክፈተው"
              className="relative touch-manipulation"
            >
              <span className="absolute inset-0 -z-10 rounded-full bg-pink/30 blur-[70px]" />
              <span className="block h-40 w-40 rounded-3xl bg-gradient-to-br from-purple via-pink to-gold shadow-[0_0_90px_-20px_color-mix(in_oklab,var(--pink)_90%,transparent)] sm:h-52 sm:w-52">
                <span className="absolute inset-y-0 left-1/2 w-5 -translate-x-1/2 bg-gold/80" />
                <span className="absolute inset-x-0 top-1/2 h-5 -translate-y-1/2 bg-gold/80" />
              </span>
              <span className="absolute -top-7 left-1/2 h-12 w-24 -translate-x-1/2 rounded-full border-[10px] border-gold/90" />
            </motion.button>

            <p className="mt-10 text-sm tracking-[0.25em] text-muted-foreground uppercase">
              ስጦታውን ንካው
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="opened"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            className="relative flex flex-col items-center"
          >
            <motion.span
              aria-hidden
              className="absolute h-64 w-64 rounded-full bg-gold/35 blur-[90px]"
              animate={{ scale: [0.4, 2.2, 1.4], opacity: [1, 0.5, 0.35] }}
              transition={{ duration: 1.6 }}
            />
            <h2 className="text-aurora text-5xl font-bold sm:text-8xl">እንኳን ተወለድክ! 🎉</h2>
            <p className="mt-6 max-w-md text-lg text-balance text-muted-foreground">
              ወደ ታች ዝቅ በል — ገና የሚጠብቅህ ነገር አለ።
            </p>
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.span
                key={i}
                aria-hidden
                className="absolute bottom-0 text-2xl"
                style={{ left: `${8 + i * 9}%` }}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: -260 - Math.random() * 120, opacity: [0, 1, 0] }}
                transition={{ duration: 2.6, delay: i * 0.12, repeat: Infinity, repeatDelay: 1.4 }}
              >
                ❤️
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
