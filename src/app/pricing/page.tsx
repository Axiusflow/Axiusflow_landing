"use client";

import { Fragment } from "react";
import { Cancel01Icon, Tick02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Component as Footer } from "@/components/footer";
import { Header } from "@/components/header";

const proCheckoutUrl = "https://app.axiusflow.com/pricing?checkout=pro";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Start journaling and validate whether Axiusflow fits your workflow.",
    cta: "Start free",
    ctaLink: "https://app.axiusflow.com/login",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$20/mo",
    description: "Unlock the full personal trading journal and analytics workspace.",
    cta: "Upgrade to Pro",
    ctaLink: proCheckoutUrl,
    highlight: true,
  },
];

type FeatureValue = boolean | string;

interface Feature {
  name: string;
  values: [FeatureValue, FeatureValue];
}

interface FeatureCategory {
  category: string;
  features: Feature[];
}

const featureCategories: FeatureCategory[] = [
  {
    category: "Trading Workspace",
    features: [
      { name: "Workspaces", values: ["1", "Unlimited personal"] },
      { name: "Trading Accounts", values: ["1", "Unlimited"] },
      { name: "Chart Layouts", values: ["1", "Unlimited"] },
      { name: "Advanced Charting", values: [true, true] },
      { name: "Terminal Live Charts", values: [false, true] },
    ],
  },
  {
    category: "Imports & Data",
    features: [
      { name: "Manual Trade Journal", values: [true, true] },
      { name: "CSV Trade Imports", values: ["Limited", "Full access"] },
      { name: "Broker Sync Workflows", values: [false, "Included as available"] },
      { name: "Import Storage", values: ["500 MB", "50 GB"] },
      { name: "Historical Retention", values: ["Recent activity", "Full history"] },
    ],
  },
  {
    category: "Journal & Analytics",
    features: [
      { name: "Basic Reports", values: [true, true] },
      { name: "Advanced Reports", values: [false, true] },
      { name: "Trade Tagging and Notes", values: [true, true] },
      { name: "Custom Report Layouts", values: [false, true] },
      { name: "Data Export", values: [false, true] },
    ],
  },
  {
    category: "Automation & AI",
    features: [
      { name: "AI Trade Summaries", values: [false, "50 / month"] },
      { name: "Replay Tools", values: [false, true] },
      { name: "API Access", values: [false, "Roadmap access"] },
      { name: "Priority Feature Access", values: [false, true] },
    ],
  },
  {
    category: "Support",
    features: [
      { name: "Community Access", values: [true, true] },
      { name: "Email Support", values: [true, true] },
      { name: "Priority Support", values: [false, true] },
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

      <section className="pt-16 pb-12 px-6">
        <div className="max-w-[1240px] mx-auto text-center">
          <div className="text-[#0ea5e9] text-xs font-semibold tracking-[0.24em] uppercase mb-4">
            Axiusflow Pricing
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-semibold af-text-primary mb-4">
            One free plan. One serious plan.
          </h1>
          <p className="af-text-secondary text-lg max-w-2xl mx-auto">
            Start free, then upgrade to Pro when Axiusflow becomes part of your trading workflow.
          </p>
        </div>
      </section>

      <section className="pb-12 px-6">
        <div className="max-w-[980px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-6 transition-colors ${
                plan.highlight
                  ? "border-[#0ea5e9]/60 bg-[#0ea5e9]/5 dark:bg-[#0ea5e9]/10"
                  : "border-[#ededed] dark:border-[#171717] bg-white/50 dark:bg-white/[0.02]"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-display text-2xl font-semibold af-text-primary">
                    {plan.name}
                  </h2>
                  <div className="mt-4 flex items-end gap-2">
                    <span className="font-display text-4xl font-semibold af-text-primary">
                      {plan.price}
                    </span>
                    {plan.name === "Pro" ? (
                      <span className="af-text-secondary pb-1 text-sm">billed monthly</span>
                    ) : null}
                  </div>
                </div>
                {plan.highlight ? (
                  <span className="rounded-full bg-[#0ea5e9]/10 px-3 py-1 text-xs font-semibold text-[#0ea5e9]">
                    Recommended
                  </span>
                ) : null}
              </div>

              <p className="af-text-secondary mt-4 min-h-12 text-sm leading-6">
                {plan.description}
              </p>
              <Link
                href={plan.ctaLink}
                className={`mt-5 inline-flex w-full justify-center rounded-full px-5 py-3 text-sm font-medium transition-colors ${
                  plan.highlight
                    ? "bg-[#0ea5e9] text-white hover:bg-[#0284c7]"
                    : "af-header-cta"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-[980px] mx-auto overflow-x-auto">
          <table className="w-full border-collapse min-w-[720px]">
            <thead>
              <tr>
                <th className="p-4 text-left w-[360px]"></th>
                {plans.map((plan) => (
                  <th key={plan.name} className="p-4 text-center w-[180px]">
                    <span
                      className={`font-display text-lg font-semibold af-text-primary ${
                        plan.highlight ? "text-xl" : ""
                      }`}
                    >
                      {plan.name}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {featureCategories.map((category, catIndex) => (
                <Fragment key={`cat-${catIndex}`}>
                  <tr>
                    <td
                      colSpan={3}
                      className="pt-8 pb-3 px-4 font-display font-semibold af-text-primary text-base border-b border-[#f5f5f5] dark:border-[#171717]"
                    >
                      {category.category}
                    </td>
                  </tr>

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

      <section className="pb-24 px-6">
        <div className="max-w-[640px] mx-auto text-center">
          <h2 className="font-display text-2xl font-semibold af-text-primary mb-4">
            Keep the plan decision simple.
          </h2>
          <p className="af-text-secondary mb-8">
            Free is for evaluation. Pro is for serious journaling, analytics, imports, and the trading workspace as it expands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://app.axiusflow.com/login"
              className="af-header-cta px-8 py-3 rounded-full font-medium text-sm transition-colors"
            >
              Start Free
            </Link>
            <Link
              href={proCheckoutUrl}
              className="af-hero-cta px-8 py-3 rounded-full font-medium text-sm transition-colors"
            >
              Upgrade to Pro
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
