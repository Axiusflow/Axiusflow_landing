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
  const heroImageSrc =
    mounted && resolvedTheme === "dark" ? "/hero_dark.png" : "/hero_light.png";

  return (
    <div className="min-h-screen af-page-bg transition-colors duration-300">
      {/* Header */}
      <header className="relative z-50 af-page-bg transition-colors duration-300">
        <div className="bg-gray-50/80 dark:bg-white/[0.03]">
          <div className="mx-auto flex w-full max-w-[1240px] items-center justify-center gap-2 px-6 py-2.5 text-center text-[13px] leading-[1.4] sm:text-[14px]">
            <span className="font-medium af-text-primary">
              Axiusflow Pro is live.
            </span>
            <span className="af-text-secondary">
              One serious plan with personalized AI, imports, and premium analytics.
            </span>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1 font-medium af-text-primary transition-opacity hover:opacity-70"
            >
              See pricing
              <HugeiconsIcon icon={ArrowRight01Icon} className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
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

            <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
              <Link href="/pricing" className="rounded-[8px] px-3 py-2 text-[15px] font-medium af-text-primary transition-colors af-nav-hover">
                Pricing
              </Link>
              <Link href="/changelog" className="rounded-[8px] px-3 py-2 text-[15px] font-medium af-text-primary transition-colors af-nav-hover">
                Changelog
              </Link>
              <Link href="/story" className="rounded-[8px] px-3 py-2 text-[15px] font-medium af-text-primary transition-colors af-nav-hover">
                Story
              </Link>
              <Link href="/vs/tradezella" className="rounded-[8px] px-3 py-2 text-[15px] font-medium af-text-primary transition-colors af-nav-hover">
                vs Tradezella
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
            <Link href="https://app.axiusflow.com/login" className="rounded-[8px] px-4 py-1.5 text-[15px] font-medium af-header-cta transition-colors">
              Login
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
              <nav className="mx-auto max-w-[1240px] px-6 py-4" aria-label="Mobile">
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
                  <Link
                    href="/vs/tradezella"
                    className="rounded-[8px] px-3 py-2.5 text-[15px] font-medium af-text-primary transition-colors af-nav-hover"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    vs Tradezella
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
                    href="https://app.axiusflow.com/login"
                    className="mt-2 rounded-[8px] px-4 py-2.5 text-center text-[15px] font-medium af-header-cta transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="px-[8px] md:px-[10px]">
        <div className="relative isolate mx-auto w-full max-w-[1740px]">

          {/* Hero */}
          <section className="relative z-10 pt-14 pb-[84px] lg:pt-[70px] lg:pb-[128px]" aria-labelledby="hero-heading">
            <div className="mx-auto max-w-[1260px] px-6 text-center">

              <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.18em] af-text-secondary">
                The Modern Trading Journal
              </p>

              <h1
                id="hero-heading"
                className="font-display mx-auto max-w-[920px] text-[clamp(36px,4.4vw,64px)] font-medium leading-[1.02] tracking-[-0.03em] af-text-primary transition-colors"
              >
                The Smart Trading Journal with Personalized AI
              </h1>

              <p className="mx-auto mt-6 max-w-[520px] text-[16px] leading-[1.6] af-text-secondary transition-colors">
                AI that learns from your trades. Clean broker imports. A workspace built for serious review.
              </p>

              {/* Primary CTA + secondary */}
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="https://app.axiusflow.com/pricing?checkout=pro"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-[15px] font-medium text-white transition-opacity hover:opacity-90"
                  style={{ backgroundImage: "linear-gradient(135deg, var(--brand-gradient-start), var(--brand-gradient-middle), var(--brand-gradient-end))" }}
                >
                  Get Axiusflow Pro
                  <HugeiconsIcon icon={ArrowRight01Icon} className="h-4 w-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/10 bg-transparent px-7 text-[15px] font-medium af-text-primary transition-colors hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/5"
                >
                  See pricing
                </Link>
              </div>

              <p className="mt-4 text-[13px] af-text-secondary">
                One simple plan. $20/month or $192/year. No free tier.
              </p>
            </div>

            {/* Hero Image */}
            <div className="mx-auto mt-14 max-w-[1380px] px-4 sm:px-6">
              <div className="overflow-hidden rounded-[10px]">
                <Image
                  src={heroImageSrc}
                  alt="Axiusflow trading journal dashboard with personalized AI insights, broker imports, and premium analytics"
                  width={1600}
                  height={900}
                  priority
                  fetchPriority="high"
                  className="h-auto w-full"
                />
              </div>
            </div>

            <div className="mx-auto mt-14 grid max-w-[1040px] grid-cols-1 gap-8 px-6 text-left md:grid-cols-3">
              <div>
                <h2 className="font-display text-[20px] font-semibold af-text-primary">
                  Personalized AI built around your trading
                </h2>
                <p className="mt-3 text-[15px] leading-[1.7] af-text-secondary">
                  Axiusflow&apos;s AI studies your imported trades, tags, and notes to surface recurring mistakes, repeat strengths, and personalized review prompts that match how you actually trade.
                </p>
              </div>
              <div>
                <h2 className="font-display text-[20px] font-semibold af-text-primary">
                  Premium UI without the trading-app clutter
                </h2>
                <p className="mt-3 text-[15px] leading-[1.7] af-text-secondary">
                  A modern, calm workspace built for review — not another loud dashboard. Every screen is designed so journaling, imports, and analytics feel premium and effortless.
                </p>
              </div>
              <div>
                <h2 className="font-display text-[20px] font-semibold af-text-primary">
                  Multi-broker imports with deliberate auto sync
                </h2>
                <p className="mt-3 text-[15px] leading-[1.7] af-text-secondary">
                  Start with CSV imports and supported broker auto sync. Coverage expands transparently — only when an integration genuinely improves your review workflow.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Logo Cloud - Trusted Integrations */}
        <section className="af-page-bg pb-24 pt-8 transition-colors duration-300 lg:pt-10" aria-labelledby="brokers-heading">
          <div className="mx-auto max-w-[1000px] px-6">
            <h2 id="brokers-heading" className="mb-8 text-center text-[14px] font-medium uppercase tracking-wider af-text-secondary">
              Built around the brokers and exchanges active traders already use
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
              {[
                { src: "/broker_logo/Ibkr.png", name: "Interactive Brokers" },
                { src: "/broker_logo/td_ameritrade.png", name: "TD Ameritrade" },
                { src: "/broker_logo/charles_shwab.png", name: "Charles Schwab" },
                { src: "/broker_logo/e_trade.png", name: "E*TRADE" },
                { src: "/broker_logo/robinhood.png", name: "Robinhood" },
                { src: "/broker_logo/webull.png", name: "Webull" },
                { src: "/broker_logo/tradestation.png", name: "TradeStation" },
                { src: "/broker_logo/ninjatrader.png", name: "NinjaTrader" },
                { src: "/broker_logo/tradovate.png", name: "Tradovate" },
                { src: "/broker_logo/amp_futures.png", name: "AMP Futures" },
                { src: "/broker_logo/coinbase.png", name: "Coinbase" },
                { src: "/broker_logo/binance.png", name: "Binance" },
                { src: "/broker_logo/kraken.png", name: "Kraken" },
                { src: "/broker_logo/mt_5.png", name: "MetaTrader 5" },
                { src: "/broker_logo/c_trader.png", name: "cTrader" },
                { src: "/broker_logo/oanda.png", name: "OANDA" },
                { src: "/broker_logo/tradingview.png", name: "TradingView" },
              ].map((b) => (
                <Image
                  key={b.src}
                  src={b.src}
                  alt={`${b.name} trading journal integration`}
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:invert dark:hover:invert-0"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="af-page-bg pb-16 pt-6 transition-colors duration-300 lg:pb-24 lg:pt-16" aria-labelledby="features-heading">
          <div className="mx-auto max-w-[1240px] px-6">
              <div className="mb-12 text-center lg:mb-16">
                <div className="mb-4 inline-flex items-center gap-2 rounded-[8px] border border-gray-200/80 bg-gray-50/80 px-4 py-1.5 dark:border-white/10 dark:bg-white/5">
                  <HugeiconsIcon icon={Layers01Icon} className="h-4 w-4 af-text-secondary" />
                  <span className="text-[13px] font-medium af-text-secondary">
                    Smart Journal
                  </span>
              </div>
              <h2 id="features-heading" className="font-display text-[clamp(28px,3.5vw,44px)] font-semibold leading-[1.1] tracking-[-0.02em] af-text-primary">
                Everything serious traders need to journal, import, and review
              </h2>
              <p className="mx-auto mt-4 max-w-[680px] text-[16px] leading-[1.6] af-text-secondary">
                Day trades, swing setups, crypto sessions, futures, and prop firm flow — Axiusflow connects executions, notes, risk, and personalized AI insights inside one premium workspace.
              </p>
            </div>

            <BentoDemo />
          </div>
        </section>

        {/* Who it's for - persona links for SEO */}
        <section className="af-page-bg pb-16 transition-colors duration-300 lg:pb-24" aria-labelledby="personas-heading">
          <div className="mx-auto max-w-[1080px] px-6">
            <div className="mb-10 text-center">
              <h2 id="personas-heading" className="font-display text-[clamp(26px,3vw,36px)] font-semibold leading-[1.15] tracking-[-0.02em] af-text-primary">
                Built for the way you actually trade
              </h2>
              <p className="mx-auto mt-3 max-w-[560px] text-[15px] leading-[1.6] af-text-secondary">
                Axiusflow adapts to your style with personalized AI, broker imports, and premium analytics tailored to your market and timeframe.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { href: "/for/day-traders", title: "Day Traders", desc: "A focused day trading journal for scalpers, momentum, and intraday traders." },
                { href: "/for/futures-traders", title: "Futures Traders", desc: "Futures trading journal for ES, NQ, MES, MNQ, and prop firm contracts." },
                { href: "/for/prop-firm-traders", title: "Prop Firm Traders", desc: "Prop firm trading journal for FTMO, Topstep, MyForexFunds, and challenges." },
                { href: "/integrations/interactive-brokers", title: "Interactive Brokers", desc: "Trading journal with Interactive Brokers (IBKR) trade imports." },
                { href: "/integrations/ninjatrader", title: "NinjaTrader", desc: "Trading journal with NinjaTrader trade imports for futures." },
                { href: "/integrations/tradestation", title: "TradeStation", desc: "Trading journal with TradeStation trade imports." },
              ].map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="group rounded-2xl border border-border af-surface-bg p-5 transition-colors hover:af-surface-muted-bg"
                >
                  <p className="font-display text-[17px] font-semibold af-text-primary">{p.title}</p>
                  <p className="mt-2 text-[14px] leading-[1.6] af-text-secondary">{p.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-[13px] font-medium af-text-primary opacity-80 group-hover:opacity-100">
                    Explore
                    <HugeiconsIcon icon={ArrowRight01Icon} className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="af-page-bg pb-20 transition-colors duration-300 lg:pb-28" aria-labelledby="final-cta-heading">
          <div className="mx-auto max-w-[820px] px-6 text-center">
            <h2 id="final-cta-heading" className="font-display text-[clamp(28px,3.5vw,42px)] font-semibold leading-[1.1] tracking-[-0.02em] af-text-primary">
              Ready for a premium trading journal that actually understands your trades?
            </h2>
            <p className="mx-auto mt-4 max-w-[560px] text-[16px] leading-[1.65] af-text-secondary">
              One serious plan. Personalized AI, broker imports, supported auto sync, and analytics in a clean workspace built for active traders.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="https://app.axiusflow.com/pricing?checkout=pro"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-[15px] font-medium text-white transition-opacity hover:opacity-90"
                style={{ backgroundImage: "linear-gradient(135deg, var(--brand-gradient-start), var(--brand-gradient-middle), var(--brand-gradient-end))" }}
              >
                Get Axiusflow Pro
                <HugeiconsIcon icon={ArrowRight01Icon} className="h-4 w-4" />
              </Link>
              <Link
                href="/vs/tradezella"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/10 bg-transparent px-7 text-[15px] font-medium af-text-primary transition-colors hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/5"
              >
                Compare to Tradezella
              </Link>
            </div>
          </div>
        </section>

        <FAQSection />

        <Footer />
      </main>
    </div>
  );
}
