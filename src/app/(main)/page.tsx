// ============================================
// Techglaz Labs — Home Page
// ============================================

import React from "react";
import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import CourseHighlights from "@/components/home/CourseHighlights";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";
import PlacementHighlights from "@/components/home/PlacementHighlights";

export const revalidate = 60; // Revalidate home page every 60 seconds (ISR)

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Header Area */}
      <HeroSection />

      {/* Numerical Stats Counters */}
      <StatsBar />

      {/* Course Highlights Section */}
      {/* @ts-ignore */}
      <CourseHighlights />

      {/* Student Testimonials Carousel */}
      <TestimonialsPreview />

      {/* Placement & Alumni Records */}
      <PlacementHighlights />
    </div>
  );
}
