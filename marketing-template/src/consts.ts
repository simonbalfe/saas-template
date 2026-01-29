export const SITE = {
  name: 'LaunchStack',
  site: import.meta.env.SITE_URL || 'https://launchstack.dev',
  demoUrl: import.meta.env.PUBLIC_DEMO_URL || import.meta.env.DEMO_URL || 'https://demo.launchstack.dev',
  logo: '/logo.svg',
  description: 'We build MVPs that validate fast and chatbot systems that automate your operations. From idea to launch in weeks, not months.',
};

export const GOOGLE_SITE_VERIFICATION_ID = '';

export const METADATA: {
  title: { default: string; template: string };
  description: string;
  robots: { index: boolean; follow: boolean };
  openGraph: { site_name: string; images: { url: string; width: number; height: number }[]; type: string };
  twitter: { handle: string; site: string; cardType: string };
} = {
  title: {
    default: SITE.name,
    template: `%s — ${SITE.name}`
  },
  description: SITE.description,
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    site_name: SITE.name,
    images: [{ url: `${SITE.site}/og-image.png`, width: 1200, height: 630 }],
    type: 'website'
  },
  twitter: {
    handle: '@simonbalfe',
    site: '@simonbalfe',
    cardType: 'summary_large_image'
  }
};

export const I18N = { language: 'en', textDirection: 'ltr' };

export const NAVIGATION = {
  links: [
    { label: 'Services', href: '/#services' },
    { label: 'About', href: '/#about' },
    { label: 'Results', href: '/#social-proof' },
    { label: 'Blog', href: '/blog' },
  ],
  cta: { label: 'Start Your Project', href: '' },
  loginLabel: 'Log in',
};

export const HERO = {
  badge: '50+ MVPs launched • 100+ chatbots deployed',
  headline: 'Ship Your MVP. Automate Your Ops.',
  subheadline: 'We build products that validate ideas fast and chatbot systems that handle the work you shouldn\'t be doing manually.',
  primaryCta: { label: 'See Our Work', href: SITE.demoUrl },
  secondaryCta: { label: 'Book Discovery Call', href: '#workflows' },
  showAvatars: true,
};

export const PRICING = {
  title: 'Engagement Models',
  subtitle: 'Fixed-scope projects or ongoing partnership—your call',
  tiers: [
    {
      name: 'MVP Sprint',
      price: 8000,
      period: 'starting at',
      description: 'Validate your idea with a working product',
      features: ['Full-stack development', 'User auth & payments ready', 'Mobile-responsive design', 'Deployment & handoff', '30-day bug support'],
      cta: { label: 'Scope My MVP', href: '' },
      highlighted: false,
    },
    {
      name: 'Chatbot System',
      price: 3000,
      period: 'starting at',
      description: 'Automate leads, support, or operations',
      badge: 'Popular',
      features: ['Custom AI chatbot build', 'Multi-channel deployment', 'CRM/tool integrations', 'Conversation analytics', '30-day optimization'],
      cta: { label: 'Automate Now', href: '' },
      highlighted: true,
    },
  ],
};

export const CTA = {
  title: 'Ideas Die in Waiting Rooms',
  subtitle: 'Every week you delay is a week your competitor gets ahead.',
  button: { label: 'See Our Work', href: SITE.demoUrl },
  note: 'Free discovery call—let\'s see if we\'re a fit',
};

export const APPS = {
  blog: {
    isEnabled: true,
    postsPerPage: 6,
    post: { isEnabled: true, permalink: '/blog/%slug%', robots: { index: true } },
    list: { isEnabled: true, pathname: 'blog', robots: { index: true } },
    tag: { isEnabled: true, pathname: 'blog/tag', robots: { index: false } },
    isRelatedPostsEnabled: true,
    relatedPostsCount: 4
  }
};

export const UI = { theme: 'light:only' };

export const SITE_TITLE = SITE.name;
export const SITE_DESCRIPTION = SITE.description;
