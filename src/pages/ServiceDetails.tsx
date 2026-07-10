import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Zap } from 'lucide-react';
import { motion } from 'motion/react';

const serviceData: Record<string, any> = {
  'influencer-marketing': {
    title: 'Influencer Marketing',
    subtitle: 'Leverage voices that matter.',
    description: 'We connect your brand with high-impact influencers to drive authentic engagement and exponential reach.',
    detailedText: 'Trust is the most valuable currency in the modern economy. Influencer marketing allows you to borrow trust from established creators and channel it directly to your brand. We handle end-to-end influencer campaigns—from discovering the perfect brand fit and negotiating rates, to drafting creative briefs and measuring ROI.',
    details: [
      'Influencer Sourcing & Vetting',
      'Contract Negotiation & Management',
      'Creative Brief Development',
      'Campaign Tracking & Analytics',
      'Micro & Macro Influencer Strategy'
    ],
    gradient: 'from-pink-500 to-purple-500',
    blob: 'bg-pink-500/20'
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    subtitle: 'Comprehensive brand growth.',
    description: 'End-to-end digital marketing solutions tailored to multiply your online presence and customer acquisition.',
    detailedText: 'A siloed approach to marketing guarantees failure. True digital dominance requires an omnipresent strategy. We integrate SEO, content, email, and social media ecosystems into a cohesive machine. Every touchpoint is optimized to drive awareness, capture leads, and nurture them into lifelong customers.',
    details: [
      'Search Engine Optimization (SEO)',
      'Email Marketing & Automation',
      'Social Media Management',
      'Omnichannel Strategy',
      'Data-Driven Growth Consulting'
    ],
    gradient: 'from-blue-500 to-cyan-500',
    blob: 'bg-blue-500/20'
  },
  'performance-marketing': {
    title: 'Performance Marketing',
    subtitle: 'ROI-focused campaigns.',
    description: 'ROI-focused campaigns that turn attention into measurable business growth and revenue.',
    detailedText: 'Attention is useless if it doesn\'t convert. Our Performance Marketing division connects the top of the funnel to your bottom line. We utilize hyper-targeted paid media, ruthless split-testing, and psychological conversion copywriting to turn strangers into high-LTV customers.',
    details: [
      'Precision Paid Social Campaigns',
      'Conversion Rate Optimization (CRO)',
      'Ruthless A/B Testing & Scaling',
      'Psychological Copywriting',
      'Advanced Retargeting Funnels'
    ],
    gradient: 'from-orange-500 to-red-500',
    blob: 'bg-orange-500/20'
  },
  'affiliate-marketing': {
    title: 'Affiliate Marketing',
    subtitle: 'Scale a performance-based sales force.',
    description: 'Build a profitable network of affiliates who are incentivized to drive high-quality traffic and sales to your brand.',
    detailedText: 'Why pay for impressions when you can pay strictly for results? We set up, manage, and scale robust affiliate programs that turn industry publishers into your own commissioned sales team. We handle the complex integrations, commission structuring, and ongoing motivation.',
    details: [
      'Program Setup & Integration',
      'Affiliate Recruitment & Vetting',
      'Commission Strategy',
      'Fraud Monitoring',
      'Monthly Payout Management'
    ],
    gradient: 'from-emerald-500 to-teal-500',
    blob: 'bg-emerald-500/20'
  },
  'content-creation': {
    title: 'Content Creation',
    subtitle: 'High-impact content that commands attention.',
    description: 'High-impact content strategies that command attention, spark conversations, and convert audiences into loyal advocates.',
    detailedText: 'Content is the undisputed currency of the digital age. But generic content doesn\'t cut it anymore. You need cinematic quality paired with native platform language. We house a full-stack production team to build the media assets that command absolute authority.',
    details: [
      'High-Retention Short-Form Video',
      'Premium Long-Form Video',
      'Ghostwriting & Written Content',
      'High-End Photography',
      'Podcast Production'
    ],
    gradient: 'from-purple-500 to-indigo-500',
    blob: 'bg-purple-500/20'
  },
  'branding-marketing': {
    title: 'Branding + Marketing',
    subtitle: 'Where identity meets exponential growth.',
    description: 'A holistic alignment of your core brand identity with high-leverage marketing strategies to dominate your market.',
    detailedText: 'A beautiful brand without marketing is invisible. Marketing without a strong brand is a commodity race to the bottom. We provide the rare fusion of world-class aesthetic branding and ruthless marketing execution, ensuring you not only look premium but sell like it too.',
    details: [
      'Brand Identity & Logo Design',
      'Market Positioning Strategy',
      'Brand Voice & Messaging',
      'Go-to-Market Campaigns',
      'Integrated Marketing Rollout'
    ],
    gradient: 'from-rose-500 to-orange-500',
    blob: 'bg-rose-500/20'
  },
  'personal-branding': {
    title: 'Personal Branding',
    subtitle: 'Forge an unforgettable digital identity.',
    description: 'We craft compelling narratives and build your authority from the ground up to attract high-value opportunities.',
    detailedText: 'In today’s digital noise, being good isn’t enough—you need to be recognized as the authority. Our Personal Branding framework is designed exclusively for founders and executives who are ready to dominate their niche. We systematically deconstruct your unique value proposition and deploy it across high-leverage platforms.',
    details: [
      'Brand Identity & Positioning',
      'Vision & Narrative Architecture',
      'Executive Presence Coaching',
      'Thought Leadership Strategy',
      'Media Press & PR Strategy'
    ],
    gradient: 'from-yellow-400 to-orange-500',
    blob: 'bg-yellow-500/20'
  }
};

const ServiceDetails = () => {
  const { id } = useParams();
  const service = id ? serviceData[id] : null;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="relative min-h-screen bg-neutral-950 pt-32 pb-24 px-5 overflow-hidden">
      {/* Background Orbs */}
      <div className={`hidden md:block absolute top-0 right-0 w-96 h-96 blur-[120px] pointer-events-none ${service.blob}`}></div>
      <div className="hidden md:block absolute bottom-0 left-0 w-[500px] h-[500px] bg-neutral-900/40 blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Link 
          to="/services" 
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-12 font-medium"
        >
          <ArrowLeft size={20} /> Back to Services
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">
            <Zap size={14} className="text-orange-400" /> Executive Overview
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight text-white">
            {service.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r font-medium mb-12" style={{ backgroundImage: `linear-gradient(to right, ${service.gradient.includes('orange') ? '#f97316' : '#d946ef'}, ${service.gradient.includes('purple') ? '#9333ea' : '#eab308'})` }}>
            {service.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-light mb-8">
            {service.detailedText}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-neutral-900/50 md:backdrop-blur-md border border-white/10 rounded-[2rem] p-8 md:p-12 mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-white">System Deliverables</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.details.map((item: string, index: number) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle2 className="shrink-0 text-white w-6 h-6" />
                <span className="text-neutral-300 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link 
            to="/contact" 
            className="px-8 py-4 rounded-full bg-white text-black font-bold text-center hover:bg-neutral-200 transition-colors shadow-xl"
          >
            Deploy This System
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetails;
