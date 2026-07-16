import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight, Sparkles } from "lucide-react";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/60 bg-slate-950 text-slate-350 transition-colors duration-200 dark:border-slate-900/60">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_24px_60px_-30px_rgba(2,8,23,0.7)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] lg:gap-8">
            <div className="space-y-6">
              <Link href="/" className="block max-w-[220px] origin-left transition-transform hover:scale-[1.02]">
                <Image src="/logo_name.png" alt="Techglaz Labs - Let's Create Your own Future" width={1090} height={214} className="object-contain brightness-0 invert" style={{ width: "auto", height: "auto" }} />
              </Link>
              <p className="max-w-md text-sm leading-relaxed font-medium text-slate-400">
                Empowering students and faculty through high-end professional development, bridging academic curricula and state-of-the-art industry engineering domains.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/80 text-slate-400 transition-all hover:scale-105 hover:bg-brand-blue-steel hover:text-white" aria-label="LinkedIn">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/80 text-slate-400 transition-all hover:scale-105 hover:bg-pink-600 hover:text-white" aria-label="Instagram">
                  <svg className="h-4 w-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/80 text-slate-400 transition-all hover:scale-105 hover:bg-red-650 hover:text-white" aria-label="YouTube">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.163c-.272-1.022-1.074-1.826-2.099-2.098C19.544 3.545 12 3.545 12 3.545s-7.544 0-9.399.52c-1.025.272-1.827 1.076-2.099 2.098C0 8.021 0 12 0 12s0 3.979.502 5.837c.272 1.022 1.074 1.826 2.099 2.098C4.456 20.455 12 20.455 12 20.455s7.544 0 9.399-.52c1.025-.272 1.827-1.076 2.099-2.098C24 15.979 24 12 24 12s0-3.978-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.24em] text-white">Quick Links</h3>
              <ul className="space-y-3.5 text-sm font-semibold text-slate-400">
                {FOOTER_LINKS.quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="flex items-center gap-1 transition-colors hover:text-[#fbbf24]">
                      <span>{link.label}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-slate-550 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.24em] text-white">Popular Courses</h3>
              <ul className="space-y-3.5 text-sm font-semibold text-slate-400">
                {FOOTER_LINKS.courses.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="block truncate transition-colors hover:text-[#fbbf24]">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-4">
                <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
                  <Sparkles className="h-4 w-4 text-brand-accent" />
                  <span>Need guidance?</span>
                </div>
                <p className="text-sm leading-relaxed text-slate-400">Our team can help you find the right training path and application track.</p>
              </div>
              <div>
                <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.24em] text-white">Contact Us</h3>
                <ul className="space-y-4 text-sm font-semibold text-slate-400">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-blue-steel" />
                    <a href="https://maps.app.goo.gl/uTjyMKr1nnwbb4sY6" target="_blank" rel="noopener noreferrer" className="leading-relaxed hover:text-[#fbbf24] transition-colors">{process.env.NEXT_PUBLIC_INSTITUTE_ADDRESS || "ANK Villa, Near Manorama ITI, Sabour, Bhagalpur, Bihar"}</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-4.5 w-4.5 shrink-0 text-brand-blue-steel" />
                    <a href="tel:+919137866957" className="transition-colors hover:text-[#fbbf24]">+91 91378 66957</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-4.5 w-4.5 shrink-0 text-brand-blue-steel" />
                    <a href="mailto:manager@techglaz.com" className="break-all transition-colors hover:text-[#fbbf24]">manager@techglaz.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-xs font-semibold text-slate-500 sm:flex-row">
          <p>© {currentYear} Techglaz Labs Private Limited. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-slate-300">Privacy Policy</Link>
            <Link href="/terms" className="transition-colors hover:text-slate-300">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


