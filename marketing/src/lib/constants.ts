export const SITE_CONFIG = {
  name: "LaunchStack",
  tagline: "MVP Development & Chatbot Automation",
  description: "We build MVPs that validate fast and chatbot systems that scale your operations. From idea to launch in weeks, not months.",
  founderVideoUrl: "https://your-r2-storage-url.com/founder-video.mp4",
  calendlyUrl: "https://calendly.com/launchstack/discovery",
  demoUrl: import.meta.env.PUBLIC_DEMO_URL || import.meta.env.DEMO_URL || "https://demo.launchstack.dev",
}

export const PRODUCTS = [
  {
    title: "MVP Development",
    description: "Validate your idea with a working product in weeks",
    icon: "rocket",
  },
  {
    title: "Chatbot Automation",
    description: "AI-powered bots that handle leads, support & operations",
    icon: "message-circle",
  },
]

export const CASE_STUDIES = [
  {
    id: 1,
    title: "SaaS MVP for Fitness Industry",
    description: "Built a workout tracking platform from scratch—user auth, payment integration, and mobile-responsive dashboard in 6 weeks",
    image: "/images/2.png",
    stats: {
      metric: "2,400",
      label: "Users in first 3 months",
    },
    tags: ["MVP", "SaaS", "React"],
  },
  {
    id: 2,
    title: "E-commerce Support Chatbot",
    description: "AI chatbot handling product questions, order tracking, and returns—reducing support tickets by 73%",
    image: "/images/3.png",
    stats: {
      metric: "73%",
      label: "Reduction in support tickets",
    },
    tags: ["Chatbot", "E-commerce", "AI"],
  },
  {
    id: 3,
    title: "Real Estate Lead Qualification Bot",
    description: "Automated chatbot qualifying buyers, checking preferences, and booking viewings directly into agent calendars",
    image: "/images/4.png",
    stats: {
      metric: "340%",
      label: "Increase in qualified leads",
    },
    tags: ["Chatbot", "Real Estate", "Automation"],
  },
]

export const REVIEWS = [
  {
    name: "Marcus Thompson",
    role: "Founder",
    company: "FitTrack Pro",
    content: "We had an idea and a tight budget. LaunchStack delivered a working MVP in 5 weeks that let us validate with real users. We've since raised a seed round.",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Marcus",
  },
  {
    name: "Jessica Rivera",
    role: "Operations Director",
    company: "Luxe Interiors",
    content: "The chatbot they built handles 80% of our customer inquiries automatically. Our team can finally focus on high-value work instead of answering the same questions.",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Jessica",
  },
  {
    name: "Brandon Cole",
    role: "CEO",
    company: "PropertyMatch",
    content: "From napkin sketch to live product in 4 weeks. The MVP they built helped us close our first 10 paying customers and prove the market was real.",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Brandon",
  },
]
