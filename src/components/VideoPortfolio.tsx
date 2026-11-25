import React, { useState, useEffect, useRef } from 'react';
import { Play, X, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const RAW_URLS = [
  'https://youtube.com/shorts/TpTVNeb2u_U',
  'https://youtube.com/shorts/wsQDqZVyfbE',
  'https://youtube.com/shorts/SgQx2Rwj20o',
  'https://youtube.com/shorts/rnEwExCDN0M',
  'https://youtube.com/shorts/lR-vqLOGjC8',
  'https://youtube.com/shorts/0pjdMpqeaAM',
  'https://youtube.com/shorts/VFTPZwFPVtQ',
];

// Extract VIDEO_ID
const extractVideoId = (url: string) => {
  const match = url.match(/shorts\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
};
const videoIds = RAW_URLS.map(extractVideoId).filter(Boolean) as string[];

// Clean Thumbnail Component was removed since user explicitly requested autoplaying videos in background.

export default function VideoPortfolio() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Keybindings for closing lightbox seamlessly
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveVideo(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Block body scroll and hide navbar when lightbox is active
  useEffect(() => {
    const nav = document.querySelector('nav');
    if (activeVideo) {
      document.body.style.overflow = 'hidden';
      if (nav) {
        nav.style.opacity = '0';
        nav.style.pointerEvents = 'none';
      }
    } else {
      document.body.style.overflow = 'auto';
      if (nav) {
        nav.style.opacity = '1';
        nav.style.pointerEvents = 'auto';
      }
    }
    return () => { 
      document.body.style.overflow = 'auto'; 
      if (nav) {
        nav.style.opacity = '1';
        nav.style.pointerEvents = 'auto';
      }
    };
  }, [activeVideo]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-24 bg-neutral-950 border-t border-white/5">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-5 mb-10 flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 font-outfit"
          >
            Campaign Showcase
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 text-lg sm:text-xl font-light font-outfit"
          >
            High-performance storytelling designed for maximum reach and engagement.
          </motion.p>
        </div>
        
        {/* Desktop Navigation Arrows */}
        <div className="hidden md:flex gap-3">
          <button 
            onClick={scrollLeft}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all text-white"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={scrollRight}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all text-white"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Smooth Scrolling Container */}
      <div className="relative w-full overflow-hidden">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-5 md:px-10 lg:px-[calc((100vw-80rem)/2+1.25rem)] pb-12 pt-4 hide-scrollbar"
          style={{ scrollPaddingLeft: '1.25rem' }}
        >
          {/* Inject style to hide scrollbar cross-browser */}
          <style>{`
            .hide-scrollbar::-webkit-scrollbar { display: none; }
            .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          `}</style>
          
          {videoIds.map((id, index) => (
            <div
              key={id}
              onClick={() => setActiveVideo(id)}
              className="shrink-0 w-[260px] sm:w-[300px] md:w-[340px] aspect-[9/16] snap-center relative rounded-[2rem] overflow-hidden cursor-pointer group bg-neutral-900 border border-white/10 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-white/20"
            >
              {/* Auto-playing Muted Background Video */}
              <div className="absolute inset-0 w-full h-full pointer-events-none rounded-[2rem] overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&disablekb=1&modestbranding=1&playsinline=1&rel=0`}
                  title={`Campaign Video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className="w-full h-full scale-[1.3] md:scale-[1.1] transition-transform duration-700 ease-out group-hover:scale-125 md:group-hover:scale-110 object-cover"
                />
              </div>
              
              {/* Clean Dark Overlay to intercept clicks cleanly over iframe */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300 z-10" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100 z-20">
                <div className="w-16 h-16 rounded-full bg-black/40 md:backdrop-blur-md flex items-center justify-center border border-white/30 text-white shadow-xl">
                  <Play size={24} className="fill-white ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Clean Premium Lightbox with Effortless Exit */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[99999] bg-black/95 md:backdrop-blur-xl flex flex-col items-center justify-center cursor-pointer p-4 sm:p-6 md:p-10"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full flex flex-col items-center cursor-default"
              onClick={e => e.stopPropagation()} // Prevent clicks *on the video player container* from closing
            >
              {/* The Video Player Container - height restricted so it NEVER pushes the close button off screen! */}
              <div 
                className="relative w-full bg-black rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.8)] border border-white/10 flex-shrink-0 mx-auto"
                style={{ 
                  aspectRatio: '9/16', 
                  maxHeight: '75vh', 
                  maxWidth: 'min(100%, calc(75vh * 9 / 16))'
                }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&modestbranding=1&rel=0&controls=1&fs=1&playsinline=1`}
                  title="Campaign Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>

              {/* Securely placed, unmissable close button BELOW the video */}
              <div className="mt-6 md:mt-8 flex-shrink-0 z-[100000]">
                <button 
                  className="flex items-center gap-2 px-8 py-3 rounded-full bg-white hover:bg-neutral-200 text-black shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all hover:scale-105 active:scale-95 font-bold tracking-wide"
                  onClick={(e) => { e.stopPropagation(); setActiveVideo(null); }}
                  aria-label="Close video"
                >
                  <X size={20} className="stroke-[3px]" />
                  CLOSE VIDEO
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
