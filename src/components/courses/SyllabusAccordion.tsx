"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
import { SyllabusModule } from "@/types";

interface SyllabusAccordionProps {
  syllabus: SyllabusModule[];
}

export default function SyllabusAccordion({ syllabus }: SyllabusAccordionProps) {
  const [activeKey, setActiveKey] = useState<string | null>(
    syllabus.length > 0 ? syllabus[0]._key : null
  );

  const toggleAccordion = (key: string) => {
    setActiveKey((prev) => (prev === key ? null : key));
  };

  if (!syllabus || syllabus.length === 0) {
    return (
      <div className="p-6 text-center border border-slate-100 dark:border-slate-800 rounded-2xl bg-slate-50 dark:bg-slate-900 text-slate-400">
        Syllabus details are currently being finalized.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {syllabus.map((module, idx) => {
        const isOpen = activeKey === module._key;
        return (
          <div
            key={module._key}
            className="border border-slate-100 dark:border-slate-800/80 rounded-2xl overflow-hidden bg-white dark:bg-slate-900 transition-all duration-300"
          >
            {/* Header Accordion trigger */}
            <button
              onClick={() => toggleAccordion(module._key)}
              className="flex items-center justify-between w-full px-6 py-5 text-left font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-850/50 transition-colors focus:outline-none"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue-light dark:bg-slate-850 text-brand-blue-deep dark:text-brand-blue-steel text-xs font-bold shrink-0">
                  {idx + 1}
                </span>
                <span className="text-sm sm:text-base">{module.title}</span>
              </div>
              {isOpen ? (
                <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
              )}
            </button>

            {/* Panel Content */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-[500px] opacity-100 border-t border-slate-100 dark:border-slate-850" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-6 bg-slate-50/50 dark:bg-slate-900/40">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm text-slate-600 dark:text-slate-400 font-medium">
                  {module.topics.map((topic, topicIdx) => (
                    <li key={topicIdx} className="flex gap-2.5 items-start">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue-steel shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
