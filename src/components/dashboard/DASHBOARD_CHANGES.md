# TechGlaz Trainee Dashboard — Redesign & Feature Update

**Author:** Monk
**Branch:** `feature/dashboard-redesign`
**Scope:** Frontend only — no backend/API/database changes
**Base file:** `src/components/dashboard/TraineeDashboard.tsx` (+ new sub-components)

---

## 1. Overview

This branch evolves the trainee dashboard from a static information portal into
a performance-tracking cockpit. Every new widget answers one of three
questions: *what should I do today*, *how am I performing*, and *am I
improving over time*. All changes are frontend-only per instructions — no
backend logic, API routes, or database schema were touched.

---

## 2. New Files

| File | Purpose |
|---|---|
| `src/components/dashboard/LearningHeatmap.tsx` | GitHub-style contribution heatmap with metric + range dropdowns |
| `src/components/dashboard/ProgressRing.tsx` | Reusable circular progress ring (used for Study Hours + Productivity Index) |
| `src/components/dashboard/SmartWarnings.tsx` | Contextual alert cards (goal behind, overdue tasks, streak expiring, etc.) |
| `src/components/dashboard/WeeklyInsights.tsx` | Weekly/Monthly performance summary card |

---

## 3. Feature Breakdown

### 3.1 Removed
- **Live Local Time card** — redundant (every device shows local time), freed above-the-fold space for performance metrics.

### 3.2 Task Planner — Priority System
- Tasks now support `priority: "P1" | "P2" | "P3"` (red / yellow / green).
- Auto-sorts: P1 → P2 → P3.
- Colored left-border + priority badge per task row.
- Existing complete/delete/quick-add functionality unchanged.

### 3.3 Study Hours Card
- Replaced single weekly progress bar with **Daily/Weekly toggle** + circular progress ring.
- Ring enlarged to be the card's visual focus (comfortable padding retained).
- **Hover tooltip** on the ring shows period-specific stats (hours, sessions, tasks completed) — positioned via `getBoundingClientRect()` relative to the ring, not fixed-position.
- Daily and Weekly targets are independently configurable (`dailyTargetHours`, `weeklyTargetHours`), not derived from one another.

### 3.4 Session Tracker
- **Two modes:** Stopwatch (counts up, default) and Countdown (counts down from a user-set duration).
- **Pomodoro mode:** now supports **custom study/break durations** (previously hardcoded to 25 min) via a themed +/- stepper (dark background, emerald accents, no native browser number-input arrows).
- **Focus mode:** when *any* timer is running (Stopwatch, Countdown, or Pomodoro), the rest of the dashboard dims/blurs (`opacity-15 pointer-events-none hover:opacity-100`) while the Session Tracker card stays fully interactive. Driven by a single `isAnyTimerRunning` boolean (previously Pomodoro-only, generalized in this branch).
- Timer display enlarged to match the Study Hours ring treatment — primary visual focus of the card.

### 3.5 Learning Heatmap
- True GitHub-style grid: independent per-cell intensity values (not stacked/bar-chart-disguised-as-squares).
- **Two dropdowns** (consolidated from four separate toggle buttons):
  - **Metric:** Study Hours / Sessions / Tasks Completed / Attendance
  - **Range:** 90 Days (default) / 180 Days
- 4-step color intensity scale with "Less → More" legend.
- **Hover tooltip** anchored to the specific hovered cell (position computed from the cell's own bounding rect, with edge-flipping near grid boundaries) — not a fixed page position.
- Caption ("Past 90 Days" / "Past 180 Days") updates dynamically with the selected range.

### 3.6 Trainee Hub
- All 6 original nodes preserved: Active, Completed, Pending, Explore Catalog, Class Schedule, Task Planner.
- Fixed connector line alignment (previously had stray/misaligned segments between hub and nodes).

### 3.7 Performance Insights (new)
- New card below Trainee Hub.
- **Weekly/Monthly toggle** — same metric types (Study Time, Longest Session, Avg Session, Tasks Completed, Goal Completion), different scope/mock values per period.

### 3.8 Smart Assistant Alerts (new)
- Contextual status cards: goal falling behind, overdue tasks, inactivity warning (e.g. subject not studied in N days), streak expiring, positive reinforcement (consistency streaks).
- Redesigned for readability after initial cramped layout: increased padding, icon+title on one line, description below with proper line-height, word-boundary wrapping (not mid-word).

### 3.9 Layout Changes
- **Quote of the Day** relocated from the left column (below Trainee Hub) to the bottom of the page, just above the footer.
- Corporate Placement Tracker, Achievements, and Ambient Focus Audio sections retained in original position/styling.

### 3.10 Accent Color
- Confirmed emerald green (`#10b981`-style) as the consistent primary accent across Productivity Index ring, "Book Placement Mock Interview" button, and Goal Completion bar (an earlier design pass briefly drifted to cyan in these spots — reverted).

---

## 4. Mock Data — ⚠️ Read Before Wiring to Backend

The following are **static/mock data**, clearly marked with `// MOCK DATA` comments in code. They render correctly for demo purposes but are **not** connected to real aggregation logic:

| Feature | Why it's mocked | What backend work it needs |
|---|---|---|
| Weekly Insights (`WeeklyInsights.tsx`) | "↑14.5% vs last week" requires historical comparison | New endpoint/query returning prior-period totals |
| Monthly Insights (`WeeklyInsights.tsx`) | Same as above, 30-day scope | Same, monthly aggregation |
| Smart Assistant Alerts (`SmartWarnings.tsx`) | "Haven't studied X in 9 days" requires subject-tagged session data + date-diff rule engine | Subject tagging on study sessions + a rules/alerts service |
| Learning Heatmap historical cells (`LearningHeatmap.tsx`) | Daily-level historical granularity likely not yet exposed by existing APIs | Endpoint returning per-day activity counts for the last 90/180 days |
| Study Hours "Today" ring daily target/progress | Daily breakdown may not exist in backend yet | Endpoint or field for today's logged hours specifically |

**Do not treat any of the above as production-ready** — they're wired so the UI/UX can be evaluated and approved before backend work is scoped.

---

## 5. What Was Explicitly NOT Touched

Per constraints given for this task:
- `src/proxy.ts` (auth/routing protection)
- Any `/api` routes
- `src/lib/localDb.json` structure (mock DB fallback)
- Database schema / Mongoose models
- Navbar (logo, nav links, search, notifications, user menu, Apply Now button)

---

## 6. Testing Done

Manually verified after each major change (see commit history for granularity):

- [x] Task checkbox toggle, add, delete
- [x] Priority dropdown on quick-add task, auto-sort by priority
- [x] Ambient sound toggle (Rain / Ocean / Binaural) + active-state styling
- [x] Pomodoro mode toggle + custom study/break duration inputs
- [x] Stopwatch mode (default) and Countdown mode, including custom countdown duration
- [x] Focus/blur behavior on all three timer types (Stopwatch, Countdown, Pomodoro) — dims on start, restores on pause/reset
- [x] Study Hours Daily/Weekly toggle + hover tooltip positioning
- [x] Heatmap Metric + Range dropdowns, default range = 90 days
- [x] Heatmap hover tooltip anchored correctly at grid edges (top/bottom/left/right cells)
- [x] Mock interview booking button
- [x] Streak check-in
- [x] Trainee Hub — all 6 nodes clickable, connector lines aligned
- [x] Mobile responsive layout (`grid-cols-1`) and desktop (`lg:grid-cols-4`)
- [x] No TypeScript errors, clean `npm run dev` build, no console errors

---

## 7. Known Issues / Follow-ups

- None outstanding as of this branch's last commit. If a `1 Issue` indicator appears in the Next.js dev overlay after pulling this branch, check the browser console — flag it before merging, don't assume it's stale.
- Backend aggregation work listed in **Section 4** should be scoped as a separate follow-up ticket before any of the mocked features go live for real users.

---

## 8. How to Test Locally

```bash
git checkout feature/dashboard-redesign
npm install
# Ensure .env.local has ALLOW_OFFLINE_DB_BYPASS=true for mock-auth login
npm run dev
```

Log in with `trainee@techglaz.com` (any password, offline bypass mode) and navigate to `/dashboard`.
