"use client"

import { Marquee } from "@/src/components/ui/marquee"
import { cn } from "@/src/lib/utils"

const reviews = [
  {
    name: "Sarah Chen",
    role: "Founder, TechFlow",
    body: "Shipped our MVP in 3 weeks. The team understood exactly what we needed and delivered beyond expectations.",
    img: "https://api.dicebear.com/9.x/avataaars/svg?seed=Sarah",
  },
  {
    name: "Marcus Johnson",
    role: "CEO, DataPulse",
    body: "Our chatbot handles 80% of support tickets now. ROI was visible within the first month.",
    img: "https://api.dicebear.com/9.x/avataaars/svg?seed=Marcus",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, GrowthLab",
    body: "From napkin sketch to paying customers in 6 weeks. Couldn't have done it without them.",
    img: "https://api.dicebear.com/9.x/avataaars/svg?seed=Emily",
  },
  {
    name: "David Park",
    role: "CTO, Nexus AI",
    body: "The automation they built saves us 20+ hours per week. Worth every penny.",
    img: "https://api.dicebear.com/9.x/avataaars/svg?seed=David",
  },
  {
    name: "Lisa Thompson",
    role: "Founder, CloudBase",
    body: "Professional, fast, and they actually listen. Rare combo in this industry.",
    img: "https://api.dicebear.com/9.x/avataaars/svg?seed=Lisa",
  },
  {
    name: "James Wilson",
    role: "CEO, Metric",
    body: "Third project with them. Consistent quality every single time.",
    img: "https://api.dicebear.com/9.x/avataaars/svg?seed=James",
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

function ReviewCard({
  img,
  name,
  role,
  body,
}: {
  img: string
  name: string
  role: string
  body: string
}) {
  return (
    <figure
      className={cn(
        "relative w-72 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-border bg-transparent hover:bg-accent/50 transition-colors"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img className="rounded-full" width="40" height="40" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium">{name}</figcaption>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
      <blockquote className="mt-3 text-sm text-muted-foreground">{body}</blockquote>
    </figure>
  )
}

export function SocialProof() {
  return (
    <section id="social-proof" className="py-24 w-full bg-background">
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-light tracking-tighter sm:text-5xl mb-4">
            Founders Who Shipped
          </h2>
          <p className="text-muted-foreground md:text-xl max-w-2xl">
            Real MVPs. Real automation. Real results.
          </p>
        </div>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:30s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:30s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
      </div>
    </section>
  )
}
