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
import { TrendingUp, Users, Eye, BarChart3 } from 'lucide-react';

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
    subline: 'Combined organic, creator, and paid acquisition curve',
    primaryColor: '#F5F5F7',
    secondaryColor: '#FF5A1F',
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
    headline: 'Creator Seeding & Trust',
    subline: 'Curated micro & macro creators driving earned reach',
    primaryColor: '#F5F5F7',
    secondaryColor: '#FF5A1F',
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
    headline: 'Creative-Led Paid Scaling',
    subline: 'Weekly hook testing & retargeting funnel efficiency',
    primaryColor: '#F5F5F7',
    secondaryColor: '#FF5A1F',
    stats: [
      { label: 'Blended ROAS', value: '4.8x', delta: '+1.9x' },
      { label: 'Hook Variants / Wk', value: '24', delta: 'Tested' },
      { label: 'CPA Reduction', value: '-39%', delta: 'Down' },
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
    subline: 'Opening hooks engineered for organic shares & watch time',
    primaryColor: '#F5F5F7',
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
    <div className="w-full text-[#F5F5F7] flex flex-col md:flex-row">
      {/* Compact Sidebar */}
      <div className="flex md:w-48 flex-row md:flex-col justify-between md:justify-start gap-1.5 border-b md:border-b-0 md:border-r border-white/[0.08] bg-white/[0.015] p-3 md:p-4 overflow-x-auto hide-scrollbar">
        <div className="flex flex-row md:flex-col gap-1 min-w-max md:min-w-0 w-full">
          {(Object.keys(TAB_CONFIG) as TabKey[]).map((key) => {
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium transition-all text-left cursor-pointer ${
                  isActive
                    ? 'bg-[#F5F5F7] text-black font-semibold'
                    : 'text-[#A1A1A6] hover:bg-white/[0.05] hover:text-white'
                }`}
              >
                {key === 'overview' && <BarChart3 size={14} />}
                {key === 'creators' && <Users size={14} />}
                {key === 'paid' && <TrendingUp size={14} />}
                {key === 'reels' && <Eye size={14} />}
                <span>{TAB_CONFIG[key].label}</span>
              </button>
            );
          })}
        </div>

        <p className="hidden md:block mt-auto pt-4 border-t border-white/[0.06] text-[11px] text-[#6E6E73] leading-relaxed">
          Interactive benchmark view across Delhi campaigns.
        </p>
      </div>

      {/* Main Console */}
      <div className="flex-1 p-4 md:p-6 bg-black/40">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h3 className="font-display text-lg md:text-xl font-semibold tracking-tight text-[#F5F5F7]">
              {current.headline}
            </h3>
            <p className="text-[#86868B] text-xs mt-0.5">{current.subline}</p>
          </div>
          <span className="self-start sm:self-auto px-2.5 py-1 rounded-full liquid-glass-pill font-mono text-[10px] text-[#A1A1A6]">
            Interactive Demo
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2.5 md:gap-3 mb-4">
          {current.stats.map((stat, i) => (
            <div
              key={i}
              className="rounded-xl bg-white/[0.03] border border-white/[0.08] p-3 flex flex-col justify-between"
            >
              <span className="text-[#86868B] text-[11px] font-medium truncate">{stat.label}</span>
              <div className="flex items-baseline justify-between gap-1 mt-1.5">
                <span className="font-display text-lg md:text-2xl font-semibold text-[#F5F5F7]">
                  {stat.value}
                </span>
                <span className="font-mono text-[10px] text-emerald-400">
                  {stat.delta}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl bg-white/[0.02] border border-white/[0.07] p-3.5 md:p-4">
          <div className="h-[155px] md:h-[175px] w-full min-w-0">
            <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
              <AreaChart data={current.data} margin={{ top: 4, right: 6, left: -26, bottom: 0 }}>
                <defs>
                  <linearGradient id="appleSilverGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={current.primaryColor} stopOpacity={0.22} />
                    <stop offset="95%" stopColor={current.primaryColor} stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="appleSparkGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={current.secondaryColor} stopOpacity={0.28} />
                    <stop offset="95%" stopColor={current.secondaryColor} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" vertical={false} />
                <XAxis
                  dataKey="name"
                  stroke="rgba(255,255,255,0.3)"
                  fontSize={10}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="rgba(255,255,255,0.3)"
                  fontSize={10}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v) => `${Math.round(v / 1000)}k`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#111115',
                    borderColor: 'rgba(255,255,255,0.14)',
                    borderRadius: '10px',
                    fontSize: '11px',
                  }}
                  itemStyle={{ color: '#F5F5F7' }}
                />
                <Area
                  type="monotone"
                  dataKey="reach"
                  stroke={current.primaryColor}
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#appleSilverGrad)"
                />
                <Area
                  type="monotone"
                  dataKey="conversions"
                  stroke={current.secondaryColor}
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#appleSparkGrad)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
