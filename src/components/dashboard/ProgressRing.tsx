"use client";

import React from "react";

export interface ProgressRingProps {
  value: number;
  max: number;
  label: string;
  unit?: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
  gradientFrom?: string;
  gradientTo?: string;
  gradientId?: string;
}

export default function ProgressRing({
  value,
  max,
  label,
  unit = "h",
  size = 110,
  strokeWidth = 8,
  color = "#10b981",
  gradientFrom,
  gradientTo,
  gradientId
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const percentage = Math.min(Math.max(value / (max || 1), 0), 1);
  const strokeDashoffset = circumference * (1 - percentage);

  const activeStroke = gradientId && gradientFrom && gradientTo ? `url(#${gradientId})` : color;
  const isLarge = size >= 95;

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="transform -rotate-90">
          {gradientId && gradientFrom && gradientTo && (
            <defs>
              <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={gradientFrom} />
                <stop offset="100%" stopColor={gradientTo} />
              </linearGradient>
            </defs>
          )}

          {/* Background Track Circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="text-slate-800/80"
            fill="transparent"
          />

          {/* Animated Progress Ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={activeStroke}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            className="transition-all duration-700 ease-out"
          />
        </svg>

        {/* Center Text displaying progress value */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className={`${isLarge ? "text-xl sm:text-2xl font-black text-white tracking-tight" : "text-xs font-black text-white"} leading-none`}>
            {value.toFixed(1)}{unit}
          </span>
          <span className={`${isLarge ? "text-[10px] sm:text-xs text-slate-400 font-extrabold mt-1" : "text-[8px] text-slate-400 font-bold mt-0.5"} leading-none`}>
            / {max}{unit}
          </span>
        </div>
      </div>

      <span className={`${isLarge ? "text-xs font-black text-slate-300 uppercase tracking-widest mt-2" : "text-[10px] text-slate-300 font-extrabold uppercase tracking-wider mt-1.5"}`}>
        {label}
      </span>
    </div>
  );
}
