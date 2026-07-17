"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  CheckCircle, 
  Clock, 
  Calendar, 
  GraduationCap, 
  ArrowRight, 
  User, 
  Award, 
  BookOpen, 
  Briefcase, 
  Zap,
  ShieldCheck,
  TrendingUp,
  Layers
} from "lucide-react";
import { Course } from "@/types";
import { DetailedCourseData } from "@/lib/detailedCoursesData";
import SyllabusTabs from "./SyllabusTabs";

interface CourseDetailClientProps {
  course: Course;
  detailedData: DetailedCourseData;
  branchLabel: string;
}

type DurationKey = "fourWeeks" | "sixWeeks" | "eightWeeks" | "twelveWeeks" | "twentyFourWeeks";

export default function CourseDetailClient({ course, detailedData, branchLabel }: CourseDetailClientProps) {
  // Find first available track duration key dynamically
  const availableKeys = (Object.keys(detailedData.tracks) as DurationKey[]).filter(
    (key) => !!detailedData.tracks[key]
  );
  const defaultDuration = availableKeys.includes("twelveWeeks")
    ? "twelveWeeks"
    : availableKeys[0] || "twelveWeeks";

  const [selectedDuration, setSelectedDuration] = useState<DurationKey>(defaultDuration);

  const durationMapping: { key: DurationKey; label: string }[] = ([
    { key: "fourWeeks", label: "4 Weeks" },
    { key: "sixWeeks", label: "6 Weeks" },
    { key: "eightWeeks", label: "8 Weeks" },
    { key: "twelveWeeks", label: "12 Weeks" },
    { key: "twentyFourWeeks", label: "24 Weeks" },
  ] as { key: DurationKey; label: string }[]).filter((item) => !!detailedData.tracks[item.key]);

  const currentTrack = detailedData.tracks[selectedDuration];
  
  if (!currentTrack) {
    return null;
  }

  const currentDurationLabel = durationMapping.find((d) => d.key === selectedDuration)?.label || "12 Weeks";

  const applyUrl = `/apply?branch=${course.branch}&course=${encodeURIComponent(course.title)}&duration=${encodeURIComponent(currentDurationLabel)}`;

  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dynamic Duration Tabs Bar */}
        {durationMapping.length > 1 && (
          <div className="mb-10 text-center space-y-4">
            <label className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block">
              Select Program Track Duration
            </label>
            <div className="inline-flex p-1.5 bg-slate-100 dark:bg-slate-850 rounded-2xl gap-1.5 shadow-sm max-w-full overflow-x-auto">
              {durationMapping.map((item) => {
                const isActive = selectedDuration === item.key;
                return (
                  <button
                    key={item.key}
                    onClick={() => setSelectedDuration(item.key)}
                    className={`px-5 py-2.5 text-xs sm:text-sm font-extrabold rounded-xl transition-all duration-300 whitespace-nowrap cursor-pointer ${
                      isActive
                        ? "bg-brand-blue-deep text-white dark:bg-brand-blue-deep shadow-md"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          
          {/* Left Column: Interactive Curriculum & Objectives */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Dynamic Track Objective Card */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-brand-blue-deep/30 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue-steel/10 rounded-full blur-3xl -z-10" />
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue-steel/20 border border-brand-blue-steel/30 text-brand-blue-steel text-xs font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5" />
                  {currentTrack.title} Track Objective
                </div>
                <h3 className="text-xl sm:text-2xl font-black leading-snug">
                  {currentTrack.objective}
                </h3>
                <p className="text-slate-350 text-sm leading-relaxed pt-2 border-t border-slate-800">
                  <strong className="text-white block mb-1">Industry Relevance:</strong>
                  {detailedData.industryRelevance}
                </p>
              </div>
            </div>

            {/* Program Delivery Metrics */}
            <div className="space-y-5">
              <h4 className="text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-1.5 h-5 bg-brand-blue-deep rounded-full" />
                Track Delivery Metrics
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                <div className="bg-slate-50 dark:bg-slate-850/40 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-4 text-center space-y-1">
                  <Clock className="w-5 h-5 text-brand-blue-steel mx-auto mb-1" />
                  <span className="text-xl font-black text-slate-900 dark:text-white block">{currentTrack.deliveryMetrics.learningHours}</span>
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase block tracking-wider">Learning Hours</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-850/40 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-4 text-center space-y-1">
                  <Zap className="w-5 h-5 text-amber-500 mx-auto mb-1" />
                  <span className="text-xl font-black text-slate-900 dark:text-white block">{currentTrack.deliveryMetrics.liveSessions}</span>
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase block tracking-wider">Live Sessions</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-850/40 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-4 text-center space-y-1">
                  <BookOpen className="w-5 h-5 text-emerald-500 mx-auto mb-1" />
                  <span className="text-xl font-black text-slate-900 dark:text-white block">{currentTrack.deliveryMetrics.practicalLabs}</span>
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase block tracking-wider">Practical Labs</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-850/40 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-4 text-center space-y-1">
                  <Layers className="w-5 h-5 text-indigo-500 mx-auto mb-1" />
                  <span className="text-xl font-black text-slate-900 dark:text-white block">{currentTrack.deliveryMetrics.miniAssignments}</span>
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase block tracking-wider">Mini Assignments</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-850/40 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-4 text-center col-span-2 sm:col-span-1 space-y-1">
                  <Briefcase className="w-5 h-5 text-brand-blue-deep mx-auto mb-1" />
                  <span className="text-xl font-black text-slate-900 dark:text-white block">{currentTrack.deliveryMetrics.projects}</span>
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase block tracking-wider">Industry Projects</span>
                </div>
              </div>
            </div>

            {/* Dynamic Syllabus Roadmap */}
            <div className="pt-2">
              <SyllabusTabs syllabus={currentTrack.syllabus} />
            </div>

            {/* Target Job Roles & Keywords */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="bg-slate-50 dark:bg-slate-850/20 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 space-y-3">
                <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Target Job Roles</span>
                <div className="flex flex-wrap gap-2">
                  {detailedData.targetJobRoles.map((role) => (
                    <span key={role} className="text-xs font-bold bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-350 px-3 py-1.5 rounded-xl border border-slate-200/40 dark:border-slate-800/60 flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-brand-blue-steel" />
                      {role}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-850/20 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 space-y-3">
                <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Trending Keywords</span>
                <div className="flex flex-wrap gap-1.5">
                  {detailedData.trendingKeywords.map((kw) => (
                    <span key={kw} className="text-[10px] font-extrabold bg-brand-blue-light/50 text-brand-blue-deep dark:bg-slate-800 dark:text-slate-300 px-2.5 py-1 rounded-lg border border-brand-blue-light dark:border-slate-700">
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Sidebar Stats & Apply */}
          <div className="space-y-8 lg:sticky lg:top-28">
            
            {/* Quick Facts Sidebar Card */}
            <div className="bg-slate-50 dark:bg-slate-850/30 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
              <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">
                Quick Facts
              </h3>

              <div className="space-y-4.5 text-sm pt-2">
                <div className="flex gap-3.5 items-start">
                  <Clock className="w-5 h-5 text-brand-blue-steel shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-800 dark:text-slate-350">Selected Track Duration</p>
                    <p className="text-slate-500 mt-0.5 font-bold text-brand-blue-deep dark:text-brand-blue-steel">{currentDurationLabel}</p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start border-t border-slate-200/40 dark:border-slate-800/30 pt-4">
                  <Calendar className="w-5 h-5 text-brand-blue-steel shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-800 dark:text-slate-350">Schedule</p>
                    <p className="text-slate-500 mt-0.5">{course.schedule || "Mon, Wed (6:00 PM - 8:00 PM IST)"}</p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start border-t border-slate-200/40 dark:border-slate-800/30 pt-4">
                  <GraduationCap className="w-5 h-5 text-brand-blue-steel shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-800 dark:text-slate-350">Eligibility</p>
                    <p className="text-slate-500 mt-0.5">{course.eligibility || "Open to all engineering students and professionals."}</p>
                  </div>
                </div>

                {/* Dynamic Career Outcome */}
                <div className="flex gap-3.5 items-start border-t border-slate-200/40 dark:border-slate-800/30 pt-4">
                  <TrendingUp className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-800 dark:text-slate-350">Career Outcome</p>
                    <p className="text-slate-650 dark:text-slate-400 mt-1 font-semibold leading-relaxed text-xs">
                      {currentTrack.careerOutcome}
                    </p>
                  </div>
                </div>

                {/* Dynamic Compliance Standards */}
                {currentTrack.complianceStandards && currentTrack.complianceStandards.length > 0 && (
                  <div className="flex gap-3.5 items-start border-t border-slate-200/40 dark:border-slate-800/30 pt-4">
                    <ShieldCheck className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-800 dark:text-slate-350">Compliance Standards</p>
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {currentTrack.complianceStandards.map((std) => (
                          <span key={std} className="text-[10px] font-bold bg-indigo-50 text-indigo-600 dark:bg-slate-900 dark:text-indigo-400 px-2 py-0.5 rounded border border-indigo-100/30 dark:border-indigo-900/30">
                            {std}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href={applyUrl}
                className="btn-accent flex items-center justify-center gap-2 w-full py-3 shadow-md uppercase tracking-wider font-extrabold text-slate-900 mt-6"
              >
                Apply For This Track
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Course Instructor Card */}
            {course.trainer && (
              <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 shadow-sm space-y-4">
                <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs text-slate-400">
                  Course Instructor
                </h4>
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue-light dark:bg-slate-850 text-brand-blue-deep flex items-center justify-center shrink-0">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-slate-855 dark:text-white">
                      {course.trainer.name}
                    </h5>
                    <p className="text-xs font-bold text-slate-450 dark:text-slate-500 uppercase mt-0.5">
                      {course.trainer.institutionTag} Expert
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {course.trainer.specialization.map((spec) => (
                    <span
                      key={spec}
                      className="text-[9px] font-semibold text-slate-450 bg-slate-50 dark:bg-slate-850 px-2 py-0.5 rounded border border-slate-100 dark:border-slate-800"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
