import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { getAllPosts } from "@/src/lib/blog"
import { FormattedDate } from "@/src/components/marketing/formatted-date"
import { SITE_CONFIG } from "@/src/lib/constants"

export const metadata: Metadata = {
  title: "Blog",
  description: "Hard-won lessons on AI automation, voice agents, and building businesses that run themselves.",
  openGraph: {
    title: `Blog — ${SITE_CONFIG.name}`,
    description: "Hard-won lessons on AI automation, voice agents, and building businesses that run themselves.",
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="flex-1">
      <section className="pt-24 md:pt-32 pb-6 md:pb-8 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 tracking-tight">
              The Playbook
            </h1>
            <p className="text-lg text-muted-foreground">
              Tactics, teardowns, and lessons from the frontlines of AI automation.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <article
                    key={post.slug}
                    className="group bg-card rounded-2xl border border-border overflow-hidden flex flex-col h-full hover:shadow-lg transition-all duration-300"
                  >
                    {post.heroImage && (
                      <Link
                        href={`/blog/${post.slug}`}
                        className="block overflow-hidden"
                      >
                        <div className="aspect-[16/9] overflow-hidden">
                          <img
                            src={post.heroImage}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </Link>
                    )}
                    <div className="p-6 md:p-8 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <FormattedDate
                          date={post.pubDate}
                          className="text-sm text-muted-foreground font-medium"
                        />
                        {post.tags?.[0] && (
                          <Link
                            href={`/blog/tag/${post.tags[0]}`}
                            className="px-2.5 py-0.5 text-[10px] font-medium bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors no-underline uppercase tracking-wider"
                          >
                            {post.tags[0]}
                          </Link>
                        )}
                      </div>
                      <h2 className="text-xl font-medium mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                        <Link href={`/blog/${post.slug}`} className="no-underline">
                          {post.title}
                        </Link>
                      </h2>
                      {post.description && (
                        <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed text-sm">
                          {post.description}
                        </p>
                      )}
                      <div className="mt-auto">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm no-underline group/link"
                        >
                          Keep reading
                          <svg
                            className="ml-1 w-3 h-3 group-hover/link:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-12 h-12 text-muted-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-light mb-4">We&apos;re cooking something up</h2>
                <p className="text-muted-foreground">First post drops soon.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
