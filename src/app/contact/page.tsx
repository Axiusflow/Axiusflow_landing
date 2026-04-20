"use client";

import { Moon, Sun, ArrowLeft, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useSyncExternalStore, useState } from "react";
import { Component as Footer } from "@/components/footer";

function subscribe() {
  return () => {};
}

const benefits = [
  "Connect all your brokers in one unified platform",
  "Get personalized onboarding and setup assistance",
  "Access priority support and dedicated account management",
  "Custom integrations tailored to your workflow",
  "Enterprise-grade security with SSO and audit logs",
];

const stats = [
  { value: "85%", label: "of traders say journaling improved their win rate" },
  { value: "3x", label: "faster trade execution with unified broker access" },
  { value: "60%", label: "reduction in time spent switching between tools" },
  { value: "500+", label: "professional traders already using Axiusflow" },
];

const companySizes = [
  "Please Select",
  "Individual Trader",
  "2-10 traders",
  "11-50 traders",
  "51-200 traders",
  "201-500 traders",
  "500+ traders",
];

export default function ContactPage() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const [companySize, setCompanySize] = useState("Please Select");

  return (
    <div className="min-h-screen af-page-bg transition-colors duration-300">
      {/* Header */}
      <header className="relative z-50 af-page-bg transition-colors duration-300">
        <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between px-6 py-5">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/brand/logo.svg"
                alt="Axiusflow logo"
                width={24}
                height={24}
                className="h-6 w-6"
                priority
              />
              <span className="font-display text-[19px] font-semibold af-text-primary">
                Axiusflow
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex h-9 w-9 items-center justify-center rounded-[8px] af-text-secondary transition-colors af-nav-hover"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>
            )}
            <Link
              href="/"
              className="flex items-center gap-2 rounded-[8px] px-3 py-2 text-[15px] font-medium af-text-primary transition-colors af-nav-hover"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-16">
        <div className="mx-auto max-w-[960px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column */}
            <div>
              <h1 className="font-display text-[clamp(36px,5vw,48px)] font-semibold leading-[1.1] tracking-[-0.02em] af-text-primary mb-6">
                Contact Sales
              </h1>
              <p className="text-[17px] leading-[1.7] af-text-secondary mb-8">
                We can give you a demo, help you choose the best plan, or provide 
                onboarding support to ensure you get the most out of Axiusflow.
              </p>

              {/* Benefits List */}
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#7c3aed] dark:text-[#a78bfa] mt-0.5 flex-shrink-0" />
                    <span className="text-[15px] af-text-primary">{benefit}</span>
                  </li>
                ))}
              </ul>

              <p className="text-[15px] af-text-secondary mb-12">
                For product support,{" "}
                <Link href="#" className="text-[#7c3aed] dark:text-[#a78bfa] underline underline-offset-2">
                  visit our Help Center
                </Link>
                . Or, get advice from traders in our{" "}
                <Link href="#" className="text-[#7c3aed] dark:text-[#a78bfa] underline underline-offset-2">
                  Discord community
                </Link>
                .
              </p>

              {/* Divider */}
              <div className="border-t border-[#f5f5f5] dark:border-[#171717] mb-12" />

              {/* Stats Section */}
              <h2 className="font-display text-2xl font-semibold af-text-primary mb-8">
                Elevate Your Trading with Axiusflow
              </h2>

              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="font-display text-[40px] font-semibold text-[#7c3aed] dark:text-[#a78bfa] leading-none mb-2">
                      {stat.value}
                    </div>
                    <p className="text-[14px] af-text-secondary leading-[1.5]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <form className="space-y-6">
                {/* Email */}
                <div>
                  <label className="block text-[14px] font-medium af-text-primary mb-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#f5f5f5] dark:border-[#171717] af-page-bg af-text-primary text-[15px] outline-none focus:border-[#7c3aed] dark:focus:border-[#a78bfa] transition-colors"
                  />
                </div>

                {/* First & Last Name */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[14px] font-medium af-text-primary mb-2">
                      First name*
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#f5f5f5] dark:border-[#171717] af-page-bg af-text-primary text-[15px] outline-none focus:border-[#7c3aed] dark:focus:border-[#a78bfa] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[14px] font-medium af-text-primary mb-2">
                      Last name*
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#f5f5f5] dark:border-[#171717] af-page-bg af-text-primary text-[15px] outline-none focus:border-[#7c3aed] dark:focus:border-[#a78bfa] transition-colors"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-[14px] font-medium af-text-primary mb-2">
                    Company name*
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#f5f5f5] dark:border-[#171717] af-page-bg af-text-primary text-[15px] outline-none focus:border-[#7c3aed] dark:focus:border-[#a78bfa] transition-colors"
                  />
                </div>

                {/* Job Title */}
                <div>
                  <label className="block text-[14px] font-medium af-text-primary mb-2">
                    Job title*
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#f5f5f5] dark:border-[#171717] af-page-bg af-text-primary text-[15px] outline-none focus:border-[#7c3aed] dark:focus:border-[#a78bfa] transition-colors"
                  />
                </div>

                {/* Company Size */}
                <div>
                  <label className="block text-[14px] font-medium af-text-primary mb-2">
                    Company size*
                  </label>
                  <select
                    value={companySize}
                    onChange={(e) => setCompanySize(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#f5f5f5] dark:border-[#171717] af-page-bg af-text-primary text-[15px] outline-none focus:border-[#7c3aed] dark:focus:border-[#a78bfa] transition-colors appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23666%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_1rem]"
                  >
                    {companySizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[14px] font-medium af-text-primary mb-2">
                    Is there any other information you&apos;d like to share with us?*
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#f5f5f5] dark:border-[#171717] af-page-bg af-text-primary text-[15px] outline-none focus:border-[#7c3aed] dark:focus:border-[#a78bfa] transition-colors resize-none"
                  />
                </div>

                {/* Privacy Notice */}
                <p className="text-[13px] af-text-secondary leading-[1.6]">
                  Axiusflow needs the contact information you provide to us to contact you 
                  about our products and services. You may opt out from these communications 
                  at any time. By submitting your information, you agree to Axiusflow&apos;s{" "}
                  <Link href="#" className="text-[#7c3aed] dark:text-[#a78bfa] underline underline-offset-2">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-[#7c3aed] dark:text-[#a78bfa] underline underline-offset-2">
                    Privacy Policy
                  </Link>
                  .
                </p>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-medium text-[15px] rounded-lg transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
