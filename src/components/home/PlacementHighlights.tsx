import React from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp, Building, Award } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";

export default function PlacementHighlights() {
  const stats = [
    {
      icon: <Award className="w-6 h-6 text-brand-blue-steel" />,
      label: "Highest CTC Offered",
      value: "14.2 LPA",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-brand-blue-steel" />,
      label: "Average CTC Package",
      value: "6.5 LPA",
    },
    {
      icon: <Building className="w-6 h-6 text-brand-blue-steel" />,
      label: "Corporate Partners",
      value: "45+",
    },
  ];

  const companies = [
    "TCS",
    "CDAC",
    "Tech Mahindra",
    "Cognizant",
    "Wipro",
    "Capgemini",
    "Infosys",
    "L&T Infotech",
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Industry Placement Records"
          subtitle="Our Placements"
          centered={true}
        />

        {/* Highlight Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-slate-50 dark:bg-slate-850/50 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-6 flex items-center gap-5 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center shrink-0 shadow-sm border border-slate-105 dark:border-slate-750">
                {stat.icon}
              </div>
              <div className="space-y-0.5">
                <p className="text-2xl font-black text-slate-900 dark:text-white leading-none">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Company Logos Ticker */}
        <div className="bg-slate-50 dark:bg-slate-850/30 rounded-3xl p-8 border border-slate-100 dark:border-slate-800/40 relative overflow-hidden">
          <p className="text-center text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-6">
            Where Our Alumni Work
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:gap-x-16 opacity-75">
            {companies.map((company) => (
              <span
                key={company}
                className="text-base sm:text-lg lg:text-xl font-extrabold text-slate-400 dark:text-slate-650 hover:text-slate-650 dark:hover:text-slate-400 transition-colors tracking-tight select-none"
              >
                {company}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="text-center mt-12">
          <Link
            href="/placements"
            className="btn-primary inline-flex items-center gap-2 group px-8 py-3"
          >
            Explore Placement Stories
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
