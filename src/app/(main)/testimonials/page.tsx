import React from "react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import { client } from "../../../../sanity/lib/client";
import { allTestimonialsQuery } from "../../../../sanity/lib/queries";
import { Testimonial } from "@/types";
import { Star, Quote, User, MessageSquare } from "lucide-react";

const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    _id: "t1",
    studentName: "Amit Sharma",
    course: "Full-Stack Web Development",
    year: 2025,
    rating: 5,
    quote: "The internship track at Techglaz Labs gave me deep hands-on project experience. Building production SaaS applications with Next.js and MongoDB under industry mentors directly led to my placement at a top product firm.",
  },
  {
    _id: "t2",
    studentName: "Neha Patel",
    course: "AI & Machine Learning",
    year: 2026,
    rating: 5,
    quote: "Techglaz Labs bridged the gap between my college curriculum and what modern companies expect. The trainers from IIT and CDAC backgrounds taught state-of-the-art architectures that made my resume stand out.",
  },
  {
    _id: "t3",
    studentName: "Rohan Das",
    course: "VLSI Design & Verification",
    year: 2025,
    rating: 5,
    quote: "Working in the silicon design verification module was game-changing. We designed and verified RTL code using Verilog and SystemVerilog with industrial-grade tooling. The placement team is highly supportive.",
  },
  {
    _id: "t4",
    studentName: "Priya Sen",
    course: "Cybersecurity & Digital Forensics",
    year: 2025,
    rating: 5,
    quote: "The forensics and penetration testing labs were highly intensive and matched modern cybersecurity operations center benchmarks.",
  },
  {
    _id: "t5",
    studentName: "Sameer Verma",
    course: "Catia V5 Mechanical Design",
    year: 2024,
    rating: 4,
    quote: "Excellent generative surface design modeling tutorials. The automotive chassis project assembly was very thorough and detailed.",
  },
];

export const revalidate = 300; // 5-minute ISR

export default async function TestimonialsPage() {
  let rawTestimonials: Testimonial[] = [];
  try {
    rawTestimonials = await client.fetch<Testimonial[]>(allTestimonialsQuery);
  } catch (error) {
    console.warn("Failed to fetch testimonials from Sanity, using mock data:", error);
  }

  if (!rawTestimonials || rawTestimonials.length === 0) {
    rawTestimonials = MOCK_TESTIMONIALS;
  }

  const breadcrumbs = [{ label: "Testimonials" }];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        title="Trainee Stories & Feedback"
        breadcrumbs={breadcrumbs}
        subtitle="Read verified reviews from university students and faculty members who completed our certification tracks."
      />

      {/* Grid listing */}
      <section className="py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {rawTestimonials.length === 0 && (
            <div className="text-center py-16 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 max-w-xl mx-auto space-y-4">
              <MessageSquare className="w-12 h-12 text-slate-350 mx-auto" />
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                No Testimonials Found
              </h3>
              <p className="text-sm text-slate-500">
                No feedback reports registered currently. Check back later.
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {rawTestimonials.map((testimonial) => (
              <div
                key={testimonial._id}
                className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between"
              >
                {/* Quote Graphics */}
                <Quote className="absolute top-6 right-6 w-8 h-8 text-brand-blue-steel/10 group-hover:scale-105 transition-transform" />

                <div>
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        className={`w-4 h-4 ${
                          idx < testimonial.rating
                            ? "fill-brand-accent text-brand-accent"
                            : "text-slate-200 dark:text-slate-800"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Message Quote */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic mb-6">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Profile Footer */}
                <div className="flex items-center gap-3.5 pt-4.5 border-t border-slate-100 dark:border-slate-850 mt-4.5">
                  <div className="w-10 h-10 rounded-full bg-brand-blue-light/50 dark:bg-slate-850 text-brand-blue-deep dark:text-brand-blue-steel flex items-center justify-center font-extrabold text-xs">
                    {testimonial.studentName.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 dark:text-white text-sm">
                      {testimonial.studentName}
                    </h4>
                    <p className="text-[10px] font-bold text-slate-450 dark:text-slate-500 uppercase mt-0.5">
                      {testimonial.course} • {testimonial.year}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
