export const SITE_CONFIG = {
  name: "LaunchStack",
  tagline: "Build Fast. Scale Faster.",
  description: "The all-in-one platform to launch, manage, and scale your product. From idea to production in days, not months.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://launchstack.dev",
  appUrl: process.env.NEXT_PUBLIC_APP_URL || "https://app.launchstack.dev",
  calendlyUrl: "https://calendly.com/launchstack/discovery",
  twitter: "@simonbalfe",
  github: "https://github.com/launchstack",
  linkedin: "https://linkedin.com/company/launchstack",
}

export const METADATA = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s — ${SITE_CONFIG.name}`
  },
  description: SITE_CONFIG.description,
  openGraph: {
    siteName: SITE_CONFIG.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: SITE_CONFIG.twitter,
    creator: SITE_CONFIG.twitter,
  }
}

export const NAVIGATION = {
  links: [
    { label: "Features", href: "/#services" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Blog", href: "/blog" },
  ],
}
