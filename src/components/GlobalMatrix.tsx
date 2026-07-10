import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const GlobalMatrix = () => {
  const [nodes, setNodes] = useState<{id: number, x: number, y: number, active: boolean}[]>([]);

  useEffect(() => {
    // Generate random nodes
    const newNodes = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      active: Math.random() > 0.5
    }));
    setNodes(newNodes);

    const interval = setInterval(() => {
      setNodes(current => current.map(node => ({
        ...node,
        active: Math.random() > 0.7
      })));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] bg-black/40 border border-white/10 rounded-3xl overflow-hidden md:backdrop-blur-md">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-screen"></div>
      
      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {nodes.map((node, i) => {
          if (!node.active) return null;
          const target = nodes[(i + 1) % nodes.length];
          return (
            <motion.line
              key={`line-${i}`}
              x1={`${node.x}%`}
              y1={`${node.y}%`}
              x2={`${target.x}%`}
              y2={`${target.y}%`}
              stroke="rgba(249, 115, 22, 0.3)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            />
          );
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className={`absolute w-2 h-2 rounded-full -ml-1 -mt-1 ${node.active ? 'bg-orange-500 shadow-[0_0_15px_#f97316]' : 'bg-white/20'}`}
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          animate={{ scale: node.active ? [1, 1.5, 1] : 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      ))}

      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
        <div>
          <div className="text-xs text-orange-400 font-mono mb-1">LIVE_MATRIX_FEED</div>
          <div className="text-sm text-white font-medium">Tracking 2,405 Active Agents</div>
        </div>
        <div className="text-right">
          <div className="text-xs text-neutral-500 font-mono mb-1">NETWORK_STATUS</div>
          <div className="text-sm text-green-400 font-mono">OPTIMAL</div>
        </div>
      </div>
    </div>
  );
};

export default GlobalMatrix;
