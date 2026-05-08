"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Component as Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { siteUrl } from "@/lib/seo";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Story", item: `${siteUrl}/story` },
  ],
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: `${siteUrl}/story`,
  name: "Our Story — Axiusflow",
  about: {
    "@type": "Organization",
    name: "Axiusflow",
    url: siteUrl,
    founder: { "@type": "Person", name: "Devraj" },
  },
};

export default function StoryPage() {
  return (
    <div className="min-h-screen af-page-bg transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd).replace(/</g, "\\u003c") }}
      />

      <Header />

      <main className="px-6 pb-24">
        <article className="mx-auto max-w-[720px]">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-16 pb-12 text-center lg:pt-24 lg:pb-16"
          >
            <span className="mb-4 inline-block text-[13px] font-medium uppercase tracking-widest af-text-secondary">
              Our Story
            </span>
            <h1 className="font-display text-[clamp(36px,5vw,56px)] font-semibold leading-[1.1] tracking-[-0.03em] af-text-primary">
              Building a Modern Trading Journal Active Traders Actually Want
            </h1>
            <p className="mt-6 text-[18px] leading-[1.7] af-text-secondary">
              A solo founder&apos;s journey to build a premium trading journal with personalized AI — designed for the way serious traders actually review.
            </p>
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16 flex flex-col items-center gap-4"
          >
            <div className="relative h-20 w-20 overflow-hidden rounded-full ring-1 ring-black/5 dark:ring-white/10">
              <Image
                src="/founder.jpg"
                alt="Devraj, founder of Axiusflow"
                fill
                sizes="80px"
                className="object-cover"
                priority
              />
            </div>
            <div className="text-center">
              <p className="font-display text-[18px] font-semibold af-text-primary">Devraj</p>
              <p className="text-[14px] af-text-secondary">Founder &amp; Developer</p>
            </div>
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose-content space-y-8"
          >
            <section>
              <h2 className="font-display mb-4 text-[24px] font-semibold tracking-[-0.02em] af-text-primary">
                The Vision
              </h2>
              <p className="text-[16px] leading-[1.8] af-text-secondary">
                Hi, I&apos;m Devraj — the founder of Axiusflow. At 19, I set out to fix a problem every serious trader faces: the trading journal market is full of dated, cluttered tools. Spreadsheet exports, ugly dashboards, weak AI, and review workflows that feel bolted-on.
              </p>
              <p className="mt-4 text-[16px] leading-[1.8] af-text-secondary">
                Axiusflow is the answer — a <strong className="af-text-primary font-medium">modern, premium trading journal</strong> with personalized AI that learns from your own trading history. One workspace, one calm UI, one serious review workflow.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-4 text-[24px] font-semibold tracking-[-0.02em] af-text-primary">
                What We&apos;re Building
              </h2>
              <p className="text-[16px] leading-[1.8] af-text-secondary">
                Axiusflow is a focused review product that brings together:
              </p>
              <ul className="mt-4 space-y-3 text-[16px] leading-[1.8] af-text-secondary">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span><strong className="af-text-primary font-medium">Personalized AI</strong> — Trained on your imported trades, tags, and notes. No generic advice.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span><strong className="af-text-primary font-medium">Premium UI</strong> — A modern, calm workspace that feels designed, not assembled.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span><strong className="af-text-primary font-medium">Broker imports &amp; auto sync</strong> — Bring CSV history and supported broker connections into one journal.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span><strong className="af-text-primary font-medium">Premium analytics</strong> — Win rate, R-multiple, expectancy, behavior tags, and custom report layouts.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display mb-4 text-[24px] font-semibold tracking-[-0.02em] af-text-primary">
                The Promise
              </h2>
              <p className="text-[16px] leading-[1.8] af-text-secondary">
                I started Axiusflow solo, with one priority: <strong className="af-text-primary font-medium">premium experience and smooth operation</strong>. Every feature, every interaction, every pixel is designed for the trader. As we scale, that bar only goes up.
              </p>
              <p className="mt-4 text-[16px] leading-[1.8] af-text-secondary">
                More features, deeper AI, more integrations, better performance — all without losing the clean, intuitive workspace that traders deserve.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-4 text-[24px] font-semibold tracking-[-0.02em] af-text-primary">
                A Note on Honesty
              </h2>
              <p className="text-[16px] leading-[1.8] af-text-secondary">
                Most trading journals over-promise: every broker live, every feature shipped, replay everywhere. Reality looks different. Reliable broker connectivity takes real engineering, dependable APIs, and ongoing maintenance.
              </p>
              <p className="mt-4 text-[16px] leading-[1.8] af-text-secondary">
                The Axiusflow rule: <strong className="af-text-primary font-medium">we ship what works, and we&apos;re upfront about what doesn&apos;t exist yet</strong>. Trade replay, for example, is on the long-term roadmap — it isn&apos;t live today, and we won&apos;t pretend it is.
              </p>
            </section>

            <section className="rounded-xl border border-border af-surface-muted-bg p-8">
              <h2 className="font-display mb-4 text-[24px] font-semibold tracking-[-0.02em] af-text-primary">
                Join the Journey
              </h2>
              <p className="text-[16px] leading-[1.8] af-text-secondary">
                Axiusflow is just getting started. Whether you&apos;re a day trader, futures trader, prop firm trader, or crypto trader — this is being built for you.
              </p>
              <p className="mt-4 text-[16px] leading-[1.8] af-text-secondary">
                Thank you for believing in what we&apos;re creating. Together, we&apos;re going to change how serious traders review their trades.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="text-[14px] af-text-secondary">—</span>
                <span className="font-display text-[16px] font-medium af-text-primary">Devraj, Founder of Axiusflow</span>
              </div>
            </section>
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-[8px] px-6 py-3 text-[15px] font-medium af-header-cta transition-colors"
            >
              See Pricing
            </Link>
          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
