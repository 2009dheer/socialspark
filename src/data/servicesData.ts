export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  shortTag: string;
  subtitle: string;
  description: string;
  detailedText: string;
  deliverables: string[];
  outcomes: { label: string; metric: string }[];
  accentHex: string;
  accentClass: string;
  badgeClass: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'personal-branding',
    index: '01',
    title: 'Personal Branding',
    shortTag: 'Executive & Founder Authority',
    subtitle: 'Turn expertise into unmistakable cultural authority.',
    description:
      'Position founders, creators, and executives as category leaders through distinct narrative positioning, cinematic storytelling, and omnipresent distribution.',
    detailedText:
      'In an oversaturated feed, being skilled is invisible—being recognizable wins. We architect end-to-end personal brands for founders and industry leaders: sharpening your core narrative, scripting camera-ready insights, and distributing high-retention formats that attract inbound partnerships, talent, and press.',
    deliverables: [
      'Founder Positioning & Narrative Architecture',
      'Scripted Video Hooks & Content Pillars',
      'LinkedIn, X & Instagram Editorial Systems',
      'Executive Camera Presence & Direction',
      'PR, Podcast & Media Placement Strategy',
    ],
    outcomes: [
      { label: 'Inbound Deal Flow', metric: '4.2x' },
      { label: 'Share of Voice', metric: 'Top 1%' },
      { label: 'Distribution Channels', metric: 'Omni' },
    ],
    accentHex: '#FFB800',
    accentClass: 'from-amber-400 to-orange-500',
    badgeClass: 'text-amber-300 border-amber-400/30 bg-amber-500/10',
  },
  {
    id: 'content-creation',
    index: '02',
    title: 'Content Creation',
    shortTag: 'Motion, Reels & Flagship Production',
    subtitle: 'Scroll-stopping storytelling engineered for retention.',
    description:
      'High-craft short-form reels, commercial shoots, motion graphics, and narrative edits designed to win the first 1.5 seconds and convert attention.',
    detailedText:
      'Generic edits die in the first swipe. Our studio combines razor-sharp pacing, kinetic typography, custom sound design, and platform-native cinematography so every reel, documentary cut, and campaign asset earns organic watch time and builds lasting brand equity.',
    deliverables: [
      'High-Retention Short-Form Reels & Shorts',
      'Commercial Campaign Direction & Shoots',
      'Motion Graphics & Kinetic Typography',
      'Long-Form YouTube & Podcast Production',
      'Editorial Product & Brand Photography',
    ],
    outcomes: [
      { label: '3-Sec Hook Hold Rate', metric: '74%+' },
      { label: 'Watch Completion', metric: '2.8x' },
      { label: 'Visual Standard', metric: '4K Cinema' },
    ],
    accentHex: '#FF2E93',
    accentClass: 'from-pink-500 to-rose-500',
    badgeClass: 'text-pink-300 border-pink-400/30 bg-pink-500/10',
  },
  {
    id: 'influencer-marketing',
    index: '03',
    title: 'Influencer Marketing',
    shortTag: 'Creator Partnerships & Culture',
    subtitle: 'Borrow cultural trust from voices audiences actually listen to.',
    description:
      'End-to-end creator casting, creative direction, contract negotiation, and campaign attribution that turn creator moments into cultural waves.',
    detailedText:
      'Trust converts faster than any banner ad. Instead of mismatched sponsored shoutouts, we curate vetted micro-to-macro creators whose audiences mirror your ideal buyer, direct authentic storytelling angles, and measure true campaign ROI from impression to checkout.',
    deliverables: [
      'Creator Casting, Vetting & Audience Audits',
      'Rate Negotiation & Usage Rights Management',
      'Native Creative Briefs & Story Arcs',
      'Multi-Wave Product Seeding & Launches',
      'Full Attribution & Campaign Analytics',
    ],
    outcomes: [
      { label: 'Creator Trust Lift', metric: '3.9x' },
      { label: 'CPM Efficiency', metric: '-42%' },
      { label: 'Campaign Rollout', metric: 'End-to-End' },
    ],
    accentHex: '#EC4899',
    accentClass: 'from-fuchsia-500 to-pink-500',
    badgeClass: 'text-fuchsia-300 border-fuchsia-400/30 bg-fuchsia-500/10',
  },
  {
    id: 'performance-marketing',
    index: '04',
    title: 'Performance Marketing',
    shortTag: 'Paid Social, CRO & ROAS Scaling',
    subtitle: 'Creative-led media buying built around unit economics.',
    description:
      'Precision Meta, Google, and YouTube ad systems paired with rapid creative testing and conversion optimization to scale profitable acquisition.',
    detailedText:
      'Modern paid media is won in the creative—not just inside ad manager toggles. We pair high-velocity hook/angle testing with psychological landing copy, strict attribution modeling, and retargeting architecture so every rupee of spend scales predictably.',
    deliverables: [
      'Meta, Google & YouTube Paid Acquisition',
      'Weekly Creative & Hook Split-Testing',
      'Landing Page & Funnel Conversion Audits',
      'Full-Funnel Retargeting Architecture',
      'Live ROAS, CAC & LTV Dashboards',
    ],
    outcomes: [
      { label: 'Blended ROAS Focus', metric: '4.8x+' },
      { label: 'Creative Iterations', metric: 'Weekly' },
      { label: 'Tracking Integrity', metric: 'CAPI / GA4' },
    ],
    accentHex: '#FF5A1F',
    accentClass: 'from-orange-500 to-red-500',
    badgeClass: 'text-orange-300 border-orange-400/30 bg-orange-500/10',
  },
  {
    id: 'branding-marketing',
    index: '05',
    title: 'Branding + Marketing',
    shortTag: 'Visual Identity Meets Market Velocity',
    subtitle: 'Where unmistakable aesthetics drive commercial demand.',
    description:
      'Cohesive visual identities, positioning systems, and go-to-market launches engineered so your brand looks iconic and sells with conviction.',
    detailedText:
      'A stunning identity without distribution collects dust; aggressive ads without strong identity compete on price alone. We fuse bold visual design—typography, art direction, and voice—with launch playbooks that dominate category mindshare from day one.',
    deliverables: [
      'Visual Identity, Typography & Art Direction',
      'Category Positioning & Brand Messaging',
      'Go-To-Market Launch Playbooks',
      'Social Aesthetic & Design Systems',
      'Campaign Rollout & Launch Collateral',
    ],
    outcomes: [
      { label: 'Brand Recall', metric: '3.4x' },
      { label: 'Pricing Power', metric: 'Premium' },
      { label: 'Launch Speed', metric: '4 Weeks' },
    ],
    accentHex: '#F43F5E',
    accentClass: 'from-rose-500 to-orange-500',
    badgeClass: 'text-rose-300 border-rose-400/30 bg-rose-500/10',
  },
  {
    id: 'digital-marketing',
    index: '06',
    title: 'Digital Marketing',
    shortTag: 'Omnichannel Organic & Retention',
    subtitle: 'Connected growth ecosystems across search, social, and retention.',
    description:
      'Integrated SEO, social publishing, email lifecycle flows, and digital strategy aligned into a compounding customer-acquisition engine.',
    detailedText:
      'Disconnected channels leak revenue. We unify organic search visibility, social momentum, and automated lifecycle retention into one synchronized growth roadmap so new prospects discover you everywhere—and convert repeatedly.',
    deliverables: [
      'Technical & Content SEO Architecture',
      'Multi-Platform Social Channel Management',
      'Lifecycle Email & WhatsApp Retention Flows',
      'Audience Growth & Community Flywheels',
      'Monthly Strategy & Analytics Reviews',
    ],
    outcomes: [
      { label: 'Organic Lift', metric: 'Compounding' },
      { label: 'Channel Coverage', metric: '360°' },
      { label: 'Repeat Revenue', metric: '+38%' },
    ],
    accentHex: '#38BDF8',
    accentClass: 'from-sky-400 to-blue-500',
    badgeClass: 'text-sky-300 border-sky-400/30 bg-sky-500/10',
  },
  {
    id: 'affiliate-marketing',
    index: '07',
    title: 'Affiliate Marketing',
    shortTag: 'Performance Partner Networks',
    subtitle: 'Commissioned creator & publisher engines that scale risk-free.',
    description:
      'Build, recruit, and manage vetted affiliate ecosystems where partners earn strictly on verified conversions and revenue milestones.',
    detailedText:
      'Turn loyal advocates, niche reviewers, and digital publishers into an always-on sales channel. We design sustainable commission tiers, handle onboarding and tracking infrastructure, monitor attribution quality, and continuously activate top partners.',
    deliverables: [
      'Affiliate Program & Tier Architecture',
      'Partner Recruitment, Onboarding & Activation',
      'Custom Tracking Links & Promo Attribution',
      'Fraud Prevention & Quality Monitoring',
      'Partner Performance & Payout Operations',
    ],
    outcomes: [
      { label: 'Risk Profile', metric: 'CPA Only' },
      { label: 'Partner Activation', metric: 'Managed' },
      { label: 'Margin Protection', metric: 'Verified' },
    ],
    accentHex: '#10B981',
    accentClass: 'from-emerald-400 to-teal-500',
    badgeClass: 'text-emerald-300 border-emerald-400/30 bg-emerald-500/10',
  },
];
