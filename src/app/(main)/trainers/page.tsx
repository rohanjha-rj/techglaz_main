import React from "react";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import { client } from "../../../../sanity/lib/client";
import { allTrainersQuery } from "../../../../sanity/lib/queries";
import { Trainer } from "@/types";
import { INSTITUTION_TAGS, InstitutionTag } from "@/lib/constants";
import { User, Shield, GraduationCap, Building2, Tag, Layers, ArrowRight } from "lucide-react";

// Mock trainers fallback list
const MOCK_TRAINERS: Trainer[] = [
  {
    _id: "trainer-1",
    name: "Nishant Kumar",
    slug: { _type: "slug", current: "nishant-kumar" },
    specialization: ["Full-Stack Web Dev", "Cybersecurity", "Agentic AI"],
    institutionTag: "Industry",
  },
  {
    _id: "trainer-2",
    name: "Prof. Rajesh Kumar",
    slug: { _type: "slug", current: "prof-rajesh-kumar" },
    specialization: ["VLSI Design", "ASIC Verification", "FPGA Synthesis"],
    institutionTag: "IIT",
  },
  {
    _id: "trainer-3",
    name: "Dr. Sandeep K.",
    slug: { _type: "slug", current: "dr-sandeep-k" },
    specialization: ["Digital Forensics", "Ethical Hacking", "Incident Response"],
    institutionTag: "CyberCell",
  },
  {
    _id: "trainer-4",
    name: "Mrs. Priyamvada M.",
    slug: { _type: "slug", current: "mrs-priyamvada-m" },
    specialization: ["IoT & RTOS", "Embedded Systems", "Robotics"],
    institutionTag: "CDAC",
  },
];

interface PageProps {
  searchParams: Promise<{ institution?: string }>;
}

export const revalidate = 300; // 5-minute ISR

export default async function TrainersPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const filterTag = params.institution;

  let rawTrainers: Trainer[] = [];
  try {
    rawTrainers = await client.fetch<Trainer[]>(allTrainersQuery);
  } catch (error) {
    console.warn("Failed to fetch trainers, utilizing mocks:", error);
  }

  if (!rawTrainers || rawTrainers.length === 0) {
    rawTrainers = MOCK_TRAINERS;
  }

  // Filter based on selected institution tag
  const filteredTrainers = filterTag
    ? rawTrainers.filter(
        (t) => t.institutionTag.toLowerCase() === filterTag.toLowerCase()
      )
    : rawTrainers;

  const filters = [
    { label: "All Affiliations", value: "" },
    { label: "IIT Collaborators", value: "IIT" },
    { label: "CDAC Mentors", value: "CDAC" },
    { label: "CyberCell Experts", value: "CyberCell" },
    { label: "Industry Leaders", value: "Industry" },
  ];

  const getIcon = (tag: InstitutionTag) => {
    switch (tag) {
      case "IIT":
        return <GraduationCap className="w-5 h-5 text-indigo-500" />;
      case "CDAC":
        return <Layers className="w-5 h-5 text-emerald-500" />;
      case "CyberCell":
        return <Shield className="w-5 h-5 text-red-500" />;
      default:
        return <Building2 className="w-5 h-5 text-brand-blue-steel" />;
    }
  };

  const breadcrumbs = [{ label: "Trainers" }];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        title="Our Experts & Instructors"
        breadcrumbs={breadcrumbs}
        subtitle="Learn from leading academic researchers, active forensic officers, and corporate engineers."
      />

      {/* Filter bar */}
      <section className="py-6 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800/60 sticky top-[72px] sm:top-[80px] z-30 shadow-sm backdrop-blur-md bg-white/95 dark:bg-slate-900/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6 overflow-x-auto pb-1.5 scrollbar-none">
          <div className="flex items-center gap-2 text-slate-400 shrink-0 font-semibold text-sm">
            <Tag className="w-4 h-4" />
            <span>Affiliation:</span>
          </div>

          <div className="flex gap-2.5">
            {filters.map((filter) => {
              const isActive =
                (!filterTag && filter.value === "") ||
                filterTag?.toLowerCase() === filter.value.toLowerCase();
              const url = filter.value ? `/trainers?institution=${filter.value}` : "/trainers";

              return (
                <Link
                  key={filter.label}
                  href={url}
                  className={`px-4.5 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border ${
                    isActive
                      ? "bg-brand-blue-deep text-white border-brand-blue-deep shadow-md"
                      : "bg-slate-50 dark:bg-slate-850 hover:bg-brand-blue-light/50 hover:text-brand-blue-deep dark:hover:bg-slate-800 text-slate-650 dark:text-slate-400 border-slate-200/50 dark:border-slate-800"
                  }`}
                >
                  {filter.label}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grid Display */}
      <section className="py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredTrainers.length === 0 && (
            <div className="text-center py-16 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 max-w-xl mx-auto space-y-4">
              <User className="w-12 h-12 text-slate-350 mx-auto animate-pulse" />
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                No Mentors Found
              </h3>
              <p className="text-sm text-slate-500">
                No active trainers match the selected affiliation track. Try resetting filters.
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredTrainers.map((trainer) => {
              const detailSlug = `/trainers/${trainer.slug.current}`;

              return (
                <div
                  key={trainer._id}
                  className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 focus-within:ring-2 focus-within:ring-brand-blue-steel/40"
                >
                  <div>
                    {/* Badge affiliation */}
                    <div className="flex items-center gap-2 mb-5">
                      <div className="p-2 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-100 dark:border-slate-800">
                        {getIcon(trainer.institutionTag)}
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-450 dark:text-slate-500">
                        {trainer.institutionTag} Expert
                      </span>
                    </div>

                    {/* Placeholder photo */}
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-brand-blue-light/50 to-indigo-100/30 flex items-center justify-center mb-5 border border-brand-blue-deep/5">
                      <User className="w-10 h-10 text-slate-400 group-hover:scale-105 transition-transform" />
                    </div>

                    {/* Name */}
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-blue-deep dark:group-hover:text-brand-blue-steel transition-colors">
                      <Link href={detailSlug} className="focus:outline-none">
                        {trainer.name}
                      </Link>
                    </h3>

                    {/* Specializations */}
                    <div className="flex flex-wrap gap-1 mt-4.5 mb-6">
                      {trainer.specialization.map((spec) => (
                        <span
                          key={spec}
                          className="text-[9px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-850 px-2 py-0.5 rounded border border-slate-100 dark:border-slate-800"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Profile link CTA */}
                  <Link
                    href={detailSlug}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue-deep dark:text-brand-blue-steel hover:gap-2 transition-all pt-4 border-t border-slate-100 dark:border-slate-850"
                  >
                    <span>View Professional Bio</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
