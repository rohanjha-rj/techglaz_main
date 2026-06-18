import React from "react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import { client } from "../../../../sanity/lib/client";
import { allRnDActivitiesQuery } from "../../../../sanity/lib/queries";
import { RnDActivity } from "@/types";
import { RnDAudience } from "@/lib/constants";
import { Layers, GraduationCap, Shield, Building, Tag, ArrowRight, FlaskConical } from "lucide-react";
import Link from "next/link";

const MOCK_RND: RnDActivity[] = [
  {
    _id: "rnd1",
    title: "ASIC Microchip Logic Synthesizer",
    institution: "IIT",
    audience: "Students",
    description: "Developing custom logical cell maps and Synthesis profiles for low-power silicon design applications.",
  },
  {
    _id: "rnd2",
    title: "Advanced Memory Forensics & Intrusion Logging",
    institution: "CyberCell",
    audience: "Teachers",
    description: "Faculty development and certification programs on analyzing real-time memory dumps and network intrusion forensics.",
  },
  {
    _id: "rnd3",
    title: "Automotive RTOS Task Scheduler Benchmarking",
    institution: "CDAC",
    audience: "Industry",
    description: "Measuring preemption latency and task scheduling cycles under FreeRTOS on multi-core ARM chips.",
  },
  {
    _id: "rnd4",
    title: "Agentic AI Autonomous Code Generators",
    institution: "IIT",
    audience: "Students",
    description: "Collaborative research on benchmarking agentic AI coder models and evaluating safety guardrails in automated software pipelines.",
  },
];

interface PageProps {
  searchParams: Promise<{ audience?: string }>;
}

export const revalidate = 300; // 5-minute ISR

export default async function RnDPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const filterAudience = params.audience as string | undefined;

  let activeAudience: RnDAudience | null = null;
  if (filterAudience === "students") activeAudience = "Students";
  else if (filterAudience === "teachers") activeAudience = "Teachers";
  else if (filterAudience === "industry") activeAudience = "Industry";

  let rawRnD: RnDActivity[] = [];
  try {
    rawRnD = await client.fetch<RnDActivity[]>(allRnDActivitiesQuery);
  } catch (error) {
    console.warn("Failed to fetch R&D activities, utilizing mocks:", error);
  }

  if (!rawRnD || rawRnD.length === 0) {
    rawRnD = MOCK_RND;
  }

  // Filter based on target audience
  const filteredRnD = activeAudience
    ? rawRnD.filter((item) => item.audience === activeAudience)
    : rawRnD;

  const tabs = [
    { label: "All Research", slug: "" },
    { label: "For Students", slug: "students" },
    { label: "For Teachers", slug: "teachers" },
    { label: "For Industry Partners", slug: "industry" },
  ];

  const getInstitutionColor = (inst: string) => {
    switch (inst) {
      case "IIT":
        return "bg-indigo-50 text-indigo-650 dark:bg-slate-850 dark:text-indigo-400 border-indigo-100 dark:border-indigo-900/30";
      case "CDAC":
        return "bg-emerald-50 text-emerald-650 dark:bg-slate-850 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/30";
      case "CyberCell":
        return "bg-red-50 text-red-650 dark:bg-slate-850 dark:text-red-400 border-red-100 dark:border-red-900/30";
      default:
        return "bg-slate-100 text-slate-650 dark:bg-slate-800 dark:text-slate-400 border-slate-200";
    }
  };

  const breadcrumbs = [{ label: "R&D" }];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        title="Research & Development (R&D)"
        breadcrumbs={breadcrumbs}
        subtitle="Bridging academic laboratories and government bodies with state-of-the-art engineering research projects."
      />

      {/* Sticky Tab bar */}
      <section className="py-6 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800/60 sticky top-[72px] sm:top-[80px] z-30 shadow-sm backdrop-blur-md bg-white/95 dark:bg-slate-900/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6 overflow-x-auto pb-1.5 scrollbar-none">
          <div className="flex items-center gap-2 text-slate-400 shrink-0 font-semibold text-sm">
            <FlaskConical className="w-4 h-4" />
            <span>Target Audience:</span>
          </div>

          <div className="flex gap-2.5">
            {tabs.map((tab) => {
              const isActive =
                (!filterAudience && tab.slug === "") || filterAudience === tab.slug;
              const url = tab.slug ? `/r-and-d?audience=${tab.slug}` : "/r-and-d";

              return (
                <Link
                  key={tab.label}
                  href={url}
                  className={`px-4.5 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border ${
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
      </section>

      {/* R&D Activities Grid */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredRnD.length === 0 && (
            <div className="text-center py-16 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 max-w-xl mx-auto space-y-4">
              <FlaskConical className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                No Activities Registered
              </h3>
              <p className="text-sm text-slate-500">
                No R&D activities registered under this audience path currently.
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredRnD.map((item) => (
              <div
                key={item._id}
                className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Badges category */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span
                      className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border ${getInstitutionColor(
                        item.institution
                      )}`}
                    >
                      {item.institution} Collab
                    </span>
                    <span className="text-[10px] font-bold tracking-wider uppercase bg-slate-50 dark:bg-slate-850 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full border border-slate-150 dark:border-slate-800">
                      For {item.audience}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-blue-deep dark:group-hover:text-brand-blue-steel transition-colors leading-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-550 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Optional CTA */}
                {item.ctaLink && (
                  <a
                    href={item.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center gap-1.5 w-fit mt-6 py-2 px-4.5 text-xs font-bold"
                  >
                    <span>Read Research Paper</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
