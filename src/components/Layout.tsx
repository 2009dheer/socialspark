import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, MapPin, Mail, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValue, useSpring, useMotionTemplate } from 'motion/react';
import Lenis from 'lenis';
import { BrandBolt } from './BrandBolt';
import { SparkStage3D } from './three/SparkStage3D';
import { MagneticButton } from './motion/MotionPrimitives';

const LegalModal: React.FC<{
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        data-lenis-prevent
        className="fixed inset-0 z-[110] bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-xl rounded-3xl bg-[#0D0D12] border border-white/15 p-6 md:p-8 text-[#F5F3EE] shadow-2xl"
        >
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
            <h3 className="font-display text-2xl font-bold">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h3>
            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-black flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X size={16} />
            </button>
          </div>
          {type === 'privacy' ? (
            <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
              <p>
                Social Spark (Delhi, India) respects your privacy. Information submitted via our project inquiry form (name, email, selected capability, and brief) is used strictly to respond to your inquiry and scope potential engagements.
              </p>
              <p>
                We do not sell, rent, or distribute client details to third-party brokers. Inquiry messages routed to WhatsApp are transmitted directly between your device and Social Spark&apos;s official business channel.
              </p>
              <p className="text-xs font-mono text-neutral-500">
                Contact: newsocialspark@gmail.com · Last updated Nov 2026
              </p>
            </div>
          ) : (
            <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
              <p>
                All creative concepts, campaign frameworks, showcase videos, and visual branding presented on socialspark.co.in are the intellectual property of Social Spark and respective campaign partners.
              </p>
              <p>
                Service timelines, deliverables, creator licensing terms, and performance media retainers are governed individually by each signed Statement of Work (SOW).
              </p>
              <p className="text-xs font-mono text-neutral-500">
                Jurisdiction: New Delhi, India · socialspark.co.in
              </p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isServiceActive = (path: string) =>
    path === '/services'
      ? location.pathname.startsWith('/services')
      : location.pathname === path;

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 md:px-8 pt-4 pointer-events-none">
      <nav
        className={`max-w-7xl mx-auto pointer-events-auto flex items-center justify-between px-4 md:px-6 rounded-full transition-all duration-500 ${
          isScrolled
            ? 'py-2.5 bg-[#0A0A0E]/85 backdrop-blur-xl border border-white/12 shadow-[0_16px_40px_rgba(0,0,0,0.6)]'
            : 'py-3 bg-transparent border border-transparent'
        }`}
      >
        <Link to="/" className="flex items-center gap-2.5 group relative z-50">
          <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:border-[#FF5A1F]/50 transition-colors">
            <BrandBolt className="w-4 h-6" glow />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-base md:text-lg font-extrabold tracking-tight text-[#F5F3EE]">
              SOCIAL SPARK
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-500 hidden sm:block">
              Delhi · Growth Studio
            </span>
          </div>
        </Link>

        {/* Desktop Pill Nav */}
        <div className="hidden md:flex items-center gap-1 p-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
          {navLinks.map((link) => {
            const active = isServiceActive(link.path);
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors ${
                  active ? 'text-black font-semibold' : 'text-neutral-300 hover:text-white'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="activeNavPill"
                    transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-[#F5F3EE] z-0"
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <MagneticButton strength={0.22}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF5A1F] hover:bg-[#ff6d38] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_24px_rgba(255,90,31,0.35)]"
            >
              <span>Ignite Growth</span>
              <ArrowUpRight size={14} />
            </Link>
          </MagneticButton>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-[#F5F3EE] relative z-50 w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            data-lenis-prevent
            className="md:hidden pointer-events-auto fixed inset-0 bg-[#050507]/98 backdrop-blur-2xl z-40 flex flex-col pt-28 px-6 pb-10"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-baseline justify-between py-3 border-b border-white/[0.08] font-display text-3xl font-extrabold tracking-tight ${
                    isServiceActive(link.path) ? 'text-[#FF5A1F]' : 'text-[#F5F3EE]'
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="font-mono text-xs text-neutral-500">0{idx + 1}</span>
                </Link>
              ))}
            </div>

            <div className="mt-auto space-y-4">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-[#FF5A1F] text-white font-bold text-base shadow-lg shadow-orange-500/25"
              >
                <span>Start a Campaign</span>
                <ArrowUpRight size={18} />
              </Link>
              <p className="text-center font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                Delhi, India · Global Operations
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = ({ onOpenLegal }: { onOpenLegal: (type: 'privacy' | 'terms') => void }) => {
  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-[#050507]/95 pt-16 md:pt-24 pb-8 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-14 border-b border-white/[0.08]">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <BrandBolt className="w-6 h-9" glow />
              <span className="font-display text-2xl font-extrabold tracking-tight text-white">
                SOCIAL SPARK
              </span>
            </div>
            <p className="text-neutral-400 text-sm md:text-base max-w-sm leading-relaxed mb-6">
              Creative growth, personal branding, and high-ROAS performance media engineered in Delhi for ambitious founders and modern consumer brands.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] font-mono text-[11px] text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Taking Q4 / Q1 Retainers · Delhi, IN</span>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-neutral-500 mb-5">
              Explore
            </h4>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li>
                <Link to="/" className="hover:text-[#FF5A1F] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#FF5A1F] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#FF5A1F] transition-colors">
                  About Studio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#FF5A1F] transition-colors">
                  Book Discovery
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-neutral-500 mb-5">
              Social
            </h4>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li>
                <a
                  href="https://www.instagram.com/socialspark.ind?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF2E93] transition-colors inline-flex items-center gap-1"
                >
                  Instagram <ArrowUpRight size={13} />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  LinkedIn <ArrowUpRight size={13} />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  X / Twitter <ArrowUpRight size={13} />
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-neutral-500 mb-5">
              Direct Studio Desk
            </h4>
            <ul className="space-y-3.5 text-sm text-neutral-300">
              <li className="flex items-center gap-2.5">
                <MapPin size={15} className="text-[#FF5A1F] shrink-0" />
                <span>Delhi, India</span>
              </li>
              <li>
                <a
                  href="mailto:newsocialspark@gmail.com"
                  className="flex items-center gap-2.5 hover:text-white transition-colors break-all"
                >
                  <Mail size={15} className="text-[#FFB800] shrink-0" />
                  <span>newsocialspark@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919996210648"
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Phone size={15} className="text-[#FF2E93] shrink-0" />
                  <span>+91 99962 10648</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919996210648"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                >
                  <MessageCircle size={15} className="shrink-0" />
                  <span>WhatsApp Studio</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-7 gap-4 text-xs text-neutral-500 font-mono">
          <p>© {new Date().getFullYear()} SOCIAL SPARK · DELHI, INDIA</p>
          <div className="flex gap-6">
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => onOpenLegal('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

/**
 * Zero-re-render pointer ambient glow driven by Framer MotionValues.
 */
const AmbientCursorGlow = () => {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const smoothX = useSpring(x, { stiffness: 180, damping: 28 });
  const smoothY = useSpring(y, { stiffness: 180, damping: 28 });
  const bg = useMotionTemplate`radial-gradient(560px circle at ${smoothX}px ${smoothY}px, rgba(255, 90, 31, 0.085), transparent 72%)`;

  useEffect(() => {
    if (window.innerWidth < 768) return;
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [x, y]);

  return (
    <motion.div
      className="hidden md:block fixed inset-0 z-[1] pointer-events-none"
      style={{ background: bg }}
      aria-hidden="true"
    />
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | null>(null);
  const lenisRef = React.useRef<Lenis | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  // Smooth inertial scrolling with Lenis
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.08,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });
    lenisRef.current = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenisRef.current = null;
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-[#050507] text-[#F5F3EE] relative selection:bg-orange-500/30">
      {/* Top Scroll Progress Beam */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FFB800] via-[#FF5A1F] to-[#FF2E93] origin-left z-[90] pointer-events-none"
      />

      {/* Architectural Grid & Film Grain */}
      <div className="fixed inset-0 studio-grid pointer-events-none z-0 opacity-70" aria-hidden="true" />
      <div className="fixed inset-0 studio-grain pointer-events-none z-[2]" aria-hidden="true" />

      {/* Live 3D WebGL Scroll Choreography */}
      <SparkStage3D variant={isHome ? 'hero' : 'ambient'} />

      {/* GPU Pointer Spotlight */}
      <AmbientCursorGlow />

      <Navbar />
      <main className="relative z-10">{children}</main>
      <Footer onOpenLegal={setLegalType} />
      <LegalModal type={legalType} onClose={() => setLegalType(null)} />
    </div>
  );
};

export default Layout;
