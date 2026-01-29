import type { Metadata } from "next"
import "@/src/globals.css"
import { PostHogProvider } from "@/src/lib/providers"
import { Toaster } from "@/src/components/ui/sonner"
import { SITE_CONFIG } from "@/src/lib/constants"

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s — ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="font-primary">
        <PostHogProvider>
          {children}
          <Toaster />
        </PostHogProvider>
      </body>
    </html>
  )
}
