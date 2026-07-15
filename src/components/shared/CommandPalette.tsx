"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, ArrowRight, X, FileText, Settings, LayoutDashboard, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


interface CommandPaletteProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function CommandPalette({ isOpen: externalIsOpen, onClose: externalOnClose }: CommandPaletteProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Sync state if open status is controlled from parent (e.g. Navbar click)
  useEffect(() => {
    if (externalIsOpen !== undefined) {
      setIsOpen(externalIsOpen);
    }
  }, [externalIsOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setQuery("");
    setSelectedIndex(0);
    if (externalOnClose) {
      externalOnClose();
    }
  };

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const items = [
    { id: "home", title: "Home Page", category: "Navigation", href: "/", icon: <Sparkles className="w-4 h-4" /> },
    { id: "trainings", title: "Training Catalog", category: "Navigation", href: "/trainings", icon: <FileText className="w-4 h-4" /> },
    { id: "apply", title: "Trainee Enrollment Application", category: "Navigation", href: "/apply", icon: <FileText className="w-4 h-4" /> },
    { id: "placements", title: "Placement Records", category: "Navigation", href: "/placements", icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: "r-and-d", title: "Research & Development Projects", category: "Navigation", href: "/r-and-d", icon: <Settings className="w-4 h-4" /> },
    { id: "about", title: "About Techglaz", category: "Navigation", href: "/about", icon: <Settings className="w-4 h-4" /> },
    { id: "contact", title: "Contact Us", category: "Navigation", href: "/contact", icon: <Settings className="w-4 h-4" /> },
    { id: "dashboard", title: "Trainee Dashboard", category: "Navigation", href: "/dashboard", icon: <LayoutDashboard className="w-4 h-4" /> },
  ];


  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (index: number) => {
    const item = filteredItems[index];
    if (!item) return;

    if (item.action) {
      item.action();
    } else if (item.href) {
      router.push(item.href);
      handleClose();
    }
  };

  // Keyboard navigation inside list
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
    } else if (e.key === "Enter") {
      e.preventDefault();
      handleSelect(selectedIndex);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[12vh]">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            className="relative w-full max-w-lg mx-4 bg-slate-900 border border-slate-800/80 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col"
          >
            {/* Input Header */}
            <div className="flex items-center gap-3 px-4.5 border-b border-slate-850">
              <Search className="w-5 h-5 text-slate-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Type a command or search..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDown}
                className="w-full py-4 text-sm bg-transparent outline-none text-slate-100 placeholder-slate-400"
              />
              <button
                onClick={handleClose}
                className="p-1 text-slate-400 hover:text-slate-250 transition-colors"
                aria-label="Close command palette"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* List Results */}
            <div className="max-h-[340px] overflow-y-auto p-2">
              {filteredItems.length === 0 ? (
                <div className="py-8 text-center text-xs text-slate-450">
                  No commands or pages found.
                </div>
              ) : (
                <div className="space-y-1">
                  {filteredItems.map((item, idx) => {
                    const isSelected = selectedIndex === idx;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleSelect(idx)}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`w-full flex items-center justify-between p-3 rounded-2xl text-left text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? "bg-slate-800 text-[#fbbf24]"
                            : "text-slate-400 hover:bg-slate-850/50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`${isSelected ? "text-brand-blue-steel" : "text-slate-400"}`}>
                            {item.icon}
                          </span>
                          <span>{item.title}</span>
                          <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold px-1.5 py-0.5 rounded bg-slate-850 border border-slate-200/20">
                            {item.category}
                          </span>
                        </div>
                        {isSelected && (
                          <ArrowRight className="w-4 h-4 animate-pulse shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Help Footer */}
            <div className="px-4.5 py-3 border-t border-slate-850 bg-slate-950/40 text-[10px] text-slate-450 font-medium flex justify-between items-center">
              <div className="flex gap-4">
                <span><kbd className="px-1 py-0.5 rounded border border-slate-700 bg-slate-800 shadow-sm mr-1">↑↓</kbd> Navigate</span>
                <span><kbd className="px-1 py-0.5 rounded border border-slate-700 bg-slate-800 shadow-sm mr-1">Enter</kbd> Select</span>
              </div>
              <div>
                <span>Press <kbd className="px-1 py-0.5 rounded border border-slate-700 bg-slate-800 shadow-sm">Esc</kbd> to close</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
