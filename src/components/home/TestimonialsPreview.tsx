"use client";

import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star, Quote, ChevronLeft, ChevronRight, User } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";
import { Testimonial } from "@/types";
import { client } from "../../../sanity/lib/client";
import { allTestimonialsQuery } from "../../../sanity/lib/queries";
import { projectId } from "../../../sanity/env";

const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    _id: "test-1",
    studentName: "Amit Sharma",
    course: "Full-Stack Web Development",
    year: 2025,
    rating: 5,
    quote: "The internship track at Techglaz Labs gave me deep hands-on project experience. Building production SaaS applications with Next.js and MongoDB under industry mentors directly led to my placement at a top product firm.",
  },
  {
    _id: "test-2",
    studentName: "Neha Patel",
    course: "AI & Machine Learning",
    year: 2026,
    rating: 5,
    quote: "Techglaz Labs bridged the gap between my college curriculum and what modern companies expect. The trainers from IIT and CDAC backgrounds taught state-of-the-art architectures that made my resume stand out.",
  },
  {
    _id: "test-3",
    studentName: "Rohan Das",
    course: "VLSI Design & Verification",
    year: 2025,
    rating: 5,
    quote: "Working in the silicon design verification module was game-changing. We designed and verified RTL code using Verilog and SystemVerilog with industrial-grade tooling. The placement team is highly supportive.",
  },
];

export default function TestimonialsPreview() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  useEffect(() => {
    async function loadTestimonials() {
      try {
        if (projectId !== "placeholder-id") {
          const fetched = await client.fetch<Testimonial[]>(allTestimonialsQuery);
          if (fetched && fetched.length > 0) {
            setTestimonials(fetched);
            return;
          }
        }
        setTestimonials(MOCK_TESTIMONIALS);
      } catch (error) {
        console.warn("Failed to load testimonials from Sanity, using mock data:", error);
        setTestimonials(MOCK_TESTIMONIALS);
      }
    }
    loadTestimonials();
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Autoplay effect
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  if (testimonials.length === 0) return null;

  return (
    <section className="relative overflow-hidden border-t border-slate-900 bg-slate-950 py-20 text-white transition-colors duration-200">
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute left-0 top-1/2 h-80 w-80 rounded-full bg-brand-blue-deep/15 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-brand-blue-steel/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="What Our Trainees Say" subtitle="Testimonials" centered={true} inverse={true} />

        <div className="relative mx-auto mt-12 max-w-4xl">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div key={testimonial._id} className="min-w-0 flex-[0_0_100%] px-2 sm:px-4">
                  <div className="relative flex flex-col items-center rounded-[2rem] border border-slate-800/80 bg-slate-900/50 p-8 text-center shadow-[0_24px_70px_-35px_rgba(2,8,23,0.75)] backdrop-blur-xl transition-colors hover:bg-slate-900/70 sm:p-12">
                    <Quote className="absolute left-6 top-6 h-12 w-12 text-[#fbbf24] opacity-15" />

                    <div className="mb-6 flex justify-center gap-1.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < testimonial.rating ? "fill-[#fbbf24] text-[#fbbf24]" : "text-slate-700"}`} />
                      ))}
                    </div>

                    <p className="mb-8 max-w-2xl text-sm font-medium leading-relaxed text-slate-200 italic sm:text-base lg:text-lg">
                      “{testimonial.quote}”
                    </p>

                    <div className="flex items-center justify-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-800 font-black text-sm text-[#fbbf24]">
                        {testimonial.studentName.charAt(0).toUpperCase()}
                      </div>
                      <div className="text-left">
                        <h4 className="text-sm font-bold leading-tight text-white">{testimonial.studentName}</h4>
                        <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">{testimonial.course} ({testimonial.year})</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={scrollPrev} className="absolute left-[-10px] top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-800 bg-slate-900/80 text-slate-400 transition-colors hover:border-slate-700 hover:bg-slate-800 hover:text-white sm:flex" aria-label="Previous slide">
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button onClick={scrollNext} className="absolute right-[-10px] top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-800 bg-slate-900/80 text-slate-400 transition-colors hover:border-slate-700 hover:bg-slate-800 hover:text-white sm:flex" aria-label="Next slide">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

