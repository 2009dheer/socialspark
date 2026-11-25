import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Play, Sparkles, CheckCircle2, Flame } from 'lucide-react';
import { motion } from 'motion/react';
import VideoPortfolio from '../components/VideoPortfolio';
import { ContainerScroll } from '../components/ui/container-scroll-animation';
import { DashboardMockup } from '../components/ui/DashboardMockup';
import {
  KineticLine,
  KineticReveal,
  VelocityMarquee,
  TiltSpotlightCard,
  MagneticButton,
} from '../components/motion/MotionPrimitives';
import { SERVICES_DATA } from '../data/servicesData';

const Home = () => {
  const [activeCapIndex, setActiveCapIndex] = useState(0);
  const activeService = SERVICES_DATA[activeCapIndex];

  const scrollToShowcase = () => {
    const el = document.getElementById('showcase');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ============================================================
          ACT I: IMMEDIATE KINETIC HERO (FRAME-1 RENDER, ZERO BLOCKING)
         ============================================================ */}
      <section className="relative min-h-[92vh] md:min-h-screen flex flex-col justify-between pt-28 md:pt-36 pb-10 px-5 md:px-10 max-w-7xl mx-auto">
        {/* Top Metadata Strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-5"
        >
          <div className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-[#FF5A1F] shadow-[0_0_12px_#FF5A1F]" />
            <span>Delhi, India · Personal Branding &amp; Growth Studio</span>
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500">
            28.6139° N / 77.2090° E · Creative Performance
          </div>
        </motion.div>

        {/* Hero Typography Stage */}
        <div className="my-auto py-10 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-9">
            <h1 className="font-display font-extrabold tracking-[-0.035em] leading-[0.94] text-[clamp(2.85rem,7.8vw,6.8rem)] uppercase text-[#F5F3EE]">
              <KineticLine delay={0.04}>We Turn</KineticLine>
              <KineticLine delay={0.12}>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] via-[#FF5A1F] to-[#FF2E93]">
                  Attention
                </span>{' '}
                Into
              </KineticLine>
              <KineticLine delay={0.2}>Cultural Currency.</KineticLine>
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="lg:col-span-3 flex flex-col gap-6 pb-2"
          >
            <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-light">
              Built in Delhi for ambitious founders and modern consumer brands. Short-form cinema, creator ecosystems, and paid media engineered to scale.
            </p>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <MagneticButton strength={0.22}>
                <Link
                  to="/contact"
                  className="w-full px-6 py-3.5 rounded-full bg-[#F5F3EE] hover:bg-[#FF5A1F] text-black hover:text-white font-bold text-sm transition-colors flex items-center justify-between gap-3 shadow-xl"
                >
                  <span>Build Your Brand</span>
                  <ArrowUpRight size={17} />
                </Link>
              </MagneticButton>
              <button
                type="button"
                onClick={scrollToShowcase}
                className="w-full px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/15 text-white font-medium text-sm transition-colors flex items-center justify-between gap-3 backdrop-blur-md cursor-pointer"
              >
                <span>Watch Reels</span>
                <Play size={14} className="fill-white" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Fold Discipline Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/[0.08]"
        >
          {[
            { num: '01', label: 'Personal Branding', sub: 'Executive Authority' },
            { num: '02', label: 'Viral Reels', sub: 'Motion & Storytelling' },
            { num: '03', label: 'Creator Cohorts', sub: 'Influencer Campaigns' },
            { num: '04', label: 'Paid Acquisition', sub: 'Creative-First ROAS' },
          ].map((item) => (
            <div key={item.num} className="flex items-start gap-3">
              <span className="font-mono text-[11px] text-[#FF5A1F] mt-0.5">{item.num}</span>
              <div>
                <p className="font-display text-sm font-bold text-white">{item.label}</p>
                <p className="text-xs text-neutral-500">{item.sub}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ============================================================
          ACT II: SCROLL-VELOCITY KINETIC MARQUEE
         ============================================================ */}
      <section className="relative py-8 md:py-12 border-y border-white/[0.07] bg-black/40 backdrop-blur-sm overflow-hidden">
        <VelocityMarquee
          items={[
            'PERSONAL BRANDING',
            'SHORT-FORM CINEMA',
            'CREATOR CAMPAIGNS',
            'PERFORMANCE ROAS',
          ]}
          baseVelocity={18}
        />
        <VelocityMarquee
          items={[
            'SOCIAL SPARK DELHI',
            'HIGH-RETENTION HOOKS',
            'CULTURAL AUTHORITY',
            'OMNICHANNEL GROWTH',
          ]}
          baseVelocity={15}
          reverse
          outlined
        />
      </section>

      {/* ============================================================
          ACT III: 3D PERSPECTIVE SCROLL-UNFOLDING TELEMETRY STAGE
         ============================================================ */}
      <section className="relative">
        <ContainerScroll
          titleComponent={
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 font-mono text-[11px] uppercase tracking-[0.2em] text-[#FFB800]">
                <Flame size={13} />
                <span>Interactive Studio Deck</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.03]">
                Creative Meets <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] via-[#FF5A1F] to-[#FF2E93]">
                  Compounding Revenue
                </span>
              </h2>
              <p className="text-neutral-400 text-sm md:text-lg max-w-xl mx-auto font-light">
                Every edit, creator collab, and paid media dollar is tracked inside one clear attribution loop.
              </p>
            </div>
          }
        >
          <DashboardMockup />
        </ContainerScroll>
      </section>

      {/* ============================================================
          ACT IV: INTERACTIVE CAPABILITIES INDEX (STICKY DOSSIER)
         ============================================================ */}
      <section className="relative py-20 md:py-32 px-5 md:px-10 max-w-7xl mx-auto border-t border-white/[0.07]">
        <KineticReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF5A1F]">
              Capabilities Index · 01 — 07
            </span>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mt-3">
              How We Scale Brands
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-300 hover:text-white border-b border-white/25 hover:border-[#FF5A1F] pb-1.5 transition-colors self-start md:self-auto"
          >
            <span>Explore Full Capabilities</span>
            <ArrowRight size={14} />
          </Link>
        </KineticReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Interactive Index List */}
          <div className="lg:col-span-7 divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {SERVICES_DATA.map((service, idx) => {
              const isSelected = activeCapIndex === idx;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveCapIndex(idx)}
                  onClick={() => setActiveCapIndex(idx)}
                  className={`group py-5 md:py-6 px-3 md:px-4 cursor-pointer transition-all flex items-center justify-between gap-4 rounded-xl ${
                    isSelected ? 'bg-white/[0.04]' : 'hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <span
                      className={`font-mono text-xs transition-colors ${
                        isSelected ? 'text-[#FF5A1F] font-bold' : 'text-neutral-500'
                      }`}
                    >
                      {service.index}
                    </span>
                    <div>
                      <h3
                        className={`font-display text-xl sm:text-2xl md:text-3xl font-bold transition-colors ${
                          isSelected ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-200'
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p className="text-xs text-neutral-500 mt-0.5 md:hidden">{service.shortTag}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="hidden md:inline font-mono text-[11px] uppercase tracking-wider text-neutral-500">
                      {service.shortTag}
                    </span>
                    <Link
                      to={`/services/${service.id}`}
                      className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-[#FF5A1F] border-[#FF5A1F] text-white rotate-0'
                          : 'border-white/15 text-neutral-400 group-hover:border-white/40 group-hover:text-white'
                      }`}
                      aria-label={`View ${service.title}`}
                    >
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sticky Live Dossier Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <TiltSpotlightCard
              spotlightColor={`${activeService.accentHex}28`}
              className="rounded-3xl bg-[#0B0B10]/90 border border-white/12 p-7 md:p-9 shadow-[0_24px_70px_rgba(0,0,0,0.7)]"
            >
              <div className="flex items-center justify-between mb-6">
                <span
                  className={`px-3 py-1 rounded-full border font-mono text-[10px] uppercase tracking-widest ${activeService.badgeClass}`}
                >
                  {activeService.index} · {activeService.shortTag}
                </span>
                <Sparkles size={16} style={{ color: activeService.accentHex }} />
              </div>

              <h3 className="font-display text-2xl md:text-3xl font-extrabold text-white mb-3">
                {activeService.title}
              </h3>
              <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-6">
                {activeService.description}
              </p>

              <div className="grid grid-cols-3 gap-2.5 mb-7 py-4 border-y border-white/[0.08]">
                {activeService.outcomes.map((o) => (
                  <div key={o.label}>
                    <div className="font-display text-lg md:text-xl font-extrabold text-white">
                      {o.metric}
                    </div>
                    <div className="font-mono text-[10px] text-neutral-500 uppercase mt-0.5">
                      {o.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2.5 mb-8">
                {activeService.deliverables.slice(0, 3).map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-neutral-300">
                    <CheckCircle2 size={15} style={{ color: activeService.accentHex }} className="shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <Link
                  to={`/services/${activeService.id}`}
                  className="flex-1 py-3.5 px-5 rounded-full bg-white text-black hover:bg-[#FF5A1F] hover:text-white font-bold text-xs uppercase tracking-wider text-center transition-colors"
                >
                  Inspect Scope
                </Link>
                <Link
                  to={`/contact?service=${encodeURIComponent(activeService.title)}`}
                  className="py-3.5 px-5 rounded-full border border-white/15 hover:border-white/40 text-white font-semibold text-xs uppercase tracking-wider transition-colors"
                >
                  Enquire
                </Link>
              </div>
            </TiltSpotlightCard>
          </div>
        </div>
      </section>

      {/* ============================================================
          ACT V: CAMPAIGN SHOWCASE (INSTANT POSTER + THEATRE LIGHTBOX)
         ============================================================ */}
      <VideoPortfolio />

      {/* ============================================================
          ACT VI: FOUNDER SPOTLIGHT (NO AGE REFERENCES)
         ============================================================ */}
      <section className="relative py-20 md:py-32 px-5 md:px-10 max-w-7xl mx-auto border-t border-white/[0.07]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <KineticReveal className="lg:col-span-5">
            <TiltSpotlightCard
              maxTilt={5}
              spotlightColor="rgba(255, 90, 31, 0.2)"
              className="rounded-[2rem] overflow-hidden border border-white/12 bg-[#0B0B10] shadow-2xl"
            >
              <div className="relative aspect-[4/5]">
                <img
                  src="/saiyam.jpg"
                  alt="Saiyam Dang — Founder of Social Spark"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FFB800]">
                    Delhi, India
                  </span>
                  <h3 className="font-display text-3xl font-extrabold text-white mt-1">
                    Saiyam Dang
                  </h3>
                  <p className="text-neutral-300 text-sm">Founder &amp; Creative Director</p>
                </div>
              </div>
            </TiltSpotlightCard>
          </KineticReveal>

          <KineticReveal delay={0.1} className="lg:col-span-7">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF5A1F]">
              Leadership &amp; Ethos
            </span>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mt-3 mb-6 leading-[1.04]">
              Built for the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] via-[#FF5A1F] to-[#FF2E93]">
                Algorithmic Era
              </span>
            </h2>
            <p className="text-neutral-200 text-lg md:text-xl leading-relaxed mb-5 font-light">
              <strong className="text-white font-semibold">Vision is what changes the world.</strong>{' '}
              Saiyam Dang recognized a widening gap in how brands and individuals scale their digital presence in a feed driven by short-form taste and speed.
            </p>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-10">
              Operating at the intersection of raw creative intuition and disciplined performance marketing, Social Spark was built to replace slow traditional agencies with agile storytelling, vetted creator networks, and measurable commercial growth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-5">
                <div className="font-display text-2xl font-extrabold text-[#FFB800] mb-1">
                  Taste-Led Creative
                </div>
                <p className="text-neutral-400 text-sm">
                  Platform-native hooks, motion design, and storytelling people actually share.
                </p>
              </div>
              <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-5">
                <div className="font-display text-2xl font-extrabold text-[#FF2E93] mb-1">
                  Performance Discipline
                </div>
                <p className="text-neutral-400 text-sm">
                  Creative testing paired with attribution so attention converts into pipeline.
                </p>
              </div>
            </div>
          </KineticReveal>
        </div>
      </section>

      {/* ============================================================
          ACT VII: CLOSING EDITORIAL CTA
         ============================================================ */}
      <section className="relative py-16 md:py-28 px-5 md:px-10 max-w-7xl mx-auto">
        <KineticReveal>
          <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/15 bg-gradient-to-br from-[#131018] via-[#0B0B10] to-[#120A08] p-8 sm:p-14 md:p-20 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 font-mono text-[11px] uppercase tracking-[0.2em] text-[#FFB800] mb-6">
              Ready When You Are
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-[1.03] mb-6">
              Let&apos;s Turn Your Next Campaign Into Category Dominance.
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-10 font-light">
              Work directly with our Delhi studio team on personal branding, short-form production, creators, and paid scaling.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton strength={0.25}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#FF5A1F] hover:bg-[#ff6d38] text-white font-bold text-sm md:text-base transition-all shadow-[0_0_40px_rgba(255,90,31,0.4)]"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight size={18} />
                </Link>
              </MagneticButton>
              <Link
                to="/about"
                className="px-8 py-4 rounded-full border border-white/15 hover:border-white/35 text-white font-medium text-sm md:text-base transition-colors"
              >
                About Social Spark
              </Link>
            </div>
          </div>
        </KineticReveal>
      </section>
    </>
  );
};

export default Home;
