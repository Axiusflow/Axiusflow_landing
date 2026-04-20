"use client";

import { useRef } from "react";
import Image from "next/image";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { 
  Calendar, 
  Globe, 
  Bell, 
  Users, 
  Clock, 
  CalendarCheck,
  Layers,
  Timer
} from "lucide-react";
import { cn } from "@/lib/utils";

// Broker icons as simple text badges for now
const brokers = [
  { name: "IB", label: "Interactive Brokers", color: "bg-red-500" },
  { name: "TD", label: "TD Ameritrade", color: "bg-green-600" },
  { name: "FD", label: "Fidelity", color: "bg-emerald-500" },
  { name: "SC", label: "Schwab", color: "bg-blue-600" },
  { name: "ET", label: "E*TRADE", color: "bg-purple-600" },
  { name: "RH", label: "Robinhood", color: "bg-yellow-500" },
];

// Circle component for the beam nodes
const Circle = ({ className, children, ref }: { className?: string; children?: React.ReactNode; ref?: React.RefObject<HTMLDivElement | null> }) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex items-center justify-center rounded-full border-2 border-gray-200 dark:border-white/20 bg-white dark:bg-white/10 shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
};

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
      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-6">
        {brokers.slice(0, 3).map((broker, i) => (
          <div
            key={broker.name}
            ref={brokerRefs[i]}
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md",
              broker.color
            )}
            title={broker.label}
          >
            {broker.name}
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
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-6">
        {brokers.slice(3, 6).map((broker, i) => (
          <div
            key={broker.name}
            ref={brokerRefs[i + 3]}
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md",
              broker.color
            )}
            title={broker.label}
          >
            {broker.name}
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
    <div className="w-full max-w-[220px] mx-auto rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-gray-400">&lt;</span>
        <span className="text-sm font-medium af-text-primary">August 2024</span>
        <span className="text-xs text-gray-400">&gt;</span>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs">
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
          <span key={i} className="text-gray-400 py-1">{d}</span>
        ))}
        {[31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27].map((day, i) => (
          <span
            key={i}
            className={`py-1 rounded ${
              day === 8 ? 'bg-blue-500 text-white' : 
              day === 13 ? 'bg-blue-500 text-white' : 
              [9, 10, 11, 12].includes(day) ? 'bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400' :
              day === 31 ? 'text-gray-300 dark:text-gray-600' : 
              'af-text-primary'
            }`}
          >
            {day}
          </span>
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
          <Globe className="w-16 h-16 text-gray-300 dark:text-white/20" strokeWidth={0.5} />
        </div>
        {/* Timezone badges */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gray-100 dark:bg-white/10 text-xs font-medium af-text-secondary">
          IST
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 -left-4 px-2 py-1 rounded-lg bg-white dark:bg-white/10 shadow-sm text-xs af-text-primary">
          EST
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 -right-4 px-2 py-1 rounded-lg bg-white dark:bg-white/10 shadow-sm text-xs af-text-primary">
          PST
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-lg bg-blue-500 text-white text-xs font-medium shadow-md">
          12:00 PM
        </div>
      </div>
    </div>
  );
}

function RemindersVisual() {
  return (
    <div className="w-full max-w-[320px] mx-auto rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Bell className="w-4 h-4 af-text-secondary" />
          <span className="text-sm font-medium af-text-primary">Email Reminders</span>
        </div>
        <button className="text-xs px-3 py-1 rounded-full border border-gray-200 dark:border-white/10 af-text-secondary">
          + Add Reminder
        </button>
      </div>
      <div className="space-y-3">
        {[
          { active: true, value: '1', unit: 'Hours' },
          { active: false, value: '30', unit: 'Minutes' },
          { active: true, value: '24', unit: 'Hours' },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className={`w-9 h-5 rounded-full ${item.active ? 'bg-blue-500' : 'bg-gray-200 dark:bg-white/10'} relative`}>
              <div className={`absolute top-0.5 ${item.active ? 'right-0.5' : 'left-0.5'} w-4 h-4 rounded-full bg-white shadow-sm`} />
            </div>
            <div className="flex-1 h-8 rounded-lg border border-gray-200 dark:border-white/10 flex items-center px-3 text-sm af-text-primary">
              {item.value}
            </div>
            <div className="w-24 h-8 rounded-lg border border-gray-200 dark:border-white/10 flex items-center justify-between px-3 text-sm af-text-secondary">
              {item.unit}
              <span className="text-gray-400">▼</span>
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
        <Users className="w-4 h-4 af-text-secondary" />
        <span className="text-sm font-medium af-text-primary">Add Team Members</span>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <input 
          type="text" 
          placeholder="Add email address" 
          className="flex-1 h-8 rounded-lg border border-gray-200 dark:border-white/10 bg-transparent px-3 text-xs af-text-secondary placeholder:text-gray-400"
          readOnly
        />
        <button className="px-3 h-8 text-xs text-blue-500 font-medium">Send</button>
      </div>
      <div className="text-xs af-text-secondary mb-2">Members (2/20)</div>
      <div className="space-y-2">
        {[
          { name: 'Charles Password', schedule: 'Mon - Fri, 8am - 6pm', role: 'Admin', roleColor: 'bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400' },
          { name: 'Aryan Agarwal', schedule: 'Mon - Sat, 2pm - 6pm', role: 'Staff', roleColor: 'bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400' },
        ].map((member, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-white/20 dark:to-white/10" />
            <div className="flex-1">
              <div className="text-sm font-medium af-text-primary">{member.name}</div>
              <div className="text-xs af-text-secondary">{member.schedule}</div>
            </div>
            <span className={`text-xs px-2 py-0.5 rounded ${member.roleColor}`}>{member.role}</span>
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
        <div className="text-sm font-medium af-text-primary">Lama Walk</div>
        <div className="flex items-center gap-3 mt-1 text-xs af-text-secondary">
          <span className="flex items-center gap-1">
            <CalendarCheck className="w-3 h-3" /> 29 May
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" /> 12:00 PM
          </span>
        </div>
      </div>
      <div className="h-24 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20 flex items-center justify-center">
        <Users className="w-8 h-8 text-amber-500/50" />
      </div>
    </div>
  );
}

function DurationVisual() {
  return (
    <div className="flex flex-wrap gap-2 justify-center max-w-[220px] mx-auto">
      {['30 minutes', '60 minutes', '15 min', 'Custom', '30 min', '15 minutes', '10 hours'].map((duration, i) => (
        <span 
          key={i} 
          className={`px-3 py-1.5 rounded-full text-xs font-medium ${
            duration === 'Custom' 
              ? 'bg-gray-900 text-white dark:bg-white dark:text-black' 
              : 'border border-gray-200 dark:border-white/10 af-text-secondary'
          }`}
        >
          {duration}
        </span>
      ))}
    </div>
  );
}

function BlockDatesVisual() {
  return (
    <div className="w-full max-w-[240px] mx-auto rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-4 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <Calendar className="w-4 h-4 af-text-secondary" />
        <span className="text-sm font-medium af-text-primary">Block Dates</span>
      </div>
      <div className="space-y-2">
        {[
          { day: 'MON', active: true, times: ['9:00 AM', '5:30 PM'] },
          { day: 'TUE', active: false, label: 'New Year Eve', labelColor: 'text-purple-500' },
          { day: 'WED', active: false, label: 'Christmas', labelColor: 'text-amber-500' },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className={`w-8 h-4 rounded-full ${item.active ? 'bg-blue-500' : 'bg-gray-200 dark:bg-white/10'} relative`}>
              <div className={`absolute top-0.5 ${item.active ? 'right-0.5' : 'left-0.5'} w-3 h-3 rounded-full bg-white shadow-sm`} />
            </div>
            <span className="w-10 text-xs font-medium af-text-primary">{item.day}</span>
            {item.times ? (
              <div className="flex gap-1">
                {item.times.map((t, j) => (
                  <span key={j} className="text-xs px-2 py-0.5 rounded border border-gray-200 dark:border-white/10 af-text-secondary">{t}</span>
                ))}
              </div>
            ) : (
              <span className={`text-xs ${item.labelColor}`}>{item.label}</span>
            )}
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
        title="Integrations"
        description="Meticulously designed and optimized for a great user experience."
      >
        <IntegrationsVisual />
      </BentoCard>

      <BentoCard
        title="Multiday booking"
        description="Allow your guests to book several days/nights. You can also rent boats or cars."
      >
        <CalendarVisual />
      </BentoCard>

      <BentoCard
        title="Automatically detects timezone"
        description="You live in the US and sell tours for European customers? We can handle that."
      >
        <TimezoneVisual />
      </BentoCard>

      {/* Row 2: 2 cards (wider left, narrower right) */}
      <BentoCard
        title="Effortless Scheduling with Automated Reminders"
        description="Notifications for New Bookings & Appointments"
        className="lg:col-span-2"
      >
        <RemindersVisual />
      </BentoCard>

      <BentoCard
        title="Add Team Members"
        description="Meticulously designed and optimized for a great user experience"
      >
        <TeamMembersVisual />
      </BentoCard>

      {/* Row 3: 3 equal cards */}
      <BentoCard
        title="Allow group booking"
        description="Timeslots will automatically adjust whether your customers book for 1 or for 17."
      >
        <GroupBookingVisual />
      </BentoCard>

      <BentoCard
        title="Custom Meeting Duration"
        description="Whether you need 15min duration or 7h duration, both can be done."
      >
        <DurationVisual />
      </BentoCard>

      <BentoCard
        title="Block Any Date"
        description="You're not working on Christmas? Simply block the 24th/25th and no one will be able to book."
      >
        <BlockDatesVisual />
      </BentoCard>
    </BentoGrid>
  );
}
