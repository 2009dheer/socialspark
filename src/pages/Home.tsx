import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Play, Volume2, CheckCircle2, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import VideoPortfolio, { SHOWCASE_VIDEO_IDS, ReelLightbox } from '../components/VideoPortfolio';
import { ContainerScroll } from '../components/ui/container-scroll-animation';
import { DashboardMockup } from '../components/ui/DashboardMockup';
import {
  SmoothLine,
  KineticReveal,
  TiltSpotlightCard,
  MagneticButton,
} from '../components/motion/MotionPrimitives';
import { SERVICES_DATA } from '../data/servicesData';

const FEATURED_REELS = [
  { index: 0, label: '01', id: SHOWCASE_VIDEO_IDS[0] },
  { index: 1, label: '02', id: SHOWCASE_VIDEO_IDS[1] },
  { index: 2, label: '03', id: SHOWCASE_VIDEO_IDS[2] },
];

const Home = () => {
  const [heroReelPos, setHeroReelPos] = useState(0);
  const [heroLightboxIndex, setHeroLightboxIndex] = useState<number | null>(null);
  const [heroInView, setHeroInView] = useState(true);
  const heroVideoRef = useRef<HTMLDivElement>(null);
  const activeHeroReel = FEATURED_REELS[heroReelPos] ?? FEATURED_REELS[0];

  // Pause hero video iframe cleanly once user scrolls well below hero so showcase can autoplay smoothly
  useEffect(() => {
    const el = heroVideoRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      ([entry]) => setHeroInView(entry.isIntersecting),
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollToShowcase = () => {
    const el = document.getElementById('showcase');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ============================================================
          ACT I: BRAND-FIRST APPLE LIQUID GLASS HERO + AUTOPLAY REEL
         ============================================================ */}
      <section className="relative min-h-[calc(100vh-1rem)] flex items-center pt-20 md:pt-24 pb-10 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column — Client's Logo, Specified Font & Brand Colors Prominently Displayed */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass-pill text-[11px] font-medium text-[#D1D1D6]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gradient" />
              <span>Delhi · Creative &amp; Performance Agency</span>
            </motion.div>

            {/* Brand Lockup: Client's Logo + Bebas Neue Name + Yellow-Orange-Purple Gradient */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.04 }}
              className="flex items-center gap-3.5 sm:gap-4"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl liquid-glass flex items-center justify-center p-2 shrink-0">
                <img
                  src="/logo.png"
                  alt="Social Spark Official Logo"
                  className="w-full h-full object-contain drop-shadow-[0_0_14px_rgba(249,115,22,0.45)]"
                />
              </div>
              <div>
                <h1 className="font-bebas font-normal text-5xl sm:text-6xl lg:text-[4.25rem] tracking-wide leading-[0.9] text-brand-gradient">
                  Social Spark
                </h1>
                <p className="font-outfit text-xs sm:text-sm text-[#A1A1A6] tracking-wide mt-0.5">
                  Ignite your brand. Scale your impact.
                </p>
              </div>
            </motion.div>

            {/* Primary Apple-Proportioned Positioning Statement */}
            <h2 className="font-display font-semibold tracking-[-0.03em] leading-[1.08] text-3xl sm:text-4xl lg:text-[2.65rem] text-[#F5F5F7]">
              <SmoothLine delay={0.08}>Brands built to</SmoothLine>
              <SmoothLine delay={0.14}>
                command <span className="text-[#86868B]">attention.</span>
              </SmoothLine>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-outfit text-sm sm:text-base text-[#A1A1A6] max-w-md leading-relaxed font-light"
            >
              Personal branding, high-retention short-form production, creator partnerships, and creative-led paid media engineered in Delhi.
            </motion.p>

            {/* Primary Actions — Mobile Thumb-Friendly */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.26 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1"
            >
              <MagneticButton strength={0.18} className="w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-3 rounded-full bg-brand-gradient hover:brightness-110 text-white font-semibold text-sm transition-all shadow-[0_10px_30px_rgba(249,115,22,0.3)]"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight size={15} />
                </Link>
              </MagneticButton>

              <button
                type="button"
                onClick={scrollToShowcase}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:py-3 rounded-full liquid-glass-pill text-[#F5F5F7] hover:bg-white/[0.12] font-medium text-sm transition-all cursor-pointer"
              >
                <Play size={13} className="fill-white" />
                <span>Watch Showcase</span>
              </button>
            </motion.div>

            {/* Studio Metrics Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.34 }}
              className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-white/[0.08] max-w-md"
            >
              <div>
                <p className="font-display text-lg sm:text-xl font-semibold text-[#F5F5F7]">3.8M+</p>
                <p className="text-[11px] text-[#86868B]">Monthly Reach</p>
              </div>
              <div>
                <p className="font-display text-lg sm:text-xl font-semibold text-[#F5F5F7]">4.8x</p>
                <p className="text-[11px] text-[#86868B]">Blended ROAS</p>
              </div>
              <div>
                <p className="font-display text-lg sm:text-xl font-semibold text-[#F5F5F7]">7</p>
                <p className="text-[11px] text-[#86868B]">Core Services</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column — Auto-Playing 3D Liquid Glass Reel Showcase */}
          <motion.div
            ref={heroVideoRef}
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex justify-center lg:justify-end relative pt-2 lg:pt-0"
          >
            <div className="relative flex items-center justify-center">
              {/* Desktop floating KPI chips */}
              <div className="hidden md:flex flex-col gap-0.5 px-3.5 py-2.5 rounded-2xl liquid-glass absolute -left-16 top-14 z-20 pointer-events-none">
                <span className="text-[10px] font-mono text-[#86868B]">HOOK HOLD</span>
                <span className="font-display text-sm font-semibold text-[#F5F5F7]">76% Avg.</span>
              </div>

              <div className="hidden md:flex flex-col gap-0.5 px-3.5 py-2.5 rounded-2xl liquid-glass absolute -right-14 bottom-20 z-20 pointer-events-none">
                <span className="text-[10px] font-mono text-[#86868B]">PRODUCTION</span>
                <span className="font-display text-sm font-semibold text-[#F5F5F7]">4K Reels</span>
              </div>

              {/* Main 3D Tilt Liquid Glass Device Frame with Autoplaying Muted Video */}
              <div className="w-[225px] sm:w-[250px] md:w-[260px] aspect-[9/16]">
                <TiltSpotlightCard
                  maxTilt={6}
                  spotlightColor="rgba(255, 255, 255, 0.14)"
                  className="rounded-[2.2rem] liquid-glass p-2 shadow-[0_28px_80px_rgba(0,0,0,0.85)]"
                >
                  <div
                    className="relative w-full h-full rounded-[1.8rem] overflow-hidden isolate bg-neutral-950"
                    style={{ clipPath: 'inset(0 round 1.8rem)' }}
                  >
                    {/* Instant crisp fallback poster underneath while stream loads */}
                    <img
                      src={`https://i.ytimg.com/vi/${activeHeroReel.id}/oar2.jpg`}
                      alt={`Social Spark Featured Reel ${activeHeroReel.label}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Auto-playing muted inline YouTube embed when Hero is visible */}
                    {heroInView && (
                      <iframe
                        key={activeHeroReel.id}
                        src={`https://www.youtube.com/embed/${activeHeroReel.id}?autoplay=1&mute=1&loop=1&playlist=${activeHeroReel.id}&controls=0&disablekb=1&modestbranding=1&playsinline=1&rel=0`}
                        title={`Social Spark Hero Autoplay Reel ${activeHeroReel.label}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        className="absolute inset-0 w-full h-full pointer-events-none"
                      />
                    )}

                    {/* Edge vignette */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40 z-10" />

                    {/* Tap overlay to open Theatre Lightbox with full audio */}
                    <button
                      type="button"
                      onClick={() => setHeroLightboxIndex(activeHeroReel.index)}
                      aria-label="Open video with sound"
                      className="absolute inset-0 z-10 cursor-pointer group flex items-end justify-end p-3 pb-16"
                    >
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full liquid-glass-pill text-[10px] font-medium text-white opacity-90 group-hover:scale-105 transition-transform">
                        <Volume2 size={11} className="text-orange-400" />
                        <span>Tap for Sound</span>
                      </span>
                    </button>

                    {/* Top Dynamic Island Pill */}
                    <div className="pointer-events-none absolute top-3 inset-x-0 flex justify-center z-20">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full liquid-glass-pill font-mono text-[10px] text-white/95">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                        Featured Cut · {activeHeroReel.label}
                      </span>
                    </div>

                    {/* Bottom Liquid Glass Reel Switcher Dock */}
                    <div className="absolute bottom-3 inset-x-3 p-1 rounded-full liquid-glass flex items-center justify-between gap-1 z-20">
                      {FEATURED_REELS.map((reel, idx) => (
                        <button
                          key={reel.id}
                          type="button"
                          onClick={() => setHeroReelPos(idx)}
                          className={`flex-1 py-1.5 rounded-full font-mono text-[10px] transition-all cursor-pointer ${
                            heroReelPos === idx
                              ? 'bg-[#F5F5F7] text-black font-semibold'
                              : 'text-[#A1A1A6] hover:text-white'
                          }`}
                        >
                          Cut {reel.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </TiltSpotlightCard>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          ACT II: APPLE SPATIAL 3D SCROLL CONSOLE REVEAL
         ============================================================ */}
      <section className="relative border-t border-white/[0.08]">
        <ContainerScroll
          titleComponent={
            <div className="space-y-2.5">
              <p className="text-xs font-medium text-[#86868B]">Creative Intelligence</p>
              <h2 className="font-display text-2xl sm:text-4xl md:text-[2.65rem] font-semibold tracking-tight text-[#F5F5F7] leading-tight">
                Engineered for watch time.{' '}
                <span className="text-[#86868B]">Proven in revenue.</span>
              </h2>
            </div>
          }
        >
          <DashboardMockup />
        </ContainerScroll>
      </section>

      {/* ============================================================
          ACT III: CAMPAIGN SHOWCASE (SMART VIEWPORT AUTOPLAY)
         ============================================================ */}
      <VideoPortfolio />

      {/* ============================================================
          ACT IV: CAPABILITIES — LIQUID GLASS BENTO SHOWCASE
         ============================================================ */}
      <section className="relative py-14 md:py-20 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto border-t border-white/[0.08]">
        <KineticReveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 md:mb-10">
          <div>
            <p className="text-xs font-medium text-[#86868B] mb-2">Studio Capabilities</p>
            <h2 className="font-display text-2xl sm:text-4xl font-semibold tracking-tight text-[#F5F5F7]">
              Everything needed to scale.
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#F5F5F7] hover:text-orange-400 transition-colors"
          >
            <span>Explore all 7 services</span>
            <ArrowUpRight size={14} />
          </Link>
        </KineticReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES_DATA.slice(0, 6).map((service, idx) => (
            <KineticReveal key={service.id} delay={idx * 0.04}>
              <TiltSpotlightCard
                maxTilt={4}
                className="rounded-2xl liquid-glass-subtle hover:border-white/20 transition-colors"
              >
                <Link to={`/services/${service.id}`} className="group flex flex-col h-full p-5 md:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] text-[#6E6E73]">{service.index}</span>
                    <ArrowUpRight
                      size={15}
                      className="text-[#6E6E73] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[#F5F5F7] mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="mt-auto pt-3 border-t border-white/[0.06] flex items-center gap-2 text-[11px] text-[#A1A1A6]">
                    <CheckCircle2 size={12} className="text-white/60 shrink-0" />
                    <span className="truncate">{service.deliverables[0]}</span>
                  </div>
                </Link>
              </TiltSpotlightCard>
            </KineticReveal>
          ))}
        </div>

        <KineticReveal delay={0.12} className="mt-4">
          <Link
            to={`/services/${SERVICES_DATA[6].id}`}
            className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 md:px-6 rounded-2xl liquid-glass-subtle hover:border-white/20 transition-colors"
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-[11px] text-[#6E6E73]">{SERVICES_DATA[6].index}</span>
              <div>
                <h3 className="font-display text-base md:text-lg font-semibold text-[#F5F5F7]">
                  {SERVICES_DATA[6].title}
                </h3>
                <p className="text-xs text-[#86868B]">{SERVICES_DATA[6].subtitle}</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white shrink-0">
              <span>View Scope</span>
              <ArrowUpRight size={14} />
            </span>
          </Link>
        </KineticReveal>
      </section>

      {/* ============================================================
          ACT V: FOUNDER PROFILE (EXCLUSIVE TO HOME — NO AGE MENTIONS)
         ============================================================ */}
      <section className="relative py-14 md:py-20 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto border-t border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <KineticReveal className="lg:col-span-5">
            <TiltSpotlightCard
              maxTilt={4}
              className="rounded-[1.75rem] liquid-glass p-2 overflow-hidden max-w-sm mx-auto lg:mx-0"
            >
              <div className="relative aspect-[4/5] rounded-[1.35rem] overflow-hidden bg-neutral-950">
                <img
                  src="/saiyam.jpg"
                  alt="Saiyam Dang — Founder of Social Spark"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-[11px] text-[#A1A1A6]">Delhi, India</p>
                  <h3 className="font-display text-2xl font-semibold text-[#F5F5F7]">
                    Saiyam Dang
                  </h3>
                  <p className="text-xs text-[#86868B] mt-0.5">Founder &amp; Visionary</p>
                </div>
              </div>
            </TiltSpotlightCard>
          </KineticReveal>

          <KineticReveal delay={0.08} className="lg:col-span-7 space-y-5">
            <p className="text-xs font-medium text-[#86868B]">Meet the Founder</p>
            <h2 className="font-display text-2xl sm:text-4xl font-semibold tracking-tight text-[#F5F5F7] leading-tight">
              Built for how culture moves today.
            </h2>
            <p className="text-sm sm:text-base text-[#D1D1D6] leading-relaxed">
              <strong className="text-white font-semibold">Vision is what changes the world.</strong>{' '}
              Saiyam Dang recognized a widening gap between slow traditional marketing retainers and how audiences actually discover, trust, and buy in a short-form world.
            </p>
            <p className="text-sm text-[#86868B] leading-relaxed">
              Operating from Delhi across domestic and global accounts, Social Spark combines creative direction, vetted creators, and disciplined media buying under one focused team.
            </p>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-white hover:text-orange-400 transition-colors"
              >
                <span>Read Studio Story</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </KineticReveal>
        </div>
      </section>

      {/* Closing Liquid Glass CTA */}
      <section className="relative py-12 md:py-16 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
        <KineticReveal>
          <div className="rounded-[2rem] liquid-glass p-7 sm:p-10 md:p-14 text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full liquid-glass-pill text-[11px] text-[#D1D1D6] mb-5">
              <Sparkles size={12} className="text-orange-400" />
              <span>Taking New Client Retainers</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#F5F5F7] max-w-2xl mx-auto leading-tight mb-4">
              Ready to build something unmistakable?
            </h2>
            <p className="text-sm md:text-base text-[#86868B] max-w-md mx-auto mb-7">
              Connect directly with our Delhi team on personal branding, short-form production, or paid scaling.
            </p>
            <MagneticButton strength={0.2}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-gradient hover:brightness-110 text-white font-semibold text-sm transition-all shadow-[0_10px_30px_rgba(249,115,22,0.3)]"
              >
                <span>Start a Project</span>
                <ArrowUpRight size={15} />
              </Link>
            </MagneticButton>
          </div>
        </KineticReveal>
      </section>

      <ReelLightbox
        activeIndex={heroLightboxIndex}
        onClose={() => setHeroLightboxIndex(null)}
        onChangeIndex={setHeroLightboxIndex}
      />
    </>
  );
};

export default Home;
