import * as React from "react"
import { ArrowRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface BlogPost {
  id: string
  data: {
    title: string
    description: string
    pubDate: Date
    tags: string[]
    heroImage?: string | {
      src: string
      width: number
      height: number
    }
  }
}

interface BlogCarouselProps {
  posts: BlogPost[]
}

export function BlogCarousel({ posts }: BlogCarouselProps) {
  if (!posts.length) return null

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-light tracking-tighter sm:text-5xl">
            Latest Insights
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Thoughts, strategies, and updates from our team.
          </p>
        </div>

        <div className="mx-auto max-w-6xl px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {posts.map((post) => {
                 const heroImageSrc = typeof post.data.heroImage === 'string' 
                   ? post.data.heroImage 
                   : post.data.heroImage?.src;

                 return (
                <CarouselItem key={post.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full p-1">
                    <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50 bg-background/50 backdrop-blur-sm group">
                      {heroImageSrc && (
                        <div className="aspect-[16/9] w-full overflow-hidden border-b border-border/50">
                          <img
                            src={heroImageSrc}
                            alt={post.data.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      )}
                      <CardContent className="flex flex-col flex-1 p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-medium text-muted-foreground">
                            {new Date(post.data.pubDate).toLocaleDateString("en-US", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                          {post.data.tags?.[0] && (
                            <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-medium uppercase tracking-wider">
                              {post.data.tags[0]}
                            </span>
                          )}
                        </div>
                        <h3 className="font-medium text-xl mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                          <a href={`/blog/${post.id}/`} className="block">
                            {post.data.title}
                          </a>
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-3 mb-6 flex-1">
                          {post.data.description}
                        </p>
                        <a
                          href={`/blog/${post.id}/`}
                          className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-auto group/link"
                        >
                          Read more
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                        </a>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              )})}
            </CarouselContent>
            <CarouselPrevious className="-left-4 lg:-left-12 h-12 w-12 border-border/50 bg-background/50 backdrop-blur-sm" />
            <CarouselNext className="-right-4 lg:-right-12 h-12 w-12 border-border/50 bg-background/50 backdrop-blur-sm" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
