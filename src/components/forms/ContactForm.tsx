"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const phoneRegex = /^[6-9]\d{9}$/;

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(phoneRegex, "Must be a valid 10-digit mobile number").or(z.literal("")),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isPending, setIsPending] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsPending(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const response = await fetch("https://formspree.io/f/xlgqgaee", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setSubmitSuccess(true);
      reset(); // Clear form fields
    } catch (error: any) {
      setSubmitError(error.message || "An error occurred. Please try again later.");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/85 rounded-3xl p-6 sm:p-8 shadow-xl">
      <div className="border-b border-slate-100 dark:border-slate-850 pb-4 mb-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          Send Us a Message
        </h3>
        <p className="text-xs text-slate-400 mt-1">
          Have queries about enrollment, research, or custom tracks? Write to us.
        </p>
      </div>

      {submitSuccess && (
        <div className="flex gap-3 items-center bg-green-50 dark:bg-green-950/20 text-green-650 dark:text-green-450 p-4 rounded-xl border border-green-150 dark:border-green-900/30 text-sm font-semibold mb-6 animate-fade-in">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <span>Your message was sent successfully! We will get back to you soon.</span>
        </div>
      )}

      {submitError && (
        <div className="flex gap-3 items-center bg-red-50 dark:bg-red-950/20 text-red-650 dark:text-red-400 p-4 rounded-xl border border-red-100 dark:border-red-900/30 text-sm font-semibold mb-6">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{submitError}</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Your Name *
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            placeholder="John Doe"
            className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue-steel/40 transition-shadow"
          />
          {errors.name && <p className="text-xs font-bold text-red-650 dark:text-red-450 mt-1">{errors.name.message}</p>}
        </div>

        {/* Grid Email / Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

          <div className="space-y-1.5">
            <label htmlFor="phone" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              {...register("phone")}
              placeholder="9876543210 (Optional)"
              className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue-steel/40 transition-shadow"
            />
            {errors.phone && <p className="text-xs font-bold text-red-650 dark:text-red-450 mt-1">{errors.phone.message}</p>}
          </div>
        </div>

        {/* Subject */}
        <div className="space-y-1.5">
          <label htmlFor="subject" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Subject *
          </label>
          <input
            id="subject"
            type="text"
            {...register("subject")}
            placeholder="Course query, MoU collaboration..."
            className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue-steel/40 transition-shadow"
          />
          {errors.subject && <p className="text-xs font-bold text-red-650 dark:text-red-450 mt-1">{errors.subject.message}</p>}
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label htmlFor="message" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Your Message *
          </label>
          <textarea
            id="message"
            rows={5}
            {...register("message")}
            placeholder="Write your message detail here..."
            className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue-steel/40 transition-shadow resize-none"
          />
          {errors.message && <p className="text-xs font-bold text-red-650 dark:text-red-450 mt-1">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="btn-accent w-full py-3 flex items-center justify-center gap-2 font-black uppercase tracking-wider disabled:opacity-60 disabled:cursor-not-allowed mt-2"
        >
          {isPending ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending Message...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 text-slate-900" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}
