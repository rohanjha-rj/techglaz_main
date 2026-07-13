import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Clock, Tag, Star, Users } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";
import { client } from "../../../sanity/lib/client";
import { allCoursesQuery } from "../../../sanity/lib/queries";
import { Course } from "@/types";
import { urlForImage } from "../../../sanity/lib/image";
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
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Training Tracks"
          subtitle="Explore Our Specialties"
          centered={true}
        />

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => {
            const branchLabel = BRANCHES[course.branch] || course.branch;
            const courseSlug = `/trainings/${course.branch.toLowerCase().replace(/_/g, "-")}/${course.slug.current}`;
            
            // Generate mock metadata for design
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
            const badgeColor = idx === 0 ? "bg-yellow-400 text-yellow-900" : idx === 1 ? "bg-red-500 text-white" : "bg-emerald-500 text-white";

            return (
              <div
                key={course._id}
                className="group flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-brand-blue-steel"
              >
                {/* Image Header */}
                <div className="relative h-48 w-full bg-slate-100 dark:bg-slate-800">
                  <Image 
                    src={getImage(course.title)} 
                    alt={course.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {badge && (
                    <div className={`absolute top-4 left-4 px-2 py-1 ${badgeColor} text-[10px] font-bold uppercase tracking-wider rounded z-20`}>
                      {badge}
                    </div>
                  )}
                  {/* Subtle top border accent over the image */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue-deep to-brand-blue-steel z-20" />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  {/* Category badges */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-brand-blue-steel bg-brand-blue-light/50 px-2 py-0.5 rounded">
                      {branchLabel}
                    </span>
                  </div>

                  {/* Header Title */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-blue-steel transition-colors mb-2 line-clamp-1 relative z-10">
                    <Link href={courseSlug} className="focus:outline-none before:absolute before:inset-0">
                      {course.title}
                    </Link>
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2 mb-4 flex-grow z-10 relative">
                    {course.description}
                  </p>

                  {/* Instructor & Rating Row */}
                  <div className="flex items-center justify-between mb-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 relative z-20 pointer-events-none">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-200 overflow-hidden relative">
                         <Image 
                           src={`https://i.pravatar.cc/100?img=${idx + 20}`} 
                           alt="Instructor" 
                           fill 
                           sizes="24px"
                           className="object-cover" 
                         />
                      </div>
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">{meta.name}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-[#fbbf24] text-[#fbbf24]" />
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{meta.rating}</span>
                      <span className="text-xs text-slate-400">({meta.students})</span>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="flex items-center justify-between relative z-20 pointer-events-none">
                    <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="font-bold text-lg text-slate-900 dark:text-white">
                      {meta.price}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 relative z-10">
          <Link
            href="/trainings"
            className="inline-flex items-center gap-2 bg-[#0c1524] hover:bg-[#132035] text-white font-bold px-8 py-3.5 rounded-full transition-colors shadow-lg group"
          >
            <BookOpen className="w-5 h-5 shrink-0 text-[#fbbf24]" />
            View All Courses
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
