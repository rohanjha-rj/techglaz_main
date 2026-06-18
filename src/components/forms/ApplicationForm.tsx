"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { BRANCHES, COURSES_BY_BRANCH, TRAINING_TRACKS, REFERRAL_SOURCES, BranchKey } from "@/lib/constants";
import { AlertCircle, CheckCircle2, Loader2, Sparkles } from "lucide-react";

// Indian mobile number regex
const phoneRegex = /^[6-9]\d{9}$/;

const applicationSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(phoneRegex, "Must be a valid 10-digit Indian mobile number"),
  branch: z.enum(["CSE_IT", "EE", "ECE", "ME", "CIVIL"] as const, {
    message: "Please select an engineering branch",
  }),
  course: z.string().min(1, "Please select a course"),
  trainingTrack: z.enum(["Teachers' School", "Teachers' College", "Students", "General"] as const, {
    message: "Please select a training track",
  }),
  institution: z.string().optional(),
  yearOrExperience: z.string().optional(),
  message: z.string().max(500, "Message must be under 500 characters").optional(),
  referralSource: z.string().optional(),
});

type ApplicationFormValues = z.infer<typeof applicationSchema>;

interface ApplicationFormProps {
  session: any;
}

export default function ApplicationForm({ session }: ApplicationFormProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<{ ref: string } | null>(null);
  const [isPending, setIsPending] = useState(false);

  // Read prefilled values from URL params
  const paramBranch = searchParams.get("branch") as BranchKey | null;
  const paramCourse = searchParams.get("course");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      fullName: session?.user?.name || "",
      email: session?.user?.email || "",
      phone: session?.user?.phone || "",
      branch: paramBranch && paramBranch in BRANCHES ? paramBranch : undefined,
      course: paramCourse || "",
      trainingTrack: undefined,
      institution: "",
      yearOrExperience: "",
      message: "",
      referralSource: "",
    },
  });

  const selectedBranch = watch("branch");

  // Keep course listing synchronized when branch changes
  useEffect(() => {
    if (selectedBranch && !paramCourse) {
      setValue("course", ""); // Reset course selection
    }
  }, [selectedBranch, setValue, paramCourse]);

  // Set course if param exists initially
  useEffect(() => {
    if (paramBranch && paramCourse) {
      setValue("branch", paramBranch);
      // Wait a tick for branch state to propagate
      setTimeout(() => {
        setValue("course", paramCourse);
      }, 0);
    }
  }, [paramBranch, paramCourse, setValue]);

  const onSubmit = async (data: ApplicationFormValues) => {
    setIsPending(true);
    setSubmitError(null);
    setSubmitSuccess(null);

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit application");
      }

      setSubmitSuccess({ ref: result.referenceNumber });
    } catch (error: any) {
      setSubmitError(error.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsPending(false);
    }
  };

  // Render Success screen
  if (submitSuccess) {
    return (
      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 sm:p-12 text-center max-w-xl mx-auto space-y-6 shadow-xl animate-fade-in">
        <div className="w-16 h-16 bg-green-50 dark:bg-green-950/20 text-green-500 rounded-full flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
          Application Submitted!
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed">
          Your application has been logged successfully. A confirmation email with the course syllabus and details has been sent to your address.
        </p>

        {/* Reference number highlight */}
        <div className="bg-slate-50 dark:bg-slate-850 p-4.5 rounded-2xl border border-slate-100 dark:border-slate-800">
          <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block mb-1">
            Your Reference Number
          </span>
          <span className="text-lg font-black text-brand-blue-deep dark:text-brand-blue-steel tracking-wide">
            {submitSuccess.ref}
          </span>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => router.push(session ? "/dashboard" : "/")}
            className="btn-primary w-full sm:w-auto text-sm"
          >
            {session ? "View in Dashboard" : "Return Home"}
          </button>
          <button
            onClick={() => setSubmitSuccess(null)}
            className="btn-secondary w-full sm:w-auto text-sm"
          >
            Apply for another course
          </button>
        </div>
      </div>
    );
  }

  // Active courses based on selected branch
  const availableCourses = selectedBranch ? COURSES_BY_BRANCH[selectedBranch] : [];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/85 rounded-3xl p-6 sm:p-10 shadow-xl space-y-6 max-w-2xl mx-auto"
    >
      <div className="border-b border-slate-100 dark:border-slate-850 pb-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-brand-accent animate-pulse" />
          Enrollment Details
        </h3>
        <p className="text-xs text-slate-400 mt-1">
          Complete the fields below to file your training track request.
        </p>
      </div>

      {submitError && (
        <div className="flex gap-3 items-center bg-red-50 dark:bg-red-950/20 text-red-650 dark:text-red-400 p-4 rounded-xl border border-red-100 dark:border-red-900/30 text-sm font-semibold">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{submitError}</span>
        </div>
      )}

      {/* Grid wrapper */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5.5">
        {/* Full Name */}
        <div className="space-y-1.5 col-span-2 sm:col-span-1">
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
          {errors.fullName && <p className="text-xs font-bold text-red-600 dark:text-red-450 mt-1">{errors.fullName.message}</p>}
        </div>

        {/* Email Address */}
        <div className="space-y-1.5 col-span-2 sm:col-span-1">
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
          {errors.email && <p className="text-xs font-bold text-red-600 dark:text-red-450 mt-1">{errors.email.message}</p>}
        </div>

        {/* Mobile Number */}
        <div className="space-y-1.5 col-span-2 sm:col-span-1">
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
          {errors.phone && <p className="text-xs font-bold text-red-600 dark:text-red-450 mt-1">{errors.phone.message}</p>}
        </div>

        {/* Training Track */}
        <div className="space-y-1.5 col-span-2 sm:col-span-1">
          <label htmlFor="trainingTrack" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Training Track *
          </label>
          <select
            id="trainingTrack"
            {...register("trainingTrack")}
            className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue-steel/40 transition-shadow"
          >
            <option value="">Select a track</option>
            {TRAINING_TRACKS.map((track) => (
              <option key={track} value={track}>
                {track}
              </option>
            ))}
          </select>
          {errors.trainingTrack && <p className="text-xs font-bold text-red-600 dark:text-red-450 mt-1">{errors.trainingTrack.message}</p>}
        </div>

        {/* Branch Selection */}
        <div className="space-y-1.5 col-span-2 sm:col-span-1">
          <label htmlFor="branch" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Engineering Branch *
          </label>
          <select
            id="branch"
            {...register("branch")}
            className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue-steel/40 transition-shadow"
          >
            <option value="">Select a branch</option>
            {(Object.keys(BRANCHES) as BranchKey[]).map((key) => (
              <option key={key} value={key}>
                {BRANCHES[key]}
              </option>
            ))}
          </select>
          {errors.branch && <p className="text-xs font-bold text-red-600 dark:text-red-450 mt-1">{errors.branch.message}</p>}
        </div>

        {/* Cascading Course Selection */}
        <div className="space-y-1.5 col-span-2 sm:col-span-1">
          <label htmlFor="course" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Target Course *
          </label>
          <select
            id="course"
            {...register("course")}
            disabled={!selectedBranch}
            className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 disabled:opacity-60 disabled:cursor-not-allowed rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue-steel/40 transition-shadow"
          >
            <option value="">{selectedBranch ? "Select a course" : "Select branch first"}</option>
            {availableCourses.map((courseName) => (
              <option key={courseName} value={courseName}>
                {courseName}
              </option>
            ))}
          </select>
          {errors.course && <p className="text-xs font-bold text-red-600 dark:text-red-450 mt-1">{errors.course.message}</p>}
        </div>

        {/* Institution Name */}
        <div className="space-y-1.5 col-span-2 sm:col-span-1">
          <label htmlFor="institution" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Institution / Organization
          </label>
          <input
            id="institution"
            type="text"
            {...register("institution")}
            placeholder="College or Company Name"
            className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue-steel/40 transition-shadow"
          />
        </div>

        {/* Year of Study or Experience */}
        <div className="space-y-1.5 col-span-2 sm:col-span-1">
          <label htmlFor="yearOrExperience" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Year of Study / YOE
          </label>
          <input
            id="yearOrExperience"
            type="text"
            {...register("yearOrExperience")}
            placeholder="e.g. 3rd Year, 2 Years Exp"
            className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue-steel/40 transition-shadow"
          />
        </div>

        {/* Referral Source */}
        <div className="space-y-1.5 col-span-2">
          <label htmlFor="referralSource" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            How did you hear about Techglaz Labs?
          </label>
          <select
            id="referralSource"
            {...register("referralSource")}
            className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue-steel/40 transition-shadow"
          >
            <option value="">Select source</option>
            {REFERRAL_SOURCES.map((source) => (
              <option key={source} value={source}>
                {source}
              </option>
            ))}
          </select>
        </div>

        {/* Custom Message */}
        <div className="space-y-1.5 col-span-2">
          <label htmlFor="message" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Additional Message (Optional)
          </label>
          <textarea
            id="message"
            rows={4}
            {...register("message")}
            placeholder="Any specific learning goals or notes..."
            className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue-steel/40 transition-shadow resize-none"
          />
          {errors.message && <p className="text-xs font-bold text-red-600 dark:text-red-450 mt-1">{errors.message.message}</p>}
        </div>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="btn-accent w-full py-3.5 mt-4 flex items-center justify-center gap-2 font-black uppercase tracking-wider disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isPending ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting application...
          </>
        ) : (
          "Submit Enrollment Request"
        )}
      </button>
    </form>
  );
}
