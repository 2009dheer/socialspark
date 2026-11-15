import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-neutral-950/95 md:bg-neutral-950/90 md:backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2.5 cursor-pointer group relative z-50">
          <div className="relative transform transition-transform group-hover:scale-110 duration-300">
            <img src="/logo.png" alt="Social Spark Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-500 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-full"></div>
          </div>
          <span className="text-lg md:text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
            Social Spark
          </span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              className={`text-sm font-medium transition-colors ${location.pathname === link.path ? 'text-white' : 'text-neutral-400 hover:text-white'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-semibold transition-all hover:border-orange-500/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)]">
            Ignite Growth
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="md:hidden text-neutral-300 hover:text-white relative z-50 p-2 -mr-2"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="md:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-neutral-950 z-40 flex flex-col pt-24 px-6 pb-10"
          >
            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link 
                    to={link.path} 
                    className={`text-3xl font-bold tracking-tight ${location.pathname === link.path ? 'text-orange-500' : 'text-neutral-300'}`}
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="mt-auto">
              <Link to="/contact" className="block w-full py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-purple-600 text-white font-bold text-lg text-center shadow-lg shadow-orange-500/20">
                Ignite Growth
              </Link>
              <div className="flex justify-center gap-6 mt-8 text-neutral-500">
                <span className="text-xs uppercase tracking-widest font-semibold">Social Spark Matrix</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-neutral-950 pt-10 md:pt-20 pb-6 md:pb-10 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 mb-10 md:mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <img src="/logo.png" alt="Social Spark Logo" className="w-6 h-6 md:w-8 md:h-8 object-contain" />
            <span className="text-xl md:text-2xl font-bold text-white">Social Spark</span>
          </div>
          <p className="text-sm md:text-base text-neutral-500 max-w-sm">
            The ultimate fusion of Personal Branding, Content Creation, and Viral Strategies. Your gateway to unparalleled success.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 md:mb-6">Navigation</h4>
          <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-neutral-500">
            <li><Link to="/" className="hover:text-orange-400 transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-orange-400 transition-colors">Services</Link></li>
            <li><Link to="/about" className="hover:text-orange-400 transition-colors">About</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 md:mb-6">Connect</h4>
          <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-neutral-500">
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">Twitter / X</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/socialspark.ind?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">Instagram</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 md:mb-6">Contact Us</h4>
          <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-neutral-500">
            <li>
              <div className="flex items-start gap-2">
                <Zap size={16} className="text-blue-400 mt-1 shrink-0" />
                <span>Delhi,<br/>India</span>
              </div>
            </li>
            <li>
              <a href="mailto:newsocialspark@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Zap size={16} className="text-orange-400" />
                newsocialspark@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+919996210648" className="flex items-center gap-2 hover:text-white transition-colors">
                <Zap size={16} className="text-purple-400" />
                +91 99962 10648
              </a>
            </li>
            <li>
              <a href="https://wa.me/919996210648" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <Zap size={16} className="text-green-400" />
                WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-6 md:pt-8 border-t border-white/10 text-neutral-600 text-xs md:text-sm">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
          <p>© {new Date().getFullYear()} Social Spark. All rights reserved.</p>
        </div>
        <div className="flex gap-4 md:gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

const MouseTrackingBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Only track mouse on desktop to save performance on mobile
    if (window.innerWidth < 768) return;
    
    let animationFrameId: number;
    
    const handleMouseMove = (e: MouseEvent) => {
      // Throttle with requestAnimationFrame for smoother performance
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      className="hidden md:block fixed inset-0 z-0 pointer-events-none opacity-40 transition-opacity duration-1000" 
      style={{ background: `radial-gradient(circle 600px at ${mousePos.x}px ${mousePos.y}px, rgba(249, 115, 22, 0.08), transparent 80%)` }}
    />
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen text-white relative">
      <MouseTrackingBackground />
      <Navbar />
      <div className="relative z-10">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
