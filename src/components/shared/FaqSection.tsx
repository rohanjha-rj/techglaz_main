"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Who are the instructors at Techglaz Labs?",
    answer: "Our trainers include experienced engineering researchers, PhD holders from premium IIT hubs, and experts from organizations like CDAC. They bring decades of academic guidance and hands-on industrial verification standards.",
  },
  {
    question: "What certification do I receive upon course completion?",
    answer: "Every candidate who successfully completes their modules, submits required research projects, and passes the assessment receives a verified Professional Development Certificate. These are highly valued in semiconductor design, IoT automation, and software engineering domains.",
  },
  {
    question: "Are there internship opportunities or placement tracks?",
    answer: "Yes, we offer specialized internship tracks that place trainees directly onto industrial R&D projects. We work with over 45+ corporate partners and have achieved placement records of up to 14.2 LPA for top candidates.",
  },
  {
    question: "Is the training schedule suitable for college students or working professionals?",
    answer: "Our course schedules are planned with students and working professionals in mind, featuring convenient evening classes (e.g. 6:00 PM - 8:00 PM IST) and weekend batches. Recordings are also provided for offline review.",
  },
  {
    question: "How can my institution sign an MoU with Techglaz Labs?",
    answer: "Colleges and universities looking to enrich their curricula can initiate MoUs for faculty development programs or student workshop tracks. Please contact us via manager@techglaz.com or fill out the contact form.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-4">
      {FAQS.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="border border-slate-200/60 dark:border-slate-800/80 rounded-2xl bg-white dark:bg-slate-900 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between px-6 py-5 text-left font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-850/30 transition-colors focus:outline-none"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-brand-blue-steel shrink-0" />
                <span className="text-sm sm:text-base">{faq.question}</span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-250 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 pt-1 text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-medium leading-relaxed border-t border-slate-100 dark:border-slate-850">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
