"use client";

// ============================================
// Techglaz Labs — Forgot Password Page
// ============================================

import React, { useState, Suspense } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Loader2, CheckCircle2, AlertCircle, ShieldQuestion } from "lucide-react";
import Link from "next/link";

const schema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type FormValues = z.infer<typeof schema>;

function ForgotPasswordForm() {
  const [isPending, setIsPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsPending(true);
    setErrorMsg(null);

    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        setSuccess(true);
      } else {
        setErrorMsg(result.message || "Failed to send reset email. Please try again.");
      }
    } catch {
      setErrorMsg("An unexpected error occurred. Please try again.");
    } finally {
      setIsPending(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/85 rounded-3xl p-10 shadow-xl max-w-md w-full text-center space-y-4">
        <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto" />
        <h2 className="text-xl font-black text-slate-900 dark:text-white">Check Your Inbox</h2>
        <p className="text-sm text-slate-500 leading-relaxed">
          If that email address is registered with Techglaz Labs, you will receive a password reset
          link within a few minutes.
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

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/85 rounded-3xl p-6 sm:p-10 shadow-xl max-w-md w-full space-y-6">
      <div className="text-center space-y-1.5 border-b border-slate-100 dark:border-slate-850 pb-4">
        <div className="w-14 h-14 rounded-2xl bg-brand-blue-light/50 dark:bg-slate-850 flex items-center justify-center mx-auto mb-3 border border-brand-blue-deep/10">
          <ShieldQuestion className="w-7 h-7 text-brand-blue-deep dark:text-brand-blue-steel" />
        </div>
        <h2 className="text-2xl font-black text-slate-900 dark:text-white">Forgot Password?</h2>
        <p className="text-xs text-slate-400">
          Enter your registered email and we will send you a secure reset link.
        </p>
      </div>

      {errorMsg && (
        <div className="flex gap-3 items-center bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 p-4 rounded-xl border border-red-100 dark:border-red-900/30 text-sm font-semibold">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-1.5">
          <label
            htmlFor="email"
            className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider"
          >
            Email Address *
          </label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              id="email"
              type="email"
              {...register("email")}
              placeholder="your@email.com"
              className="w-full pl-10 bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue-steel/40 transition-shadow"
            />
          </div>
          {errors.email && (
            <p className="text-xs font-bold text-red-600 dark:text-red-400 mt-1">
              {errors.email.message}
            </p>
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
              Sending Link…
            </>
          ) : (
            <>
              <Mail className="w-4 h-4 text-slate-900" />
              Send Reset Link
            </>
          )}
        </button>
      </form>

      <p className="text-center text-xs text-slate-500 font-semibold">
        Remembered your password?{" "}
        <Link
          href="/login"
          className="text-brand-blue-deep dark:text-brand-blue-steel font-bold hover:underline"
        >
          Back to login
        </Link>
      </p>
    </div>
  );
}

export default function ForgotPasswordPage() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center py-16 bg-transparent">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-brand-blue-deep/10 blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-brand-blue-steel/10 blur-3xl -z-10" />

      <div className="max-w-md w-full px-4 relative z-10">
        <Suspense
          fallback={
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/85 rounded-3xl p-10 shadow-xl h-64 animate-pulse" />
          }
        >
          <ForgotPasswordForm />
        </Suspense>
      </div>
    </section>
  );
}
