import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { SmoothLine, TiltSpotlightCard, MagneticButton } from '../components/motion/MotionPrimitives';

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
      `*Service:* ${formData.subject}`,
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
    <section className="relative pb-20 px-4 sm:px-6 md:px-8 pt-24 md:pt-32 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Studio Info */}
        <div className="lg:col-span-5">
          <p className="text-xs font-medium text-[#86868B] mb-3">
            Start a Project · Delhi Studio
          </p>

          <h1 className="font-display text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#F5F5F7] leading-[1.05] mb-4">
            <SmoothLine delay={0.04}>Let&apos;s spark</SmoothLine>
            <SmoothLine delay={0.1}>
              something{' '}
              <span className="font-bebas tracking-wide text-brand-gradient font-normal text-4xl sm:text-5xl align-baseline">
                UNMISTAKABLE.
              </span>
            </SmoothLine>
          </h1>

          <p className="font-outfit text-[#A1A1A6] text-sm sm:text-base leading-relaxed mb-8 font-light">
            Tell us what you&apos;re building. Our team in Delhi replies within 24 hours on WhatsApp and email.
          </p>

          <div className="space-y-3">
            <a
              href="mailto:newsocialspark@gmail.com"
              className="flex items-center justify-between p-4 rounded-2xl liquid-glass-subtle hover:border-white/25 transition-colors group"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl liquid-glass-pill flex items-center justify-center shrink-0">
                  <Mail className="text-orange-400" size={16} />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] text-[#6E6E73]">Email</p>
                  <p className="text-sm font-medium text-white truncate">
                    newsocialspark@gmail.com
                  </p>
                </div>
              </div>
              <ArrowUpRight size={15} className="text-[#6E6E73] group-hover:text-white shrink-0" />
            </a>

            <a
              href="tel:+919996210648"
              className="flex items-center justify-between p-4 rounded-2xl liquid-glass-subtle hover:border-white/25 transition-colors group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl liquid-glass-pill flex items-center justify-center shrink-0">
                  <Phone className="text-yellow-400" size={16} />
                </div>
                <div>
                  <p className="text-[11px] text-[#6E6E73]">Phone</p>
                  <p className="text-sm font-medium text-white">+91 99962 10648</p>
                </div>
              </div>
              <ArrowUpRight size={15} className="text-[#6E6E73] group-hover:text-white shrink-0" />
            </a>

            <a
              href="https://maps.google.com/?q=Delhi,+India"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl liquid-glass-subtle hover:border-white/25 transition-colors group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl liquid-glass-pill flex items-center justify-center shrink-0">
                  <MapPin className="text-pink-400" size={16} />
                </div>
                <div>
                  <p className="text-[11px] text-[#6E6E73]">Studio Location</p>
                  <p className="text-sm font-medium text-white">Delhi, India (Global Operations)</p>
                </div>
              </div>
              <ArrowUpRight size={15} className="text-[#6E6E73] group-hover:text-white shrink-0" />
            </a>
          </div>
        </div>

        {/* Right Liquid Glass Form */}
        <div className="lg:col-span-7">
          <TiltSpotlightCard
            maxTilt={2}
            className="rounded-[2rem] liquid-glass p-5 sm:p-8 md:p-10"
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mb-5">
                  <Send className="text-emerald-400" size={22} />
                </div>
                <h2 className="font-display text-xl font-semibold text-white mb-2">
                  Opening WhatsApp...
                </h2>
                <p className="text-[#86868B] text-sm max-w-xs">
                  Your brief is pre-filled and ready. Tap Send in WhatsApp to connect directly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#A1A1A6] block">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/12 focus:border-orange-500 focus:outline-none transition-colors text-sm text-white placeholder:text-[#6E6E73]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#A1A1A6] block">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/12 focus:border-orange-500 focus:outline-none transition-colors text-sm text-white placeholder:text-[#6E6E73]"
                    />
                  </div>
                </div>

                {/* All Services Interactive Pills */}
                <div className="space-y-2">
                  <label className="text-xs font-medium text-[#A1A1A6] block">
                    Select Service / Scope
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
                          className={`px-3.5 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                            active
                              ? 'bg-[#F5F5F7] text-black font-semibold shadow-sm'
                              : 'liquid-glass-pill text-[#D1D1D6] hover:text-white'
                          }`}
                        >
                          {serviceName}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-[#A1A1A6] block">
                    Project Brief
                  </label>
                  <textarea
                    required
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share your brand, goals, and timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/12 focus:border-orange-500 focus:outline-none transition-colors resize-none text-sm text-white placeholder:text-[#6E6E73]"
                  />
                </div>

                <MagneticButton className="w-full" strength={0.14}>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-brand-gradient hover:brightness-110 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_10px_28px_rgba(249,115,22,0.28)]"
                  >
                    <span>Send Brief via WhatsApp</span>
                    <Send size={15} />
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
