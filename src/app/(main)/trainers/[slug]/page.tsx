import React from "react";
import PageHero from "@/components/shared/PageHero";
import { client } from "../../../../../sanity/lib/client";
import { trainerBySlugQuery } from "../../../../../sanity/lib/queries";
import { Trainer } from "@/types";
import { User, Award, BookOpen, ExternalLink, Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";

const DETAILED_TRAINERS: Record<string, Partial<Trainer>> = {
  "dr-j-p-haran": {
    bio: "Dr. J. P. Haran is the Founder & Managing Director of Techglaz Labs Private Limited. He holds a Ph.D. in Computer Science with a research specialization in Security Architectures. Over the last 15 years, he has consulted for global semiconductor companies, automotive systems providers, and state intelligence cells on full-stack code validation, secure application developments, and AI automation models.",
    courses: [
      { _id: "cse-1", title: "Full-Stack Web Development", slug: { _type: "slug", current: "full-stack-web-development" }, branch: "CSE_IT", domain: "Web Engineering", duration: "12 Weeks" },
      { _id: "cse-3", title: "Cybersecurity & Digital Forensics", slug: { _type: "slug", current: "cybersecurity" }, branch: "CSE_IT", domain: "Security Engineering", duration: "14 Weeks" },
    ],
  },
  "prof-rajesh-kumar": {
    bio: "Prof. Rajesh Kumar is a consulting VLSI researcher and former professor. Having worked extensively with premier IIT research laboratories, he has mentored over 200+ microchip layout engineers. His core research lies in low-power digital architecture design, ASIC backend flows, and formal SystemVerilog verification architectures.",
    courses: [
      { _id: "ee-1", title: "VLSI Design & Verification", slug: { _type: "slug", current: "vlsi" }, branch: "EE", domain: "Silicon Engineering", duration: "24 Weeks" },
    ],
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 300; // 5-minute ISR

export default async function TrainerDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  let trainer: Trainer | null = null;
  try {
    trainer = await client.fetch<Trainer | null>(trainerBySlugQuery, { slug });
  } catch (error) {
    console.warn("Failed to fetch trainer details from Sanity, checking mocks:", error);
  }

  // Fallback to mocks if not found
  if (!trainer) {
    const formattedName = slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

    const specificMock = DETAILED_TRAINERS[slug] || {};

    trainer = {
      _id: `mock-${slug}`,
      name: formattedName,
      slug: { _type: "slug", current: slug },
      institutionTag: slug.includes("j-p-haran") ? "Industry" : "IIT",
      specialization: ["Engineering Science", "Corporate Mentorship"],
      bio: specificMock.bio || `${formattedName} is a senior training consultant at Techglaz Labs. They design course syllabus modules, mentor candidate projects, and manage collaborative workshops.`,
      courses: specificMock.courses || [],
    };
  }

  const breadcrumbs = [
    { label: "Trainers", href: "/trainers" },
    { label: trainer.name },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        title={trainer.name}
        breadcrumbs={breadcrumbs}
        subtitle={`${trainer.institutionTag} Expert — Technical Leadership`}
      />

      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            
            {/* Left Column: Photo & Details */}
            <div className="lg:col-span-1 space-y-6 text-center lg:text-left bg-slate-50 dark:bg-slate-850/30 p-8 rounded-3xl border border-slate-100 dark:border-slate-800/40">
              <div className="w-32 h-32 rounded-3xl bg-gradient-to-tr from-brand-blue-deep to-brand-blue-steel flex items-center justify-center mx-auto lg:mx-0 shadow-md">
                <User className="w-16 h-16 text-white" />
              </div>
              
              <div className="space-y-1">
                <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  {trainer.name}
                </h2>
                <p className="text-xs font-bold text-slate-450 dark:text-slate-500 uppercase tracking-widest">
                  {trainer.institutionTag} Affiliate Expert
                </p>
              </div>

              {/* Specializations List */}
              <div className="space-y-3 pt-4 border-t border-slate-200/50 dark:border-slate-800/30 text-left">
                <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                  Specialties
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {trainer.specialization.map((spec) => (
                    <span
                      key={spec}
                      className="text-[10px] font-bold text-slate-650 bg-white dark:bg-slate-800 px-2.5 py-1 rounded-full border border-slate-100 dark:border-slate-750"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Bio and Courses */}
            <div className="lg:col-span-2 space-y-12">
              {/* Bio Statement */}
              <div className="space-y-4">
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-brand-blue-deep rounded-full" />
                  Professional Biography
                </h3>
                <p className="text-slate-650 dark:text-slate-400 leading-relaxed text-base whitespace-pre-line">
                  {trainer.bio}
                </p>
              </div>

              {/* Mentored Courses */}
              <div className="space-y-4">
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-brand-blue-deep rounded-full" />
                  Mentored Courses
                </h3>
                
                {trainer.courses && trainer.courses.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {trainer.courses.map((course) => {
                      const courseUrl = `/trainings/${course.branch.toLowerCase().replace(/_/g, "-")}/${course.slug.current}`;
                      
                      return (
                        <div
                          key={course._id}
                          className="group bg-slate-50 dark:bg-slate-850/30 border border-slate-100 dark:border-slate-800/50 p-5 rounded-2xl flex flex-col justify-between hover:shadow-md transition-shadow"
                        >
                          <div>
                            <span className="text-[9px] font-bold uppercase text-brand-blue-steel bg-brand-blue-light/50 dark:bg-slate-800 px-2 py-0.5 rounded">
                              {course.domain}
                            </span>
                            <h4 className="font-bold text-slate-900 dark:text-white mt-2 group-hover:text-brand-blue-deep dark:group-hover:text-brand-blue-steel transition-colors">
                              {course.title}
                            </h4>
                          </div>

                          <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-200/30 dark:border-slate-800/20 text-xs">
                            <span className="text-slate-450">{course.duration}</span>
                            <Link
                              href={courseUrl}
                              className="text-brand-blue-deep dark:text-brand-blue-steel font-bold hover:underline inline-flex items-center gap-0.5"
                            >
                              <span>View Syllabus</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="p-6 text-center border border-slate-100 dark:border-slate-800 rounded-2xl bg-slate-50 dark:bg-slate-900 text-slate-400 text-sm">
                    No active course listings registered under this expert currently.
                  </div>
                )}
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
