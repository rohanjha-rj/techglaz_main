"use client";

// MOCK DATA — requires backend aggregation (historical comparison) to become real. See conversation with senior lead before wiring to live data.

import React, { useState } from "react";
import { TrendingUp, Clock, CheckCircle2, Target, Zap } from "lucide-react";

export type InsightsViewMode = "weekly" | "monthly";

export interface InsightsData {
  studyTimeHours: number;
  studyTimeVsLastPeriodPct: number;
  periodLabel: string;
  longestSessionMinutes: number;
  avgSessionMinutes: number;
  tasksCompleted: number;
  goalCompletionPct: number;
}

// Data fetching function placeholder — swap this return object with live API fetch response later
export function fetchInsightsData(mode: InsightsViewMode): InsightsData {
  if (mode === "monthly") {
    return {
      studyTimeHours: 58.4,
      studyTimeVsLastPeriodPct: 22.0,
      periodLabel: "vs last month",
      longestSessionMinutes: 145,
      avgSessionMinutes: 52,
      tasksCompleted: 48,
      goalCompletionPct: 92
    };
  }

  return {
    studyTimeHours: 14.2,
    studyTimeVsLastPeriodPct: 14.5,
    periodLabel: "vs last week",
    longestSessionMinutes: 110,
    avgSessionMinutes: 48,
    tasksCompleted: 12,
    goalCompletionPct: 85
  };
}

export default function WeeklyInsights() {
  const [viewMode, setViewMode] = useState<InsightsViewMode>("weekly");

  // MOCK DATA — requires backend aggregation (historical comparison) to become real. See conversation with senior lead before wiring to live data.
  const data = fetchInsightsData(viewMode);

  return (
    <div className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 shadow-md backdrop-blur-md flex flex-col justify-between">
      {/* Card Header & Toggle */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2 text-xs font-black text-emerald-400 uppercase tracking-widest">
          <Zap className="w-4 h-4 text-emerald-400" />
          <span>Performance Insights</span>
        </div>

        {/* Weekly / Monthly Toggle */}
        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-2xl border border-slate-800">
          <button
            onClick={() => setViewMode("weekly")}
            className={`px-3 py-1 rounded-xl text-[10px] font-extrabold transition cursor-pointer ${
              viewMode === "weekly"
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
            }`}
          >
            Weekly
          </button>
          <button
            onClick={() => setViewMode("monthly")}
            className={`px-3 py-1 rounded-xl text-[10px] font-extrabold transition cursor-pointer ${
              viewMode === "monthly"
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
            }`}
          >
            Monthly
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {/* Metric 1: Total Study Time */}
        <div className="bg-slate-950/50 border border-slate-850 rounded-2xl p-3.5 flex flex-col justify-between">
          <div className="flex justify-between items-center text-slate-400">
            <span className="text-[10px] font-extrabold uppercase tracking-wide">Study Time</span>
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <div className="mt-2">
            <div className="text-xl font-black text-white">{data.studyTimeHours}h</div>
            <div className="text-[10px] text-emerald-400 font-bold flex items-center gap-1 mt-0.5">
              <TrendingUp className="w-3 h-3" />
              <span>+{data.studyTimeVsLastPeriodPct}% {data.periodLabel}</span>
            </div>
          </div>
        </div>

        {/* Metric 2: Longest Session */}
        <div className="bg-slate-950/50 border border-slate-850 rounded-2xl p-3.5 flex flex-col justify-between">
          <div className="flex justify-between items-center text-slate-400">
            <span className="text-[10px] font-extrabold uppercase tracking-wide">Longest Session</span>
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
          </div>
          <div className="mt-2">
            <div className="text-xl font-black text-white">{data.longestSessionMinutes}m</div>
            <span className="text-[10px] text-slate-400 font-medium mt-0.5 block">Peak focus block</span>
          </div>
        </div>

        {/* Metric 3: Average Session */}
        <div className="bg-slate-950/50 border border-slate-850 rounded-2xl p-3.5 flex flex-col justify-between">
          <div className="flex justify-between items-center text-slate-400">
            <span className="text-[10px] font-extrabold uppercase tracking-wide">Avg Session</span>
            <Clock className="w-3.5 h-3.5 text-teal-400" />
          </div>
          <div className="mt-2">
            <div className="text-xl font-black text-white">{data.avgSessionMinutes}m</div>
            <span className="text-[10px] text-slate-400 font-medium mt-0.5 block">Consistent pace</span>
          </div>
        </div>

        {/* Metric 4: Tasks Completed */}
        <div className="bg-slate-950/50 border border-slate-850 rounded-2xl p-3.5 flex flex-col justify-between">
          <div className="flex justify-between items-center text-slate-400">
            <span className="text-[10px] font-extrabold uppercase tracking-wide">Tasks Completed</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <div className="mt-2">
            <div className="text-xl font-black text-white">{data.tasksCompleted}</div>
            <span className="text-[10px] text-emerald-400 font-bold mt-0.5 block">Checklist cleared</span>
          </div>
        </div>

        {/* Metric 5: Goal Completion % */}
        <div className="bg-slate-950/50 border border-slate-850 rounded-2xl p-3.5 flex flex-col justify-between col-span-2 sm:col-span-1">
          <div className="flex justify-between items-center text-slate-400">
            <span className="text-[10px] font-extrabold uppercase tracking-wide">Goal Completion</span>
            <Target className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <div className="mt-2">
            <div className="text-xl font-black text-white">{data.goalCompletionPct}%</div>
            <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden mt-1.5">
              <div 
                className="bg-emerald-500 h-full rounded-full transition-all duration-500" 
                style={{ width: `${data.goalCompletionPct}%` }} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
