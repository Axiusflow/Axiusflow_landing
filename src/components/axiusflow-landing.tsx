"use client";

import { ArrowRight, Moon, Sun, Layers } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
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
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
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
        </div>
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
                  April 15: Agents are now available in Slack
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-display mx-auto max-w-[980px] text-[clamp(42px,4.7vw,68px)] font-medium leading-[0.98] tracking-[-0.035em] af-text-primary transition-colors"
              >
                The AI Sourcing and Outbound<br />Platform Built for Your Hardest Roles
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mx-auto mt-6 max-w-[640px] text-[18px] leading-[1.5] af-text-secondary transition-colors"
              >
                Axiusflow lets you source in natural language, engage<br />candidates at scale, and interview with intelligence.
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
                    <ArrowRight className="h-4 w-4" />
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

        {/* Logo Cloud outside the wrapper, on pure white page background */}
        <section className="af-page-bg pb-24 pt-8 transition-colors duration-300 lg:pt-10">
          <div className="mx-auto max-w-[1000px] px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-12 opacity-80 mix-blend-multiply dark:opacity-60 dark:mix-blend-normal">
              <span className="font-display text-[26px] font-bold tracking-tight af-text-primary transition-colors">chime</span>
              
              <span className="font-display flex items-center gap-1.5 text-[20px] font-bold tracking-widest af-text-primary transition-colors">
                <span className="block h-4 w-4 af-bg-text-primary transition-colors" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
                GRADIENT
              </span>
              
              <span className="font-display text-[22px] font-bold tracking-widest af-text-primary transition-colors">ALTERRA</span>
              
              <span className="font-display text-[28px] font-semibold af-text-primary transition-colors">Pear</span>
              
              <div className="flex flex-col items-center justify-center leading-none af-text-primary transition-colors">
                <span className="font-display text-[20px] font-bold uppercase tracking-wide">Menlo</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.2em]">Ventures</span>
              </div>
              
              <span className="font-display text-[32px] font-black tracking-tighter af-text-primary transition-colors">KOS</span>
              
              <span className="font-display text-[22px] font-bold tracking-tight af-text-primary transition-colors">Coral Care</span>
              
              <span className="font-display text-[20px] font-bold tracking-wider af-text-primary transition-colors">STELLIC</span>
            </div>
          </div>
        </section>

        <section className="af-page-bg pb-16 pt-6 transition-colors duration-300 lg:pb-24 lg:pt-16">
          <div className="mx-auto max-w-[1240px] px-6">
            {/* Centered Header */}
            <div className="mb-12 text-center lg:mb-16">
              <div className="mb-4 inline-flex items-center gap-2 rounded-[8px] border border-gray-200/80 bg-gray-50/80 px-4 py-1.5 dark:border-white/10 dark:bg-white/5">
                <Layers className="h-4 w-4 af-text-secondary" />
                <span className="text-[13px] font-medium af-text-secondary">
                  One Stop Solution
                </span>
              </div>
              <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-semibold leading-[1.1] tracking-[-0.02em] af-text-primary">
                Why Axiusflow?
              </h2>
              <p className="mx-auto mt-4 max-w-[680px] text-[16px] leading-[1.6] af-text-secondary">
                Whether you run a one-person studio or a large company with hundreds of staff, 
                Axiusflow is designed to help you source, engage, and hire through an 
                easy-to-setup intelligent platform.
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
