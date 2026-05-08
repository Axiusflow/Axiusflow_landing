"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Component as Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { siteUrl } from "@/lib/seo";

type ChangelogTag = "Feature Release" | "Improvements" | "Bug Fix" | "Update";

interface ChangelogEntry {
  id: string;
  tag: ChangelogTag;
  date: string;
  isoDate: string;
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

const changelogEntries: ChangelogEntry[] = [
  {
    id: "personalized-ai-reviews",
    tag: "Feature Release",
    date: "May 1, 2026",
    isoDate: "2026-05-01",
    title: "Personalized AI Trade Reviews",
    description:
      "Axiusflow's AI now learns from your imported trades, tags, notes, and behavior to surface recurring mistakes, repeat strengths, and personalized review prompts. Reviews adapt to your trading style instead of giving generic feedback.",
  },
  {
    id: "premium-ui-refresh",
    tag: "Improvements",
    date: "Apr 22, 2026",
    isoDate: "2026-04-22",
    title: "Premium Workspace UI Refresh",
    description:
      "A calmer, more modern UI across the journal, imports, and analytics screens. Cleaner typography, refined spacing, and better dark-mode contrast for long review sessions.",
  },
  {
    id: "broker-sync-workspace",
    tag: "Feature Release",
    date: "Apr 15, 2026",
    isoDate: "2026-04-15",
    title: "Broker Sync Workspace",
    description:
      "Review imported trades, connected accounts, and journal notes inside one browser-based workspace. Cleaner path from broker data to post-trade review without trying to be a charting terminal.",
  },
  {
    id: "advanced-analytics",
    tag: "Improvements",
    date: "Apr 10, 2026",
    isoDate: "2026-04-10",
    title: "Advanced Trading Journal Analytics",
    description:
      "Deeper analytics across the trading journal — track performance metrics, identify behavior patterns, and surface actionable insights to improve your strategy.",
  },
  {
    id: "broker-import-foundation",
    tag: "Feature Release",
    date: "Apr 1, 2026",
    isoDate: "2026-04-01",
    title: "Broker Import Foundation",
    description:
      "Import trade history into one unified dashboard, review positions in context, and analyze performance across multiple sources. Honest scope: imports first, broker auto sync expanding deliberately.",
  },
  {
    id: "performance-optimizations",
    tag: "Bug Fix",
    date: "Mar 20, 2026",
    isoDate: "2026-03-20",
    title: "Performance Optimizations",
    description:
      "Fixed several performance issues affecting journal loading, chart rendering, and data synchronization. The workspace is faster and more responsive across devices.",
  },
];

export default function ChangelogPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Changelog", item: `${siteUrl}/changelog` },
    ],
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: changelogEntries.map((entry, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "BlogPosting",
        headline: entry.title,
        description: entry.description,
        datePublished: entry.isoDate,
        author: { "@type": "Person", name: "Devraj" },
        publisher: { "@type": "Organization", name: "Axiusflow", url: siteUrl },
        url: `${siteUrl}/changelog#${entry.id}`,
      },
    })),
  };

  return (
    <div className="min-h-screen af-page-bg transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd).replace(/</g, "\\u003c") }}
      />

      <Header />

      <main className="px-6 pb-24">
        <div className="mx-auto max-w-[1000px]">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-16 pb-16 text-center lg:pt-24 lg:pb-20"
          >
            <h1 className="font-display text-[clamp(40px,6vw,64px)] font-semibold leading-[1.1] tracking-[-0.03em] af-text-primary">
              Axiusflow Changelog
            </h1>
            <p className="mt-4 text-[18px] leading-[1.7] af-text-secondary">
              Trading journal, personalized AI, broker imports, and premium analytics — every update.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-[154px] top-0 bottom-0 hidden w-px bg-[#F5F5F5] dark:bg-[#171717] lg:block" />

            {changelogEntries.map((entry, index) => (
              <motion.article
                key={entry.id}
                id={entry.id}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative grid grid-cols-1 gap-6 pb-20 last:pb-0 lg:grid-cols-[140px_1fr] lg:gap-16 scroll-mt-24"
              >
                <div className="flex flex-col items-start gap-2">
                  <span
                    className={`inline-flex whitespace-nowrap rounded-[8px] px-3 py-1 text-[13px] font-medium ${tagColors[entry.tag].bg} ${tagColors[entry.tag].text}`}
                  >
                    {entry.tag}
                  </span>
                  <time dateTime={entry.isoDate} className="text-[14px] af-text-secondary">
                    {entry.date}
                  </time>
                </div>

                <div className="space-y-6">
                  <div className="overflow-hidden rounded-lg bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-neutral-800 dark:via-neutral-850 dark:to-neutral-900">
                    <div className="flex min-h-[400px] flex-col items-start justify-between p-8 lg:min-h-[450px] lg:p-10">
                      <div className="flex items-center gap-2">
                        <Image
                          src="/logo.svg"
                          alt="Axiusflow"
                          width={20}
                          height={20}
                          className="h-5 w-5"
                        />
                        <span className="text-[14px] font-medium af-text-primary">
                          Axiusflow
                        </span>
                      </div>

                      <div className="flex-1 flex flex-col justify-center py-8 w-full">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                          <div className="max-w-[360px] space-y-4">
                            <h2 className="font-display text-[26px] font-bold leading-tight tracking-[-0.02em] af-text-primary lg:text-[32px]">
                              {entry.title}
                            </h2>
                            <p className="text-[14px] leading-relaxed af-text-secondary">
                              {entry.description.slice(0, 100)}...
                            </p>
                          </div>

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

                      <div className="text-[12px] af-text-secondary">
                        www.axiusflow.com
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <h3 className="font-display text-[22px] font-semibold tracking-[-0.02em] af-text-primary lg:text-[26px]">
                      {entry.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-[1.8] af-text-secondary">
                      {entry.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-24 text-center"
          >
            <p className="text-[16px] af-text-secondary">
              Want to be first to know about new releases?
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

      <Footer />
    </div>
  );
}
