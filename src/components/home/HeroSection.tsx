"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, BookOpen, GraduationCap } from "lucide-react";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: any = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 lg:py-32">
      {/* Background Animated Gradient Fluid Overlay */}
      <div className="absolute inset-0 bg-slate-955 z-0" />
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-brand-blue-deep/30 blur-3xl animate-pulse-slow" />
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-brand-blue-steel/20 blur-3xl" style={{ animationDelay: "2s" }} />
      <div className="absolute -bottom-20 left-1/3 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-3xl" />
      
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8"
        >
          {/* Branded Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white font-bold text-xs sm:text-sm tracking-wider uppercase border border-white/20"
          >
            <Sparkles className="w-4 h-4 text-brand-accent animate-spin-slow" />
            <span>Bridging Academic Curricula & Industry Engineering</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
          >
            Build Real-World{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Engineering Expertise
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed"
          >
            Join Techglaz Labs for high-end professional development, corporate internship tracks, and specialized courses in CSE, IT, VLSI, IoT, Embedded Systems, and Mechanical Engineering.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center pt-2"
          >
            <Link
              href="/trainings"
              className="btn-primary flex items-center justify-center gap-2 group text-base"
            >
              <BookOpen className="w-5 h-5" />
              Explore Courses
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/apply"
              className="btn-accent flex items-center justify-center gap-2 text-base font-bold uppercase tracking-wider"
            >
              <GraduationCap className="w-5 h-5 text-slate-900" />
              Apply Now
            </Link>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 pt-8 w-full border-t border-white/15 mt-12 text-slate-400"
          >
            <div className="flex flex-col items-center p-3 rounded-xl hover:bg-white/5 transition-colors">
              <span className="text-sm font-bold text-white">IIT & CDAC</span>
              <span className="text-xs mt-1">Specialized Collaborations</span>
            </div>
            <div className="flex flex-col items-center p-3 rounded-xl hover:bg-white/5 transition-colors">
              <span className="text-sm font-bold text-white">Industry Experts</span>
              <span className="text-xs mt-1">Practitioner Led Classes</span>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col items-center p-3 rounded-xl hover:bg-white/5 transition-colors">
              <span className="text-sm font-bold text-white">95% Placement</span>
              <span className="text-xs mt-1">Verified Corporate Placements</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
