# 🚀 Techglaz Labs — Improvement Roadmap (Phase by Phase)

> Strategic improvement plan organized into 5 phases, from critical fixes to long-term growth.

---

## Phase 1: Foundation & Bug Fixes (Week 1–2)

> **Goal:** Fix all critical bugs, plug security holes, and ensure the site is production-ready.

### 🔴 Critical Fixes

| Task                                        | Related Bug  | Effort   |
| ------------------------------------------- | ------------ | -------- |
| Fix `@ts-ignore` on `CourseHighlights`      | BUG-001      | 1 hour   |
| Replace placeholder contact info with real data | BUG-007  | 30 min   |
| Create `/privacy` and `/terms` pages        | BUG-009      | 4 hours  |
| Configure `next.config.ts` image remotePatterns for Sanity CDN | BUG-013 | 30 min |
| Add Sanity projectId validation (fail if missing) | BUG-011 | 30 min |
| Pin NextAuth version for stability          | BUG-002      | 15 min   |

### 🛡️ Security Hardening

| Task                                        | Related Bug  | Effort   |
| ------------------------------------------- | ------------ | -------- |
| Add rate limiting on `/api/apply` and `/api/contact` | BUG-012 | 2 hours |
| Add CSRF protection to forms                | —            | 2 hours  |
| Add input sanitization on server-side       | —            | 2 hours  |
| Environment variable validation (Zod schema)| —            | 1 hour   |

### 🧹 Code Quality

| Task                                        | Related Bug  | Effort   |
| ------------------------------------------- | ------------ | -------- |
| Remove unused `Settings` import             | BUG-004      | 5 min    |
| Replace `any` types with proper types       | BUG-005, 006 | 1 hour   |
| Add ESLint rules for `no-explicit-any`      | —            | 30 min   |

**Phase 1 Total Estimated Effort: ~15 hours**

---

## Phase 2: Core UX Enhancements (Week 3–4)

> **Goal:** Elevate user experience with essential missing features.

### 🎨 UI/UX Improvements

| Task                                        | Priority     | Effort   |
| ------------------------------------------- | ------------ | -------- |
| Dark mode toggle (sun/moon icon in navbar)  | 🟡 Medium    | 4 hours  |
| Add proper logo files (SVG, PNG, OG image)  | 🟡 Medium    | 2 hours  |
| Add `apple-touch-icon.png` and web manifest | 🟢 Low       | 1 hour   |
| Improve mobile menu animations              | 🟢 Low       | 2 hours  |
| Add page transition animations              | 🟢 Low       | 3 hours  |
| Add "Back to Top" button                    | 🟢 Low       | 1 hour   |
| Add "Loading" progress bar (NProgress)      | 🟢 Low       | 1 hour   |

### 🔐 Auth Enhancements

| Task                                        | Priority     | Effort   |
| ------------------------------------------- | ------------ | -------- |
| Email verification after signup             | 🔴 High      | 6 hours  |
| Google OAuth login                          | 🟡 Medium    | 4 hours  |
| "Remember me" checkbox on login             | 🟢 Low       | 1 hour   |

### 📊 Analytics & Monitoring

| Task                                        | Priority     | Effort   |
| ------------------------------------------- | ------------ | -------- |
| Add Vercel Analytics or Google Analytics    | 🟡 Medium    | 2 hours  |
| Add error tracking (Sentry)                 | 🟡 Medium    | 3 hours  |

**Phase 2 Total Estimated Effort: ~30 hours**

---

## Phase 3: User Platform Features (Week 5–8)

> **Goal:** Build the core user platform features that drive engagement and enrollment.

### 👤 User Experience

| Task                                        | Priority     | Effort   |
| ------------------------------------------- | ------------ | -------- |
| User profile page (view/edit personal info) | 🟡 Medium    | 8 hours  |
| Application tracking dashboard (detailed)   | 🔴 High      | 12 hours |
| Notification system (email + in-app)        | 🟡 Medium    | 10 hours |
| Course wishlist / bookmarks                 | 🟢 Low       | 4 hours  |

### 🏫 Course System

| Task                                        | Priority     | Effort   |
| ------------------------------------------- | ------------ | -------- |
| Course enrollment flow (interest → payment) | 🔴 High      | 16 hours |
| Course progress tracking                    | 🟡 Medium    | 8 hours  |
| Course reviews & ratings by students        | 🟡 Medium    | 6 hours  |
| Batch/schedule management in CMS            | 🟡 Medium    | 6 hours  |

### 🔍 Search & Discovery

| Task                                        | Priority     | Effort   |
| ------------------------------------------- | ------------ | -------- |
| Global search (courses, trainers, projects) | 🟡 Medium    | 10 hours |
| Advanced course filters (price, duration)   | 🟡 Medium    | 6 hours  |
| Related courses recommendations             | 🟢 Low       | 4 hours  |

**Phase 3 Total Estimated Effort: ~90 hours**

---

## Phase 4: Monetization & Admin Tools (Week 9–14)

> **Goal:** Enable payments, build admin tools, and prepare for scale.

### 💳 Payment Integration

| Task                                        | Priority     | Effort   |
| ------------------------------------------- | ------------ | -------- |
| Razorpay/Stripe integration                 | 🔴 High      | 16 hours |
| Payment confirmation emails                 | 🔴 High      | 4 hours  |
| Invoice/receipt generation                  | 🟡 Medium    | 6 hours  |
| Refund management                           | 🟡 Medium    | 6 hours  |
| Coupon/discount codes                       | 🟢 Low       | 8 hours  |

### 🔧 Admin Dashboard

| Task                                        | Priority     | Effort   |
| ------------------------------------------- | ------------ | -------- |
| Custom admin dashboard (beyond Sanity)      | 🔴 High      | 20 hours |
| Application review & status management      | 🔴 High      | 10 hours |
| Bulk email to applicants                    | 🟡 Medium    | 6 hours  |
| Analytics dashboard (enrollments, traffic)  | 🟡 Medium    | 12 hours |
| User management (view/block/role assign)    | 🟡 Medium    | 8 hours  |

### 📜 Certificate System

| Task                                        | Priority     | Effort   |
| ------------------------------------------- | ------------ | -------- |
| Course completion certificate generation    | 🟡 Medium    | 12 hours |
| Certificate verification page (public)      | 🟡 Medium    | 4 hours  |
| LinkedIn-compatible certificate sharing     | 🟢 Low       | 4 hours  |

**Phase 4 Total Estimated Effort: ~116 hours**

---

## Phase 5: Growth & Scale (Week 15+)

> **Goal:** Advanced features for growth, marketing, and platform maturity.

### 📝 Content & Marketing

| Task                                        | Priority     | Effort   |
| ------------------------------------------- | ------------ | -------- |
| Blog / news section (Sanity CMS)           | 🟡 Medium    | 12 hours |
| Image/video gallery for events              | 🟢 Low       | 8 hours  |
| Video testimonials (YouTube embeds)         | 🟢 Low       | 4 hours  |
| Newsletter subscription (Resend lists)      | 🟢 Low       | 6 hours  |
| Social media sharing integration            | 🟢 Low       | 3 hours  |

### 🤖 Advanced Features

| Task                                        | Priority     | Effort   |
| ------------------------------------------- | ------------ | -------- |
| AI-powered course recommendation chatbot    | 🟢 Low       | 20 hours |
| Multi-language support (i18n - Hindi/English)| 🟢 Low      | 16 hours |
| PWA support (offline, install prompt)       | 🟢 Low       | 8 hours  |
| Webhook integrations (CRM, Slack)           | 🟢 Low       | 8 hours  |

### 📈 Performance & Infrastructure

| Task                                        | Priority     | Effort   |
| ------------------------------------------- | ------------ | -------- |
| CDN optimization for Sanity images          | 🟡 Medium    | 4 hours  |
| Database indexing optimization              | 🟡 Medium    | 4 hours  |
| Automated testing (Jest + Playwright)       | 🟡 Medium    | 20 hours |
| CI/CD pipeline (GitHub Actions)             | 🟡 Medium    | 8 hours  |
| Staging environment setup                   | 🟡 Medium    | 4 hours  |
| Performance monitoring (Core Web Vitals)    | 🟡 Medium    | 4 hours  |

**Phase 5 Total Estimated Effort: ~129 hours**

---

## Summary Timeline

```
Phase 1 ──── Foundation & Bug Fixes ──── Week 1-2 ──── ~15 hours
Phase 2 ──── Core UX Enhancements ────── Week 3-4 ──── ~30 hours
Phase 3 ──── User Platform Features ──── Week 5-8 ──── ~90 hours
Phase 4 ──── Monetization & Admin ─────── Week 9-14 ─── ~116 hours
Phase 5 ──── Growth & Scale ──────────── Week 15+ ──── ~129 hours
                                                     ─────────────
                                              TOTAL ≈ ~380 hours
```

---

## Priority Legend

| Symbol | Meaning    |
| ------ | ---------- |
| 🔴     | High — Must have for production launch |
| 🟡     | Medium — Important for user experience |
| 🟢     | Low — Nice to have, can be deferred    |
