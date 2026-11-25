import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Target, Users, Award, ArrowUpRight } from 'lucide-react';
import { BrandBolt } from '../components/BrandBolt';
import {
  KineticLine,
  KineticReveal,
  TiltSpotlightCard,
  MagneticButton,
} from '../components/motion/MotionPrimitives';

const About = () => {
  const pillars = [
    {
      icon: <Target className="text-[#FF5A1F]" size={22} />,
      title: 'Clarity First',
      desc: 'Sharp positioning that gives your brand an instant edge before a single ad rupee is spent.',
    },
    {
      icon: <Shield className="text-[#FFB800]" size={22} />,
      title: 'Full Transparency',
      desc: 'Live creative telemetry, honest attribution, and clear commercial accountability.',
    },
    {
      icon: <Users className="text-[#FF2E93]" size={22} />,
      title: 'Creator Culture',
      desc: 'Deep roots across vetted creators, editors, and storytellers who shape internet culture.',
    },
    {
      icon: <Award className="text-sky-400" size={22} />,
      title: 'Execution Speed',
      desc: 'Weekly creative iterations tuned to emerging trends—no sluggish agency layers.',
    },
  ];

  const sprints = [
    {
      step: '01',
      title: 'Positioning & Audit',
      desc: 'We tear down your current digital footprint, competitors, and category whitespace to lock in a crisp brand narrative and hook playbook.',
    },
    {
      step: '02',
      title: 'Production & Creator Wave',
      desc: 'Our Delhi studio produces high-retention short-form cuts, flagship visuals, and creator partnerships engineered for organic velocity.',
    },
    {
      step: '03',
      title: 'Paid Scaling & Compounding',
      desc: 'Winning organic creatives graduate into Meta, Google, and YouTube funnels—turning cultural momentum into measurable pipeline.',
    },
  ];

  return (
    <section className="relative pb-24 px-5 md:px-10 pt-28 md:pt-40 max-w-7xl mx-auto">
      {/* Studio Manifesto Hero */}
      <div className="max-w-4xl mb-16 md:mb-24">
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#FF5A1F] mb-5">
          <span>Delhi, India · About The Studio</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.03em] text-white leading-[0.96] mb-6 uppercase">
          <KineticLine delay={0.04}>We Are</KineticLine>
          <KineticLine delay={0.12}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] via-[#FF5A1F] to-[#FF2E93]">
              Social Spark.
            </span>
          </KineticLine>
        </h1>

        <p className="text-neutral-300 text-base sm:text-lg md:text-xl leading-relaxed font-light max-w-2xl">
          Social Spark was built on a straightforward observation: culture moves faster than traditional agencies can write a brief. We combine raw editorial taste with data-backed media buying so modern brands win attention and keep it.
        </p>
      </div>

      {/* 4 Studio Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20 md:mb-28">
        {pillars.map((item, i) => (
          <KineticReveal key={item.title} delay={i * 0.05}>
            <TiltSpotlightCard
              maxTilt={6}
              className="rounded-3xl bg-[#0B0B10]/90 border border-white/10 p-7"
            >
              <div className="w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <h2 className="font-display text-xl font-bold text-white mb-2.5">{item.title}</h2>
              <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
            </TiltSpotlightCard>
          </KineticReveal>
        ))}
      </div>

      {/* Philosophy Split Panel */}
      <KineticReveal className="mb-20 md:mb-28">
        <div className="rounded-[2rem] md:rounded-[3rem] bg-[#0B0B10]/90 border border-white/12 p-7 sm:p-12 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#FFB800]">
              Our Philosophy
            </span>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mt-3 mb-6 leading-tight">
              Human Taste Powered by Performance Data.
            </h2>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4 font-light">
              In an era flooded with generic templates, human connection and unmistakable point-of-view are the sharpest competitive moats left.
            </p>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              We let analytics guide distribution, retention hooks, and spend allocation—freeing our creative directors to craft ideas that audiences genuinely care about.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center shadow-[0_0_60px_rgba(255,90,31,0.18)]">
              <BrandBolt className="w-20 h-28 md:w-24 md:h-36" glow />
            </div>
          </div>
        </div>
      </KineticReveal>

      {/* Operating Rhythm / How We Work */}
      <div className="mb-20 md:mb-28">
        <KineticReveal className="mb-10">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF5A1F]">
            Operating Rhythm
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white mt-2">
            How We Launch Campaigns
          </h2>
        </KineticReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {sprints.map((sp, i) => (
            <KineticReveal key={sp.step} delay={i * 0.06}>
              <div className="h-full rounded-3xl bg-[#0B0B10]/90 border border-white/10 p-7 flex flex-col">
                <span className="font-bebas text-5xl text-[#FF5A1F] leading-none mb-4">
                  {sp.step}
                </span>
                <h3 className="font-display text-xl font-bold text-white mb-3">{sp.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{sp.desc}</p>
              </div>
            </KineticReveal>
          ))}
        </div>
      </div>

      {/* Founder Section (No age mentions) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center pt-12 border-t border-white/[0.08]">
        <KineticReveal className="lg:col-span-5">
          <TiltSpotlightCard
            maxTilt={5}
            spotlightColor="rgba(255, 90, 31, 0.2)"
            className="rounded-[2rem] overflow-hidden border border-white/12 bg-[#0B0B10] shadow-2xl"
          >
            <div className="relative aspect-[4/5]">
              <img
                src="/saiyam.jpg"
                alt="Saiyam Dang - Founder of Social Spark"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-display text-3xl font-extrabold text-white">Saiyam Dang</h3>
                <p className="text-[#FF5A1F] font-medium text-base">Founder &amp; Creative Director</p>
              </div>
            </div>
          </TiltSpotlightCard>
        </KineticReveal>

        <KineticReveal delay={0.1} className="lg:col-span-7">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#FFB800]">
            Founder&apos;s Note
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white mt-3 mb-6">
            Meet{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] via-[#FF5A1F] to-[#FF2E93]">
              Saiyam Dang
            </span>
          </h2>
          <p className="text-neutral-200 text-lg md:text-xl leading-relaxed mb-5 font-light">
            <strong className="text-white font-semibold">Vision is what changes the world.</strong>{' '}
            Saiyam Dang recognized a widening gap in how brands and individuals scale their digital presence in an algorithmic era.
          </p>
          <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-8">
            Operating at the intersection of raw digital intuition and performance marketing, Saiyam built Social Spark in Delhi to give ambitious founders and consumer brands the exact creative momentum traditional agencies fail to deliver.
          </p>
          <MagneticButton strength={0.22}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black hover:bg-[#FF5A1F] hover:text-white font-bold text-sm uppercase tracking-wider transition-colors"
            >
              <span>Work With Us</span>
              <ArrowUpRight size={16} />
            </Link>
          </MagneticButton>
        </KineticReveal>
      </div>
    </section>
  );
};

export default About;
