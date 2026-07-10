import React from 'react';
import { motion } from 'motion/react';
import { Activity } from 'lucide-react';

const agentLogs = [
  "AGENT_ALPHA: Scraping competitor data...",
  "AGENT_BETA: Generating 10,000 content permutations...",
  "AGENT_GAMMA: Optimizing conversion funnels...",
  "AGENT_DELTA: Analyzing market sentiment...",
  "AGENT_EPSILON: Deploying targeted ad campaigns...",
  "AGENT_ZETA: Engaging with high-value leads...",
  "AGENT_ETA: Monitoring brand mentions...",
  "AGENT_THETA: Adjusting pricing strategies..."
];

const AgentTicker = () => {
  return (
    <div className="w-full bg-orange-500/10 border-y border-orange-500/20 py-2 overflow-hidden flex items-center relative z-20">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-neutral-950 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-neutral-950 to-transparent z-10"></div>
      
      <div className="flex items-center gap-2 px-4 text-orange-400 font-mono text-xs font-bold shrink-0 z-20 bg-neutral-950 border-r border-orange-500/20">
        <Activity size={14} className="animate-pulse" />
        <span>LIVE FEED</span>
      </div>

      <div className="flex whitespace-nowrap overflow-hidden w-full">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-8 px-8"
        >
          {/* Double the array for seamless looping */}
          {[...agentLogs, ...agentLogs].map((log, i) => (
            <div key={i} className="flex items-center gap-2 text-neutral-400 font-mono text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
              {log}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AgentTicker;
