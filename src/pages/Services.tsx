import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import {
  KineticLine,
  KineticReveal,
  TiltSpotlightCard,
  MagneticButton,
} from '../components/motion/MotionPrimitives';

const Services = () => {
  // Balanced 6-column bento spans for 7 services: [3, 3, 2, 2, 2, 3, 3] — zero orphan rows
  const colSpans = [
    'lg:col-span-3',
    'lg:col-span-3',
    'lg:col-span-2',
    'lg:col-span-2',
    'lg:col-span-2',
    'lg:col-span-3',
    'lg:col-span-3',
  ];

  return (
    <section className="relative pb-24 px-5 md:px-10 pt-28 md:pt-40 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-4xl mb-14 md:mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 font-mono text-[11px] uppercase tracking-[0.2em] text-[#FF5A1F] mb-6">
          <Sparkles size={13} />
          <span>Full-Stack Studio Capabilities</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.03em] text-[#F5F3EE] leading-[0.96] mb-6 uppercase">
          <KineticLine delay={0.04}>Built For Brands</KineticLine>
          <KineticLine delay={0.12}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] via-[#FF5A1F] to-[#FF2E93]">
              That Refuse
            </span>{' '}
            To Blend In.
          </KineticLine>
        </h1>

        <p className="text-neutral-300 text-base md:text-xl max-w-2xl font-light leading-relaxed">
          Seven specialized disciplines operating under one roof in Delhi—combining taste-led creative direction, creator trust, and strict paid attribution.
        </p>
      </div>

      {/* Symmetrical 6-Column Architectural Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 md:gap-6">
        {SERVICES_DATA.map((service, idx) => (
          <KineticReveal key={service.id} delay={idx * 0.04} className={colSpans[idx]}>
            <TiltSpotlightCard
              spotlightColor={`${service.accentHex}26`}
              maxTilt={6}
              className="rounded-[1.75rem] bg-[#0B0B10]/90 border border-white/10 hover:border-white/25 transition-colors"
            >
              <Link to={`/services/${service.id}`} className="group flex flex-col h-full p-7 md:p-8">
                <div className="flex items-center justify-between gap-3 mb-6">
                  <span className="font-mono text-xs tracking-widest text-neutral-400">
                    {service.index} / 07
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full border font-mono text-[10px] uppercase tracking-wider ${service.badgeClass}`}
                  >
                    {service.shortTag}
                  </span>
                </div>

                <h2 className="font-display text-2xl md:text-3xl font-extrabold text-white group-hover:text-[#FFB800] transition-colors mb-3">
                  {service.title}
                </h2>
                <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Key deliverables preview */}
                <div className="space-y-2 mb-7 mt-auto pt-5 border-t border-white/[0.07]">
                  {service.deliverables.slice(0, 3).map((d) => (
                    <div key={d} className="flex items-center gap-2 text-xs md:text-sm text-neutral-300">
                      <CheckCircle2 size={14} style={{ color: service.accentHex }} className="shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex gap-4">
                    {service.outcomes.slice(0, 2).map((o) => (
                      <div key={o.label}>
                        <span className="font-display text-sm font-bold text-white block">
                          {o.metric}
                        </span>
                        <span className="font-mono text-[10px] text-neutral-500 uppercase">
                          {o.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <span className="w-10 h-10 rounded-full border border-white/15 group-hover:bg-white group-hover:text-black flex items-center justify-center transition-all group-hover:translate-x-1">
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </Link>
            </TiltSpotlightCard>
          </KineticReveal>
        ))}
      </div>

      {/* Bottom Retainer CTA */}
      <KineticReveal delay={0.15} className="mt-16 md:mt-24">
        <div className="rounded-[2rem] border border-white/12 bg-[#0B0B10]/90 p-8 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF5A1F] mb-2">
              Custom Scope
            </p>
            <h3 className="font-display text-2xl md:text-4xl font-extrabold text-white">
              Need a combined growth team?
            </h3>
            <p className="text-neutral-400 text-sm md:text-base mt-2 max-w-xl">
              Bundle personal branding, short-form production, and paid acquisition into a dedicated monthly retainer.
            </p>
          </div>
          <MagneticButton strength={0.25}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#FF5A1F] hover:bg-[#ff6d38] text-white font-bold text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(255,90,31,0.35)] transition-colors shrink-0"
            >
              <span>Book Consultation</span>
              <ArrowUpRight size={16} />
            </Link>
          </MagneticButton>
        </div>
      </KineticReveal>
    </section>
  );
};

export default Services;
