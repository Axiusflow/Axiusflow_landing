"use client";

import { useState } from "react";
import { ArrowRight01Icon, Tick02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Component as Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { proPriceMonthlyUSD, proPriceYearlyUSD, siteUrl } from "@/lib/seo";

const proCheckoutUrl = "https://app.axiusflow.com/pricing?checkout=pro";

const includedFeatures: { category: string; items: string[] }[] = [
  {
    category: "Premium Workspace",
    items: [
      "Unlimited personal workspaces",
      "Unlimited trading accounts",
      "Unlimited custom review layouts",
      "Modern, calm UI built for review",
      "Light and dark themes",
    ],
  },
  {
    category: "Personalized AI",
    items: [
      "AI trade reviews trained on your own history",
      "Recurring mistake detection",
      "Behavior pattern recognition",
      "Personalized review prompts",
      "Risk and discipline insights",
    ],
  },
  {
    category: "Imports & Broker Sync",
    items: [
      "Full CSV trade imports across formats",
      "Supported broker auto sync workflows",
      "Manual journal entries with notes and screenshots",
      "Multi-source trade history in one workspace",
      "50 GB import storage",
      "Full historical retention",
    ],
  },
  {
    category: "Premium Analytics",
    items: [
      "Win rate, P&L, R-multiple, and expectancy",
      "Tag, setup, session, and instrument breakdowns",
      "Custom report layouts",
      "Data export (CSV)",
      "Advanced filters and saved views",
    ],
  },
  {
    category: "Support",
    items: [
      "Community access",
      "Priority email support",
      "Priority feature access",
    ],
  },
];

const pricingFaq = [
  {
    q: "Is there a free plan?",
    a: "Axiusflow is one Pro plan at $20/month or $192/year. There is no free tier today. The Pro plan unlocks the full premium workspace, personalized AI, imports, supported broker sync, and analytics.",
  },
  {
    q: "Do you offer a yearly discount?",
    a: "Yes. Yearly billing is $192/year — that is $16/month effective, instead of $20/month on the monthly plan.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. You can cancel your Pro subscription at any time from your account. You keep access through the end of the current billing period.",
  },
  {
    q: "Do you offer refunds?",
    a: "Reach out within 7 days of your first payment if Axiusflow isn't a fit and we'll work it out. We'd rather have happy traders than unhappy invoices.",
  },
  {
    q: "Will pricing increase later?",
    a: "Existing Pro subscribers keep their current price as long as their subscription stays active. New pricing only applies to new sign-ups.",
  },
];

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("yearly");

  const isYearly = billingPeriod === "yearly";
  const displayedPrice = isYearly ? `$${Math.round(proPriceYearlyUSD / 12)}` : `$${proPriceMonthlyUSD}`;
  const displayedSuffix = "/mo";
  const displayedSubcopy = isYearly
    ? `Billed $${proPriceYearlyUSD} yearly — save 20%.`
    : `Billed $${proPriceMonthlyUSD} monthly. Cancel anytime.`;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Axiusflow Pro",
    description:
      "Modern trading journal with personalized AI, broker imports, supported auto sync, and premium analytics for active traders.",
    brand: { "@type": "Brand", name: "Axiusflow" },
    image: `${siteUrl}/og_image.png`,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: proPriceMonthlyUSD,
      highPrice: proPriceYearlyUSD,
      offerCount: 2,
      offers: [
        {
          "@type": "Offer",
          name: "Axiusflow Pro Monthly",
          price: proPriceMonthlyUSD,
          priceCurrency: "USD",
          url: `${siteUrl}/pricing`,
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Axiusflow Pro Yearly",
          price: proPriceYearlyUSD,
          priceCurrency: "USD",
          url: `${siteUrl}/pricing`,
          availability: "https://schema.org/InStock",
        },
      ],
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Pricing", item: `${siteUrl}/pricing` },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pricingFaq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="min-h-screen af-page-bg transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />

      <Header />

      <section className="pt-20 pb-4 px-6">
        <div className="max-w-[640px] mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border af-surface-bg px-3 py-1 text-[12px] font-medium af-text-secondary">
            Pricing
          </span>
          <h1 className="mt-4 font-display text-[clamp(32px,4vw,48px)] font-semibold leading-[1.1] tracking-[-0.02em] af-text-primary">
            One plan. Everything included.
          </h1>
          <p className="mt-3 text-[15px] leading-[1.6] af-text-secondary max-w-md mx-auto">
            Axiusflow Pro is the full premium workspace. No tiers, no limits.
          </p>
        </div>
      </section>

      {/* Single Pro card */}
      <section className="px-6 pt-8 pb-20">
        <div className="max-w-[560px] mx-auto relative">
          {/* Ambient glow behind card */}
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 h-[320px] w-[320px] rounded-full opacity-40 blur-[80px] pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(199,241,252,0.5) 0%, transparent 70%)" }}
          />

          <div className="relative rounded-[28px] border border-border af-surface-bg p-1">
            {/* Inner highlight line */}
            <div className="rounded-[24px] border border-white/[0.06] bg-white/[0.02] p-8 lg:p-10 dark:border-white/[0.04]">
              {/* Badge */}
              <div className="flex justify-center">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-semibold text-white"
                  style={{
                    backgroundImage: "linear-gradient(135deg, var(--brand-gradient-start), var(--brand-gradient-middle), var(--brand-gradient-end))",
                  }}
                >
                  Axiusflow Pro
                </span>
              </div>

              {/* Billing toggle */}
              <div className="mt-6 flex justify-center">
                <div className="inline-flex rounded-full border border-border p-[3px] af-surface-muted-bg">
                  {([
                    { key: "monthly", label: "Monthly" },
                    { key: "yearly", label: "Yearly" },
                  ] as const).map((option) => {
                    const isActive = billingPeriod === option.key;
                    return (
                      <button
                        key={option.key}
                        type="button"
                        onClick={() => setBillingPeriod(option.key)}
                        className={`cursor-pointer relative rounded-full px-4 py-1.5 text-[13px] font-medium transition-all ${
                          isActive
                            ? "af-text-primary shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
                            : "af-text-secondary hover:af-text-primary"
                        }`}
                        style={isActive ? { background: "var(--token-surface)" } : undefined}
                        aria-pressed={isActive}
                      >
                        {option.label}
                        {option.key === "yearly" && (
                          <span className="ml-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                            -20%
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Price */}
              <div className="mt-8 text-center">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-display text-[64px] font-semibold leading-none tracking-[-0.03em] af-text-primary">
                    {displayedPrice}
                  </span>
                  <span className="text-[17px] font-medium af-text-secondary">{displayedSuffix}</span>
                </div>
                <p className="mt-1.5 text-[13px] af-text-secondary">{displayedSubcopy}</p>
              </div>

              {/* CTA */}
              <Link
                href={proCheckoutUrl}
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full af-header-cta px-6 py-3 text-[15px] font-medium transition-colors hover:opacity-90"
              >
                Get Axiusflow Pro
                <HugeiconsIcon icon={ArrowRight01Icon} className="h-4 w-4" />
              </Link>
              <p className="mt-2.5 text-center text-[12px] af-text-secondary">
                Cancel anytime. Existing subscribers keep their price.
              </p>

              {/* Divider */}
              <div className="my-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

              {/* Features */}
              <div className="grid gap-5 sm:grid-cols-2">
                {includedFeatures.map((group) => (
                  <div key={group.category}>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.12em] af-text-secondary">
                      {group.category}
                    </p>
                    <ul className="mt-2.5 space-y-1.5">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[13px] leading-[1.55] af-text-primary">
                          <HugeiconsIcon
                            icon={Tick02Icon}
                            className="mt-[3px] h-3.5 w-3.5 flex-shrink-0 text-[var(--token-text-secondary)] opacity-70"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="px-6 pb-24">
        <div className="max-w-[720px] mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-semibold af-text-primary mb-6 text-center tracking-[-0.02em]">
            Pricing FAQ
          </h2>
          <div className="space-y-3">
            {pricingFaq.map((item, idx) => (
              <details
                key={idx}
                className="group rounded-xl border border-border af-surface-bg p-5 open:af-surface-muted-bg"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-3 text-[15px] font-medium af-text-primary">
                  {item.q}
                  <span className="grid size-5 shrink-0 place-items-center af-text-secondary transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[14px] leading-relaxed af-text-secondary">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
