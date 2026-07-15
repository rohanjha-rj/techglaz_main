// ============================================
// Techglaz Labs — Apply Now Page
// ============================================

import React, { Suspense } from "react";
import PageHero from "@/components/shared/PageHero";
import ApplicationForm from "@/components/forms/ApplicationForm";
import { auth } from "@/lib/auth";
import { CardSkeleton } from "@/components/shared/LoadingSkeleton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply Now",
  description: "Enroll in specialized corporate training courses and verified internship tracks at Techglaz Labs.",
};

export default async function ApplyPage() {
  // Fetch session on the server side
  const session = await auth();

  const breadcrumbs = [{ label: "Apply Now" }];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        title="Trainee Enrollment Application"
        breadcrumbs={breadcrumbs}
        subtitle="Complete the enrollment form to secure your seat in our engineering tracks."
      />

      {/* Main Form Section wrapped in Suspense */}
      <section className="py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense
            fallback={
              <div className="max-w-2xl mx-auto">
                <CardSkeleton />
              </div>
            }
          >
            <ApplicationForm session={session} />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
