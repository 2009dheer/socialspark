import React from 'react';
import { Link } from 'react-router-dom';
import { User, PenTool, TrendingUp, ChevronRight, Share2, Globe, Heart, Megaphone } from 'lucide-react';

const Services = () => {
  const coreServices = [
    {
      title: "Influencer Marketing",
      description: "Leverage voices that matter to drive authentic engagement and exponential reach.",
      icon: <Heart size={28} className="text-pink-400 md:w-8 md:h-8" />,
      gradient: "from-pink-500/20 to-purple-500/20",
      link: "/services/influencer-marketing"
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive brand growth tailored across all major digital ecosystems.",
      icon: <Globe size={28} className="text-blue-400 md:w-8 md:h-8" />,
      gradient: "from-blue-500/20 to-cyan-500/20",
      link: "/services/digital-marketing"
    },
    {
      title: "Performance Marketing",
      description: "ROI-focused campaigns that turn attention into measurable revenue.",
      icon: <TrendingUp size={28} className="text-orange-400 md:w-8 md:h-8" />,
      gradient: "from-orange-500/20 to-red-500/20",
      link: "/services/performance-marketing"
    },
    {
      title: "Affiliate Marketing",
      description: "Scale a performance-based sales force for your brand.",
      icon: <Share2 size={28} className="text-emerald-400 md:w-8 md:h-8" />,
      gradient: "from-emerald-500/20 to-teal-500/20",
      link: "/services/affiliate-marketing"
    },
    {
      title: "Content Creation",
      description: "High-impact production assets that command attention and convert.",
      icon: <PenTool size={28} className="text-purple-400 md:w-8 md:h-8" />,
      gradient: "from-purple-500/20 to-indigo-500/20",
      link: "/services/content-creation"
    },
    {
      title: "Branding + Marketing",
      description: "Where premium aesthetic identity meets exponential market growth.",
      icon: <Megaphone size={28} className="text-rose-400 md:w-8 md:h-8" />,
      gradient: "from-rose-500/20 to-orange-500/20",
      link: "/services/branding-marketing"
    },
    {
      title: "Personal Branding",
      description: "Forge an unforgettable digital identity and build your authority.",
      icon: <User size={28} className="text-yellow-400 md:w-8 md:h-8" />,
      gradient: "from-yellow-400/20 to-orange-500/20",
      link: "/services/personal-branding"
    }
  ];

  return (
    <section className="relative pb-12 md:pb-24 px-4 md:px-5 bg-neutral-950 min-h-screen pt-20 md:pt-40 overflow-hidden">
      {/* Background Elements */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-96 bg-orange-600/10 blur-[80px] pointer-events-none"></div>
      <div className="hidden md:block absolute bottom-0 right-0 w-full h-96 bg-purple-600/10 blur-[80px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col mb-10 md:mb-20 gap-4 md:gap-6 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-3 md:mb-4 tracking-tight text-white">
            Our Core Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 justify-center">
          {coreServices.map((service, index) => (
            <Link key={index} to={service.link} className={`group relative bg-neutral-900/50 md:backdrop-blur-xl border border-white/5 rounded-2xl md:rounded-3xl p-6 md:p-8 hover:bg-neutral-900 transition-all duration-500 hover:-translate-y-2 overflow-hidden ${index === 6 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10 md:opacity-0 md:group-hover:opacity-10 transition-opacity duration-500`}></div>
              <div className="relative z-10">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-neutral-950 border border-white/10 flex items-center justify-center mb-5 md:mb-6 shadow-inner group-hover:border-white/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{service.title}</h3>
                <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-6 md:mb-8">{service.description}</p>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <ChevronRight size={16} className="md:w-[18px] md:h-[18px]" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

