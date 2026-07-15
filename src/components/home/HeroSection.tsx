"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play, ShieldCheck, Cpu, Rocket } from "lucide-react";

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
    <section className="relative flex min-h-[94vh] items-center justify-center overflow-hidden bg-slate-950 py-24 sm:py-28 lg:py-32">
      <div className="absolute inset-0 z-0 bg-[#060a12]" />
      <div className="absolute right-[-10%] top-[-20%] h-[680px] w-[680px] rounded-full bg-brand-accent/8 blur-[160px]" />
      <div className="absolute bottom-[-14%] left-[-10%] h-[560px] w-[560px] rounded-full bg-brand-blue-steel/12 blur-[140px]" />
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-6 sm:px-6 lg:px-8 sm:pt-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-start space-y-8 text-left">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-white/90 backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-brand-accent" />
              <span>Bridging Academic Curricula & Industry Engineering</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="max-w-2xl text-4xl font-black leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-[4.1rem]">
              Build real-world{" "}
              <span className="bg-gradient-to-r from-[#fbd27d] via-[#f5b84f] to-[#fbd27d] bg-clip-text text-transparent" style={{ backgroundSize: "200% auto" }}>
                engineering expertise.
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="max-w-xl text-sm font-medium leading-relaxed text-slate-350 sm:text-base">
              Join Techglaz Labs for premium professional development, corporate internship tracks, and specialized programs in CSE, IT, VLSI, IoT, Embedded Systems, and Mechanical Engineering.
            </motion.p>

            <motion.div variants={itemVariants} className="flex w-full flex-col gap-4 pt-2 sm:w-auto sm:flex-row">
              <Link href="/trainings" className="btn-hero-primary group text-xs font-black uppercase tracking-[0.24em] sm:text-sm">
                <span>Explore Courses</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/apply" className="btn-hero-secondary text-xs font-bold uppercase tracking-[0.24em] sm:text-sm">
                <span>How It Works</span>
                <Play className="ml-1.5 h-4 w-4 shrink-0 fill-current text-white" />
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-slate-950 bg-slate-800 shadow-sm">
                    <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Student Avatar" fill sizes="40px" className="object-cover" />
                  </div>
                ))}
                <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-950 bg-[#fbbf24] text-[10px] font-black leading-none text-[#090d14] shadow-md">500+</div>
              </div>
              <p className="max-w-[220px] text-xs font-semibold leading-tight text-slate-400">Students are already learning and growing with Techglaz.</p>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative mt-6 flex items-center justify-center lg:mt-0 lg:h-[560px]">
            <div className="relative z-10 mx-auto w-full max-w-[480px] animate-float">
              <Image src="/images/hero-student.png" alt="Techglaz Labs Trainee" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 500px" className="object-contain drop-shadow-[0_20px_60px_rgba(46,117,182,0.3)]" priority />
            </div>
            <div className="absolute left-1/2 top-1/2 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue-steel/15 blur-[90px]" />

            <div className="absolute right-3 top-[12%] z-20 w-52 rounded-[1.4rem] border border-white/10 bg-slate-900/85 p-4 shadow-2xl backdrop-blur-xl sm:right-4">
              <div className="mb-2.5 flex items-end justify-between">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white">Your Progress</span>
                <span className="text-sm font-black text-[#fbbf24]">78%</span>
              </div>
              <div className="mb-2.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-brand-accent to-[#fbbf24]" />
              </div>
              <p className="text-[10px] font-semibold leading-none text-slate-400">Keep going! You&apos;re doing great.</p>
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
      </div>
    </section>
  );
}

