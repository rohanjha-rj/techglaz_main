import React from "react";
import PageHero from "@/components/shared/PageHero";
import ContactForm from "@/components/forms/ContactForm";
import { MapPin, Phone, Mail, HelpCircle } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import { Metadata } from "next";
import LeafletMapWrapper from "@/components/shared/LeafletMapWrapper";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Techglaz Labs team regarding certification courses, R&D projects, and institutional collaborations.",
};

export default function ContactPage() {
  const address = process.env.NEXT_PUBLIC_INSTITUTE_ADDRESS || "Techglaz Labs, Tech Park, City Center, Pune, Maharashtra, India";
  const email = "info@techglazlabs.com";
  const phone = "+91 99999 99999";

  const breadcrumbs = [{ label: "Contact Us" }];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        title="Get In Touch"
        breadcrumbs={breadcrumbs}
        subtitle="Reach out for training track assistance, campus MoU setup, or research consultancy queries."
      />

      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Info + Map (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-8 space-y-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Contact Information
                </h3>

                <ul className="space-y-5.5 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-brand-blue-light/65 text-brand-blue-deep flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-slate-350">Our Location</p>
                      <p className="mt-1 leading-relaxed">{address}</p>
                    </div>
                  </li>

                  <li className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-xl bg-brand-blue-light/65 text-brand-blue-deep flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-slate-350">Call Us</p>
                      <a href={`tel:${phone.replace(/\s+/g, "")}`} className="hover:text-brand-blue-steel transition-colors block mt-0.5">
                        {phone}
                      </a>
                    </div>
                  </li>

                  <li className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-xl bg-brand-blue-light/65 text-brand-blue-deep flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-slate-350">Email Address</p>
                      <a href={`mailto:${email}`} className="hover:text-brand-blue-steel transition-colors block mt-0.5 break-all">
                        {email}
                      </a>
                    </div>
                  </li>
                </ul>

                {/* Social links */}
                <div className="pt-6 border-t border-slate-100 dark:border-slate-850">
                  <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">
                    Follow Our Updates
                  </p>
                  <div className="flex gap-3">
                    <a
                      href={SOCIAL_LINKS.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-slate-50 hover:bg-brand-blue-steel text-slate-500 hover:text-white flex items-center justify-center transition-all hover:scale-105 border border-slate-100 dark:bg-slate-800 dark:border-slate-750 dark:text-slate-400"
                    >
                      <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a
                      href={SOCIAL_LINKS.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-slate-50 hover:bg-pink-600 text-slate-500 hover:text-white flex items-center justify-center transition-all hover:scale-105 border border-slate-100 dark:bg-slate-800 dark:border-slate-750 dark:text-slate-400"
                    >
                      <svg className="w-4.5 h-4.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a
                      href={SOCIAL_LINKS.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-slate-50 hover:bg-red-650 text-slate-500 hover:text-white flex items-center justify-center transition-all hover:scale-105 border border-slate-100 dark:bg-slate-800 dark:border-slate-750 dark:text-slate-400"
                    >
                      <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                        <path d="M23.498 6.163c-.272-1.022-1.074-1.826-2.099-2.098C19.544 3.545 12 3.545 12 3.545s-7.544 0-9.399.52c-1.025.272-1.827 1.076-2.099 2.098C0 8.021 0 12 0 12s0 3.979.502 5.837c.272 1.022 1.074 1.826 2.099 2.098C4.456 20.455 12 20.455 12 20.455s7.544 0 9.399-.52c1.025-.272 1.827-1.076 2.099-2.098C24 15.979 24 12 24 12s0-3.978-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Dynamic Leaflet Map */}
              <div className="h-[320px] rounded-3xl overflow-hidden shadow-sm relative">
                <LeafletMapWrapper />
              </div>
            </div>

            {/* Right Column: Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
