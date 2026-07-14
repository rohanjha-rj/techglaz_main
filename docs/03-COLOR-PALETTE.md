# 🎨 Techglaz Labs — Color Palette

> Complete color system used across the platform, defined in `globals.css` via Tailwind CSS v4 `@theme` directive.

---

## Brand Colors

These are the primary identity colors of Techglaz Labs.

| Token                      | Hex         | Tailwind Class               | Usage                                         |
| -------------------------- | ----------- | ---------------------------- | --------------------------------------------- |
| `--color-brand-blue-deep`  | `#1a3c6e`   | `brand-blue-deep`            | Primary brand color, buttons, headings, links  |
| `--color-brand-blue-steel` | `#2e75b6`   | `brand-blue-steel`           | Secondary brand, hovers, accents, navbar active|
| `--color-brand-blue-light` | `#e6f0fa`   | `brand-blue-light`           | Light brand background, card hover states      |
| `--color-brand-accent`     | `#f59e0b`   | `brand-accent`               | Amber CTA accent ("Apply Now" buttons)         |
| `--color-brand-accent-hover`| `#d97706`  | `brand-accent-hover`         | Accent hover state                             |

### Visual Swatches

```
Brand Blue Deep     ██████  #1a3c6e   — Deep navy, primary identity
Brand Blue Steel    ██████  #2e75b6   — Medium blue, interactive elements
Brand Blue Light    ██████  #e6f0fa   — Pale blue wash, subtle backgrounds
Brand Accent        ██████  #f59e0b   — Amber gold, CTA emphasis
Brand Accent Hover  ██████  #d97706   — Darker amber, hover states
```

---

## Custom Slate Palette

Extended slate shades for fine-grained neutral control beyond Tailwind defaults.

| Token                   | Hex         | Tailwind Class   | Usage                                  |
| ----------------------- | ----------- | ---------------- | -------------------------------------- |
| `--color-slate-105`     | `#f4f6f8`   | `slate-105`      | Ultra-light background                  |
| `--color-slate-150`     | `#edf0f4`   | `slate-150`      | Light card backgrounds                  |
| `--color-slate-250`     | `#d5dce8`   | `slate-250`      | Border & divider color                  |
| `--color-slate-305`     | `#c8d4e2`   | `slate-305`      | Subtle borders                          |
| `--color-slate-350`     | `#b0bfd0`   | `slate-350`      | Muted text, disabled states             |
| `--color-slate-450`     | `#7d92aa`   | `slate-450`      | Secondary text                          |
| `--color-slate-455`     | `#7a8fa7`   | `slate-455`      | Contact info text                       |
| `--color-slate-550`     | `#5a6e84`   | `slate-550`      | Body text on dark backgrounds           |
| `--color-slate-650`     | `#3d5168`   | `slate-650`      | Strong secondary text                   |
| `--color-slate-750`     | `#263548`   | `slate-750`      | Dark panel backgrounds                  |
| `--color-slate-850`     | `#192130`   | `slate-850`      | Very dark backgrounds                   |
| `--color-slate-955`     | `#090d14`   | `slate-955`      | Near-black hero background              |

---

## Semantic / Status Colors

| Token                      | Hex         | Tailwind Class    | Usage                              |
| -------------------------- | ----------- | ----------------- | ---------------------------------- |
| `--color-red-450`          | `#f87171`   | `red-450`         | Error highlight / light red        |
| `--color-red-650`          | `#dc2626`   | `red-650`         | Error text / destructive actions   |
| `--color-indigo-650`       | `#4338ca`   | `indigo-650`      | Alternative accent / links         |
| `--color-emerald-650`      | `#059669`   | `emerald-650`     | Success states                     |
| `--color-green-450`        | `#4ade80`   | `green-450`       | Light success indicators           |
| `--color-green-650`        | `#16a34a`   | `green-650`       | Strong success / accepted status   |

---

## Light Mode (`:root`)

| Variable            | Value                                    | Usage                        |
| ------------------- | ---------------------------------------- | ---------------------------- |
| `--background`      | `#fafcff`                                | Page background              |
| `--foreground`      | `#0f172a`                                | Default text color           |
| `--glass-bg`        | `rgba(255, 255, 255, 0.75)`             | Glassmorphism background     |
| `--glass-border`    | `rgba(26, 60, 110, 0.08)`              | Glassmorphism border         |
| `--glass-shadow`    | `0 8px 32px 0 rgba(31, 38, 135, 0.04)` | Glassmorphism shadow         |

## Dark Mode (`.dark`)

| Variable            | Value                                    | Usage                        |
| ------------------- | ---------------------------------------- | ---------------------------- |
| `--background`      | `#0b0f19`                                | Dark page background         |
| `--foreground`      | `#f1f5f9`                                | Dark mode text color         |
| `--glass-bg`        | `rgba(11, 15, 25, 0.8)`                | Dark glassmorphism bg        |
| `--glass-border`    | `rgba(255, 255, 255, 0.08)`            | Dark glassmorphism border    |
| `--glass-shadow`    | `0 8px 32px 0 rgba(0, 0, 0, 0.37)`     | Dark glassmorphism shadow    |

---

## Hero Gradient Colors (Inline)

Used inside `HeroSection.tsx` for the headline gradient text effect:

```css
background: linear-gradient(to right, #60a5fa, #22d3ee, #818cf8);
/* from-blue-400 via-cyan-400 to-indigo-400 */
```

---

## Application Status Badge Colors

Defined in `src/lib/utils.ts` → `getStatusColor()`:

| Status         | Background      | Text            | Border          |
| -------------- | --------------- | --------------- | --------------- |
| `pending`      | `yellow-100`    | `yellow-800`    | `yellow-300`    |
| `under_review` | `blue-100`      | `blue-800`      | `blue-300`      |
| `accepted`     | `green-100`     | `green-800`     | `green-300`     |
| `rejected`     | `red-100`       | `red-800`       | `red-300`       |
| Default        | `gray-100`      | `gray-800`      | `gray-300`      |

---

## Color Usage Guidelines

1. **Primary Actions** → Use `brand-blue-deep` with `brand-blue-steel` on hover
2. **CTA / Call-to-Action** → Use `brand-accent` (amber) for "Apply Now" and high-priority buttons
3. **Backgrounds** → Light mode: `slate-50` / `fafcff`. Dark mode: `slate-900` / `0b0f19`
4. **Text** → Primary: `slate-900` (light) / `slate-50` (dark). Secondary: `slate-600`/`slate-400`
5. **Borders** → Prefer `slate-100`/`slate-800` for subtle divisions
6. **Glass effects** → Use `.glassmorphism` utility class for navbar, cards, overlays
7. **Error/Success** → Red-650 for errors, Green-650 for success, Yellow for pending
