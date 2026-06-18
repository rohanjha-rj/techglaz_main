"use client";

import dynamic from "next/dynamic";
import React from "react";

const LeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full rounded-2xl bg-slate-100 dark:bg-slate-850 flex items-center justify-center min-h-[300px] border border-slate-200/50 animate-pulse">
      <span className="text-sm text-slate-400 font-semibold">Loading Map...</span>
    </div>
  ),
});

export default function LeafletMapWrapper() {
  return <LeafletMap />;
}
