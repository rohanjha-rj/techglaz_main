# 🛠️ Techglaz Labs — Tech Stack

> Complete technology breakdown for the Techglaz Labs platform.

---

## Frontend

| Technology             | Version   | Purpose                                           |
| ---------------------- | --------- | ------------------------------------------------- |
| **Next.js**            | `16.2.9`  | Full-stack React framework (App Router)            |
| **React**              | `19.2.4`  | UI component library                               |
| **React DOM**          | `19.2.4`  | React DOM renderer                                 |
| **TypeScript**         | `^5`      | Type-safe JavaScript superset                      |
| **Tailwind CSS**       | `^4`      | Utility-first CSS framework                        |
| **Framer Motion**      | `^12.40`  | React animation library                            |
| **Lucide React**       | `^1.21`   | Icon library (tree-shakable SVG icons)              |
| **clsx**               | `^2.1.1`  | Conditional CSS class utility                       |
| **tailwind-merge**     | `^3.6.0`  | Tailwind class deduplication & merging              |

## Backend / Server

| Technology             | Version        | Purpose                                        |
| ---------------------- | -------------- | ---------------------------------------------- |
| **Next.js API Routes** | `16.2.9`       | RESTful API endpoints (`/api/*`)                |
| **NextAuth.js**        | `^5.0.0-beta`  | Authentication (credentials + OAuth)            |
| **Mongoose**           | `^9.7.1`       | MongoDB ODM for data modeling                   |
| **bcryptjs**           | `^3.0.3`       | Password hashing                                |
| **Zod**                | `^4.4.3`       | Schema validation for forms & API inputs        |

## CMS (Content Management)

| Technology             | Version   | Purpose                                           |
| ---------------------- | --------- | ------------------------------------------------- |
| **Sanity.io**          | via `next-sanity ^13.1.0` | Headless CMS for courses, trainers, projects, etc. |
| **@sanity/image-url**  | `^2.1.1`  | Sanity image URL builder                           |
| **@sanity/vision**     | `^6.1.0`  | GROQ query playground (dev tool)                   |

## Database

| Technology  | Purpose                                                    |
| ----------- | ---------------------------------------------------------- |
| **MongoDB** | Primary database via `@auth/mongodb-adapter` + `mongoose`  |

## Email / Communications

| Technology  | Version   | Purpose                         |
| ----------- | --------- | ------------------------------- |
| **Resend**  | `^6.14.0` | Transactional email service      |

## Maps

| Technology        | Version   | Purpose                          |
| ----------------- | --------- | -------------------------------- |
| **Leaflet**       | `^1.9.4`  | Interactive maps (Contact page)  |
| **React Leaflet** | `^5.0.0`  | React wrapper for Leaflet        |

## Forms

| Technology              | Version   | Purpose                              |
| ----------------------- | --------- | ------------------------------------ |
| **React Hook Form**     | `^7.79.0` | Performant form handling              |
| **@hookform/resolvers** | `^5.4.0`  | Zod + React Hook Form integration    |

## Carousel

| Technology              | Version   | Purpose                              |
| ----------------------- | --------- | ------------------------------------ |
| **Embla Carousel React**| `^8.6.0`  | Lightweight carousel/slider          |

## Dev Tooling

| Tool                     | Version   | Purpose                              |
| ------------------------ | --------- | ------------------------------------ |
| **ESLint**               | `^9`      | Linting                              |
| **eslint-config-next**   | `16.2.9`  | Next.js ESLint presets                |
| **@tailwindcss/postcss** | `^4`      | PostCSS plugin for Tailwind v4        |
| **PostCSS**              | —         | CSS post-processing                   |

## Runtime & Package Manager

| Tool       | Purpose                    |
| ---------- | -------------------------- |
| **Node.js**| JavaScript runtime         |
| **npm**    | Package manager            |

---

## Architecture Diagram

```
┌───────────────────────────────────────────────────┐
│                   BROWSER                          │
│    Next.js App Router (React 19 + TypeScript)      │
│    ┌────────────────────────────────────────┐       │
│    │  Pages & Components                    │       │
│    │  ├── Framer Motion (animations)        │       │
│    │  ├── Tailwind CSS v4 (styling)         │       │
│    │  ├── Lucide React (icons)              │       │
│    │  ├── Embla Carousel (sliders)          │       │
│    │  ├── React Leaflet (maps)              │       │
│    │  └── React Hook Form + Zod (forms)     │       │
│    └────────────────────────────────────────┘       │
└────────────────────┬──────────────────────────────┘
                     │
                     ▼
┌───────────────────────────────────────────────────┐
│              NEXT.JS SERVER                        │
│    ┌────────────────────────────────────────┐       │
│    │  API Routes (/api/*)                   │       │
│    │  ├── /api/auth/* (NextAuth v5 beta)    │       │
│    │  ├── /api/apply (Applications)         │       │
│    │  └── /api/contact (Contact form)       │       │
│    ├────────────────────────────────────────┤       │
│    │  Middleware (auth guards)              │       │
│    └────────────────────────────────────────┘       │
└──────┬────────────────────────┬───────────────────┘
       │                        │
       ▼                        ▼
┌──────────────┐     ┌──────────────────────┐
│   MongoDB    │     │   Sanity.io CMS      │
│  (Database)  │     │  (Content)           │
│  • Users     │     │  • Courses           │
│  • Apps      │     │  • Trainers          │
│  • Contacts  │     │  • Projects          │
└──────────────┘     │  • Testimonials      │
                     │  • Placements        │
       ┌─────┐       │  • Partners          │
       │Resend│      │  • R&D Activities    │
       │(Email)│     │  • Founder Message   │
       └──────┘      └──────────────────────┘
```
