"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Component as Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function CookiesPage() {
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
              Cookie Policy
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
                This Cookie Policy explains how Axiusflow uses cookies and similar technologies to recognize 
                you when you visit our website and use our Services. It explains what these technologies are 
                and why we use them, as well as your rights to control their use.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-4 text-[22px] font-semibold tracking-[-0.02em] af-text-primary">
                1. What Are Cookies?
              </h2>
              <p className="text-[15px] leading-[1.8] af-text-secondary">
                Cookies are small text files that are placed on your device when you visit a website. They are 
                widely used to make websites work more efficiently and to provide information to website owners. 
                Cookies can be &quot;persistent&quot; or &quot;session&quot; cookies.
              </p>
              <ul className="mt-4 space-y-2 text-[15px] leading-[1.8] af-text-secondary">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span><strong className="af-text-primary font-medium">Persistent cookies</strong> remain on your device until they expire or you delete them</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span><strong className="af-text-primary font-medium">Session cookies</strong> are deleted when you close your browser</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display mb-4 text-[22px] font-semibold tracking-[-0.02em] af-text-primary">
                2. Types of Cookies We Use
              </h2>
              
              <div className="space-y-6">
                <div className="rounded-lg border border-border p-5">
                  <h3 className="font-display text-[16px] font-semibold af-text-primary mb-2">
                    Essential Cookies
                  </h3>
                  <p className="text-[15px] leading-[1.8] af-text-secondary">
                    These cookies are necessary for the website to function and cannot be switched off. They are 
                    usually set in response to actions you take, such as logging in or filling out forms.
                  </p>
                </div>

                <div className="rounded-lg border border-border p-5">
                  <h3 className="font-display text-[16px] font-semibold af-text-primary mb-2">
                    Performance Cookies
                  </h3>
                  <p className="text-[15px] leading-[1.8] af-text-secondary">
                    These cookies help us understand how visitors interact with our website by collecting and 
                    reporting information anonymously. This helps us improve our Services.
                  </p>
                </div>

                <div className="rounded-lg border border-border p-5">
                  <h3 className="font-display text-[16px] font-semibold af-text-primary mb-2">
                    Functional Cookies
                  </h3>
                  <p className="text-[15px] leading-[1.8] af-text-secondary">
                    These cookies enable enhanced functionality and personalization, such as remembering your 
                    preferences and settings. They may be set by us or third-party providers.
                  </p>
                </div>

                <div className="rounded-lg border border-border p-5">
                  <h3 className="font-display text-[16px] font-semibold af-text-primary mb-2">
                    Analytics Cookies
                  </h3>
                  <p className="text-[15px] leading-[1.8] af-text-secondary">
                    We use analytics cookies to track website traffic and user behavior. This information helps 
                    us understand how our Services are used and identify areas for improvement.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display mb-4 text-[22px] font-semibold tracking-[-0.02em] af-text-primary">
                3. Third-Party Cookies
              </h2>
              <p className="text-[15px] leading-[1.8] af-text-secondary">
                Some cookies are placed by third-party services that appear on our pages. We do not control 
                these cookies. Third-party cookies may include:
              </p>
              <ul className="mt-4 space-y-2 text-[15px] leading-[1.8] af-text-secondary">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>Analytics providers (e.g., Google Analytics)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>Payment processors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span>Customer support tools</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display mb-4 text-[22px] font-semibold tracking-[-0.02em] af-text-primary">
                4. Managing Cookies
              </h2>
              <p className="text-[15px] leading-[1.8] af-text-secondary">
                You can control and manage cookies in various ways. Please note that removing or blocking 
                cookies may impact your user experience and some functionality may no longer be available.
              </p>
              <ul className="mt-4 space-y-2 text-[15px] leading-[1.8] af-text-secondary">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span><strong className="af-text-primary font-medium">Browser settings:</strong> Most browsers allow you to refuse or accept cookies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span><strong className="af-text-primary font-medium">Cookie banner:</strong> Use our cookie consent tool to manage preferences</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full af-bg-text-primary" />
                  <span><strong className="af-text-primary font-medium">Opt-out links:</strong> Third-party providers often offer opt-out mechanisms</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display mb-4 text-[22px] font-semibold tracking-[-0.02em] af-text-primary">
                5. Updates to This Policy
              </h2>
              <p className="text-[15px] leading-[1.8] af-text-secondary">
                We may update this Cookie Policy from time to time to reflect changes in technology, 
                regulation, or our business practices. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-4 text-[22px] font-semibold tracking-[-0.02em] af-text-primary">
                6. Contact Us
              </h2>
              <p className="text-[15px] leading-[1.8] af-text-secondary">
                If you have questions about our use of cookies, please contact us at{" "}
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
