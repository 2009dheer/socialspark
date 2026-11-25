import React, { useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { TrendingUp, Users, Zap, Eye, Sparkles, BarChart3 } from 'lucide-react';

type TabKey = 'overview' | 'creators' | 'paid' | 'reels';

const TAB_CONFIG: Record<
  TabKey,
  {
    label: string;
    headline: string;
    subline: string;
    primaryColor: string;
    secondaryColor: string;
    stats: { label: string; value: string; delta: string }[];
    data: { name: string; reach: number; conversions: number }[];
  }
> = {
  overview: {
    label: 'Overview',
    headline: 'Blended Brand Velocity',
    subline: 'Combined organic + creator + paid acquisition lift over 7 months',
    primaryColor: '#FF5A1F',
    secondaryColor: '#FF2E93',
    stats: [
      { label: 'Monthly Impressions', value: '3.8M', delta: '+214%' },
      { label: 'Engagement Rate', value: '14.2%', delta: '+38%' },
      { label: 'Attributed Leads', value: '48.6K', delta: '+340%' },
    ],
    data: [
      { name: 'M1', reach: 4200, conversions: 1900 },
      { name: 'M2', reach: 6800, conversions: 3100 },
      { name: 'M3', reach: 11200, conversions: 5600 },
      { name: 'M4', reach: 18400, conversions: 9200 },
      { name: 'M5', reach: 26500, conversions: 14100 },
      { name: 'M6', reach: 38200, conversions: 21400 },
      { name: 'M7', reach: 54000, conversions: 31800 },
    ],
  },
  creators: {
    label: 'Creators',
    headline: 'Creator Seeding & Trust Wave',
    subline: 'Vetted micro & macro creator cohorts driving earned reach',
    primaryColor: '#FF2E93',
    secondaryColor: '#FFB800',
    stats: [
      { label: 'Active Creators', value: '140+', delta: '+92%' },
      { label: 'Avg. View Ratio', value: '38%', delta: '+19%' },
      { label: 'CPM Efficiency', value: '₹44', delta: '-46%' },
    ],
    data: [
      { name: 'W1', reach: 3100, conversions: 1400 },
      { name: 'W2', reach: 7400, conversions: 3600 },
      { name: 'W3', reach: 12900, conversions: 6900 },
      { name: 'W4', reach: 19800, conversions: 11200 },
      { name: 'W5', reach: 29400, conversions: 16800 },
      { name: 'W6', reach: 41000, conversions: 24200 },
      { name: 'W7', reach: 49200, conversions: 29900 },
    ],
  },
  paid: {
    label: 'Paid ROAS',
    headline: 'Creative-Led Paid Acquisition',
    subline: 'Weekly hook testing & retargeting funnel efficiency',
    primaryColor: '#FFB800',
    secondaryColor: '#FF5A1F',
    stats: [
      { label: 'Blended ROAS', value: '4.8x', delta: '+1.9x' },
      { label: 'Hook Variants / Wk', value: '24', delta: 'Tested' },
      { label: 'CPA Reduction', value: '-39%', delta: 'Optimized' },
    ],
    data: [
      { name: 'W1', reach: 5200, conversions: 2100 },
      { name: 'W2', reach: 8900, conversions: 4200 },
      { name: 'W3', reach: 13600, conversions: 7100 },
      { name: 'W4', reach: 21200, conversions: 11900 },
      { name: 'W5', reach: 29800, conversions: 17500 },
      { name: 'W6', reach: 36400, conversions: 22900 },
      { name: 'W7', reach: 46800, conversions: 30400 },
    ],
  },
  reels: {
    label: 'Reels Velocity',
    headline: 'Short-Form Retention Curve',
    subline: '1.5s visual hooks engineered for algorithmic discovery',
    primaryColor: '#38BDF8',
    secondaryColor: '#FF5A1F',
    stats: [
      { label: '3s Hook Hold', value: '76%', delta: '+28%' },
      { label: 'Shares / 10K Views', value: '412', delta: '3.2x' },
      { label: 'Profile Visits', value: '190K', delta: '+265%' },
    ],
    data: [
      { name: 'R1', reach: 2800, conversions: 1200 },
      { name: 'R2', reach: 9600, conversions: 4900 },
      { name: 'R3', reach: 16200, conversions: 8700 },
      { name: 'R4', reach: 24900, conversions: 13600 },
      { name: 'R5', reach: 34200, conversions: 19800 },
      { name: 'R6', reach: 44600, conversions: 26700 },
      { name: 'R7', reach: 58400, conversions: 36200 },
    ],
  },
};

export const DashboardMockup = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('overview');
  const current = TAB_CONFIG[activeTab];

  return (
    <div className="w-full text-[#F5F3EE] flex flex-col lg:flex-row">
      {/* Left Rail */}
      <div className="flex lg:w-56 flex-row lg:flex-col justify-between lg:justify-start gap-2 border-b lg:border-b-0 lg:border-r border-white/[0.07] bg-white/[0.015] p-3 md:p-5 overflow-x-auto hide-scrollbar">
        <div className="hidden lg:flex items-center gap-2.5 mb-6 px-2">
          <div className="w-7 h-7 rounded-lg bg-[#FF5A1F]/15 border border-[#FF5A1F]/40 flex items-center justify-center">
            <Zap size={14} className="text-[#FF5A1F]" />
          </div>
          <div>
            <p className="font-display text-xs font-bold tracking-wide uppercase">Spark Deck</p>
            <p className="font-mono text-[10px] text-neutral-500">v2.6 Telemetry</p>
          </div>
        </div>

        <div className="flex flex-row lg:flex-col gap-1.5 min-w-max lg:min-w-0 w-full">
          {(Object.keys(TAB_CONFIG) as TabKey[]).map((key) => {
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs md:text-sm font-medium transition-all text-left cursor-pointer ${
                  isActive
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'text-neutral-400 hover:bg-white/[0.05] hover:text-white'
                }`}
              >
                {key === 'overview' && <BarChart3 size={15} />}
                {key === 'creators' && <Users size={15} />}
                {key === 'paid' && <TrendingUp size={15} />}
                {key === 'reels' && <Eye size={15} />}
                <span>{TAB_CONFIG[key].label}</span>
              </button>
            );
          })}
        </div>

        <div className="hidden lg:block mt-auto pt-6 border-t border-white/[0.06]">
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-amber-400 uppercase mb-1">
              <Sparkles size={11} /> Interactive Preview
            </div>
            <p className="text-[11px] text-neutral-400 leading-relaxed">
              Click any channel above to inspect sample campaign curves.
            </p>
          </div>
        </div>
      </div>

      {/* Main Analytics Canvas */}
      <div className="flex-1 p-5 md:p-8 bg-gradient-to-br from-[#0B0B0F] to-[#08080B]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight text-white">
              {current.headline}
            </h3>
            <p className="text-neutral-400 text-xs md:text-sm mt-0.5">{current.subline}</p>
          </div>
          <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 font-mono text-[10px] uppercase tracking-widest text-neutral-300">
            Delhi Studio Benchmark
          </span>
        </div>

        {/* Stat Strips */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-6">
          {current.stats.map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white/[0.025] border border-white/[0.07] p-4 flex flex-col justify-between"
            >
              <span className="text-neutral-400 text-xs font-medium">{stat.label}</span>
              <div className="flex items-baseline justify-between mt-3">
                <span className="font-display text-2xl md:text-3xl font-bold text-white">
                  {stat.value}
                </span>
                <span className="font-mono text-[11px] text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded-md">
                  {stat.delta}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="rounded-2xl bg-white/[0.02] border border-white/[0.07] p-4 md:p-5">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              Reach vs. Conversion Momentum
            </span>
            <div className="flex items-center gap-4 text-[11px] font-mono text-neutral-400">
              <span className="flex items-center gap-1.5">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: current.primaryColor }}
                />
                Reach
              </span>
              <span className="flex items-center gap-1.5">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: current.secondaryColor }}
                />
                Impact
              </span>
            </div>
          </div>

          <div className="h-[190px] md:h-[220px] w-full min-w-0">
            <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
              <AreaChart data={current.data} margin={{ top: 6, right: 6, left: -24, bottom: 0 }}>
                <defs>
                  <linearGradient id="sparkPrimaryGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={current.primaryColor} stopOpacity={0.35} />
                    <stop offset="95%" stopColor={current.primaryColor} stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="sparkSecondaryGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={current.secondaryColor} stopOpacity={0.28} />
                    <stop offset="95%" stopColor={current.secondaryColor} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" vertical={false} />
                <XAxis
                  dataKey="name"
                  stroke="rgba(255,255,255,0.35)"
                  fontSize={11}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="rgba(255,255,255,0.35)"
                  fontSize={11}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v) => `${Math.round(v / 1000)}k`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0E0E13',
                    borderColor: 'rgba(255,255,255,0.12)',
                    borderRadius: '12px',
                    fontSize: '12px',
                  }}
                  itemStyle={{ color: '#F5F3EE' }}
                />
                <Area
                  type="monotone"
                  dataKey="reach"
                  stroke={current.primaryColor}
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#sparkPrimaryGrad)"
                />
                <Area
                  type="monotone"
                  dataKey="conversions"
                  stroke={current.secondaryColor}
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#sparkSecondaryGrad)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
