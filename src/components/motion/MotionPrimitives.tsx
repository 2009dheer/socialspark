import React, { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
  useMotionTemplate,
} from 'motion/react';

/**
 * Kinetic line-mask reveal: words slide sharply out of masked bounds with studio easing.
 */
export const KineticLine: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
}> = ({ children, delay = 0, className = '' }) => {
  return (
    <span className={`block overflow-hidden ${className}`}>
      <motion.span
        className="block"
        initial={{ y: '108%', opacity: 0.2 }}
        animate={{ y: '0%', opacity: 1 }}
        transition={{
          duration: 0.85,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.span>
    </span>
  );
};

/**
 * Kinetic reveal triggered as section scrolls into view.
 */
export const KineticReveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
}> = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Dual-track scroll-velocity reactive typography marquee.
 * Speeds up and subtly skews based on live Lenis/window scroll velocity.
 */
export const VelocityMarquee: React.FC<{
  items: string[];
  baseVelocity?: number;
  reverse?: boolean;
  outlined?: boolean;
}> = ({ items, baseVelocity = 26, reverse = false, outlined = false }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [-2500, 0, 2500], [-3.2, 0, 3.2], {
    clamp: false,
  });

  const skew = useTransform(smoothVelocity, [-2000, 0, 2000], [-4, 0, 4]);
  const directionFactor = useRef<number>(reverse ? -1 : 1);

  useAnimationFrame((_, delta) => {
    const dt = Math.min(delta, 50) / 1000;
    const vf = velocityFactor.get();

    let moveBy = directionFactor.current * baseVelocity * dt;
    if (vf < -0.1) directionFactor.current = reverse ? 1 : -1;
    else if (vf > 0.1) directionFactor.current = reverse ? -1 : 1;

    moveBy += directionFactor.current * Math.abs(vf) * baseVelocity * 0.45 * dt;

    let next = baseX.get() - moveBy;
    if (next <= -50) next += 50;
    if (next > 0) next -= 50;
    baseX.set(next);
  });

  const x = useTransform(baseX, (v) => `${v}%`);

  const track = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden select-none py-2">
      <motion.div className="flex whitespace-nowrap will-change-transform" style={{ x, skewX: skew }}>
        {track.map((text, idx) => (
          <div key={idx} className="inline-flex items-center shrink-0">
            <span
              className={`font-bebas text-4xl sm:text-5xl md:text-7xl tracking-[0.04em] px-5 md:px-8 transition-colors duration-300 ${
                outlined ? 'text-stroke-subtle hover:text-white' : 'text-[#F5F3EE]/90'
              }`}
            >
              {text}
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A1F] shrink-0 shadow-[0_0_12px_#FF5A1F]" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

/**
 * Interactive 3D tilt + specular border spotlight card using pure MotionValues (0 React re-renders).
 */
export const TiltSpotlightCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  maxTilt?: number;
}> = ({
  children,
  className = '',
  spotlightColor = 'rgba(255, 90, 31, 0.16)',
  maxTilt = 7,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);

  const smoothRotX = useSpring(rotX, { stiffness: 260, damping: 24 });
  const smoothRotY = useSpring(rotY, { stiffness: 260, damping: 24 });
  const [hovered, setHovered] = useState(false);

  const spotlightBg = useMotionTemplate`radial-gradient(460px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 75%)`;

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
          transformStyle: 'preserve-3d',
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
 * Magnetic cursor attraction wrapper for primary CTAs and nav pills.
 */
export const MagneticButton: React.FC<{
  children: React.ReactNode;
  className?: string;
  strength?: number;
}> = ({ children, className = '', strength = 0.28 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 300, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 300, damping: 20 });

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
