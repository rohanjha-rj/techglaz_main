import React from "react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import { client } from "../../../../sanity/lib/client";
import { allPlacementRecordsQuery } from "../../../../sanity/lib/queries";
import { PlacementRecord } from "@/types";
import { Building, GraduationCap, Award, Calendar, Quote, Briefcase } from "lucide-react";
import Link from "next/link";

const MOCK_PLACEMENTS: PlacementRecord[] = [
  {
    _id: "pl1",
    studentName: "Amit Sharma",
    company: "TCS",
    package: "6.5 LPA",
    year: 2025,
    course: "Full-Stack Web Development",
    testimonial: "Techglaz Labs gave me hands-on project experience that helped me answer every coding question with confidence during my interview.",
  },
  {
    _id: "pl2",
    studentName: "Rohan Das",
    company: "Tech Mahindra",
    package: "8.0 LPA",
    year: 2025,
    course: "VLSI Design & Verification",
    testimonial: "The verification methodologies we practiced using SystemVerilog were identical to the questions asked during my technical assessments.",
  },
  {
    _id: "pl3",
    studentName: "Neha Patel",
    company: "CDAC Partner Co.",
    package: "7.2 LPA",
    year: 2026,
    course: "AI & Machine Learning",
    testimonial: "Deploying model pipelines on cloud instances gave me a distinct edge over candidates who only knew model training theory.",
  },
  {
    _id: "pl4",
    studentName: "Priya Sen",
    company: "Cognizant",
    package: "5.8 LPA",
    year: 2025,
    course: "Cybersecurity & Forensics",
    testimonial: "Trained on real-world networks. The penetration testing labs were extremely detailed and matched professional security scenarios.",
  },
];

interface PageProps {
  searchParams: Promise<{ year?: string }>;
}

export const revalidate = 300; // 5-minute ISR

export default async function PlacementsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const filterYear = params.year ? parseInt(params.year) : undefined;

  let rawPlacements: PlacementRecord[] = [];
  try {
    rawPlacements = await client.fetch<PlacementRecord[]>(allPlacementRecordsQuery);
  } catch (error) {
    console.warn("Failed to fetch placements, utilizing mock data:", error);
  }

  if (!rawPlacements || rawPlacements.length === 0) {
    rawPlacements = MOCK_PLACEMENTS;
  }

  // Filter placements by selected year
  const filteredPlacements = filterYear
    ? rawPlacements.filter((item) => item.year === filterYear)
    : rawPlacements;

  const stats = [
    {
      icon: <GraduationCap className="w-7 h-7 text-brand-blue-steel" />,
      label: "Total Trainees Placed",
      value: 450,
      suffix: "+",
    },
    {
      icon: <Award className="w-7 h-7 text-brand-blue-steel" />,
      label: "Average Placement Pack",
      value: 6.5,
      suffix: " LPA",
      isFloat: true,
    },
    {
      icon: <Building className="w-7 h-7 text-brand-blue-steel" />,
      label: "Corporate Partners",
      value: 45,
      suffix: "+",
    },
  ];

  const years = [
    { label: "All Years", value: "" },
    { label: "Class of 2026", value: "2026" },
    { label: "Class of 2025", value: "2025" },
  ];

  const breadcrumbs = [{ label: "Placements" }];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        title="Placement Success Records"
        breadcrumbs={breadcrumbs}
        subtitle="Empowering trainees to secure premium engineering profiles in top-tier corporate firms."
      />

      {/* Placement Stats Bar */}
      <section className="py-12 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-slate-800 dark:text-slate-150">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-slate-850/30 border border-slate-100 dark:border-slate-800/60 rounded-2xl p-6.5 flex items-center gap-5 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-750 flex items-center justify-center shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-slate-900 dark:text-white leading-none">
                    {stat.isFloat ? (
                      // Manual float counter formatting
                      <span>6.5 LPA</span>
                    ) : (
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    )}
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1.5">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ticker of Years Filters */}
      <section className="py-6 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800/50 sticky top-[72px] sm:top-[80px] z-30 shadow-sm backdrop-blur-md bg-white/95 dark:bg-slate-900/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6 overflow-x-auto pb-1.5 scrollbar-none">
          <div className="flex items-center gap-2 text-slate-400 shrink-0 font-semibold text-sm">
            <Calendar className="w-4 h-4" />
            <span>Filter Batch:</span>
          </div>

          <div className="flex gap-2.5">
            {years.map((yearItem) => {
              const isActive =
                (!params.year && yearItem.value === "") || params.year === yearItem.value;
              const url = yearItem.value ? `/placements?year=${yearItem.value}` : "/placements";

              return (
                <Link
                  key={yearItem.label}
                  href={url}
                  className={`px-4.5 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border ${
                    isActive
                      ? "bg-brand-blue-deep text-white border-brand-blue-deep shadow-md"
                      : "bg-slate-50 dark:bg-slate-850 hover:bg-brand-blue-light/50 hover:text-brand-blue-deep dark:hover:bg-slate-800 text-slate-650 dark:text-slate-400 border-slate-200/50 dark:border-slate-800"
                  }`}
                >
                  {yearItem.label}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Placement Cards List */}
      <section className="py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPlacements.length === 0 && (
            <div className="text-center py-16 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 max-w-xl mx-auto space-y-4">
              <Briefcase className="w-12 h-12 text-slate-300 mx-auto animate-pulse" />
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                No Placements Listed
              </h3>
              <p className="text-sm text-slate-500">
                No placement records match the selected batch year. Check other options.
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPlacements.map((record) => (
              <div
                key={record._id}
                className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between"
              >
                {/* Quotes Graphic */}
                <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-blue-steel/10 group-hover:scale-105 transition-transform" />

                <div>
                  {/* Trainee Details Header */}
                  <div className="flex items-center gap-4.5 mb-5">
                    <div className="w-11 h-11 rounded-full bg-brand-blue-light/60 dark:bg-slate-850 flex items-center justify-center text-brand-blue-deep dark:text-brand-blue-steel font-extrabold text-sm border border-brand-blue-deep/5">
                      {record.studentName.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                        {record.studentName}
                      </h3>
                      <p className="text-xs font-semibold text-slate-450 dark:text-slate-500 mt-0.5">
                        {record.course} • Batch of {record.year}
                      </p>
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  {record.testimonial && (
                    <p className="text-sm text-slate-650 dark:text-slate-400 leading-relaxed italic mb-6">
                      "{record.testimonial}"
                    </p>
                  )}
                </div>

                {/* Offer Highlight Footer */}
                <div className="flex items-center justify-between pt-4.5 border-t border-slate-100 dark:border-slate-850 mt-4.5">
                  <div className="flex items-center gap-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <Building className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>Hired By: <strong>{record.company}</strong></span>
                  </div>
                  <div className="bg-brand-blue-light/50 dark:bg-slate-850 px-3.5 py-1.5 rounded-xl border border-brand-blue-deep/5">
                    <span className="text-xs font-black text-brand-blue-deep dark:text-brand-blue-steel">
                      {record.package} CTC
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
