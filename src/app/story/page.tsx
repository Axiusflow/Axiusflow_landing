"use client";

import { Moon, Sun, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

export default function StoryPage() {
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
        <article className="mx-auto max-w-[720px]">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-16 pb-12 text-center lg:pt-24 lg:pb-16"
          >
            <span className="mb-4 inline-block text-[13px] font-medium uppercase tracking-widest af-text-secondary">
              Our Story
            </span>
            <h1 className="font-display text-[clamp(36px,5vw,56px)] font-semibold leading-[1.1] tracking-[-0.03em] af-text-primary">
              Building the Future of Trading
            </h1>
            <p className="mt-6 text-[18px] leading-[1.7] af-text-secondary">
              A solo founder's journey to create the centralized trading operating system that traders deserve.
            </p>
          </motion.div>

          {/* Founder Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16 flex flex-col items-center gap-4"
          >
            <div className="h-20 w-20 rounded-full af-bg-text-primary flex items-center justify-center">
              <span className="text-2xl font-semibold af-text-on-dark dark:af-text-on-light">D</span>
            </div>
            <div className="text-center">
              <p className="font-display text-[18px] font-semibold af-text-primary">Devraj</p>
              <p className="text-[14px] af-text-secondary">Founder & Developer</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose-content space-y-8"
          >
            {/* The Vision */}
            <section>
              <h2 className="font-display mb-4 text-[24px] font-semibold tracking-[-0.02em] af-text-primary">
                The Vision
              </h2>
              <p className="text-[16px] leading-[1.8] af-text-secondary">
                Hi, I'm Devraj — the founder of Axiusflow. At 19 years old, I set out to solve a problem that 
                every serious trader faces: the fragmentation of trading tools. Charting on one platform, 
                journaling on another, broker connections scattered everywhere. It's chaos that costs traders 
                time, money, and mental clarity.
              </p>
              <p className="mt-4 text-[16px] leading-[1.8] af-text-secondary">
                Axiusflow was born from a simple yet ambitious idea — to build a <strong className="af-text-primary font-medium">centralized 
                trading operating system</strong> where you can chart, journal, connect brokers, and execute trades, 
                all in one seamless environment. No more tab-switching. No more scattered data. Just one 
                unified platform designed for the way traders actually work.
              </p>
            </section>

            {/* What We're Building */}
            <section>
              <h2 className="font-display mb-4 text-[24px] font-semibold tracking-[-0.02em] af-text-primary">
                What We're Building
              </h2>
              <p className="text-[16px] leading-[1.8] af-text-secondary">
                Axiusflow is more than just another trading tool. It's a complete ecosystem that brings together:
              </p>
              <ul className="mt-4 space-y-3 text-[16px] leading-[1.8] af-text-secondary">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span><strong className="af-text-primary font-medium">Cloud-Native Charting</strong> — Professional-grade charts accessible from anywhere, on any device.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span><strong className="af-text-primary font-medium">Integrated Trading Journal</strong> — Automatic trade logging with deep analytics to help you learn from every position.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span><strong className="af-text-primary font-medium">Multi-Broker Connectivity</strong> — Connect your favorite brokers and manage everything from one dashboard.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span><strong className="af-text-primary font-medium">Trade Replay</strong> — Review your trades in context, with full market replay capabilities.</span>
                </li>
              </ul>
            </section>

            {/* Our Promise */}
            <section>
              <h2 className="font-display mb-4 text-[24px] font-semibold tracking-[-0.02em] af-text-primary">
                Our Promise
              </h2>
              <p className="text-[16px] leading-[1.8] af-text-secondary">
                I started Axiusflow solo, and I'm building it with one unwavering priority: <strong className="af-text-primary font-medium">smooth 
                operation and exceptional user experience</strong>. Every feature, every interaction, every pixel is 
                designed with the trader in mind. As we scale, this commitment only grows stronger.
              </p>
              <p className="mt-4 text-[16px] leading-[1.8] af-text-secondary">
                My promise to you is simple: as Axiusflow grows, things will only get better. More features, 
                more integrations, better performance — all while maintaining the clean, intuitive experience 
                that traders deserve. This isn't just a product; it's a long-term commitment to the trading community.
              </p>
            </section>

            {/* A Note on Market Data */}
            <section>
              <h2 className="font-display mb-4 text-[24px] font-semibold tracking-[-0.02em] af-text-primary">
                A Note on Market Data
              </h2>
              <p className="text-[16px] leading-[1.8] af-text-secondary">
                Transparency matters. Right now, licensing market data from exchanges like CME comes with 
                substantial costs that are challenging for an early-stage platform. We're being honest about 
                this because you deserve to know.
              </p>
              <p className="mt-4 text-[16px] leading-[1.8] af-text-secondary">
                Here's our commitment: <strong className="af-text-primary font-medium">as soon as it becomes financially viable, we will secure 
                the proper licenses</strong> to provide you with the highest quality, real-time market data available. 
                Until then, we're working with the best data sources we can access while building a foundation 
                that will support premium data feeds in the future.
              </p>
            </section>

            {/* Join the Journey */}
            <section className="rounded-xl border border-border af-surface-muted-bg p-8">
              <h2 className="font-display mb-4 text-[24px] font-semibold tracking-[-0.02em] af-text-primary">
                Join the Journey
              </h2>
              <p className="text-[16px] leading-[1.8] af-text-secondary">
                Axiusflow is just getting started, and I'd love for you to be part of this journey. Whether 
                you're a day trader, swing trader, or long-term investor, we're building this for you.
              </p>
              <p className="mt-4 text-[16px] leading-[1.8] af-text-secondary">
                Thank you for believing in what we're creating. Together, we're going to change how traders work.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="text-[14px] af-text-secondary">—</span>
                <span className="font-display text-[16px] font-medium af-text-primary">Devraj, Founder of Axiusflow</span>
              </div>
            </section>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-[8px] px-6 py-3 text-[15px] font-medium af-header-cta transition-colors"
            >
              Explore Axiusflow
            </Link>
          </motion.div>
        </article>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-[720px] px-6 text-center">
          <p className="text-[14px] af-text-secondary">
            © {new Date().getFullYear()} Axiusflow. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
