import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

const COLORS = [
  "from-pink to-purple",
  "from-cyan to-purple",
  "from-gold to-pink",
  "from-purple to-cyan",
  "from-pink to-gold",
];

type Balloon = { id: number; left: number; delay: number; duration: number; color: string };

const TARGET = 5;

export function BalloonGame() {
  const [popped, setPopped] = useState(0);
  const [gone, setGone] = useState<number[]>([]);

  const balloons = useMemo<Balloon[]>(
    () =>
      Array.from({ length: 9 }, (_, i) => ({
        id: i,
        left: 6 + (i * 88) / 9 + Math.random() * 4,
        delay: Math.random() * 3,
        duration: 5 + Math.random() * 3,
        color: COLORS[i % COLORS.length]!,
      })),
    [],
  );

  const pop = (id: number) => {
    if (gone.includes(id)) return;
    setGone((g) => [...g, id]);
    setPopped((p) => p + 1);
  };

  const done = popped >= TARGET;

  return (
    <section className="section-pad relative text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-cosmos text-3xl font-bold sm:text-5xl"
      >
        🎈 አንድ ተጨማሪ ነገር...
      </motion.h2>
      <p className="mt-4 text-lg text-muted-foreground">ፊኛዎቹን ይፈንጉ! 🎈</p>

      <div className="relative mx-auto mt-8 h-[22rem] w-full max-w-3xl overflow-hidden rounded-4xl border border-border bg-card/30 backdrop-blur-md sm:h-[26rem]">
        <AnimatePresence>
          {balloons
            .filter((b) => !gone.includes(b.id))
            .map((b) => (
              <motion.button
                key={b.id}
                onClick={() => pop(b.id)}
                aria-label="ፊኛውን ይፈንጉ"
                className="absolute bottom-0 touch-manipulation"
                style={{ left: `${b.left}%` }}
                initial={{ y: 40 }}
                animate={{ y: [-10, -230, -10], x: [0, 12, -12, 0] }}
                exit={{ scale: 1.7, opacity: 0, transition: { duration: 0.22 } }}
                transition={{
                  duration: b.duration,
                  delay: b.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileTap={{ scale: 0.85 }}
              >
                <span
                  className={`block h-14 w-11 rounded-[50%] bg-gradient-to-br ${b.color} shadow-[0_0_28px_-6px_color-mix(in_oklab,var(--pink)_70%,transparent)] sm:h-16 sm:w-12`}
                />
                <span className="mx-auto block h-8 w-px bg-foreground/30" />
              </motion.button>
            ))}
        </AnimatePresence>

        {gone.map((id) => (
          <motion.span
            key={`burst-${id}`}
            aria-hidden
            initial={{ opacity: 1, scale: 0.4 }}
            animate={{ opacity: 0, scale: 2 }}
            transition={{ duration: 0.6 }}
            className="pointer-events-none absolute bottom-1/2 left-1/2 h-16 w-16 -translate-x-1/2 rounded-full bg-pink/30 blur-xl"
          />
        ))}

        <div className="glass-card absolute top-4 left-1/2 -translate-x-1/2 rounded-full px-5 py-2 text-sm font-semibold">
          የተፈነገጡ ፊኛዎች: {popped}
        </div>
      </div>

      <AnimatePresence>
        {done && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8"
          >
            <p className="text-aurora text-3xl font-bold sm:text-4xl">🎉 ተሳክቶልዎታል! 🎉</p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-3 text-lg text-muted-foreground"
            >
              እሺ... በይፋ ሌላ ኬክ ይገባዎታል። 🍰
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
