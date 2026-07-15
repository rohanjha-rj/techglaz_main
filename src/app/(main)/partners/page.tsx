import React from "react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import { client } from "../../../../sanity/lib/client";
import { allPartnersQuery } from "../../../../sanity/lib/queries";
import { Partner } from "@/types";
import { Building, GraduationCap, Link2, HelpCircle } from "lucide-react";

const MOCK_PARTNERS: Partner[] = [
  {
    _id: "pa1",
    name: "MIT University (MU)",
    logo: { _type: "image", asset: { _ref: "mit", _type: "reference" } },
    type: "MU",
    websiteUrl: "https://mituniversity.edu",
  },
  {
    _id: "pa2",
    name: "CDAC Pune",
    logo: { _type: "image", asset: { _ref: "cdac", _type: "reference" } },
    type: "Industry",
    websiteUrl: "https://cdac.in",
  },
  {
    _id: "pa3",
    name: "State Cyber Forensic Cell",
    logo: { _type: "image", asset: { _ref: "cyber", _type: "reference" } },
    type: "Industry",
  },
  {
    _id: "pa4",
    name: "Automotive Systems India",
    logo: { _type: "image", asset: { _ref: "auto", _type: "reference" } },
    type: "Industry",
  },
  {
    _id: "pa5",
    name: "Silicon Layout Systems",
    logo: { _type: "image", asset: { _ref: "silicon", _type: "reference" } },
    type: "Industry",
  },
];

export const revalidate = 300; // 5-minute ISR

export default async function PartnersPage() {
  let rawPartners: Partner[] = [];
  try {
    rawPartners = await client.fetch<Partner[]>(allPartnersQuery);
  } catch (error) {
    console.warn("Failed to fetch partners from Sanity, using mock data:", error);
  }

  if (!rawPartners || rawPartners.length === 0) {
    rawPartners = MOCK_PARTNERS;
  }

  // Split into University Partners (MU) vs Industry Partners
  const universityPartners = rawPartners.filter((p) => p.type === "MU");
  const industryPartners = rawPartners.filter((p) => p.type === "Industry");

  const breadcrumbs = [{ label: "Partners" }];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        title="Institutional Partners & Affiliations"
        breadcrumbs={breadcrumbs}
        subtitle="Collaborating with premier universities, state cyber centers, and corporate engineering hubs."
      />

      {/* University Partners Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="University Partners (MU)"
            subtitle="Academic Synergy"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {universityPartners.map((partner) => (
              <div
                key={partner._id}
                className="group bg-slate-50 dark:bg-slate-850/30 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-750 flex items-center justify-center shrink-0 mb-6 shadow-sm">
                    <GraduationCap className="w-7 h-7 text-indigo-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                    {partner.name}
                  </h3>
                  <p className="text-xs font-semibold text-indigo-650 dark:text-indigo-400 bg-indigo-50 dark:bg-slate-850 px-2.5 py-1 rounded-full w-fit">
                    Verified MoU Partner
                  </p>
                </div>

                {partner.websiteUrl && (
                  <a
                    href={partner.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-450 hover:text-brand-blue-deep dark:hover:text-brand-blue-steel transition-colors mt-6 pt-4 border-t border-slate-200/40 dark:border-slate-800/20"
                  >
                    <Link2 className="w-3.5 h-3.5" />
                    <span>Visit Official Website</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate & Research Partners Section */}
      <section className="py-20 bg-transparent border-t border-slate-100 dark:border-slate-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Industry & Research Partners"
            subtitle="Corporate Collaborations"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {industryPartners.map((partner) => (
              <div
                key={partner._id}
                className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800 flex items-center justify-center shrink-0 mb-6 shadow-sm">
                    <Building className="w-7 h-7 text-brand-blue-steel" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                    {partner.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-450 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full w-fit">
                    Corporate/Cell Collaboration
                  </p>
                </div>

                {partner.websiteUrl && (
                  <a
                    href={partner.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-450 hover:text-brand-blue-deep dark:hover:text-brand-blue-steel transition-colors mt-6 pt-4 border-t border-slate-200/40 dark:border-slate-800/20"
                  >
                    <Link2 className="w-3.5 h-3.5" />
                    <span>Visit Partner Website</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
