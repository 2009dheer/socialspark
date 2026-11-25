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
    stiffness: 130,
    damping: 26,
    restDelta: 0.001,
  });

  const rotate = useTransform(smoothProgress, [0.06, 0.52], [18, 0]);
  const scale = useTransform(smoothProgress, [0.06, 0.52, 0.92], [0.91, 1, 0.98]);
  const titleY = useTransform(smoothProgress, [0.06, 0.52], [28, -10]);
  const opacity = useTransform(smoothProgress, [0.02, 0.25], [0.4, 1]);

  return (
    <div
      className="py-12 md:py-20 flex items-center justify-center relative px-5 md:px-8"
      ref={containerRef}
    >
      <div
        className="w-full max-w-4xl relative"
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
      className="max-w-2xl mx-auto text-center mb-6 md:mb-8 will-change-transform"
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
      className="max-w-4xl mx-auto w-full rounded-[1.5rem] md:rounded-[2rem] liquid-glass overflow-hidden will-change-transform"
    >
      {/* Clean macOS/visionOS Glass Chrome */}
      <div className="h-9 md:h-10 w-full border-b border-white/[0.08] bg-white/[0.02] flex items-center justify-between px-4 md:px-5 shrink-0">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
        </div>
        <div className="px-3 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.07] font-mono text-[10px] text-[#A1A1A6]">
          socialspark.co.in
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#86868B]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>LIVE</span>
        </div>
      </div>
      <div className="relative">{children}</div>
    </motion.div>
  );
};
