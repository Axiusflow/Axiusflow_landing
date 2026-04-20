"use client";

import { Moon, Sun, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Component as Footer } from "@/components/footer";

function subscribe() {
  return () => {};
}

const plans = [
  { name: "Basic", cta: "Get started", ctaLink: "#", highlight: false },
  { name: "Pro", cta: "Get started", ctaLink: "#", highlight: true },
  { name: "Premium", cta: "Get started", ctaLink: "#", highlight: false },
  { name: "Enterprise", cta: "Talk to us", ctaLink: "#", highlight: false },
];

type FeatureValue = boolean | string;

interface Feature {
  name: string;
  values: [FeatureValue, FeatureValue, FeatureValue, FeatureValue];
}

interface FeatureCategory {
  category: string;
  features: Feature[];
}

const featureCategories: FeatureCategory[] = [
  {
    category: "Trading Tools",
    features: [
      { name: "Advanced Charting", values: [true, true, true, true] },
      { name: "Chart Layouts", values: ["1", "4", "8", "Unlimited"] },
      { name: "Drawing Tools", values: ["Basic", "Full", "Full", "Full"] },
      { name: "Indicators", values: ["20+", "50+", "100+", "Custom"] },
      { name: "Watchlists", values: ["1", "5", "Unlimited", "Unlimited"] },
      { name: "Price Alerts", values: ["5", "25", "Unlimited", "Unlimited"] },
    ],
  },
  {
    category: "Trade Execution",
    features: [
      { name: "One-Click Trading", values: [true, true, true, true] },
      { name: "Broker Connections", values: ["1", "3", "5", "Unlimited"] },
      { name: "Order Types", values: ["Basic", "Advanced", "Advanced", "Custom"] },
      { name: "Paper Trading", values: [true, true, true, true] },
      { name: "Multi-Account Trading", values: [false, true, true, true] },
      { name: "Algorithmic Trading", values: [false, false, true, true] },
    ],
  },
  {
    category: "Journal & Analytics",
    features: [
      { name: "Trade Journal", values: [true, true, true, true] },
      { name: "Performance Analytics", values: ["Basic", "Advanced", "Advanced", "Custom"] },
      { name: "Trade Tagging", values: [true, true, true, true] },
      { name: "Custom Reports", values: [false, true, true, true] },
      { name: "Export Data", values: ["CSV", "CSV, PDF", "All formats", "All formats"] },
      { name: "Historical Data", values: ["30 days", "1 year", "5 years", "Unlimited"] },
    ],
  },
  {
    category: "AI Features",
    features: [
      { name: "Trade Insights", values: [false, true, true, true] },
      { name: "Pattern Recognition", values: [false, false, true, true] },
      { name: "Risk Analysis", values: [false, true, true, true] },
      { name: "AI Assistant", values: [false, false, true, true] },
    ],
  },
  {
    category: "Support",
    features: [
      { name: "Community Access", values: [true, true, true, true] },
      { name: "Email Support", values: [true, true, true, true] },
      { name: "Priority Support", values: [false, false, true, true] },
      { name: "Dedicated Account Manager", values: [false, false, false, true] },
      { name: "Custom Onboarding", values: [false, false, false, true] },
      { name: "SLA", values: [false, false, false, true] },
    ],
  },
];

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mx-auto"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      className="w-5 h-5 text-gray-300 dark:text-gray-600 mx-auto"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function FeatureCell({ value }: { value: FeatureValue }) {
  if (typeof value === "boolean") {
    return value ? <CheckIcon /> : <XIcon />;
  }
  return <span className="af-text-primary text-sm">{value}</span>;
}

export default function PricingPage() {
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

      {/* Hero */}
      <section className="pt-16 pb-12 px-6">
        <div className="max-w-[1240px] mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl font-semibold af-text-primary mb-4">
            Compare Plans
          </h1>
          <p className="af-text-secondary text-lg max-w-2xl mx-auto">
            Choose the plan that fits your trading journey. All plans include core features with no hidden fees.
          </p>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="pb-24 px-6">
        <div className="max-w-[1240px] mx-auto overflow-x-auto">
          <table className="w-full border-collapse min-w-[800px]">
            {/* Plan Headers */}
            <thead>
              <tr>
                <th className="p-4 text-left w-[280px]"></th>
                {plans.map((plan) => (
                  <th key={plan.name} className="p-4 text-center w-[180px]">
                    <div className="flex flex-col items-center gap-2">
                      <span
                        className={`font-display text-lg font-semibold af-text-primary ${plan.highlight ? "text-xl" : ""}`}
                      >
                        {plan.name}
                      </span>
                      <Link
                        href={plan.ctaLink}
                        className={`text-sm font-medium transition-colors ${
                          plan.highlight
                            ? "text-[#0ea5e9] hover:text-[#0284c7]"
                            : "text-[#f97316] hover:text-[#ea580c]"
                        }`}
                      >
                        {plan.cta}
                      </Link>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {featureCategories.map((category, catIndex) => (
                <>
                  {/* Category Header */}
                  <tr key={`cat-${catIndex}`}>
                    <td
                      colSpan={5}
                      className="pt-8 pb-3 px-4 font-display font-semibold af-text-primary text-base border-b border-[#f5f5f5] dark:border-[#171717]"
                    >
                      {category.category}
                    </td>
                  </tr>

                  {/* Feature Rows */}
                  {category.features.map((feature, featureIndex) => (
                    <tr
                      key={`${catIndex}-${featureIndex}`}
                      className="border-b border-[#f5f5f5] dark:border-[#171717]"
                    >
                      <td className="py-4 px-4 af-text-primary text-sm">{feature.name}</td>
                      {feature.values.map((value, valueIndex) => (
                        <td key={valueIndex} className="py-4 px-4 text-center">
                          <FeatureCell value={value} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24 px-6">
        <div className="max-w-[640px] mx-auto text-center">
          <h2 className="font-display text-2xl font-semibold af-text-primary mb-4">
            Ready to elevate your trading?
          </h2>
          <p className="af-text-secondary mb-8">
            Start with our free Basic plan and upgrade anytime. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="af-hero-cta px-8 py-3 rounded-full font-medium text-sm transition-colors"
            >
              Start Free
            </Link>
            <Link
              href="#"
              className="af-header-cta px-8 py-3 rounded-full font-medium text-sm transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
