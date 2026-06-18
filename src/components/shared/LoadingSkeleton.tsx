import React from "react";

export function CardSkeleton() {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 space-y-4 shadow-sm animate-pulse">
      <div className="h-44 w-full bg-slate-200 dark:bg-slate-800 rounded-xl" />
      <div className="h-6 w-3/4 bg-slate-200 dark:bg-slate-800 rounded" />
      <div className="space-y-2">
        <div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded" />
        <div className="h-4 w-5/6 bg-slate-200 dark:bg-slate-800 rounded" />
      </div>
      <div className="flex justify-between items-center pt-2">
        <div className="h-8 w-24 bg-slate-200 dark:bg-slate-800 rounded-lg" />
        <div className="h-4 w-16 bg-slate-200 dark:bg-slate-800 rounded" />
      </div>
    </div>
  );
}

export function GridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}

export function ListSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl p-5 flex items-center justify-between shadow-sm animate-pulse"
        >
          <div className="flex items-center gap-4 w-2/3">
            <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 shrink-0" />
            <div className="space-y-2.5 w-full">
              <div className="h-5 w-1/3 bg-slate-200 dark:bg-slate-800 rounded" />
              <div className="h-3 w-3/4 bg-slate-200 dark:bg-slate-800 rounded" />
            </div>
          </div>
          <div className="h-8 w-20 bg-slate-200 dark:bg-slate-800 rounded-lg" />
        </div>
      ))}
    </div>
  );
}

export function DetailSkeleton() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 animate-pulse space-y-8">
      <div className="h-8 w-1/2 bg-slate-200 dark:bg-slate-800 rounded" />
      <div className="h-64 w-full bg-slate-200 dark:bg-slate-800 rounded-2xl" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <div className="h-6 w-1/4 bg-slate-200 dark:bg-slate-800 rounded" />
          <div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded" />
          <div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded" />
          <div className="h-4 w-5/6 bg-slate-200 dark:bg-slate-800 rounded" />
        </div>
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl p-5 space-y-4 h-fit">
          <div className="h-5 w-1/2 bg-slate-200 dark:bg-slate-800 rounded" />
          <div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded" />
          <div className="h-4 w-3/4 bg-slate-200 dark:bg-slate-800 rounded" />
        </div>
      </div>
    </div>
  );
}
