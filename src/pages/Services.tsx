import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import {
  SmoothLine,
  KineticReveal,
  TiltSpotlightCard,
  MagneticButton,
} from '../components/motion/MotionPrimitives';

const Services = () => {
  // Balanced 6-column bento spans for 7 services: [3, 3, 2, 2, 2, 3, 3]
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
    <section className="relative pb-20 px-4 sm:px-6 md:px-8 pt-24 md:pt-32 max-w-6xl mx-auto">
      {/* Header */}
      <div className="max-w-3xl mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass-pill text-[11px] font-medium text-[#D1D1D6] mb-5">
          <Sparkles size={12} className="text-orange-400" />
          <span>Full-Stack Studio Capabilities</span>
        </div>

        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] text-[#F5F5F7] leading-[1.04] mb-5">
          <SmoothLine delay={0.04}>Built for brands that</SmoothLine>
          <SmoothLine delay={0.1}>
            refuse to{' '}
            <span className="font-bebas tracking-wide text-brand-gradient font-normal text-4xl sm:text-6xl md:text-[4rem] align-baseline">
              BLEND IN.
            </span>
          </SmoothLine>
        </h1>

        <p className="font-outfit text-[#A1A1A6] text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed">
          Seven core growth disciplines operating under one roof in Delhi—pairing short-form creative direction with creator partnerships and strict paid attribution.
        </p>
      </div>

      {/* Liquid Glass Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-5">
        {SERVICES_DATA.map((service, idx) => (
          <KineticReveal key={service.id} delay={idx * 0.04} className={colSpans[idx]}>
            <TiltSpotlightCard
              maxTilt={4}
              className="rounded-2xl liquid-glass-subtle hover:border-white/25 transition-colors"
            >
              <Link to={`/services/${service.id}`} className="group flex flex-col h-full p-6 md:p-7">
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="font-mono text-[11px] text-[#6E6E73]">
                    {service.index} / 07
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full liquid-glass-pill text-[10px] font-medium text-[#D1D1D6]">
                    {service.shortTag}
                  </span>
                </div>

                <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#F5F5F7] group-hover:text-white transition-colors mb-2.5">
                  {service.title}
                </h2>
                <p className="text-[#86868B] text-xs sm:text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6 mt-auto pt-4 border-t border-white/[0.07]">
                  {service.deliverables.slice(0, 3).map((d) => (
                    <div key={d} className="flex items-center gap-2 text-xs text-[#D1D1D6]">
                      <CheckCircle2 size={13} className="text-orange-400 shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex gap-4">
                    {service.outcomes.slice(0, 2).map((o) => (
                      <div key={o.label}>
                        <span className="font-display text-sm font-semibold text-white block">
                          {o.metric}
                        </span>
                        <span className="text-[10px] text-[#6E6E73]">{o.label}</span>
                      </div>
                    ))}
                  </div>
                  <span className="w-9 h-9 rounded-full liquid-glass-pill group-hover:bg-[#F5F5F7] group-hover:text-black flex items-center justify-center transition-all">
                    <ArrowUpRight size={15} />
                  </span>
                </div>
              </Link>
            </TiltSpotlightCard>
          </KineticReveal>
        ))}
      </div>

      {/* Bottom Retainer CTA */}
      <KineticReveal delay={0.12} className="mt-12 md:mt-16">
        <div className="rounded-[2rem] liquid-glass p-7 sm:p-10 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-xs font-medium text-[#86868B] mb-1.5">Custom Retainer</p>
            <h3 className="font-display text-xl sm:text-3xl font-semibold text-[#F5F5F7]">
              Need a combined growth team?
            </h3>
            <p className="text-[#86868B] text-xs sm:text-sm mt-1.5 max-w-lg">
              Combine personal branding, short-form production, and paid acquisition into one monthly partnership.
            </p>
          </div>
          <MagneticButton strength={0.2} className="w-full md:w-auto">
            <Link
              to="/contact"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-brand-gradient hover:brightness-110 text-white font-semibold text-sm transition-all shrink-0 shadow-[0_10px_28px_rgba(249,115,22,0.28)]"
            >
              <span>Book Consultation</span>
              <ArrowUpRight size={15} />
            </Link>
          </MagneticButton>
        </div>
      </KineticReveal>
    </section>
  );
};

export default Services;
