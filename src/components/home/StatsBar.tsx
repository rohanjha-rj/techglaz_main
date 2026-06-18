"use client";

import React from "react";
import AnimatedCounter from "../shared/AnimatedCounter";
import { Users, Award, BookOpen, GraduationCap } from "lucide-react";
import { DEFAULT_STATS } from "@/lib/constants";

export default function StatsBar() {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-brand-blue-steel" />,
      label: "Students & Faculty Trained",
      value: DEFAULT_STATS.studentsTrained,
      suffix: "+",
    },
    {
      icon: <Award className="w-8 h-8 text-brand-blue-steel" />,
      label: "Placement Rate",
      value: DEFAULT_STATS.placementPercentage,
      suffix: "%",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-brand-blue-steel" />,
      label: "Active Courses",
      value: DEFAULT_STATS.activeCourses,
      suffix: "+",
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-brand-blue-steel" />,
      label: "University & Corporate Partners",
      value: DEFAULT_STATS.partnerInstitutions,
      suffix: "+",
    },
  ];

  return (
    <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-16 mb-20">
      <div className="glassmorphism rounded-3xl p-6 sm:p-10 border border-brand-blue-deep/10 shadow-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 lg:divide-x divide-slate-200/50 dark:divide-slate-800/40">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-5 pt-6 sm:pt-0 sm:pb-0 first:pt-0 lg:px-6 lg:first:pl-0 lg:last:pr-0`}
          >
            <div className="w-14 h-14 rounded-2xl bg-brand-blue-light/60 dark:bg-slate-800/50 flex items-center justify-center shrink-0 shadow-inner">
              {stat.icon}
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-extrabold text-slate-900 dark:text-white leading-none">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
