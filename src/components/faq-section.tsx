"use client";

import { HelpCircleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { faqItems } from "@/lib/seo";

export function FAQSection() {
  const [openItem, setOpenItem] = useState<string>();

  return (
    <section className="af-page-bg min-h-[940px] py-16 lg:min-h-[980px] lg:py-24">
      <div className="mx-auto max-w-[800px] px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-[8px] border border-border af-surface-bg px-4 py-1.5">
            <HugeiconsIcon icon={HelpCircleIcon} className="h-4 w-4 af-text-secondary" />
          <span className="text-[13px] font-medium af-text-secondary">
              FAQ
            </span>
          </div>
          <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-semibold leading-[1.1] tracking-[-0.02em] af-text-primary">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-[540px] text-[15px] leading-[1.6] af-text-secondary">
            Answers for traders comparing charting, journaling, replay, AI review, and market-data workflows.
          </p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item) => {
            const isOpen = openItem === item.id;

            return (
              <div
                key={item.id}
                className={cn(
                  "group rounded-xl p-4 transition-colors duration-200 ease-out has-[:focus-visible]:bg-[var(--token-surface-muted)] has-[:focus-visible]:ring-transparent",
                  isOpen
                    ? "bg-[var(--token-surface-muted)] ring-0"
                    : "bg-[var(--token-surface)] ring-1 ring-inset ring-border hover:bg-[var(--token-surface-muted)] hover:ring-transparent",
                )}
                data-open={isOpen}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`${item.id}-answer`}
                  onClick={() => setOpenItem(isOpen ? undefined : item.id)}
                  className="flex w-full cursor-pointer items-center justify-between gap-3 text-left text-[15px] font-medium af-text-primary outline-none"
                >
                  <span>{item.question}</span>
                  <span className="grid size-5 shrink-0 place-items-center af-text-secondary transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:af-text-primary group-data-[open=true]:rotate-45">
                    +
                  </span>
                </button>
                <div
                  id={`${item.id}-answer`}
                  className="grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-data-[open=true]:grid-rows-[1fr] group-data-[open=true]:opacity-100"
                >
                  <div className="overflow-hidden">
                    <p className="pt-3 text-[14px] leading-relaxed af-text-secondary">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
