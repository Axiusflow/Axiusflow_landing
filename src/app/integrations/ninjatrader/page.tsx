import { LandingTemplate } from "@/components/landing-template";

export default function Page() {
  return (
    <LandingTemplate
      eyebrow="NinjaTrader Integration"
      h1="The Modern NinjaTrader Trading Journal"
      intro="Axiusflow is the trading journal NinjaTrader futures traders actually want. Import NinjaTrader fills, tag setups, and review every session with personalized AI in a premium workspace."
      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "Integrations", path: "/integrations/ninjatrader" },
        { name: "NinjaTrader", path: "/integrations/ninjatrader" },
      ]}
      heroLogo={{ src: "/broker_logo/ninjatrader.png", name: "NinjaTrader" }}
      relatedBrokers={{
        heading: "Also use Axiusflow with these futures platforms",
        logos: [
          { src: "/broker_logo/tradovate.png", name: "Tradovate" },
          { src: "/broker_logo/amp_futures.png", name: "AMP Futures" },
          { src: "/broker_logo/tradestation.png", name: "TradeStation" },
          { src: "/broker_logo/Ibkr.png", name: "Interactive Brokers" },
        ],
      }}
      pillars={[
        { title: "NinjaTrader CSV imports", body: "Drop NinjaTrader executions exports into Axiusflow — fills, contracts, fees, and timestamps map automatically." },
        { title: "Built for futures workflows", body: "ES, NQ, MES, MNQ, CL, GC, micro futures — Axiusflow handles tick value and contract specs cleanly." },
        { title: "Personalized AI review", body: "AI trained on your own NinjaTrader trades surfaces patterns specific to your futures style." },
      ]}
      featureGroups={[
        {
          title: "Imports & Sync",
          rows: [
            { label: "NinjaTrader executions CSV", status: "available" },
            { label: "Trade Performance window export", status: "available" },
            { label: "Strategy Analyzer export", status: "available" },
            { label: "Bulk historical imports", status: "available" },
            { label: "Direct NinjaTrader auto sync", status: "coming-soon" },
          ],
        },
        {
          title: "Futures Coverage",
          rows: [
            { label: "ES / MES tick normalization", status: "available" },
            { label: "NQ / MNQ tick normalization", status: "available" },
            { label: "RTY / M2K, YM / MYM pairs", status: "available" },
            { label: "CL, GC, NG, ZB and majors", status: "available" },
            { label: "Prop firm accounts (Topstep, Apex)", status: "available" },
          ],
        },
        {
          title: "Workspace & AI",
          rows: [
            { label: "Premium UI for long sessions", status: "available" },
            { label: "Personalized AI on your trades", status: "available" },
            { label: "Win rate, R-multiple, expectancy", status: "available" },
            { label: "Tag, setup, session breakdowns", status: "available" },
            { label: "Data export (CSV)", status: "available" },
            { label: "Trade replay", status: "coming-soon" },
          ],
        },
      ]}
      howItWorks={{
        heading: "Get NinjaTrader trades into Axiusflow in 3 steps",
        steps: [
          { title: "Export executions", body: "From NinjaTrader's Trade Performance window or Strategy Analyzer, export your fills to CSV." },
          { title: "Import into Axiusflow", body: "Drop the CSV — contract specs, tick values, and fees are mapped automatically, including micro contracts." },
          { title: "Review with personalized AI", body: "Tag setups, attach session notes, and let the AI catch the futures-specific mistakes blowing up your sessions." },
        ],
      }}
      faq={[
        { q: "Does Axiusflow auto-sync with NinjaTrader?", a: "Direct auto sync isn't shipped today. NinjaTrader CSV imports are reliable and well-mapped, and we'll ship deeper integration when it materially improves the review workflow." },
        { q: "Does it work for prop firm NinjaTrader accounts?", a: "Yes. Topstep, Apex, Earn2Trade and similar prop accounts that run on NinjaTrader work the same way — export executions and import." },
        { q: "Are micro contracts handled?", a: "Yes. Axiusflow normalizes tick values for ES/MES, NQ/MNQ, RTY/M2K, YM/MYM and similar contract pairs so your R-multiple and expectancy are accurate." },
        { q: "Can I import historical NinjaTrader data?", a: "Yes. Bulk historical CSV imports are supported, with full retention on the Pro plan." },
      ]}
      finalCta={{
        heading: "Make Axiusflow your NinjaTrader journal",
        body: "Modern UI. Personalized AI. Premium analytics. Built for serious futures traders.",
      }}
    />
  );
}
