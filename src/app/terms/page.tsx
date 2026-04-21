"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Component as Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function TermsPage() {
  return (
    <div className="min-h-screen af-page-bg transition-colors duration-300">
      <Header variant="simple" />

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
              Terms of Service
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
            <section>
              <h2 className="font-display mb-4 text-[22px] font-semibold tracking-[-0.02em] af-text-primary">
                1. Agreement to Terms
              </h2>
              <p className="text-[15px] leading-[1.8] af-text-secondary">
                By accessing or using Axiusflow&apos;s services, website, or applications (collectively, the &quot;Services&quot;), 
                you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, 
                please do not use our Services.
              </p>
              <p className="mt-4 text-[15px] leading-[1.8] af-text-secondary">
                We reserve the right to modify these Terms at any time. We will notify you of any changes by 
                posting the new Terms on this page and updating the &quot;Last updated&quot; date. Your continued use 
                of the Services after any such changes constitutes your acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-4 text-[22px] font-semibold tracking-[-0.02em] af-text-primary">
                2. Description of Services
              </h2>
              <p className="text-[15px] leading-[1.8] af-text-secondary">
                Axiusflow provides a cloud-based trading platform that includes charting tools, trading journal 
                functionality, broker connectivity, and related services. Our Services are designed to assist 
                traders in analyzing markets and managing their trading activities.
              </p>
              <p className="mt-4 text-[15px] leading-[1.8] af-text-secondary">
                <strong className="af-text-primary font-medium">Important:</strong> Axiusflow does not provide 
                financial advice, investment recommendations, or trading signals. All trading decisions are 
                made solely by you, and you are responsible for your own trading outcomes.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-4 text-[22px] font-semibold tracking-[-0.02em] af-text-primary">
                3. User Accounts
              </h2>
              <p className="text-[15px] leading-[1.8] af-text-secondary">
                To access certain features of the Services, you must create an account. You agree to:
              </p>
              <ul className="mt-4 space-y-2 text-[15px] leading-[1.8] af-text-secondary">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>Provide accurate, current, and complete information during registration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>Maintain and promptly update your account information</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>Keep your password secure and confidential</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>Notify us immediately of any unauthorized access to your account</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display mb-4 text-[22px] font-semibold tracking-[-0.02em] af-text-primary">
                4. Acceptable Use
              </h2>
              <p className="text-[15px] leading-[1.8] af-text-secondary">
                You agree not to use the Services to:
              </p>
              <ul className="mt-4 space-y-2 text-[15px] leading-[1.8] af-text-secondary">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>Violate any applicable laws or regulations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>Infringe upon the rights of others</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>Attempt to gain unauthorized access to our systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>Distribute malware or engage in harmful activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>Resell or redistribute the Services without authorization</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display mb-4 text-[22px] font-semibold tracking-[-0.02em] af-text-primary">
                5. Intellectual Property
              </h2>
              <p className="text-[15px] leading-[1.8] af-text-secondary">
                The Services and all content, features, and functionality are owned by Axiusflow and are 
                protected by international copyright, trademark, and other intellectual property laws. 
                You may not copy, modify, distribute, or create derivative works without our express 
                written permission.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-4 text-[22px] font-semibold tracking-[-0.02em] af-text-primary">
                6. Payment and Subscriptions
              </h2>
              <p className="text-[15px] leading-[1.8] af-text-secondary">
                Certain features of the Services require a paid subscription. By subscribing, you agree to 
                pay all applicable fees. Subscriptions automatically renew unless cancelled before the renewal 
                date. Refunds are provided in accordance with our refund policy.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-4 text-[22px] font-semibold tracking-[-0.02em] af-text-primary">
                7. Disclaimer of Warranties
              </h2>
              <p className="text-[15px] leading-[1.8] af-text-secondary">
                THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, 
                EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, 
                ERROR-FREE, OR COMPLETELY SECURE.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-4 text-[22px] font-semibold tracking-[-0.02em] af-text-primary">
                8. Limitation of Liability
              </h2>
              <p className="text-[15px] leading-[1.8] af-text-secondary">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, AXIUSFLOW SHALL NOT BE LIABLE FOR ANY INDIRECT, 
                INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO 
                LOSS OF PROFITS, DATA, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF THE SERVICES.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-4 text-[22px] font-semibold tracking-[-0.02em] af-text-primary">
                9. Governing Law
              </h2>
              <p className="text-[15px] leading-[1.8] af-text-secondary">
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction 
                in which Axiusflow operates, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-4 text-[22px] font-semibold tracking-[-0.02em] af-text-primary">
                10. Contact Us
              </h2>
              <p className="text-[15px] leading-[1.8] af-text-secondary">
                If you have any questions about these Terms, please contact us at{" "}
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
              <Link
                href="/disclaimer"
                className="rounded-full border border-border px-4 py-2 text-[14px] af-text-secondary hover:af-text-primary transition-colors"
              >
                Disclaimer
              </Link>
            </div>
          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
