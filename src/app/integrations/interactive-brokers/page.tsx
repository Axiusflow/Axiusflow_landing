import { LandingTemplate } from "@/components/landing-template";

export default function Page() {
  return (
    <LandingTemplate
      eyebrow="Interactive Brokers Integration"
      h1="The Modern Interactive Brokers Trading Journal"
      intro="Turn your IBKR trade history into a focused review workflow. Import Flex Query exports, tag setups, and let personalized AI surface mistakes and strengths across stocks, options, futures, and forex."
      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "Integrations", path: "/integrations/interactive-brokers" },
        { name: "Interactive Brokers", path: "/integrations/interactive-brokers" },
      ]}
      heroLogo={{ src: "/broker_logo/Ibkr.png", name: "Interactive Brokers" }}
      relatedBrokers={{
        heading: "Also use Axiusflow with these brokers",
        logos: [
          { src: "/broker_logo/td_ameritrade.png", name: "TD Ameritrade" },
          { src: "/broker_logo/charles_shwab.png", name: "Charles Schwab" },
          { src: "/broker_logo/e_trade.png", name: "E*TRADE" },
          { src: "/broker_logo/tradestation.png", name: "TradeStation" },
        ],
      }}
      pillars={[
        { title: "IBKR Flex Query imports", body: "Bring IBKR Flex Query CSV exports into Axiusflow with automatic field mapping for stocks, options, futures, and forex." },
        { title: "Personalized AI for IBKR trades", body: "AI reviews trained on your own IBKR fills, tags, and notes — not generic advice." },
        { title: "Premium analytics", body: "Win rate, R-multiple, expectancy, and behavior tags inside a clean, modern workspace." },
      ]}
      featureGroups={[
        {
          title: "Imports & Sync",
          rows: [
            { label: "IBKR Flex Query CSV imports", status: "available" },
            { label: "Multi-currency P&L normalization", status: "available" },
            { label: "Stocks, options, futures, forex", status: "available" },
            { label: "Multi-leg option grouping", status: "available", detail: "When the export provides leg structure" },
            { label: "Direct IBKR API auto sync", status: "coming-soon" },
            { label: "Bulk historical imports", status: "available" },
          ],
        },
        {
          title: "Personalized AI",
          rows: [
            { label: "AI trained on your own IBKR trades", status: "available" },
            { label: "Recurring mistake detection", status: "available" },
            { label: "Behavior pattern recognition", status: "available" },
            { label: "Personalized review prompts", status: "available" },
            { label: "Risk and discipline insights", status: "available" },
          ],
        },
        {
          title: "Workspace & Analytics",
          rows: [
            { label: "Premium UI built for review", status: "available" },
            { label: "Win rate, R-multiple, expectancy", status: "available" },
            { label: "Custom report layouts", status: "available" },
            { label: "Tag, setup, session breakdowns", status: "available" },
            { label: "Data export (CSV)", status: "available" },
            { label: "Trade replay", status: "coming-soon" },
          ],
        },
      ]}
      howItWorks={{
        heading: "Get IBKR trades into Axiusflow in 3 steps",
        steps: [
          { title: "Generate a Flex Query", body: "From IBKR Account Management, run a Trades Flex Query and export it to CSV." },
          { title: "Import into Axiusflow", body: "Drop the CSV into Axiusflow Pro — fields, fees, and conversions map automatically." },
          { title: "Review with personalized AI", body: "Tag setups, attach notes, and let the AI surface what's actually working in your IBKR trading." },
        ],
      }}
      faq={[
        { q: "Does Axiusflow connect to Interactive Brokers via API?", a: "Today, Axiusflow supports IBKR Flex Query CSV imports cleanly and reliably. Direct API auto sync is on the roadmap and will ship when it's stable enough to depend on." },
        { q: "Can I journal IBKR options trades?", a: "Yes. Axiusflow's IBKR import handles equities, options, futures, and forex from Flex Query exports, with multi-leg trades grouped where the export provides enough context." },
        { q: "Does it handle multi-currency P&L?", a: "Yes. IBKR multi-currency fills are normalized in Axiusflow analytics so your P&L, R-multiple, and expectancy stay consistent." },
        { q: "How often should I import?", a: "Daily or weekly works well — the AI gets sharper the more recent context it has. Bulk historical imports are also supported." },
        { q: "Can I switch from another journal?", a: "Yes. If you've been using Tradezella, Tradervue, or Edgewonk with IBKR data, export to CSV and Axiusflow imports it." },
      ]}
      finalCta={{
        heading: "Make Axiusflow your Interactive Brokers journal",
        body: "Personalized AI, premium analytics, and a modern workspace built for serious IBKR traders.",
      }}
    />
  );
}
