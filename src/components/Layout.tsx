import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, MapPin, Mail, Phone, MessageCircle } from 'lucide-react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useMotionValue,
  useMotionTemplate,
} from 'motion/react';
import Lenis from 'lenis';
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
        className="fixed inset-0 z-[110] bg-black/85 backdrop-blur-xl flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-lg rounded-3xl liquid-glass p-6 md:p-8 text-[#F5F5F7]"
        >
          <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/10">
            <h3 className="font-display text-xl font-semibold">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h3>
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white hover:text-black flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X size={15} />
            </button>
          </div>
          {type === 'privacy' ? (
            <div className="space-y-3 text-sm text-[#A1A1A6] leading-relaxed">
              <p>
                Social Spark (Delhi, India) collects only the contact details and brief notes you choose to send via our inquiry form in order to scope potential client engagements.
              </p>
              <p>
                We never sell or share client information with third-party data brokers. Inquiries dispatched to WhatsApp connect directly between your browser and our official studio line.
              </p>
              <p className="text-xs font-mono text-[#6E6E73] pt-2">
                newsocialspark@gmail.com · Last updated Nov 2026
              </p>
            </div>
          ) : (
            <div className="space-y-3 text-sm text-[#A1A1A6] leading-relaxed">
              <p>
                All creative concepts, production cuts, and brand systems displayed on socialspark.co.in remain the intellectual property of Social Spark and featured client partners.
              </p>
              <p>
                Retainer scope, deliverables, and performance media terms are governed individually by each signed client agreement.
              </p>
              <p className="text-xs font-mono text-[#6E6E73] pt-2">
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
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
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

  const isRouteActive = (path: string) =>
    path === '/services'
      ? location.pathname.startsWith('/services')
      : location.pathname === path;

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-3 sm:px-5 md:px-8 pt-3 md:pt-3.5 pointer-events-none">
      <nav
        className={`max-w-6xl mx-auto pointer-events-auto flex items-center justify-between px-3 md:px-5 rounded-full transition-all duration-500 ${
          isScrolled ? 'py-2 liquid-glass' : 'py-2 bg-black/50 md:bg-transparent backdrop-blur-md md:backdrop-blur-none'
        }`}
      >
        <Link to="/" className="flex items-center gap-2.5 group relative z-50">
          <div className="w-8 h-8 rounded-full liquid-glass-pill flex items-center justify-center p-1.5">
            <img
              src="/logo.png"
              alt="Social Spark Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-bebas text-xl md:text-2xl tracking-wide text-brand-gradient leading-none pt-0.5">
            SOCIAL SPARK
          </span>
        </Link>

        {/* Center Liquid Glass Navigation Pill */}
        <div className="hidden md:flex items-center gap-1 p-1 rounded-full liquid-glass-subtle">
          {navLinks.map((link) => {
            const active = isRouteActive(link.path);
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  active ? 'text-black font-semibold' : 'text-[#A1A1A6] hover:text-white'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="activeNavPill"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-[#F5F5F7] z-0"
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Brand Gradient Accent Pill CTA */}
        <div className="hidden md:flex items-center">
          <MagneticButton strength={0.18}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#F5F5F7] hover:bg-white text-black text-xs font-semibold transition-all shadow-[0_6px_20px_rgba(255,255,255,0.12)]"
            >
              <span>Start a Project</span>
              <ArrowUpRight size={13} />
            </Link>
          </MagneticButton>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-[#F5F5F7] relative z-50 w-9 h-9 rounded-full liquid-glass-pill flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            data-lenis-prevent
            className="md:hidden pointer-events-auto fixed inset-0 bg-black/95 backdrop-blur-2xl z-40 flex flex-col pt-24 px-6 pb-8"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`py-4 border-b border-white/[0.08] font-display text-2xl font-semibold ${
                    isRouteActive(link.path) ? 'text-brand-gradient' : 'text-[#F5F5F7]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-auto space-y-3">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-brand-gradient text-white font-semibold text-sm shadow-lg"
              >
                <span>Start a Project</span>
                <ArrowUpRight size={16} />
              </Link>
              <p className="text-center text-xs text-[#6E6E73]">
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
    <footer className="relative z-10 border-t border-white/[0.08] bg-black pt-12 md:pt-16 pb-8 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 pb-10 border-b border-white/[0.08]">
          <div className="sm:col-span-2 md:col-span-5">
            <div className="flex items-center gap-2.5 mb-3">
              <img src="/logo.png" alt="Social Spark Logo" className="w-6 h-6 object-contain" />
              <span className="font-bebas text-2xl tracking-wide text-brand-gradient leading-none pt-0.5">
                SOCIAL SPARK
              </span>
            </div>
            <p className="font-outfit text-[#86868B] text-sm max-w-xs leading-relaxed">
              Creative growth, personal branding, and performance marketing built in Delhi for ambitious founders and brands.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-medium text-[#6E6E73] mb-3.5">Explore</h4>
            <ul className="space-y-2.5 text-sm text-[#A1A1A6]">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-medium text-[#6E6E73] mb-3.5">Social</h4>
            <ul className="space-y-2.5 text-sm text-[#A1A1A6]">
              <li>
                <a
                  href="https://www.instagram.com/socialspark.ind?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  Instagram <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  LinkedIn <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  X <ArrowUpRight size={12} />
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-medium text-[#6E6E73] mb-3.5">Studio Desk</h4>
            <ul className="space-y-2.5 text-sm text-[#A1A1A6]">
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-[#86868B] shrink-0" />
                <span>Delhi, India</span>
              </li>
              <li>
                <a
                  href="mailto:newsocialspark@gmail.com"
                  className="flex items-center gap-2 hover:text-white transition-colors break-all"
                >
                  <Mail size={14} className="text-[#86868B] shrink-0" />
                  <span>newsocialspark@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919996210648"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone size={14} className="text-[#86868B] shrink-0" />
                  <span>+91 99962 10648</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919996210648"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-orange-400 transition-colors"
                >
                  <MessageCircle size={14} className="shrink-0" />
                  <span>WhatsApp Studio</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 gap-3 text-xs text-[#6E6E73]">
          <p>© {new Date().getFullYear()} Social Spark · Delhi, India</p>
          <div className="flex gap-5">
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

const AmbientCursorGlow = () => {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const smoothX = useSpring(x, { stiffness: 180, damping: 28 });
  const smoothY = useSpring(y, { stiffness: 180, damping: 28 });
  const bg = useMotionTemplate`radial-gradient(480px circle at ${smoothX}px ${smoothY}px, rgba(249, 115, 22, 0.05), transparent 72%)`;

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
  const lenisRef = useRef<Lenis | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Use native mobile touch momentum on phones; Lenis smooth wheel on desktop
    if (prefersReducedMotion || window.innerWidth < 768) return;

    const lenis = new Lenis({
      duration: 1.02,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
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
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-black text-[#F5F5F7] relative">
      {/* Top Progress Bar in Brand Gradient */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#FACC15] via-[#F97316] to-[#D946EF] origin-left z-[90] pointer-events-none"
      />

      {/* Quiet Radial Studio Depth */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 50% at 75% 22%, rgba(255,255,255,0.04), transparent 70%), radial-gradient(ellipse 45% 40% at 20% 80%, rgba(249,115,22,0.03), transparent 75%)',
        }}
        aria-hidden="true"
      />

      <SparkStage3D variant={isHome ? 'hero' : 'ambient'} />
      <AmbientCursorGlow />

      <Navbar />
      <main className="relative z-10">{children}</main>
      <Footer onOpenLegal={setLegalType} />
      <LegalModal type={legalType} onClose={() => setLegalType(null)} />
    </div>
  );
};

export default Layout;
