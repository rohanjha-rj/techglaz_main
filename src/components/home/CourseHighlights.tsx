import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Clock, Star } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";
import { client } from "../../../sanity/lib/client";
import { allCoursesQuery } from "../../../sanity/lib/queries";
import { Course } from "@/types";
import { projectId } from "../../../sanity/env";
import { BRANCHES, BRANCH_KEYS_TO_SLUGS } from "@/lib/constants";
import CourseCarousel from "./CourseCarousel";

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

        {/* Course Grid / Carousel */}
        <CourseCarousel courses={courses} />

        {/* View All Button */}
        <div className="relative z-10 mt-12 text-center">
          <Link
            href="/trainings"
            className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-3.5 font-bold shadow-lg group"
          >
            <BookOpen className="h-4.5 w-4.5 shrink-0 text-[#fbbf24]" />
            <span>View All Courses</span>
            <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
