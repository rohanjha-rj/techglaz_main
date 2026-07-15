"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play, ShieldCheck, Cpu, Rocket, ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.14, delayChildren: 0.08 } },
  };

  const itemVariants: any = {
    hidden: { y: 24, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 90, damping: 18 } },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-36 pb-24 bg-[#030712]">
      {/* Background Image stretched to fit full screen */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none opacity-40">
        <Image
          src="/images/hero-liquid-orb.png"
          alt="Techglaz Hero Background"
          fill
          className="object-cover"
          priority
        />
        {/* Darkening gradient overlays to keep textual contrast crisp */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/45 to-[#030712]/80" />
      </div>

      {/* Background radial soft glow matching the target image */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-500/10 blur-[130px] z-0 pointer-events-none animate-pulse-slow" />
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[120px] z-0 pointer-events-none" style={{ animationDelay: "2s" }} />

      {/* Subtle Starry/Dot pattern background */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-25 z-0 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center flex flex-col items-center">
        {/* Animated Main Content Wrapper */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 flex flex-col items-center"
        >
          {/* Branded Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full bg-white/5 backdrop-blur-md text-slate-350 font-semibold text-xs tracking-wider uppercase border border-white/10"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-accent animate-spin-slow" />
            <span>Bridging Academic Curricula & Industry Engineering</span>
          </motion.div>

          {/* Centered Premium Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] max-w-4xl"
          >
            Elevate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-amber-300">
              Engineering Career
            </span>
          </motion.h1>

          {/* Centered Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed font-medium"
          >
            Join Techglaz Labs for high-end professional development, corporate internship tracks, and specialized courses in CSE, IT, VLSI, IoT, Embedded Systems, and Mechanical Engineering.
          </motion.p>

          {/* Centered Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <Link
              href="/trainings"
              className="group bg-white hover:bg-slate-100 text-slate-950 font-bold px-8 py-3.5 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-xl shadow-white/5 hover:scale-105"
            >
              Explore Courses
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-slate-950" />
            </Link>
            
            <Link
              href="/career-path-finder"
              className="group bg-white/5 hover:bg-white/10 text-white font-bold px-8 py-3.5 rounded-full border border-white/10 flex items-center justify-center gap-2 backdrop-blur-md transition-all duration-300 hover:scale-105"
            >
              Career Path Finder
              <Sparkles className="w-4 h-4 text-brand-accent group-hover:animate-pulse" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Central visual rising orb container */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="relative w-full max-w-xl sm:max-w-2xl aspect-[1.1] mx-auto mt-16 sm:mt-24 select-none pointer-events-none flex justify-center items-end"
        >
          <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/10 rounded-full blur-[90px] -z-10 animate-pulse-slow" />
          
          <Image
            src="/images/hero-liquid-orb.png"
            alt="Techglaz Labs Liquid Orb"
            width={650}
            height={650}
            className="object-contain animate-float drop-shadow-3xl transform translate-y-10 sm:translate-y-16"
            priority
          />

          {/* Left Floating Card: VLSI/Placements - glassmorphic matching the target page */}
          <div className="absolute left-[-2%] sm:left-[-12%] bottom-[25%] sm:bottom-[35%] bg-slate-950/45 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl w-48 sm:w-56 text-left pointer-events-auto hover:-translate-y-1 transition-transform duration-300">
            <div className="flex justify-between items-start gap-4">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Specialization</span>
              <Link href="/trainings" className="w-6 h-6 rounded-full bg-white/10 hover:bg-white text-white hover:text-slate-950 flex items-center justify-center transition-colors cursor-pointer shrink-0">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <h4 className="text-sm sm:text-base font-extrabold text-white mt-3 leading-snug">
              VLSI & Embedded Systems
            </h4>
            <p className="text-[10px] sm:text-xs text-slate-400 font-semibold mt-2.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              Industry-Grade IC Design
            </p>
          </div>

            <div className="absolute bottom-[12%] left-1 sm:left-2 z-20 flex w-60 items-center gap-3.5 rounded-[1.4rem] border border-white/10 bg-slate-900/85 p-4 shadow-2xl backdrop-blur-xl lg:-left-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-blue-steel/20 bg-brand-blue-deep/60">
                <Play className="ml-0.5 h-3.5 w-3.5 fill-[#fbbf24] text-[#fbbf24]" />
              </div>
              <div>
                <p className="mb-0.5 text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500">Current Lesson</p>
                <p className="text-xs font-bold leading-tight text-white">VLSI Design Basics</p>
                <p className="mt-1 text-[10px] font-semibold text-slate-500">Lesson 4 of 12 • 50m left</p>
              </div>
            </div>

            <div className="absolute bottom-4 right-6 flex gap-2 rounded-full border border-white/10 bg-white/10 p-2 backdrop-blur-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue-light/20 text-brand-blue-steel"><ShieldCheck className="h-5 w-5" /></div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-accent/20 text-brand-accent"><Cpu className="h-5 w-5" /></div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white"><Rocket className="h-5 w-5" /></div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

