import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

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
    <section className="relative overflow-hidden border-b border-slate-200/70 bg-slate-950 py-20 text-white sm:py-24 lg:py-28 dark:border-slate-900/70">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute right-[-8%] top-[-10%] h-[28rem] w-[28rem] rounded-full bg-brand-blue-steel/15 blur-[140px]" />
      <div className="absolute bottom-[-14%] left-[-8%] h-[24rem] w-[24rem] rounded-full bg-brand-accent/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-5 text-center">
          <nav className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-slate-400 backdrop-blur-md">
            <Link href="/" className="flex items-center gap-1 transition-colors hover:text-[#fbbf24]">
              <Home className="h-3.5 w-3.5" />
              <span>Home</span>
            </Link>
            {breadcrumbs.map((item, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="h-3 w-3 text-slate-650" />
                {item.href ? (
                  <Link href={item.href} className="transition-colors hover:text-[#fbbf24]">{item.label}</Link>
                ) : (
                  <span className="text-slate-300">{item.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          <h1 className="max-w-4xl text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">{title}</span>
          </h1>

          {subtitle && <p className="max-w-2xl text-sm font-semibold leading-relaxed text-slate-400 sm:text-base">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}

