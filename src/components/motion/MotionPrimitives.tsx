import React, { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useMotionTemplate,
} from 'motion/react';

/**
 * Clean Apple-style smooth entrance without harsh horizontal clipping.
 */
export const SmoothLine: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
}> = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.span
      className={`block ${className}`}
      initial={{ y: 22, opacity: 0, filter: 'blur(6px)' }}
      animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.span>
  );
};

/**
 * Scroll-triggered smooth spatial emergence.
 */
export const KineticReveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
}> = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Scroll-driven 3D Apple spatial depth stage for cards/sections.
 */
export const SpatialDepthWrapper: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  const scale = useTransform(smooth, [0, 1], [0.94, 1]);
  const rotateX = useTransform(smooth, [0, 1], [8, 0]);
  const opacity = useTransform(smooth, [0, 0.45], [0.5, 1]);

  return (
    <div ref={ref} style={{ perspective: 1200 }} className={className}>
      <motion.div style={{ scale, rotateX, opacity }} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  );
};

/**
 * Liquid Glass interactive 3D tilt + silver-white specular border sheen card.
 */
export const TiltSpotlightCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  maxTilt?: number;
}> = ({
  children,
  className = '',
  spotlightColor = 'rgba(255, 255, 255, 0.11)',
  maxTilt = 5,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);

  const smoothRotX = useSpring(rotX, { stiffness: 240, damping: 26 });
  const smoothRotY = useSpring(rotY, { stiffness: 240, damping: 26 });
  const [hovered, setHovered] = useState(false);

  const spotlightBg = useMotionTemplate`radial-gradient(380px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 75%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    mouseX.set(px);
    mouseY.set(py);

    const nx = (px / rect.width) * 2 - 1;
    const ny = (py / rect.height) * 2 - 1;
    rotX.set(-ny * maxTilt);
    rotY.set(nx * maxTilt);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    rotX.set(0);
    rotY.set(0);
  };

  return (
    <div style={{ perspective: 1100 }} className="h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: smoothRotX,
          rotateY: smoothRotY,
        }}
        className={`relative h-full will-change-transform ${className}`}
      >
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-0"
          style={{
            background: spotlightBg,
            opacity: hovered ? 1 : 0,
          }}
        />
        <div className="relative z-10 h-full">{children}</div>
      </motion.div>
    </div>
  );
};

/**
 * Subtle magnetic cursor wrap for pill buttons.
 */
export const MagneticButton: React.FC<{
  children: React.ReactNode;
  className?: string;
  strength?: number;
}> = ({ children, className = '', strength = 0.2 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 320, damping: 24 });
  const smoothY = useSpring(y, { stiffness: 320, damping: 24 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * strength);
    y.set(dy * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: smoothX, y: smoothY }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Backwards-compatible alias for inner pages during step-by-step staging
export const KineticLine = SmoothLine;
