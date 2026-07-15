import React from "react";
import { notFound } from "next/navigation";
import { client } from "../../../../../sanity/lib/client";
import { allCoursesQuery } from "../../../../../sanity/lib/queries";
import { Course } from "@/types";
import { BRANCH_SLUGS } from "@/lib/constants";
import { BRANCH_PROFILES } from "@/lib/branchesData";
import BranchHubClient from "@/components/courses/BranchHubClient";
import PageHero from "@/components/shared/PageHero";

interface PageProps {
  params: Promise<{
    domain: string;
  }>;
}

export const revalidate = 300; // 5-minute ISR

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const branchKey = BRANCH_SLUGS[resolvedParams.domain];
  const profile = branchKey ? BRANCH_PROFILES[branchKey] : null;

  if (!profile) {
    return {
      title: "Branch Hub | Techglaz Labs",
      description: "Explore professional engineering development programs at Techglaz Labs.",
    };
  }

  return {
    title: `${profile.name} — Industry Skill Intelligence Profile | Techglaz Labs`,
    description: `Become industry-ready in ${profile.name}. Explore customized learning paths of 4, 6, 8, 12, and 24 Weeks, recruiter-aligned skills, and salary expectations.`,
  };
}

export default async function BranchDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const domainSlug = resolvedParams.domain;
  
  // Find key corresponding to this domain slug
  const branchKey = BRANCH_SLUGS[domainSlug];
  const profile = branchKey ? BRANCH_PROFILES[branchKey] : null;

  // If no branch profile matches the slug, check if this is an legacy route or return 404
  if (!profile) {
    return notFound();
  }

  // Fetch all active courses from CMS
  let rawCourses: Course[] = [];
  try {
    rawCourses = await client.fetch<Course[]>(allCoursesQuery);
  } catch (error) {
    console.warn("Failed to fetch courses for branch detail page, utilizing empty fallback:", error);
  }

  // Filter courses that match this branch
  // Include backward compatibility check: if it is CSE or IT branch, we also fetch legacy CSE_IT courses
  const filteredCourses = rawCourses.filter((course) => {
    if (course.branch === branchKey) return true;
    if (branchKey === "CSE" && course.branch === "CSE_IT") return true;
    if (branchKey === "IT" && course.branch === "CSE_IT") return true;
    return false;
  });

  const breadcrumbs = [
    { label: "Trainings", href: "/trainings" },
    { label: profile.name },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        title={profile.name}
        breadcrumbs={breadcrumbs}
        subtitle="Industry Skill Intelligence Profile & Curriculum Guide"
      />

      {/* Main Client Hub Component */}
      <main className="flex-grow bg-white dark:bg-slate-900">
        <BranchHubClient 
          profile={profile} 
          branchKey={branchKey} 
          courses={filteredCourses} 
        />
      </main>
    </div>
  );
}
