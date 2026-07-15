import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, BookOpen, ChevronRight, Tag } from "lucide-react";
import { Course } from "@/types";
import { BRANCHES, BRANCH_KEYS_TO_SLUGS } from "@/lib/constants";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const branchLabel = BRANCHES[course.branch] || course.branch;
  const branchSlug = BRANCH_KEYS_TO_SLUGS[course.branch] || course.branch.toLowerCase().replace(/_/g, "-");
  const courseSlug = `/trainings/${branchSlug}/${course.slug.current}`;

  return (
    <div className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-brand-blue-steel/40">
      <div>
        {/* Branch & Domain Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-[10px] font-bold tracking-wider uppercase bg-brand-blue-light/60 text-brand-blue-deep dark:bg-slate-800 dark:text-slate-350 px-2.5 py-1 rounded-full flex items-center gap-1">
            <Tag className="w-3 h-3" />
            {branchLabel}
          </span>
          <span className="text-[10px] font-bold tracking-wider uppercase bg-indigo-50 text-indigo-600 dark:bg-slate-850 dark:text-indigo-400 px-2.5 py-1 rounded-full">
            {course.domain}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-blue-deep dark:group-hover:text-brand-blue-steel transition-colors mb-2">
          <Link href={courseSlug} className="focus:outline-none">
            {course.title}
          </Link>
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed mb-6">
          {course.description}
        </p>

        {/* Training Tracks */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {course.trainingTracks?.map((track) => (
            <span
              key={track}
              className="text-[9px] font-semibold text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-800 px-2 py-0.5 rounded"
            >
              {track}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-850">
        <div className="flex items-center gap-1 text-xs font-medium text-slate-500 dark:text-slate-400">
          <Clock className="w-4 h-4 text-slate-400" />
          <span>{course.duration}</span>
        </div>

        <Link
          href={courseSlug}
          className="inline-flex items-center gap-1 text-sm font-bold text-brand-blue-deep dark:text-brand-blue-steel hover:text-brand-blue-steel transition-colors focus:outline-none"
        >
          <span>Syllabus</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
