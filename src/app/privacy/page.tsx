"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Component as Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function PrivacyPage() {
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
              Privacy Policy
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
              <p className="text-[15px] leading-[1.8] af-text-secondary">
                At Axiusflow, we take your privacy seriously. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you use our Services.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-4 text-[22px] font-semibold tracking-[-0.02em] af-text-primary">
                1. Information We Collect
              </h2>
              
              <h3 className="font-display mb-3 text-[18px] font-medium af-text-primary">
                Personal Information
              </h3>
              <p className="text-[15px] leading-[1.8] af-text-secondary">
                We may collect personal information that you voluntarily provide when using our Services, including:
              </p>
              <ul className="mt-4 space-y-2 text-[15px] leading-[1.8] af-text-secondary">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>Name and email address</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>Account credentials</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>Payment information (processed securely by third-party providers)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>Trading preferences and journal entries</span>
                </li>
              </ul>

              <h3 className="font-display mb-3 mt-6 text-[18px] font-medium af-text-primary">
                Automatically Collected Information
              </h3>
              <p className="text-[15px] leading-[1.8] af-text-secondary">
                When you access our Services, we automatically collect certain information, including:
              </p>
              <ul className="mt-4 space-y-2 text-[15px] leading-[1.8] af-text-secondary">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>Device information (type, operating system, browser)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>IP address and location data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>Usage data and analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>Cookies and similar tracking technologies</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display mb-4 text-[22px] font-semibold tracking-[-0.02em] af-text-primary">
                2. How We Use Your Information
              </h2>
              <p className="text-[15px] leading-[1.8] af-text-secondary">
                We use the information we collect to:
              </p>
              <ul className="mt-4 space-y-2 text-[15px] leading-[1.8] af-text-secondary">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>Provide, maintain, and improve our Services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>Process transactions and send related information</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>Send you technical notices, updates, and support messages</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>Respond to your comments and questions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>Analyze usage patterns to enhance user experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>Protect against fraudulent or unauthorized activity</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display mb-4 text-[22px] font-semibold tracking-[-0.02em] af-text-primary">
                3. Information Sharing
              </h2>
              <p className="text-[15px] leading-[1.8] af-text-secondary">
                We do not sell your personal information. We may share your information only in the following circumstances:
              </p>
              <ul className="mt-4 space-y-2 text-[15px] leading-[1.8] af-text-secondary">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span><strong className="af-text-primary font-medium">Service Providers:</strong> Third parties that help us operate our Services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span><strong className="af-text-primary font-medium">Legal Requirements:</strong> When required by law or to protect our rights</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span><strong className="af-text-primary font-medium">Business Transfers:</strong> In connection with a merger, acquisition, or sale</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span><strong className="af-text-primary font-medium">With Your Consent:</strong> When you have given us permission</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display mb-4 text-[22px] font-semibold tracking-[-0.02em] af-text-primary">
                4. Data Security
              </h2>
              <p className="text-[15px] leading-[1.8] af-text-secondary">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. However, 
                no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-4 text-[22px] font-semibold tracking-[-0.02em] af-text-primary">
                5. Data Retention
              </h2>
              <p className="text-[15px] leading-[1.8] af-text-secondary">
                We retain your personal information for as long as necessary to fulfill the purposes outlined 
                in this Privacy Policy, unless a longer retention period is required by law. When you delete 
                your account, we will delete or anonymize your information within 30 days.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-4 text-[22px] font-semibold tracking-[-0.02em] af-text-primary">
                6. Your Rights
              </h2>
              <p className="text-[15px] leading-[1.8] af-text-secondary">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="mt-4 space-y-2 text-[15px] leading-[1.8] af-text-secondary">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>Access and receive a copy of your data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>Correct inaccurate or incomplete data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>Request deletion of your data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>Object to or restrict processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>Data portability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>Withdraw consent at any time</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display mb-4 text-[22px] font-semibold tracking-[-0.02em] af-text-primary">
                7. International Transfers
              </h2>
              <p className="text-[15px] leading-[1.8] af-text-secondary">
                Your information may be transferred to and processed in countries other than your own. 
                We ensure appropriate safeguards are in place to protect your information in accordance 
                with applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-4 text-[22px] font-semibold tracking-[-0.02em] af-text-primary">
                8. Children&apos;s Privacy
              </h2>
              <p className="text-[15px] leading-[1.8] af-text-secondary">
                Our Services are not intended for individuals under the age of 18. We do not knowingly 
                collect personal information from children. If we learn that we have collected information 
                from a child, we will delete it promptly.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-4 text-[22px] font-semibold tracking-[-0.02em] af-text-primary">
                9. Contact Us
              </h2>
              <p className="text-[15px] leading-[1.8] af-text-secondary">
                If you have questions about this Privacy Policy or wish to exercise your rights, please 
                contact us at{" "}
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
