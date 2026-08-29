import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { BalloonGame } from "@/components/birthday/BalloonGame";
import { BirthdayHero } from "@/components/birthday/BirthdayHero";
import { Confetti } from "@/components/birthday/Confetti";
import { Countdown } from "@/components/birthday/Countdown";
import { FinalCelebration } from "@/components/birthday/FinalCelebration";
import { Fireworks } from "@/components/birthday/Fireworks";
import { FloatingParticles } from "@/components/birthday/FloatingParticles";
import { Footer } from "@/components/birthday/Footer";
import { GiftBox } from "@/components/birthday/GiftBox";
import { MessageCard } from "@/components/birthday/MessageCard";
import { MusicPlayer } from "@/components/birthday/MusicPlayer";
import { PhotoGallery } from "@/components/birthday/PhotoGallery";
import { Starfield } from "@/components/birthday/Starfield";
import { WelcomeScreen } from "@/components/birthday/WelcomeScreen";
import { Wishes } from "@/components/birthday/Wishes";
import { WishCandle } from "@/components/birthday/WishCandle";
import { birthdayConfig } from "@/config/birthday";

// No og:image here so serve-time hosting keeps injecting the project's
// social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `Happy Birthday, ${birthdayConfig.name}! 🎂` },
      {
        name: "description",
        content: `A little birthday surprise made with love for ${birthdayConfig.name}.`,
      },
      {
        property: "og:title",
        content: `Happy Birthday, ${birthdayConfig.name}! 🎉`,
      },
      {
        property: "og:description",
        content: "I made something special for you — tap to start the surprise.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [started, setStarted] = useState(false);
  const [confettiBurst, setConfettiBurst] = useState(0);
  const [wished, setWished] = useState(false);

  const bustOutTheConfetti = () => setConfettiBurst((n) => n + 1);

  const handleStart = () => {
    setStarted(true);
    bustOutTheConfetti();
  };

  const handleOpenGift = () => {
    document.getElementById("gift")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWish = () => {
    setWished(true);
    bustOutTheConfetti();
  };

  const handleRestart = () => {
    setWished(false);
    setStarted(false);
  };

  return (
    <>
      <Starfield />
      <FloatingParticles />

      <AnimatePresence mode="wait">
        {!started ? (
          <WelcomeScreen key="welcome" onStart={handleStart} />
        ) : (
          <motion.main
            key="surprise"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(8px)" }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          >
            <BirthdayHero name={birthdayConfig.name} onOpenGift={handleOpenGift} />
            <GiftBox onOpened={bustOutTheConfetti} />
            <Wishes wishes={birthdayConfig.wishes} />
            <MessageCard message={birthdayConfig.message} />
            <WishCandle onWish={handleWish} />
            <PhotoGallery photos={birthdayConfig.photos} />
            <BalloonGame />
            <Countdown birthday={birthdayConfig.birthday} />
            <FinalCelebration name={birthdayConfig.name} onRestart={handleRestart} />
            <Footer name={birthdayConfig.name} />
          </motion.main>
        )}
      </AnimatePresence>

      <Confetti burst={confettiBurst} origin={{ x: 0.5, y: 0.35 }} />
      <Fireworks active={wished} />
      <MusicPlayer src={birthdayConfig.music} autoStart={started} />
    </>
  );
}
