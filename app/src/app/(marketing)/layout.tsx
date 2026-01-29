import type { Metadata } from "next"
import { Navigation } from "@/src/components/marketing/navigation"
import { Footer } from "@/src/components/marketing/footer"
import { SITE_CONFIG, METADATA as META } from "@/src/lib/constants"

export const metadata: Metadata = {
  title: {
    default: META.title.default,
    template: META.title.template,
  },
  description: META.description,
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: META.title.default,
    description: META.description,
  },
  twitter: {
    card: "summary_large_image",
    site: SITE_CONFIG.twitter,
    creator: SITE_CONFIG.twitter,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
