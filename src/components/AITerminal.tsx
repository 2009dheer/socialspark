import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';

const lines = [
  "INITIALIZING SPARK PROTOCOL v3.1.4...",
  "ESTABLISHING SECURE CONNECTION TO NEURAL MATRIX... [OK]",
  "BYPASSING STANDARD ALGORITHMS...",
  "DEPLOYING AUTONOMOUS AGENT SWARM...",
  "AGENT_ALPHA: Scraping competitor data... [DONE]",
  "AGENT_BETA: Generating 10,000 content permutations... [DONE]",
  "AGENT_GAMMA: Optimizing conversion funnels... [ACTIVE]",
  "SYSTEM STATUS: 100% OPTIMIZED. READY FOR DOMINATION."
];

const AITerminal = () => {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines(prev => (prev < lines.length ? prev + 1 : prev));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto bg-black/80 md:backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(249,115,22,0.15)] font-mono text-xs sm:text-sm">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/5">
        <div className="flex items-center gap-2 text-neutral-400">
          <Terminal size={14} />
          <span>spark_os_terminal</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
        </div>
      </div>
      <div className="p-4 sm:p-6 space-y-2 min-h-[250px] text-left">
        {lines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={`${i === lines.length - 1 ? 'text-orange-400 font-bold' : 'text-green-400'}`}
          >
            <span className="opacity-50 mr-2">{`>`}</span>
            {line}
          </motion.div>
        ))}
        {visibleLines < lines.length && (
          <motion.div
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-2 h-4 bg-orange-400 inline-block align-middle"
          />
        )}
      </div>
    </div>
  );
};

export default AITerminal;
