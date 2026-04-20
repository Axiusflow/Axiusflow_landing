"use client";

import { BarChartIcon, LightningBoltIcon, MixerHorizontalIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { FlickeringGrid } from "@/registry/magicui/flickering-grid";

type FeatureKey = "charting" | "automation" | "risk";

type FeaturePanel = {
  label: string;
  title: string;
  description: string;
  badge: string;
  stats: Array<{ label: string; value: string }>;
};

const panels: Record<FeatureKey, FeaturePanel> = {
  charting: {
    label: "Pro Charting",
    title: "Precision charting for discretionary and systematic traders",
    description:
      "Stack multi-timeframe layouts, 120+ indicators, and synchronized watchlists in a single workspace built for market speed.",
    badge: "Live BTCUSD",
    stats: [
      { label: "Indicators", value: "120+" },
      { label: "Timeframes", value: "14" },
      { label: "Saved Layouts", value: "48" },
      { label: "Real-time Streams", value: "32" },
    ],
  },
  automation: {
    label: "Signal Automation",
    title: "Automate setups, scans, and alerts without leaving your charts",
    description:
      "Define smart conditions with reusable templates, then route signals to alerts, bots, or execution workflows in seconds.",
    badge: "Signal Engine",
    stats: [
      { label: "Active Alerts", value: "1,284" },
      { label: "Scan Rules", value: "96" },
      { label: "Webhook Routes", value: "24" },
      { label: "Avg Trigger", value: "42 ms" },
    ],
  },
  risk: {
    label: "Risk Console",
    title: "Track exposure, position sizing, and portfolio risk in real time",
    description:
      "Surface portfolio heat, drawdown limits, and scenario testing across symbols and strategies before every trade.",
    badge: "Risk Monitor",
    stats: [
      { label: "Portfolio Heat", value: "6.3%" },
      { label: "Open Positions", value: "19" },
      { label: "Max Drawdown", value: "-2.1%" },
      { label: "Win/Loss Ratio", value: "1.87" },
    ],
  },
};

const toggleRows = [
  {
    key: "sync",
    title: "Multi-timeframe sync",
    description: "Link symbols, crosshairs, and drawing tools across panes.",
  },
  {
    key: "sentiment",
    title: "Sentiment layer",
    description: "Overlay news sentiment and social momentum on chart regions.",
  },
  {
    key: "risk",
    title: "Auto risk overlays",
    description: "Project stops, targets, and expected value before entry.",
  },
] as const;

type ToggleKey = (typeof toggleRows)[number]["key"];

export function TradingFeaturesSection() {
  const [activeTab, setActiveTab] = useState<FeatureKey>("charting");
  const [toggles, setToggles] = useState<Record<ToggleKey, boolean>>({
    sync: true,
    sentiment: true,
    risk: false,
  });

  const activePanel = panels[activeTab];

  return (
    <section className="af-page-bg pb-16 pt-4 transition-colors duration-300 lg:pb-20">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[760px] text-left">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] af-text-secondary">
              Trading Workspace
            </p>
            <h2 className="font-display mt-2 text-[clamp(24px,2.8vw,40px)] font-semibold leading-[1.08] tracking-[-0.018em] af-text-primary">
              A TradingView-like platform built for chart speed and execution clarity
            </h2>
            <p className="mt-3 max-w-[680px] text-[15px] leading-[1.55] af-text-secondary">
              Switch between charting, automation, and risk modules instantly.
              Keep one full dashboard in focus while every panel stays connected.
            </p>
          </div>

          <div className="inline-flex w-full max-w-[560px] flex-wrap items-center gap-2 rounded-full border border-white/10 bg-black/40 p-1.5 backdrop-blur-sm">
            {(
              [
                {
                  key: "charting",
                  label: "Pro Charting",
                  Icon: BarChartIcon,
                },
                {
                  key: "automation",
                  label: "Signal Automation",
                  Icon: LightningBoltIcon,
                },
                {
                  key: "risk",
                  label: "Risk Console",
                  Icon: MixerHorizontalIcon,
                },
              ] as const
            ).map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium transition-colors",
                  activeTab === tab.key
                    ? "bg-white/90 text-black"
                    : "af-text-secondary hover:bg-white/10 hover:text-white",
                )}
              >
                <tab.Icon className="h-3.5 w-3.5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 p-4 sm:p-5 lg:p-7">
          <FlickeringGrid
            className="pointer-events-none absolute inset-0 z-0 opacity-45 [mask-image:radial-gradient(700px_circle_at_20%_15%,white,transparent)]"
            squareSize={4}
            gridGap={6}
            color="var(--token-text-secondary)"
            maxOpacity={0.45}
            flickerChance={0.1}
          />

          <div className="relative z-10 grid gap-4 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/55 backdrop-blur-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 p-4 sm:p-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-200/90">
                    {activePanel.label}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-white sm:text-xl">
                    {activePanel.title}
                  </h3>
                  <p className="mt-1 max-w-[560px] text-sm leading-relaxed text-neutral-300">
                    {activePanel.description}
                  </p>
                </div>
                <span className="inline-flex rounded-full border border-sky-200/40 bg-sky-500/15 px-3 py-1 text-xs font-medium text-sky-100">
                  {activePanel.badge}
                </span>
              </div>

              <div className="relative h-[360px] w-full sm:h-[420px]">
                <Image
                  src="/hero_image.png"
                  alt="Trading dashboard preview"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />
                <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {activePanel.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-white/15 bg-black/45 px-3 py-2 backdrop-blur-sm"
                    >
                      <p className="text-[10px] uppercase tracking-[0.12em] text-neutral-300">
                        {stat.label}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white sm:text-base">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-black/55 p-4 sm:p-5">
                <h4 className="text-sm font-semibold text-white">Workspace Toggles</h4>
                <p className="mt-1 text-xs leading-relaxed text-neutral-300">
                  Enable modules and overlays used by your active desk.
                </p>

                <div className="mt-4 space-y-3">
                  {toggleRows.map((row) => {
                    const enabled = toggles[row.key];

                    return (
                      <div
                        key={row.key}
                        className="flex items-start justify-between gap-3 rounded-xl border border-white/10 bg-black/40 px-3 py-3"
                      >
                        <div>
                          <p className="text-sm font-medium text-white">{row.title}</p>
                          <p className="mt-1 text-xs leading-relaxed text-neutral-300">
                            {row.description}
                          </p>
                        </div>

                        <button
                          type="button"
                          role="switch"
                          aria-checked={enabled}
                          onClick={() =>
                            setToggles((prev) => ({
                              ...prev,
                              [row.key]: !prev[row.key],
                            }))
                          }
                          className={cn(
                            "relative mt-0.5 h-6 w-11 shrink-0 rounded-full border transition-colors",
                            enabled
                              ? "border-sky-300/50 bg-sky-500/30"
                              : "border-white/20 bg-black/50",
                          )}
                        >
                          <span
                            className={cn(
                              "absolute top-0.5 h-4.5 w-4.5 rounded-full bg-white transition-transform",
                              enabled ? "translate-x-[21px]" : "translate-x-[3px]",
                            )}
                          />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/55 p-4 sm:p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-sky-200/90">
                  Desk Snapshot
                </p>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  <div className="rounded-lg border border-white/10 bg-black/40 p-3">
                    <p className="text-[10px] uppercase tracking-[0.1em] text-neutral-300">
                      Alerts Fired
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">324</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-black/40 p-3">
                    <p className="text-[10px] uppercase tracking-[0.1em] text-neutral-300">
                      Avg Latency
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">67 ms</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-black/40 p-3">
                    <p className="text-[10px] uppercase tracking-[0.1em] text-neutral-300">
                      Win Rate
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">63.2%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
