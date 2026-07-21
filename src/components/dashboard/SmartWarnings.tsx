"use client";

// MOCK DATA — real warnings need backend rule engine + subject-tagged session data

import React from "react";
import { AlertTriangle, CheckCircle2, Info, Bell } from "lucide-react";

export interface SmartWarningItem {
  id: string;
  type: "warning" | "success" | "info";
  message: string;
  subtext?: string;
}

// MOCK DATA — real warnings need backend rule engine + subject-tagged session data
const MOCK_WARNINGS: SmartWarningItem[] = [
  {
    id: "w1",
    type: "warning",
    message: "Weekly goal falling behind",
    subtext: "4.5h completed out of 10h goal. 3 days remaining this week."
  },
  {
    id: "w2",
    type: "warning",
    message: "3 overdue tasks pending",
    subtext: "High priority tasks in Task Planner require your urgent attention."
  },
  {
    id: "w3",
    type: "info",
    message: "Haven't studied Full-Stack Web Dev in 9 days",
    subtext: "Schedule a lecture review to maintain subject momentum."
  },
  {
    id: "w4",
    type: "warning",
    message: "Streak expires today",
    subtext: "Complete a study session or check-in to keep your 6-day streak active."
  },
  {
    id: "w5",
    type: "success",
    message: "Great consistency this week!",
    subtext: "You have logged daily study sessions 4 days in a row."
  }
];

export default function SmartWarnings() {
  const alertsToDisplay = MOCK_WARNINGS.slice(0, 4);

  return (
    <div className="flex flex-col gap-4 w-full bg-[#090d16]/90 border border-slate-800/80 rounded-3xl p-5 sm:p-6 shadow-md backdrop-blur-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-black text-emerald-400 uppercase tracking-widest">
          <Bell className="w-4 h-4 text-emerald-400" />
          <span>Smart Assistant Alerts</span>
        </div>
        <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider">
          CONTEXTUAL INSIGHTS
        </span>
      </div>

      <div className="flex flex-col gap-3">
        {alertsToDisplay.map((alert) => {
          const isWarning = alert.type === "warning";
          const isSuccess = alert.type === "success";

          return (
            <div
              key={alert.id}
              className={`rounded-2xl p-4 border flex flex-col gap-1.5 transition-all duration-300 backdrop-blur-md ${
                isWarning
                  ? "bg-amber-500/5 border-amber-500/25 hover:border-amber-500/40"
                  : isSuccess
                  ? "bg-emerald-500/5 border-emerald-500/25 hover:border-emerald-500/40"
                  : "bg-cyan-500/5 border-cyan-500/25 hover:border-cyan-500/40"
              }`}
            >
              {/* Icon + Title on top line */}
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border ${
                    isWarning
                      ? "bg-amber-500/10 border-amber-500/30 text-amber-400"
                      : isSuccess
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                      : "bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
                  }`}
                >
                  {isWarning && <AlertTriangle className="w-3.5 h-3.5" />}
                  {isSuccess && <CheckCircle2 className="w-3.5 h-3.5" />}
                  {!isWarning && !isSuccess && <Info className="w-3.5 h-3.5" />}
                </div>

                <span
                  className={`text-xs sm:text-sm font-extrabold tracking-tight leading-tight ${
                    isWarning
                      ? "text-amber-300"
                      : isSuccess
                      ? "text-emerald-300"
                      : "text-cyan-300"
                  }`}
                >
                  {alert.message}
                </span>
              </div>

              {/* Description text below with proper indentation and line height */}
              {alert.subtext && (
                <p className="text-[11px] sm:text-xs text-slate-400 font-medium leading-relaxed pl-9">
                  {alert.subtext}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
