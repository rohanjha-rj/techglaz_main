import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  inverse?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  inverse = false,
}: SectionHeadingProps) {
  return (
    <div className={`space-y-3 mb-12 ${centered ? "text-center max-w-3xl mx-auto" : "text-left"}`}>
      {subtitle && (
        <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-brand-blue-steel bg-brand-blue-light/60 dark:bg-slate-800 dark:text-slate-350 px-3 py-1.5 rounded-full">
          {subtitle}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
          inverse ? "text-white" : "text-slate-900 dark:text-white"
        }`}
      >
        {title}
      </h2>
      <div
        className={`h-1.5 w-16 bg-gradient-to-r from-brand-blue-deep to-brand-blue-steel rounded-full mt-4 ${
          centered ? "mx-auto" : "mr-auto"
        }`}
      />
    </div>
  );
}
