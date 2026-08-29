import { motion } from "framer-motion";

/** Pure-CSS layered cake with flickering candle flames. */
export function BirthdayCake({ candles = 5, lit = true }: { candles?: number; lit?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: "backOut" }}
      className="relative mx-auto w-[15rem] select-none sm:w-[19rem]"
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* candles */}
        <div className="relative z-10 flex items-end justify-center gap-3 sm:gap-4">
          {Array.from({ length: candles }).map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              {lit && (
                <div className="animate-flicker relative mb-1 h-5 w-3 rounded-full bg-gold shadow-[0_0_18px_6px_color-mix(in_oklab,var(--gold)_60%,transparent)]">
                  <div className="absolute inset-x-[3px] bottom-0 h-2.5 rounded-full bg-pink/80" />
                </div>
              )}
              <div className="h-9 w-[7px] rounded-t-sm bg-gradient-to-b from-pink to-purple" />
            </div>
          ))}
        </div>

        {/* top tier */}
        <div className="relative mx-auto -mt-1 h-14 w-[78%] rounded-t-2xl rounded-b-md bg-gradient-to-b from-pink/80 to-purple/80 shadow-[0_0_50px_-14px_color-mix(in_oklab,var(--pink)_80%,transparent)]">
          <div className="absolute inset-x-0 top-0 h-4 rounded-t-2xl bg-foreground/25" />
        </div>
        {/* bottom tier */}
        <div className="relative mx-auto h-20 w-full rounded-b-3xl rounded-t-md bg-gradient-to-b from-purple/85 to-[color-mix(in_oklab,var(--cyan)_45%,var(--purple))] shadow-[0_20px_60px_-24px_color-mix(in_oklab,var(--purple)_90%,transparent)]">
          <div className="absolute inset-x-0 top-0 h-4 bg-foreground/20" />
          <div className="absolute inset-x-4 bottom-4 flex justify-between">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="h-2 w-2 rounded-full bg-gold/80" />
            ))}
          </div>
        </div>
        {/* plate */}
        <div className="mx-auto mt-1 h-2.5 w-[112%] -translate-x-[5%] rounded-full bg-foreground/15 blur-[1px]" />
      </motion.div>
    </motion.div>
  );
}
