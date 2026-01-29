import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getPostsByTag, getAllTags } from "@/src/lib/blog"
import { FormattedDate } from "@/src/components/marketing/formatted-date"
import { SITE_CONFIG } from "@/src/lib/constants"

interface TagPageProps {
  params: Promise<{ tag: string }>
}

export async function generateStaticParams() {
  const tags = getAllTags()
  return tags.map((tag) => ({ tag }))
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { tag } = await params
  const decodedTag = decodeURIComponent(tag)

  return {
    title: `Posts tagged "${decodedTag}"`,
    description: `Browse all articles tagged with ${decodedTag} on the ${SITE_CONFIG.name} blog.`,
    openGraph: {
      title: `Posts tagged "${decodedTag}" — ${SITE_CONFIG.name}`,
      description: `Browse all articles tagged with ${decodedTag}.`,
    },
  }
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params
  const decodedTag = decodeURIComponent(tag)
  const posts = getPostsByTag(decodedTag)

  if (posts.length === 0) {
    notFound()
  }

  return (
    <div className="flex-1">
      <section className="pt-24 md:pt-32 pb-6 md:pb-8 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
            >
              <svg
                className="mr-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              All posts
            </Link>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 tracking-tight">
              {decodedTag}
            </h1>
            <p className="text-lg text-muted-foreground">
              {posts.length} {posts.length === 1 ? "article" : "articles"}
            </p>
          </div>
        </div>
      </section>

      <section className="pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
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
          </div>
        </div>
      </section>
    </div>
  )
}
