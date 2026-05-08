import { LandingTemplate } from "@/components/landing-template";

export default function Page() {
  return (
    <LandingTemplate
      eyebrow="For Prop Firm Traders"
      h1="The Modern Prop Firm Trading Journal with Personalized AI"
      intro="Axiusflow is built for prop firm traders running FTMO, Topstep, Apex, MyForexFunds, and challenge accounts. Import every fill, tag every rule violation, and let personalized AI keep you on the path to a funded account."
      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "For Traders", path: "/for/prop-firm-traders" },
        { name: "Prop Firm Traders", path: "/for/prop-firm-traders" },
      ]}
      relatedBrokers={{
        heading: "Works with the platforms most prop firms run on",
        logos: [
          { src: "/broker_logo/ninjatrader.png", name: "NinjaTrader" },
          { src: "/broker_logo/tradovate.png", name: "Tradovate" },
          { src: "/broker_logo/mt_5.png", name: "MetaTrader 5" },
          { src: "/broker_logo/c_trader.png", name: "cTrader" },
          { src: "/broker_logo/tradingview.png", name: "TradingView" },
          { src: "/broker_logo/oanda.png", name: "OANDA" },
        ],
      }}
      pillars={[
        { title: "Multi-account workspace", body: "Track challenge phase 1, phase 2, funded accounts, and personal capital separately inside one premium workspace." },
        { title: "Drawdown and rule tracking", body: "Tag rule violations, daily loss limits, and risk breaches so the AI flags the patterns that blow up challenges." },
        { title: "AI tuned to prop firm behavior", body: "Personalized AI catches the specific mistakes that fail challenges — overtrading, oversizing late, chasing back losses." },
      ]}
      featureGroups={[
        {
          title: "Multi-Account Workflow",
          rows: [
            { label: "Phase 1 / Phase 2 / Funded separation", status: "available" },
            { label: "Personal capital tracked separately", status: "available" },
            { label: "Per-account analytics", status: "available" },
            { label: "Full historical retention", status: "available" },
            { label: "MetaTrader 4 / 5 imports", status: "available" },
            { label: "cTrader, NinjaTrader, Tradovate imports", status: "available" },
          ],
        },
        {
          title: "Rule & Risk Tracking",
          rows: [
            { label: "Daily loss limit tagging", status: "available" },
            { label: "Max drawdown tracking", status: "available" },
            { label: "Oversize position flagging", status: "available" },
            { label: "News-trading violation tags", status: "available" },
            { label: "Consistency-rule pattern tracking", status: "available" },
          ],
        },
        {
          title: "Personalized AI",
          rows: [
            { label: "AI trained on your own challenge trades", status: "available" },
            { label: "Revenge-after-stopout detection", status: "available" },
            { label: "Late-session oversizing patterns", status: "available" },
            { label: "Rule-after-quick-green flagging", status: "available" },
            { label: "Personalized review prompts", status: "available" },
            { label: "Trade replay", status: "coming-soon" },
          ],
        },
      ]}
      howItWorks={{
        heading: "How prop firm traders use Axiusflow",
        steps: [
          { title: "Add each challenge account", body: "Phase 1, Phase 2, funded, personal — keep them separate inside Axiusflow Pro." },
          { title: "Import broker history", body: "Pull MT4 / MT5, cTrader, NinjaTrader, or Tradovate CSVs into the right account." },
          { title: "Run a personalized AI review", body: "Let the AI surface the patterns most likely to blow your next challenge so you can fix them before they cost you." },
        ],
      }}
      faq={[
        { q: "Does it work with FTMO and MyForexFunds?", a: "Yes. MetaTrader 4/5 and cTrader CSV exports import cleanly into Axiusflow, which covers most FTMO and MyForexFunds accounts." },
        { q: "Does it work with Topstep, Apex, and Earn2Trade?", a: "Yes. NinjaTrader, Tradovate, and Rithmic-based exports import cleanly — these are the platforms most futures prop firms run on." },
        { q: "Can I track multiple challenge accounts at once?", a: "Yes. Each trading account is separate inside Axiusflow's Pro workspace, with full history retention." },
        { q: "Will the AI flag rule violations?", a: "Yes — when you tag rule breaches (daily loss, max drawdown, oversize, news), the AI catches the patterns leading up to them and surfaces them in personalized reviews." },
      ]}
      finalCta={{
        heading: "Make Axiusflow your prop firm trading journal",
        body: "Personalized AI, premium UI, and clean analytics built for serious prop firm traders.",
      }}
    />
  );
}
