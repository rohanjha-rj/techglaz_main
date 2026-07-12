"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play, CheckCircle2 } from "lucide-react";

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
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-24 bg-[#0c1524]">
      {/* Background Animated Gradient Fluid Overlay - Enhanced navy theme */}
      <div className="absolute inset-0 bg-[#0c1524] z-0" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand-accent/5 blur-[120px] animate-pulse-slow" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-brand-blue-steel/10 blur-[100px]" style={{ animationDelay: "2s" }} />
      
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Copy & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-left space-y-8"
          >
            {/* Branded Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md text-white font-bold text-xs tracking-wider uppercase border border-white/10"
            >
              <Sparkles className="w-4 h-4 text-brand-accent animate-spin-slow" />
              <span>Bridging Academic Curricula & Industry Engineering</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-[4rem] font-extrabold tracking-tight text-white leading-[1.05]"
            >
              Build Real-World{" "}
              <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] animate-shimmer" style={{ backgroundSize: "200% auto" }}>
                Engineering Expertise.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed"
            >
              Join Techglaz Labs for high-end professional development, corporate internship tracks, and specialized courses in CSE, IT, VLSI, IoT, Embedded Systems, and Mechanical Engineering.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2"
            >
              <Link
                href="/trainings"
                className="btn-hero-primary group"
              >
                Explore Courses
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/apply"
                className="btn-hero-secondary"
              >
                How It Works <Play className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>

            {/* Bottom Trust/Students Row */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 pt-6"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0c1524] bg-slate-800 flex items-center justify-center overflow-hidden relative">
                     <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Student" fill className="object-cover" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-[#0c1524] bg-[#fbbf24] flex items-center justify-center text-[#090d14] font-bold text-[10px] z-10 shadow-lg leading-none">
                  500+
                </div>
              </div>
              <p className="text-xs font-medium text-slate-400 max-w-[200px] leading-tight">
                Students are already learning and growing with Techglaz.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Illustration & Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Main Image */}
            <div className="relative w-full max-w-lg aspect-square lg:aspect-auto lg:w-[90%] lg:h-[90%] mx-auto z-10 animate-float">
               <Image 
                 src="/images/hero-student.png" 
                 alt="Techglaz Labs Student" 
                 fill 
                 className="object-contain drop-shadow-2xl" 
                 priority 
               />
            </div>

            {/* Decor Glow behind Image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-blue-steel/20 rounded-full blur-[80px] -z-10" />

            {/* Floating Card 1: Progress */}
            <div className="absolute top-[20%] -right-4 sm:right-0 lg:-right-8 bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 p-4 rounded-2xl shadow-2xl z-20 w-56 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex justify-between items-end mb-2">
                <span className="text-xs font-bold text-white">Your Progress</span>
                <span className="text-sm font-black text-[#fbbf24]">78%</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-gradient-to-r from-brand-accent to-[#fbbf24] w-[78%] rounded-full relative">
                  <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/30 rounded-full animate-pulse-slow" />
                </div>
              </div>
              <p className="text-[10px] text-slate-400 font-medium">Keep going! You're doing great.</p>
            </div>

            {/* Floating Card 2: Current Lesson */}
            <div className="absolute bottom-[20%] -left-4 sm:left-0 lg:-left-8 bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 p-4 rounded-2xl shadow-2xl z-20 w-64 animate-slide-up flex items-center gap-3" style={{ animationDelay: '0.8s' }}>
              <div className="w-12 h-12 rounded-full bg-brand-blue-deep/50 flex items-center justify-center shrink-0 border border-brand-blue-steel/30">
                <div className="w-8 h-8 rounded-full bg-[#fbbf24] flex items-center justify-center pl-0.5">
                  <Play className="w-4 h-4 text-slate-900 fill-slate-900" />
                </div>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-slate-400 mb-0.5 uppercase tracking-wider">Current Lesson</p>
                <p className="text-sm font-bold text-white leading-tight">VLSI Design Basics</p>
                <p className="text-[10px] text-slate-500 mt-1 font-medium">Lesson 4 of 12 &bull; 50 min left</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
