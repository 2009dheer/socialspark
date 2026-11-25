import React, { useState, useEffect, useRef } from 'react';
import { Play, X, ChevronRight, ChevronLeft, Volume2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TiltSpotlightCard } from './motion/MotionPrimitives';

export const SHOWCASE_RAW_URLS = [
  'https://youtube.com/shorts/TpTVNeb2u_U',
  'https://youtube.com/shorts/wsQDqZVyfbE',
  'https://youtube.com/shorts/SgQx2Rwj20o',
  'https://youtube.com/shorts/rnEwExCDN0M',
  'https://youtube.com/shorts/lR-vqLOGjC8',
  'https://youtube.com/shorts/0pjdMpqeaAM',
  'https://youtube.com/shorts/VFTPZwFPVtQ',
];

export const extractVideoId = (url: string): string | null => {
  const match = url.match(/shorts\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
};

export const SHOWCASE_VIDEO_IDS = SHOWCASE_RAW_URLS.map(extractVideoId).filter(Boolean) as string[];

export const ReelLightbox: React.FC<{
  activeIndex: number | null;
  onClose: () => void;
  onChangeIndex: (idx: number) => void;
}> = ({ activeIndex, onClose, onChangeIndex }) => {
  const activeVideo = activeIndex !== null ? SHOWCASE_VIDEO_IDS[activeIndex] : null;

  const goNext = () => {
    if (activeIndex === null) return;
    onChangeIndex((activeIndex + 1) % SHOWCASE_VIDEO_IDS.length);
  };

  const goPrev = () => {
    if (activeIndex === null) return;
    onChangeIndex((activeIndex - 1 + SHOWCASE_VIDEO_IDS.length) % SHOWCASE_VIDEO_IDS.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (e.key === 'Escape') onClose();
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

  return (
    <AnimatePresence>
      {activeVideo && activeIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          data-lenis-prevent
          className="fixed inset-0 z-[100] bg-black/92 backdrop-blur-2xl flex flex-col items-center justify-center p-4"
        >
          <div
            className="relative flex flex-col items-center justify-center w-full max-w-md max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full max-w-[340px] flex items-center justify-between mb-3 px-1">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#A1A1A6]">
                Reel {String(activeIndex + 1).padStart(2, '0')} / {String(SHOWCASE_VIDEO_IDS.length).padStart(2, '0')}
              </span>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full liquid-glass-pill text-xs text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
              >
                <X size={13} /> Close
              </button>
            </div>

            <div className="relative flex items-center justify-center w-full gap-3">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous video"
                className="hidden sm:flex w-9 h-9 shrink-0 rounded-full liquid-glass-pill hover:bg-white hover:text-black text-white items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft size={18} />
              </button>

              <motion.div
                key={activeVideo}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.22 }}
                className="w-full max-w-[330px] h-[68vh] sm:h-[72vh] aspect-[9/16] rounded-[1.75rem] overflow-hidden bg-black border border-white/15 shadow-2xl"
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
                className="hidden sm:flex w-9 h-9 shrink-0 rounded-full liquid-glass-pill hover:bg-white hover:text-black text-white items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="flex sm:hidden items-center justify-center gap-3 mt-4">
              <button
                type="button"
                onClick={goPrev}
                className="px-4 py-1.5 rounded-full liquid-glass-pill text-white text-xs flex items-center gap-1"
              >
                <ChevronLeft size={14} /> Prev
              </button>
              <button
                type="button"
                onClick={goNext}
                className="px-4 py-1.5 rounded-full liquid-glass-pill text-white text-xs flex items-center gap-1"
              >
                Next <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ReelPosterCard: React.FC<{
  id: string;
  index: number;
  isAutoPlaying: boolean;
  onOpen: (index: number) => void;
}> = ({ id, index, isAutoPlaying, onOpen }) => {
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
    <div data-reel-idx={index} className="shrink-0 w-[205px] sm:w-[220px] md:w-[235px] aspect-[9/16] snap-center">
      <TiltSpotlightCard
        maxTilt={4}
        className={`rounded-[1.5rem] liquid-glass p-1.5 overflow-hidden cursor-pointer group transition-all ${
          isAutoPlaying ? 'border-orange-500/40' : 'hover:border-white/25'
        }`}
      >
        <div
          onClick={() => onOpen(index)}
          className="relative w-full h-full rounded-[1.2rem] overflow-hidden isolate bg-neutral-950"
          style={{ clipPath: 'inset(0 round 1.2rem)' }}
        >
          {/* Poster always loads fast underneath */}
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

          {/* Smart Autoplay: only the currently active visible reel streams muted video, avoiding mobile lag */}
          {isAutoPlaying && (
            <iframe
              src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&disablekb=1&modestbranding=1&playsinline=1&rel=0`}
              title={`Campaign Reel Autoplay ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="absolute inset-0 w-full h-full pointer-events-none"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/30 opacity-80 group-hover:opacity-60 transition-opacity z-10" />

          <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5">
            <span className="px-2.5 py-0.5 rounded-full liquid-glass-pill font-mono text-[10px] text-white/95">
              {String(index + 1).padStart(2, '0')}
            </span>
            {isAutoPlaying && (
              <span className="px-2 py-0.5 rounded-full bg-orange-500/80 font-mono text-[9px] text-white uppercase">
                Live
              </span>
            )}
          </div>

          {!isAutoPlaying && (
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-12 h-12 rounded-full liquid-glass-pill flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                <Play size={18} className="fill-current ml-0.5" />
              </div>
            </div>
          )}

          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-20">
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-white/90">
              <Volume2 size={11} className="text-orange-400" />
              <span>{isAutoPlaying ? 'Tap for Sound' : 'Play Cut'}</span>
            </span>
            <span className="font-mono text-[10px] text-[#A1A1A6]">HD</span>
          </div>
        </div>
      </TiltSpotlightCard>
    </div>
  );
};

export default function VideoPortfolio() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [sectionInView, setSectionInView] = useState(false);
  const [focusedReel, setFocusedReel] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Detect when Showcase enters vertical viewport so mobile stays fast above the fold
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      ([entry]) => setSectionInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Track which horizontal reel card is closest to center/left-lead for smart single-stream autoplay
  const handleCarouselScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const cards = container.querySelectorAll<HTMLElement>('[data-reel-idx]');
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closest = 0;
    let minDist = Infinity;
    cards.forEach((card) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(cardCenter - containerCenter);
      if (dist < minDist) {
        minDist = dist;
        closest = Number(card.dataset.reelIdx ?? 0);
      }
    });
    setFocusedReel(closest);
  };

  return (
    <section
      ref={sectionRef}
      id="showcase"
      className="relative py-14 md:py-20 border-t border-white/[0.08]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <p className="text-xs font-medium text-[#86868B] mb-2">
            Campaign Showcase · {SHOWCASE_VIDEO_IDS.length} Reels
          </p>
          <h2 className="font-display text-2xl sm:text-4xl font-semibold tracking-tight text-[#F5F5F7]">
            Built to stop the scroll.
          </h2>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            type="button"
            onClick={() => scrollRef.current?.scrollBy({ left: -260, behavior: 'smooth' })}
            className="w-9 h-9 rounded-full liquid-glass-pill flex items-center justify-center text-white hover:bg-white hover:text-black transition-all cursor-pointer"
            aria-label="Scroll reels left"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={() => scrollRef.current?.scrollBy({ left: 260, behavior: 'smooth' })}
            className="w-9 h-9 rounded-full liquid-glass-pill flex items-center justify-center text-white hover:bg-white hover:text-black transition-all cursor-pointer"
            aria-label="Scroll reels right"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="relative w-full">
        <div
          ref={scrollRef}
          onScroll={handleCarouselScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-5 px-4 sm:px-6 md:px-8 lg:px-[max(2rem,calc((100vw-72rem)/2+2rem))] pb-4 pt-1 hide-scrollbar"
        >
          {SHOWCASE_VIDEO_IDS.map((id, index) => (
            <ReelPosterCard
              key={id}
              id={id}
              index={index}
              isAutoPlaying={sectionInView && activeIndex === null && focusedReel === index}
              onOpen={setActiveIndex}
            />
          ))}
        </div>
      </div>

      <ReelLightbox
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onChangeIndex={setActiveIndex}
      />
    </section>
  );
}
