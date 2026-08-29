import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function MessageCard({ message }: { message: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const [typed, setTyped] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const timeout = setTimeout(() => setStarted(true), 1400);
    return () => clearTimeout(timeout);
  }, [inView]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const id = setInterval(() => {
      i += 2;
      setTyped(message.slice(0, i));
      if (i >= message.length) clearInterval(id);
    }, 24);
    return () => clearInterval(id);
  }, [started, message]);

  return (
    <section ref={ref} className="section-pad relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="glass-card glow-purple mx-auto max-w-3xl rounded-4xl p-7 sm:p-12"
      >
        <h2 className="text-aurora text-center text-3xl font-bold sm:text-4xl">
          💌 ለእርስዎ የሚሆን መልእክት
        </h2>

        <p className="mt-6 text-center text-sm tracking-[0.2em] text-cyan uppercase">
          ልንገርዎ የሚፈልገውን ነገር አለ...
        </p>

        <div className="mt-8 min-h-[22rem] text-base leading-relaxed whitespace-pre-line text-foreground/90 sm:min-h-[24rem] sm:text-lg">
          {typed}
          {started && typed.length < message.length && (
            <span className="ml-0.5 inline-block h-5 w-[2px] animate-pulse bg-pink align-middle" />
          )}
        </div>
      </motion.div>
    </section>
  );
}
