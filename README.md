# 🎂 Birthday Surprise — A Personalized Celebration App

A lovingly crafted, interactive birthday website built with **TanStack Start**, **React**, **TypeScript**, and **Tailwind CSS**. Designed to surprise someone special with a full-screen animated celebration experience — no login, no backend, just one shareable link.

> **Animated welcome → surprise reveal → gifts, wishes, and memories → fireworks finale**

---

## ✨ Features

- 🎆 **Cinematic welcome screen** — an animated intro that sets the stage before the surprise begins
- 🎁 **Interactive gift box** — tap to open and trigger a burst of confetti
- 💌 **Personal message card** — a heartfelt letter, rendered with preserved line breaks
- 🕯️ **Wish candle** — make a wish and launch a fireworks show
- 📸 **Photo gallery** — a carousel of shared memories with custom captions
- 🎈 **Balloon popping game** — a playful interactive game for extra fun
- ⏳ **Birthday countdown** — a live timer counting down to the big date
- 🎶 **Music player** — background music that starts with the surprise
- 🎊 **Confetti & fireworks** — animated celebrations throughout the experience
- 🪐 **Ambient visuals** — floating particles, a starfield, and motion-based transitions
- 🌐 **Amharic-first UI** — the entire experience is localized for a personal touch

---

## ⚙️ How to Personalize It

Everything about the surprise lives in a single, well-commented config file:

### `src/config/birthday.ts`

```ts
export const birthdayConfig = {
  name: "AB",                       // Your friend's name
  birthday: "1999-08-30",           // YYYY-MM-DD (used for the countdown)
  message: `...`,                   // Your personal letter (line breaks kept)
  wishes: [...],                    // The wish cards (emoji, title, text)
  photos: [...],                    // Your photo gallery (image + caption)
  music: "/audio/birthday.m4a",     // Path to a background track in /public/audio
};
```

**To make it yours:**

1. **Name & birthday** — update the `name` and `birthday` fields.
2. **Message** — rewrite the `message` text (Amharic, English, or any language).
3. **Wishes** — edit the array of wish cards (emoji, title, and text).
4. **Photos** — drop your images into `src/assets/`, import them, and reference them in `photos` with captions.
5. **Music** — place an `.mp3` / `.m4a` in `public/audio/` and point `music` to it.

The page title, meta description, and Open Graph tags are all generated dynamically from this config, so your links share beautifully on social media.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (v20+ recommended) — or [Bun](https://bun.sh)
- [npm](https://www.npmjs.com) (or your preferred package manager)

### Local Development

```sh
# 1. Install dependencies
npm install        # or: bun install

# 2. Start the dev server
npm run dev        # or: bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app live. Edits to `src/config/birthday.ts` are reflected instantly with hot module replacement.

### Building for Production

```sh
npm run build      # production build
npm run preview    # preview the production build locally
```

---

## 🧰 Tech Stack

| Layer    | Technology                                        |
|----------|---------------------------------------------------|
| Framework| [TanStack Start](https://tanstack.com/start) (React Router) |
| UI       | React 19, TypeScript, Tailwind CSS 4, shadcn/ui   |
| Motion   | Framer Motion                                     |
| Data     | TanStack Query, Zod                               |
| Charts   | Recharts, date-fns ({-} used for countdown logic) |
| Build    | Vite 8, Nitro                                     |
| Icons    | Lucide                                            |

---

## 📁 Project Structure

```
.
├── public/
│   └── audio/               # Background music files
├── src/
│   ├── assets/              # Photos and other static assets
│   ├── components/
│   │   ├── birthday/        # All celebration components
│   │   └── ui/              # shadcn/ui primitives
│   ├── config/
│   │   └── birthday.ts      # ⭐ THE config file — customize everything here
│   ├── routes/
│   │   ├── __root.tsx       # Root layout, error & 404 handling
│   │   └── index.tsx        # The main surprise page
│   ├── lib/                 # Utilities and error reporting
│   └── styles.css           # Global Tailwind styles
├── package.json
└── vite.config.ts
```

---

## 🎨 Reusable Components

| Component          | Purpose                                    |
|--------------------|--------------------------------------------|
| `WelcomeScreen`    | Animated intro / landing screen            |
| `BirthdayHero`     | Hero section with the celebrant's name     |
| `GiftBox`          | Interactive "open your gift" element       |
| `Wishes`           | The three wish cards                       |
| `MessageCard`      | The personal letter                        |
| `WishCandle`       | Make-a-wish interaction that triggers fireworks |
| `PhotoGallery`     | Memory photo carousel                      |
| `BalloonGame`      | A fun balloon-popping game                 |
| `Countdown`        | Live countdown to the birthday             |
| `FinalCelebration` | Closing section with restart option        |
| `Confetti`         | Confetti animation bursts                  |
| `Fireworks`        | Fireworks animation                        |
| `MusicPlayer`      | Background audio player                    |
| `Footer`           | Simple footer with the celebrant's name    |

---

## 🧑‍💻 Development Scripts

| Command         | Description                        |
|-----------------|------------------------------------|
| `npm run dev`   | Start the development server       |
| `npm run build` | Build for production               |
| `npm run preview` | Preview the production build     |
| `npm run lint`  | Run ESLint                         |
| `npm run format`| Format all files with Prettier     |

---

## 📦 Deployment

This project builds to a static/SSR output and is ready to deploy to any Node or edge platform. A WRANGLER config is included for **Cloudflare Workers**, but the production build works out of the box on:

- **Cloudflare Workers / Pages**
- **Vercel**
- **Netlify**
- **Any Node.js host**

The app is fully server-rendered and needs **no database or environment variables** to run.

---

## 🛠️ Built With

This project was scaffolded and is maintained with [Lovable](https://lovable.dev) — describe what you want and it handles the code. Changes made in Lovable sync directly back to your GitHub repository, and you have full ownership of the code.

---

## 📄 License

This is a personal project intended as a gift. You're welcome to adapt it for your own celebrations. All photos and content belong to their respective owners.
