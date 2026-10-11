# ★ TAKE YOUR CODE — Developer Portfolio

A bold, game-menu-style developer portfolio inspired by the **Persona 5** UI: red / black / white palette, diagonal cards, glitch effects, keyboard-driven menu and a guide character that comments on each section.

Built by **Marouane EL WALI**, Full Stack Developer (Laravel, Symfony, React, Node.js, MCP).

> 📸 Add a screenshot here: `![Preview](./docs/preview.png)`

## ✨ Features

- **Title screen** with a "PRESS ANY KEY" intro and diagonal wipe transition
- **Game-style main menu**: mouse hover or keyboard (`↑` `↓` + `Enter`)
- **About**: profile and "character stats" panel
- **Experience log**: timeline styled as mission archives
- **Skills matrix**: inventory-style tabs with animated level bars
- **Projects ("Treasures")**: expandable cards driven by `data.js`
- **Calling Card contact form** with live card preview (opens a pre-filled email)
- **Easter egg**: press `A` for an ALL-OUT ATTACK screen
- **Contact**: email, phone, LinkedIn and GitHub buttons
- **Morgana guide**: dialogue box that changes with the section you are viewing
- **Retro sounds** generated with the Web Audio API (no audio files) and a mute button
- Custom cursor, scroll progress bar, glitch/flicker animations
- Fully responsive

## 🧰 Tech Stack

| Tool | Usage |
| --- | --- |
| [React 18](https://react.dev) + [Vite](https://vitejs.dev) | UI and tooling |
| [Tailwind CSS 3](https://tailwindcss.com) | Styling, custom Persona 5 palette, fonts and `clip-path` utilities |
| [Framer Motion](https://www.framer.com/motion/) | Slide-ins, springs, page and section transitions |
| [Lucide React](https://lucide.dev) | Icons |

## 🚀 Getting Started

```bash
git clone https://github.com/marouaneelwali/<repo-name>.git
cd <repo-name>
npm install
npm run dev
```

Open the URL printed by Vite (usually `http://localhost:5173`).

| Script | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build in `dist/` |
| `npm run preview` | Preview the production build locally |

## 📁 Project Structure

```
├── public/assets/        # Persona-style images (mask, brush, joker, morgana, city, shard)
├── src/
│   ├── components/
│   │   ├── Intro.jsx     # "Press any key" title screen
│   │   ├── Hero.jsx      # Main menu
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   ├── Morgana.jsx   # Contextual dialogue guide
│   │   ├── Projects.jsx  # Treasures section
│   │   ├── AllOut.jsx    # Easter egg overlay
│   │   ├── Hud.jsx       # Scroll progress + mute button
│   │   ├── Cursor.jsx    # Custom star cursor
│   │   └── ui.jsx        # Shared Section title + level pips
│   ├── data.js           # ← all your content lives here
│   ├── sound.js          # Web Audio beeps
│   ├── App.jsx
│   └── index.css
├── tailwind.config.js    # Colors, fonts, animations, clip-path utilities
└── vite.config.js
```

## 🎨 Customization

- **Content**: edit `src/data.js` (profile, experience, education, skills and levels).
- **Colors / fonts / shapes**: edit `tailwind.config.js` (`p5red`, `p5black`, `clip-card`, `clip-btn`, `clip-hero`...).
- **Morgana's lines**: edit the `lines` object in `src/components/Morgana.jsx`.
- **Images**: replace files in `public/assets/` (keep the same names).

## 🌍 Deployment

**Vercel / Netlify**: import the repo, build command `npm run build`, output directory `dist`.

**GitHub Pages**: set the base path in `vite.config.js`, then deploy `dist/`:

```js
export default defineConfig({ plugins: [react()], base: '/<repo-name>/' })
```

Then change the image paths from `/assets/...` to `import.meta.env.BASE_URL + 'assets/...'`.

## ⚠️ Credits & Disclaimer

This is a **non-commercial fan-inspired project**. *Persona 5* and its characters, artwork and visual identity belong to **ATLUS / SEGA**. The images in `public/assets/` are fan-sourced and are not covered by this repository's license. Replace them with your own artwork if you plan to use this commercially.

## 📄 License

The source code is released under the [MIT License](./LICENSE). Content in `src/data.js` (personal information) is © Marouane EL WALI.

## 📬 Contact

- ✉️ marouane27112004@gmail.com
- 💼 [LinkedIn](https://linkedin.com/in/marouane-el-wali-aba2a0288)
- 🐙 [GitHub](https://github.com/marouaneelwali)
