// ============================================
// Techglaz Labs — Sign In Page
// ============================================

import React, { Suspense } from "react";
import LoginForm from "@/components/auth/LoginForm";
import { CardSkeleton } from "@/components/shared/LoadingSkeleton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Sign in to your Techglaz Labs account to track enrollment status and manage profile details.",
};

export default function LoginPage() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center py-16 bg-slate-50 dark:bg-slate-900/50">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-brand-blue-deep/10 blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-brand-blue-steel/10 blur-3xl -z-10" />
      
      <div className="max-w-md w-full px-4 relative z-10">
        <Suspense fallback={<CardSkeleton />}>
          <LoginForm />
        </Suspense>
      </div>
    </section>
  );
}
