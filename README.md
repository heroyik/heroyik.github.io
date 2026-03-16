# 🏛️ Maison de nIcK — v2.2.0

> A digital portfolio by **nIcK** — showcasing AI-driven language apps, 3D
> fashion design, woodwork, market tools, and interactive web experiences,
> all built without formal design or coding credentials, powered by AI.

## 🚀 What's New in v2.2.0

### 💥 Hero Collage Refinements

The 3D Exploding View Hero Collage has been polished for a smoother user experience.

| Feature | Detail |
| :--- | :--- |
| **Hover Interaction** | Restricted tiles' "scale-up" hover effect to only apply in the non-exploded state. |
| **Exploration UX** | Removed distracting z-index jumps and scaling when exploring the exploded collage. |
| **Accessibility** | Tiles converted from `div` to `<a>` tags for native link behavior and better semantic structure. |
| **Mobile Sync** | Full compatibility with Galaxy S25 and iPhone viewport sizes. |

---

## 🚀 Previous in v2.1.0

### 💥 3D Exploding View Hero Collage

The homepage hero collage was transformed from a 2D grid into a premium, interactive **3D Isometric Stack**.

| Feature | Detail |
| :--- | :--- |
| **Visual Style** | Glassmorphic 3D isometric stack |
| **Interaction** | Smooth "Exploding" animation on hover spread across the Z-axis |
| **Connectivity** | Tiles are clickable in both stacked and exploded states |
| **Technology** | Pure CSS 3D Transforms (`perspective`, `translateZ`, `rotate`) |
| **Responsiveness** | Optimized for Desktop, Tablet, and Mobile (Galaxy S25/iPhone) |

---

### 🎨 Homepage Hero Collage — 10 Tiles

The hero collage on the homepage (`index.html`) consists of 10 dynamic
tiles representing flagship projects.

- 10 tiles (`tile-a` through `tile-j`) positioned in a 3D isometric stack.
- Each tile mapped to a project screenshot and URL dynamically.
- `verify-collage.js` (Playwright test) updated to assert 10 tiles.

---

### 🔒 Security — 0 Vulnerabilities

All npm vulnerabilities resolved as of v2.0.0:

| Package | Severity | CVE / Advisory | Fix |
| :--- | :--- | :--- | :--- |
| `liquidjs` | High | GHSA-wmfp-5q7x-987x | Upgraded to `10.25.0` |
| `minimatch` | High | CVE-2026-27904, CVE-2026-27903 | Overridden to `10.2.3` |
| `markdown-it` | Moderate | Dependabot alert | Overridden to `~14.1.1` |

---

## 💻 All Projects

### 🇯🇵 Japanese

| App | Status | Link |
| :--- | :--- | :--- |
| **KamiVoca** | New | [heroyik.github.io/kamivoca](https://heroyik.github.io/kamivoca) |

### 🇪🇸 Spanish

| App | Status | Link |
| :--- | :--- | :--- |
| **HOLA ESPAÑOL A1/A2** | 🔥 HOT | [heroyik.github.io/hola-a1a2](https://heroyik.github.io/hola-a1a2/) |
| **HolaVoca 2.0** | REBOOT | [heroyik.github.io/holavoca/v2](https://heroyik.github.io/holavoca/v2) |
| **Spanish Verb Shadowing** | Live | [shadowing coach](https://spanish-shadowing-coach-623754443070.us-west1.run.app/) |
| **VozViva** | Live | [vozviva](https://vozviva-spanish-mastery-mp3-671064663335.us-west1.run.app/) |

### 🇬🇧 English

| App | Status | Link |
| :--- | :--- | :--- |
| **Colloquial English** | Live | [heroyik.github.io/col_eng](https://heroyik.github.io/col_eng) |

### 🎮 Play & ✨ Flagship

| App | Status | Link |
| :--- | :--- | :--- |
| **Tetris** | Live | [heroyik.github.io/tetmin](https://heroyik.github.io/tetmin) |
| **3D Concept Shop** | IN DEV | [heroyik.github.io/4SeasonsShop](https://heroyik.github.io/4SeasonsShop) |

### 📈 Markets

| App | Status | Link |
| :--- | :--- | :--- |
| **Daily US Stock Briefing** | Live | [heroyik.github.io/finrep](https://heroyik.github.io/finrep) |

---

### 👕 Fashion Design (CLO3D, Mixamo, Blender)

| Project | Motivation | Link |
| :--- | :--- | :--- |
| **Leggings & Sleeveless Blouse** | Camouflage fatigues | [View](https://heroyik.github.io/female-leggings) |
| **Leggings & Batwing Blouse** | Camouflage fatigues | [View](https://heroyik.github.io/fblc) |
| **Set-in Jacket** | Camouflage fatigues | [View](https://heroyik.github.io/fsijc) |
| **Light Skyblue Dress** | MAXMARA Dress | [View](https://heroyik.github.io/sn-mm1) |

### 🪑 Woodwork Design (Sketchup, Blender)

- **[Coffee Table](https://heroyik.github.io/1st-coffee-t)**
- **[Infinite Cube](https://heroyik.github.io/inf-cube)**

---

## 🌍 Deployment

Hosted on **GitHub Pages**. Assets (CSS, JS, images) served directly from
the repo root. Published path: `.` (configured in `netlify.toml`).

---

## 🔄 Revision History

| Version | What Changed |
| :--- | :--- |
| **v2.2.0** | Tiles converted to `<a>` tags; Hover effects removed in exploded state; |
| | Improved exploration UX and mobile linking reliability; |
| **v2.1.0** | 3D Exploding View Hero Collage implemented; 10-tile layout; |
| | Navigation links functional in all states; Eleventy build fixed; |
| **v2.0.0** | All CVEs patched; |
| | `package.json` updated to `maison-de-nick@2.0.0` |
| **1.2.5** | `liquidjs` upgraded to `10.25.0` (GHSA-wmfp-5q7x-987x) |
| **1.2.3** | `minimatch` overridden to `10.2.3` (CVE-2026-27904, -27903) |
| **1.2.2** | Dependabot alerts: `minimatch` + `markdown-it` overrides |
| **1.2.1** | GitHub SVG icon added to footer |
| **1.2.0** | README overhauled with tables, blockquotes, icons |
| **1.1.3** | App card descriptions detailed |
| **1.1.2** | Fixed remaining `netlify.app` links |
| **1.1.1** | All links migrated to `heroyik.github.io` |
| **1.1** | Hero collage: 9→10 images, shuffled dynamically, |
| | Playwright `verify-collage.js` test added |
