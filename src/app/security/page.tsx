import Link from "next/link";
import { Component as Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { siteUrl } from "@/lib/seo";

const principles = [
  {
    title: "Read-only broker imports",
    body: "Axiusflow never asks for trade execution permissions. Imports are read-only by design — we ingest your trade history, never the ability to place orders on your behalf.",
  },
  {
    title: "No broker passwords stored",
    body: "Axiusflow does not store broker login credentials. CSV imports never touch credentials at all. When supported broker auto sync ships, it uses scoped, read-only OAuth or API tokens — not passwords.",
  },
  {
    title: "Encryption in transit and at rest",
    body: "All traffic to Axiusflow runs over TLS 1.2+. Data at rest is encrypted using industry-standard AES-256 encryption inside our cloud provider's managed storage.",
  },
  {
    title: "Your data, your control",
    body: "You can export your full Axiusflow data on the Pro plan at any time. You can delete your account and request data deletion in writing — see our Privacy Policy for details.",
  },
  {
    title: "Hardened cloud infrastructure",
    body: "Axiusflow runs on hardened cloud infrastructure with isolated environments for production data, audit logging on sensitive operations, and least-privilege access controls.",
  },
  {
    title: "Modern web security",
    body: "HTTPS only, HSTS preload, strict referrer policy, content type sniffing protection, and a permissions policy that disables sensitive browser APIs we don't use.",
  },
  {
    title: "Personalized AI handled responsibly",
    body: "Your trade data is never used to train shared models. Personalized AI runs on your own data, scoped to your account, and we don't sell or share trading data with third parties.",
  },
  {
    title: "Solo founder, transparent stack",
    body: "Axiusflow is being built by a solo founder. There's no opaque vendor chain — what we use, how we store data, and what we change is communicated openly via the changelog.",
  },
];

const responsibleDisclosure = [
  "Email security@axiusflow.com (or contact via /contact) with details of any potential vulnerability.",
  "Please don't publicly disclose, exploit beyond proof of concept, or test against other users' data.",
  "We respond to credible reports promptly and fix critical issues quickly.",
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Security", item: `${siteUrl}/security` },
  ],
};

export default function SecurityPage() {
  return (
    <div className="min-h-screen af-page-bg transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main className="px-6 py-16">
        <div className="mx-auto max-w-[820px]">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] af-text-secondary text-center">
            Security
          </p>
          <h1 className="mt-3 font-display text-[clamp(36px,5vw,52px)] font-semibold leading-[1.1] tracking-[-0.02em] af-text-primary text-center">
            How Axiusflow Protects Your Trading Data
          </h1>
          <p className="mx-auto mt-5 max-w-[640px] text-[17px] leading-[1.7] af-text-secondary text-center">
            Trading data is sensitive. Here is how Axiusflow handles it — read-only imports, encryption everywhere, and clear data ownership.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {principles.map((p) => (
              <div key={p.title} className="rounded-2xl border border-border af-surface-bg p-6">
                <h2 className="font-display text-[17px] font-semibold af-text-primary">{p.title}</h2>
                <p className="mt-3 text-[14px] leading-[1.7] af-text-secondary">{p.body}</p>
              </div>
            ))}
          </div>

          <section className="mt-14 rounded-2xl border border-border af-surface-muted-bg p-8">
            <h2 className="font-display text-[22px] font-semibold tracking-[-0.02em] af-text-primary">
              Responsible disclosure
            </h2>
            <p className="mt-3 text-[15px] leading-[1.7] af-text-secondary">
              If you find a security issue, please report it responsibly:
            </p>
            <ul className="mt-4 space-y-2 text-[15px] leading-[1.7] af-text-secondary">
              {responsibleDisclosure.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[14px] af-text-secondary">
              For everything else, see our{" "}
              <Link href="/privacy" className="underline underline-offset-2">Privacy Policy</Link>{" "}
              and{" "}
              <Link href="/terms" className="underline underline-offset-2">Terms of Service</Link>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
