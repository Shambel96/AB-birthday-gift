import { motion } from "framer-motion";

type Wish = { emoji: string; title: string; text: string };

export function Wishes({ wishes }: { wishes: Wish[] }) {
  return (
    <section className="section-pad relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-cosmos text-center text-3xl font-bold sm:text-5xl"
      >
        🌟 የልደት ምኞቶች
      </motion.h2>

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
        {wishes.map((wish, i) => (
          <motion.article
            key={wish.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.15, duration: 0.7 }}
            whileHover={{ y: -12, rotate: i === 1 ? 0 : i === 0 ? -1.5 : 1.5 }}
            className="glass-card animate-drift rounded-4xl p-7 text-center transition-shadow duration-300 hover:shadow-[0_0_70px_-20px_color-mix(in_oklab,var(--purple)_90%,transparent)]"
            style={{ animationDelay: `${i * 1.4}s` }}
          >
            <span className="text-5xl">{wish.emoji}</span>
            <h3 className="mt-5 text-2xl font-bold text-foreground">{wish.title}</h3>
            <p className="mt-3 text-base text-balance text-muted-foreground">{wish.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
