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
import TraineeDashboard from "@/components/dashboard/TraineeDashboard";

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
      const db = await dbConnect();
      if (!db) {
        applications = await dbFallback.findApplications(session.user.id || "", session.user.email || "");
      } else {
        applications = await Application.find({
          $or: [
            { userId: session.user.id },
            { email: session.user.email?.toLowerCase() }
          ]
        }).sort({ createdAt: -1 });
      }
    }
  } catch (error) {
    console.error("Dashboard DB fetch error:", error);
    
    // Fallback mock data only if local bypass toggle is active in .env.local
    if (process.env.ALLOW_OFFLINE_DB_BYPASS === "true") {
      console.warn("Bypass enabled: Injecting local fallback mock data for trainee dashboard view.");
      applications = [
        {
          _id: "mock-app-1",
          referenceNumber: "TG-2026-0089",
          course: "Advanced Full-Stack Web Development",
          branch: "Ludhiana Center",
          createdAt: new Date(),
          status: "approved"
        },
        {
          _id: "mock-app-2",
          referenceNumber: "TG-2026-0124",
          course: "AI & Machine Learning Masterclass",
          branch: "Virtual Online",
          createdAt: new Date(Date.now() - 86400000 * 3),
          status: "pending"
        }
      ];
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#020617] text-white">
      <section className="py-12 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 animate-fade-in">
          {/* Centered User Header */}
          <div className="text-center space-y-4 pt-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-3.5 py-1.5 rounded-full inline-block">
              Welcome Back
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              {session.user.name || "Trainee"}
            </h1>
          </div>

          <TraineeDashboard session={session} initialApplications={applications} />
        </div>
      </section>
    </div>
  );
}
