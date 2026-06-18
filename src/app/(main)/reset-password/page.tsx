"use client";

// ============================================
// Techglaz Labs — Reset Password Page
// ============================================

import React, { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Lock, Loader2, CheckCircle2, AlertCircle, KeyRound } from "lucide-react";
import Link from "next/link";

const resetSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Must contain at least one uppercase letter")
      .regex(/[0-9]/, "Must contain at least one number"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type ResetFormValues = z.infer<typeof resetSchema>;

function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";
  const email = searchParams.get("email") || "";

  const [isPending, setIsPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetFormValues>({
    resolver: zodResolver(resetSchema),
  });

  const onSubmit = async (data: ResetFormValues) => {
    if (!token || !email) {
      setErrorMsg("Invalid or missing reset link. Please request a new one.");
      return;
    }

    setIsPending(true);
    setErrorMsg(null);

    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, email, password: data.password }),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setSuccess(true);
        setTimeout(() => router.push("/login"), 3000);
      } else {
        setErrorMsg(result.message || "Failed to reset password. Please try again.");
      }
    } catch {
      setErrorMsg("An unexpected error occurred. Please try again.");
    } finally {
      setIsPending(false);
    }
  };

  if (!token || !email) {
    return (
      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/85 rounded-3xl p-10 shadow-xl max-w-md w-full text-center space-y-4">
        <AlertCircle className="w-12 h-12 text-red-500 mx-auto" />
        <h2 className="text-xl font-black text-slate-900 dark:text-white">Invalid Reset Link</h2>
        <p className="text-sm text-slate-500">
          This link is invalid or has expired. Please request a new password reset.
        </p>
        <Link
          href="/login"
          className="btn-accent inline-flex items-center gap-2 text-sm py-2.5 px-6 mt-2"
        >
          Back to Login
        </Link>
      </div>
    );
  }

  if (success) {
    return (
      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/85 rounded-3xl p-10 shadow-xl max-w-md w-full text-center space-y-4">
        <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto" />
        <h2 className="text-xl font-black text-slate-900 dark:text-white">Password Reset!</h2>
        <p className="text-sm text-slate-500">
          Your password has been updated successfully. Redirecting you to login…
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/85 rounded-3xl p-6 sm:p-10 shadow-xl max-w-md w-full space-y-6">
      <div className="text-center space-y-1.5 border-b border-slate-100 dark:border-slate-850 pb-4">
        <div className="w-14 h-14 rounded-2xl bg-brand-blue-light/50 dark:bg-slate-850 flex items-center justify-center mx-auto mb-3 border border-brand-blue-deep/10">
          <KeyRound className="w-7 h-7 text-brand-blue-deep dark:text-brand-blue-steel" />
        </div>
        <h2 className="text-2xl font-black text-slate-900 dark:text-white">Set New Password</h2>
        <p className="text-xs text-slate-400">
          Choose a strong password with at least 8 characters, one uppercase letter, and one number.
        </p>
      </div>

      {errorMsg && (
        <div className="flex gap-3 items-center bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 p-4 rounded-xl border border-red-100 dark:border-red-900/30 text-sm font-semibold">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* New Password */}
        <div className="space-y-1.5">
          <label htmlFor="password" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            New Password *
          </label>
          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              id="password"
              type="password"
              {...register("password")}
              placeholder="Minimum 8 characters"
              className="w-full pl-10 bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue-steel/40 transition-shadow"
            />
          </div>
          {errors.password && (
            <p className="text-xs font-bold text-red-600 dark:text-red-400 mt-1">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="space-y-1.5">
          <label htmlFor="confirmPassword" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Confirm Password *
          </label>
          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              id="confirmPassword"
              type="password"
              {...register("confirmPassword")}
              placeholder="Repeat new password"
              className="w-full pl-10 bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue-steel/40 transition-shadow"
            />
          </div>
          {errors.confirmPassword && (
            <p className="text-xs font-bold text-red-600 dark:text-red-400 mt-1">{errors.confirmPassword.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="btn-accent w-full py-3.5 flex items-center justify-center gap-2 font-black uppercase tracking-wider disabled:opacity-60 mt-6"
        >
          {isPending ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Updating Password…
            </>
          ) : (
            <>
              <KeyRound className="w-4 h-4 text-slate-900" />
              Reset Password
            </>
          )}
        </button>
      </form>

      <p className="text-center text-xs text-slate-500 font-semibold">
        Remembered your password?{" "}
        <Link href="/login" className="text-brand-blue-deep dark:text-brand-blue-steel font-bold hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center py-16 bg-slate-50 dark:bg-slate-900/50">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-brand-blue-deep/10 blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-brand-blue-steel/10 blur-3xl -z-10" />

      <div className="max-w-md w-full px-4 relative z-10">
        <Suspense fallback={
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/85 rounded-3xl p-10 shadow-xl h-64 animate-pulse" />
        }>
          <ResetPasswordForm />
        </Suspense>
      </div>
    </section>
  );
}
