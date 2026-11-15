import React from 'react';
import { Shield, Target, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <section className="relative pb-12 md:pb-24 px-4 md:px-5 bg-neutral-950 min-h-screen pt-20 md:pt-40 overflow-hidden">
      {/* Background Elements */}
      <div className="hidden md:block absolute top-1/4 right-0 w-full md:w-1/2 h-96 bg-pink-600/10 blur-[80px] pointer-events-none"></div>
      <div className="hidden md:block absolute bottom-1/4 left-0 w-full md:w-1/2 h-96 bg-yellow-600/10 blur-[80px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mb-10 md:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-8">We are the Spark.</h1>
          <p className="text-sm sm:text-base md:text-lg text-neutral-400 leading-relaxed">
            Social Spark was founded on a simple premise: the digital landscape is evolving faster than most brands can keep up. We bridge the gap between traditional excellence and future-proof dominance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-32">
          {[
            { icon: <Target className="text-orange-500" size={20} />, title: "Mission", desc: "To engineer the most influential digital identities on the planet." },
            { icon: <Shield className="text-purple-500" size={20} />, title: "Integrity", desc: "Built on transparency, data-driven results, and absolute excellence." },
            { icon: <Users className="text-pink-500" size={20} />, title: "Community", desc: "Fostering elite networks of founders, creators, and innovators." },
            { icon: <Award className="text-yellow-500" size={20} />, title: "Excellence", desc: "Setting the gold standard for data-driven marketing and branding." }
          ].map((item, i) => (
            <div key={i} className="p-5 md:p-8 rounded-2xl md:rounded-3xl bg-neutral-900/50 md:backdrop-blur-sm border border-white/20 md:border-white/10 md:hover:border-white/20 transition-colors">
              <div className="mb-4 md:mb-6">{item.icon}</div>
              <h3 className="text-base md:text-xl font-bold mb-2 md:mb-3">{item.title}</h3>
              <p className="text-xs md:text-base text-neutral-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="relative rounded-[1.5rem] md:rounded-[3rem] overflow-hidden bg-gradient-to-br from-orange-500/10 to-purple-600/10 border border-white/10 p-5 sm:p-8 md:p-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-6">Our Philosophy</h2>
              <p className="text-neutral-400 text-xs sm:text-sm md:text-base lg:text-lg mb-3 md:mb-6 leading-relaxed">
                We believe that in the digital age, human connection and personal authority are more valuable than ever. Our approach combines the cold efficiency of data analytics with the warm nuance of human storytelling.
              </p>
              <p className="text-neutral-400 text-xs sm:text-sm md:text-lg leading-relaxed">
                By leveraging data-driven strategies to handle the heavy lifting, we free up the human spirit to focus on what truly matters: strategy, connection, and vision.
              </p>
            </div>
            <div className="flex justify-center order-1 md:order-2 mb-6 md:mb-0">
              <div className="relative">
                <div className="absolute inset-0 bg-orange-500/20 blur-[40px] md:blur-[80px] rounded-full"></div>
                <div className="animate-float">
                  <img src="/logo.png" alt="Social Spark Logo" className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 relative object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="mt-16 md:mt-32">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="w-full md:w-1/2 relative group">
               {/* Decorative elements behind image */}
               <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[105%] bg-gradient-to-br from-orange-500/30 to-purple-600/30 blur-[40px] md:blur-[80px] rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>
               
               {/* Image container */}
               <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden aspect-[4/5] sm:aspect-square md:aspect-[4/5] border border-white/10 bg-neutral-900 shadow-2xl">
                 {/* 
                   INSTRUCTION FOR USER: 
                   The image path used here is /saiyam.png.
                   Please upload your image to the "public" folder of the project using the file explorer
                   and name it "saiyam.png" (or .jpg, then update this path accordingly).
                 */}
                 <img src="/saiyam.png" alt="Saiyam Dang - Founder" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                 
                 <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10">
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-1">Saiyam Dang</h3>
                    <p className="text-orange-400 font-medium text-lg">Founder & Visionary</p>
                 </div>
               </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">Founder</span></h2>
              <p className="text-neutral-300 text-lg md:text-xl leading-relaxed mb-6">
                <strong className="text-white">Vision is what changes the world.</strong> Saiyam Dang recognized a widening gap in how brands and individuals scale their digital presence in an algorithmic era.
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
        </div>
      </div>
    </section>
  );
};

export default About;
