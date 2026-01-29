"use client"

import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/lib/constants"
import { Code, Bot, Rocket } from "lucide-react"

const skills = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "React, Node.js, TypeScript, and modern web technologies"
  },
  {
    icon: Bot,
    title: "AI & Chatbots",
    description: "LLMs, conversational AI, and intelligent automation"
  },
  {
    icon: Rocket,
    title: "MVP Strategy",
    description: "Rapid prototyping and product validation"
  }
]

export function About() {
  const openCalendly = () => {
    window.open(SITE_CONFIG.calendlyUrl, "_blank")
  }

  return (
    <section id="about" className="w-full py-16">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center">
          <img
            src="/images/me.jpg"
            alt="Simon Balfe - Founder of LaunchStack"
            className="w-40 h-40 rounded-full object-cover border-4 border-background shadow-lg mb-6"
          />
          
          <p className="text-primary font-medium text-sm mb-1">Meet the Founder</p>
          <h2 className="text-2xl font-light tracking-tighter sm:text-3xl mb-4">
            Simon Balfe
          </h2>

          <div className="space-y-3 text-muted-foreground max-w-2xl mb-6">
            <p>
              Full-stack developer and automation specialist helping startups ship products faster and work smarter. I founded LaunchStack to turn ideas into working products—without the typical agency bloat.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-background border border-border text-sm">
                <skill.icon className="w-4 h-4 text-primary shrink-0" />
                <span>{skill.title}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Button onClick={openCalendly} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Let's Talk
            </Button>
            <Button variant="outline" asChild>
              <a href="https://twitter.com/simonbalfe" target="_blank" rel="noopener noreferrer">
                Follow on X
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
