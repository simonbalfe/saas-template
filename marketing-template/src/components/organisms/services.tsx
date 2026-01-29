"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Check } from "lucide-react"
import { AnimatedBeamServices } from "@/components/organisms/animated-beam-services"

const services = [
  {
    title: "Powerful Dashboard",
    description: "Get a complete overview of your business with real-time analytics, customizable widgets, and actionable insights all in one place.",
    image: "/images/cold_call.jpg",
    features: [
      "Real-time analytics & reporting",
      "Customizable dashboard widgets",
      "Team performance tracking",
      "Export data in any format"
    ]
  },
  {
    title: "AI-Powered Automation",
    description: "Automate repetitive tasks and workflows with our intelligent AI assistant. Focus on what matters while we handle the rest.",
    image: "/images/irobot.jpg",
    features: [
      "Smart task automation",
      "AI-driven recommendations",
      "Workflow templates",
      "Third-party integrations"
    ]
  }
]

export function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-20 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-light tracking-tighter sm:text-5xl">
            Everything You Need to Scale
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Powerful features designed to help your team work smarter, not harder.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, idx) => (
            <Card key={idx} className="flex flex-col h-full pt-0 bg-background border-border shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="px-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="aspect-video w-full h-[280px] rounded-t-xl object-cover"
                />
              </CardContent>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <ul className="space-y-3">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-20">
             <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                <h3 className="text-2xl font-light tracking-tighter sm:text-4xl">
                    Seamless Integrations
                </h3>
                <p className="max-w-[900px] text-muted-foreground md:text-lg/relaxed">
                    Connect with all your favorite tools and platforms in one unified workflow.
                </p>
            </div>
            <AnimatedBeamServices />
        </div>
      </div>
    </section>
  )
}
