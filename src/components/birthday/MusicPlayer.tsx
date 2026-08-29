import { motion } from "framer-motion";
import { Music, Pause, Play, Volume2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function MusicPlayer({ src, autoStart }: { src: string; autoStart: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const [unavailable, setUnavailable] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    if (!autoStart || !audioRef.current) return;
    audioRef.current
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  }, [autoStart]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(
        () => setPlaying(true),
        () => setUnavailable(true),
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="fixed right-3 bottom-3 z-50 sm:right-5 sm:bottom-5"
    >
      <audio ref={audioRef} src={src} loop preload="none" onError={() => setUnavailable(true)} />
      <div className="glass-card flex items-center gap-2 rounded-full p-2 pr-3">
        <button
          onClick={toggle}
          aria-label={playing ? "ሙዚቃውን ያቁሙ" : "ሙዚቃውን ያጫውቱ"}
          className="bg-aurora grid h-11 w-11 touch-manipulation place-items-center rounded-full text-primary-foreground"
        >
          {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </button>

        <button
          onClick={() => setExpanded((v) => !v)}
          aria-label="የሙዚቃ ዝርዝር"
          className="grid h-9 w-9 touch-manipulation place-items-center rounded-full text-muted-foreground"
        >
          {expanded ? <Volume2 className="h-4 w-4" /> : <Music className="h-4 w-4" />}
        </button>

        {expanded && (
          <div className="flex max-w-[11rem] flex-col gap-1 pr-1">
            <span className="text-[11px] leading-tight text-muted-foreground">
              {unavailable ? "ለመስማት በ public/audio ውስጥ mp3 ያኑሩ 🎵" : '🎵 "ለልዩ ቀንዎ ትንሽ የሙዚቃ ዳራ"'}
            </span>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              aria-label="የድምጽ መጠን"
              onChange={(e) => setVolume(Number(e.target.value))}
              className="h-1 w-full accent-pink"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}
