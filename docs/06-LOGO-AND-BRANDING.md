# 🏗️ Techglaz Labs — Logo & Branding

> Current logo implementation and branding guidelines.

---

## Current Logo Implementation

The Techglaz Labs logo is currently **text-based** (no image/SVG logo file exists). It's implemented identically in both the Navbar and Footer:

### Logo Markup (Navbar — `NavbarClient.tsx`)

```tsx
<Link href="/" className="flex items-center gap-2 group">
  {/* Icon Mark */}
  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-blue-deep to-brand-blue-steel flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
    <span className="text-white font-extrabold text-lg">T</span>
  </div>
  {/* Wordmark */}
  <div className="flex flex-col">
    <span className="text-lg font-bold text-slate-900 dark:text-white tracking-tight leading-none">
      TECHGLAZ
    </span>
    <span className="text-xs font-semibold text-brand-blue-steel tracking-widest mt-0.5">
      LABS
    </span>
  </div>
</Link>
```

### Logo Composition

```
┌──────────┐  ┌──────────────────┐
│          │  │  TECHGLAZ         │  ← text-lg font-bold tracking-tight
│    T     │  │  LABS             │  ← text-xs font-semibold tracking-widest
│          │  │                   │
└──────────┘  └──────────────────┘
  Icon Mark         Wordmark
```

| Element     | Specification                                              |
| ----------- | ---------------------------------------------------------- |
| **Icon Mark** | 40×40px (`w-10 h-10`), `rounded-xl`, gradient `from-brand-blue-deep to-brand-blue-steel`, white "T" character |
| **TECHGLAZ** | `text-lg`, `font-bold`, `tracking-tight`, `leading-none`  |
| **LABS**     | `text-xs`, `font-semibold`, `text-brand-blue-steel`, `tracking-widest` |
| **Hover**    | Icon mark scales up 5% (`group-hover:scale-105`)          |

### Favicon

- **Location:** `src/app/favicon.ico`
- **Size:** ~25KB

---

## Logo Files Status

> ⚠️ **No dedicated logo image files currently exist** in the `/public` directory.

The `public/` directory only contains default Next.js SVGs:
- `file.svg`
- `globe.svg`
- `next.svg`
- `vercel.svg`
- `window.svg`

---

## Recommended Logo File Structure

When a proper logo is designed, add files to:

```
public/
├── logos/
│   ├── techglaz-logo-full.svg         # Full logo (icon + wordmark)
│   ├── techglaz-logo-full.png         # PNG fallback (1200×400)
│   ├── techglaz-icon.svg              # Icon mark only (square)
│   ├── techglaz-icon-192.png          # PWA icon (192×192)
│   ├── techglaz-icon-512.png          # PWA icon (512×512)
│   ├── techglaz-logo-white.svg        # White version for dark backgrounds
│   ├── techglaz-logo-dark.svg         # Dark version for light backgrounds
│   └── techglaz-og-image.png          # Open Graph social share image (1200×630)
├── favicon.ico                         # ✅ Already exists
└── apple-touch-icon.png               # Apple touch icon (180×180)
```

---

## Brand Guidelines Summary

| Attribute          | Value                                                     |
| ------------------ | --------------------------------------------------------- |
| Brand Name         | **TECHGLAZ LABS**                                         |
| Legal Name         | Techglaz Labs Private Limited                             |
| Primary Color      | Deep Navy `#1a3c6e`                                      |
| Secondary Color    | Steel Blue `#2e75b6`                                     |
| Accent Color       | Amber Gold `#f59e0b`                                     |
| Primary Font       | Inter (Google Fonts)                                      |
| Logo Style         | Gradient icon mark + stacked wordmark                     |
| Tagline            | "Bridging Academic Curricula & Industry Engineering"      |
