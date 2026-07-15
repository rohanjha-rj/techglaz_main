"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X, ChevronDown, ChevronUp, LogIn, UserPlus, LogOut, LayoutDashboard } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { signOut } from "next-auth/react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  session: any;
}

export default function MobileMenu({ isOpen, onClose, session }: MobileMenuProps) {
  const [expandedLinks, setExpandedLinks] = useState<Record<string, boolean>>({});

  const toggleExpand = (label: string) => {
    setExpandedLinks((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm" onClick={onClose} />

      <div className="fixed right-0 top-0 bottom-0 flex w-full max-w-xs flex-col justify-between overflow-y-auto border-l border-slate-200/70 bg-white/95 p-6 shadow-2xl backdrop-blur-2xl dark:border-slate-800/70 dark:bg-slate-900/95">
        <div>
          <div className="flex items-center justify-between border-b border-slate-200/70 pb-5 dark:border-slate-850">
            <Link href="/" onClick={onClose} className="flex items-center gap-2">
              <span className="bg-gradient-to-r from-brand-blue-deep to-brand-blue-steel bg-clip-text text-lg font-black text-transparent">Techglaz Labs</span>
            </Link>
            <button onClick={onClose} className="rounded-xl p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800/80 dark:hover:text-slate-200" aria-label="Close menu">
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="mt-6 space-y-3.5">
            {NAV_LINKS.map((link) => {
              const hasChildren = link.children && link.children.length > 0;
              const isExpanded = !!expandedLinks[link.label];

              return (
                <div key={link.label} className="border-b border-slate-100 pb-2.5 last:border-0 last:pb-0 dark:border-slate-850">
                  {hasChildren ? (
                    <div>
                      <button onClick={() => toggleExpand(link.label)} className="flex w-full items-center justify-between py-1 text-left font-bold text-slate-700 transition-colors hover:text-brand-blue-deep dark:text-slate-350 dark:hover:text-[#fbbf24]">
                        <span>{link.label}</span>
                        {isExpanded ? <ChevronUp className="h-4 w-4 text-slate-400" /> : <ChevronDown className="h-4 w-4 text-slate-400" />}
                      </button>

                      <div className={`mt-1.5 space-y-2 overflow-hidden pl-4 transition-all duration-300 ${isExpanded ? "max-h-60 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}>
                        {link.children?.map((child) => (
                          <Link key={child.label} href={child.href} onClick={onClose} className="block py-0.5 text-xs font-semibold text-slate-500 transition-colors hover:text-brand-blue-deep dark:text-slate-450 dark:hover:text-[#fbbf24] sm:text-sm">
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link href={link.href} onClick={onClose} className="block py-1 font-bold text-slate-700 transition-colors hover:text-brand-blue-deep dark:text-slate-350 dark:hover:text-[#fbbf24]">
                      {link.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        <div className="mt-8 space-y-3.5 border-t border-slate-200/70 pt-5 dark:border-slate-850">
          {session ? (
            <>
              <div className="flex items-center gap-3 px-1">
                {session.user?.image ? (
                  <img src={session.user.image} alt={session.user.name || "User"} className="h-9 w-9 rounded-full border border-brand-blue-deep/10 object-cover" />
                ) : (
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-blue-deep/10 bg-brand-blue-light text-sm font-bold text-brand-blue-deep dark:bg-slate-800 dark:text-brand-blue-steel">
                    {session.user?.name?.charAt(0).toUpperCase() || "U"}
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-bold leading-none text-slate-850 dark:text-slate-200 sm:text-sm">{session.user?.name}</p>
                  <p className="mt-1 truncate text-[11px] text-slate-500 dark:text-slate-450">{session.user?.role || "student"}</p>
                </div>
              </div>

              <Link href="/dashboard" onClick={onClose} className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-blue-light px-4 py-2.5 text-xs font-bold text-brand-blue-deep shadow-sm transition-all hover:bg-brand-blue-light/80 dark:bg-slate-850 dark:text-slate-200 dark:hover:bg-slate-800/80 sm:text-sm">
                <LayoutDashboard className="h-4 w-4" />
                Go to Dashboard
              </Link>

              <button onClick={() => { signOut({ callbackUrl: "/" }); onClose(); }} className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 px-4 py-2.5 text-xs font-bold text-red-600 transition-all hover:bg-red-50 dark:border-red-950/20 dark:text-red-400 dark:hover:bg-red-950/30 sm:text-sm">
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" onClick={onClose} className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-bold text-slate-700 transition-all hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-850 sm:text-sm">
                <LogIn className="h-4 w-4" />
                Login
              </Link>
              <Link href="/signup" onClick={onClose} className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700/80 sm:text-sm">
                <UserPlus className="h-4 w-4" />
                Sign Up
              </Link>
            </>
          )}

          <Link href="/apply" onClick={onClose} className="flex w-full items-center justify-center rounded-xl bg-brand-accent px-4 py-3 text-xs font-extrabold uppercase tracking-[0.2em] text-slate-900 shadow-md transition-all hover:bg-brand-accent-hover">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}

