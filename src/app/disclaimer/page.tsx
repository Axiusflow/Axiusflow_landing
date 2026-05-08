"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Component as Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen af-page-bg transition-colors duration-300">
      <Header />

      <main className="px-6 pb-24">
        <article className="mx-auto max-w-[720px]">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-16 pb-12 lg:pt-24 lg:pb-16"
          >
            <span className="mb-4 inline-block text-[13px] font-medium uppercase tracking-widest af-text-secondary">
              Legal
            </span>
            <h1 className="font-display text-[clamp(36px,5vw,48px)] font-semibold leading-[1.1] tracking-[-0.03em] af-text-primary">
              Disclaimer
            </h1>
            <p className="mt-4 text-[16px] af-text-secondary">
              Last updated: April 20, 2026
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="prose-content space-y-8"
          >
            {/* Important Notice Box */}
            <section className="rounded-lg border border-amber-200 bg-amber-50 dark:border-amber-900/50 dark:bg-amber-900/20 p-6">
              <h2 className="font-display mb-3 text-[18px] font-semibold text-amber-800 dark:text-amber-300">
                Important Notice
              </h2>
              <p className="text-[15px] leading-[1.8] text-amber-700 dark:text-amber-200">
                Trading involves substantial risk of loss and is not suitable for all investors. Past performance 
                is not indicative of future results. Please read this disclaimer carefully before using our Services.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-4 text-[22px] font-semibold tracking-[-0.02em] af-text-primary">
                1. No Financial Advice
              </h2>
              <p className="text-[15px] leading-[1.8] af-text-secondary">
                Axiusflow provides tools and information for educational and informational purposes only. 
                <strong className="af-text-primary font-medium"> Nothing in our services constitutes financial advice, 
                investment advice, trading advice, or any other sort of advice.</strong>
              </p>
              <p className="mt-4 text-[15px] leading-[1.8] af-text-secondary">
                You should not treat any of our content as such. Axiusflow does not recommend that any 
                financial instrument should be bought, sold, or held by you. We do not provide personalized 
                recommendations or views as to whether an investment approach is suited to your financial needs.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-4 text-[22px] font-semibold tracking-[-0.02em] af-text-primary">
                2. Trading Risks
              </h2>
              <p className="text-[15px] leading-[1.8] af-text-secondary">
                Trading and investing in financial markets carries a high level of risk and may not be suitable 
                for all investors. Before deciding to trade, you should carefully consider your investment 
                objectives, level of experience, and risk appetite.
              </p>
              <ul className="mt-4 space-y-2 text-[15px] leading-[1.8] af-text-secondary">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>You could lose some or all of your initial investment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>Past performance is not a guarantee of future results</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>Market conditions can change rapidly and unpredictably</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>Leverage can amplify both gains and losses</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display mb-4 text-[22px] font-semibold tracking-[-0.02em] af-text-primary">
                3. No Guarantees
              </h2>
              <p className="text-[15px] leading-[1.8] af-text-secondary">
                We make no guarantees regarding the accuracy, completeness, or timeliness of any information 
                provided through our Services. Imported trade records, AI-generated reviews, and analytics are provided for informational
                purposes only and should not be relied upon as the sole basis for making trading decisions.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-4 text-[22px] font-semibold tracking-[-0.02em] af-text-primary">
                4. Third-Party Content
              </h2>
              <p className="text-[15px] leading-[1.8] af-text-secondary">
                Our Services may include content from third parties, including market data providers, 
                news sources, and broker integrations. We do not endorse, guarantee, or assume responsibility 
                for the accuracy or reliability of any third-party content.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-4 text-[22px] font-semibold tracking-[-0.02em] af-text-primary">
                5. Your Responsibility
              </h2>
              <p className="text-[15px] leading-[1.8] af-text-secondary">
                You are solely responsible for:
              </p>
              <ul className="mt-4 space-y-2 text-[15px] leading-[1.8] af-text-secondary">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>All trading and investment decisions you make</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>Conducting your own research and due diligence</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>Seeking advice from qualified financial professionals if needed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>Understanding the risks associated with trading</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>Complying with all applicable laws and regulations</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display mb-4 text-[22px] font-semibold tracking-[-0.02em] af-text-primary">
                6. Market Data Disclaimer
              </h2>
              <p className="text-[15px] leading-[1.8] af-text-secondary">
                Market data displayed in our services may be delayed or may not reflect real-time prices. 
                Data accuracy depends on third-party providers and exchange feeds. Always verify prices 
                with your broker before executing trades.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-4 text-[22px] font-semibold tracking-[-0.02em] af-text-primary">
                7. Limitation of Liability
              </h2>
              <p className="text-[15px] leading-[1.8] af-text-secondary">
                To the fullest extent permitted by law, Axiusflow and its affiliates shall not be liable for 
                any direct, indirect, incidental, special, consequential, or punitive damages resulting from 
                your use of or inability to use the Services, including but not limited to trading losses, 
                lost profits, or data loss.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-4 text-[22px] font-semibold tracking-[-0.02em] af-text-primary">
                8. Regulatory Compliance
              </h2>
              <p className="text-[15px] leading-[1.8] af-text-secondary">
                Axiusflow is a software service provider and is not a registered broker-dealer, investment 
                advisor, financial institution, charting platform, or trade execution venue. Our Services are 
                not intended to be used in jurisdictions where such use would be prohibited by law.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-4 text-[22px] font-semibold tracking-[-0.02em] af-text-primary">
                9. Contact Us
              </h2>
              <p className="text-[15px] leading-[1.8] af-text-secondary">
                If you have questions about this Disclaimer, please contact us at{" "}
                <Link href="/contact" className="af-text-primary font-medium underline underline-offset-2">
                  our contact page
                </Link>.
              </p>
            </section>
          </motion.div>

          {/* Related Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 rounded-lg border border-border p-6"
          >
            <h3 className="font-display text-[16px] font-semibold af-text-primary mb-4">
              Related Legal Documents
            </h3>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/terms"
                className="rounded-full border border-border px-4 py-2 text-[14px] af-text-secondary hover:af-text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="rounded-full border border-border px-4 py-2 text-[14px] af-text-secondary hover:af-text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookies"
                className="rounded-full border border-border px-4 py-2 text-[14px] af-text-secondary hover:af-text-primary transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
