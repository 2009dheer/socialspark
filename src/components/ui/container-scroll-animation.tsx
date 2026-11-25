import React, { useRef } from 'react';
import { useScroll, useTransform, useSpring, motion, MotionValue } from 'motion/react';

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  const rotate = useTransform(smoothProgress, [0.05, 0.55], [22, 0]);
  const scale = useTransform(smoothProgress, [0.05, 0.55, 0.92], [0.88, 1, 0.97]);
  const titleY = useTransform(smoothProgress, [0.05, 0.55], [40, -18]);
  const opacity = useTransform(smoothProgress, [0.02, 0.25], [0.35, 1]);

  return (
    <div
      className="py-16 md:py-28 flex items-center justify-center relative px-4 md:px-10"
      ref={containerRef}
    >
      <div
        className="w-full max-w-6xl relative"
        style={{
          perspective: '1300px',
        }}
      >
        <Header translateY={titleY} titleComponent={titleComponent} />
        <ScrollCard rotate={rotate} scale={scale} opacity={opacity}>
          {children}
        </ScrollCard>
      </div>
    </div>
  );
};

const Header = ({
  translateY,
  titleComponent,
}: {
  translateY: MotionValue<number>;
  titleComponent: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{ y: translateY }}
      className="max-w-4xl mx-auto text-center mb-8 md:mb-12 will-change-transform"
    >
      {titleComponent}
    </motion.div>
  );
};

const ScrollCard = ({
  rotate,
  scale,
  opacity,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  opacity: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        opacity,
        transformOrigin: 'center bottom',
      }}
      className="max-w-5xl mx-auto w-full p-[1px] rounded-[1.75rem] md:rounded-[2.5rem] bg-gradient-to-b from-white/20 via-white/10 to-orange-500/20 shadow-[0_30px_90px_rgba(0,0,0,0.85),0_0_60px_rgba(255,90,31,0.12)] will-change-transform"
    >
      <div className="w-full overflow-hidden rounded-[1.7rem] md:rounded-[2.45rem] bg-[#0B0B0F] relative flex flex-col">
        {/* Studio Browser Chrome */}
        <div className="h-10 md:h-12 w-full border-b border-white/[0.07] bg-white/[0.02] flex items-center justify-between px-4 md:px-6 shrink-0">
          <div className="flex gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A1F]" />
          </div>
          <div className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] font-mono text-[10px] md:text-xs text-neutral-400 tracking-wider">
            socialspark.co.in / growth-telemetry
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden sm:inline">LIVE</span>
          </div>
        </div>
        {/* Interactive Content */}
        <div className="relative">{children}</div>
      </div>
    </motion.div>
  );
};
