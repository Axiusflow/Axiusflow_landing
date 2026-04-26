"use client";

import { useState } from "react";
import {
  ArrowLeft01Icon,
  Cancel01Icon,
  Menu01Icon,
  Moon02Icon,
  Sun01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

interface HeaderProps {
  variant?: "full" | "simple";
  showGetStarted?: boolean;
}

export function Header({ variant = "full", showGetStarted = true }: HeaderProps) {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Simple header variant (for sub-pages like pricing, story, legal pages)
  if (variant === "simple") {
    return (
      <header className="relative z-50 af-page-bg transition-colors duration-300">
        <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between px-6 py-5">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="Axiusflow logo"
                width={24}
                height={24}
                className="h-6 w-6"
                priority
              />
              <span className="font-display text-[19px] font-semibold af-text-primary">
                Axiusflow
              </span>
            </Link>
          </div>

          {/* Desktop */}
          <div className="hidden items-center gap-4 md:flex">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex h-9 w-9 items-center justify-center rounded-[8px] af-text-secondary transition-colors af-nav-hover"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <HugeiconsIcon icon={Sun01Icon} className="h-4 w-4" />
                ) : (
                  <HugeiconsIcon icon={Moon02Icon} className="h-4 w-4" />
                )}
              </button>
            )}
            <Link
              href="/"
              className="flex items-center gap-2 rounded-[8px] px-3 py-2 text-[15px] font-medium af-text-primary transition-colors af-nav-hover"
            >
              <HugeiconsIcon icon={ArrowLeft01Icon} className="h-4 w-4" />
              Back
            </Link>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-3 md:hidden">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex h-9 w-9 items-center justify-center rounded-[8px] af-text-secondary transition-colors af-nav-hover"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <HugeiconsIcon icon={Sun01Icon} className="h-4 w-4" />
                ) : (
                  <HugeiconsIcon icon={Moon02Icon} className="h-4 w-4" />
                )}
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-[8px] af-text-primary transition-colors af-nav-hover"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <HugeiconsIcon icon={Cancel01Icon} className="h-5 w-5" />
                ) : (
                  <HugeiconsIcon icon={Menu01Icon} className="h-5 w-5" />
                )}
              </button>
          </div>
        </div>

        {/* Mobile menu for simple variant */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="border-t border-gray-200/50 dark:border-white/10 md:hidden"
            >
              <nav className="mx-auto max-w-[1240px] px-6 py-4">
                <div className="flex flex-col gap-1">
                  <Link
                    href="/"
                    className="flex items-center gap-2 rounded-[8px] px-3 py-2.5 text-[15px] font-medium af-text-primary transition-colors af-nav-hover"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <HugeiconsIcon icon={ArrowLeft01Icon} className="h-4 w-4" />
                    Back to Home
                  </Link>
                  <div className="my-2 border-t border-gray-200/50 dark:border-white/10" />
                  <Link
                    href="/pricing"
                    className="rounded-[8px] px-3 py-2.5 text-[15px] font-medium af-text-primary transition-colors af-nav-hover"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/changelog"
                    className="rounded-[8px] px-3 py-2.5 text-[15px] font-medium af-text-primary transition-colors af-nav-hover"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Changelog
                  </Link>
                  <Link
                    href="/story"
                    className="rounded-[8px] px-3 py-2.5 text-[15px] font-medium af-text-primary transition-colors af-nav-hover"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Story
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    );
  }

  // Full header variant (for landing page)
  return (
    <header className="relative z-50 af-page-bg transition-colors duration-300">
      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between px-6 py-5">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Axiusflow logo"
              width={24}
              height={24}
              className="h-6 w-6"
              priority
            />
            <span className="font-display text-[19px] font-semibold af-text-primary">
              Axiusflow
            </span>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            <Link href="/pricing" className="rounded-[8px] px-3 py-2 text-[15px] font-medium af-text-primary transition-colors af-nav-hover">
              Pricing
            </Link>
            <Link href="/changelog" className="rounded-[8px] px-3 py-2 text-[15px] font-medium af-text-primary transition-colors af-nav-hover">
              Changelog
            </Link>
            <Link href="/story" className="rounded-[8px] px-3 py-2 text-[15px] font-medium af-text-primary transition-colors af-nav-hover">
              Story
            </Link>
          </nav>
        </div>
        
        <div className="hidden items-center gap-4 md:flex">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-9 w-9 items-center justify-center rounded-[8px] af-text-secondary transition-colors af-nav-hover"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <HugeiconsIcon icon={Sun01Icon} className="h-4 w-4" />
                ) : (
                  <HugeiconsIcon icon={Moon02Icon} className="h-4 w-4" />
                )}
              </button>
            )}
          <Link href="/contact" className="rounded-[8px] px-3 py-2 text-[15px] font-medium af-text-primary transition-colors af-nav-hover">
            Contact
          </Link>
          {showGetStarted && (
            <Link href="https://app.axiusflow.com/login" className="rounded-[8px] px-4 py-1.5 text-[15px] font-medium af-header-cta transition-colors">
              Login
            </Link>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-3 md:hidden">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-9 w-9 items-center justify-center rounded-[8px] af-text-secondary transition-colors af-nav-hover"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <HugeiconsIcon icon={Sun01Icon} className="h-4 w-4" />
              ) : (
                <HugeiconsIcon icon={Moon02Icon} className="h-4 w-4" />
              )}
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-[8px] af-text-primary transition-colors af-nav-hover"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <HugeiconsIcon icon={Cancel01Icon} className="h-5 w-5" />
              ) : (
                <HugeiconsIcon icon={Menu01Icon} className="h-5 w-5" />
              )}
            </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-gray-200/50 dark:border-white/10 md:hidden"
          >
            <nav className="mx-auto max-w-[1240px] px-6 py-4">
              <div className="flex flex-col gap-1">
                <Link 
                  href="/pricing" 
                  className="rounded-[8px] px-3 py-2.5 text-[15px] font-medium af-text-primary transition-colors af-nav-hover"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link 
                  href="/changelog" 
                  className="rounded-[8px] px-3 py-2.5 text-[15px] font-medium af-text-primary transition-colors af-nav-hover"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Changelog
                </Link>
                <Link 
                  href="/story" 
                  className="rounded-[8px] px-3 py-2.5 text-[15px] font-medium af-text-primary transition-colors af-nav-hover"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Story
                </Link>
                <div className="my-2 border-t border-gray-200/50 dark:border-white/10" />
                <Link 
                  href="/contact"
                  className="rounded-[8px] px-3 py-2.5 text-[15px] font-medium af-text-primary transition-colors af-nav-hover"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                {showGetStarted && (
                  <Link 
                    href="https://app.axiusflow.com/login"
                    className="mt-2 rounded-[8px] px-4 py-2.5 text-center text-[15px] font-medium af-header-cta transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                )}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
