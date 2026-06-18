"use client";

import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star, Quote, ChevronLeft, ChevronRight, User } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";
import { Testimonial } from "@/types";
import { client } from "../../../sanity/lib/client";
import { allTestimonialsQuery } from "../../../sanity/lib/queries";

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
        const fetched = await client.fetch<Testimonial[]>(allTestimonialsQuery);
        if (fetched && fetched.length > 0) {
          setTestimonials(fetched);
        } else {
          setTestimonials(MOCK_TESTIMONIALS);
        }
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
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-brand-blue-deep/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-brand-blue-steel/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="What Our Trainees Say"
          subtitle="Testimonials"
          centered={true}
          inverse={true}
        />

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto mt-12">
          
          {/* Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial._id}
                  className="flex-[0_0_100%] min-w-0 px-4"
                >
                  <div className="glassmorphism dark:bg-slate-800/20 border-slate-700/30 p-8 sm:p-12 rounded-3xl relative text-center flex flex-col items-center">
                    {/* Quotes Graphic */}
                    <Quote className="w-12 h-12 text-brand-blue-steel opacity-30 absolute top-6 left-6" />
                    
                    {/* Stars */}
                    <div className="flex gap-1.5 justify-center mb-6">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating
                              ? "fill-brand-accent text-brand-accent"
                              : "text-slate-650"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Testimonial body */}
                    <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-slate-200 mb-8 max-w-2xl italic">
                      "{testimonial.quote}"
                    </p>

                    {/* Trainee profile */}
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                        <User className="w-6 h-6 text-slate-400" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-white leading-tight">
                          {testimonial.studentName}
                        </h4>
                        <p className="text-xs text-slate-400 font-semibold mt-0.5">
                          {testimonial.course} ({testimonial.year})
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <button
            onClick={scrollPrev}
            className="absolute left-[-20px] sm:left-[-50px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-slate-750 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer hidden sm:flex"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={scrollNext}
            className="absolute right-[-20px] sm:right-[-50px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-slate-750 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer hidden sm:flex"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
