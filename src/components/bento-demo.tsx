"use client";

import { useRef } from "react";
import Image from "next/image";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import {
  Clock01Icon,
  GlobeIcon,
  Layers01Icon,
  Notification03Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

// Broker logos from the public folder
const brokers = [
  { name: "Interactive Brokers", logo: "/broker_logo/Ibkr.png" },
  { name: "TD Ameritrade", logo: "/broker_logo/td_ameritrade.png" },
  { name: "TradingView", logo: "/broker_logo/tradingview.png" },
  { name: "Robinhood", logo: "/broker_logo/robinhood.png" },
  { name: "Webull", logo: "/broker_logo/webull.png" },
  { name: "NinjaTrader", logo: "/broker_logo/ninjatrader.png" },
];

// Card Visual Components
function IntegrationsVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const broker1Ref = useRef<HTMLDivElement>(null);
  const broker2Ref = useRef<HTMLDivElement>(null);
  const broker3Ref = useRef<HTMLDivElement>(null);
  const broker4Ref = useRef<HTMLDivElement>(null);
  const broker5Ref = useRef<HTMLDivElement>(null);
  const broker6Ref = useRef<HTMLDivElement>(null);

  const brokerRefs = [broker1Ref, broker2Ref, broker3Ref, broker4Ref, broker5Ref, broker6Ref];

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-full flex items-center justify-center p-4"
    >
      {/* Left column - 3 brokers */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-10">
        {brokers.slice(0, 3).map((broker, i) => (
          <div
            key={broker.name}
            ref={brokerRefs[i]}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-white/90 overflow-hidden p-1.5"
            title={broker.name}
          >
            <Image
              src={broker.logo}
              alt={broker.name}
              width={28}
              height={28}
              className="w-7 h-7 object-contain"
            />
          </div>
        ))}
      </div>

      {/* Center - Axiusflow Logo */}
      <div
        ref={centerRef}
        className="relative z-20 w-16 h-16 rounded-full bg-blue-500 border-2 border-blue-600 shadow-lg flex items-center justify-center overflow-hidden"
      >
        <Image
          src="/brand/logo_transparent.svg"
          alt="Axiusflow"
          width={40}
          height={40}
          className="w-10 h-10 object-contain"
        />
      </div>

      {/* Right column - 3 brokers */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-10">
        {brokers.slice(3, 6).map((broker, i) => (
          <div
            key={broker.name}
            ref={brokerRefs[i + 3]}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-white/90 overflow-hidden p-1.5"
            title={broker.name}
          >
            <Image
              src={broker.logo}
              alt={broker.name}
              width={28}
              height={28}
              className="w-7 h-7 object-contain"
            />
          </div>
        ))}
      </div>

      {/* Animated Beams - Left side */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={broker1Ref}
        toRef={centerRef}
        curvature={-40}
        duration={3}
        delay={0}
        pathColor="gray"
        pathOpacity={0.1}
        gradientStartColor="#3b82f6"
        gradientStopColor="#8b5cf6"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={broker2Ref}
        toRef={centerRef}
        curvature={0}
        duration={3}
        delay={0.5}
        pathColor="gray"
        pathOpacity={0.1}
        gradientStartColor="#10b981"
        gradientStopColor="#3b82f6"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={broker3Ref}
        toRef={centerRef}
        curvature={40}
        duration={3}
        delay={1}
        pathColor="gray"
        pathOpacity={0.1}
        gradientStartColor="#f59e0b"
        gradientStopColor="#ef4444"
      />

      {/* Animated Beams - Right side (reverse) */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={broker4Ref}
        curvature={40}
        duration={3}
        delay={0.25}
        pathColor="gray"
        pathOpacity={0.1}
        gradientStartColor="#8b5cf6"
        gradientStopColor="#ec4899"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={broker5Ref}
        curvature={0}
        duration={3}
        delay={0.75}
        pathColor="gray"
        pathOpacity={0.1}
        gradientStartColor="#3b82f6"
        gradientStopColor="#06b6d4"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={broker6Ref}
        curvature={-40}
        duration={3}
        delay={1.25}
        pathColor="gray"
        pathOpacity={0.1}
        gradientStartColor="#eab308"
        gradientStopColor="#22c55e"
      />
    </div>
  );
}

function CalendarVisual() {
  return (
    <div className="w-full max-w-[220px] mx-auto rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-3 shadow-sm">
      {/* Timeframe tabs */}
      <div className="flex gap-1 mb-3">
        {['1H', '4H', '1D'].map((tf, i) => (
          <span 
            key={tf} 
            className={`flex-1 text-center text-xs py-1 rounded ${
              i === 1 ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-white/10 af-text-secondary'
            }`}
          >
            {tf}
          </span>
        ))}
      </div>
      {/* Mini chart representations */}
      <div className="space-y-2">
        {[
          { tf: '1H', trend: 'up', bars: [40, 45, 42, 50, 55, 52, 60] },
          { tf: '4H', trend: 'up', bars: [30, 35, 45, 50, 48, 55, 58] },
          { tf: '1D', trend: 'down', bars: [60, 55, 50, 45, 48, 42, 40] },
        ].map((chart) => (
          <div key={chart.tf} className="flex items-center gap-2">
            <span className="w-6 text-xs font-medium af-text-secondary">{chart.tf}</span>
            <div className="flex-1 h-6 flex items-end gap-0.5">
              {chart.bars.map((h, i) => (
                <div 
                  key={i} 
                  className={`flex-1 rounded-sm ${chart.trend === 'up' ? 'bg-emerald-400' : 'bg-red-400'}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <span className={`text-xs ${chart.trend === 'up' ? 'text-emerald-500' : 'text-red-500'}`}>
              {chart.trend === 'up' ? '↑' : '↓'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TimezoneVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative">
        {/* World map dots pattern */}
        <div className="w-56 h-32 rounded-xl bg-gradient-to-r from-gray-100 to-gray-50 dark:from-white/5 dark:to-white/10 flex items-center justify-center">
          <HugeiconsIcon
            icon={GlobeIcon}
            className="w-16 h-16 text-gray-300 dark:text-white/20"
            strokeWidth={0.5}
          />
        </div>
        {/* Market session badges */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-[8px] bg-emerald-100 dark:bg-emerald-500/20 text-xs font-medium text-emerald-600 dark:text-emerald-400">
          TSE Open
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 -left-4 px-2 py-1 rounded-[8px] bg-blue-100 dark:bg-blue-500/20 text-xs text-blue-600 dark:text-blue-400">
          NYSE
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 -right-4 px-2 py-1 rounded-[8px] bg-amber-100 dark:bg-amber-500/20 text-xs text-amber-600 dark:text-amber-400">
          LSE
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-[8px] bg-blue-500 text-white text-xs font-medium">
          Live
        </div>
      </div>
    </div>
  );
}

function RemindersVisual() {
  return (
    <div className="w-full max-w-[360px] mx-auto rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <HugeiconsIcon icon={Notification03Icon} className="w-4 h-4 af-text-secondary" />
          <span className="text-sm font-medium af-text-primary">Price Alerts</span>
        </div>
        <button className="text-xs px-3 py-1 rounded-[8px] border border-gray-200 dark:border-white/10 af-text-secondary">
          + New Alert
        </button>
      </div>
      <div className="space-y-3">
        {[
          { active: true, symbol: 'AAPL', condition: 'Above', price: '$185.00', color: 'text-emerald-500' },
          { active: true, symbol: 'TSLA', condition: 'Below', price: '$240.00', color: 'text-red-500' },
          { active: false, symbol: 'SPY', condition: 'Cross', price: '$450.00', color: 'text-blue-500' },
        ].map((alert, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className={`w-9 h-5 rounded-full ${alert.active ? 'bg-blue-500' : 'bg-gray-200 dark:bg-white/10'} relative`}>
              <div className={`absolute top-0.5 ${alert.active ? 'right-0.5' : 'left-0.5'} w-4 h-4 rounded-full bg-white shadow-sm`} />
            </div>
            <div className="w-14 h-8 rounded-lg border border-gray-200 dark:border-white/10 flex items-center justify-center text-sm font-medium af-text-primary">
              {alert.symbol}
            </div>
            <div className={`w-16 h-8 rounded-lg border border-gray-200 dark:border-white/10 flex items-center justify-center text-xs ${alert.color}`}>
              {alert.condition}
            </div>
            <div className="flex-1 h-8 rounded-lg border border-gray-200 dark:border-white/10 flex items-center px-3 text-sm af-text-primary">
              {alert.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeamMembersVisual() {
  return (
    <div className="w-full max-w-[280px] mx-auto rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-4 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <HugeiconsIcon icon={Layers01Icon} className="w-4 h-4 af-text-secondary" />
        <span className="text-sm font-medium af-text-primary">Trading Accounts</span>
      </div>
      <div className="text-xs af-text-secondary mb-2">Connected (3)</div>
      <div className="space-y-2">
        {[
          { name: 'Interactive Brokers', balance: '$48,250.00', status: 'Active', statusColor: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400', logo: '/broker_logo/Ibkr.png' },
          { name: 'TD Ameritrade', balance: '$12,840.50', status: 'Active', statusColor: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400', logo: '/broker_logo/td_ameritrade.png' },
          { name: 'Robinhood', balance: '$5,120.25', status: 'Paper', statusColor: 'bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400', logo: '/broker_logo/robinhood.png' },
        ].map((account, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white dark:bg-white/90 flex items-center justify-center overflow-hidden p-1">
              <Image src={account.logo} alt={account.name} width={24} height={24} className="w-6 h-6 object-contain" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium af-text-primary truncate">{account.name}</div>
              <div className="text-xs af-text-secondary">{account.balance}</div>
            </div>
            <span className={`text-xs px-2 py-0.5 rounded whitespace-nowrap ${account.statusColor}`}>{account.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function GroupBookingVisual() {
  return (
    <div className="w-full max-w-[200px] mx-auto rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 overflow-hidden shadow-sm">
      <div className="p-3 border-b border-gray-100 dark:border-white/5">
        <div className="text-sm font-medium af-text-primary">Order Types</div>
        <div className="text-xs af-text-secondary mt-1">Execute any strategy</div>
      </div>
      <div className="p-3 space-y-2">
        {[
          { type: 'Market', desc: 'Instant execution', color: 'bg-emerald-500' },
          { type: 'Limit', desc: 'Set your price', color: 'bg-blue-500' },
          { type: 'Stop Loss', desc: 'Protect positions', color: 'bg-red-500' },
          { type: 'OCO', desc: 'One cancels other', color: 'bg-purple-500' },
        ].map((order, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${order.color}`} />
            <span className="text-xs font-medium af-text-primary">{order.type}</span>
            <span className="text-xs af-text-secondary ml-auto">{order.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DurationVisual() {
  return (
    <div className="flex flex-wrap gap-2 justify-center max-w-[220px] mx-auto">
      {['1m', '5m', '15m', '1H', '4H', '1D', '1W', '1M'].map((timeframe, i) => (
        <span 
          key={i} 
          className={`px-3 py-1.5 rounded-[8px] text-xs font-medium ${
            timeframe === '4H' 
              ? 'bg-gray-900 text-white dark:bg-white dark:text-black' 
              : 'border border-gray-200 dark:border-white/10 af-text-secondary'
          }`}
        >
          {timeframe}
        </span>
      ))}
    </div>
  );
}

function BlockDatesVisual() {
  return (
    <div className="w-full max-w-[240px] mx-auto rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-4 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <HugeiconsIcon icon={Clock01Icon} className="w-4 h-4 af-text-secondary" />
        <span className="text-sm font-medium af-text-primary">Market Sessions</span>
      </div>
      <div className="space-y-2">
        {[
          { session: 'Pre-Market', active: true, times: ['4:00 AM', '9:30 AM'], color: 'text-amber-500' },
          { session: 'Regular', active: true, times: ['9:30 AM', '4:00 PM'], color: 'text-emerald-500' },
          { session: 'After-Hours', active: false, times: ['4:00 PM', '8:00 PM'], color: 'text-purple-500' },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className={`w-8 h-4 rounded-full ${item.active ? 'bg-blue-500' : 'bg-gray-200 dark:bg-white/10'} relative`}>
              <div className={`absolute top-0.5 ${item.active ? 'right-0.5' : 'left-0.5'} w-3 h-3 rounded-full bg-white shadow-sm`} />
            </div>
            <span className={`w-20 text-xs font-medium ${item.color}`}>{item.session}</span>
            <div className="flex gap-1">
              {item.times.map((t, j) => (
                <span key={j} className="text-xs px-1.5 py-0.5 rounded border border-gray-200 dark:border-white/10 af-text-secondary">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function BentoDemo() {
  return (
    <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {/* Row 1: 3 equal cards */}
      <BentoCard
        title="Broker Integrations"
        description="Connect to 15+ brokers and trading platforms with one-click setup."
      >
        <IntegrationsVisual />
      </BentoCard>

      <BentoCard
        title="Multi-Timeframe Analysis"
        description="Analyze charts across multiple timeframes simultaneously to spot trends and patterns."
      >
        <CalendarVisual />
      </BentoCard>

      <BentoCard
        title="Global Market Coverage"
        description="Trade markets across any timezone with automatic session detection and market hours."
      >
        <TimezoneVisual />
      </BentoCard>

      {/* Row 2: 2 cards (wider left, narrower right) */}
      <BentoCard
        title="Smart Alerts & Real-Time Notifications"
        description="Get instant alerts for price movements, technical signals, and market events."
        className="lg:col-span-2"
      >
        <RemindersVisual />
      </BentoCard>

      <BentoCard
        title="Multi-Account Management"
        description="Manage multiple trading accounts and portfolios from a single dashboard."
      >
        <TeamMembersVisual />
      </BentoCard>

      {/* Row 3: 3 equal cards */}
      <BentoCard
        title="Advanced Order Types"
        description="From market orders to complex brackets and OCO, execute any strategy with precision."
      >
        <GroupBookingVisual />
      </BentoCard>

      <BentoCard
        title="Customizable Timeframes"
        description="From tick charts to monthly candles, analyze any timeframe that fits your strategy."
      >
        <DurationVisual />
      </BentoCard>

      <BentoCard
        title="Market Sessions & Hours"
        description="Automatic detection of pre-market, regular hours, and after-hours trading sessions."
      >
        <BlockDatesVisual />
      </BentoCard>
    </BentoGrid>
  );
}
