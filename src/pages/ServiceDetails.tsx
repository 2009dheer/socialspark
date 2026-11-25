import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import {
  SmoothLine,
  KineticReveal,
  TiltSpotlightCard,
  MagneticButton,
} from '../components/motion/MotionPrimitives';

const ServiceDetails = () => {
  const { id } = useParams();
  const currentIndex = SERVICES_DATA.findIndex((s) => s.id === id);

  if (currentIndex === -1) {
    return <Navigate to="/services" replace />;
  }

  const service = SERVICES_DATA[currentIndex];
  const prevService = SERVICES_DATA[(currentIndex - 1 + SERVICES_DATA.length) % SERVICES_DATA.length];
  const nextService = SERVICES_DATA[(currentIndex + 1) % SERVICES_DATA.length];

  return (
    <section className="relative min-h-screen pt-24 md:pt-32 pb-20 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
      <Link
        to="/services"
        className="inline-flex items-center gap-2 text-[#86868B] hover:text-white transition-colors mb-8 text-xs font-medium"
      >
        <ArrowLeft size={14} /> All Capabilities
      </Link>

      {/* Header */}
      <div className="mb-10">
        <div className="flex flex-wrap items-center gap-2.5 mb-4">
          <span className="font-mono text-xs text-[#6E6E73]">
            Capability {service.index} / 07
          </span>
          <span className="px-3 py-0.5 rounded-full liquid-glass-pill text-[11px] font-medium text-[#D1D1D6]">
            {service.shortTag}
          </span>
        </div>

        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] text-[#F5F5F7] leading-[1.03] mb-4">
          <SmoothLine>{service.title}</SmoothLine>
        </h1>

        <p className="font-outfit text-lg sm:text-xl text-brand-gradient font-normal">
          {service.subtitle}
        </p>
      </div>

      {/* Benchmark Row */}
      <KineticReveal className="grid grid-cols-3 gap-3 sm:gap-4 mb-10">
        {service.outcomes.map((o) => (
          <div
            key={o.label}
            className="rounded-2xl liquid-glass-subtle p-4 sm:p-5"
          >
            <div className="font-display text-xl sm:text-3xl font-semibold text-[#F5F5F7]">
              {o.metric}
            </div>
            <div className="text-[11px] sm:text-xs text-[#86868B] mt-1">{o.label}</div>
          </div>
        ))}
      </KineticReveal>

      {/* Overview Text */}
      <KineticReveal delay={0.05} className="mb-10">
        <p className="font-outfit text-[#D1D1D6] text-base sm:text-lg leading-relaxed font-light">
          {service.detailedText}
        </p>
      </KineticReveal>

      {/* Deliverables Card */}
      <KineticReveal delay={0.1} className="mb-12">
        <TiltSpotlightCard
          maxTilt={3}
          className="rounded-[2rem] liquid-glass p-6 sm:p-9"
        >
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
            <h2 className="font-display text-xl font-semibold text-[#F5F5F7]">
              What&apos;s Included
            </h2>
            <span className="font-mono text-[11px] text-[#6E6E73] uppercase">Deliverables</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.deliverables.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 size={17} className="text-orange-400 shrink-0 mt-0.5" />
                <span className="text-[#D1D1D6] text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-[#86868B]">
              Ready to launch <strong className="text-white">{service.title}</strong> with our Delhi team?
            </p>
            <MagneticButton strength={0.18} className="w-full sm:w-auto">
              <Link
                to={`/contact?service=${encodeURIComponent(service.title)}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-gradient hover:brightness-110 text-white font-semibold text-sm transition-all shadow-[0_8px_24px_rgba(249,115,22,0.28)]"
              >
                <span>Enquire About This</span>
                <ArrowUpRight size={15} />
              </Link>
            </MagneticButton>
          </div>
        </TiltSpotlightCard>
      </KineticReveal>

      {/* Prev / Next Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-6 border-t border-white/[0.08]">
        <Link
          to={`/services/${prevService.id}`}
          className="group p-4 rounded-2xl liquid-glass-subtle hover:border-white/25 transition-all"
        >
          <span className="text-[11px] text-[#6E6E73] flex items-center gap-1">
            <ArrowLeft size={12} /> Previous
          </span>
          <p className="font-display text-base font-semibold text-[#F5F5F7] mt-1">
            {prevService.title}
          </p>
        </Link>

        <Link
          to={`/services/${nextService.id}`}
          className="group p-4 rounded-2xl liquid-glass-subtle hover:border-white/25 transition-all sm:text-right"
        >
          <span className="text-[11px] text-[#6E6E73] flex items-center sm:justify-end gap-1">
            Next <ArrowRight size={12} />
          </span>
          <p className="font-display text-base font-semibold text-[#F5F5F7] mt-1">
            {nextService.title}
          </p>
        </Link>
      </div>
    </section>
  );
};

export default ServiceDetails;
