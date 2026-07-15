"use client";

import React, { useState } from "react";
import { BookOpen, Code, Terminal, Layers, ArrowRight, CheckCircle2, Sparkles, Cpu } from "lucide-react";
import { SyllabusModule } from "@/types";

interface SyllabusFlowchartProps {
  syllabus: SyllabusModule[];
}

export default function SyllabusFlowchart({ syllabus }: SyllabusFlowchartProps) {
  const [activeStep, setActiveStep] = useState<number>(0);

  if (!syllabus || syllabus.length === 0) {
    return (
      <div className="p-10 text-center border border-slate-200/60 dark:border-slate-800/80 rounded-3xl bg-slate-50 dark:bg-slate-900/50 text-slate-400">
        Syllabus details are currently being finalized.
      </div>
    );
  }

  // Helper to ensure every module has flowchart fields
  const enrichedSyllabus = syllabus.map((module, idx) => {
    const defaultMilestone = `Phase ${idx + 1}`;
    
    // Generate some meaningful mock prerequisites and projects if they don't exist
    const defaultPrereqs = idx === 0 
      ? ["Basic interest in the domain", "Familiarity with general computers"] 
      : [`Completion of ${syllabus[idx - 1].title}`];
      
    const defaultProjects = [
      `Hands-on Capstone Lab: ${module.title.split(" ")[0]} Implementation`
    ];

    return {
      ...module,
      milestone: module.milestone || defaultMilestone,
      prerequisites: module.prerequisites || defaultPrereqs,
      projects: module.projects || defaultProjects,
    };
  });

  const activeModule = enrichedSyllabus[activeStep] || enrichedSyllabus[0];

  return (
    <div className="space-y-8">
      {/* Visual Roadmap Flow */}
      <div className="relative bg-slate-50 dark:bg-slate-850/20 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8">
        <h3 className="font-extrabold text-sm uppercase tracking-wider text-slate-400 mb-6 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-brand-accent animate-pulse" />
          Interactive Roadmap Timeline
        </h3>

        {/* Step Indicator Nodes */}
        <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-4 z-10">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute left-4 right-4 top-1/2 h-[3px] bg-slate-200 dark:bg-slate-800 -translate-y-1/2 -z-10">
            <div 
              className="h-full bg-gradient-to-r from-brand-blue-deep to-brand-blue-steel transition-all duration-500 ease-out"
              style={{ width: `${(activeStep / (enrichedSyllabus.length - 1)) * 100}%` }}
            />
          </div>

          {/* Connector Line (Mobile) */}
          <div className="md:hidden absolute left-[21px] top-6 bottom-6 w-[3px] bg-slate-200 dark:bg-slate-800 -z-10">
            <div 
              className="w-full bg-gradient-to-b from-brand-blue-deep to-brand-blue-steel transition-all duration-500 ease-out"
              style={{ height: `${(activeStep / (enrichedSyllabus.length - 1)) * 100}%` }}
            />
          </div>

          {enrichedSyllabus.map((module, idx) => {
            const isActive = idx === activeStep;
            const isCompleted = idx < activeStep;

            return (
              <button
                key={module._key}
                onClick={() => setActiveStep(idx)}
                className="flex items-center md:flex-col gap-4 md:gap-3 text-left md:text-center w-full md:w-auto focus:outline-none group cursor-pointer"
              >
                {/* Node circle */}
                <div 
                  className={`w-11 h-11 rounded-full flex items-center justify-center font-extrabold text-sm border-2 transition-all duration-300 shadow-md ${
                    isActive 
                      ? "bg-brand-blue-deep border-brand-accent text-white scale-110 shadow-brand-blue-deep/20 ring-4 ring-brand-blue-light dark:ring-brand-blue-deep/10" 
                      : isCompleted 
                        ? "bg-brand-blue-steel border-brand-blue-steel text-white" 
                        : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 group-hover:border-brand-blue-steel/50"
                  }`}
                >
                  {idx + 1}
                </div>

                {/* Node info labels */}
                <div className="flex-1 md:flex-none">
                  <span className={`block text-xs font-bold uppercase tracking-wider ${
                    isActive ? "text-brand-blue-steel dark:text-brand-accent" : "text-slate-400"
                  }`}>
                    {module.milestone}
                  </span>
                  <span className={`block text-sm font-extrabold line-clamp-1 md:max-w-[150px] transition-colors mt-0.5 ${
                    isActive ? "text-slate-900 dark:text-white" : "text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white"
                  }`}>
                    {module.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Step Detail Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        
        {/* Topics covered */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/85 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
          <div className="absolute right-0 top-0 w-24 h-24 bg-brand-blue-light/10 dark:bg-slate-800/10 rounded-full blur-2xl -z-10" />
          
          <div className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-brand-blue-steel dark:text-brand-accent uppercase tracking-wider">
                  Active Stage — {activeModule.milestone}
                </span>
                <h4 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
                  {activeModule.title}
                </h4>
              </div>
              <div className="w-10 h-10 rounded-xl bg-brand-blue-light dark:bg-slate-850 text-brand-blue-deep flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5 text-brand-blue-steel" />
              </div>
            </div>

            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Key Concepts & Syllabus</p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeModule.topics.map((topic, topicIdx) => (
                <li 
                  key={topicIdx} 
                  className="flex gap-3 items-start bg-slate-50/50 dark:bg-slate-850/10 border border-slate-100/50 dark:border-slate-800/30 p-3.5 rounded-2xl"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-blue-steel shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-650 dark:text-slate-350 leading-relaxed font-semibold">
                    {topic}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation helpers */}
          <div className="flex justify-between items-center border-t border-slate-100 dark:border-slate-800/50 mt-8 pt-5">
            <button
              onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
              className="text-xs font-extrabold text-slate-400 hover:text-brand-blue-steel dark:hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              ← Previous Stage
            </button>
            <span className="text-xs text-slate-400 font-bold">
              Stage {activeStep + 1} of {enrichedSyllabus.length}
            </span>
            <button
              onClick={() => setActiveStep((prev) => Math.min(enrichedSyllabus.length - 1, prev + 1))}
              disabled={activeStep === enrichedSyllabus.length - 1}
              className="text-xs font-extrabold text-slate-400 hover:text-brand-blue-steel dark:hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              Next Stage →
            </button>
          </div>
        </div>

        {/* Sidebar Info: Prerequisites and Projects */}
        <div className="space-y-6 flex flex-col justify-between">
          {/* Prerequisites */}
          <div className="bg-slate-50 dark:bg-slate-850/20 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 flex-1 flex flex-col justify-center">
            <div className="flex gap-3 items-center mb-4">
              <div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
                <Cpu className="w-4 h-4" />
              </div>
              <h5 className="font-extrabold text-sm text-slate-900 dark:text-white uppercase tracking-wider">
                Prerequisites
              </h5>
            </div>
            <ul className="space-y-2">
              {activeModule.prerequisites?.map((prereq, pIdx) => (
                <li key={pIdx} className="text-xs font-semibold text-slate-600 dark:text-slate-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  {prereq}
                </li>
              ))}
            </ul>
          </div>

          {/* Practical Projects */}
          <div className="bg-gradient-to-br from-brand-blue-deep to-brand-blue-steel rounded-3xl p-6 text-white flex-1 flex flex-col justify-center shadow-lg shadow-brand-blue-deep/10">
            <div className="flex gap-3 items-center mb-4">
              <div className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center shrink-0">
                <Code className="w-4 h-4" />
              </div>
              <h5 className="font-extrabold text-sm uppercase tracking-wider text-slate-100">
                Build Projects
              </h5>
            </div>
            <ul className="space-y-3">
              {activeModule.projects?.map((proj, prIdx) => (
                <li key={prIdx} className="text-xs font-bold flex gap-2 items-start text-white/95">
                  <ArrowRight className="w-3.5 h-3.5 text-brand-accent shrink-0 mt-0.5" />
                  <span>{proj}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
