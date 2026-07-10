import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, TrendingUp, Zap, Activity, ArrowUpRight, BarChart3, Globe } from 'lucide-react';

const data = [
  { name: 'Jan', followers: 4000, engagement: 2400 },
  { name: 'Feb', followers: 5000, engagement: 3000 },
  { name: 'Mar', followers: 7000, engagement: 4500 },
  { name: 'Apr', followers: 12000, engagement: 8000 },
  { name: 'May', followers: 18000, engagement: 12000 },
  { name: 'Jun', followers: 28000, engagement: 19000 },
  { name: 'Jul', followers: 45000, engagement: 32000 },
];

export const DashboardMockup = () => {
  return (
    <div className="w-full h-full bg-transparent text-white flex flex-col md:flex-row overflow-hidden font-sans">
      {/* Sidebar */}
      <div className="hidden md:flex w-20 lg:w-64 flex-col border-r border-white/5 bg-neutral-900/20 p-4 backdrop-blur-md">
        <div className="flex items-center gap-3 mb-10 px-2 mt-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-orange-500 to-purple-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
            <Zap size={16} className="text-white" />
          </div>
          <span className="font-bold text-lg hidden lg:block tracking-tight">Social Spark</span>
        </div>
        
        <div className="flex flex-col gap-2">
          {[
            { icon: <Activity size={18} />, label: 'Overview', active: true },
            { icon: <Users size={18} />, label: 'Audience' },
            { icon: <BarChart3 size={18} />, label: 'Analytics' },
            { icon: <Globe size={18} />, label: 'Campaigns' },
          ].map((item, i) => (
            <div key={i} className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-300 ${item.active ? 'bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]' : 'text-neutral-500 hover:bg-white/5 hover:text-neutral-300'}`}>
              {item.icon}
              <span className="hidden lg:block font-medium text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8 relative bg-gradient-to-br from-neutral-950 to-neutral-900/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-64 bg-orange-500/10 blur-[100px] pointer-events-none rounded-full"></div>
        
        <div className="flex justify-between items-center mb-8 relative z-10">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Brand Performance</h2>
            <p className="text-neutral-400 text-sm mt-1">Real-time metrics and growth analytics.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 bg-neutral-900/80 border border-white/10 px-4 py-2 rounded-full shadow-lg backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
            <span className="text-xs font-medium text-neutral-300">Live Sync</span>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 relative z-10">
          {[
            { label: 'Total Reach', value: '2.4M', change: '+145%', icon: <Globe size={18} className="text-blue-400" />, trend: 'up' },
            { label: 'Engagement Rate', value: '12.8%', change: '+24%', icon: <Zap size={18} className="text-orange-400" />, trend: 'up' },
            { label: 'New Followers', value: '45.2K', change: '+380%', icon: <Users size={18} className="text-purple-400" />, trend: 'up' },
          ].map((stat, i) => (
            <div key={i} className="bg-neutral-900/40 border border-white/5 rounded-2xl p-5 flex flex-col gap-4 backdrop-blur-md shadow-xl hover:bg-neutral-900/60 transition-colors group">
              <div className="flex justify-between items-center">
                <span className="text-neutral-400 text-sm font-medium">{stat.label}</span>
                <div className="p-2 bg-white/5 rounded-xl border border-white/5 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
              </div>
              <div className="flex items-end gap-3">
                <span className="text-3xl font-bold tracking-tight">{stat.value}</span>
                <span className="text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-md text-xs font-medium flex items-center mb-1 border border-emerald-400/20">
                  <TrendingUp size={12} className="mr-1" />
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Chart Area */}
        <div className="bg-neutral-900/40 border border-white/5 rounded-2xl p-5 h-[300px] mb-8 backdrop-blur-md shadow-xl relative z-10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold tracking-tight">Growth Trajectory</h3>
            <select className="bg-neutral-950 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-neutral-300 outline-none hover:border-white/20 transition-colors cursor-pointer shadow-sm">
              <option>Last 7 Months</option>
            </select>
          </div>
          <div className="h-[200px] w-full min-h-0 min-w-0">
            <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
              <AreaChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorFollowers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                <XAxis dataKey="name" stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value / 1000}k`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#171717', borderColor: '#ffffff10', borderRadius: '12px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="followers" stroke="#f97316" strokeWidth={3} fillOpacity={1} fill="url(#colorFollowers)" />
                <Area type="monotone" dataKey="engagement" stroke="#a855f7" strokeWidth={3} fillOpacity={1} fill="url(#colorEngagement)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
