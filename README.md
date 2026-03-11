# 🏛️ Maison de nIcK — v2.0.0

> A digital portfolio by **nIcK** — showcasing AI-driven language apps, 3D
> fashion design, woodwork, market tools, and interactive web experiences,
> all built without formal design or coding credentials, powered by AI.

## 🚀 What's New in v2.0.0

### 🆕 KamiVoca — Japanese Vocabulary App

> **[heroyik.github.io/kamivoca](https://heroyik.github.io/kamivoca)**

A brand-new Japanese vocabulary learning app, cloned and extended from the
HolaVoca architecture.

| Feature | Detail |
| :--- | :--- |
| **UI Style** | Duolingo-inspired, modern Tokyo aesthetic |
| **Auth** | Google Sign-In (Firebase Auth) |
| **Data** | All progress stored in **Firestore** per user |
| **Leaderboard** | Live ranking with avatar, score, and streaks |
| **Profile** | XP, level, current streak, total correct answers |
| **Review mode** | Missed-word re-drill engine |
| **Vocab data** | `vocab.json` with 200+ entries including yomigana, |
| | synonyms, example sentences, and JLPT tags |
| **Collage tile** | Added as 11th tile in homepage hero |

---

### 🎨 Homepage Hero Collage — 11 Tiles

The hero collage on the homepage (`index.html`) was expanded from 10 to 11
tiles to include the KamiVoca screenshot.

- `tile-b` CSS grid area split into `tile-b` + `tile-k`
- New tile mapped to `Screenshot_20260312_011638_Chrome.jpg`
  → links to `heroyik.github.io/kamivoca`
- `verify-collage.js` (Playwright test) updated to assert 11 tiles

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
| **KamiVoca** | 🆕 NEW | [heroyik.github.io/kamivoca](https://heroyik.github.io/kamivoca) |
| **VocaJapones** | Live | [heroyik.github.io/VocaJapones](https://heroyik.github.io/VocaJapones) |

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
| **v2.0.0** | KamiVoca added; hero collage → 11 tiles; all CVEs patched; |
| | `package.json` updated to `maison-de-nick@2.0.0` |
| **1.2.5** | `liquidjs` upgraded to `10.25.0` (GHSA-wmfp-5q7x-987x) |
| **1.2.4** | KamiVoca 11th collage tile + `tile-k` CSS + verify test updated |
| **1.2.3** | `minimatch` overridden to `10.2.3` (CVE-2026-27904, -27903) |
| **1.2.2** | Dependabot alerts: `minimatch` + `markdown-it` overrides |
| **1.2.1** | GitHub SVG icon added to footer |
| **1.2.0** | README overhauled with tables, blockquotes, icons |
| **1.1.3** | App card descriptions detailed |
| **1.1.2** | Fixed remaining `netlify.app` links |
| **1.1.1** | All links migrated to `heroyik.github.io` |
| **1.1** | Hero collage: 9→10 images, shuffled dynamically, |
| | Playwright `verify-collage.js` test added |
