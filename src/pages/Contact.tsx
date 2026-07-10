import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Personal Branding',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const whatsappNumber = "919996210648";
    const text = `*New Inquiry from Social Spark*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
    
    // Redirect to WhatsApp (using location.href to prevent mobile popup blockers)
    window.location.href = whatsappUrl;
    
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="relative pb-12 md:pb-24 px-4 md:px-5 bg-neutral-950 min-h-screen pt-20 md:pt-40 overflow-hidden">
      {/* Background Elements */}
      <div className="hidden md:block absolute top-1/3 left-0 w-full md:w-1/2 h-96 bg-purple-600/10 blur-[80px] pointer-events-none"></div>
      <div className="hidden md:block absolute bottom-0 right-0 w-full md:w-1/2 h-96 bg-orange-600/10 blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-8"
            >
              Let's Spark <br className="hidden sm:block" /> Something.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-sm sm:text-base md:text-xl text-neutral-400 mb-8 md:mb-12 leading-relaxed max-w-lg"
            >
              Ready to take your brand to the next level? Our team of engineers and strategists are ready to initialize your growth sequence.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="space-y-3 md:space-y-8 mb-10 lg:mb-0"
            >
              <a href="mailto:newsocialspark@gmail.com" className="flex items-center gap-3 md:gap-6 group bg-neutral-900/30 md:bg-transparent p-3 md:p-0 rounded-xl md:rounded-none border border-white/5 md:border-transparent cursor-pointer">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-orange-500/50 transition-colors shrink-0">
                  <Mail className="text-orange-400 w-4 h-4 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-neutral-500 text-[10px] md:text-sm mb-0 md:mb-1">Email us at</p>
                  <p className="text-sm sm:text-base md:text-xl font-medium break-all group-hover:text-orange-400 transition-colors">newsocialspark@gmail.com</p>
                </div>
              </a>
              <a href="tel:+919996210648" className="flex items-center gap-3 md:gap-6 group bg-neutral-900/30 md:bg-transparent p-3 md:p-0 rounded-xl md:rounded-none border border-white/5 md:border-transparent cursor-pointer">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-purple-500/50 transition-colors shrink-0">
                  <Phone className="text-purple-400 w-4 h-4 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-neutral-500 text-[10px] md:text-sm mb-0 md:mb-1">Call us at</p>
                  <p className="text-sm sm:text-base md:text-xl font-medium group-hover:text-purple-400 transition-colors">+91 99962 10648</p>
                </div>
              </a>
              <a href="https://maps.google.com/?q=Rohtak,+Haryana" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 md:gap-6 group bg-neutral-900/30 md:bg-transparent p-3 md:p-0 rounded-xl md:rounded-none border border-white/5 md:border-transparent cursor-pointer">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-pink-500/50 transition-colors shrink-0">
                  <MapPin className="text-pink-400 w-4 h-4 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-neutral-500 text-[10px] md:text-sm mb-0 md:mb-1">Visit our matrix</p>
                  <p className="text-sm sm:text-base md:text-xl font-medium group-hover:text-pink-400 transition-colors">Rohtak, Haryana (Global Operations)</p>
                </div>
              </a>
            </motion.div>
          </div>

          <div className="bg-neutral-900/50 md:backdrop-blur-xl border border-white/10 rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-12 relative overflow-hidden">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center mb-6">
                  <Send className="text-green-500" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Redirecting to WhatsApp...</h3>
                <p className="text-neutral-400">Your message has been prepared. Please complete the send in WhatsApp.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-[10px] md:text-sm font-medium text-neutral-400 ml-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 focus:border-orange-500/50 focus:outline-none transition-colors text-xs md:text-base"
                    />
                  </div>
                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-[10px] md:text-sm font-medium text-neutral-400 ml-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 focus:border-purple-500/50 focus:outline-none transition-colors text-xs md:text-base"
                    />
                  </div>
                </div>
                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-[10px] md:text-sm font-medium text-neutral-400 ml-1">Subject</label>
                  <div className="relative">
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 focus:border-pink-500/50 focus:outline-none transition-colors appearance-none text-xs md:text-base"
                    >
                      <option className="bg-neutral-900">Personal Branding</option>
                      <option className="bg-neutral-900">Content Creation</option>
                      <option className="bg-neutral-900">Viral Strategies</option>
                      <option className="bg-neutral-900">Performance Marketing</option>
                      <option className="bg-neutral-900">Other Inquiry</option>
                    </select>
                    <div className="absolute right-4 md:right-5 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
                      <ChevronRight size={16} className="rotate-90" />
                    </div>
                  </div>
                </div>
                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-[10px] md:text-sm font-medium text-neutral-400 ml-1">Message</label>
                  <textarea 
                    required
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your vision..."
                    className="w-full px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 focus:border-orange-500/50 focus:outline-none transition-colors resize-none text-xs md:text-base"
                  ></textarea>
                </div>
                <button type="submit" className="w-full py-3.5 md:py-5 rounded-xl md:rounded-2xl bg-gradient-to-r from-orange-500 to-purple-600 text-white font-bold text-sm md:text-lg hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] transition-all flex items-center justify-center gap-2">
                  Send via WhatsApp
                  <Send size={16} className="md:w-[18px] md:h-[18px]" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
