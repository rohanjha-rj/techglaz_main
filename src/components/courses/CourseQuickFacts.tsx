"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Clock, Calendar, GraduationCap, ArrowRight } from "lucide-react";
import { Course } from "@/types";

interface CourseQuickFactsProps {
  course: Course;
  branchLabel: string;
}

export default function CourseQuickFacts({ course, branchLabel }: CourseQuickFactsProps) {
  const durations = ["4 Weeks", "6 Weeks", "8 Weeks", "12 Weeks", "24 Weeks"];
  
  // Default to course's original duration if it's in the list, or default to "12 Weeks"
  const defaultDuration = durations.includes(course.duration) ? course.duration : "12 Weeks";
  const [selectedDuration, setSelectedDuration] = useState(defaultDuration);

  const applyUrl = `/apply?branch=${course.branch}&course=${encodeURIComponent(course.title)}&duration=${encodeURIComponent(selectedDuration)}`;

  return (
    <div className="bg-slate-50 dark:bg-slate-850/30 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8 space-y-6">
      <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">
        Quick Facts
      </h3>

      {/* Select Duration */}
      <div className="space-y-2.5">
        <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
          Select Program Duration
        </label>
        <div className="grid grid-cols-2 gap-2">
          {durations.map((d) => (
            <button
              key={d}
              onClick={() => setSelectedDuration(d)}
              className={`px-3 py-2 text-xs font-bold rounded-xl transition-all border cursor-pointer ${
                selectedDuration === d
                  ? "bg-brand-blue-deep text-white border-brand-blue-deep shadow-sm"
                  : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-450 hover:bg-slate-50/50 dark:hover:bg-slate-850/50"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4.5 text-sm pt-4 border-t border-slate-200/40 dark:border-slate-800/30">
        <div className="flex gap-3.5 items-start">
          <Clock className="w-5 h-5 text-brand-blue-steel shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-slate-800 dark:text-slate-350">Selected Duration</p>
            <p className="text-slate-500 mt-0.5 font-bold text-brand-blue-deep dark:text-brand-blue-steel">{selectedDuration}</p>
          </div>
        </div>

        {course.schedule && (
          <div className="flex gap-3.5 items-start border-t border-slate-200/40 dark:border-slate-800/30 pt-4">
            <Calendar className="w-5 h-5 text-brand-blue-steel shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-slate-800 dark:text-slate-350">Schedule</p>
              <p className="text-slate-500 mt-0.5">{course.schedule}</p>
            </div>
          </div>
        )}

        {course.eligibility && (
          <div className="flex gap-3.5 items-start border-t border-slate-200/40 dark:border-slate-800/30 pt-4">
            <GraduationCap className="w-5 h-5 text-brand-blue-steel shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-slate-800 dark:text-slate-350">Eligibility</p>
              <p className="text-slate-500 mt-0.5">{course.eligibility}</p>
            </div>
          </div>
        )}
      </div>

      <Link
        href={applyUrl}
        className="btn-accent flex items-center justify-center gap-2 w-full py-3 shadow-md uppercase tracking-wider font-extrabold text-slate-900 mt-4"
      >
        Apply For This Course
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
