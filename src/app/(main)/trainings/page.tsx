import React from "react";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import CourseCard from "@/components/courses/CourseCard";
import { client } from "../../../../sanity/lib/client";
import { allCoursesQuery } from "../../../../sanity/lib/queries";
import { Course } from "@/types";
import { BRANCHES, BranchKey } from "@/lib/constants";
import { Award, BookOpen, Layers } from "lucide-react";

// Robust fallback courses list representing all branches
const ALL_MOCK_COURSES: Course[] = [
  // CSE & IT
  {
    _id: "cse-1",
    title: "Full-Stack Web Development",
    slug: { _type: "slug", current: "full-stack-web-development" },
    branch: "CSE_IT",
    domain: "Web Engineering",
    description: "Master React, Next.js, Node.js, and MongoDB. Build production-ready SaaS projects with OAuth, database integrations, and Vercel hosting.",
    duration: "12 Weeks",
    trainingTracks: ["Students", "General"],
  },
  {
    _id: "cse-2",
    title: "AI/ML Engineering",
    slug: { _type: "slug", current: "ai-ml" },
    branch: "CSE_IT",
    domain: "Artificial Intelligence",
    description: "Deep dive into Python, PyTorch, machine learning models, neural networks, and agentic AI architectures for production deployments.",
    duration: "16 Weeks",
    trainingTracks: ["Students", "General", "Teachers' College"],
  },
  {
    _id: "cse-3",
    title: "Cybersecurity & Digital Forensics",
    slug: { _type: "slug", current: "cybersecurity" },
    branch: "CSE_IT",
    domain: "Security Engineering",
    description: "Cover network penetration testing, ethical hacking, digital forensics, and incident response in collaboration with Cyber Cells.",
    duration: "14 Weeks",
    trainingTracks: ["Students", "General", "Teachers' School"],
  },
  {
    _id: "cse-4",
    title: "Agentic AI Architectures",
    slug: { _type: "slug", current: "agentic-ai" },
    branch: "CSE_IT",
    domain: "Advanced AI",
    description: "Learn to build multi-agent autonomous coding assistants, langchain configurations, vector search databases, and LLM orchestration tools.",
    duration: "8 Weeks",
    trainingTracks: ["Students", "General", "Teachers' College"],
  },
  
  // Electrical Engineering
  {
    _id: "ee-1",
    title: "VLSI Design & Verification",
    slug: { _type: "slug", current: "vlsi" },
    branch: "EE",
    domain: "Silicon Engineering",
    description: "Learn Verilog, SystemVerilog, UVM, and physical chip design architectures. Practical projects matching industry fab lab standards.",
    duration: "24 Weeks",
    trainingTracks: ["Students", "General", "Teachers' College"],
  },
  {
    _id: "ee-2",
    title: "Automotive Wire Harness Design",
    slug: { _type: "slug", current: "wire-harness" },
    branch: "EE",
    domain: "Automotive Systems",
    description: "Master schematics, 3D routing, routing path studies, and electrical harness protection configurations using CATIA and solid modeling tools.",
    duration: "10 Weeks",
    trainingTracks: ["Students", "General"],
  },

  // ECE
  {
    _id: "ece-1",
    title: "IoT & Embedded Systems",
    slug: { _type: "slug", current: "iot" },
    branch: "ECE",
    domain: "Embedded Systems",
    description: "Design connected microcontrollers using RTOS, ESP32, Raspberry Pi, and MQTT. Build complete smart automation systems from scratch.",
    duration: "10 Weeks",
    trainingTracks: ["Students", "General"],
  },
  {
    _id: "ece-2",
    title: "Silicon Chip Design (ASIC/FPGA)",
    slug: { _type: "slug", current: "chip-design" },
    branch: "ECE",
    domain: "Hardware Design",
    description: "Advanced FPGA synthesis, static timing analysis, RTL design guidelines, and logic simulation using industrial EDA design suites.",
    duration: "16 Weeks",
    trainingTracks: ["Students", "Teachers' College"],
  },

  // Mechanical Engineering
  {
    _id: "me-1",
    title: "Catia V5 Mechanical Design",
    slug: { _type: "slug", current: "catia-v5" },
    branch: "ME",
    domain: "Mechanical Design",
    description: "Learn high-end surface modeling, assembly design, and generative shape styling in Catia V5 for automotive and aerospace domains.",
    duration: "8 Weeks",
    trainingTracks: ["Students", "General"],
  },
  {
    _id: "me-2",
    title: "SolidWorks Modeling & CAD",
    slug: { _type: "slug", current: "solidworks" },
    branch: "ME",
    domain: "Mechanical Design",
    description: "Solid modeling, weldments, sheet metal, drawing standards, and basic simulation studies for mechanical components.",
    duration: "8 Weeks",
    trainingTracks: ["Students", "General"],
  },
  
  // Civil Engineering
  {
    _id: "civil-1",
    title: "AutoCAD Architectural Drafting",
    slug: { _type: "slug", current: "autocad-architecture" },
    branch: "CIVIL",
    domain: "Drafting & BIM",
    description: "2D and 3D drafting standards, layout plans, structural drawings, and BIM integrations in AutoCAD for civil engineering candidates.",
    duration: "6 Weeks",
    trainingTracks: ["Students", "General"],
  },
];

interface PageProps {
  searchParams: Promise<{ track?: string }>;
}

export const revalidate = 300; // 5-minute ISR

export default async function TrainingsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const trackQuery = params.track;

  // Map URL query slugs to TrainingTrack tags in our schema
  let selectedTrack: string | null = null;
  if (trackQuery === "teachers-school") selectedTrack = "Teachers' School";
  else if (trackQuery === "teachers-college") selectedTrack = "Teachers' College";
  else if (trackQuery === "students") selectedTrack = "Students";
  else if (trackQuery === "general") selectedTrack = "General";

  let rawCourses: Course[] = [];
  try {
    rawCourses = await client.fetch<Course[]>(allCoursesQuery);
  } catch (error) {
    console.warn("Failed to fetch courses, utilizing mocks:", error);
  }

  if (!rawCourses || rawCourses.length === 0) {
    rawCourses = ALL_MOCK_COURSES;
  }

  // Filter courses by selected track
  const filteredCourses = selectedTrack
    ? rawCourses.filter((course) => course.trainingTracks?.includes(selectedTrack as any))
    : rawCourses;

  // Group courses by branch
  const coursesByBranch: Record<BranchKey, Course[]> = {
    CSE_IT: [],
    EE: [],
    ECE: [],
    ME: [],
    CIVIL: [],
  };

  filteredCourses.forEach((course) => {
    if (coursesByBranch[course.branch]) {
      coursesByBranch[course.branch].push(course);
    }
  });

  const trackTabs = [
    { label: "All Tracks", slug: "" },
    { label: "Teachers' School", slug: "teachers-school" },
    { label: "Teachers' College", slug: "teachers-college" },
    { label: "Students", slug: "students" },
    { label: "General", slug: "general" },
  ];

  const breadcrumbs = [{ label: "Trainings" }];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        title="Training & Certification Tracks"
        breadcrumbs={breadcrumbs}
        subtitle="Specialized hands-on curricula bridging engineering science and industrial development standards."
      />

      {/* Course Filter Tabs */}
      <section className="py-8 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800/60 sticky top-[72px] sm:top-[80px] z-30 shadow-sm backdrop-blur-md bg-white/95 dark:bg-slate-900/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6 overflow-x-auto pb-1.5 scrollbar-none">
            <div className="flex items-center gap-2 text-slate-400 shrink-0 font-semibold text-sm">
              <Layers className="w-4 h-4" />
              <span>Filter Track:</span>
            </div>
            
            <div className="flex gap-2 sm:gap-3">
              {trackTabs.map((tab) => {
                const isActive = (!trackQuery && tab.slug === "") || trackQuery === tab.slug;
                const url = tab.slug ? `/trainings?track=${tab.slug}` : "/trainings";

                return (
                  <Link
                    key={tab.label}
                    href={url}
                    className={`px-4.5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all border ${
                      isActive
                        ? "bg-brand-blue-deep text-white border-brand-blue-deep shadow-md"
                        : "bg-slate-50 dark:bg-slate-850 hover:bg-brand-blue-light/50 hover:text-brand-blue-deep dark:hover:bg-slate-800 text-slate-650 dark:text-slate-400 border-slate-200/50 dark:border-slate-800"
                    }`}
                  >
                    {tab.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Course Listing Grid grouped by Branch */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Check if no courses matched the filter */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-20 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 max-w-xl mx-auto space-y-4">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                No Courses Found
              </h3>
              <p className="text-sm text-slate-500">
                No active courses matched the selected training track filter. Try selecting another track or check back later.
              </p>
            </div>
          )}

          {/* Grouped Branch Lists */}
          {(Object.keys(BRANCHES) as BranchKey[]).map((branchKey) => {
            const branchCourses = coursesByBranch[branchKey];
            if (!branchCourses || branchCourses.length === 0) return null;

            return (
              <div key={branchKey} className="space-y-6">
                {/* Branch Header */}
                <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center justify-between">
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2.5">
                    <span className="w-2.5 h-6 bg-gradient-to-b from-brand-blue-deep to-brand-blue-steel rounded-full" />
                    {BRANCHES[branchKey]}
                  </h2>
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500 bg-slate-150 dark:bg-slate-850 px-3 py-1 rounded-full border border-slate-200/50 dark:border-slate-800">
                    {branchCourses.length} {branchCourses.length === 1 ? "Course" : "Courses"}
                  </span>
                </div>

                {/* Course Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {branchCourses.map((course) => (
                    <CourseCard key={course._id} course={course} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
