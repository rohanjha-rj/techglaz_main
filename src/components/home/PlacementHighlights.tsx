import React from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp, Building, Award, CheckCircle2 } from "lucide-react";
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
    <section className="py-20 bg-transparent">
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
        <div className="text-center mt-12 mb-20 relative z-10">
          <Link
            href="/placements"
            className="btn-secondary inline-flex items-center gap-2 font-bold px-8 py-3.5 group rounded-full"
          >
            Explore Placement Stories
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Start Your Learning Journey CTA */}
        <div className="bg-slate-950 dark:bg-slate-950 border border-slate-800/80 rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]">
          {/* Background graphics */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue-steel/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-5%] w-64 h-64 bg-brand-accent/10 rounded-full blur-[80px]" />
          
          <div className="relative z-10 text-center md:text-left max-w-xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4 tracking-tight">
              Start Your Learning Journey Today
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              Join thousands of learners and take the first step towards your future in engineering and technology.
            </p>
          </div>
          
          <div className="relative z-10 flex flex-col items-center sm:items-start shrink-0">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center gap-3 bg-[#fbbf24] hover:bg-[#f59e0b] text-slate-900 font-extrabold text-lg px-10 py-5 rounded-full transition-all hover:scale-105 shadow-[0_10px_30px_-5px_rgba(251,191,36,0.3)]"
            >
              Get Started for Free
              <ArrowRight className="w-6 h-6" />
            </Link>
            <div className="flex items-center gap-2 mt-4 text-slate-400 text-sm font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>No credit card required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
