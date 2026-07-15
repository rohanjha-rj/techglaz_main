import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  inverse?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = true, inverse = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 space-y-4 ${centered ? "mx-auto max-w-3xl text-center" : "text-left"}`}>
      {subtitle && (
        <span className={`inline-flex items-center rounded-full border px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] sm:text-xs ${inverse ? "border-white/15 bg-white/10 text-slate-200" : "border-brand-blue-steel/10 bg-brand-blue-light/70 text-brand-blue-steel dark:border-slate-700/50 dark:bg-slate-800/80 dark:text-slate-350"}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-2xl font-black leading-tight tracking-tight sm:text-3xl lg:text-4xl ${inverse ? "text-white" : "text-slate-900 dark:text-white"}`}>{title}</h2>
      <div className={`mt-4 h-[4px] w-12 rounded-full bg-gradient-to-r from-brand-blue-deep via-brand-blue-steel to-brand-accent ${centered ? "mx-auto" : "mr-auto"}`} />
    </div>
  );
}

