import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/shared/PageHero";
import SyllabusTabs from "@/components/courses/SyllabusTabs";
import CourseQuickFacts from "@/components/courses/CourseQuickFacts";
import { client } from "../../../../../../sanity/lib/client";
import { courseBySlugQuery } from "../../../../../../sanity/lib/queries";
import { Course } from "@/types";
import { BRANCHES, BranchKey, BRANCH_SLUGS, BRANCH_KEYS_TO_SLUGS } from "@/lib/constants";
import { Calendar, Clock, GraduationCap, CheckCircle, ArrowRight, User } from "lucide-react";
import { DETAILED_COURSES_DATA } from "@/lib/detailedCoursesData";
import CourseDetailClient from "@/components/courses/CourseDetailClient";

// In-memory detailed course mocks for direct matching
const DETAILED_MOCKS: Record<string, Partial<Course>> = {
  "full-stack-web-development": {
    learningOutcomes: [
      "Build dynamic React applications with Next.js App Router.",
      "Develop secure RESTful and GraphQL APIs with Node.js & Express.",
      "Configure MongoDB database schemas and relational models via Mongoose.",
      "Deploy full-stack applications with custom domains on Vercel and AWS.",
    ],
    schedule: "Mon, Wed, Fri (6:00 PM - 8:00 PM IST)",
    eligibility: "Basic programming understanding (HTML/JS) recommended. Open to students and professionals.",
    syllabus: [
      {
        _key: "mod-1",
        title: "Frontend Foundation (Next.js & React)",
        topics: ["JSX & Component state", "Next.js routing", "Tailwind CSS styling", "Context API & hooks"],
        milestone: "Weeks 1-4",
        prerequisites: ["HTML & CSS basics", "ES6+ JavaScript basics"],
        projects: ["Personal Portfolio Website", "Responsive Task Dashboard"],
      },
      {
        _key: "mod-2",
        title: "Backend Development (Node.js & MongoDB)",
        topics: ["REST API structures", "Mongoose connections", "Middleware & Validation", "Database modeling"],
        milestone: "Weeks 5-8",
        prerequisites: ["Frontend Foundation", "Asynchronous JavaScript (Promises & async/await)"],
        projects: ["RESTful Blog API with Express", "User Authentication Database Schema"],
      },
      {
        _key: "mod-3",
        title: "Advanced Integrations & Security",
        topics: ["NextAuth.js v5 config", "Bcrypt hashing", "Resend email triggers", "Deployment checklist"],
        milestone: "Weeks 9-12",
        prerequisites: ["Backend Development", "Basic client-server security"],
        projects: ["SaaS Platform with NextAuth Login & Resend Invoicing"],
      },
    ],
    trainer: {
      _id: "t-1",
      name: "Nishant Kumar",
      slug: { _type: "slug", current: "nishant-kumar" },
      specialization: ["Full-Stack Dev", "Cybersecurity"],
      institutionTag: "Industry",
    },
  },
  "vlsi": {
    learningOutcomes: [
      "Write RTL code using Verilog HDL.",
      "Understand ASIC/FPGA design flow and tools.",
      "Design verification testbenches using SystemVerilog.",
      "Implement Universal Verification Methodology (UVM) standards.",
    ],
    schedule: "Tue, Thu, Sat (10:00 AM - 12:30 PM IST)",
    eligibility: "Basic digital logic design understanding. Open to ECE/EE/EI graduates.",
    syllabus: [
      {
        _key: "vl-1",
        title: "Verilog HDL & Digital Design",
        topics: ["Combinational logic design", "Sequential logic design", "Finite State Machines (FSM)", "ASIC design flow overview"],
        milestone: "Weeks 1-8",
        prerequisites: ["Basic Logic Gates", "Boolean Algebra"],
        projects: ["FSM-based Traffic Light Controller", "16-bit RISC ALU Model in Verilog"],
      },
      {
        _key: "vl-2",
        title: "SystemVerilog for Verification",
        topics: ["Object-Oriented Programming (OOP)", "Virtual interfaces", "Randomization & constraints", "Coverage metrics"],
        milestone: "Weeks 9-16",
        prerequisites: ["Verilog HDL Design", "Object-Oriented Concepts"],
        projects: ["Self-Checking Testbench for Dual-Port RAM", "SystemVerilog Verification Environment"],
      },
      {
        _key: "vl-3",
        title: "UVM & ASIC Protocol Verification",
        topics: ["UVM Testbench Architecture", "UVM Agents, Drivers, Monitors", "Register Abstraction Layer (RAL)", "Protocol Verification (e.g. APB, AXI)"],
        milestone: "Weeks 17-24",
        prerequisites: ["SystemVerilog Verification"],
        projects: ["Complete UVM-compliant Router Verification Suite", "ASIC Protocol Verification Tapeout"],
      },
    ],
    trainer: {
      _id: "t-2",
      name: "Prof. Rajesh Kumar",
      slug: { _type: "slug", current: "prof-rajesh" },
      specialization: ["VLSI Design", "FPGA Synthesis"],
      institutionTag: "IIT",
    },
  },
};

interface PageProps {
  params: Promise<{
    domain: string;
    course: string;
  }>;
}

export const revalidate = 300; // 5-minute ISR

export default async function CourseDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const courseSlug = resolvedParams.course;

  let course: Course | null = null;

  try {
    // Attempt Sanity fetch
    course = await client.fetch<Course | null>(courseBySlugQuery, {
      slug: courseSlug,
    });
  } catch (error) {
    console.warn("Failed to fetch course details from Sanity, checking mocks:", error);
  }

  // Fallback generation logic if Sanity record doesn't exist
  if (!course) {
    // Locate in mock details
    const branchKey = BRANCH_SLUGS[resolvedParams.domain] || "CSE_IT";
    const title = courseSlug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

    const specificMock = DETAILED_MOCKS[courseSlug] || {};

    course = {
      _id: `mock-${courseSlug}`,
      title: title,
      slug: { _type: "slug", current: courseSlug },
      branch: branchKey,
      domain: title,
      description: `Get hands-on industrial certification in ${title}. This curriculum is designed in alignment with corporate standards and verified internship tracks.`,
      duration: "10 Weeks",
      trainingTracks: ["Students", "General"],
      learningOutcomes: specificMock.learningOutcomes || [
        `Understand core engineering science in ${title}.`,
        "Work on live collaborative research projects.",
        "Implement industry-standard optimization models.",
      ],
      syllabus: specificMock.syllabus || [
        {
          _key: "generic-1",
          title: "Introduction & Essentials",
          topics: ["Core conceptual model", "Development environment setup", "Basic syntax and architecture"],
        },
        {
          _key: "generic-2",
          title: "Practical Implementations",
          topics: ["Case studies analysis", "Hands-on coding projects", "Optimization practices"],
        },
      ],
      schedule: specificMock.schedule || "Mon, Wed (4:00 PM - 6:00 PM IST)",
      eligibility: specificMock.eligibility || "Open to all engineering students and practitioners.",
      trainer: specificMock.trainer || {
        _id: "t-default",
        name: "Techglaz Labs Faculty",
        slug: { _type: "slug", current: "faculty" },
        specialization: [title],
        institutionTag: "Industry",
      },
    };
  }

  const detailedCourse = DETAILED_COURSES_DATA[courseSlug];

  if (detailedCourse) {
    if (course._id.startsWith("mock-")) {
      course.title = detailedCourse.title;
      course.branch = detailedCourse.branch;
      course.domain = detailedCourse.domain;
    }
    const branchLabel = BRANCHES[course.branch] || course.branch;
    const branchSlug = BRANCH_KEYS_TO_SLUGS[course.branch] || course.branch.toLowerCase().replace(/_/g, "-");
    const breadcrumbs = [
      { label: "Trainings", href: "/trainings" },
      { label: branchLabel, href: `/trainings/${branchSlug}` },
      { label: course.title },
    ];
    return (
      <div className="flex flex-col min-h-screen">
        <PageHero
          title={course.title}
          breadcrumbs={breadcrumbs}
          subtitle={`${branchLabel} — Specialized Engineering Curriculum`}
        />
        <CourseDetailClient 
          course={course} 
          detailedData={detailedCourse} 
          branchLabel={branchLabel} 
        />
      </div>
    );
  }

  const branchLabel = BRANCHES[course.branch] || course.branch;
  const branchSlug = BRANCH_KEYS_TO_SLUGS[course.branch] || course.branch.toLowerCase().replace(/_/g, "-");
  
  const breadcrumbs = [
    { label: "Trainings", href: "/trainings" },
    { label: branchLabel, href: `/trainings/${branchSlug}` },
    { label: course.title },
  ];

  const applyUrl = `/apply?branch=${course.branch}&course=${encodeURIComponent(course.title)}`;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        title={course.title}
        breadcrumbs={breadcrumbs}
        subtitle={`${branchLabel} — Specialized Engineering Curriculum`}
      />

      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* About the Course */}
              <div className="space-y-4">
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-brand-blue-deep rounded-full" />
                  Course Overview
                </h2>
                <p className="text-slate-600 dark:text-slate-450 leading-relaxed text-base">
                  {course.description}
                </p>
              </div>

              {/* Learning Outcomes */}
              <div className="space-y-4">
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-brand-blue-deep rounded-full" />
                  What You Will Learn
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {course.learningOutcomes?.map((outcome, idx) => (
                    <li key={idx} className="flex gap-3 items-start bg-slate-50 dark:bg-slate-850/30 p-4 rounded-2xl border border-slate-100 dark:border-slate-800/50">
                      <CheckCircle className="w-5 h-5 text-brand-blue-steel shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-650 dark:text-slate-400 font-semibold leading-relaxed">
                        {outcome}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Syllabus Tabs Toggle (Roadmap vs List) */}
              <SyllabusTabs syllabus={course.syllabus || []} />

            </div>

            {/* Right Column: Sidebar Stats & Apply */}
            <div className="space-y-8 lg:sticky lg:top-28">
              <CourseQuickFacts course={course} branchLabel={branchLabel} />

              {/* Assigned Trainer */}
              {course.trainer && (
                <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 shadow-sm space-y-4">
                  <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs text-slate-400">
                    Course Instructor
                  </h4>
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue-light dark:bg-slate-850 text-brand-blue-deep flex items-center justify-center shrink-0">
                      <User className="w-6 h-6" />
                    </div>
                    <div>
                      <h5 className="font-extrabold text-slate-850 dark:text-white">
                        {course.trainer.name}
                      </h5>
                      <p className="text-xs font-bold text-slate-450 dark:text-slate-500 uppercase mt-0.5">
                        {course.trainer.institutionTag} Expert
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {course.trainer.specialization.map((spec) => (
                      <span
                        key={spec}
                        className="text-[9px] font-semibold text-slate-450 bg-slate-50 dark:bg-slate-850 px-2 py-0.5 rounded border border-slate-100 dark:border-slate-800"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
