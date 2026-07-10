import React from 'react';
import { Link } from 'react-router-dom';
import { User, PenTool, TrendingUp, ChevronRight, Share2, Globe, Heart, Megaphone, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const Services = () => {
  const coreServices = [
    {
      id: "influencer-marketing",
      title: "Influencer Marketing",
      description: "Leverage voices that matter to drive authentic engagement and exponential reach. We connect you with the right creators to scale your narrative.",
      icon: <Heart size={32} className="text-pink-400" />,
      gradient: "from-pink-500/20 to-purple-500/20",
      border: "hover:border-pink-500/50",
      shadow: "hover:shadow-[0_0_40px_rgba(236,72,153,0.3)]",
      link: "/services/influencer-marketing"
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description: "Comprehensive brand growth tailored across all major digital ecosystems. We build omni-channel systems that capture and convert attention.",
      icon: <Globe size={32} className="text-blue-400" />,
      gradient: "from-blue-500/20 to-cyan-500/20",
      border: "hover:border-blue-500/50",
      shadow: "hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]",
      link: "/services/digital-marketing"
    },
    {
      id: "performance-marketing",
      title: "Performance Marketing",
      description: "ROI-focused campaigns that turn attention into measurable revenue. Data-driven media buying that scales your customer acquisition.",
      icon: <TrendingUp size={32} className="text-orange-400" />,
      gradient: "from-orange-500/20 to-red-500/20",
      border: "hover:border-orange-500/50",
      shadow: "hover:shadow-[0_0_40px_rgba(249,115,22,0.3)]",
      link: "/services/performance-marketing"
    },
    {
      id: "affiliate-marketing",
      title: "Affiliate Marketing",
      description: "Scale a performance-based sales force for your brand. We build and manage networks of affiliates that drive risk-free revenue.",
      icon: <Share2 size={32} className="text-emerald-400" />,
      gradient: "from-emerald-500/20 to-teal-500/20",
      border: "hover:border-emerald-500/50",
      shadow: "hover:shadow-[0_0_40px_rgba(16,185,129,0.3)]",
      link: "/services/affiliate-marketing"
    },
    {
      id: "content-creation",
      title: "Content Creation",
      description: "High-impact production assets that command attention and convert. From viral short-form to high-end commercial production.",
      icon: <PenTool size={32} className="text-purple-400" />,
      gradient: "from-purple-500/20 to-indigo-500/20",
      border: "hover:border-purple-500/50",
      shadow: "hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]",
      link: "/services/content-creation"
    },
    {
      id: "branding-marketing",
      title: "Branding + Marketing",
      description: "Where premium aesthetic identity meets exponential market growth. We build brands that people remember and buy from.",
      icon: <Megaphone size={32} className="text-rose-400" />,
      gradient: "from-rose-500/20 to-orange-500/20",
      border: "hover:border-rose-500/50",
      shadow: "hover:shadow-[0_0_40px_rgba(244,63,94,0.3)]",
      link: "/services/branding-marketing"
    },
    {
      id: "personal-branding",
      title: "Personal Branding",
      description: "Forge an unforgettable digital identity and build your authority. Turn your expertise into an empire with a tailored personal brand.",
      icon: <User size={32} className="text-yellow-400" />,
      gradient: "from-yellow-400/20 to-orange-500/20",
      border: "hover:border-yellow-400/50",
      shadow: "hover:shadow-[0_0_40px_rgba(250,204,21,0.3)]",
      link: "/services/personal-branding"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="relative pb-24 px-4 md:px-5 bg-neutral-950 min-h-screen pt-24 md:pt-40 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16 md:mb-28 text-center max-w-4xl mx-auto relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-orange-400 mb-8 backdrop-blur-md"
          >
            <Sparkles size={16} />
            <span>Premium Solutions Matrix</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 tracking-tight text-white leading-tight"
          >
            Architect Your <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-purple-500 to-pink-500">Digital Empire</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed font-light"
          >
            We don't just provide services. We engineer ecosystems of exponential growth. Select an expansion protocol below.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center"
        >
          {coreServices.map((service, index) => (
            <motion.div key={service.id} variants={itemVariants} className={index === 6 ? 'md:col-span-2 lg:col-span-3' : ''}>
              <Link 
                to={service.link} 
                className={`group block h-full relative bg-neutral-900/40 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-10 transition-all duration-500 overflow-hidden ${service.border} ${service.shadow} hover:-translate-y-2`}
              >
                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out`}></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-neutral-950/80 border border-white/10 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500 ${index === 6 ? 'mx-auto lg:mx-0' : ''}`}>
                    {service.icon}
                  </div>
                  
                  <div className={`flex-grow ${index === 6 ? 'text-center lg:text-left lg:flex lg:items-center lg:justify-between' : ''}`}>
                    <div className={index === 6 ? 'lg:max-w-2xl' : ''}>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-400 transition-all">
                        {service.title}
                      </h3>
                      <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-8">
                        {service.description}
                      </p>
                    </div>
                    
                    <div className={`mt-auto ${index === 6 ? 'lg:mt-0 flex justify-center lg:justify-end' : ''}`}>
                      <div className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">
                        <span>Explore Protocol</span>
                        <div className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center group-hover:bg-white group-hover:border-white group-hover:text-black transition-all transform group-hover:translate-x-2">
                          <ArrowRight size={18} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-24 md:mt-32 text-center"
        >
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500">
            <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-neutral-950 text-white font-bold hover:bg-transparent transition-colors">
              <Sparkles size={18} className="text-orange-400" />
              <span>Initialize Custom Project</span>
            </Link>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Services;
