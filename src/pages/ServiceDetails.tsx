import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import {
  KineticLine,
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
    <section className="relative min-h-screen pt-28 md:pt-36 pb-24 px-5 md:px-10 max-w-5xl mx-auto">
      <Link
        to="/services"
        className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-10 font-mono text-xs uppercase tracking-widest"
      >
        <ArrowLeft size={15} /> All Capabilities
      </Link>

      {/* Header */}
      <div className="mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="font-mono text-xs text-neutral-500">CAPABILITY {service.index} / 07</span>
          <span
            className={`px-3 py-1 rounded-full border font-mono text-[10px] uppercase tracking-wider ${service.badgeClass}`}
          >
            {service.shortTag}
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-[-0.03em] text-white leading-[0.98] mb-5 uppercase">
          <KineticLine>{service.title}</KineticLine>
        </h1>

        <p
          className={`text-xl md:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r ${service.accentClass}`}
        >
          {service.subtitle}
        </p>
      </div>

      {/* Benchmark Metrics Row */}
      <KineticReveal className="grid grid-cols-3 gap-3 md:gap-5 mb-12">
        {service.outcomes.map((o) => (
          <div
            key={o.label}
            className="rounded-2xl bg-[#0B0B10]/90 border border-white/10 p-4 md:p-6"
          >
            <div className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
              {o.metric}
            </div>
            <div className="font-mono text-[10px] md:text-xs text-neutral-400 uppercase tracking-wider mt-1">
              {o.label}
            </div>
          </div>
        ))}
      </KineticReveal>

      {/* Narrative */}
      <KineticReveal delay={0.05} className="mb-12">
        <p className="text-neutral-300 text-base sm:text-lg md:text-xl leading-relaxed font-light">
          {service.detailedText}
        </p>
      </KineticReveal>

      {/* Deliverables Dossier */}
      <KineticReveal delay={0.1} className="mb-14">
        <TiltSpotlightCard
          maxTilt={4}
          spotlightColor={`${service.accentHex}24`}
          className="rounded-[2rem] bg-[#0B0B10]/90 border border-white/12 p-7 md:p-11"
        >
          <div className="flex items-center justify-between mb-7 pb-4 border-b border-white/[0.08]">
            <h2 className="font-display text-2xl font-bold text-white">What&apos;s Included</h2>
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
              Studio Deliverables
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {service.deliverables.map((item) => (
              <div key={item} className="flex items-start gap-3.5">
                <CheckCircle2
                  size={20}
                  style={{ color: service.accentHex }}
                  className="shrink-0 mt-0.5"
                />
                <span className="text-neutral-200 text-sm md:text-base font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-neutral-400">
              Ready to launch <strong className="text-white">{service.title}</strong> with our Delhi team?
            </p>
            <MagneticButton strength={0.22}>
              <Link
                to={`/contact?service=${encodeURIComponent(service.title)}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FF5A1F] hover:bg-[#ff6d38] text-white font-bold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(255,90,31,0.35)] transition-colors"
              >
                <span>Enquire About This</span>
                <ArrowUpRight size={16} />
              </Link>
            </MagneticButton>
          </div>
        </TiltSpotlightCard>
      </KineticReveal>

      {/* Prev / Next Capability Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-white/[0.08]">
        <Link
          to={`/services/${prevService.id}`}
          className="group p-5 rounded-2xl bg-white/[0.025] hover:bg-white/[0.05] border border-white/[0.08] transition-all flex items-center justify-between"
        >
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 flex items-center gap-1.5">
              <ArrowLeft size={12} /> Previous
            </span>
            <p className="font-display text-lg font-bold text-white group-hover:text-[#FFB800] transition-colors mt-1">
              {prevService.title}
            </p>
          </div>
        </Link>

        <Link
          to={`/services/${nextService.id}`}
          className="group p-5 rounded-2xl bg-white/[0.025] hover:bg-white/[0.05] border border-white/[0.08] transition-all flex items-center justify-between text-right sm:justify-end"
        >
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 flex items-center justify-end gap-1.5">
              Next <ArrowRight size={12} />
            </span>
            <p className="font-display text-lg font-bold text-white group-hover:text-[#FF5A1F] transition-colors mt-1">
              {nextService.title}
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ServiceDetails;
