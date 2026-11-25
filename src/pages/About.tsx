import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Target, Users, Award, ArrowUpRight } from 'lucide-react';
import {
  SmoothLine,
  KineticReveal,
  TiltSpotlightCard,
  MagneticButton,
} from '../components/motion/MotionPrimitives';

const About = () => {
  const pillars = [
    {
      icon: <Target className="text-orange-400" size={20} />,
      title: 'Clarity First',
      desc: 'Sharp positioning that gives your brand an immediate edge before a single ad rupee is spent.',
    },
    {
      icon: <Shield className="text-yellow-400" size={20} />,
      title: 'Full Transparency',
      desc: 'Honest attribution, open creative metrics, and clear commercial accountability on every sprint.',
    },
    {
      icon: <Users className="text-pink-400" size={20} />,
      title: 'Creator Culture',
      desc: 'Direct access to vetted creators, editors, and storytellers who shape internet attention.',
    },
    {
      icon: <Award className="text-white" size={20} />,
      title: 'Execution Speed',
      desc: 'Weekly creative iterations tuned to emerging formats without slow traditional agency layers.',
    },
  ];

  const sprints = [
    {
      step: '01',
      title: 'Positioning & Audit',
      desc: 'We audit your digital footprint, competitors, and category whitespace to lock in a distinct brand angle and content playbook.',
    },
    {
      step: '02',
      title: 'Production & Creator Wave',
      desc: 'Our Delhi studio produces high-retention short-form cuts, flagship visuals, and creator collaborations engineered for organic reach.',
    },
    {
      step: '03',
      title: 'Paid Scaling & Compounding',
      desc: 'Winning organic creatives graduate into Meta, Google, and YouTube funnels so cultural momentum turns into qualified pipeline.',
    },
  ];

  return (
    <section className="relative pb-20 px-4 sm:px-6 md:px-8 pt-24 md:pt-32 max-w-6xl mx-auto">
      {/* Studio Header */}
      <div className="max-w-3xl mb-12 md:mb-16">
        <p className="text-xs font-medium text-[#86868B] mb-3">
          Delhi, India · About The Studio
        </p>

        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] text-[#F5F5F7] leading-[1.04] mb-5">
          <SmoothLine delay={0.04}>Built to replace slow</SmoothLine>
          <SmoothLine delay={0.1}>
            marketing with{' '}
            <span className="font-bebas tracking-wide text-brand-gradient font-normal text-4xl sm:text-6xl md:text-[4rem] align-baseline">
              CULTURAL MOMENTUM.
            </span>
          </SmoothLine>
        </h1>

        <p className="font-outfit text-[#A1A1A6] text-sm sm:text-base md:text-lg leading-relaxed font-light max-w-2xl">
          Social Spark started in Delhi with a direct premise: internet culture moves faster than legacy agencies can approve a slide deck. We combine sharp creative taste with measurable media execution so modern brands earn attention and scale cleanly.
        </p>
      </div>

      {/* 4 Core Studio Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14 md:mb-20">
        {pillars.map((item, i) => (
          <KineticReveal key={item.title} delay={i * 0.04}>
            <TiltSpotlightCard
              maxTilt={4}
              className="rounded-2xl liquid-glass-subtle p-6 hover:border-white/20 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl liquid-glass-pill flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h2 className="font-display text-lg font-semibold text-[#F5F5F7] mb-2">
                {item.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed">{item.desc}</p>
            </TiltSpotlightCard>
          </KineticReveal>
        ))}
      </div>

      {/* Philosophy Glass Showcase */}
      <KineticReveal className="mb-14 md:mb-20">
        <div className="rounded-[2rem] liquid-glass p-6 sm:p-10 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <p className="text-xs font-medium text-[#86868B] mb-2">Our Philosophy</p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-[#F5F5F7] mb-4 leading-tight">
              Human taste backed by live data.
            </h2>
            <p className="text-[#D1D1D6] text-sm sm:text-base leading-relaxed mb-3 font-normal">
              In feeds flooded with lookalike templates, unmistakable identity and genuine storytelling remain the strongest competitive edge a business can build.
            </p>
            <p className="text-[#86868B] text-xs sm:text-sm leading-relaxed">
              Analytics tell us where attention drops off and which creatives scale ROAS—giving our directors clear feedback while keeping every reel authentic.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full liquid-glass flex items-center justify-center p-7">
              <img
                src="/logo.png"
                alt="Social Spark Emblem"
                loading="lazy"
                className="w-full h-full object-contain drop-shadow-[0_0_24px_rgba(249,115,22,0.35)]"
              />
            </div>
          </div>
        </div>
      </KineticReveal>

      {/* Operating Rhythm */}
      <div className="mb-14 md:mb-20">
        <KineticReveal className="mb-8">
          <p className="text-xs font-medium text-[#86868B] mb-2">How We Work</p>
          <h2 className="font-display text-2xl sm:text-4xl font-semibold text-[#F5F5F7]">
            Three phases from brief to scale.
          </h2>
        </KineticReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sprints.map((sp, i) => (
            <KineticReveal key={sp.step} delay={i * 0.05}>
              <div className="h-full rounded-2xl liquid-glass-subtle p-6 flex flex-col">
                <span className="font-bebas text-4xl text-brand-gradient leading-none mb-3">
                  {sp.step}
                </span>
                <h3 className="font-display text-lg font-semibold text-[#F5F5F7] mb-2">
                  {sp.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed">{sp.desc}</p>
              </div>
            </KineticReveal>
          ))}
        </div>
      </div>

      {/* Bottom CTA Strip */}
      <KineticReveal>
        <div className="rounded-[2rem] liquid-glass p-7 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#F5F5F7]">
              Ready to partner with our Delhi team?
            </h2>
            <p className="text-xs sm:text-sm text-[#86868B] mt-1">
              Explore our 7 capabilities or tell us what you&apos;re launching next.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 w-full sm:w-auto">
            <Link
              to="/services"
              className="flex-1 sm:flex-initial text-center px-5 py-3 rounded-full liquid-glass-pill text-xs sm:text-sm font-medium text-white hover:bg-white/[0.12] transition-colors"
            >
              View Services
            </Link>
            <MagneticButton strength={0.18} className="flex-1 sm:flex-initial">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-gradient hover:brightness-110 text-white font-semibold text-xs sm:text-sm transition-all"
              >
                <span>Start a Project</span>
                <ArrowUpRight size={15} />
              </Link>
            </MagneticButton>
          </div>
        </div>
      </KineticReveal>
    </section>
  );
};

export default About;
