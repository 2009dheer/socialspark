import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { KineticLine, TiltSpotlightCard, MagneticButton } from '../components/motion/MotionPrimitives';

const SERVICE_OPTIONS = [...SERVICES_DATA.map((s) => s.title), 'Other Inquiry'];

const Contact = () => {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get('service');
  const matchedService =
    initialService && SERVICE_OPTIONS.includes(initialService)
      ? initialService
      : 'Personal Branding';

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: matchedService,
    message: '',
  });

  useEffect(() => {
    if (initialService && SERVICE_OPTIONS.includes(initialService)) {
      setFormData((prev) => ({ ...prev, subject: initialService }));
    }
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = '919996210648';
    const rawMessage = [
      '*New Inquiry from Social Spark*',
      '',
      `*Name:* ${formData.name.trim()}`,
      `*Email:* ${formData.email.trim()}`,
      `*Capability:* ${formData.subject}`,
      `*Brief:* ${formData.message.trim()}`,
    ].join('\n');

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(rawMessage)}`;
    window.location.href = whatsappUrl;

    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="relative pb-24 px-5 md:px-10 pt-28 md:pt-40 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Studio Desk */}
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#FF5A1F] mb-5">
            <span>Start A Project · Delhi Studio</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] text-white leading-[0.98] mb-6 uppercase">
            <KineticLine delay={0.04}>Let&apos;s Spark</KineticLine>
            <KineticLine delay={0.12}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] via-[#FF5A1F] to-[#FF2E93]">
                Something Iconic.
              </span>
            </KineticLine>
          </h1>

          <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-10 font-light">
            Tell us what you&apos;re building. Our creative and performance team replies within 24 hours on WhatsApp and email.
          </p>

          <div className="space-y-4">
            <a
              href="mailto:newsocialspark@gmail.com"
              className="flex items-center justify-between p-4 rounded-2xl bg-[#0B0B10]/90 border border-white/10 hover:border-[#FF5A1F]/50 transition-colors group"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="text-[#FF5A1F]" size={18} />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-neutral-500">
                    Email Studio
                  </p>
                  <p className="text-sm sm:text-base font-medium text-white truncate">
                    newsocialspark@gmail.com
                  </p>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-neutral-500 group-hover:text-white shrink-0" />
            </a>

            <a
              href="tel:+919996210648"
              className="flex items-center justify-between p-4 rounded-2xl bg-[#0B0B10]/90 border border-white/10 hover:border-[#FFB800]/50 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="text-[#FFB800]" size={18} />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-neutral-500">
                    Direct Line
                  </p>
                  <p className="text-sm sm:text-base font-medium text-white">
                    +91 99962 10648
                  </p>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-neutral-500 group-hover:text-white shrink-0" />
            </a>

            <a
              href="https://maps.google.com/?q=Delhi,+India"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl bg-[#0B0B10]/90 border border-white/10 hover:border-[#FF2E93]/50 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-[#FF2E93]" size={18} />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-neutral-500">
                    Headquarters
                  </p>
                  <p className="text-sm sm:text-base font-medium text-white">
                    Delhi, India (Global Operations)
                  </p>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-neutral-500 group-hover:text-white shrink-0" />
            </a>
          </div>
        </div>

        {/* Right Interactive Inquiry Form */}
        <div className="lg:col-span-7">
          <TiltSpotlightCard
            maxTilt={3}
            spotlightColor="rgba(255, 90, 31, 0.16)"
            className="rounded-[2rem] bg-[#0B0B10]/92 border border-white/12 p-6 sm:p-10 md:p-12 shadow-[0_25px_80px_rgba(0,0,0,0.75)]"
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-20">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mb-6">
                  <Send className="text-emerald-400" size={26} />
                </div>
                <h2 className="font-display text-2xl font-bold text-white mb-2">
                  Opening WhatsApp Studio...
                </h2>
                <p className="text-neutral-400 text-sm max-w-sm">
                  Your project brief is pre-filled and ready. Tap Send in WhatsApp to connect directly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 block">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/12 focus:border-[#FF5A1F] focus:outline-none transition-colors text-sm text-white placeholder:text-neutral-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 block">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/12 focus:border-[#FF5A1F] focus:outline-none transition-colors text-sm text-white placeholder:text-neutral-600"
                    />
                  </div>
                </div>

                {/* All Services Interactive Selector Pills */}
                <div className="space-y-2.5">
                  <label className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 block">
                    Select Capability / Service
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {SERVICE_OPTIONS.map((serviceName) => {
                      const active = formData.subject === serviceName;
                      return (
                        <button
                          key={serviceName}
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({ ...prev, subject: serviceName }))
                          }
                          className={`px-3.5 py-2 rounded-full text-xs font-medium transition-all cursor-pointer border ${
                            active
                              ? 'bg-[#FF5A1F] border-[#FF5A1F] text-white font-semibold shadow-[0_0_20px_rgba(255,90,31,0.3)]'
                              : 'bg-white/[0.03] border-white/10 text-neutral-300 hover:border-white/30 hover:text-white'
                          }`}
                        >
                          {serviceName}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 block">
                    Project Brief
                  </label>
                  <textarea
                    required
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share your brand, goals, timeline, and links..."
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/12 focus:border-[#FF5A1F] focus:outline-none transition-colors resize-none text-sm text-white placeholder:text-neutral-600"
                  />
                </div>

                <MagneticButton className="w-full" strength={0.14}>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-gradient-to-r from-[#FF5A1F] via-[#FF5A1F] to-[#FF2E93] hover:brightness-110 text-white font-bold text-sm uppercase tracking-wider shadow-[0_0_32px_rgba(255,90,31,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Send Brief via WhatsApp</span>
                    <Send size={16} />
                  </button>
                </MagneticButton>
              </form>
            )}
          </TiltSpotlightCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;
