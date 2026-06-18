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
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white dark:bg-slate-900 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto transform transition-transform duration-300 ease-in-out">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800">
            <Link href="/" onClick={onClose} className="flex items-center gap-2">
              <span className="text-xl font-bold bg-gradient-to-r from-brand-blue-deep to-brand-blue-steel bg-clip-text text-transparent">
                Techglaz Labs
              </span>
            </Link>
            <button
              onClick={onClose}
              className="p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-8 space-y-4">
            {NAV_LINKS.map((link) => {
              const hasChildren = link.children && link.children.length > 0;
              const isExpanded = !!expandedLinks[link.label];

              return (
                <div key={link.label} className="border-b border-slate-50/50 dark:border-slate-800/50 pb-3 last:border-0 last:pb-0">
                  {hasChildren ? (
                    <div>
                      <button
                        onClick={() => toggleExpand(link.label)}
                        className="flex items-center justify-between w-full text-left font-medium text-slate-700 dark:text-slate-300 hover:text-brand-blue-deep dark:hover:text-brand-blue-steel py-1 transition-colors"
                      >
                        <span>{link.label}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-slate-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-400" />
                        )}
                      </button>

                      {/* Sub-menu */}
                      <div
                        className={`pl-4 mt-2 space-y-2.5 overflow-hidden transition-all duration-300 ${
                          isExpanded ? "max-h-60 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                        }`}
                      >
                        {link.children?.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={onClose}
                            className="block text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-brand-blue-deep dark:hover:text-brand-blue-steel py-0.5 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="block font-medium text-slate-700 dark:text-slate-300 hover:text-brand-blue-deep dark:hover:text-brand-blue-steel py-1 transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* Action Buttons / Auth */}
        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 space-y-4">
          {session ? (
            <>
              {/* User Profile Summary */}
              <div className="flex items-center gap-3 px-1">
                {session.user?.image ? (
                  <img
                    src={session.user.image}
                    alt={session.user.name || "User"}
                    className="w-10 h-10 rounded-full object-cover border border-brand-blue-deep/10"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-brand-blue-light dark:bg-slate-800 flex items-center justify-center text-brand-blue-deep dark:text-brand-blue-steel font-bold border border-brand-blue-deep/10">
                    {session.user?.name?.charAt(0).toUpperCase() || "U"}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 truncate">
                    {session.user?.name}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                    {session.user?.email}
                  </p>
                </div>
              </div>

              {/* Action buttons when logged in */}
              <Link
                href="/dashboard"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-brand-blue-light hover:bg-brand-blue-light/80 text-brand-blue-deep dark:bg-slate-800 dark:hover:bg-slate-800/80 dark:text-slate-200 font-semibold text-sm transition-all shadow-sm"
              >
                <LayoutDashboard className="w-4 h-4" />
                Go to Dashboard
              </Link>

              <button
                onClick={() => {
                  signOut({ callbackUrl: "/" });
                  onClose();
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg border border-red-200 hover:bg-red-50 text-red-600 dark:border-red-900/30 dark:hover:bg-red-950/20 dark:text-red-400 font-semibold text-sm transition-all"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg border border-slate-200 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-sm transition-all cursor-pointer"
              >
                <LogIn className="w-4 h-4" />
                Login
              </Link>
              <Link
                href="/signup"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-brand-blue-deep hover:bg-brand-blue-steel text-white font-semibold text-sm transition-all shadow-md cursor-pointer"
              >
                <UserPlus className="w-4 h-4" />
                Sign Up
              </Link>
            </>
          )}

          {/* Quick Apply CTA */}
          <Link
            href="/apply"
            onClick={onClose}
            className="flex items-center justify-center w-full py-3 px-4 rounded-lg bg-brand-accent hover:bg-brand-accent-hover text-slate-900 font-bold text-sm transition-all shadow-md uppercase tracking-wider cursor-pointer"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}
