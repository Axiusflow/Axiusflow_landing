"use client";

import { HelpCircleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import * as Accordion from "@/components/ui/accordion";

const faqItems = [
  {
    id: "1",
    question: "Is it really free to begin with?",
    answer: "Yes! Axiusflow offers a free tier that lets you explore our charting tools, basic journaling features, and connect one broker account. No credit card required to get started."
  },
  {
    id: "2",
    question: "What brokers does Axiusflow support?",
    answer: "We support major brokers including Interactive Brokers, TD Ameritrade, Fidelity, Schwab, E*TRADE, and Robinhood. We're constantly adding more integrations based on user demand."
  },
  {
    id: "3",
    question: "Can I use Axiusflow for day trading?",
    answer: "Absolutely. Axiusflow is built for all trading styles — day trading, swing trading, and long-term investing. Our real-time charts and instant trade logging make it perfect for active traders."
  },
  {
    id: "4",
    question: "How does the trading journal work?",
    answer: "Our journal automatically logs your trades from connected brokers. You can add notes, screenshots, and tags. The analytics dashboard shows your win rate, P&L, and patterns in your trading behavior."
  },
  {
    id: "5",
    question: "Is my trading data secure?",
    answer: "Security is our top priority. We use bank-level encryption, never store your broker credentials, and use read-only API connections. Your data is yours — we never sell or share it."
  },
  {
    id: "6",
    question: "Can I access Axiusflow on mobile?",
    answer: "Yes, Axiusflow is fully cloud-based and works on any device with a web browser. A dedicated mobile app is on our roadmap for future release."
  },
  {
    id: "7",
    question: "What markets and instruments are supported?",
    answer: "We support stocks, options, futures, forex, and crypto charting. You can analyze any market that your connected broker supports."
  },
  {
    id: "8",
    question: "How does trade replay work?",
    answer: "Trade replay lets you review your past trades in the exact market context they occurred. Replay the price action, see your entry/exit points, and learn from each trade."
  },
  {
    id: "9",
    question: "Can I import my existing trade history?",
    answer: "Yes, you can import trade history via CSV from most brokers. Once connected, all future trades are logged automatically in real-time."
  },
  {
    id: "10",
    question: "What about real-time market data?",
    answer: "We provide real-time data for major markets. Due to exchange licensing costs, some premium data feeds may require a paid plan. We're transparent about data sources and limitations."
  },
  {
    id: "11",
    question: "Is there a desktop application?",
    answer: "Axiusflow is a web-based platform accessible from any browser. This means you can access your charts and journal from anywhere without installing software."
  },
  {
    id: "12",
    question: "How do I get started with Axiusflow?",
    answer: "Simply sign up for a free account, connect your first broker, and start charting. Our onboarding guide will walk you through setting up your workspace in under 5 minutes."
  },
];

export function FAQSection() {
  return (
    <section className="af-page-bg py-16 lg:py-24">
      <div className="mx-auto max-w-[800px] px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-[8px] border border-border af-surface-bg px-4 py-1.5">
            <HugeiconsIcon icon={HelpCircleIcon} className="h-4 w-4 af-text-secondary" />
            <span className="text-[13px] font-medium af-text-secondary">
              FAQ&apos;S
            </span>
          </div>
          <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-semibold leading-[1.1] tracking-[-0.02em] af-text-primary">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-[540px] text-[15px] leading-[1.6] af-text-secondary">
            Not sure if Axiusflow is right for you? Here are answers to the most common questions from traders like you.
          </p>
        </div>

        {/* Accordion */}
        <Accordion.Root type="single" collapsible className="space-y-3">
          {faqItems.map((item) => (
            <Accordion.Item key={item.id} value={item.id}>
              <Accordion.Header>
                <Accordion.Trigger>
                  <span>{item.question}</span>
                  <Accordion.Arrow />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content>
                {item.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
