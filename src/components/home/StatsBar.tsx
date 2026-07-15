"use client";

import React from "react";
import AnimatedCounter from "../shared/AnimatedCounter";
import { Users, Award, BookOpen, GraduationCap } from "lucide-react";
import { DEFAULT_STATS } from "@/lib/constants";

export default function StatsBar() {
  const stats = [
    { icon: <Users className="h-5 w-5" />, label: "Students & Faculty Trained", value: DEFAULT_STATS.studentsTrained, suffix: "+" },
    { icon: <Award className="h-5 w-5" />, label: "Placement Rate", value: DEFAULT_STATS.placementPercentage, suffix: "%" },
    { icon: <BookOpen className="h-5 w-5" />, label: "Active Courses", value: DEFAULT_STATS.activeCourses, suffix: "+" },
    { icon: <GraduationCap className="h-5 w-5" />, label: "University & Corporate Partners", value: DEFAULT_STATS.partnerInstitutions, suffix: "+" },
  ];

  return (
    <section className="relative z-20 w-full border-y border-slate-200/70 bg-white/60 py-10 backdrop-blur-xl dark:border-slate-900/70 dark:bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-4 rounded-[1.5rem] border border-slate-200/70 bg-white/70 p-4 shadow-[0_12px_35px_-18px_rgba(15,23,42,0.22)] backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/70">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-blue-light text-brand-blue-steel shadow-inner dark:bg-slate-800 dark:text-[#fbbf24]">
                {stat.icon}
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-black leading-none text-slate-900 dark:text-white sm:text-3xl">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] leading-none text-slate-500 dark:text-slate-400">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

