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

type Cell =
  | { kind: "check" }
  | { kind: "cross" }
  | { kind: "soon"; label?: string }
  | { kind: "text"; value: string; emphasized?: boolean };

interface ComparisonRow {
  feature: string;
  axiusflow: Cell;
  tradezella: Cell;
}

const comparison: ComparisonRow[] = [
  { feature: "Trading journal core (notes, tags, screenshots)", axiusflow: { kind: "check" }, tradezella: { kind: "check" } },
  { feature: "Broker CSV imports", axiusflow: { kind: "check" }, tradezella: { kind: "check" } },
  { feature: "Advanced analytics (win rate, R-multiple, expectancy)", axiusflow: { kind: "check" }, tradezella: { kind: "check" } },
  { feature: "Custom report layouts", axiusflow: { kind: "check" }, tradezella: { kind: "check" } },
  { feature: "Light & dark mode", axiusflow: { kind: "check" }, tradezella: { kind: "check" } },
  { feature: "Personalized AI trained on your own trades", axiusflow: { kind: "check" }, tradezella: { kind: "text", value: "Generic AI features" } },
  { feature: "Supported broker auto sync", axiusflow: { kind: "text", value: "Expanding deliberately" }, tradezella: { kind: "check" } },
  { feature: "Trade replay", axiusflow: { kind: "soon" }, tradezella: { kind: "check" } },
  { feature: "Free plan", axiusflow: { kind: "cross" }, tradezella: { kind: "cross" } },
  { feature: "Starting price", axiusflow: { kind: "text", value: "$20/mo · $192/yr", emphasized: true }, tradezella: { kind: "text", value: "Higher tiers" } },
  { feature: "Direct founder access", axiusflow: { kind: "check" }, tradezella: { kind: "cross" } },
];

const supportedBrokers = [
  { src: "/broker_logo/Ibkr.png", name: "Interactive Brokers" },
  { src: "/broker_logo/ninjatrader.png", name: "NinjaTrader" },
  { src: "/broker_logo/tradestation.png", name: "TradeStation" },
  { src: "/broker_logo/tradovate.png", name: "Tradovate" },
  { src: "/broker_logo/td_ameritrade.png", name: "TD Ameritrade" },
  { src: "/broker_logo/charles_shwab.png", name: "Charles Schwab" },
  { src: "/broker_logo/webull.png", name: "Webull" },
  { src: "/broker_logo/robinhood.png", name: "Robinhood" },
  { src: "/broker_logo/coinbase.png", name: "Coinbase" },
  { src: "/broker_logo/binance.png", name: "Binance" },
  { src: "/broker_logo/kraken.png", name: "Kraken" },
  { src: "/broker_logo/mt_5.png", name: "MetaTrader 5" },
  { src: "/broker_logo/c_trader.png", name: "cTrader" },
];

const reasonsToSwitch = [
  {
    title: "Personalized AI that learns from you",
    body: "Most journals bolt generic AI prompts onto a static dashboard. Axiusflow's AI studies your imported trades, tags, notes, and behavior to surface mistakes and strengths that match how you actually trade.",
  },
  {
    title: "A modern, premium workspace",
    body: "Tradezella works, but its UI shows its age. Axiusflow is a calm, modern interface designed for long review sessions — no clutter, no spreadsheet feel.",
  },
  {
    title: "One simple plan",
    body: "No tiered upsells. Axiusflow Pro is a single plan at $20/month or $192/year with everything included.",
  },
  {
    title: "Honest scope",
    body: "We don't claim every feature is shipped. Trade replay isn't live yet — it's on the roadmap and we say so. That honesty is the foundation we're building on.",
  },
];

const switchFaq = [
  {
    q: "Is Axiusflow really a Tradezella alternative?",
    a: "Yes. Axiusflow covers the core trading journal workflow — imports, tagging, notes, screenshots, premium analytics, and personalized AI review — in a more modern UI built specifically for active traders.",
  },
  {
    q: "Can I import my Tradezella data?",
    a: "Yes. If you can export your Tradezella trades to CSV, Axiusflow's CSV import handles it. Reach out via /contact and we'll help you map fields cleanly.",
  },
  {
    q: "How does Axiusflow's AI compare?",
    a: "Axiusflow's AI is personalized — it learns from your own tags, notes, and behavior patterns instead of applying generic templates.",
  },
  {
    q: "Does Axiusflow have trade replay like Tradezella?",
    a: "Not yet. Trade replay is on the roadmap and will only ship when it materially improves the review workflow. Today, Axiusflow focuses on personalized AI, imports, premium analytics, and journaling.",
  },
  {
    q: "Is Axiusflow cheaper?",
    a: "Axiusflow Pro is a single plan at $20/month or $192/year ($16/month effective on yearly). It typically lands below comparable Tradezella tiers, with personalized AI and the full premium workspace included.",
  },
];

function CellView({ cell }: { cell: Cell }) {
  if (cell.kind === "check") {
    return (
      <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
        <HugeiconsIcon icon={Tick02Icon} className="h-3.5 w-3.5" />
      </span>
    );
  }
  if (cell.kind === "cross") {
    return (
      <span className="grid h-6 w-6 place-items-center rounded-full bg-gray-100 text-gray-400 dark:bg-white/5 dark:text-white/30">
        <HugeiconsIcon icon={Cancel01Icon} className="h-3.5 w-3.5" />
      </span>
    );
  }
  if (cell.kind === "soon") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">
        <HugeiconsIcon icon={Clock01Icon} className="h-3 w-3" />
        {cell.label ?? "Coming soon"}
      </span>
    );
  }
  return (
    <span className={`text-[13px] ${cell.emphasized ? "af-text-primary font-semibold" : "af-text-secondary"}`}>
      {cell.value}
    </span>
  );
}

export default function VsTradezellaPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "vs Tradezella", item: `${siteUrl}/vs/tradezella` },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: switchFaq.map((item) => ({
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

      {/* Hero */}
      <section className="px-6 pt-16 pb-12">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] af-text-secondary">
            Axiusflow vs Tradezella
          </p>
          <h1 className="mt-3 font-display text-[clamp(36px,5vw,56px)] font-semibold leading-[1.05] tracking-[-0.03em] af-text-primary">
            The Modern Trading Journal Alternative to Tradezella
          </h1>
          <p className="mx-auto mt-5 max-w-[620px] text-[17px] leading-[1.65] af-text-secondary">
            Axiusflow is a premium trading journal with personalized AI built around your own trades — designed for active traders who want a serious review workspace without the dated UI.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="https://app.axiusflow.com/pricing?checkout=pro"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-neutral-950 px-7 text-[15px] font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
            >
              Switch to Axiusflow Pro
            </Link>
            <Link
              href="/pricing"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/10 bg-transparent px-7 text-[15px] font-medium af-text-primary transition-colors hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/5"
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Broker strip */}
      <section className="px-6 pb-14" aria-label="Supported brokers and platforms">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="mb-6 text-center text-[13px] font-medium uppercase tracking-[0.16em] af-text-secondary">
            Works with the brokers and platforms you already use
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {supportedBrokers.map((logo) => (
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

      {/* Comparison table */}
      <section className="px-6 pb-16" aria-labelledby="comparison-heading">
        <div className="mx-auto max-w-[960px]">
          <div className="mb-10 text-center">
            <h2 id="comparison-heading" className="font-display text-[clamp(26px,3vw,36px)] font-semibold tracking-[-0.02em] af-text-primary">
              Axiusflow vs Tradezella — Feature Comparison
            </h2>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12px] af-text-secondary">
              <span className="inline-flex items-center gap-1.5">
                <CellView cell={{ kind: "check" }} /> Available
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CellView cell={{ kind: "soon" }} />
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CellView cell={{ kind: "cross" }} /> Not supported
              </span>
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border af-surface-bg">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border af-surface-muted-bg">
                  <th className="p-4 text-[14px] font-semibold af-text-primary">Feature</th>
                  <th className="p-4 text-[14px] font-semibold af-text-primary">
                    <span className="inline-flex items-center gap-2">
                      <Image src="/logo.svg" alt="" width={20} height={20} className="h-5 w-5" />
                      Axiusflow
                    </span>
                  </th>
                  <th className="p-4 text-[14px] font-semibold af-text-secondary">Tradezella</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature} className="border-b border-border last:border-0">
                    <td className="p-4 text-[14px] af-text-primary font-medium">{row.feature}</td>
                    <td className="p-4">
                      <CellView cell={row.axiusflow} />
                    </td>
                    <td className="p-4">
                      <CellView cell={row.tradezella} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Reasons to switch */}
      <section className="px-6 pb-16" aria-labelledby="reasons-heading">
        <div className="mx-auto max-w-[1040px]">
          <h2 id="reasons-heading" className="font-display text-[clamp(26px,3vw,36px)] font-semibold tracking-[-0.02em] af-text-primary text-center">
            Why traders switch from Tradezella to Axiusflow
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {reasonsToSwitch.map((reason) => (
              <div key={reason.title} className="rounded-2xl border border-border af-surface-bg p-6">
                <h3 className="font-display text-[18px] font-semibold af-text-primary">{reason.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.7] af-text-secondary">{reason.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[760px]">
          <h2 className="font-display text-[clamp(24px,2.6vw,32px)] font-semibold tracking-[-0.02em] af-text-primary text-center">
            Switching from Tradezella — FAQ
          </h2>
          <div className="mt-8 space-y-3">
            {switchFaq.map((item, idx) => (
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

      <Footer />
    </div>
  );
}
