import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import rehypePrettyCode from "rehype-pretty-code"
import { getPostBySlug, getAllSlugs } from "@/src/lib/blog"
import { Prose } from "@/src/components/marketing/prose"
import { FormattedDate } from "@/src/components/marketing/formatted-date"
import { TableOfContents } from "@/src/components/marketing/table-of-contents"
import { mdxComponents } from "@/src/components/marketing/mdx-components"
import { SITE_CONFIG } from "@/src/lib/constants"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  const ogImage = post.heroImage || `${SITE_CONFIG.url}/og-image.png`

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.pubDate.toISOString(),
      modifiedTime: post.updatedDate?.toISOString() || post.pubDate.toISOString(),
      authors: [SITE_CONFIG.name],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.pubDate.toISOString(),
    dateModified: post.updatedDate?.toISOString() || post.pubDate.toISOString(),
    author: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.url}/logo.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.url}/blog/${slug}`,
    },
    ...(post.heroImage && {
      image: {
        "@type": "ImageObject",
        url: post.heroImage,
      },
    }),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="flex-1">
        <article className="pt-24 md:pt-32 pb-10 md:pb-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-10">
                <div className="flex-1 min-w-0 max-w-3xl">
                  <header className="text-left mb-10">
                    <div className="flex justify-start gap-2 mb-6">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        Blog post
                      </span>
                      <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                        {post.readingTime}
                      </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-6 tracking-tight">
                      {post.title}
                    </h1>

                    {post.description && (
                      <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                        {post.description}
                      </p>
                    )}

                    <div className="flex flex-col items-start gap-3 mb-8">
                      <div className="flex items-center gap-3">
                        <span className="text-primary font-light text-sm">Written by</span>
                        <span className="text-foreground font-light text-sm">Simon Balfe</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-primary font-light text-sm">Updated on</span>
                        <span className="text-foreground font-light text-sm">
                          <FormattedDate date={post.updatedDate || post.pubDate} />
                        </span>
                      </div>
                    </div>

                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap items-center justify-start gap-3">
                        <span className="text-primary font-light text-sm">Tags</span>
                        <div className="flex flex-wrap justify-start gap-2">
                          {post.tags.map((tag) => (
                            <Link
                              key={tag}
                              href={`/blog/tag/${tag}`}
                              className="px-3 py-1 rounded-full border border-border text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                            >
                              {tag}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </header>

                  {post.heroImage && (
                    <div className="mb-10">
                      <img
                        src={post.heroImage}
                        alt={post.title}
                        className="w-full rounded-xl shadow-lg aspect-video object-cover"
                      />
                    </div>
                  )}

                  <Prose>
                    <MDXRemote
                      source={post.content}
                      components={mdxComponents}
                      options={{
                        mdxOptions: {
                          rehypePlugins: [
                            [
                              rehypePrettyCode,
                              {
                                theme: "github-dark",
                                keepBackground: true,
                              },
                            ],
                          ],
                        },
                      }}
                    />
                  </Prose>
                </div>

                {post.toc.length > 0 && (
                  <aside className="hidden lg:block w-64 shrink-0">
                    <div className="sticky top-24">
                      <TableOfContents items={post.toc} />
                    </div>
                  </aside>
                )}
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  )
}
