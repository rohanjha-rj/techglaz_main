// ============================================
// Techglaz Labs — Sign Up Page
// ============================================

import React, { Suspense } from "react";
import SignUpForm from "@/components/auth/SignUpForm";
import { CardSkeleton } from "@/components/shared/LoadingSkeleton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Account",
  description: "Register for an account at Techglaz Labs to apply for certifications and access your trainee dashboard.",
};

export default function SignUpPage() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center py-16 bg-transparent">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-brand-blue-deep/10 blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-brand-blue-steel/10 blur-3xl -z-10" />
      
      <div className="max-w-md w-full px-4 relative z-10">
        <Suspense fallback={<CardSkeleton />}>
          <SignUpForm />
        </Suspense>
      </div>
    </section>
  );
}
