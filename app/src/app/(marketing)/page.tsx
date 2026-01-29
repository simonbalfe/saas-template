import { Hero } from "@/src/components/marketing/hero"
import { Services } from "@/src/components/marketing/services"
import { Pricing } from "@/src/components/marketing/pricing"
import { SocialProof } from "@/src/components/marketing/social-proof"
import { BlogCarousel } from "@/src/components/marketing/blog-carousel"
import { About } from "@/src/components/marketing/about"
import { getAllPosts } from "@/src/lib/blog"
import { SITE_CONFIG } from "@/src/lib/constants"

export const metadata = {
  title: `${SITE_CONFIG.name} - Build Fast. Scale Faster.`,
  description: SITE_CONFIG.description,
}

export default function HomePage() {
  const posts = getAllPosts().slice(0, 6)

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.svg`,
    sameAs: [
      SITE_CONFIG.twitter ? `https://twitter.com/${SITE_CONFIG.twitter.replace("@", "")}` : null,
      SITE_CONFIG.github,
      SITE_CONFIG.linkedin,
    ].filter(Boolean),
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Hero />
      <Services />
      <Pricing />
      <SocialProof />
      <BlogCarousel posts={posts} />
      <About />
    </>
  )
}
