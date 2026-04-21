"use client";

import { useState } from "react";
import {
  ArrowRight01Icon,
  Cancel01Icon,
  Layers01Icon,
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
import { NoiseBackground } from "@/components/ui/noise-background";
import { BentoDemo } from "@/components/bento-demo";
import { FAQSection } from "@/components/faq-section";
import { Component as Footer } from "@/components/footer";

function subscribe() {
  return () => {};
}

export function AxiusflowLandingPage() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen af-page-bg transition-colors duration-300">
      {/* Header - Pure White, No Color */}
      <header className="relative z-50 af-page-bg transition-colors duration-300">
        <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between px-6 py-5">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
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
            </div>

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
            <Link href="#" className="rounded-[8px] px-3 py-2 text-[15px] font-medium af-text-primary transition-colors af-nav-hover">
              Sign in
            </Link>
            <Link href="#" className="rounded-[8px] px-4 py-1.5 text-[15px] font-medium af-header-cta transition-colors">
              Get Started
            </Link>
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
                    href="#" 
                    className="rounded-[8px] px-3 py-2.5 text-[15px] font-medium af-text-primary transition-colors af-nav-hover"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign in
                  </Link>
                  <Link 
                    href="#" 
                    className="mt-2 rounded-[8px] px-4 py-2.5 text-center text-[15px] font-medium af-header-cta transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="px-[8px] md:px-[10px]">
        {/* The Hero Container */}
        <div className="relative isolate mx-auto w-full max-w-[1740px]">
          
          {/* Hero Content */}
          <section className="relative z-10 pt-14 pb-[84px] lg:pt-[70px] lg:pb-[128px]">
            <div className="mx-auto max-w-[1260px] px-6 text-center">
              
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-7 inline-flex items-center gap-2 rounded-[8px] border border-gray-200/80 bg-white/85 px-4 py-1.5 backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="af-text-secondary transition-colors">
                  <path d="M3 11l18-5v12L3 14v-3z" />
                  <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                </svg>
                <span className="text-[14px] font-medium af-text-secondary transition-colors">
                  New: Real-time data from 50+ global exchanges
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-display mx-auto max-w-[980px] text-[clamp(42px,4.7vw,68px)] font-medium leading-[0.98] tracking-[-0.035em] af-text-primary transition-colors"
              >
                Advanced Charting & Trading Analytics<br />Built for Serious Traders
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mx-auto mt-6 max-w-[640px] text-[18px] leading-[1.5] af-text-secondary transition-colors"
              >
                Axiusflow delivers real-time market data, professional charting tools, in-depth technical analysis, and seamless broker integrations—all in one high-performance cloud platform.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 flex justify-center"
              >
                <NoiseBackground
                  containerClassName="w-fit p-2 rounded-full mx-auto"
                  gradientColors={[
                    "rgb(255, 100, 150)",
                    "rgb(100, 150, 255)",
                    "rgb(255, 200, 100)",
                  ]}
                >
                  <Link
                    href="#"
                    className="inline-flex h-full w-full cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-neutral-100 via-neutral-100 to-white px-6 py-2.5 text-[16px] font-medium text-black shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-[0.98] dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)]"
                  >
                    Get Started
                    <HugeiconsIcon icon={ArrowRight01Icon} className="h-4 w-4" />
                  </Link>
                </NoiseBackground>
              </motion.div>
            </div>

            {/* Hero Image */}
            <div className="mx-auto mt-14 max-w-[1380px] px-4 sm:px-6">
              <div className="overflow-hidden rounded-[10px]">
                <Image
                  src="/hero_image.png"
                  alt="Axiusflow platform hero preview"
                  width={1600}
                  height={900}
                  priority
                  className="h-auto w-full"
                />
              </div>
            </div>
          </section>
        </div>

        {/* Logo Cloud - Trusted Integrations */}
        <section className="af-page-bg pb-24 pt-8 transition-colors duration-300 lg:pt-10">
          <div className="mx-auto max-w-[1000px] px-6">
            <h2 className="mb-8 text-center text-[14px] font-medium uppercase tracking-wider af-text-secondary">
              Trusted integrations with leading brokers & trading platforms
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
              <Image src="/broker_logo/tradingview.png" alt="TradingView" width={120} height={40} className="h-8 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:invert dark:hover:invert-0" />
              <Image src="/broker_logo/Ibkr.png" alt="Interactive Brokers" width={120} height={40} className="h-8 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:invert dark:hover:invert-0" />
              <Image src="/broker_logo/td_ameritrade.png" alt="TD Ameritrade" width={120} height={40} className="h-8 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:invert dark:hover:invert-0" />
              <Image src="/broker_logo/robinhood.png" alt="Robinhood" width={120} height={40} className="h-8 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:invert dark:hover:invert-0" />
              <Image src="/broker_logo/coinbase.png" alt="Coinbase" width={120} height={40} className="h-8 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:invert dark:hover:invert-0" />
              <Image src="/broker_logo/webull.png" alt="Webull" width={120} height={40} className="h-8 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:invert dark:hover:invert-0" />
              <Image src="/broker_logo/tradestation.png" alt="TradeStation" width={120} height={40} className="h-8 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:invert dark:hover:invert-0" />
              <Image src="/broker_logo/ninjatrader.png" alt="NinjaTrader" width={120} height={40} className="h-8 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:invert dark:hover:invert-0" />
            </div>
          </div>
        </section>

        <section className="af-page-bg pb-16 pt-6 transition-colors duration-300 lg:pb-24 lg:pt-16">
          <div className="mx-auto max-w-[1240px] px-6">
              {/* Centered Header */}
              <div className="mb-12 text-center lg:mb-16">
                <div className="mb-4 inline-flex items-center gap-2 rounded-[8px] border border-gray-200/80 bg-gray-50/80 px-4 py-1.5 dark:border-white/10 dark:bg-white/5">
                  <HugeiconsIcon icon={Layers01Icon} className="h-4 w-4 af-text-secondary" />
                  <span className="text-[13px] font-medium af-text-secondary">
                    One Stop Solution
                  </span>
              </div>
              <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-semibold leading-[1.1] tracking-[-0.02em] af-text-primary">
                Why Choose Axiusflow for Trading?
              </h2>
              <p className="mx-auto mt-4 max-w-[680px] text-[16px] leading-[1.6] af-text-secondary">
                Whether you&apos;re a day trader analyzing tick data, a swing trader looking for setups, or a long-term investor, 
                Axiusflow provides the professional-grade charting tools to analyze markets, execute 
                trades, and seamlessly manage your trading journal with confidence.
              </p>
            </div>

            <BentoDemo />
          </div>
        </section>

        <FAQSection />

        <Footer />
      </main>
    </div>
  );
}
