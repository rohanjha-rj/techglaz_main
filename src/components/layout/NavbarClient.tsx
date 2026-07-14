"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
            ? "bg-slate-800/95 backdrop-blur-lg py-3 shadow-2xl border-b border-white/10"
            : "bg-transparent py-5"
        }`}
      >
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-20">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                <Image src="/logo.png" alt="Techglaz Labs" width={48} height={48} className="object-contain" style={{ width: 'auto', height: 'auto' }} />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-[20px] font-black text-white tracking-widest leading-none uppercase drop-shadow-md">
                  Techglaz
                </span>
                <span className="text-[12px] font-bold text-brand-blue-steel tracking-[0.25em] mt-1">
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
                        className={`flex items-center gap-1.5 text-[15px] font-bold transition-colors cursor-pointer ${
                          isActive
                            ? "text-[#fbbf24] drop-shadow-sm"
                            : "text-slate-200 hover:text-[#fbbf24]"
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
                              className={`block px-4 py-2.5 text-[15px] font-semibold transition-colors ${
                                isChildActive
                                  ? "bg-brand-blue-light/50 text-brand-blue-deep dark:bg-slate-800 dark:text-brand-blue-steel"
                                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-brand-blue-deep dark:hover:text-[#fbbf24]"
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
                    className={`text-[15px] font-bold transition-colors relative pb-1 ${
                      isActive
                        ? "text-[#fbbf24]"
                        : "text-slate-200 hover:text-[#fbbf24]"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-[#fbbf24] rounded-full shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
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
                <div className="flex items-center gap-4">
                  <Link
                    href="/login"
                    className="text-[15px] font-bold text-slate-200 hover:text-[#fbbf24] transition-colors px-2 py-1.5"
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="bg-[#0c1524] hover:bg-[#132035] border border-slate-700/50 text-white py-2.5 px-6 text-[15px] font-bold rounded-full transition-colors shadow-sm"
                  >
                    Sign Up
                  </Link>
                </div>
              )}

              {/* Primary CTA */}
              <Link
                href="/apply"
                className="bg-[#fbbf24] hover:bg-[#f59e0b] text-slate-900 shadow-md py-2.5 px-7 text-[15px] rounded-full font-extrabold uppercase tracking-widest transition-transform hover:-translate-y-0.5"
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="flex items-center gap-3 lg:hidden">
              <Link
                href="/apply"
                className="bg-[#fbbf24] hover:bg-[#f59e0b] shadow-md text-slate-900 py-1.5 px-4 text-xs rounded-full font-extrabold uppercase tracking-widest"
              >
                Apply
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 text-slate-200 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
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
