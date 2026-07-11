# 🖋️ Techglaz Labs — Theme, Typography & Text Sizes

> Design system tokens covering fonts, text sizes, animations, glassmorphism, and button styles.

---

## Fonts

Defined in `src/app/layout.tsx` and referenced in `globals.css`.

| Font             | CSS Variable          | Fallback Stack                       | Usage                              |
| ---------------- | --------------------- | ------------------------------------ | ---------------------------------- |
| **Inter**        | `--font-inter`        | `Arial, Helvetica, sans-serif`       | Primary body & UI font (sans)      |
| **Geist Mono**   | `--font-geist-mono`   | `monospace`                          | Code blocks & monospaced content   |

### Font Loading

Both fonts are loaded via `next/font/google` with the `"latin"` subset for optimal performance:

```tsx
// src/app/layout.tsx
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
```

### Font Feature Settings

```css
body {
  font-feature-settings: "cv02", "cv03", "cv04", "cv11";
}
```

These OpenType features enable Inter's stylistic alternates for a more refined look:
- `cv02` — Open digit 4
- `cv03` — Open digit 6
- `cv04` — Open digit 9
- `cv11` — Single-story lowercase `a`

---

## Text Sizes Used Across the Platform

| Tailwind Class               | Approx. Size | Where Used                                      |
| ---------------------------- | ------------ | ----------------------------------------------- |
| `text-xs`                    | 12px         | Badges, tags, labels, "LABS" subtitle            |
| `text-sm`                    | 14px         | Nav links, body text, form labels, card details  |
| `text-base`                  | 16px         | Hero description, button text, body paragraphs   |
| `text-lg`                    | 18px         | Hero description (sm+), section headings          |
| `text-xl`                    | 20px         | Hero description (lg+), sub-headings             |
| `text-2xl`                   | 24px         | Section headings, stats numbers                  |
| `text-3xl`                   | 30px         | Page titles, large headings                      |
| `text-4xl`                   | 36px         | Hero headline (mobile)                           |
| `text-5xl`                   | 48px         | Hero headline (tablet)                           |
| `text-6xl`                   | 60px         | Hero headline (desktop)                          |

### Font Weight Scale

| Tailwind Class    | Weight | Usage                                          |
| ----------------- | ------ | ---------------------------------------------- |
| `font-medium`     | 500    | Nav links, button text, body emphasis           |
| `font-semibold`   | 600    | Section headings, card titles, nav active       |
| `font-bold`       | 700    | CTA buttons, brand name "TECHGLAZ", headings    |
| `font-extrabold`  | 800    | Hero headline, logo "T" character               |

---

## Theme Modes

### Light Mode (Default)

| Property    | Value       | Description                 |
| ----------- | ----------- | --------------------------- |
| Background  | `#fafcff`   | Very light blue-white       |
| Foreground  | `#0f172a`   | Near-black slate            |
| Body bg     | `slate-50`  | Tailwind's slate-50         |

### Dark Mode (`.dark` class)

| Property    | Value       | Description                 |
| ----------- | ----------- | --------------------------- |
| Background  | `#0b0f19`   | Very dark navy              |
| Foreground  | `#f1f5f9`   | Light slate                 |
| Body bg     | `slate-900` | Tailwind's slate-900        |

> **Note:** Dark mode is applied via the `.dark` class on `<html>`. Currently no theme toggle is implemented (see [Bugs & Known Issues](./08-BUGS-AND-KNOWN-ISSUES.md)).

---

## Glassmorphism System

Defined as a reusable CSS utility class in `globals.css`:

```css
.glassmorphism {
  background: var(--glass-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
}
```

**Used in:**
- Navbar (when scrolled)
- Card overlays
- Modal backgrounds

---

## Custom Animations

Defined inside `@theme` in `globals.css`:

| Animation Name   | Tailwind Class         | Duration / Easing                          | Description                         |
| ---------------- | ---------------------- | ------------------------------------------ | ----------------------------------- |
| `fade-in`        | `animate-fade-in`      | `0.5s ease-out forwards`                   | Fade from 0 to 1 opacity            |
| `slide-up`       | `animate-slide-up`     | `0.6s cubic-bezier(0.16,1,0.3,1) forwards` | Slide up 20px with fade             |
| `float`          | `animate-float`        | `3s ease-in-out infinite`                  | Gentle vertical float (-8px)         |
| `pulse-slow`     | `animate-pulse-slow`   | `3s cubic-bezier(0.4,0,0.6,1) infinite`   | Slow pulsing scale + opacity         |

### Framer Motion Patterns

The project extensively uses **Framer Motion** for orchestrated animations:

```tsx
// Container pattern with staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

// Individual item spring animation
const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0, opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};
```

---

## Button System

Three global button styles defined in `globals.css`:

### `.btn-primary`
```
bg-brand-blue-deep → hover:bg-brand-blue-steel
Text: white | Font: medium
Padding: px-6 py-2.5 | Rounded: lg
Transitions: shadow-md → shadow-lg, translate-y hover lift
```

### `.btn-secondary`
```
bg-white → hover:bg-brand-blue-light
Text: brand-blue-deep | Border: brand-blue-deep/20
Padding: px-6 py-2.5 | Rounded: lg
Transitions: shadow-sm → shadow-md
```

### `.btn-accent`
```
bg-brand-accent → hover:bg-brand-accent-hover
Text: slate-900 | Font: semibold
Padding: px-6 py-2.5 | Rounded: lg
Transitions: shadow-md → shadow-lg, translate-y hover lift
```

---

## Custom Scrollbar

```css
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: rgba(46, 117, 182, 0.2); border-radius: 9999px; }
::-webkit-scrollbar-thumb:hover { background: rgba(46, 117, 182, 0.4); }
```

Uses brand blue steel at 20% opacity for a subtle, on-brand scrollbar.

---

## Spacing & Layout Constants

| Pattern                  | Value                | Usage                          |
| ------------------------ | -------------------- | ------------------------------ |
| Max content width        | `max-w-7xl` (80rem)  | All sections & containers      |
| Horizontal padding       | `px-4 sm:px-6 lg:px-8` | Consistent section padding   |
| Section vertical padding | `py-16` to `py-20`   | Major content sections         |
| Grid gap                 | `gap-4` to `gap-10`  | Card grids & layout columns    |
| Border radius            | `rounded-lg` / `rounded-xl` | Cards, buttons, inputs  |
