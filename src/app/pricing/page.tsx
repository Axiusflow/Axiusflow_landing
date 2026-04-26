"use client";

import { Fragment } from "react";
import { Cancel01Icon, Tick02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Component as Footer } from "@/components/footer";
import { Header } from "@/components/header";

const plans = [
  { name: "Basic", cta: "Login", ctaLink: "https://app.axiusflow.com/login", highlight: false },
  { name: "Pro", cta: "Login", ctaLink: "https://app.axiusflow.com/login", highlight: true },
  { name: "Premium", cta: "Login", ctaLink: "https://app.axiusflow.com/login", highlight: false },
  { name: "Enterprise", cta: "Talk to us", ctaLink: "/contact", highlight: false },
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
    category: "Trading Workspace",
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
    category: "Imports & Data",
    features: [
      { name: "Trade Imports", values: ["CSV", "CSV", "CSV + assisted", "Custom"] },
      { name: "Broker Sync Workflows", values: [false, "Roadmap", "Priority roadmap", "Custom"] },
      { name: "Crypto Live Data", values: [true, true, true, true] },
      { name: "Market Replay", values: ["Basic", "Advanced", "Advanced", "Custom"] },
      { name: "Multi-Source Journal", values: [false, true, true, true] },
      { name: "Premium Exchange Data", values: [false, false, "Add-on", "Custom"] },
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
      { name: "AI Trade Review", values: [false, true, true, true] },
      { name: "Setup Pattern Tags", values: [false, false, true, true] },
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

function FeatureCell({ value }: { value: FeatureValue }) {
  if (typeof value === "boolean") {
    return value ? (
      <HugeiconsIcon
        icon={Tick02Icon}
        className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mx-auto"
      />
    ) : (
      <HugeiconsIcon
        icon={Cancel01Icon}
        className="w-5 h-5 text-gray-300 dark:text-gray-600 mx-auto"
      />
    );
  }
  return <span className="af-text-primary text-sm">{value}</span>;
}

export default function PricingPage() {
  return (
    <div className="min-h-screen af-page-bg transition-colors duration-300">
      <Header variant="simple" />

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
                <Fragment key={`cat-${catIndex}`}>
                  {/* Category Header */}
                  <tr>
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
                </Fragment>
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
            Login to Axiusflow to start using the platform, or contact sales if you need help mapping a team workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://app.axiusflow.com/login"
              className="af-hero-cta px-8 py-3 rounded-full font-medium text-sm transition-colors"
            >
              Login
            </Link>
            <Link
              href="/contact"
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
