import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function nextBirthday(dateStr: string) {
  const [, month, day] = dateStr.split("-").map(Number);
  const now = new Date();
  const thisYear = new Date(now.getFullYear(), (month ?? 1) - 1, day ?? 1, 0, 0, 0);
  if (thisYear.getTime() > now.getTime()) return thisYear;
  return new Date(now.getFullYear() + 1, (month ?? 1) - 1, day ?? 1, 0, 0, 0);
}

function isToday(dateStr: string) {
  const [, month, day] = dateStr.split("-").map(Number);
  const now = new Date();
  return now.getMonth() === (month ?? 1) - 1 && now.getDate() === (day ?? 1);
}

export function Countdown({ birthday }: { birthday: string }) {
  const [mounted, setMounted] = useState(false);
  const [remaining, setRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [today, setToday] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () => {
      setToday(isToday(birthday));
      const diff = Math.max(nextBirthday(birthday).getTime() - Date.now(), 0);
      setRemaining({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [birthday]);

  const units = [
    { label: "ቀናት", value: remaining.days },
    { label: "ሰዓት", value: remaining.hours },
    { label: "ደቂቃ", value: remaining.minutes },
    { label: "ሰከንድ", value: remaining.seconds },
  ];

  return (
    <section className="section-pad relative text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-aurora text-3xl font-bold sm:text-5xl"
      >
        ደስታው ይቀጥላል...
      </motion.h2>

      {mounted && today ? (
        <motion.p
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2.4, repeat: Infinity }}
          className="mt-10 text-2xl font-bold text-gold sm:text-4xl"
        >
          🎉 ዛሬ ያንተ ቀን ነው! 🎉
        </motion.p>
      ) : (
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
          {units.map((u) => (
            <div key={u.label} className="glass-card rounded-3xl px-3 py-6">
              <div className="text-cosmos text-4xl font-bold tabular-nums sm:text-5xl">
                {mounted ? String(u.value).padStart(2, "0") : "--"}
              </div>
              <div className="mt-2 text-xs tracking-[0.25em] text-muted-foreground uppercase">
                {u.label}
              </div>
            </div>
          ))}
        </div>
      )}

      <p className="mt-8 text-sm text-muted-foreground">ቀጣዩ የልደትህ ቀን እስኪደርስ ድረስ እየቆጠርን ነው ✨</p>
    </section>
  );
}
