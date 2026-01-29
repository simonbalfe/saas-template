"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-background">
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-4xl flex flex-col items-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Now with AI-Powered Automation
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-secondary-foreground mb-6 md:mb-8 leading-[1.15] md:leading-[1.1]">
              Build Fast.{" "}
              <span className="text-primary">Scale Faster.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              The all-in-one platform to launch, manage, and scale your product. From idea to production in days, not months.
            </p>
            <div className="flex flex-row items-center justify-center gap-4">
              <Button
                onClick={() => window.location.href = "/signup"}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Start Free Trial
              </Button>
              <button
                onClick={() => window.location.href = "/#services"}
                className="h-11 px-6 text-base font-medium rounded-xl border border-border bg-transparent hover:bg-accent transition-colors"
              >
                See Features
              </button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-4 text-sm text-muted-foreground">
               <div className="flex -space-x-2">
                  {[1,2,3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs overflow-hidden">
                       <img src={`/images/${i}.png`} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
               </div>
               <p>Trusted by 10,000+ teams worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
