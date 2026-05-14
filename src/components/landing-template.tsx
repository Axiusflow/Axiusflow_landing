import {
  Cancel01Icon,
  Clock01Icon,
  Tick02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import { Component as Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { siteUrl } from "@/lib/seo";

export interface BrokerLogo {
  src: string;
  name: string;
}

export type FeatureStatus = "available" | "coming-soon" | "not-supported";

export interface FeatureRow {
  label: string;
  status: FeatureStatus;
  detail?: string;
}

export interface FeatureGroup {
  title: string;
  rows: FeatureRow[];
}

export interface HowItWorksStep {
  title: string;
  body: string;
}

export interface LandingTemplateProps {
  eyebrow: string;
  h1: string;
  intro: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  pillars: Array<{ title: string; body: string }>;
  featureGroups: FeatureGroup[];
  howItWorks: { heading?: string; intro?: string; steps: HowItWorksStep[] };
  faq: Array<{ q: string; a: string }>;
  finalCta?: { heading: string; body: string };
  breadcrumb: Array<{ name: string; path: string }>;
  heroLogo?: BrokerLogo;
  relatedBrokers?: { heading?: string; logos: BrokerLogo[] };
}

function StatusIcon({ status }: { status: FeatureStatus }) {
  if (status === "available") {
    return (
      <span className="grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
        <HugeiconsIcon icon={Tick02Icon} className="h-3 w-3" />
      </span>
    );
  }
  if (status === "coming-soon") {
    return (
      <span className="grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">
        <HugeiconsIcon icon={Clock01Icon} className="h-3 w-3" />
      </span>
    );
  }
  return (
    <span className="grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-gray-100 text-gray-400 dark:bg-white/5 dark:text-white/30">
      <HugeiconsIcon icon={Cancel01Icon} className="h-3 w-3" />
    </span>
  );
}

function StatusBadge({ status }: { status: FeatureStatus }) {
  if (status !== "coming-soon") return null;
  return (
    <span className="ml-2 inline-flex items-center rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.06em] text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">
      Coming soon
    </span>
  );
}

export function LandingTemplate({
  eyebrow,
  h1,
  intro,
  primaryCtaLabel = "Get Axiusflow Pro",
  primaryCtaHref = "https://app.axiusflow.com/pricing?checkout=pro",
  secondaryCtaLabel = "See pricing",
  secondaryCtaHref = "/pricing",
  pillars,
  featureGroups,
  howItWorks,
  faq,
  finalCta,
  breadcrumb,
  heroLogo,
  relatedBrokers,
}: LandingTemplateProps) {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumb.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="min-h-screen af-page-bg transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <Header />

      <section className="px-6 pt-16 pb-12">
        <div className="mx-auto max-w-[820px] text-center">
          {heroLogo && (
            <div className="mb-7 flex items-center justify-center gap-5">
              <div className="flex h-14 w-14 items-center justify-center">
                <Image
                  src="/logo.svg"
                  alt="Axiusflow"
                  width={48}
                  height={48}
                  className="h-12 w-12"
                />
              </div>
              <span aria-hidden="true" className="text-[24px] font-light text-gray-300 dark:text-white/20">
                ×
              </span>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-white p-2 shadow-sm dark:bg-white">
                <Image
                  src={heroLogo.src}
                  alt={`${heroLogo.name} logo`}
                  width={48}
                  height={48}
                  className="h-9 w-auto max-w-[44px] object-contain"
                />
              </div>
            </div>
          )}

          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] af-text-secondary">
            {eyebrow}
          </p>
          <h1 className="mt-3 font-display text-[clamp(34px,4.6vw,52px)] font-semibold leading-[1.05] tracking-[-0.03em] af-text-primary">
            {h1}
          </h1>
          <p className="mx-auto mt-5 max-w-[640px] text-[17px] leading-[1.65] af-text-secondary">
            {intro}
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={primaryCtaHref}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-[15px] font-medium text-white transition-opacity hover:opacity-90"
              style={{ backgroundImage: "linear-gradient(135deg, var(--brand-gradient-start), var(--brand-gradient-middle), var(--brand-gradient-end))" }}
            >
              {primaryCtaLabel}
            </Link>
            <Link
              href={secondaryCtaHref}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/10 bg-transparent px-7 text-[15px] font-medium af-text-primary transition-colors hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/5"
            >
              {secondaryCtaLabel}
            </Link>
          </div>
        </div>
      </section>

      {/* Related broker strip */}
      {relatedBrokers && relatedBrokers.logos.length > 0 && (
        <section className="px-6 pb-12" aria-label="Compatible brokers">
          <div className="mx-auto max-w-[1000px]">
            <h2 className="mb-6 text-center text-[13px] font-medium uppercase tracking-[0.16em] af-text-secondary">
              {relatedBrokers.heading ?? "Works with the brokers and platforms you already use"}
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
              {relatedBrokers.logos.map((logo) => (
                <Image
                  key={logo.src}
                  src={logo.src}
                  alt={`${logo.name} trading journal integration`}
                  width={120}
                  height={36}
                  className="h-7 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:invert dark:hover:invert-0"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pillars */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-[1080px] grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-2xl border border-border af-surface-bg p-6">
              <h2 className="font-display text-[18px] font-semibold af-text-primary">{pillar.title}</h2>
              <p className="mt-3 text-[14px] leading-[1.7] af-text-secondary">{pillar.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature checklist */}
      <section className="px-6 pb-16" aria-labelledby="features-heading">
        <div className="mx-auto max-w-[1080px]">
          <div className="mb-10 text-center">
            <h2
              id="features-heading"
              className="font-display text-[clamp(26px,3vw,36px)] font-semibold tracking-[-0.02em] af-text-primary"
            >
              What&apos;s included
            </h2>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12px] af-text-secondary">
              <span className="inline-flex items-center gap-1.5">
                <StatusIcon status="available" /> Available
              </span>
              <span className="inline-flex items-center gap-1.5">
                <StatusIcon status="coming-soon" /> Coming soon
              </span>
              <span className="inline-flex items-center gap-1.5">
                <StatusIcon status="not-supported" /> Not supported
              </span>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featureGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-border af-surface-bg p-6"
              >
                <h3 className="font-display text-[15px] font-semibold uppercase tracking-[0.1em] af-text-secondary">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {group.rows.map((row) => (
                    <li key={row.label} className="flex items-start gap-3">
                      <StatusIcon status={row.status} />
                      <div className="min-w-0">
                        <p
                          className={`text-[14px] leading-[1.5] ${
                            row.status === "not-supported"
                              ? "af-text-secondary line-through"
                              : "af-text-primary"
                          }`}
                        >
                          {row.label}
                          <StatusBadge status={row.status} />
                        </p>
                        {row.detail && (
                          <p className="mt-1 text-[12px] leading-[1.5] af-text-secondary">{row.detail}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      {howItWorks.steps.length > 0 && (
        <section className="px-6 pb-16" aria-labelledby="how-it-works-heading">
          <div className="mx-auto max-w-[1040px]">
            <div className="mb-10 text-center">
              <h2
                id="how-it-works-heading"
                className="font-display text-[clamp(26px,3vw,36px)] font-semibold tracking-[-0.02em] af-text-primary"
              >
                {howItWorks.heading ?? "How it works"}
              </h2>
              {howItWorks.intro && (
                <p className="mx-auto mt-3 max-w-[600px] text-[15px] leading-[1.6] af-text-secondary">
                  {howItWorks.intro}
                </p>
              )}
            </div>
            <ol className="grid gap-5 md:grid-cols-3">
              {howItWorks.steps.map((step, idx) => (
                <li
                  key={step.title}
                  className="relative rounded-2xl border border-border af-surface-bg p-6"
                >
                  <span className="absolute -top-3 left-6 inline-flex h-7 w-7 items-center justify-center rounded-full bg-neutral-950 text-[12px] font-semibold text-white shadow-sm dark:bg-white dark:text-black">
                    {idx + 1}
                  </span>
                  <h3 className="mt-3 font-display text-[17px] font-semibold af-text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.6] af-text-secondary">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-[760px]">
          <h2 className="font-display text-[clamp(24px,2.6vw,32px)] font-semibold tracking-[-0.02em] af-text-primary text-center">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-3">
            {faq.map((item, idx) => (
              <details key={idx} className="group rounded-xl border border-border af-surface-bg p-5 open:af-surface-muted-bg">
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

      {/* Final CTA */}
      {finalCta && (
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-[760px] rounded-2xl border border-border af-surface-muted-bg p-8 text-center">
            <h2 className="font-display text-[clamp(24px,2.8vw,34px)] font-semibold tracking-[-0.02em] af-text-primary">
              {finalCta.heading}
            </h2>
            <p className="mx-auto mt-3 max-w-[520px] text-[15px] leading-[1.7] af-text-secondary">
              {finalCta.body}
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={primaryCtaHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-[15px] font-medium text-white transition-opacity hover:opacity-90"
                style={{ backgroundImage: "linear-gradient(135deg, var(--brand-gradient-start), var(--brand-gradient-middle), var(--brand-gradient-end))" }}
              >
                {primaryCtaLabel}
              </Link>
              <Link
                href={secondaryCtaHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/10 bg-transparent px-7 text-[15px] font-medium af-text-primary transition-colors hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/5"
              >
                {secondaryCtaLabel}
              </Link>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
