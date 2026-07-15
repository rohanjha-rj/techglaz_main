"use client";

import React, { useState } from "react";
import { GitFork, List } from "lucide-react";
import SyllabusAccordion from "./SyllabusAccordion";
import SyllabusFlowchart from "./SyllabusFlowchart";
import { SyllabusModule } from "@/types";

interface SyllabusTabsProps {
  syllabus: SyllabusModule[];
}

export default function SyllabusTabs({ syllabus }: SyllabusTabsProps) {
  const [activeTab, setActiveTab] = useState<"flowchart" | "list">("flowchart");

  return (
    <div className="space-y-6">
      {/* Header and Toggle Button Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-100 dark:border-slate-800/50 pb-5">
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <span className="w-1.5 h-6 bg-brand-blue-deep rounded-full" />
          Course Syllabus
        </h2>

        {/* Custom Tab Selector */}
        <div className="inline-flex p-1 bg-slate-100 dark:bg-slate-850/60 rounded-xl self-start">
          <button
            onClick={() => setActiveTab("flowchart")}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg transition-all duration-300 cursor-pointer ${
              activeTab === "flowchart"
                ? "bg-white dark:bg-slate-900 text-brand-blue-deep dark:text-brand-blue-steel shadow-sm"
                : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-350"
            }`}
          >
            <GitFork className="w-3.5 h-3.5" />
            Interactive Roadmap
          </button>
          <button
            onClick={() => setActiveTab("list")}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg transition-all duration-300 cursor-pointer ${
              activeTab === "list"
                ? "bg-white dark:bg-slate-900 text-brand-blue-deep dark:text-brand-blue-steel shadow-sm"
                : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-350"
            }`}
          >
            <List className="w-3.5 h-3.5" />
            List View
          </button>
        </div>
      </div>

      {/* Tab Panels */}
      <div className="transition-all duration-300 ease-in-out">
        {activeTab === "flowchart" ? (
          <SyllabusFlowchart syllabus={syllabus} />
        ) : (
          <SyllabusAccordion syllabus={syllabus} />
        )}
      </div>
    </div>
  );
}
