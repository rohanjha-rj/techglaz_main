import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Clock, Star } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";
import { client } from "../../../sanity/lib/client";
import { allCoursesQuery } from "../../../sanity/lib/queries";
import { Course } from "@/types";
import { projectId } from "../../../sanity/env";
import { BRANCHES } from "@/lib/constants";

// Fallback mock courses for when Sanity is empty/not configured yet
const MOCK_COURSES: Course[] = [
  {
    _id: "mock-1",
    title: "Full-Stack Web Development",
    slug: { _type: "slug", current: "full-stack-web-development" },
    branch: "CSE_IT",
    domain: "Web Engineering",
    description: "Master React, Next.js, Node.js, and MongoDB. Build production-ready SaaS projects with OAuth, database integrations, and Vercel hosting.",
    duration: "12 Weeks",
    trainingTracks: ["Students", "General"],
    featured: true,
  },
  {
    _id: "mock-2",
    title: "AI/ML Engineering",
    slug: { _type: "slug", current: "ai-ml" },
    branch: "CSE_IT",
    domain: "Artificial Intelligence",
    description: "Deep dive into Python, PyTorch, machine learning models, neural networks, and agentic AI architectures for production deployments.",
    duration: "16 Weeks",
    trainingTracks: ["Students", "General"],
    featured: true,
  },
  {
    _id: "mock-3",
    title: "VLSI Design & Verification",
    slug: { _type: "slug", current: "vlsi" },
    branch: "EE",
    domain: "Silicon Engineering",
    description: "Learn Verilog, SystemVerilog, UVM, and physical chip design architectures. Practical projects matching industry fab lab standards.",
    duration: "24 Weeks",
    trainingTracks: ["Students", "General"],
    featured: true,
  },
  {
    _id: "mock-4",
    title: "IoT & Embedded Systems",
    slug: { _type: "slug", current: "iot" },
    branch: "ECE",
    domain: "Embedded Systems",
    description: "Design connected microcontrollers using RTOS, ESP32, Raspberry Pi, and MQTT. Build complete smart automation systems from scratch.",
    duration: "10 Weeks",
    trainingTracks: ["Students", "General"],
    featured: true,
  },
  {
    _id: "mock-5",
    title: "Catia V5 Engineering Design",
    slug: { _type: "slug", current: "catia-v5" },
    branch: "ME",
    domain: "Mechanical Design",
    description: "Learn high-end surface modeling, assembly design, and generative shape styling in Catia V5 for automotive and aerospace domains.",
    duration: "8 Weeks",
    trainingTracks: ["Students", "General"],
    featured: true,
  },
  {
    _id: "mock-6",
    title: "Cybersecurity & Digital Forensics",
    slug: { _type: "slug", current: "cybersecurity" },
    branch: "CSE_IT",
    domain: "Security Engineering",
    description: "Cover network penetration testing, ethical hacking, digital forensics, and incident response in collaboration with Cyber Cells.",
    duration: "14 Weeks",
    trainingTracks: ["Students", "General"],
    featured: true,
  },
];

export default async function CourseHighlights() {
  let courses: Course[] = [];

  try {
    // Attempt to fetch from Sanity only if project ID is configured
    if (projectId !== "placeholder-id") {
      const fetched = await client.fetch<Course[]>(allCoursesQuery);
      courses = fetched ? fetched.filter(c => c.featured) : [];
    }
  } catch (error) {
    console.warn("Failed to fetch courses from Sanity, using fallback mocks:", error);
  }

  // Fallback to mocks if no courses are returned
  if (courses.length === 0) {
    courses = MOCK_COURSES;
  }

  // Limit to max 6 featured courses
  courses = courses.slice(0, 6);

  return (
    <section className="border-t border-slate-200/60 bg-slate-50/80 py-20 transition-colors duration-200 dark:border-slate-900/70 dark:bg-[#070b12]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Featured Training Tracks" subtitle="Explore Our Specialties" centered={true} />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, idx) => {
            const branchLabel = BRANCHES[course.branch] || course.branch;
            const courseSlug = `/trainings/${course.branch.toLowerCase().replace(/_/g, "-")}/${course.slug.current}`;

            const getImage = (title: string) => {
              if (title.includes("Web")) return "/images/courses/web-dev.png";
              if (title.includes("AI") || title.includes("Machine")) return "/images/courses/ai-ml.png";
              if (title.includes("VLSI")) return "/images/courses/vlsi.png";
              if (title.includes("IoT")) return "/images/courses/iot.png";
              if (title.includes("Catia") || title.includes("Mechanical")) return "/images/courses/mechanical.png";
              if (title.includes("Cybersecurity")) return "/images/courses/cybersecurity.png";
              return "/images/courses/web-dev.png";
            };

            const MOCK_INSTRUCTORS = [
              { name: "Rahul S.", rating: 4.8, students: "1.2k", price: "₹2,500" },
              { name: "Priya M.", rating: 4.9, students: "3.1k", price: "₹3,200" },
              { name: "Anil K.", rating: 4.7, students: "980", price: "₹1,800" },
              { name: "Dr. Sharma", rating: 4.9, students: "1.5k", price: "₹4,100" },
            ];
            const meta = MOCK_INSTRUCTORS[idx % MOCK_INSTRUCTORS.length];
            const badge = idx === 0 ? "Bestseller" : idx === 1 ? "Hot" : idx === 2 ? "New" : "";
            const badgeColor = idx === 0 ? "bg-yellow-400 text-yellow-950 font-bold" : idx === 1 ? "bg-red-500 text-white font-semibold" : "bg-emerald-500 text-white font-semibold";

            return (
              <div key={course._id} className="group flex flex-col overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white shadow-[0_16px_40px_-18px_rgba(15,23,42,0.18),0_8px_20px_-10px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-24px_rgba(15,23,42,0.22),0_14px_24px_-10px_rgba(15,23,42,0.14)] focus-within:ring-2 focus-within:ring-brand-blue-steel/40 dark:border-slate-800/80 dark:bg-slate-900/80">
                <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-850">
                  <Image src={getImage(course.title)} alt={course.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                  {badge && <div className={`absolute left-4 top-4 z-20 rounded-xl px-3 py-1 text-[10px] uppercase tracking-[0.2em] shadow-sm ${badgeColor}`}>{badge}</div>}
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-blue-deep to-brand-blue-steel opacity-0 transition-opacity group-hover:opacity-100" />
                </div>

                <div className="flex flex-grow flex-col p-6">
                  <div className="mb-3.5 flex flex-wrap gap-2">
                    <span className="rounded-full border border-brand-blue-steel/10 bg-brand-blue-light/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue-steel dark:border-slate-700/50 dark:bg-slate-800/80 dark:text-slate-350">{branchLabel}</span>
                  </div>

                  <h3 className="relative z-10 mb-2.5 line-clamp-1 text-base font-bold text-slate-900 transition-colors group-hover:text-brand-blue-steel dark:text-white">
                    <Link href={courseSlug} className="before:absolute before:inset-0 focus:outline-none">{course.title}</Link>
                  </h3>

                  <p className="relative z-10 mb-5 flex-grow text-sm leading-relaxed text-slate-500 dark:text-slate-450">{course.description}</p>

                  <div className="relative z-20 mb-4 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-850">
                    <div className="flex items-center gap-2.5">
                      <div className="relative h-7 w-7 overflow-hidden rounded-full border border-slate-200/50 bg-slate-200">
                        <Image src={`https://i.pravatar.cc/100?img=${idx + 20}`} alt="Instructor Avatar" fill sizes="24px" className="object-cover" />
                      </div>
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{meta.name}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 fill-[#fbbf24] text-[#fbbf24]" />
                      <span className="text-xs font-black text-slate-750 dark:text-slate-200">{meta.rating}</span>
                      <span className="text-[10px] font-semibold text-slate-400">({meta.students})</span>
                    </div>
                  </div>

                  <div className="relative z-20 flex items-center justify-between border-t border-slate-150/60 pt-3 dark:border-slate-850/50">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-450"><Clock className="h-4 w-4 shrink-0 text-slate-400" /><span>{course.duration}</span></div>
                    <div className="text-base font-black text-slate-900 dark:text-white">{meta.price}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative z-10 mt-12 text-center">
          <Link href="/trainings" className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-3.5 font-bold shadow-lg group">
            <BookOpen className="h-4.5 w-4.5 shrink-0 text-[#fbbf24]" />
            <span>View All Courses</span>
            <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
