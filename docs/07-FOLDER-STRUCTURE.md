# 📁 Techglaz Labs — Folder Structure

> Complete project directory tree with descriptions.

---

## Root Directory

```
techglaz_main/
├── .git/                          # Git version control
├── .gitignore                     # Git ignore rules
├── AGENTS.md                      # AI agent rules (Next.js-specific)
├── CLAUDE.md                      # Claude AI context file
├── README.md                      # Project readme (default Next.js)
│
├── eslint.config.mjs              # ESLint v9 flat config
├── next.config.ts                 # Next.js configuration
├── package.json                   # Dependencies & scripts
├── package-lock.json              # Lockfile
├── postcss.config.mjs             # PostCSS config (Tailwind v4 plugin)
├── tsconfig.json                  # TypeScript configuration
│
├── docs/                          # 📖 Project documentation (this folder)
│   ├── 01-PROJECT-OVERVIEW.md
│   ├── 02-TECH-STACK.md
│   ├── 03-COLOR-PALETTE.md
│   ├── 04-THEME-AND-TYPOGRAPHY.md
│   ├── 05-ICONS.md
│   ├── 06-LOGO-AND-BRANDING.md
│   ├── 07-FOLDER-STRUCTURE.md     # (this file)
│   ├── 08-BUGS-AND-KNOWN-ISSUES.md
│   ├── 09-FEATURES.md
│   └── 10-IMPROVEMENT-ROADMAP.md
│
├── public/                        # Static public assets
│   ├── favicon.ico                # Site favicon
│   ├── file.svg                   # Default Next.js icon
│   ├── globe.svg                  # Default Next.js icon
│   ├── next.svg                   # Next.js logo
│   ├── vercel.svg                 # Vercel logo
│   └── window.svg                 # Default Next.js icon
│
├── sanity/                        # 🏗️ Sanity CMS Configuration
│   ├── env.ts                     # Sanity project ID & dataset env vars
│   ├── sanity.config.ts           # Sanity Studio configuration
│   ├── lib/                       # Sanity client & query utilities
│   └── schemas/                   # CMS content type schemas
│       ├── index.ts               # Schema registry (exports all types)
│       ├── course.ts              # Course content type
│       ├── trainer.ts             # Trainer profiles
│       ├── project.ts             # Student/R&D projects
│       ├── testimonial.ts         # Student testimonials
│       ├── placementRecord.ts     # Placement records
│       ├── partner.ts             # Partner institutions
│       ├── rndActivity.ts         # R&D activities
│       └── founderMessage.ts      # Founder's message
│
└── src/                           # 🧩 Application Source Code
    ├── middleware.ts               # NextAuth middleware (route protection)
    │
    ├── app/                       # Next.js App Router
    │   ├── favicon.ico            # App favicon
    │   ├── globals.css            # Global CSS (theme, colors, animations)
    │   ├── layout.tsx             # Root layout (fonts, providers)
    │   ├── robots.ts              # SEO robots.txt generation
    │   ├── sitemap.ts             # SEO sitemap generation
    │   │
    │   ├── (main)/                # 🌐 Main route group (with navbar/footer)
    │   │   ├── layout.tsx         # Main layout (Navbar + Footer wrapper)
    │   │   ├── page.tsx           # Home page (/)
    │   │   ├── about/             # About page
    │   │   ├── apply/             # Application form page
    │   │   ├── contact/           # Contact page
    │   │   ├── dashboard/         # User dashboard (protected)
    │   │   ├── forgot-password/   # Forgot password page
    │   │   ├── login/             # Login page
    │   │   ├── partners/          # Partners listing page
    │   │   ├── placements/        # Placement records page
    │   │   ├── projects/          # Projects showcase page
    │   │   ├── r-and-d/           # R&D activities page
    │   │   ├── reset-password/    # Password reset page
    │   │   ├── signup/            # Signup page
    │   │   ├── testimonials/      # Testimonials page
    │   │   ├── trainers/          # Trainers listing
    │   │   │   └── [slug]/        # Individual trainer profile
    │   │   └── trainings/         # Trainings/courses listing
    │   │       └── [domain]/
    │   │           └── [course]/   # Individual course detail page
    │   │
    │   ├── admin/                 # 🔧 Sanity Studio (catch-all route)
    │   │   └── [[...index]]/      # Sanity Studio pages
    │   │
    │   └── api/                   # 🔌 API Route Handlers
    │       ├── apply/             # Application submission endpoint
    │       ├── auth/              # NextAuth authentication routes
    │       └── contact/           # Contact form submission endpoint
    │
    ├── components/                # ♻️ React Components
    │   ├── auth/                  # Authentication components
    │   │   ├── LoginForm.tsx      # Login form with validation
    │   │   └── SignUpForm.tsx     # Registration form with validation
    │   │
    │   ├── courses/               # Course-related components
    │   │   ├── CourseCard.tsx     # Course preview card
    │   │   └── SyllabusAccordion.tsx # Expandable syllabus modules
    │   │
    │   ├── forms/                 # Form components
    │   │   ├── ApplicationForm.tsx # Multi-field application form
    │   │   └── ContactForm.tsx    # Contact inquiry form
    │   │
    │   ├── home/                  # Home page sections
    │   │   ├── HeroSection.tsx    # Animated hero with CTAs
    │   │   ├── StatsBar.tsx       # Numerical stats counters
    │   │   ├── CourseHighlights.tsx # Featured courses grid
    │   │   ├── TestimonialsPreview.tsx # Carousel of testimonials
    │   │   └── PlacementHighlights.tsx # Placement statistics
    │   │
    │   ├── layout/                # Layout/structural components
    │   │   ├── Navbar.tsx         # Server wrapper for NavbarClient
    │   │   ├── NavbarClient.tsx   # Client navbar with dropdowns
    │   │   ├── MobileMenu.tsx     # Slide-out mobile drawer menu
    │   │   ├── Footer.tsx         # Site footer
    │   │   └── WhatsAppButton.tsx # Floating WhatsApp CTA
    │   │
    │   └── shared/                # Reusable shared components
    │       ├── AnimatedCounter.tsx # Animated number counter
    │       ├── LeafletMap.tsx     # Leaflet map component
    │       ├── LeafletMapWrapper.tsx # Dynamic import wrapper (no SSR)
    │       ├── LoadingSkeleton.tsx # Loading skeleton placeholders
    │       ├── PageHero.tsx       # Generic page hero with breadcrumbs
    │       └── SectionHeading.tsx # Reusable section heading
    │
    ├── lib/                       # 🔧 Utilities & Configuration
    │   ├── auth.config.ts         # NextAuth edge-compatible config
    │   ├── auth.ts                # Full NextAuth configuration
    │   ├── constants.ts           # App-wide constants (nav, courses, etc.)
    │   ├── mongodb.ts             # MongoDB connection singleton
    │   ├── resend.ts              # Resend email service utilities
    │   └── utils.ts               # General utility functions (cn, slugify, etc.)
    │
    ├── models/                    # 📦 Mongoose Models (MongoDB)
    │   ├── Application.ts         # Application document model
    │   ├── ContactSubmission.ts   # Contact form submission model
    │   └── User.ts                # User account model
    │
    └── types/                     # 🏷️ TypeScript Type Definitions
        ├── index.ts               # Shared types (Sanity, MongoDB, Nav)
        └── next-auth.d.ts         # NextAuth type augmentation
```

---

## Key Architectural Patterns

| Pattern                     | Implementation                                              |
| --------------------------- | ----------------------------------------------------------- |
| **Route Groups**            | `(main)` group wraps public pages with shared layout         |
| **Catch-all Routes**        | `[[...index]]` for Sanity Studio at `/admin`                |
| **Dynamic Routes**          | `[domain]/[course]` for training details, `[slug]` for trainers |
| **Server/Client Split**     | `Navbar.tsx` (server) wraps `NavbarClient.tsx` (client)      |
| **Dynamic Imports**         | `LeafletMapWrapper.tsx` wraps `LeafletMap.tsx` (no SSR)      |
| **Model-View Separation**   | `models/` for DB schema, `types/` for TS interfaces         |
| **Constants Centralization** | `lib/constants.ts` — single source of truth for nav, courses |
