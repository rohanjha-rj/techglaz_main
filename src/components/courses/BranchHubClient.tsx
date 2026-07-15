"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  TrendingUp, 
  Briefcase, 
  Award, 
  GraduationCap, 
  CheckCircle, 
  Wrench, 
  Clock, 
  BookOpen, 
  ChevronRight, 
  Layers, 
  ArrowLeft 
} from "lucide-react";
import { Course } from "@/types";
import { BranchProfile } from "@/lib/branchesData";
import { BRANCH_KEYS_TO_SLUGS } from "@/lib/constants";
import CourseCard from "./CourseCard";

interface BranchHubClientProps {
  profile: BranchProfile;
  branchKey: string;
  courses: Course[];
}

type DurationTab = "fourWeeks" | "sixWeeks" | "eightWeeks" | "twelveWeeks" | "twentyFourWeeks";

export default function BranchHubClient({ profile, branchKey, courses }: BranchHubClientProps) {
  const [activeTab, setActiveTab] = useState<DurationTab>("twelveWeeks");

  const durationTabs: { key: DurationTab; label: string }[] = [
    { key: "fourWeeks", label: "4 Weeks" },
    { key: "sixWeeks", label: "6 Weeks" },
    { key: "eightWeeks", label: "8 Weeks" },
    { key: "twelveWeeks", label: "12 Weeks" },
    { key: "twentyFourWeeks", label: "24 Weeks" },
  ];

  const currentPath = profile.curriculumPaths[activeTab];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Back Button */}
      <div>
        <Link 
          href="/trainings" 
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-blue-deep dark:text-slate-400 dark:hover:text-brand-blue-steel transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Trainings
        </Link>
      </div>

      {/* Hero & Market Intel Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-950 to-brand-blue-deep/20 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue-steel/10 rounded-full blur-3xl -z-10" />
        
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue-steel/20 border border-brand-blue-steel/30 text-brand-blue-steel text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            Industry Skill Intelligence Profile
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            {profile.name}
          </h1>
          
          <p className="text-xl font-medium text-brand-blue-steel/90 italic">
            "{profile.tagline}"
          </p>
          
          <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
            {profile.summary}
          </p>
        </div>

        {/* Growth Stats Dashboard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 pt-10 border-t border-slate-800">
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block">Growth Rate</span>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-500" />
              <span className="text-xl font-extrabold text-white">{profile.industryGrowth.growthRate}</span>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block">Market Projection</span>
            <span className="text-xl font-extrabold text-white">{profile.industryGrowth.marketValue}</span>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block">Primary Driver</span>
            <span className="text-sm font-semibold text-slate-300 leading-snug block">{profile.industryGrowth.demandDriver}</span>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block">Key Recruiters</span>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {profile.industryGrowth.topEmployers.map((emp) => (
                <span key={emp} className="text-[10px] font-bold bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded border border-slate-700/50">
                  {emp}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Curriculum Roadmap Section */}
      <section className="space-y-8">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3">
            <span className="w-1.5 h-8 bg-brand-blue-deep rounded-full" />
            Flexible Curriculum Roadmaps
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Select a program duration to view the detailed industry learning path. Each tier scales in technical complexity.
          </p>
        </div>

        {/* Tabs Scroller */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {durationTabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 rounded-2xl text-sm font-bold tracking-wide transition-all border shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-brand-blue-deep text-white border-brand-blue-deep shadow-lg"
                    : "bg-slate-50 dark:bg-slate-850 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200/60 dark:border-slate-850"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Selected Roadmap Details */}
        <div className="bg-slate-50 dark:bg-slate-850/20 border border-slate-200/50 dark:border-slate-800/80 rounded-3xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2 text-brand-blue-steel">
              <Clock className="w-5 h-5" />
              <span className="text-sm font-bold uppercase tracking-wider">Focus Objectives</span>
            </div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white">
              {currentPath.title}
            </h3>
            <p className="text-sm text-slate-650 dark:text-slate-400 leading-relaxed font-medium">
              {currentPath.focus}
            </p>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-brand-blue-steel">
              <BookOpen className="w-5 h-5" />
              <span className="text-sm font-bold uppercase tracking-wider">Curriculum Milestones</span>
            </div>
            <ul className="space-y-4">
              {currentPath.milestones.map((milestone, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 dark:text-slate-300 font-semibold leading-relaxed">
                    {milestone}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Recruiter Focus: Career Roles & Skill Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Column: Targeted Roles */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">
              <Briefcase className="w-6 h-6 text-brand-blue-deep dark:text-brand-blue-steel" />
              Targeted Career Pathways
            </h2>
          </div>

          <div className="space-y-5">
            {profile.roles.map((role, idx) => (
              <div 
                key={idx} 
                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-5 shadow-sm space-y-3"
              >
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{role.title}</h3>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 dark:text-emerald-400 px-3 py-1 rounded-full border border-emerald-100 dark:border-emerald-900/40">
                    {role.salaryRange}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-450 leading-relaxed font-medium">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Right Column: Skills & Technology Grid */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">
              <Wrench className="w-5 h-5 text-brand-blue-deep dark:text-brand-blue-steel" />
              Recruiter-Core Skill Matrices
            </h2>
          </div>

          <div className="bg-slate-50 dark:bg-slate-850/10 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 space-y-6">
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-450 dark:text-slate-500 uppercase tracking-widest">Technical Competencies</h4>
              <ul className="space-y-3">
                {profile.keySkills.technical.map((skill, idx) => (
                  <li key={idx} className="space-y-1">
                    <span className="text-sm font-extrabold text-slate-850 dark:text-slate-200 block">{skill.name}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-450 font-medium block leading-relaxed">{skill.description}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-450 dark:text-slate-500 uppercase tracking-widest">Industry Standard Tools</h4>
              <div className="flex flex-wrap gap-2">
                {profile.keySkills.tools.map((tool) => (
                  <span key={tool} className="text-xs font-bold bg-brand-blue-light/50 text-brand-blue-deep dark:bg-slate-800 dark:text-slate-300 px-3 py-1 rounded-lg border border-brand-blue-light dark:border-slate-700">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-450 dark:text-slate-500 uppercase tracking-widest">Professional Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                {profile.keySkills.softSkills.map((soft) => (
                  <span key={soft} className="text-xs font-bold bg-indigo-50 text-indigo-600 dark:bg-slate-850 dark:text-indigo-400 px-3 py-1 rounded-lg border border-indigo-100/50 dark:border-indigo-900/30">
                    {soft}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Academic & Standards Alignment */}
      <section className="bg-slate-50 dark:bg-slate-850/10 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">
            <GraduationCap className="w-6 h-6 text-brand-blue-deep dark:text-brand-blue-steel" />
            University & Global Standards Integration
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-450 uppercase tracking-wider block">University Core Alignments</span>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {profile.academicAlignment.coreSubjects.map((sub) => (
                <span key={sub} className="text-xs font-semibold text-slate-650 dark:text-slate-400 block bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 px-3 py-1.5 rounded-xl">
                  {sub}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-450 uppercase tracking-wider block">Target Lab Competencies</span>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {profile.academicAlignment.labSkills.map((lab) => (
                <span key={lab} className="text-xs font-semibold text-slate-650 dark:text-slate-400 block bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 px-3 py-1.5 rounded-xl">
                  {lab}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-450 uppercase tracking-wider block">International Standard Codes</span>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {profile.academicAlignment.industryStandards.map((std) => (
                <span key={std} className="text-xs font-bold text-indigo-650 dark:text-indigo-400 block bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100/50 dark:border-indigo-900/30 px-3 py-1.5 rounded-xl">
                  {std}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Active Courses for this branch */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center justify-between">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">
            <span className="w-1.5 h-8 bg-brand-blue-deep rounded-full" />
            Active Related Programs
          </h2>
          <span className="text-xs font-bold text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-850 px-3 py-1 rounded-full border border-slate-200/50 dark:border-slate-800">
            {courses.length} {courses.length === 1 ? "Program" : "Programs"}
          </span>
        </div>

        {courses.length === 0 ? (
          <div className="text-center py-10 bg-slate-50/30 dark:bg-slate-850/5 border border-dashed border-slate-200 dark:border-slate-800 rounded-3xl p-6">
            <p className="text-sm text-slate-500 dark:text-slate-450 font-semibold">
              There are currently no active certification courses running under this specific branch in this cohort. Contact administrator to request special scheduling.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
