import memory1 from "@/assets/memory-1.jpg";
import memory2 from "@/assets/memory-2.jpg";
import memory3 from "@/assets/memory-3.jpg";
import memory4 from "@/assets/memory-4.jpg";
import memory5 from "@/assets/memory-5.jpg";
import memory6 from "@/assets/memory-6.jpg";

/**
 * ─────────────────────────────────────────────
 *  EDIT EVERYTHING ABOUT THE SURPRISE RIGHT HERE
 * ─────────────────────────────────────────────
 */
export const birthdayConfig = {
  /** Your friend's name */
  name: "AB",

  /** Their birthday — format: YYYY-MM-DD (year can be their birth year) */
  birthday: "1999-08-30",

  /** The long personal letter (line breaks are kept) */
  message: `መልካም ልደት! ❤️

ዛሬ ምን ያህል የምትወደድ፣ የምትደነቅ እና ለእኔ ልዩ ሰው እንደሆንክ እንድታስብበት እፈልጋለሁ።

አብረን ላሳለፍናቸው ሳቆች፣ ረጅም ወጎች፣ ጥሩ ትዝታዎች እና ትንንሽ አሪፍ ጊዜያት ሁሉ ከልብ አመሰግናለሁ።

ሕይወት ባልተጠበቁ አዳዲስ ምዕራፎች የተሞላች ናት፤ ይህ ቀጣይ ምዕራፍ ደግሞ የበዛ ደስታን፣ ታላቅ ስኬትን፣ አዳዲስ ልምዶችን እና ስፍር ቁጥር የሌላቸውን የፈገግታ ምክንያቶች ያምጣልህ።

ሁልጊዜም ራስህን ሁን—ምክንያቱም አንተ እንዳለህ ድንቅ ነህ።

ትልልቅ ህልሞችን አልም፣ በሙሉ ልብህ ሳቅ፣ ወደፊት መጓዝህን አታቋርጥ።

ምርጥ እና አስደናቂ ዓመት ይገባሃል!

ኪዳነ ምህረት ሁሌም ትከተልህ፣ መልካሙን ሁሉ እመኝልሃለሁ።
የምትወደው ቅዱስ ሚካኤል ከፊትህ ይቅደምልህ!

እንደገና መልካም ልደት! 🎂❤️`,

  /** The three wish cards */
  wishes: [
    {
      emoji: "❤️",
      title: "ደስታ",
      text: "በሕይወትህ ከሚያስጨንቅህ ነገር ይልቅ ሁልጊዜም የሚያስቅህና የሚያስደስትህ ነገር ይብዛልህ።",
    },
    {
      emoji: "🚀",
      title: "ስኬት",
      text: "የምታልማቸው እና የምትተጋላቸው ነገሮች በሙሉ ወደ ትልቁ ህልምህ አንድ እርምጃ ያቅርቡህ።",
    },
    {
      emoji: "✈️",
      title: "አዳዲስ ጉዞዎች",
      text: "ይህ ዓመት በማይረሱ አዳዲስ ጀብዱዎች፣ ባልጠበቅካቸው መልካም አጋጣሚዎችና ምርጥ ትዝታዎች የተሞላ ይሁንልህ።",
    },
  ],

  /** Swap these for your own pictures (drop them in src/assets and import above) */
  photos: [
    { src: memory1, caption: "ከማልረሳቸው ምርጥ ጊዜያት አንዱ ❤️" },
    { src: memory2, caption: "ተራ ቀኖችን ሁሌም ልዩና አስደሳች የምታደርግበት መንገድ አለህ 🎈" },
    { src: memory3, caption: "የማይረሱ የሌሊት ወጎች፣ የልብ ሳቅና ምርጥ ጊዜያት 🌃" },
    { src: memory4, caption: "ኬክ፣ ሻማና ሳቅ — ዛሬ ምንም አይቀረንም 🎂" },
    { src: memory5, caption: "ስለ ወደፊቱ በትልቁ እያለሙ ማውራት ✨" },
    { src: memory6, caption: "ሁሉንም ነገር የሚያቀልሉ ረጅም ወጎች ☕" },
  ],

  /** Put an mp3 in /public/audio/ and point to it, e.g. "/audio/birthday.mp3" */
  music: "/audio/birthday.m4a",
};

export type BirthdayConfig = typeof birthdayConfig;
