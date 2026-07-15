import React from "react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import { client } from "../../../../sanity/lib/client";
import { allProjectsQuery } from "../../../../sanity/lib/queries";
import { Project } from "@/types";
import { BRANCHES, BranchKey } from "@/lib/constants";
import { Layers, FolderGit2, Users, Building, Tag } from "lucide-react";
import Link from "next/link";

const MOCK_PROJECTS: Project[] = [
  {
    _id: "p1",
    title: "Real-Time Vehicle Tracker",
    branch: "CSE_IT",
    description: "A GPS tracker with dynamic map rendering, automated notification alerts, and data logging using Next.js and MongoDB.",
    team: ["Amit Sharma", "Priya Das"],
    type: "student",
  },
  {
    _id: "p2",
    title: "ASIC Microchip Verification Suite",
    branch: "EE",
    description: "ASIC verification protocols using SystemVerilog and UVM, validating low-power performance on test arrays.",
    team: ["Rohan Das", "Vikram Patel"],
    institutionTag: "IIT",
    type: "rd",
  },
  {
    _id: "p3",
    title: "IoT smart Irrigation Network",
    branch: "ECE",
    description: "A wireless telemetry node array measuring soil hydrology and activating irrigation triggers using ESP32 and MQTT.",
    team: ["Neha Patel", "Siddharth Rao"],
    institutionTag: "CDAC",
    type: "rd",
  },
  {
    _id: "p4",
    title: "Racing Chassis Assembly & CAE",
    branch: "ME",
    description: "CATIA V5 shape modeling, generative surface drafting, and ANSYS stress analysis for formula Student racing frames.",
    team: ["Arjun Singh", "Sameer Sen"],
    type: "student",
  },
  {
    _id: "p5",
    title: "BIM Integrated High-Rise Columns",
    branch: "CIVIL",
    description: "Revit modeling and CAMBER stress analysis on high-yield concrete structural columns under seismic loading variables.",
    team: ["Rahul Verma", "Karan Johar"],
    type: "student",
  },
];

interface PageProps {
  searchParams: Promise<{
    branch?: string;
    type?: string;
  }>;
}

export const revalidate = 300; // 5-minute ISR

export default async function ProjectsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const filterBranch = params.branch as BranchKey | undefined;
  const filterType = params.type as "student" | "rd" | undefined;

  let rawProjects: Project[] = [];
  try {
    rawProjects = await client.fetch<Project[]>(allProjectsQuery);
  } catch (error) {
    console.warn("Failed to fetch projects, utilizing mock data:", error);
  }

  if (!rawProjects || rawProjects.length === 0) {
    rawProjects = MOCK_PROJECTS;
  }

  // Filter projects list
  const filteredProjects = rawProjects.filter((project) => {
    const matchBranch = !filterBranch || project.branch === filterBranch;
    const matchType = !filterType || project.type === filterType;
    return matchBranch && matchType;
  });

  const branchFilters = [
    { label: "All Branches", value: "" },
    { label: "CSE & IT", value: "CSE_IT" },
    { label: "Electrical", value: "EE" },
    { label: "Electronics", value: "ECE" },
    { label: "Mechanical", value: "ME" },
    { label: "Civil", value: "CIVIL" },
  ];

  const typeFilters = [
    { label: "All Projects", value: "" },
    { label: "Student Projects", value: "student" },
    { label: "Research & Development (R&D)", value: "rd" },
  ];

  const breadcrumbs = [{ label: "Projects" }];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        title="Project Showcase & R&D"
        breadcrumbs={breadcrumbs}
        subtitle="Explore our catalog of certified student designs and collaborative Research & Development (R&D) projects."
      />

      {/* Sticky Filters bar */}
      <section className="py-6 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800/60 sticky top-[72px] sm:top-[80px] z-30 shadow-sm backdrop-blur-md bg-white/95 dark:bg-slate-900/95 space-y-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4 overflow-x-auto">
          {/* Branch filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none shrink-0">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap">
              Branch:
            </span>
            <div className="flex gap-2">
              {branchFilters.map((f) => {
                const isActive = (!filterBranch && f.value === "") || filterBranch === f.value;
                const branchQuery = f.value ? `branch=${f.value}` : "";
                const typeQuery = filterType ? `type=${filterType}` : "";
                const url = `/projects?${[branchQuery, typeQuery].filter(Boolean).join("&")}` || "/projects";

                return (
                  <Link
                    key={f.label}
                    href={url}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap border ${
                      isActive
                        ? "bg-brand-blue-deep text-white border-brand-blue-deep"
                        : "bg-slate-50 dark:bg-slate-850 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200/50"
                    }`}
                  >
                    {f.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Type filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none shrink-0">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap">
              Category:
            </span>
            <div className="flex gap-2">
              {typeFilters.map((f) => {
                const isActive = (!filterType && f.value === "") || filterType === f.value;
                const branchQuery = filterBranch ? `branch=${filterBranch}` : "";
                const typeQuery = f.value ? `type=${f.value}` : "";
                const url = `/projects?${[branchQuery, typeQuery].filter(Boolean).join("&")}` || "/projects";

                return (
                  <Link
                    key={f.label}
                    href={url}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap border ${
                      isActive
                        ? "bg-brand-blue-deep text-white border-brand-blue-deep"
                        : "bg-slate-50 dark:bg-slate-850 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200/50"
                    }`}
                  >
                    {f.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Grid Showcase */}
      <section className="py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 && (
            <div className="text-center py-16 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 max-w-xl mx-auto space-y-4">
              <FolderGit2 className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                No Projects Found
              </h3>
              <p className="text-sm text-slate-500">
                No projects matched your selected filters. Try adjusting your settings.
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => {
              const branchLabel = BRANCHES[project.branch] || project.branch;

              return (
                <div
                  key={project._id}
                  className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    {/* Badge Category */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-450 dark:text-slate-500 bg-slate-50 dark:bg-slate-850 px-2 py-0.5 rounded border border-slate-100 dark:border-slate-800">
                        {branchLabel}
                      </span>
                      <span
                        className={`text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded ${
                          project.type === "rd"
                            ? "bg-indigo-50 text-indigo-650 dark:bg-slate-850 dark:text-indigo-400"
                            : "bg-emerald-55/65 text-emerald-800 dark:bg-slate-850 dark:text-emerald-400"
                        }`}
                      >
                        {project.type === "rd" ? "Research & Dev (R&D)" : "Student Design"}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-550 dark:text-slate-400 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Footer details: Team & Affiliation */}
                  <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-850">
                    {project.team && project.team.length > 0 && (
                      <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500">
                        <Users className="w-4 h-4 shrink-0" />
                        <span className="truncate">
                          <strong>Team:</strong> {project.team.join(", ")}
                        </span>
                      </div>
                    )}

                    {project.type === "rd" && project.institutionTag && (
                      <div className="flex items-center gap-2 text-xs text-brand-blue-steel">
                        <Building className="w-4 h-4 shrink-0" />
                        <span>
                          <strong>Collaboration:</strong> {project.institutionTag}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
