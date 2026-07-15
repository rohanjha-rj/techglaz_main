"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown, LogOut, LayoutDashboard, Search, Sun, Moon } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import MobileMenu from "./MobileMenu";
import { signOut } from "next-auth/react";
import { useTheme } from "@/components/shared/ThemeProvider";

interface NavbarClientProps {
  session: any;
}

export default function NavbarClient({ session }: NavbarClientProps) {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
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
    }, 260);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    setActiveDropdown(null);
    setIsProfileDropdownOpen(false);
  }, [pathname]);

  const openCommandPalette = () => {
    const event = new KeyboardEvent("keydown", {
      key: "k",
      ctrlKey: true,
      bubbles: true,
      cancelable: true,
    });
    window.dispatchEvent(event);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "border-b border-slate-200/70 bg-white/80 py-2.5 shadow-[0_8px_30px_-20px_rgba(15,23,42,0.24)] backdrop-blur-2xl dark:border-slate-800/70 dark:bg-slate-950/80"
            : "bg-transparent py-4"
        }`}
      >
        <div className="mx-auto w-full max-w-[1920px] px-4 sm:px-8 lg:px-12 xl:px-20">
          <div className="flex w-full items-center justify-between rounded-full border border-transparent px-2 py-2 transition-all duration-300">
            <Link href="/" className="flex shrink-0 items-center gap-3 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/70 bg-white/70 shadow-sm transition-transform duration-300 group-hover:scale-105 dark:border-slate-800/70 dark:bg-slate-900/70">
                <Image
                  src="/logo.png"
                  alt="Techglaz Labs Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-[17px] font-black uppercase tracking-[0.22em] text-slate-900 leading-none dark:text-white">
                  Techglaz
                </span>
                <span className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-blue-steel leading-none">
                  Labs
                </span>
              </div>
            </Link>

            <nav className="hidden items-center gap-6 lg:flex">
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
                        className={`flex items-center gap-1 text-sm font-semibold transition-colors cursor-pointer ${
                          isActive
                            ? "text-brand-blue-deep dark:text-[#fbbf24]"
                            : "text-slate-650 hover:text-brand-blue-deep dark:text-slate-350 dark:hover:text-[#fbbf24]"
                        }`}
                        aria-expanded={activeDropdown === link.label}
                      >
                        <span>{link.label}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-250 ${activeDropdown === link.label ? "rotate-180" : ""}`} />
                      </button>

                      <div
                        className={`absolute left-0 mt-3 w-56 origin-top-left rounded-[1.25rem] border border-slate-200/70 bg-white/95 p-2 shadow-[0_16px_40px_-18px_rgba(15,23,42,0.18),0_8px_20px_-10px_rgba(15,23,42,0.08)] transition-all duration-200 dark:border-slate-800/80 dark:bg-slate-900/95 ${
                          activeDropdown === link.label ? "scale-100 opacity-100 pointer-events-auto" : "pointer-events-none scale-95 opacity-0"
                        }`}
                      >
                        {link.children?.map((child) => {
                          const isChildActive = pathname === child.href || pathname.includes(child.href);
                          return (
                            <Link
                              key={child.label}
                              href={child.href}
                              className={`block rounded-xl px-4 py-2.5 text-xs font-semibold transition-colors sm:text-sm ${
                                isChildActive
                                  ? "bg-brand-blue-light/70 text-brand-blue-deep dark:bg-slate-800 dark:text-brand-blue-steel"
                                  : "text-slate-650 hover:bg-slate-50 hover:text-brand-blue-deep dark:text-slate-400 dark:hover:bg-slate-850/50 dark:hover:text-[#fbbf24]"
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
                    className={`relative pb-1 text-sm font-semibold transition-colors ${
                      isActive
                        ? "text-brand-blue-deep dark:text-[#fbbf24]"
                        : "text-slate-650 hover:text-brand-blue-deep dark:text-slate-350 dark:hover:text-[#fbbf24]"
                    }`}
                  >
                    {link.label}
                    {isActive && <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-brand-blue-deep shadow-[0_0_8px_rgba(43,120,198,0.28)] dark:bg-[#fbbf24]" />}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <button
                onClick={openCommandPalette}
                className="flex items-center gap-2 rounded-full border border-slate-200/70 bg-slate-50/70 px-3 py-1.5 text-xs font-semibold text-slate-500 transition-colors hover:text-slate-700 dark:border-slate-800/80 dark:bg-slate-900/70 dark:text-slate-400 dark:hover:text-slate-200"
                title="Open Search Overlay (Ctrl+K)"
              >
                <Search className="h-3.5 w-3.5" />
                <span>Search</span>
                <kbd className="rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[9px] shadow-sm dark:border-slate-700 dark:bg-slate-800">Ctrl K</kbd>
              </button>

              <button
                onClick={toggleTheme}
                className="rounded-full border border-slate-200/70 bg-white/70 p-2 text-slate-500 transition-all hover:text-brand-blue-steel dark:border-slate-800/80 dark:bg-slate-900/70 dark:text-slate-400 dark:hover:text-[#fbbf24]"
                aria-label="Toggle theme mode"
              >
                {theme === "light" ? <Moon className="h-4.5 w-4.5" /> : <Sun className="h-4.5 w-4.5" />}
              </button>

              {session ? (
                <div className="relative">
                  <button
                    onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                    className="flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 p-1 transition-colors hover:bg-slate-100 dark:border-slate-800/80 dark:bg-slate-900/70 dark:hover:bg-slate-800/80"
                    aria-label="User menu"
                  >
                    {session.user?.image ? (
                      <img src={session.user.image} alt={session.user.name || "User"} className="h-7 w-7 rounded-full border border-brand-blue-deep/10 object-cover" />
                    ) : (
                      <div className="flex h-7 w-7 items-center justify-center rounded-full border border-brand-blue-deep/10 bg-brand-blue-light text-xs font-bold text-brand-blue-deep dark:bg-slate-800 dark:text-brand-blue-steel">
                        {session.user?.name?.charAt(0).toUpperCase() || "U"}
                      </div>
                    )}
                    <span className="mr-1 max-w-[100px] truncate text-xs font-semibold text-slate-650 dark:text-slate-350">{session.user?.name}</span>
                    <ChevronDown className="mr-1 h-3.5 w-3.5 text-slate-450" />
                  </button>

                  {isProfileDropdownOpen && (
                    <>
                      <div className="fixed inset-0 z-30" onClick={() => setIsProfileDropdownOpen(false)} />
                      <div className="absolute right-0 z-40 mt-2 w-52 rounded-[1.25rem] border border-slate-200/70 bg-white py-2 shadow-[0_16px_40px_-18px_rgba(15,23,42,0.18),0_8px_20px_-10px_rgba(15,23,42,0.08)] dark:border-slate-800/80 dark:bg-slate-900">
                        <div className="border-b border-slate-100 px-4 py-2 dark:border-slate-850">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Role: {session.user?.role || "student"}</p>
                          <p className="mt-0.5 truncate text-xs text-slate-500">{session.user?.email}</p>
                        </div>

                        <Link href="/dashboard" className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-650 transition-colors hover:bg-slate-50 hover:text-brand-blue-deep dark:text-slate-350 dark:hover:bg-slate-850/50 dark:hover:text-brand-blue-steel sm:text-sm">
                          <LayoutDashboard className="h-4 w-4" />
                          Dashboard
                        </Link>

                        <button onClick={() => signOut({ callbackUrl: "/" })} className="flex w-full items-center gap-2 px-4 py-2 text-left text-xs font-semibold text-red-600 transition-colors hover:bg-red-50/60 dark:text-red-400 dark:hover:bg-red-950/10 sm:text-sm">
                          <LogOut className="h-4 w-4" />
                          Sign Out
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Link href="/login" className="px-2 py-1.5 text-sm font-semibold text-slate-650 transition-colors hover:text-brand-blue-deep dark:text-slate-300 dark:hover:text-[#fbbf24]">Login</Link>
                  <Link href="/signup" className="rounded-full border border-slate-200/70 bg-slate-900 px-4.5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-slate-800 dark:border-slate-700/50 dark:bg-slate-800 dark:hover:bg-slate-700/80">Sign Up</Link>
                </div>
              )}

              <Link href="/apply" className="rounded-full bg-brand-accent px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-900 shadow-[0_10px_24px_-12px_rgba(245,184,79,0.4)] transition-transform hover:-translate-y-0.5">Apply Now</Link>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <button onClick={openCommandPalette} className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800/80 dark:hover:text-slate-200" aria-label="Open Search Palette">
                <Search className="h-4.5 w-4.5" />
              </button>

              <button onClick={toggleTheme} className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800/80 dark:hover:text-slate-200" aria-label="Toggle theme">
                {theme === "light" ? <Moon className="h-4.5 w-4.5" /> : <Sun className="h-4.5 w-4.5" />}
              </button>

              <button onClick={() => setIsMobileMenuOpen(true)} className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800/80 dark:hover:text-slate-200" aria-label="Open menu">
                <Menu className="h-5.5 w-5.5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} session={session} />
    </>
  );
}

