import { LandingTemplate } from "@/components/landing-template";

export default function Page() {
  return (
    <LandingTemplate
      eyebrow="TradeStation Integration"
      h1="The Modern TradeStation Trading Journal"
      intro="Axiusflow brings TradeStation trade history into a premium review workspace. Import equities, options, and futures trades, tag setups, and let personalized AI surface what's actually working."
      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "Integrations", path: "/integrations/tradestation" },
        { name: "TradeStation", path: "/integrations/tradestation" },
      ]}
      heroLogo={{ src: "/broker_logo/tradestation.png", name: "TradeStation" }}
      relatedBrokers={{
        heading: "Also use Axiusflow with these brokers",
        logos: [
          { src: "/broker_logo/Ibkr.png", name: "Interactive Brokers" },
          { src: "/broker_logo/ninjatrader.png", name: "NinjaTrader" },
          { src: "/broker_logo/tradovate.png", name: "Tradovate" },
          { src: "/broker_logo/td_ameritrade.png", name: "TD Ameritrade" },
        ],
      }}
      pillars={[
        { title: "TradeStation CSV imports", body: "Import TradeStation account history exports cleanly across equities, options, and futures." },
        { title: "Personalized AI review", body: "AI trained on your TradeStation trades surfaces context-aware mistakes and repeatable strengths." },
        { title: "Premium analytics dashboard", body: "Win rate, R-multiple, expectancy, behavior tags — inside a calm, modern UI." },
      ]}
      featureGroups={[
        {
          title: "Imports & Sync",
          rows: [
            { label: "TradeStation account history CSV", status: "available" },
            { label: "Equities, options, futures", status: "available" },
            { label: "Multi-leg option grouping", status: "available" },
            { label: "Bulk historical imports", status: "available" },
            { label: "Direct TradeStation API auto sync", status: "coming-soon" },
          ],
        },
        {
          title: "Personalized AI",
          rows: [
            { label: "AI trained on your own trades", status: "available" },
            { label: "Recurring mistake detection", status: "available" },
            { label: "Behavior pattern recognition", status: "available" },
            { label: "Personalized review prompts", status: "available" },
          ],
        },
        {
          title: "Workspace & Analytics",
          rows: [
            { label: "Premium UI for review sessions", status: "available" },
            { label: "Win rate, R-multiple, expectancy", status: "available" },
            { label: "Tick value normalization (futures)", status: "available" },
            { label: "Custom report layouts", status: "available" },
            { label: "Data export (CSV)", status: "available" },
            { label: "Trade replay", status: "coming-soon" },
          ],
        },
      ]}
      howItWorks={{
        heading: "Get TradeStation trades into Axiusflow in 3 steps",
        steps: [
          { title: "Export account history", body: "From TradeStation's account history view, export trades to CSV across the date range you want to journal." },
          { title: "Import into Axiusflow", body: "Symbols, fills, fees, and option leg structures map automatically." },
          { title: "Review with personalized AI", body: "Tag setups and let the AI surface what's working across your equities, options, and futures." },
        ],
      }}
      faq={[
        { q: "Does Axiusflow connect to TradeStation via API?", a: "TradeStation CSV imports are supported today. Direct API auto sync is on the roadmap and will ship when it's reliable." },
        { q: "Does it work for futures and options?", a: "Yes. Axiusflow handles equities, options, and futures from TradeStation, with tick value normalization for futures contracts." },
        { q: "Can I import years of TradeStation history?", a: "Yes. Bulk historical CSV imports are supported, with full retention on the Pro plan." },
        { q: "Will the AI work on options spreads?", a: "Yes — multi-leg trades are recognized when the export provides enough structure, and reviews account for net P&L per strategy." },
      ]}
      finalCta={{
        heading: "Make Axiusflow your TradeStation journal",
        body: "Modern UI. Personalized AI. Premium analytics. Built for serious traders.",
      }}
    />
  );
}
