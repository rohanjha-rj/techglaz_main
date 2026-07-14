# 🏢 Techglaz Labs — Project Overview

> **Techglaz Labs Private Limited** — High-End Engineering Professional Development & Training Platform

---

## Project Idea

Techglaz Labs is a **premium professional development and training platform** focused on bridging the gap between academic curricula and real-world industry engineering. The platform serves students, teachers, and industry professionals across multiple engineering branches (CSE/IT, Electrical, Electronics & Communication, Mechanical, and Civil Engineering).

### Core Value Proposition

- **IIT, CDAC & Cyber Cell Collaborations** — Specialized courses co-developed with top research institutions
- **Industry-Led Training** — Courses taught by practitioners, not just academics
- **95% Placement Record** — Verified corporate placements for graduates
- **Multi-Branch Coverage** — CSE/IT, VLSI, IoT, Embedded Systems, Mechanical, Civil Engineering

### Target Audience

| Audience         | Description                                                           |
| ---------------- | --------------------------------------------------------------------- |
| **Students**     | Engineering undergraduates & graduates seeking industry-ready skills   |
| **Teachers**     | School & college educators needing professional development            |
| **Industry**     | Working professionals looking for specialization & upskilling          |
| **General**      | Anyone interested in engineering & technology training                  |

---

## Domain & Business Model

- **Domain**: Education Technology (EdTech) / Professional Development
- **Business Model**: Course enrollment, internship tracks, corporate training, R&D project consulting
- **Deployment URL**: [https://techglazlabs.com](https://techglazlabs.com)

---

## Engineering Branches & Courses Offered

| Branch                  | Key Courses                                                              |
| ----------------------- | ------------------------------------------------------------------------ |
| **CSE & IT**            | Full-Stack Web Dev, App Dev, AI/ML, Cybersecurity, Digital Forensics, Agentic AI, Computer Vision, DBMS |
| **Electrical**          | VLSI, Design Harness                                                     |
| **Electronics & Comm.** | Chip Design, IoT, Embedded Systems                                       |
| **Mechanical**          | Catia V5, SolidWorks, Ansys                                              |
| **Civil**               | AutoCAD, CamberCAD, Architecture, Interior Design                        |

---

## Key Features (Current)

- ✅ **Public Website** — Hero, Stats, Courses, Testimonials, Placements, Partners, R&D, Trainers
- ✅ **Course Catalog** — Branch-wise categorized with dynamic slugs and syllabus accordion
- ✅ **Application System** — Multi-step form with reference number generation
- ✅ **Contact Form** — With email notifications via Resend
- ✅ **User Authentication** — Signup, Login, Forgot/Reset Password (NextAuth + MongoDB)
- ✅ **User Dashboard** — Protected route showing application status
- ✅ **Sanity CMS** — Headless content management for courses, trainers, projects, testimonials, etc.
- ✅ **Admin Studio** — Sanity Studio embedded at `/admin`
- ✅ **SEO** — Dynamic metadata, `robots.ts`, `sitemap.ts`
- ✅ **Responsive Design** — Mobile-first with dedicated mobile menu
- ✅ **Glassmorphism UI** — Modern glass-effect components with backdrop blur
- ✅ **Animations** — Framer Motion animations + custom CSS keyframes

---

## Navigation Structure

```
Home → /
About → /about
Trainings → /trainings
  ├── Teachers' School → /trainings?track=teachers-school
  ├── Teachers' College → /trainings?track=teachers-college
  ├── Students → /trainings?track=students
  ├── General → /trainings?track=general
  └── All Courses → /trainings
Trainers → /trainers
Projects → /projects
Placements → /placements
Partners → /partners
R&D → /r-and-d
  ├── For Students → /r-and-d?audience=students
  ├── For Teachers → /r-and-d?audience=teachers
  └── For Industry → /r-and-d?audience=industry
Testimonials → /testimonials
Contact → /contact
Login → /login
Signup → /signup
Dashboard → /dashboard (protected)
Apply → /apply
Admin (Sanity Studio) → /admin
```
