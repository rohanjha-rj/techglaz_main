"use client";

import React, { useState, useMemo } from "react";
import { Search, ChevronRight, BookOpen, Layers } from "lucide-react";
import Link from "next/link";
import { Course } from "@/types";
import CourseCard from "./CourseCard";
import { BranchKey } from "@/lib/constants";

interface BranchFilterGridProps {
  courses: Course[];
  branches: Record<string, string>;
  branchKeysToSlugs: Record<string, string>;
}

export default function BranchFilterGrid({
  courses,
  branches,
  branchKeysToSlugs,
}: BranchFilterGridProps) {
  // Find which branches actually have courses to show
  const activeBranchKeys = useMemo(() => {
    const keys = new Set<string>();
    courses.forEach((c) => keys.add(c.branch));
    return Array.from(keys);
  }, [courses]);

  // Default to the first active branch key, preferably CSE_IT if available
  const defaultBranch = useMemo(() => {
    if (activeBranchKeys.includes("CSE_IT")) return "CSE_IT";
    return activeBranchKeys[0] || "";
  }, [activeBranchKeys]);

  const [selectedBranch, setSelectedBranch] = useState<string>(defaultBranch);
  const [searchQuery, setSearchQuery] = useState("");

  // Sync selected branch if the list of active branches changes and current selection is no longer active
  React.useEffect(() => {
    if (activeBranchKeys.length > 0 && !activeBranchKeys.includes(selectedBranch)) {
      setSelectedBranch(defaultBranch);
    }
  }, [activeBranchKeys, selectedBranch, defaultBranch]);

  // Filter branches based on search query
  const filteredBranches = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    return Object.entries(branches).filter(([key, name]) => {
      // Must be an active branch (has courses) and match search query
      const isActive = activeBranchKeys.includes(key);
      const matchesSearch = name.toLowerCase().includes(query) || key.toLowerCase().includes(query);
      return isActive && matchesSearch;
    });
  }, [branches, activeBranchKeys, searchQuery]);

  // Filter courses based on selected branch
  const filteredCourses = useMemo(() => {
    return courses.filter((c) => c.branch === selectedBranch);
  }, [courses, selectedBranch]);

  const activeBranchName = branches[selectedBranch] || selectedBranch;
  const activeBranchSlug = branchKeysToSlugs[selectedBranch] || selectedBranch.toLowerCase().replace(/_/g, "-");
  const activeBranchHubUrl = `/trainings/${activeBranchSlug}`;

  return (
    <div className="space-y-10">
      {/* Branch Selector Section */}
      <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="font-extrabold text-lg text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-brand-blue-steel" />
              Choose Your Engineering Branch
            </h3>
            <p className="text-xs text-slate-500">
              Select one of the branches below to instantly view its specialized courses.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:max-w-xs">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search branches..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl text-xs sm:text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue-steel/40 transition-shadow"
            />
          </div>
        </div>

        {/* Branches Grid */}
        {filteredBranches.length === 0 ? (
          <div className="text-center py-6 text-slate-400 text-xs sm:text-sm font-semibold">
            No engineering branches found matching "{searchQuery}"
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-h-[220px] overflow-y-auto pr-2 scrollbar-thin">
            {filteredBranches.map(([key, name]) => {
              const isSelected = selectedBranch === key;
              const count = courses.filter((c) => c.branch === key).length;

              return (
                <button
                  key={key}
                  onClick={() => setSelectedBranch(key)}
                  className={`px-4 py-3 rounded-2xl text-left text-xs font-bold transition-all border flex flex-col justify-between gap-2 cursor-pointer ${
                    isSelected
                      ? "bg-brand-blue-deep text-white border-brand-blue-deep shadow-md scale-[1.02]"
                      : "bg-white dark:bg-slate-950 border-slate-200/60 dark:border-slate-800/80 text-slate-700 dark:text-slate-350 hover:border-brand-blue-steel/40 hover:bg-slate-50/50"
                  }`}
                >
                  <span className="line-clamp-2 leading-relaxed">{name}</span>
                  <span
                    className={`text-[9px] font-bold self-end px-2 py-0.5 rounded-full ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 dark:bg-slate-850 text-slate-500 dark:text-slate-450"
                    }`}
                  >
                    {count} {count === 1 ? "Course" : "Courses"}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Selected Branch Header & Link */}
      {selectedBranch && filteredCourses.length > 0 && (
        <div className="space-y-6">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-6 bg-gradient-to-b from-brand-blue-deep to-brand-blue-steel rounded-full" />
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                {activeBranchName}
              </h2>
            </div>
            
            <Link
              href={activeBranchHubUrl}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-blue-deep dark:text-brand-blue-steel hover:underline group"
            >
              <span>Explore Industry Knowledge Hub</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Dynamic Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </div>
        </div>
      )}

      {/* No courses for selection fallback */}
      {(!selectedBranch || filteredCourses.length === 0) && (
        <div className="text-center py-20 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 max-w-xl mx-auto space-y-4">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
            No Active Courses
          </h3>
          <p className="text-sm text-slate-500">
            Please select an active engineering branch above to view its course list.
          </p>
        </div>
      )}
    </div>
  );
}
