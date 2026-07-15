import React from "react";
import PageHero from "@/components/shared/PageHero";
import CareerPathFinder from "@/components/pathfinder/CareerPathFinder";

export const metadata = {
  title: "Career Path Finder | Techglaz Labs",
  description: "Take our interactive skill assessment quiz to find the most suitable specialized training track in VLSI, Embedded Systems, Full-Stack Web Dev, or Mechanical CAD.",
};

export default function CareerPathFinderPage() {
  const breadcrumbs = [
    { label: "Trainings", href: "/trainings" },
    { label: "Career Path Finder" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50 dark:bg-slate-900/10">
      {/* Page Hero Header */}
      <PageHero
        title="Career Path Finder"
        breadcrumbs={breadcrumbs}
        subtitle="Uncover your engineering potential and find the perfect course roadmap."
      />

      {/* Main Quiz Section */}
      <section className="py-12 md:py-16">
        <CareerPathFinder />
      </section>
    </div>
  );
}
