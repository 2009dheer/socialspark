import React, { useState, useEffect, useRef } from 'react';
import { Play, X, ChevronRight, ChevronLeft, ArrowUpRight, Film } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TiltSpotlightCard } from './motion/MotionPrimitives';

const RAW_URLS = [
  'https://youtube.com/shorts/TpTVNeb2u_U',
  'https://youtube.com/shorts/wsQDqZVyfbE',
  'https://youtube.com/shorts/SgQx2Rwj20o',
  'https://youtube.com/shorts/rnEwExCDN0M',
  'https://youtube.com/shorts/lR-vqLOGjC8',
  'https://youtube.com/shorts/0pjdMpqeaAM',
  'https://youtube.com/shorts/VFTPZwFPVtQ',
];

const extractVideoId = (url: string): string | null => {
  const match = url.match(/shorts\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
};

const videoIds = RAW_URLS.map(extractVideoId).filter(Boolean) as string[];

/**
 * Lightweight 9:16 poster preview frame.
 * Eliminates the severe lag caused by embedding 7 autoplaying YouTube iframes at once.
 * Only loads the real YouTube player inside the interactive theatre modal when clicked.
 */
const ReelPosterCard: React.FC<{
  id: string;
  index: number;
  onOpen: (index: number) => void;
}> = ({ id, index, onOpen }) => {
  const [thumbUrl, setThumbUrl] = useState(`https://i.ytimg.com/vi/${id}/oar2.jpg`);
  const [fallbackStep, setFallbackStep] = useState(0);

  const handleImgError = () => {
    if (fallbackStep === 0) {
      setFallbackStep(1);
      setThumbUrl(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`);
    } else if (fallbackStep === 1) {
      setFallbackStep(2);
      setThumbUrl(`https://i.ytimg.com/vi/${id}/mqdefault.jpg`);
    }
  };

  return (
    <div className="shrink-0 w-[250px] sm:w-[290px] md:w-[320px] aspect-[9/16] snap-center">
      <TiltSpotlightCard
        maxTilt={6}
        spotlightColor="rgba(255, 90, 31, 0.22)"
        className="rounded-[1.75rem] border border-white/10 bg-[#0B0B0F] overflow-hidden cursor-pointer group shadow-[0_20px_50px_rgba(0,0,0,0.65)] hover:border-orange-500/40 transition-colors duration-300"
      >
        <div onClick={() => onOpen(index)} className="relative w-full h-full">
          {/* High-res vertical YouTube frame */}
            <img
            src={thumbUrl}
            onError={handleImgError}
            onLoad={(e) => {
              if (e.currentTarget.naturalWidth <= 120 && fallbackStep < 2) {
                handleImgError();
              }
            }}
            loading="lazy"
            alt={`Social Spark Campaign Reel ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Cinematic vignette & gradient framing */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-black/40 opacity-85 group-hover:opacity-65 transition-opacity duration-300" />

          {/* Top Editorial Metadata */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-full bg-black/55 backdrop-blur-md border border-white/15 font-mono text-[10px] tracking-widest text-white/90 uppercase">
              REEL {String(index + 1).padStart(2, '0')}
            </span>
            <span className="w-7 h-7 rounded-full bg-black/55 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 group-hover:bg-[#FF5A1F] group-hover:border-[#FF5A1F] group-hover:text-white transition-all">
              <ArrowUpRight size={13} />
            </span>
          </div>

          {/* Center Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:bg-[#FF5A1F] group-hover:border-[#FF5A1F]">
              <Play size={22} className="fill-white ml-0.5" />
            </div>
          </div>

          {/* Bottom Strip */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#FFB800]">
                9:16 Vertical Cut
              </p>
              <p className="font-display text-sm font-bold text-white mt-0.5">
                Watch Showcase
              </p>
            </div>
            <span className="font-mono text-[10px] text-neutral-400">HD · SOUND</span>
          </div>
        </div>
      </TiltSpotlightCard>
    </div>
  );
};

export default function VideoPortfolio() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const activeVideo = activeIndex !== null ? videoIds[activeIndex] : null;

  const goNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % videoIds.length);
  };

  const goPrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + videoIds.length) % videoIds.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (e.key === 'Escape') setActiveIndex(null);
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex !== null) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [activeIndex]);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -380, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 380, behavior: 'smooth' });
  };

  return (
    <section id="showcase" className="relative py-20 md:py-32 border-t border-white/[0.07]">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 mb-10 md:mb-14 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#FF5A1F] mb-4">
            <Film size={14} />
            <span>Selected Productions · {videoIds.length} Cuts</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F5F3EE] leading-[1.02]">
            Campaign Showcase
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg mt-4 max-w-xl font-light">
            Scroll-stopping reels built for watch time, shares, and brand recall. Tap any frame to stream with full audio.
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center gap-3 self-end md:self-auto">
          <button
            type="button"
            onClick={scrollLeft}
            className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center bg-white/[0.03] hover:bg-white hover:text-black transition-all text-white cursor-pointer"
            aria-label="Scroll reels left"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={scrollRight}
            className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center bg-white/[0.03] hover:bg-white hover:text-black transition-all text-white cursor-pointer"
            aria-label="Scroll reels right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Horizontal Reel Track */}
      <div className="relative w-full">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-5 md:gap-7 px-5 md:px-10 lg:px-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))] pb-8 pt-2 hide-scrollbar"
        >
          {videoIds.map((id, index) => (
            <ReelPosterCard key={id} id={id} index={index} onOpen={setActiveIndex} />
          ))}
        </div>
      </div>

      {/* Interactive Video Lightbox Theatre */}
      <AnimatePresence>
        {activeVideo && activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setActiveIndex(null)}
            data-lenis-prevent
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-6"
          >
            <div
              className="relative flex flex-col items-center justify-center w-full max-w-md max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Modal Header */}
              <div className="w-full max-w-[380px] flex items-center justify-between mb-3 px-1">
                <span className="font-mono text-xs tracking-widest uppercase text-neutral-400">
                  Reel {String(activeIndex + 1).padStart(2, '0')} / {String(videoIds.length).padStart(2, '0')}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white hover:text-black text-xs font-mono uppercase tracking-wider text-white transition-colors cursor-pointer"
                >
                  <X size={14} /> Close
                </button>
              </div>

              {/* Video Frame + Prev/Next */}
              <div className="relative flex items-center justify-center w-full gap-3">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous video"
                  className="hidden sm:flex w-10 h-10 shrink-0 rounded-full bg-white/10 hover:bg-[#FF5A1F] text-white items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronLeft size={20} />
                </button>

                <motion.div
                  key={activeVideo}
                  initial={{ scale: 0.94, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.94, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="w-full max-w-[360px] h-[68vh] sm:h-[74vh] aspect-[9/16] rounded-[1.75rem] overflow-hidden bg-neutral-950 border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.9)]"
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&modestbranding=1&rel=0&controls=1&fs=1&playsinline=1`}
                    title={`Social Spark Reel ${activeIndex + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </motion.div>

                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next video"
                  className="hidden sm:flex w-10 h-10 shrink-0 rounded-full bg-white/10 hover:bg-[#FF5A1F] text-white items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Mobile Prev/Next Row */}
              <div className="flex sm:hidden items-center justify-center gap-4 mt-4">
                <button
                  type="button"
                  onClick={goPrev}
                  className="px-4 py-2 rounded-full bg-white/10 text-white text-xs font-mono uppercase tracking-wider flex items-center gap-1"
                >
                  <ChevronLeft size={14} /> Prev
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="px-4 py-2 rounded-full bg-white/10 text-white text-xs font-mono uppercase tracking-wider flex items-center gap-1"
                >
                  Next <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
