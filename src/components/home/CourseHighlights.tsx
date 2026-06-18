import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";
import { client } from "../../../sanity/lib/client";
import { allCoursesQuery } from "../../../sanity/lib/queries";
import { Course } from "@/types";
import { urlForImage } from "../../../sanity/lib/image";
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
    // Attempt to fetch from Sanity
    const fetched = await client.fetch<Course[]>(allCoursesQuery);
    courses = fetched ? fetched.filter(c => c.featured) : [];
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
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Training Tracks"
          subtitle="Explore Our Specialties"
          centered={true}
        />

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => {
            const branchLabel = BRANCHES[course.branch] || course.branch;
            const courseSlug = `/trainings/${course.branch.toLowerCase().replace(/_/g, "-")}/${course.slug.current}`;

            return (
              <div
                key={course._id}
                className="group relative flex flex-col justify-between bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 focus-within:ring-2 focus-within:ring-brand-blue-steel"
              >
                {/* Visual Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue-deep/5 to-brand-blue-steel/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -z-10" />

                <div>
                  {/* Category badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-[10px] font-bold tracking-wider uppercase bg-brand-blue-light/60 text-brand-blue-deep dark:bg-slate-800 dark:text-slate-350 px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {branchLabel}
                    </span>
                    <span className="text-[10px] font-bold tracking-wider uppercase bg-indigo-50 text-indigo-600 dark:bg-slate-850 dark:text-indigo-400 px-2.5 py-1 rounded-full">
                      {course.domain}
                    </span>
                  </div>

                  {/* Header Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-blue-deep dark:group-hover:text-brand-blue-steel transition-colors mb-3">
                    <Link href={courseSlug} className="focus:outline-none">
                      {course.title}
                    </Link>
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3 mb-6">
                    {course.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="flex items-center justify-between pt-5 border-t border-slate-100 dark:border-slate-800/40">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span>{course.duration}</span>
                  </div>

                  <Link
                    href={courseSlug}
                    className="inline-flex items-center gap-1 text-sm font-bold text-brand-blue-deep dark:text-brand-blue-steel hover:gap-1.5 transition-all focus:outline-none"
                  >
                    <span>Syllabus & Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/trainings"
            className="btn-secondary inline-flex items-center gap-2 font-bold px-8 py-3 group"
          >
            <BookOpen className="w-5 h-5 shrink-0" />
            View All Courses
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
