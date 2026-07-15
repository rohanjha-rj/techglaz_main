"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { UserPlus, Loader2, AlertCircle, Sparkles, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { signIn } from "next-auth/react";

const phoneRegex = /^[6-9]\d{9}$/;

const signUpSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(phoneRegex, "Must be a valid 10-digit Indian mobile number"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter")
    .regex(/[0-9]/, "Must contain at least one number"),
  role: z.enum(["student", "teacher"] as const, {
    message: "Please select your role",
  }),
});

type SignUpFormValues = z.infer<typeof signUpSchema>;

export default function SignUpForm() {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      role: "student",
    },
  });

  const onSubmit = async (data: SignUpFormValues) => {
    setIsPending(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || result.message || "Failed to create account");
      }

      setSuccessMsg("Account created successfully! Redirecting to login...");
      
      // Redirect to login after 2 seconds
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (err: any) {
      setErrorMsg(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsPending(false);
    }
  };

  const handleGoogleSignup = () => {
    signIn("google", { callbackUrl: "/dashboard" });
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/85 rounded-3xl p-6 sm:p-10 shadow-xl max-w-md w-full space-y-6">
      <div className="text-center space-y-1.5 border-b border-slate-100 dark:border-slate-850 pb-4">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5 text-brand-accent animate-pulse" />
          Create Account
        </h2>
        <p className="text-xs text-slate-400">
          Register with Techglaz to track your course applications.
        </p>
      </div>

      {successMsg && (
        <div className="flex gap-3 items-center bg-green-50 dark:bg-green-950/20 text-green-650 dark:text-green-450 p-4 rounded-xl border border-green-150 dark:border-green-900/30 text-sm font-semibold animate-fade-in">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {errorMsg && (
        <div className="flex gap-3 items-center bg-red-50 dark:bg-red-950/20 text-red-650 dark:text-red-400 p-4 rounded-xl border border-red-100 dark:border-red-900/30 text-sm font-semibold">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label htmlFor="fullName" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Full Name *
          </label>
          <input
            id="fullName"
            type="text"
            {...register("fullName")}
            placeholder="John Doe"
            className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue-steel/40 transition-shadow"
          />
          {errors.fullName && <p className="text-xs font-bold text-red-650 dark:text-red-450 mt-1">{errors.fullName.message}</p>}
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            placeholder="john@example.com"
            className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue-steel/40 transition-shadow"
          />
          {errors.email && <p className="text-xs font-bold text-red-650 dark:text-red-450 mt-1">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Mobile Number (India) *
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder="9876543210"
            className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue-steel/40 transition-shadow"
          />
          {errors.phone && <p className="text-xs font-bold text-red-650 dark:text-red-450 mt-1">{errors.phone.message}</p>}
        </div>

        {/* Password */}
        <div className="space-y-1.5">
          <label htmlFor="password" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Password *
          </label>
          <input
            id="password"
            type="password"
            {...register("password")}
            placeholder="••••••••"
            className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue-steel/40 transition-shadow"
          />
          {errors.password && <p className="text-xs font-bold text-red-650 dark:text-red-450 mt-1">{errors.password.message}</p>}
        </div>

        {/* Role Selection */}
        <div className="space-y-1.5">
          <label htmlFor="role" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Your Role *
          </label>
          <select
            id="role"
            {...register("role")}
            className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue-steel/40 transition-shadow"
          >
            <option value="student">Student / Intern</option>
            <option value="teacher">Faculty / Teacher</option>
          </select>
          {errors.role && <p className="text-xs font-bold text-red-650 dark:text-red-450 mt-1">{errors.role.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="btn-accent w-full py-3.5 flex items-center justify-center gap-2 font-black uppercase tracking-wider disabled:opacity-60 mt-6"
        >
          {isPending ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Registering Account...
            </>
          ) : (
            <>
              <UserPlus className="w-4 h-4 text-slate-900" />
              Sign Up
            </>
          )}
        </button>
      </form>

      {/* Divider */}
      <div className="relative flex py-2 items-center">
        <div className="flex-grow border-t border-slate-150 dark:border-slate-800"></div>
        <span className="flex-shrink mx-4 text-slate-400 text-xs font-bold uppercase tracking-wider">Or continue with</span>
        <div className="flex-grow border-t border-slate-150 dark:border-slate-800"></div>
      </div>

      {/* Google OAuth */}
      <button
        onClick={handleGoogleSignup}
        className="flex items-center justify-center gap-3 w-full py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-850 text-slate-700 dark:text-slate-200 font-bold text-sm transition-all cursor-pointer"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
        </svg>
        Sign up with Google
      </button>

      {/* Redirect Link */}
      <p className="text-center text-xs text-slate-500 font-semibold mt-4">
        Already have an account?{" "}
        <Link href="/login" className="text-brand-blue-deep dark:text-brand-blue-steel font-bold hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
