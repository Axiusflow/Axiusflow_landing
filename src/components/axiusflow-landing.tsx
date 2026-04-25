"use client";

import { useState, type FormEvent } from "react";
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
import { BentoDemo } from "@/components/bento-demo";
import { FAQSection } from "@/components/faq-section";
import { Component as Footer } from "@/components/footer";

function subscribe() {
  return () => {};
}

export function AxiusflowLandingPage() {
  const { resolvedTheme, theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submissionState, setSubmissionState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [submissionMessage, setSubmissionMessage] = useState("");
  const heroImageSrc =
    mounted && resolvedTheme === "dark" ? "/hero_dark.png" : "/hero_light.png";

  async function submitWaitlist(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) {
      setSubmissionState("error");
      setSubmissionMessage("Enter your email.");
      return;
    }

    setSubmissionState("submitting");
    setSubmissionMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "Could not submit.");
      }

      setSubmissionState("success");
      setSubmissionMessage("You're on the list.");
      setEmail("");
    } catch (error) {
      setSubmissionState("error");
      setSubmissionMessage(
        error instanceof Error ? error.message : "Could not submit.",
      );
    }
  }

  return (
    <div className="min-h-screen af-page-bg transition-colors duration-300">
      {/* Header - Pure White, No Color */}
      <header className="relative z-50 af-page-bg transition-colors duration-300">
        <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between px-6 py-5">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
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
            <Link href="/contact" className="rounded-[8px] px-3 py-2 text-[15px] font-medium af-text-primary transition-colors af-nav-hover">
              Contact
            </Link>
            <Link href="/#waitlist" className="rounded-[8px] px-4 py-1.5 text-[15px] font-medium af-header-cta transition-colors">
              Join Waitlist
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
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.16, ease: "easeOut" }}
              className="absolute inset-x-0 top-full border-t border-gray-200/50 af-page-bg shadow-lg dark:border-white/10 md:hidden"
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
                  <Link 
                    href="/#waitlist"
                    className="mt-2 rounded-[8px] px-4 py-2.5 text-center text-[15px] font-medium af-header-cta transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Join Waitlist
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
              <div className="mb-7 inline-flex items-center gap-2 rounded-[8px] border border-gray-200/80 bg-white/85 px-4 py-1.5 dark:border-white/10 dark:bg-white/5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="af-text-secondary transition-colors">
                  <path d="M3 11l18-5v12L3 14v-3z" />
                  <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                </svg>
                <span className="text-[14px] font-medium af-text-secondary transition-colors">
                  Live crypto charts, journal, replay, and AI trade reviews
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-display mx-auto max-w-[980px] text-[clamp(42px,4.7vw,68px)] font-medium leading-[0.98] tracking-[-0.035em] af-text-primary transition-colors">
                Trading Journal, Replay & AI Review<br />Built for Serious Traders
              </h1>

              {/* Subheadline */}
              <p className="mx-auto mt-6 max-w-[640px] text-[18px] leading-[1.5] af-text-secondary transition-colors">
                Axiusflow combines live crypto charting, trade journaling, broker imports, replay, and AI-powered session reviews so active traders can improve without stitching together five tools.
              </p>

              {/* Waitlist form */}
              <div className="mt-8 flex justify-center">
                <form
                  id="waitlist"
                  onSubmit={submitWaitlist}
                  className="mx-auto flex w-full max-w-[520px] flex-col gap-3 sm:flex-row"
                >
                  <label htmlFor="waitlist-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="waitlist-email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    className="min-h-12 flex-1 rounded-full border border-gray-200/90 bg-white/90 px-5 text-[15px] text-neutral-950 outline-none transition-colors placeholder:text-neutral-400 focus:border-neutral-400 dark:border-white/10 dark:bg-white/7 dark:text-white dark:placeholder:text-white/35 dark:focus:border-white/35"
                  />
                  <button
                    type="submit"
                    disabled={submissionState === "submitting"}
                    className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 text-[15px] font-medium text-white transition-colors hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
                  >
                    {submissionState === "submitting" ? "Submitting" : "Join"}
                    <HugeiconsIcon icon={ArrowRight01Icon} className="h-4 w-4" />
                  </button>
                </form>
              </div>
              {submissionMessage ? (
                <p
                  className={`mt-3 text-[14px] ${
                    submissionState === "error"
                      ? "text-red-600 dark:text-red-400"
                      : "af-text-secondary"
                  }`}
                  role="status"
                >
                  {submissionMessage}
                </p>
              ) : null}
            </div>

            {/* Hero Image */}
            <div className="mx-auto mt-14 max-w-[1380px] px-4 sm:px-6">
              <div className="overflow-hidden rounded-[10px]">
                <Image
                  src={heroImageSrc}
                  alt="Axiusflow trading journal, live crypto charting, trade replay, and AI review dashboard"
                  width={1600}
                  height={900}
                  priority
                  className="h-auto w-full"
                />
              </div>
            </div>

            <div className="mx-auto mt-14 grid max-w-[1040px] grid-cols-1 gap-8 px-6 text-left md:grid-cols-3">
              <div>
                <h2 className="font-display text-[20px] font-semibold af-text-primary">
                  A TradingView alternative for review, not just charts
                </h2>
                <p className="mt-3 text-[15px] leading-[1.7] af-text-secondary">
                  Keep chart context, journal notes, mistakes, screenshots, and replay inside one workflow instead of spreading your process across separate apps.
                </p>
              </div>
              <div>
                <h2 className="font-display text-[20px] font-semibold af-text-primary">
                  AI trading journal for post-session decisions
                </h2>
                <p className="mt-3 text-[15px] leading-[1.7] af-text-secondary">
                  Review entries, exits, risk, tags, and recurring behavior with AI assistance built around your own trading history.
                </p>
              </div>
              <div>
                <h2 className="font-display text-[20px] font-semibold af-text-primary">
                  Crypto-first data, broker workflows next
                </h2>
                <p className="mt-3 text-[15px] leading-[1.7] af-text-secondary">
                  Start with live crypto charting and imports while the platform expands broker sync and licensed exchange feeds transparently.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Logo Cloud - Trusted Integrations */}
        <section className="af-page-bg pb-24 pt-8 transition-colors duration-300 lg:pt-10">
          <div className="mx-auto max-w-[1000px] px-6">
            <h2 className="mb-8 text-center text-[14px] font-medium uppercase tracking-wider af-text-secondary">
              Built around broker, exchange, and charting workflows traders already use
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
                    Trading OS
                  </span>
              </div>
              <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-semibold leading-[1.1] tracking-[-0.02em] af-text-primary">
                Trading Journal, Replay, and Analytics in One Workspace
              </h2>
              <p className="mx-auto mt-4 max-w-[680px] text-[16px] leading-[1.6] af-text-secondary">
                Whether you&apos;re reviewing day trades, swing setups, crypto sessions, or imported broker history,
                Axiusflow helps you connect chart context to decisions, outcomes, risk, and repeatable lessons.
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
