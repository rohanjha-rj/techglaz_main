# 🎯 Techglaz Labs — Icons Reference

> All icons used in the project, sourced from **Lucide React** (`lucide-react ^1.21.0`).

---

## Icon Library

- **Library:** [Lucide React](https://lucide.dev/)
- **Package:** `lucide-react`
- **Version:** `^1.21.0`
- **Style:** Tree-shakable SVG icons — only imported icons are bundled
- **Default Size:** `w-4 h-4` to `w-6 h-6` depending on context

---

## Complete Icon Inventory

### Navigation & UI Chrome

| Icon                | Component(s)                              | Usage                               |
| ------------------- | ----------------------------------------- | ----------------------------------- |
| `Menu`              | `NavbarClient`                            | Mobile hamburger menu trigger        |
| `X`                 | `MobileMenu`                              | Close mobile menu                    |
| `ChevronDown`       | `NavbarClient`, `MobileMenu`, `SyllabusAccordion` | Dropdown indicators           |
| `ChevronUp`         | `MobileMenu`, `SyllabusAccordion`         | Collapse indicators                  |
| `ChevronLeft`       | `TestimonialsPreview`                     | Carousel previous                    |
| `ChevronRight`      | `TestimonialsPreview`, `PageHero`, `CourseCard`, `Dashboard` | Breadcrumbs, next, arrows |
| `ArrowRight`        | `HeroSection`, `CourseHighlights`, `PlacementHighlights`, `CourseCard`, `R&D`, `Trainers` | Link arrows, CTAs |
| `ArrowUpRight`      | `Footer`                                  | External link indicators             |

### Brand & Identity

| Icon                | Component(s)                | Usage                                  |
| ------------------- | --------------------------- | -------------------------------------- |
| `Sparkles`          | `HeroSection`, `LoginForm`, `SignUpForm`, `ApplicationForm` | Premium/brand badge accent |

### Content & Courses

| Icon                | Component(s)                            | Usage                                |
| ------------------- | --------------------------------------- | ------------------------------------ |
| `BookOpen`          | `HeroSection`, `StatsBar`, `CourseHighlights`, `CourseCard`, `Trainers detail` | Course/learning icon |
| `GraduationCap`     | `HeroSection`, `StatsBar`, `R&D`, `Partners`, `Placements`, `Dashboard` | Education/graduation |
| `Clock`             | `CourseHighlights`, `CourseCard`, `Course detail` | Duration indicator          |
| `Calendar`          | `Course detail`, `Trainers detail`, `Placements` | Schedule/date reference     |
| `Tag`               | `CourseCard`, `CourseHighlights`, `Projects`, `R&D`, `Trainers` | Category/branch tags     |
| `Layers`            | `Trainings`, `Projects`, `R&D`, `Trainers` | Filter/category indicator      |
| `CheckCircle`       | `Course detail`                         | Learning outcome checkmarks          |
| `CheckCircle2`      | `SyllabusAccordion`, `ApplicationForm`, `ContactForm`, `SignUpForm`, `Reset password` | Success/completion |

### People & Profiles

| Icon                | Component(s)                                 | Usage                                |
| ------------------- | -------------------------------------------- | ------------------------------------ |
| `User`              | `NavbarClient`, `TestimonialsPreview`, `About`, `Testimonials`, `Trainers`, `Course detail`, `Dashboard` | Profile/person icon |
| `UserPlus`          | `MobileMenu`, `SignUpForm`                   | Sign up action                       |
| `LogIn`             | `MobileMenu`, `LoginForm`                    | Login action                         |
| `LogOut`            | `NavbarClient`, `MobileMenu`                 | Sign out action                      |

### Contact & Communication

| Icon                | Component(s)        | Usage                                   |
| ------------------- | ------------------- | --------------------------------------- |
| `Mail`              | `Footer`, `Contact`, `Forgot password` | Email contact icon           |
| `Phone`             | `Footer`, `Contact` | Phone contact icon                      |
| `MapPin`            | `Footer`, `Contact` | Address/location icon                   |
| `MessageSquare`     | `WhatsAppButton`, `Testimonials` | WhatsApp / messaging icon      |
| `Send`              | `ContactForm`       | Submit/send button icon                 |
| `HelpCircle`        | `Contact`, `Partners` | FAQ / help icon                       |

### Dashboard & Admin

| Icon                | Component(s)    | Usage                                     |
| ------------------- | --------------- | ----------------------------------------- |
| `LayoutDashboard`   | `NavbarClient`, `MobileMenu` | Dashboard navigation link      |
| `ClipboardList`     | `Dashboard`     | Application list icon                     |
| `Briefcase`         | `Dashboard`, `Placements` | Job/placement icon                  |
| `FileText`          | `Dashboard`     | Document/form icon                        |
| `Settings`          | `NavbarClient`  | Settings icon (imported but may be unused) |

### Awards & Trust

| Icon                | Component(s)                       | Usage                               |
| ------------------- | ---------------------------------- | ----------------------------------- |
| `Award`             | `StatsBar`, `PlacementHighlights`, `About`, `Trainers detail`, `Trainings`, `Placements` | Achievement/quality badge |
| `Shield`            | `About`, `R&D`, `Trainers`         | Security/trust icon                  |
| `Target`            | `About`                            | Mission/goal icon                    |
| `Compass`           | `About`                            | Vision/direction icon                |
| `Milestone`         | `About`                            | Journey/milestone icon               |
| `TrendingUp`        | `PlacementHighlights`              | Growth/stats trend icon              |

### Projects & R&D

| Icon                | Component(s)    | Usage                                     |
| ------------------- | --------------- | ----------------------------------------- |
| `FolderGit2`        | `Projects`      | Project/repository icon                   |
| `Users`             | `StatsBar`, `Projects` | Team/group icon                      |
| `Building`          | `PlacementHighlights`, `Projects`, `Partners`, `Placements` | Company/institution icon |
| `Building2`         | `Trainers`      | Institution badge icon                    |
| `FlaskConical`      | `R&D`           | Research/lab icon                         |
| `Link2`             | `Partners`      | Website link icon                         |
| `ExternalLink`      | `Trainers detail` | External navigation link                |

### Auth & Security

| Icon                | Component(s)         | Usage                                  |
| ------------------- | -------------------- | -------------------------------------- |
| `Lock`              | `Reset password`     | Password field icon                    |
| `KeyRound`          | `Reset password`     | Password reset brand icon              |
| `ShieldQuestion`    | `Forgot password`    | Security question icon                 |
| `Loader2`           | `LoginForm`, `SignUpForm`, `ApplicationForm`, `ContactForm`, `Forgot password`, `Reset password` | Loading spinner |
| `AlertCircle`       | `LoginForm`, `SignUpForm`, `ApplicationForm`, `ContactForm`, `Forgot password`, `Reset password` | Error alert |

### Testimonials

| Icon                | Component(s)                    | Usage                            |
| ------------------- | ------------------------------- | -------------------------------- |
| `Star`              | `TestimonialsPreview`, `Testimonials` | Rating stars                |
| `Quote`             | `TestimonialsPreview`, `Testimonials`, `Placements` | Quote/testimonial icon |

---

## Social Media Icons (Custom SVGs)

The following social media icons are **inline SVGs** (not from Lucide), found in `Footer.tsx`:

| Platform      | Type            | Hover Color     |
| ------------- | --------------- | --------------- |
| **LinkedIn**  | `fill-current`  | `brand-blue-steel` |
| **Instagram** | `stroke-current`| `pink-600`      |
| **YouTube**   | `fill-current`  | `red-600`       |

---

## Icon Sizing Convention

| Context            | Tailwind Class | Size   |
| ------------------ | -------------- | ------ |
| Inline with text   | `w-4 h-4`     | 16px   |
| Button icon        | `w-5 h-5`     | 20px   |
| Mobile menu icon   | `w-6 h-6`     | 24px   |
| Social icons       | `w-5 h-5`     | 20px   |
| Feature icons      | `w-5 h-5`     | 20px   |
