import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  subtitle?: string;
}

export default function PageHero({ title, breadcrumbs, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white py-16 sm:py-20 lg:py-24">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-brand-blue-deep/35 to-transparent blur-3xl rounded-full" />
      <div className="absolute -top-40 left-10 w-96 h-96 bg-brand-blue-steel/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-4">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-400 font-semibold uppercase tracking-wider">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            {breadcrumbs.map((item, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3.5 h-3.5" />
                {item.href ? (
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-slate-300 font-bold">{item.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="max-w-2xl text-sm sm:text-base text-slate-400 font-medium">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
