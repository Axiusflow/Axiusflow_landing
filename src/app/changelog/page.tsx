"use client";

import { Moon, Sun, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Component as Footer } from "@/components/footer";

function subscribe() {
  return () => {};
}

type ChangelogTag = "Feature Release" | "Improvements" | "Bug Fix" | "Update";

interface ChangelogEntry {
  id: string;
  tag: ChangelogTag;
  date: string;
  image?: string;
  title: string;
  description: string;
}

const tagColors: Record<ChangelogTag, { bg: string; text: string }> = {
  "Feature Release": {
    bg: "bg-amber-100 dark:bg-amber-900/30",
    text: "text-amber-800 dark:text-amber-300",
  },
  "Improvements": {
    bg: "bg-blue-100 dark:bg-blue-900/30",
    text: "text-blue-800 dark:text-blue-300",
  },
  "Bug Fix": {
    bg: "bg-red-100 dark:bg-red-900/30",
    text: "text-red-800 dark:text-red-300",
  },
  "Update": {
    bg: "bg-green-100 dark:bg-green-900/30",
    text: "text-green-800 dark:text-green-300",
  },
};

// Sample changelog data - replace with your actual entries
const changelogEntries: ChangelogEntry[] = [
  {
    id: "1",
    tag: "Feature Release",
    date: "Apr 15, 2026",
    title: "Cloud-Native Charting Now Available",
    description:
      "Access professional-grade charts from anywhere, on any device. Our cloud-native charting solution brings institutional-quality tools to traders of all levels with real-time synchronization across all your devices.",
  },
  {
    id: "2",
    tag: "Improvements",
    date: "Apr 10, 2026",
    title: "Enhanced Trading Journal Analytics",
    description:
      "We've upgraded our trading journal with deeper analytics capabilities. Track your performance metrics, identify patterns in your trading behavior, and gain actionable insights to improve your strategy.",
  },
  {
    id: "3",
    tag: "Feature Release",
    date: "Apr 1, 2026",
    title: "Multi-Broker Connectivity",
    description:
      "Connect your favorite brokers and manage everything from one unified dashboard. Execute trades, view positions, and analyze performance across all your accounts in a single interface.",
  },
  {
    id: "4",
    tag: "Update",
    date: "Mar 25, 2026",
    title: "Trade Replay Feature Launch",
    description:
      "Review your trades in context with full market replay capabilities. Step through historical market data, analyze your entries and exits, and learn from every position you take.",
  },
  {
    id: "5",
    tag: "Bug Fix",
    date: "Mar 20, 2026",
    title: "Performance Optimizations",
    description:
      "Fixed several performance issues affecting chart loading times and data synchronization. The platform is now faster and more responsive across all devices.",
  },
];

export default function ChangelogPage() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  return (
    <div className="min-h-screen af-page-bg transition-colors duration-300">
      {/* Header */}
      <header className="relative z-50 af-page-bg transition-colors duration-300">
        <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between px-6 py-5">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/brand/logo.svg"
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
          
          <div className="flex items-center gap-4">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex h-9 w-9 items-center justify-center rounded-[8px] af-text-secondary transition-colors af-nav-hover"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>
            )}
            <Link 
              href="/" 
              className="flex items-center gap-2 rounded-[8px] px-3 py-2 text-[15px] font-medium af-text-primary transition-colors af-nav-hover"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>
          </div>
        </div>
      </header>

      <main className="px-6 pb-24">
        <div className="mx-auto max-w-[1000px]">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-16 pb-16 text-center lg:pt-24 lg:pb-20"
          >
            <h1 className="font-display text-[clamp(40px,6vw,64px)] font-semibold leading-[1.1] tracking-[-0.03em] af-text-primary">
              Changelog
            </h1>
            <p className="mt-4 text-[18px] leading-[1.7] af-text-secondary">
              Discover the Latest Features and Enhancements
            </p>
          </motion.div>

          {/* Changelog Entries with Timeline */}
          <div className="relative">
            {/* Main timeline line - visible on lg screens */}
            <div className="absolute left-[154px] top-0 bottom-0 hidden w-px bg-[#F5F5F5] dark:bg-[#171717] lg:block" />
            
            {changelogEntries.map((entry, index) => (
              <motion.article
                key={entry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative grid grid-cols-1 gap-6 pb-20 last:pb-0 lg:grid-cols-[140px_1fr] lg:gap-16"
              >
                {/* Left column - Tag and Date */}
                <div className="flex flex-col items-start gap-2">
                  <span
                    className={`inline-flex whitespace-nowrap rounded-[8px] px-3 py-1 text-[13px] font-medium ${tagColors[entry.tag].bg} ${tagColors[entry.tag].text}`}
                  >
                    {entry.tag}
                  </span>
                  <span className="text-[14px] af-text-secondary">
                    {entry.date}
                  </span>
                </div>

                {/* Right column - Content */}
                <div className="space-y-6">
                  {/* Image card */}
                  <div className="overflow-hidden rounded-lg bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-neutral-800 dark:via-neutral-850 dark:to-neutral-900">
                    <div className="flex min-h-[400px] flex-col items-start justify-between p-8 lg:min-h-[450px] lg:p-10">
                      {/* Top section - Logo */}
                      <div className="flex items-center gap-2">
                        <Image
                          src="/brand/logo.svg"
                          alt="Axiusflow"
                          width={20}
                          height={20}
                          className="h-5 w-5"
                        />
                        <span className="text-[14px] font-medium af-text-primary">
                          Axiusflow
                        </span>
                      </div>
                      
                      {/* Middle section - Feature content */}
                      <div className="flex-1 flex flex-col justify-center py-8 w-full">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                          {/* Left side - Title and description */}
                          <div className="max-w-[360px] space-y-4">
                            <h3 className="font-display text-[26px] font-bold leading-tight tracking-[-0.02em] af-text-primary lg:text-[32px]">
                              {entry.title}
                            </h3>
                            <p className="text-[14px] leading-relaxed af-text-secondary">
                              {entry.description.slice(0, 100)}...
                            </p>
                          </div>

                          {/* Right side - Decorative UI mockup */}
                          <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2 rounded-md bg-white/70 dark:bg-neutral-700/50 px-4 py-3 border border-white/50 dark:border-neutral-600/50">
                              <div className="h-8 w-8 rounded bg-blue-100 dark:bg-blue-900/40" />
                              <div className="space-y-1">
                                <div className="h-2 w-20 rounded-sm bg-neutral-200 dark:bg-neutral-600" />
                                <div className="h-2 w-14 rounded-sm bg-neutral-100 dark:bg-neutral-700" />
                              </div>
                            </div>
                            <div className="flex items-center gap-2 rounded-md bg-white/70 dark:bg-neutral-700/50 px-4 py-3 border border-white/50 dark:border-neutral-600/50">
                              <div className="h-8 w-8 rounded bg-green-100 dark:bg-green-900/40" />
                              <div className="space-y-1">
                                <div className="h-2 w-24 rounded-sm bg-neutral-200 dark:bg-neutral-600" />
                                <div className="h-2 w-16 rounded-sm bg-neutral-100 dark:bg-neutral-700" />
                              </div>
                            </div>
                            <div className="flex items-center gap-2 rounded-md bg-white/70 dark:bg-neutral-700/50 px-4 py-3 border border-white/50 dark:border-neutral-600/50">
                              <div className="h-8 w-8 rounded bg-purple-100 dark:bg-purple-900/40" />
                              <div className="space-y-1">
                                <div className="h-2 w-16 rounded-sm bg-neutral-200 dark:bg-neutral-600" />
                                <div className="h-2 w-20 rounded-sm bg-neutral-100 dark:bg-neutral-700" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom section - URL */}
                      <div className="text-[12px] af-text-secondary">
                        www.axiusflow.com
                      </div>
                    </div>
                  </div>

                  {/* Title and Description below card */}
                  <div className="pt-2">
                    <h2 className="font-display text-[22px] font-semibold tracking-[-0.02em] af-text-primary lg:text-[26px]">
                      {entry.title}
                    </h2>
                    <p className="mt-3 text-[15px] leading-[1.8] af-text-secondary">
                      {entry.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-24 text-center"
          >
            <p className="text-[16px] af-text-secondary">
              Want to stay updated on the latest changes?
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-[8px] px-6 py-3 text-[15px] font-medium af-header-cta transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
