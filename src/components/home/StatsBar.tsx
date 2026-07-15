"use client";

import React from "react";
import AnimatedCounter from "../shared/AnimatedCounter";
import { Users, Award, BookOpen, GraduationCap } from "lucide-react";
import { DEFAULT_STATS } from "@/lib/constants";

export default function StatsBar() {
  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      label: "Students & Faculty Trained",
      value: DEFAULT_STATS.studentsTrained,
      suffix: "+",
    },
    {
      icon: <Award className="w-6 h-6" />,
      label: "Placement Rate",
      value: DEFAULT_STATS.placementPercentage,
      suffix: "%",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      label: "Active Courses",
      value: DEFAULT_STATS.activeCourses,
      suffix: "+",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      label: "University & Corporate Partners",
      value: DEFAULT_STATS.partnerInstitutions,
      suffix: "+",
    },
  ];

  return (
    <section className="relative z-20 w-full bg-transparent py-8 border-y border-slate-200/60 dark:border-slate-800/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 py-2"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white dark:bg-slate-800 text-brand-blue-steel dark:text-[#fbbf24] shrink-0 shadow-sm border border-slate-100 dark:border-slate-700">
                {stat.icon}
              </div>
              <div className="space-y-0.5">
                <p className="text-xl font-black text-slate-900 dark:text-white leading-none">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
