import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight, Sparkles, Zap, Globe, Cpu, TrendingUp, Users, Rocket, Heart, Share2, PenTool, Megaphone, User, Target } from 'lucide-react';
import { motion } from 'motion/react';
import { Card } from '../components/ui/card';
import { Spotlight } from '../components/ui/spotlight';

import VideoPortfolio from '../components/VideoPortfolio';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <main className="relative pt-24 pb-16 md:pt-48 md:pb-32 px-5 overflow-hidden">
        <div className="hidden md:block absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-orange-600/20 rounded-full blur-2xl md:blur-[120px] pointer-events-none md:mix-blend-screen"></div>
        <div className="hidden md:block absolute bottom-0 right-1/4 w-80 h-80 md:w-[500px] md:h-[500px] bg-purple-600/10 rounded-full blur-2xl md:blur-[150px] pointer-events-none md:mix-blend-screen"></div>

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-sm font-medium text-orange-200 mb-6 md:mb-8 md:backdrop-blur-sm"
          >
            <Sparkles size={14} className="text-orange-400" />
            <span>Premium Personal Branding & Marketing Agency</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-normal md:tracking-wide leading-[1.1] mb-6 md:mb-8"
          >
            <span className="font-bebas font-normal text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-500 animate-gradient-x pr-2 pb-1" style={{ backgroundSize: '200% 200%' }}>
              Social Spark
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-outfit text-lg md:text-xl text-neutral-300 max-w-lg mb-10 md:mb-12 leading-relaxed px-2 font-light tracking-wide"
          >
            Ignite your brand. Scale your impact.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative w-full max-w-4xl mx-auto px-4"
          >
            {/* Mobile & Tablet Layout: Tags beside buttons */}
            <div className="flex flex-col items-center gap-6 relative">
              {/* Decorative side elements for mobile to fill "empty space" */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden sm:block lg:hidden opacity-50">
                <div className="w-1 h-20 bg-gradient-to-b from-transparent via-orange-500 to-transparent rounded-full" />
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden sm:block lg:hidden opacity-50">
                <div className="w-1 h-20 bg-gradient-to-b from-transparent via-purple-500 to-transparent rounded-full" />
              </div>

              {/* Mobile Tags Row */}
              <div className="flex lg:hidden justify-center gap-2 flex-wrap max-w-md">
                {['Influencer Marketing', 'Digital Marketing', 'Performance Marketing', 'Affiliate Marketing', 'Content Creation', 'Branding + Marketing', 'Personal Branding'].map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[8px] font-black text-neutral-400 uppercase tracking-tighter"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center relative z-10">
                {/* Mobile Side Accents (The "Utilised" space) */}
                <div className="absolute -left-10 top-1/2 -translate-y-1/2 sm:hidden pointer-events-none flex flex-col items-center gap-4">
                  <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 2, repeat: Infinity }}>
                    <Zap size={20} className="text-orange-500" />
                  </motion.div>
                  <div className="w-px h-12 bg-gradient-to-b from-transparent via-orange-500/20 to-transparent" />
                </div>
                <div className="absolute -right-10 top-1/2 -translate-y-1/2 sm:hidden pointer-events-none flex flex-col items-center gap-4">
                  <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }}>
                    <Sparkles size={20} className="text-purple-500" />
                  </motion.div>
                  <div className="w-px h-12 bg-gradient-to-b from-transparent via-purple-500/20 to-transparent" />
                </div>

                <Link to="/contact" className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-400 hover:to-purple-500 text-white font-bold text-base md:text-lg transition-all transform hover:scale-105 hover:shadow-[0_0_40px_rgba(249,115,22,0.4)] flex items-center justify-center gap-2 group">
                  Build Your Brand
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
                <Link to="/services" className="w-full sm:w-auto px-10 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-base md:text-lg transition-all flex items-center justify-center gap-2 md:backdrop-blur-sm">
                  View Our Services
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-16 md:mt-24 relative w-full max-w-[280px] sm:max-w-lg mx-auto flex justify-center group"
          >
            {/* Left Side Metrics (Desktop) */}
            <div className="absolute -left-24 md:-left-40 top-1/2 -translate-y-1/2 hidden sm:flex flex-col gap-6 text-right pointer-events-none">
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Brand Authority</p>
                <p className="text-sm font-mono text-orange-400">ESTABLISHED</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Audience Growth</p>
                <p className="text-sm font-mono text-neutral-300">SCALING</p>
              </div>
            </div>

            {/* Right Side Metrics (Desktop) */}
            <div className="absolute -right-24 md:-right-40 top-1/2 -translate-y-1/2 hidden sm:flex flex-col gap-6 text-left pointer-events-none">
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Marketing ROI</p>
                <p className="text-sm font-mono text-purple-400">MAXIMIZED</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Content Reach</p>
                <p className="text-sm font-mono text-neutral-300">GLOBAL</p>
              </div>
            </div>

            {/* Mobile Decorative Orbits */}
            <div className="absolute inset-0 sm:hidden pointer-events-none">
              <div className="absolute inset-[-20px] border border-white/5 rounded-full" />
              <div className="absolute inset-[-40px] border border-white/5 rounded-full border-dashed" />
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/20 to-purple-600/20 blur-2xl md:blur-[100px] rounded-full group-hover:opacity-70 transition-opacity duration-700"></div>
            <div className="relative animate-float">
              {/* Replaced expensive drop-shadow filter with a blurred background element */}
              <div className="absolute inset-0 bg-orange-500/30 blur-xl md:blur-[30px] rounded-full scale-75"></div>
              <img src="/logo.png" alt="Social Spark Logo" className="w-32 h-32 sm:w-48 sm:h-48 md:w-80 md:h-80 relative z-10 object-contain" />
            </div>
          </motion.div>
        </div>
      </main>

      {/* Engine Section */}
      <section className="relative py-16 px-5 max-w-7xl mx-auto">
        <Card className="w-full min-h-[500px] bg-neutral-900/80 md:backdrop-blur-sm border-white/10 relative overflow-hidden rounded-[2rem] flex flex-col md:flex-row items-center">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="#F97316"
          />
          
          {/* Text content */}
          <div className="w-full md:w-1/2 p-8 sm:p-10 md:p-12 z-10 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-medium text-orange-400 mb-4 md:mb-6 w-fit">
              <Zap size={16} />
              <span>Viral Content Engine</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 mb-3 md:mb-4 leading-tight">
              Scale Your Brand <br className="hidden sm:block"/> Exponentially
            </h2>
            <p className="text-neutral-400 max-w-lg text-sm sm:text-base md:text-lg">
              Supercharge your digital presence with data-driven content strategies. We deploy viral frameworks that optimize your content, engage your audience, and multiply your reach across all platforms.
            </p>
          </div>

          {/* Logo image content */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-8 pt-0 md:p-8 pb-12 md:pb-8">
            <img 
              src="/logo.png" 
              alt="Social Spark Logo" 
              className="w-auto h-auto max-w-[65%] sm:max-w-[50%] md:max-w-[70%] lg:max-w-[350px] max-h-[250px] md:max-h-[350px] object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            />
          </div>
        </Card>
      </section>



      {/* Founder Section */}
      <section className="relative py-16 md:py-32 px-5 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="w-full md:w-1/2 relative group">
             {/* Decorative elements behind image */}
             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[105%] bg-gradient-to-br from-orange-500/30 to-purple-600/30 blur-[40px] md:blur-[80px] rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>
             
             {/* Image container */}
             <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden aspect-[4/5] sm:aspect-square md:aspect-[4/5] border border-white/10 bg-neutral-900 shadow-2xl">
               <img src="/saiyam.png" alt="Saiyam Dang - Founder" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
               
               <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-bold uppercase tracking-widest mb-3">
                    <Target size={12} className="text-orange-400" /> 17 Years Old
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-1">Saiyam Dang</h3>
                  <p className="text-orange-400 font-medium text-lg">Founder & Visionary</p>
               </div>
             </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">Founder</span></h2>
            <p className="text-neutral-300 text-lg md:text-xl leading-relaxed mb-6">
              Age is just a number. <strong className="text-white">Vision is what changes the world.</strong> At 17, Saiyam Dang recognized a widening gap in how brands and individuals scale their digital presence in an algorithmic era.
            </p>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-10">
              Operating at the intersection of raw digital intuition and performance marketing, Saiyam built Social Spark to provide the exact strategies missing from traditional agencies. What started as an obsession with viral mechanics and systemic growth has transformed into an engine for building global authority.
            </p>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
               <div className="bg-neutral-900/50 md:backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-6 hover:bg-neutral-800/50 transition-colors">
                 <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 mb-2">Gen-Z</div>
                 <div className="text-neutral-500 text-xs md:text-sm font-bold uppercase tracking-wider">Perspective & Intuition</div>
               </div>
               <div className="bg-neutral-900/50 md:backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-6 hover:bg-neutral-800/50 transition-colors">
                 <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-2">Data</div>
                 <div className="text-neutral-500 text-xs md:text-sm font-bold uppercase tracking-wider">Driven Execution</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Portfolio Section */}
      <VideoPortfolio />

      {/* CTA Section */}
      <section className="relative py-16 md:py-32 px-5">
        <div className="max-w-5xl mx-auto bg-neutral-900/60 md:backdrop-blur-2xl border border-white/10 rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden">
          <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-orange-500/20 to-transparent blur-2xl md:blur-3xl pointer-events-none"></div>
          
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 relative z-10">Ready to build your brand?</h2>
          <p className="text-neutral-400 text-sm md:text-lg mb-8 md:mb-10 max-w-xl mx-auto relative z-10">
            Join the elite circle of founders and executives who are leveraging our expertise to dominate their industries.
          </p>
          <Link to="/contact" className="inline-block px-8 md:px-10 py-4 md:py-5 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 text-white font-bold text-base md:text-lg hover:from-orange-400 hover:to-purple-500 transition-colors shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_50px_rgba(249,115,22,0.5)] relative z-10">
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
