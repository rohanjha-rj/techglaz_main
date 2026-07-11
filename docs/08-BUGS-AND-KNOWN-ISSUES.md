# 🐛 Techglaz Labs — Bugs & Known Issues

> Tracked bugs, technical debt, and known issues in the current codebase.

---

## Critical Issues

### BUG-001: `@ts-ignore` Suppression on CourseHighlights

- **File:** `src/app/(main)/page.tsx` (line 24)
- **Description:** `{/* @ts-ignore */}` is used above `<CourseHighlights />`. This hides a TypeScript error that likely involves async server component props or type mismatches.
- **Impact:** Type safety is bypassed; potential runtime errors won't be caught at compile time.
- **Fix:** Investigate the type mismatch between CourseHighlights' expected props and what the home page passes. Likely needs proper async typing or a type assertion.

### BUG-002: NextAuth v5 Beta Stability

- **File:** `src/lib/auth.ts`, `src/middleware.ts`
- **Description:** NextAuth is at `^5.0.0-beta.31`. Beta versions may contain breaking changes, unstable APIs, or undocumented behavior.
- **Impact:** Authentication flow may break on updates. API surface may change.
- **Fix:** Monitor NextAuth v5 stable release and upgrade when available. Pin version in `package.json` if stability is needed.

---

## UI / Visual Bugs

### BUG-003: No Dark Mode Toggle

- **File:** `src/app/layout.tsx`
- **Description:** The codebase has full dark mode CSS support (`.dark` class selectors, dark mode Tailwind variants), but **no UI toggle** exists to switch between light/dark mode.
- **Impact:** Dark mode is inaccessible to users unless they manually add the `.dark` class.
- **Fix:** Add a theme toggle component (e.g., sun/moon icon in navbar) that toggles the `.dark` class on `<html>` and persists preference to `localStorage`.

### BUG-004: Unused `Settings` Icon Import

- **File:** `src/components/layout/NavbarClient.tsx` (line 6)
- **Description:** `Settings` is imported from `lucide-react` but never used in the component JSX.
- **Impact:** Minor — dead code in the bundle (tree-shaking should remove it, but it's still messy).
- **Fix:** Remove the unused `Settings` import.

### BUG-005: `any` Type Used for Session Prop

- **Files:** `src/components/layout/NavbarClient.tsx` (line 12), `src/components/layout/MobileMenu.tsx`
- **Description:** `session: any` is used instead of the proper NextAuth session type.
- **Impact:** No type safety on session object access, potential runtime errors.
- **Fix:** Import and use the proper `Session` type from `next-auth`.

### BUG-006: `any` Type for Framer Motion Variants

- **File:** `src/components/home/HeroSection.tsx` (line 20)
- **Description:** `const itemVariants: any = { ... }` — using `any` instead of Framer Motion's `Variants` type.
- **Impact:** No autocomplete or type checking for animation variants.
- **Fix:** Import and use `Variants` type from `framer-motion`.

---

## Data & Content Issues

### BUG-007: Placeholder Contact Information

- **Files:** `src/components/layout/Footer.tsx`, `src/lib/constants.ts`
- **Description:** Phone number (`+91 99999 99999`), address, and WhatsApp number use placeholder values. Social media URLs are also generic placeholders.
- **Impact:** Users cannot contact the organization via the website.
- **Fix:** Replace with actual contact details via environment variables (`NEXT_PUBLIC_*`).

### BUG-008: Hardcoded Default Stats

- **File:** `src/lib/constants.ts` (lines 140-145)
- **Description:** `DEFAULT_STATS` has hardcoded values (500 students, 95% placement, etc.) that may not reflect actual data.
- **Impact:** Potentially misleading information displayed to users.
- **Fix:** Either pull stats from Sanity CMS dynamically or keep them updated manually.

---

## SEO & Metadata Issues

### BUG-009: Missing Privacy & Terms Pages

- **File:** `src/components/layout/Footer.tsx` (lines 151-156)
- **Description:** Footer links to `/privacy` and `/terms` pages, but **no corresponding route files exist**.
- **Impact:** Users clicking these links get a 404 error.
- **Fix:** Create `/privacy` and `/terms` pages with proper legal content.

### BUG-010: Missing `apple-touch-icon.png`

- **Description:** No Apple touch icon is defined in the public directory.
- **Impact:** iOS devices show a blank or auto-generated icon when adding site to home screen.
- **Fix:** Add `apple-touch-icon.png` (180×180) to `/public`.

---

## Security Concerns

### BUG-011: Sanity Studio Placeholder Project ID

- **File:** `sanity/sanity.config.ts` (line 15)
- **Description:** `projectId: projectId || "placeholder-id"` — if env var is missing, it defaults to a non-existent project.
- **Impact:** Sanity Studio will fail silently or show errors in production.
- **Fix:** Fail loudly if `projectId` is not set (throw an error).

### BUG-012: No Rate Limiting on API Routes

- **Files:** `src/app/api/apply/`, `src/app/api/contact/`
- **Description:** No rate limiting is implemented on the application submission and contact form APIs.
- **Impact:** Susceptible to spam submissions and potential DDoS.
- **Fix:** Add rate limiting middleware (e.g., `next-rate-limit` or implement IP-based throttling).

---

## Performance Issues

### BUG-013: No Image Optimization Configuration

- **File:** `next.config.ts`
- **Description:** `next.config.ts` is empty — no `images.remotePatterns` configured for Sanity image domains.
- **Impact:** `next/image` will reject external images from Sanity CDN, or images won't be optimized.
- **Fix:** Add `images.remotePatterns` for `cdn.sanity.io` in `next.config.ts`.

---

## Summary Table

| ID       | Severity   | Category    | Status   | Description                          |
| -------- | ---------- | ----------- | -------- | ------------------------------------ |
| BUG-001  | 🔴 High   | TypeScript  | Open     | `@ts-ignore` on CourseHighlights     |
| BUG-002  | 🟡 Medium | Dependency  | Open     | NextAuth v5 beta instability          |
| BUG-003  | 🟡 Medium | UI          | Open     | No dark mode toggle                   |
| BUG-004  | 🟢 Low    | Code Quality| Open     | Unused `Settings` import              |
| BUG-005  | 🟡 Medium | TypeScript  | Open     | `any` type for session props          |
| BUG-006  | 🟢 Low    | TypeScript  | Open     | `any` type for motion variants        |
| BUG-007  | 🔴 High   | Content     | Open     | Placeholder contact info              |
| BUG-008  | 🟡 Medium | Content     | Open     | Hardcoded stats                       |
| BUG-009  | 🔴 High   | SEO/Legal   | Open     | Missing privacy & terms pages         |
| BUG-010  | 🟢 Low    | SEO         | Open     | Missing apple-touch-icon              |
| BUG-011  | 🟡 Medium | Security    | Open     | Sanity placeholder project ID         |
| BUG-012  | 🔴 High   | Security    | Open     | No API rate limiting                  |
| BUG-013  | 🟡 Medium | Performance | Open     | No image optimization config          |
