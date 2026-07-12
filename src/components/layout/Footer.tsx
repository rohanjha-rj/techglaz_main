import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Upper Footer: Logo, Socials, Links Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About & Branding */}
          <div className="space-y-6">
            <Link href="/" className="block max-w-[240px] hover:scale-105 transition-transform origin-left">
              <Image 
                src="/logo_name.png" 
                alt="Techglaz Labs - Let's Create Your own Future" 
                width={240} 
                height={80} 
                className="w-full h-auto object-contain"
              />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Empowering students and faculty through high-end professional development, bridging academic curricula and state-of-the-art industry engineering domains.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-brand-blue-steel text-slate-400 hover:text-white flex items-center justify-center transition-all hover:scale-105"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-pink-600 text-slate-400 hover:text-white flex items-center justify-center transition-all hover:scale-105"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-red-600 text-slate-400 hover:text-white flex items-center justify-center transition-all hover:scale-105"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163c-.272-1.022-1.074-1.826-2.099-2.098C19.544 3.545 12 3.545 12 3.545s-7.544 0-9.399.52c-1.025.272-1.827 1.076-2.099 2.098C0 8.021 0 12 0 12s0 3.979.502 5.837c.272 1.022 1.074 1.826 2.099 2.098C4.456 20.455 12 20.455 12 20.455s7.544 0 9.399-.52c1.025-.272 1.827-1.076 2.099-2.098C24 15.979 24 12 24 12s0-3.978-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3.5 text-sm">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors flex items-center group gap-1"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Featured Courses */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Popular Courses
            </h3>
            <ul className="space-y-3.5 text-sm">
              {FOOTER_LINKS.courses.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors block truncate"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                Contact Us
              </h3>
              <ul className="space-y-4 text-sm text-slate-450">
                <li className="flex gap-3 items-start">
                  <MapPin className="w-5 h-5 text-brand-blue-steel shrink-0 mt-0.5" />
                  <span>
                    {process.env.NEXT_PUBLIC_INSTITUTE_ADDRESS ||
                      "Techglaz Labs, Tech Park, City Center, Pune, India"}
                  </span>
                </li>
                <li className="flex gap-3 items-center">
                  <Phone className="w-5 h-5 text-brand-blue-steel shrink-0" />
                  <a href="tel:+919999999999" className="hover:text-white transition-colors">
                    +91 99999 99999
                  </a>
                </li>
                <li className="flex gap-3 items-center">
                  <Mail className="w-5 h-5 text-brand-blue-steel shrink-0" />
                  <a
                    href="mailto:info@techglazlabs.com"
                    className="hover:text-white transition-colors break-all"
                  >
                    info@techglazlabs.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Footer: Copyright & Legal */}
      <div className="bg-slate-950/80 py-6 border-t border-slate-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Techglaz Labs Private Limited. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-slate-350 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-350 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
