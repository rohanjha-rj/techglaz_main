// ============================================
// Techglaz Labs — Trainee Dashboard
// ============================================

import React from "react";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import dbConnect from "@/lib/mongodb";
import Application from "@/models/Application";
import { dbFallback } from "@/lib/dbFallback";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import { getStatusColor, formatStatus, formatDate } from "@/lib/utils";
import { ApplicationDocument } from "@/types";
import { User, ClipboardList, Briefcase, FileText, ChevronRight, GraduationCap } from "lucide-react";
import Link from "next/link";

export const revalidate = 0; // Disable caching for dashboard to ensure real-time application updates

export default async function DashboardPage() {
  // 1. Fetch server session
  const session = await auth();

  // Redirect if not authenticated
  if (!session || !session.user) {
    redirect("/login?callbackUrl=/dashboard");
  }

  // 2. Fetch user's applications from DB
  let applications: any[] = [];
  try {
    if (dbFallback.isFallback) {
      applications = await dbFallback.findApplications(session.user.id || "", session.user.email || "");
    } else {
      await dbConnect();
      applications = await Application.find({
        $or: [
          { userId: session.user.id },
          { email: session.user.email?.toLowerCase() }
        ]
      }).sort({ createdAt: -1 });
    }
  } catch (error) {
    console.error("Dashboard DB fetch error:", error);
  }

  const breadcrumbs = [{ label: "Dashboard" }];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        title="Trainee Dashboard"
        breadcrumbs={breadcrumbs}
        subtitle="Manage your profile, monitor enrollment applications, and track certification statuses."
      />

      <section className="py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            
            {/* Left Column: Trainee Profile Info Card */}
            <div className="lg:col-span-1 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6.5 shadow-sm space-y-6">
              <div className="flex flex-col items-center text-center">
                {session.user.image ? (
                  <img
                    src={session.user.image}
                    alt={session.user.name || "Trainee"}
                    className="w-18 h-18 rounded-full object-cover border-2 border-brand-blue-steel/40"
                  />
                ) : (
                  <div className="w-18 h-18 rounded-full bg-brand-blue-light dark:bg-slate-850 flex items-center justify-center text-brand-blue-deep dark:text-brand-blue-steel font-black text-xl border border-brand-blue-deep/5">
                    {session.user.name?.charAt(0).toUpperCase() || "U"}
                  </div>
                )}
                
                <h3 className="font-extrabold text-slate-850 dark:text-white mt-4 text-base">
                  {session.user.name}
                </h3>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-750 px-3 py-1 rounded-full mt-1.5">
                  Trainee • {session.user.role || "student"}
                </span>
              </div>

              {/* Information listing */}
              <div className="space-y-3.5 pt-5 border-t border-slate-100 dark:border-slate-850 text-xs text-slate-550">
                <div>
                  <span className="font-bold text-slate-400 block uppercase tracking-wider mb-0.5">Email</span>
                  <span className="text-slate-800 dark:text-slate-200 truncate block">{session.user.email}</span>
                </div>
                {session.user.phone && (
                  <div>
                    <span className="font-bold text-slate-400 block uppercase tracking-wider mb-0.5">Phone</span>
                    <span className="text-slate-800 dark:text-slate-200">{session.user.phone}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Applications List (3 cols) */}
            <div className="lg:col-span-3 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <ClipboardList className="w-5 h-5 text-brand-blue-steel" />
                  Your Course Applications
                </h2>
                <span className="text-xs font-bold text-slate-400 bg-slate-150 dark:bg-slate-850 border border-slate-200/50 px-2.5 py-1 rounded-full">
                  {applications.length} Filed
                </span>
              </div>

              {applications.length === 0 ? (
                /* Empty application placeholder */
                <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-10 text-center space-y-4 shadow-sm">
                  <FileText className="w-12 h-12 text-slate-250 mx-auto" />
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
                    No active applications
                  </h3>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                    You have not filed any enrollment applications yet. Explore our advanced course catalog and apply today.
                  </p>
                  <Link
                    href="/trainings"
                    className="btn-accent inline-flex items-center gap-2 text-xs py-2.5 px-5"
                  >
                    <GraduationCap className="w-4 h-4 text-slate-900" />
                    Browse Courses
                  </Link>
                </div>
              ) : (
                /* Desktop Table / Mobile Cards representation */
                <div className="space-y-4">
                  {/* Mobile Cards View */}
                  <div className="grid grid-cols-1 gap-4 sm:hidden">
                    {applications.map((app) => (
                      <div
                        key={app._id}
                        className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-5 space-y-4 shadow-sm"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="text-[10px] font-bold text-slate-400 block tracking-wider uppercase">
                              Ref: {app.referenceNumber}
                            </span>
                            <h4 className="font-extrabold text-slate-850 dark:text-white mt-1 leading-tight text-sm">
                              {app.course}
                            </h4>
                          </div>
                          <span
                            className={`text-[9px] font-bold uppercase border px-2.5 py-1 rounded-full ${getStatusColor(
                              app.status
                            )}`}
                          >
                            {formatStatus(app.status)}
                          </span>
                        </div>
                        <div className="text-xs text-slate-450 pt-2 border-t border-slate-100 dark:border-slate-850 flex justify-between">
                          <span>Applied: {formatDate(app.createdAt)}</span>
                          <span className="font-bold text-slate-700 dark:text-slate-350">{app.branch}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Desktop Table View */}
                  <div className="hidden sm:block overflow-hidden bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-2xl shadow-sm">
                    <table className="min-w-full divide-y divide-slate-100 dark:divide-slate-850 text-left text-xs">
                      <thead className="bg-slate-50 dark:bg-slate-850/50 text-slate-400 font-bold uppercase tracking-wider">
                        <tr>
                          <th className="px-6 py-4">Reference No</th>
                          <th className="px-6 py-4">Course</th>
                          <th className="px-6 py-4">Branch</th>
                          <th className="px-6 py-4">Filed Date</th>
                          <th className="px-6 py-4">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-850 text-slate-650 dark:text-slate-455 font-medium">
                        {applications.map((app) => (
                          <tr key={app._id} className="hover:bg-slate-50/50 dark:hover:bg-slate-850/20">
                            <td className="px-6 py-4 font-bold text-slate-850 dark:text-slate-300">
                              {app.referenceNumber}
                            </td>
                            <td className="px-6 py-4 text-slate-900 dark:text-white font-bold">
                              {app.course}
                            </td>
                            <td className="px-6 py-4">{app.branch}</td>
                            <td className="px-6 py-4">{formatDate(app.createdAt)}</td>
                            <td className="px-6 py-4">
                              <span
                                className={`text-[10px] font-extrabold uppercase border px-3 py-1 rounded-full ${getStatusColor(
                                  app.status
                                )}`}
                              >
                                {formatStatus(app.status)}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
