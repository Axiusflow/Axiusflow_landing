import { LandingTemplate } from "@/components/landing-template";

export default function Page() {
  return (
    <LandingTemplate
      eyebrow="Webull Integration"
      h1="The Modern Webull Trading Journal"
      intro="Axiusflow brings Webull trade history into a premium review workspace. Import stock and options trades, tag setups, and let personalized AI review your decisions across every session."
      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "Integrations", path: "/integrations/webull" },
        { name: "Webull", path: "/integrations/webull" },
      ]}
      heroLogo={{ src: "/broker_logo/webull.png", name: "Webull" }}
      relatedBrokers={{
        heading: "Also use Axiusflow with these retail brokers",
        logos: [
          { src: "/broker_logo/robinhood.png", name: "Robinhood" },
          { src: "/broker_logo/td_ameritrade.png", name: "TD Ameritrade" },
          { src: "/broker_logo/e_trade.png", name: "E*TRADE" },
          { src: "/broker_logo/charles_shwab.png", name: "Charles Schwab" },
        ],
      }}
      pillars={[
        { title: "Webull CSV imports", body: "Pull Webull statements and trade history into Axiusflow with clean field mapping." },
        { title: "Stocks and options", body: "Equities and option legs are handled, with multi-leg trades grouped where context allows." },
        { title: "Personalized AI insights", body: "AI tuned on your own Webull trades — not generic templates." },
      ]}
      featureGroups={[
        {
          title: "Imports & Sync",
          rows: [
            { label: "Webull statements CSV import", status: "available" },
            { label: "Trade history CSV import", status: "available" },
            { label: "Equities", status: "available" },
            { label: "Options (multi-leg recognition)", status: "available" },
            { label: "Direct Webull API auto sync", status: "coming-soon" },
            { label: "Bulk historical imports", status: "available" },
          ],
        },
        {
          title: "Personalized AI",
          rows: [
            { label: "AI trained on your own Webull trades", status: "available" },
            { label: "Overtrading and oversizing detection", status: "available" },
            { label: "Recurring mistake patterns", status: "available" },
            { label: "Personalized review prompts", status: "available" },
          ],
        },
        {
          title: "Workspace & Analytics",
          rows: [
            { label: "Premium UI built for review", status: "available" },
            { label: "Win rate, R-multiple, expectancy", status: "available" },
            { label: "Tag, setup, session breakdowns", status: "available" },
            { label: "Custom report layouts", status: "available" },
            { label: "Data export (CSV)", status: "available" },
            { label: "Trade replay", status: "coming-soon" },
          ],
        },
      ]}
      howItWorks={{
        heading: "Get Webull trades into Axiusflow in 3 steps",
        steps: [
          { title: "Export from Webull", body: "Generate your Webull trade history CSV from the statements page." },
          { title: "Import into Axiusflow", body: "Drop the CSV — symbols, fills, fees, and option legs map automatically." },
          { title: "Review with personalized AI", body: "Tag setups and let the AI surface the patterns actually working in your stock and options trading." },
        ],
      }}
      faq={[
        { q: "Does Axiusflow auto-sync with Webull?", a: "Webull CSV imports are supported today; deeper auto sync arrives when broker access is reliable enough to depend on." },
        { q: "Are options trades handled?", a: "Yes. Equity and option legs from Webull statements are recognized, with multi-leg grouping when the export structure allows it." },
        { q: "Can I import old Webull history?", a: "Yes. Bulk historical CSV imports work and retention is full on the Pro plan." },
        { q: "Will the AI handle penny stocks and high-volume scalps?", a: "Yes. The AI weights pattern frequency and behavior, so it works the same on penny stock scalps and longer-term swing trades." },
      ]}
      finalCta={{
        heading: "Make Axiusflow your Webull journal",
        body: "Personalized AI, premium UI, and clean analytics for serious Webull traders.",
      }}
    />
  );
}
