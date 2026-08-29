import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

type Photo = { src: string; caption: string };

export function PhotoGallery({ photos }: { photos: Photo[] }) {
  const [active, setActive] = useState<number | null>(null);
  const current = active === null ? null : photos[active];

  return (
    <section className="section-pad relative">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="text-cosmos mx-auto max-w-2xl text-center text-3xl font-bold text-balance sm:text-5xl"
      >
        📸 ትንሽ ጊዜያት፣ ትልቅ ትዝታዎች
      </motion.h2>

      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, i) => (
          <motion.button
            key={i}
            onClick={() => setActive(i)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: (i % 3) * 0.1, duration: 0.6 }}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.98 }}
            className="glass-card group relative overflow-hidden rounded-3xl p-2 text-left transition-shadow duration-300 hover:shadow-[0_0_60px_-18px_color-mix(in_oklab,var(--pink)_85%,transparent)]"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src={photo.src}
                alt={photo.caption}
                loading="lazy"
                width={1024}
                height={1024}
                className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <p className="px-3 py-3 text-sm text-muted-foreground">{photo.caption}</p>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-60 flex items-center justify-center bg-background/85 p-4 backdrop-blur-xl"
          >
            <motion.figure
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card relative w-full max-w-2xl overflow-hidden rounded-3xl p-3"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="ፎቶውን ይዝጉ"
                className="glass-card absolute top-5 right-5 z-10 rounded-full p-2"
              >
                <X className="h-5 w-5" />
              </button>
              <img
                src={current.src}
                alt={current.caption}
                className="max-h-[70svh] w-full rounded-2xl object-contain"
              />
              <figcaption className="px-2 py-4 text-center text-base text-muted-foreground">
                {current.caption}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
