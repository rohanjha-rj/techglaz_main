import React from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp, Building, Award, CheckCircle2 } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";

export default function PlacementHighlights() {
  const stats = [
    { icon: <Award className="h-6 w-6 text-brand-blue-steel" />, label: "Highest CTC Offered", value: "14.2 LPA" },
    { icon: <TrendingUp className="h-6 w-6 text-brand-blue-steel" />, label: "Average CTC Package", value: "6.5 LPA" },
    { icon: <Building className="h-6 w-6 text-brand-blue-steel" />, label: "Corporate Partners", value: "45+" },
  ];

  const companies = ["TCS", "CDAC", "Tech Mahindra", "Cognizant", "Wipro", "Capgemini", "Infosys", "L&T Infotech"];

  return (
    <section className="bg-white py-20 transition-colors duration-200 dark:bg-[#080c14]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Industry Placement Records" subtitle="Our Placements" centered={true} />

        <div className="mt-12 mb-16 grid gap-8 md:grid-cols-3">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-5 rounded-[2rem] border border-slate-200/70 bg-slate-50 p-6.5 shadow-[0_16px_40px_-18px_rgba(15,23,42,0.18),0_8px_20px_-10px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_30px_60px_-24px_rgba(15,23,42,0.22),0_14px_24px_-10px_rgba(15,23,42,0.14)] dark:border-slate-800/80 dark:bg-slate-900/50">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200/50 bg-white text-[#fbbf24] shadow-sm dark:border-slate-750 dark:bg-slate-850">{stat.icon}</div>
              <div className="space-y-1">
                <p className="text-2xl font-black leading-none text-slate-900 dark:text-white sm:text-3xl">{stat.value}</p>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-450 sm:text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/60 bg-slate-50 p-8 sm:p-10 dark:border-slate-850 dark:bg-slate-900/30">
          <p className="mb-8 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-450 dark:text-slate-500 sm:text-xs">Where Our Alumni Work</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-75 md:gap-x-16">
            {companies.map((company) => (
              <span key={company} className="select-none text-base font-black tracking-tight text-slate-400 transition-colors hover:text-brand-blue-steel dark:text-slate-650 dark:hover:text-slate-350 sm:text-lg lg:text-xl">{company}</span>
            ))}
          </div>
        </div>

        <div className="relative z-10 mt-12 mb-20 text-center">
          <Link href="/placements" className="btn-secondary inline-flex items-center gap-2 rounded-full border border-slate-200/60 px-8 py-3.5 font-bold group dark:border-slate-800">
            <span>Explore Placement Stories</span>
            <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-[2.5rem] border border-slate-850 bg-[#050a14] p-10 shadow-2xl md:flex-row md:p-14">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px]" />
          <div className="absolute right-1/4 top-0 h-96 w-96 rounded-full bg-brand-blue-steel/10 blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-5%] h-64 w-64 rounded-full bg-brand-accent/10 blur-[80px]" />

          <div className="relative z-10 max-w-xl space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-black leading-tight tracking-tight text-white md:text-4xl">Start Your Learning Journey Today</h2>
            <p className="text-sm font-semibold leading-relaxed text-slate-400 sm:text-base">Join thousands of learners and take the first step towards your future in engineering and technology.</p>
          </div>

          <div className="relative z-10 flex shrink-0 flex-col items-center md:items-start">
            <Link href="/apply" className="inline-flex items-center justify-center gap-3 rounded-full bg-brand-accent px-8 py-4.5 text-base font-black text-slate-900 shadow-[0_10px_30px_-5px_rgba(245,158,11,0.25)] transition-all hover:scale-[1.02] hover:bg-brand-accent-hover hover:shadow-[0_10px_35px_-5px_rgba(245,158,11,0.4)]">
              <span>Get Started for Free</span>
              <ArrowRight className="h-5 w-5 shrink-0" />
            </Link>
            <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
              <span>No credit card required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
