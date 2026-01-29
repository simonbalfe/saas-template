"use client"

import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/lib/constants"
import { Card } from "@/components/ui/card"

const features = [
  "Launch in weeks, not months",
  "Fixed pricing, no surprises",
  "Full source code ownership",
  "30 days post-launch support",
  "Ongoing maintenance available",
]

export function ContactCalendly() {
  return (
    <section id="contact" className="py-16 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Card className="p-8 md:p-10 border-border">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div className="max-w-md">
              <h2 className="text-3xl font-medium tracking-tight mb-4">
                Ready to build?
              </h2>
              <p className="text-muted-foreground mb-6">
                Let's turn your idea into a product. Ship faster with a team that's done it before.
              </p>
              <Button asChild>
                <a href={SITE_CONFIG.demoUrl}>
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-muted-foreground shrink-0" />
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>
    </section>
  )
}
