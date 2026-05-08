import Link from "next/link";
import type { Metadata } from "next";
import { Component as Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you're looking for doesn't exist. Explore Axiusflow — a modern trading journal with personalized AI, broker imports, and premium analytics.",
  alternates: {
    canonical: `${siteUrl}/404`,
  },
  robots: { index: false, follow: true },
};

const popular = [
  { href: "/", title: "Home" },
  { href: "/pricing", title: "Pricing" },
  { href: "/vs/tradezella", title: "Axiusflow vs Tradezella" },
  { href: "/for/day-traders", title: "For Day Traders" },
  { href: "/for/futures-traders", title: "For Futures Traders" },
  { href: "/for/prop-firm-traders", title: "For Prop Firm Traders" },
  { href: "/integrations/interactive-brokers", title: "Interactive Brokers" },
  { href: "/integrations/ninjatrader", title: "NinjaTrader" },
  { href: "/changelog", title: "Changelog" },
  { href: "/story", title: "Our Story" },
  { href: "/contact", title: "Contact" },
  { href: "/security", title: "Security" },
];

export default function NotFound() {
  return (
    <div className="min-h-screen af-page-bg transition-colors duration-300">
      <Header />
      <main className="px-6 py-24">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] af-text-secondary">404</p>
          <h1 className="mt-3 font-display text-[clamp(36px,5vw,52px)] font-semibold leading-[1.1] tracking-[-0.02em] af-text-primary">
            We couldn&apos;t find that page.
          </h1>
          <p className="mt-4 text-[16px] leading-[1.7] af-text-secondary">
            The page may have moved, been renamed, or never existed. Try one of these instead:
          </p>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {popular.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-border af-surface-bg p-4 text-left text-[15px] font-medium af-text-primary transition-colors hover:af-surface-muted-bg"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
