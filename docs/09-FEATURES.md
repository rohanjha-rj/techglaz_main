# ✨ Techglaz Labs — Feature Inventory

> Complete catalog of implemented features and planned features for the platform.

---

## ✅ Implemented Features

### 🏠 Public Website

| Feature                    | Status | Files                                          | Description                                            |
| -------------------------- | ------ | ---------------------------------------------- | ------------------------------------------------------ |
| Hero Section               | ✅     | `components/home/HeroSection.tsx`              | Animated hero with gradient, CTAs, and highlights grid  |
| Stats Counter Bar          | ✅     | `components/home/StatsBar.tsx`                 | Animated numerical counters (students, placement, etc.) |
| Course Highlights          | ✅     | `components/home/CourseHighlights.tsx`          | Featured courses grid pulled from Sanity CMS            |
| Testimonials Carousel      | ✅     | `components/home/TestimonialsPreview.tsx`       | Embla Carousel with star ratings and student quotes      |
| Placement Highlights       | ✅     | `components/home/PlacementHighlights.tsx`       | Placement stats and company logos                        |
| About Page                 | ✅     | `app/(main)/about/page.tsx`                    | Company mission, values, leadership                     |
| Contact Page               | ✅     | `app/(main)/contact/page.tsx`                  | Contact form + Leaflet map + contact info                |
| Trainers Listing           | ✅     | `app/(main)/trainers/page.tsx`                 | Grid of trainers with filters                           |
| Trainer Profiles           | ✅     | `app/(main)/trainers/[slug]/page.tsx`          | Individual trainer detail pages                         |
| Trainings Catalog          | ✅     | `app/(main)/trainings/page.tsx`                | Courses by branch/track with filters                    |
| Course Detail Pages        | ✅     | `app/(main)/trainings/[domain]/[course]/`      | Full course page with syllabus accordion                |
| Projects Showcase          | ✅     | `app/(main)/projects/page.tsx`                 | Student and R&D projects gallery                        |
| Placements Page            | ✅     | `app/(main)/placements/page.tsx`               | Placement records with company, package, year            |
| Partners Page              | ✅     | `app/(main)/partners/page.tsx`                 | Partner institutions (MU & Industry)                    |
| R&D Activities             | ✅     | `app/(main)/r-and-d/page.tsx`                  | R&D activities filtered by audience                     |
| Testimonials Page          | ✅     | `app/(main)/testimonials/page.tsx`             | Full testimonials listing with ratings                  |

### 🔐 Authentication

| Feature                    | Status | Files                                          | Description                                            |
| -------------------------- | ------ | ---------------------------------------------- | ------------------------------------------------------ |
| User Sign Up               | ✅     | `components/auth/SignUpForm.tsx`, `app/api/auth/`| Email/password registration with validation            |
| User Login                 | ✅     | `components/auth/LoginForm.tsx`                | Credentials login with NextAuth                         |
| Forgot Password            | ✅     | `app/(main)/forgot-password/page.tsx`          | Email-based password reset request                     |
| Reset Password             | ✅     | `app/(main)/reset-password/page.tsx`           | Token-based password reset                             |
| Session Management         | ✅     | `lib/auth.ts`, `middleware.ts`                 | NextAuth sessions with JWT strategy                    |
| Route Protection           | ✅     | `middleware.ts`                                | Dashboard routes protected, auth redirects              |

### 📋 Forms & Applications

| Feature                    | Status | Files                                          | Description                                            |
| -------------------------- | ------ | ---------------------------------------------- | ------------------------------------------------------ |
| Application Form           | ✅     | `components/forms/ApplicationForm.tsx`         | Multi-field application with branch/course selection     |
| Contact Form               | ✅     | `components/forms/ContactForm.tsx`             | Contact inquiry with email notification via Resend       |
| Form Validation            | ✅     | Uses Zod + React Hook Form                    | Client-side + server-side schema validation             |
| Reference Number           | ✅     | `lib/utils.ts` → `generateRefNumber()`        | Auto-generated TGL-YYYYMMDD-XXXXX format                |

### 👤 User Dashboard

| Feature                    | Status | Files                                          | Description                                            |
| -------------------------- | ------ | ---------------------------------------------- | ------------------------------------------------------ |
| Dashboard Page             | ✅     | `app/(main)/dashboard/page.tsx`                | Protected page showing user's application status        |
| Application Status         | ✅     | `lib/utils.ts` → `getStatusColor()`           | Color-coded status badges (pending, accepted, etc.)     |

### 🏗️ Content Management

| Feature                    | Status | Files                                          | Description                                            |
| -------------------------- | ------ | ---------------------------------------------- | ------------------------------------------------------ |
| Sanity CMS Integration     | ✅     | `sanity/`, `next-sanity`                       | Headless CMS for all content types                      |
| Sanity Studio              | ✅     | `app/admin/[[...index]]/`                      | Embedded CMS admin panel at `/admin`                    |
| Content Schemas            | ✅     | `sanity/schemas/`                              | 8 content types: courses, trainers, projects, etc.      |

### 🎨 UI/UX

| Feature                    | Status | Files                                          | Description                                            |
| -------------------------- | ------ | ---------------------------------------------- | ------------------------------------------------------ |
| Responsive Design          | ✅     | All components                                 | Mobile-first responsive with Tailwind breakpoints       |
| Glassmorphism              | ✅     | `globals.css`, `NavbarClient.tsx`              | Blur-glass effects on navbar and cards                  |
| Animations                 | ✅     | Framer Motion + CSS keyframes                  | Staggered reveals, counters, hover effects              |
| Mobile Drawer Menu         | ✅     | `components/layout/MobileMenu.tsx`             | Full-screen slide-out mobile navigation                 |
| Floating WhatsApp Button   | ✅     | `components/layout/WhatsAppButton.tsx`         | Fixed-position WhatsApp CTA button                      |
| Custom Scrollbar           | ✅     | `globals.css`                                  | Branded scrollbar with brand-blue tint                  |
| Loading Skeletons          | ✅     | `components/shared/LoadingSkeleton.tsx`         | Skeleton placeholders for content loading               |
| Page Hero with Breadcrumbs | ✅     | `components/shared/PageHero.tsx`               | Reusable hero banner with breadcrumb navigation         |
| Section Headings           | ✅     | `components/shared/SectionHeading.tsx`          | Consistent section heading component                    |

### 🔍 SEO

| Feature                    | Status | Files                                          | Description                                            |
| -------------------------- | ------ | ---------------------------------------------- | ------------------------------------------------------ |
| Dynamic Metadata           | ✅     | `app/layout.tsx`                               | Template-based title tags                               |
| Robots.txt                 | ✅     | `app/robots.ts`                                | Dynamic robots.txt generation                           |
| Sitemap                    | ✅     | `app/sitemap.ts`                               | Dynamic XML sitemap with all routes                     |

---

## 🔲 Planned / Not Yet Implemented

| Feature                        | Priority   | Description                                            |
| ------------------------------ | ---------- | ------------------------------------------------------ |
| Dark Mode Toggle               | 🟡 Medium  | UI switch for light/dark theme                          |
| Admin Dashboard                | 🔴 High    | Custom admin panel for application management           |
| Email Verification             | 🔴 High    | Verify user email after signup                          |
| Google/OAuth Login             | 🟡 Medium  | Social login options (Google, GitHub, etc.)              |
| Course Enrollment System       | 🔴 High    | Users can enroll in courses directly                    |
| Payment Integration            | 🔴 High    | Razorpay/Stripe for course fees                         |
| Blog / News Section            | 🟡 Medium  | Content marketing via Sanity CMS                        |
| User Profile Management        | 🟡 Medium  | Edit profile, upload photo, change password             |
| Certificate Generation         | 🟡 Medium  | Auto-generated course completion certificates            |
| Notification System            | 🟢 Low     | Email/in-app notifications for application updates       |
| Search Functionality           | 🟡 Medium  | Global site search for courses, trainers, etc.           |
| Privacy Policy Page            | 🔴 High    | Legal compliance page                                    |
| Terms & Conditions Page        | 🔴 High    | Legal compliance page                                    |
| PWA Support                    | 🟢 Low     | Progressive Web App with offline support                 |
| Analytics Integration          | 🟡 Medium  | Google Analytics / Vercel Analytics                      |
| Image Gallery                  | 🟢 Low     | Photo gallery of events, workshops, labs                 |
| Video Testimonials             | 🟢 Low     | YouTube-embedded video testimonials                      |
| Multi-language Support         | 🟢 Low     | Hindi/English internationalization                       |
| Chatbot / AI Assistant         | 🟢 Low     | AI-powered course recommendation chatbot                 |
