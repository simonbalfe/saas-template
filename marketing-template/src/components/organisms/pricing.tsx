"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for individuals and small teams getting started.",
    features: [
      "Up to 5 team members",
      "10GB storage",
      "Basic analytics",
      "Email support",
      "API access"
    ],
    highlighted: false
  },
  {
    name: "Pro",
    price: "$79",
    description: "For growing teams that need more power and flexibility.",
    features: [
      "Up to 25 team members",
      "100GB storage",
      "Advanced analytics",
      "Priority support",
      "Custom integrations",
      "SSO authentication"
    ],
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with advanced security needs.",
    features: [
      "Unlimited team members",
      "Unlimited storage",
      "Custom analytics",
      "Dedicated support",
      "On-premise deployment",
      "SLA guarantee"
    ],
    highlighted: false
  }
]

export function Pricing() {
  return (
    <section id="pricing" className="w-full py-12 md:py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-light tracking-tighter sm:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Choose the plan that fits your project. No hidden fees.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <Card
              key={idx}
              className={`flex flex-col h-full border-border shadow-sm hover:shadow-md transition-shadow duration-300 ${
                plan.highlighted ? "border-primary border-2 relative" : ""
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-light">{plan.price}</span>
                  {plan.price !== "Custom" && (
                    <span className="text-muted-foreground ml-1">/month</span>
                  )}
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="p-6 pt-0">
                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : ""
                  }`}
                  variant={plan.highlighted ? "default" : "outline"}
                  onClick={() => window.location.href = "/signup"}
                >
                  Start Free Trial
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
