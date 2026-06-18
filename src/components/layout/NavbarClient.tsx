"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown, User, LogOut, LayoutDashboard, Settings } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import MobileMenu from "./MobileMenu";
import { signOut } from "next-auth/react";

interface NavbarClientProps {
  session: any;
}

export default function NavbarClient({ session }: NavbarClientProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const dropdownTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 350); // 350ms hover delay
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  // Monitor scroll for glassmorphism styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns on route changes
  useEffect(() => {
    setActiveDropdown(null);
    setIsProfileDropdownOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "glassmorphism py-3 shadow-md"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-blue-deep to-brand-blue-steel flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <span className="text-white font-extrabold text-lg">T</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-slate-900 dark:text-white tracking-tight leading-none">
                  TECHGLAZ
                </span>
                <span className="text-xs font-semibold text-brand-blue-steel tracking-widest mt-0.5">
                  LABS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6">
              {NAV_LINKS.map((link) => {
                const hasChildren = link.children && link.children.length > 0;
                const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");

                if (hasChildren) {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(link.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        className={`flex items-center gap-1.5 text-sm font-semibold transition-colors cursor-pointer ${
                          isActive
                            ? "text-brand-blue-deep dark:text-brand-blue-steel"
                            : "text-slate-600 dark:text-slate-300 hover:text-brand-blue-deep dark:hover:text-brand-blue-steel"
                        }`}
                        aria-expanded={activeDropdown === link.label}
                      >
                        <span>{link.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === link.label ? "rotate-180" : ""}`} />
                      </button>

                      {/* Dropdown Menu */}
                      <div
                        className={`absolute left-0 mt-2 w-56 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl py-2 transition-all duration-200 transform origin-top-left ${
                          activeDropdown === link.label
                            ? "opacity-100 scale-100 pointer-events-auto"
                            : "opacity-0 scale-95 pointer-events-none"
                        }`}
                      >
                        {link.children?.map((child) => {
                          const isChildActive = pathname === child.href || pathname.includes(child.href);
                          return (
                            <Link
                              key={child.label}
                              href={child.href}
                              className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                                isChildActive
                                  ? "bg-brand-blue-light/50 text-brand-blue-deep dark:bg-slate-800 dark:text-brand-blue-steel"
                                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-brand-blue-deep dark:hover:text-brand-blue-steel"
                              }`}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-sm font-semibold transition-colors relative ${
                      isActive
                        ? "text-brand-blue-deep dark:text-brand-blue-steel font-bold"
                        : "text-slate-600 dark:text-slate-300 hover:text-brand-blue-deep dark:hover:text-brand-blue-steel"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-brand-blue-deep dark:bg-brand-blue-steel rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Auth CTA / User Profile */}
            <div className="hidden lg:flex items-center gap-4">
              {session ? (
                <div className="relative">
                  <button
                    onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                    className="flex items-center gap-2.5 p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue-steel/40"
                    aria-label="User profile menu"
                  >
                    {session.user?.image ? (
                      <img
                        src={session.user.image}
                        alt={session.user.name || "User"}
                        className="w-8 h-8 rounded-full object-cover border border-brand-blue-deep/10"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-brand-blue-light dark:bg-slate-800 flex items-center justify-center text-brand-blue-deep dark:text-brand-blue-steel font-bold text-sm">
                        {session.user?.name?.charAt(0).toUpperCase() || "U"}
                      </div>
                    )}
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 max-w-[120px] truncate">
                      {session.user?.name}
                    </span>
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  </button>

                  {/* Profile Dropdown */}
                  {isProfileDropdownOpen && (
                    <>
                      <div
                        className="fixed inset-0 z-30"
                        onClick={() => setIsProfileDropdownOpen(false)}
                      />
                      <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl py-2 z-40 animate-fade-in">
                        <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-800">
                          <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                            Role: {session.user?.role || "student"}
                          </p>
                          <p className="text-xs text-slate-500 truncate mt-0.5">
                            {session.user?.email}
                          </p>
                        </div>
                        
                        <Link
                          href="/dashboard"
                          className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850/50 hover:text-brand-blue-deep dark:hover:text-brand-blue-steel font-medium transition-colors"
                        >
                          <LayoutDashboard className="w-4 h-4" />
                          Dashboard
                        </Link>
                        
                        <button
                          onClick={() => signOut({ callbackUrl: "/" })}
                          className="flex items-center gap-2 w-full text-left px-4 py-2.5 text-sm text-red-600 dark:text-red-400 hover:bg-red-50/50 dark:hover:bg-red-950/10 font-medium transition-colors"
                        >
                          <LogOut className="w-4 h-4" />
                          Sign Out
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Link
                    href="/login"
                    className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-brand-blue-deep dark:hover:text-brand-blue-steel transition-colors px-3 py-1.5"
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="btn-primary py-2 px-4.5 text-sm rounded-lg"
                  >
                    Sign Up
                  </Link>
                </div>
              )}

              {/* Primary CTA */}
              <Link
                href="/apply"
                className="btn-accent py-2 px-5 text-sm rounded-lg font-bold uppercase tracking-wider scale-95 hover:scale-100"
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="flex items-center gap-3 lg:hidden">
              <Link
                href="/apply"
                className="btn-accent py-1.5 px-3.5 text-xs rounded-lg font-bold uppercase tracking-wide"
              >
                Apply
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Drawer Menu for Mobile viewports */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        session={session}
      />
    </>
  );
}
