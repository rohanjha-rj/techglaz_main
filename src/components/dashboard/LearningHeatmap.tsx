"use client";

// MOCK DATA — replace with real API once backend supports daily activity logs

import React, { useState, useMemo, useRef } from "react";
import { Calendar, Activity, CheckSquare, Clock, UserCheck } from "lucide-react";

export type HeatmapMode = "hours" | "sessions" | "tasks" | "attendance";
export type HeatmapRange = "90" | "180";

export interface HeatmapDayData {
  date: string; // YYYY-MM-DD
  dayLabel: string;
  studyHours: number;
  sessions: number;
  tasksCompleted: number;
  attendance: boolean;
}

// Generate deterministic mock dataset for the given number of days (90 or 180)
function generateMockHeatmapData(daysCount: number): HeatmapDayData[] {
  const days: HeatmapDayData[] = [];
  const today = new Date();
  
  for (let i = daysCount - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split("T")[0];
    const dayLabel = d.toLocaleDateString("en-US", { month: "short", day: "numeric", weekday: "short" });

    // Deterministic pseudo-random values based on date index
    const seed = (i * 37 + 13) % 100;
    const isRestDay = seed % 6 === 0;

    const studyHours = isRestDay ? 0 : parseFloat(((seed % 45) / 10 + 0.5).toFixed(1));
    const sessions = isRestDay ? 0 : (seed % 3) + 1;
    const tasksCompleted = isRestDay ? 0 : (seed % 5);
    const attendance = !isRestDay && (seed % 10 !== 0);

    days.push({
      date: dateStr,
      dayLabel,
      studyHours,
      sessions,
      tasksCompleted,
      attendance
    });
  }

  return days;
}

export default function LearningHeatmap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<HeatmapMode>("hours");
  const [rangeMode, setRangeMode] = useState<HeatmapRange>("90"); // Default 90 days
  const [hoveredCell, setHoveredCell] = useState<{
    day: HeatmapDayData;
    x: number;
    y: number;
    placeAbove: boolean;
  } | null>(null);

  // MOCK DATA — replace with real API once backend supports daily activity logs
  const daysCount = rangeMode === "180" ? 180 : 90;
  const data = useMemo(() => generateMockHeatmapData(daysCount), [daysCount]);

  // Helper to calculate tooltip position relative to heatmap card container
  const handleCellMouseEnter = (e: React.MouseEvent<HTMLDivElement>, day: HeatmapDayData) => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const cellRect = e.currentTarget.getBoundingClientRect();

    // Calculate cell position relative to container
    const cellCenterX = (cellRect.left - containerRect.left) + cellRect.width / 2;
    const cellTopY = cellRect.top - containerRect.top;
    const cellBottomY = cellRect.bottom - containerRect.top;

    // Edge detection: if cell is near top of container (cellTopY < 70px), place below cell
    const placeAbove = cellTopY > 70;
    const targetY = placeAbove ? cellTopY - 6 : cellBottomY + 6;

    // Clamp horizontal coordinate to stay within container padding
    const containerWidth = containerRect.width;
    const halfTooltipWidth = 88; // half of w-44 (176px)
    const clampedX = Math.max(halfTooltipWidth + 12, Math.min(containerWidth - halfTooltipWidth - 12, cellCenterX));

    setHoveredCell({
      day,
      x: clampedX,
      y: targetY,
      placeAbove
    });
  };

  const handleCellMouseLeave = () => {
    setHoveredCell(null);
  };

  // Helper to determine intensity level (0 to 4)
  const getIntensity = (day: HeatmapDayData): number => {
    switch (mode) {
      case "hours":
        if (day.studyHours === 0) return 0;
        if (day.studyHours < 1.5) return 1;
        if (day.studyHours < 3.0) return 2;
        if (day.studyHours < 4.5) return 3;
        return 4;
      case "sessions":
        if (day.sessions === 0) return 0;
        if (day.sessions === 1) return 1;
        if (day.sessions === 2) return 2;
        return 3;
      case "tasks":
        if (day.tasksCompleted === 0) return 0;
        if (day.tasksCompleted < 2) return 1;
        if (day.tasksCompleted < 4) return 2;
        return 3;
      case "attendance":
        return day.attendance ? 3 : 0;
      default:
        return 0;
    }
  };

  const getCellBgClass = (intensity: number) => {
    switch (intensity) {
      case 0:
        return "bg-[#0d1322] border-[#18233c] hover:border-slate-700";
      case 1:
        return "bg-emerald-950/80 border-emerald-800/50 hover:border-emerald-600";
      case 2:
        return "bg-emerald-700/80 border-emerald-600/70 hover:border-emerald-500";
      case 3:
      case 4:
        return "bg-emerald-400 border-emerald-300 shadow-[0_0_8px_rgba(52,211,153,0.5)]";
      default:
        return "bg-[#0d1322] border-[#18233c]";
    }
  };

  // Group days into columns of 7 (weeks)
  const weeks = useMemo(() => {
    const w: HeatmapDayData[][] = [];
    for (let i = 0; i < data.length; i += 7) {
      w.push(data.slice(i, i + 7));
    }
    return w;
  }, [data]);

  const modeLabels: Record<HeatmapMode, { label: string; icon: React.ReactNode }> = {
    hours: { label: "Study Hours", icon: <Clock className="w-3.5 h-3.5" /> },
    sessions: { label: "Sessions", icon: <Activity className="w-3.5 h-3.5" /> },
    tasks: { label: "Tasks Completed", icon: <CheckSquare className="w-3.5 h-3.5" /> },
    attendance: { label: "Attendance", icon: <UserCheck className="w-3.5 h-3.5" /> }
  };

  return (
    <div ref={containerRef} className="w-full bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 shadow-md backdrop-blur-md relative overflow-visible">
      {/* Header & Control Switchers */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-black text-emerald-400 uppercase tracking-widest">
            <Calendar className="w-4 h-4 text-emerald-400" />
            <span>Learning Heatmap</span>
          </div>
          <p className="text-xs text-slate-400 font-medium mt-0.5">
            Daily consistency over the past {rangeMode === "180" ? "26" : "13"} weeks ({daysCount} days)
          </p>
        </div>

        {/* Dropdown Control Switchers */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Day Range Dropdown */}
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-slate-400 font-extrabold uppercase">Range:</span>
            <select
              value={rangeMode}
              onChange={(e) => {
                setRangeMode(e.target.value as HeatmapRange);
                handleCellMouseLeave();
              }}
              className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 text-[11px] font-extrabold text-emerald-400 outline-none cursor-pointer focus:border-emerald-500/50"
            >
              <option value="90" className="bg-slate-900 text-slate-200">90 Days</option>
              <option value="180" className="bg-slate-900 text-slate-200">180 Days</option>
            </select>
          </div>

          {/* Metric Parameter Dropdown */}
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-slate-400 font-extrabold uppercase">Metric:</span>
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value as HeatmapMode)}
              className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 text-[11px] font-extrabold text-emerald-400 outline-none cursor-pointer focus:border-emerald-500/50"
            >
              <option value="hours" className="bg-slate-900 text-slate-200">Study Hours</option>
              <option value="sessions" className="bg-slate-900 text-slate-200">Sessions</option>
              <option value="tasks" className="bg-slate-900 text-slate-200">Tasks Completed</option>
              <option value="attendance" className="bg-slate-900 text-slate-200">Attendance</option>
            </select>
          </div>
        </div>
      </div>

      {/* Heatmap Grid View */}
      <div className="relative w-full overflow-x-auto pb-2 scrollbar-thin">
        <div className="flex gap-3 items-start min-w-max">
          {/* Day of Week Row Labels (MON, WED, FRI, SUN) */}
          <div className="flex flex-col gap-1.5 pt-0.5 text-[9px] font-black text-slate-500 uppercase select-none shrink-0">
            <div className="h-4 flex items-center">MON</div>
            <div className="h-4" />
            <div className="h-4 flex items-center">WED</div>
            <div className="h-4" />
            <div className="h-4 flex items-center">FRI</div>
            <div className="h-4" />
            <div className="h-4 flex items-center">SUN</div>
          </div>

          {/* Grid Spanning Columns */}
          <div className="flex justify-between items-center gap-1.5 flex-grow">
            {weeks.map((week, wIdx) => (
              <div key={`week-${wIdx}`} className="flex flex-col gap-1.5">
                {week.map((day) => {
                  const intensity = getIntensity(day);
                  return (
                    <div
                      key={day.date}
                      onMouseEnter={(e) => handleCellMouseEnter(e, day)}
                      onMouseLeave={handleCellMouseLeave}
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-md border transition-all duration-200 cursor-pointer ${getCellBgClass(
                        intensity
                      )}`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Legend & Dynamic Caption */}
        <div className="flex justify-between items-center mt-5 pt-3 border-t border-slate-850/80 text-[10px] text-slate-400 min-w-max">
          <span className="font-bold tracking-wide">Past {daysCount} Days</span>
          <div className="flex items-center gap-1.5 font-bold">
            <span className="mr-1">Less</span>
            <div className="w-3 h-3 rounded-md bg-[#0d1322] border border-[#1b2742]" />
            <div className="w-3 h-3 rounded-md bg-emerald-950/90 border border-emerald-800/60" />
            <div className="w-3 h-3 rounded-md bg-emerald-700/80 border border-emerald-600/70" />
            <div className="w-3 h-3 rounded-md bg-emerald-400 border border-emerald-300 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
            <span className="ml-1">More</span>
          </div>
        </div>
      </div>

      {/* Container-Relative Cell-Anchored Hover Tooltip Popover */}
      {hoveredCell && (
        <div 
          className={`absolute z-[100] bg-slate-950/95 border border-emerald-500/40 px-3 py-2 rounded-xl shadow-2xl text-xs backdrop-blur-md pointer-events-none transition-all duration-150 ease-out flex flex-col items-center text-center w-44 ${
            hoveredCell.placeAbove ? "-translate-y-full -translate-x-1/2" : "-translate-x-1/2"
          }`}
          style={{
            left: `${hoveredCell.x}px`,
            top: `${hoveredCell.y}px`
          }}
        >
          <div className="font-black text-white text-[11px] leading-tight">{hoveredCell.day.dayLabel}</div>
          <div className="text-[11px] text-emerald-400 font-extrabold mt-0.5">
            {mode === "hours" && `${hoveredCell.day.studyHours}h study`}
            {mode === "sessions" && `${hoveredCell.day.sessions} sessions`}
            {mode === "tasks" && `${hoveredCell.day.tasksCompleted} tasks completed`}
            {mode === "attendance" && (hoveredCell.day.attendance ? "Present ✓" : "Rest Day")}
          </div>
          <div className="text-[9px] text-slate-400 font-medium mt-1 pt-1 border-t border-slate-850 w-full flex justify-around">
            <span>{hoveredCell.day.studyHours}h</span>
            <span>•</span>
            <span>{hoveredCell.day.sessions} sess</span>
            <span>•</span>
            <span>{hoveredCell.day.tasksCompleted} tasks</span>
          </div>

          {/* Directional pointer arrow */}
          <div 
            className={`absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-950 border-r border-b border-emerald-500/40 rotate-45 ${
              hoveredCell.placeAbove ? "-bottom-1" : "-top-1 border-r-0 border-b-0 border-t border-l"
            }`}
          />
        </div>
      )}
    </div>
  );
}

