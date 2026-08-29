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
  birthday: "2026-08-29",

  /** The long personal letter (line breaks are kept) */
  message: `Happy Birthday! ❤️

ዛሬ ለእርስዎ ስንት የተወደዱ፣ የተደነቁ እና ልዩ እንደሆኑ ያስታውስዎ ዘንድ ተመኛለሁ።

ለተጋራናቸው ሳቅ፣ ውይይት፣ ትዝታ እና ትንንሽ ጊዜያት ሁሉ በእውነት አመሰግናለሁ።

ሕይወት ባልተጠበቁ ምዕራፎች ትሞላለች፣ ይህ ቀጣይ ምዕራፍም ተጨማሪ ደስታ፣ ተጨማሪ ስኬት፣ ተጨማሪ ጀብዱዎች እና ስፍር ቁጥር የሌላቸው የፈገግታ ምክንያቶች ያመጣልዎ።

ራስዎ መሆንዎን በፍጹም አያቁሙ።

ማለም ይቀጥሉ። ፈገግ ማለት ይቀጥሉ። መቀጠልዎን ይቀጥሉ።

አስደናቂ አመት ይገባዎታል።

እንደገና Happy Birthday! 🎂❤️`,

  /** The three wish cards */
  wishes: [
    {
      emoji: "❤️",
      title: "ደስታ",
      text: "ሕይወትዎ ከሚያሳስብዎት ይልቅ የፈገግታ ምክንያት ሁልጊዜ ይብዛ።",
    },
    {
      emoji: "🚀",
      title: "ስኬት",
      text: "የሚከተሉት ግቦች ሁሉ ወደ ህልምዎ አንድ እርምጃ ያቅርቡዎ።",
    },
    {
      emoji: "✈️",
      title: "ጀብዱዎች",
      text: "ይህ አመት የማይረሱ ጀብዱዎች፣ ያልጠበቋቸው እድሎች እና አስደናቂ ትዝታዎች ይሙላበት።",
    },
  ],

  /** Swap these for your own pictures (drop them in src/assets and import above) */
  photos: [
    { src: memory1, caption: "ከማረሳቸው ጊዜያት መካከል አንዱ ❤️" },
    { src: memory2, caption: "ተራ ቀናትን አስደሳች የሚያደርጓቸው መንገድ ሁልጊዜ ያገኛሉ 🎈" },
    { src: memory3, caption: "የሌሊት ጉዳቶች፣ ጮክ ያለ ሳቅ፣ ምንም ጸጸት የለም 🌃" },
    { src: memory4, caption: "ኬክ፣ ሻማና ትርምስ — የእኛ አይነት ድግስ 🎂" },
    { src: memory5, caption: "በምናልባት በተሞላ ሰማይ ስር ጮክ ብለን ማለም ✨" },
    { src: memory6, caption: "ሁሉንም ነገር የቀለሉ ረጅም ውይይቶች ☕" },
  ],

  /** Put an mp3 in /public/audio/ and point to it, e.g. "/audio/birthday.mp3" */
  music: "/audio/birthday.mp3",
};

export type BirthdayConfig = typeof birthdayConfig;
