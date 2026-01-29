import fs from "fs"
import path from "path"
import matter from "gray-matter"
import readingTime from "reading-time"

const BLOG_DIR = path.join(process.cwd(), "src/content/blog")

export interface TocItem {
  id: string
  text: string
  level: number
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  pubDate: Date
  updatedDate?: Date
  heroImage?: string
  tags: string[]
  content: string
  readingTime: string
  toc: TocItem[]
}

export interface BlogPostMeta {
  slug: string
  title: string
  description: string
  pubDate: Date
  updatedDate?: Date
  heroImage?: string
  tags: string[]
  readingTime: string
}

export function getAllPosts(): BlogPostMeta[] {
  const files = fs.readdirSync(BLOG_DIR)

  const posts = files
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(BLOG_DIR, file)
      const fileContent = fs.readFileSync(filePath, "utf-8")
      const { data, content } = matter(fileContent)
      const slug = file.replace(/\.mdx?$/, "")

      return {
        slug,
        title: data.title || "",
        description: data.description || "",
        pubDate: new Date(data.pubDate),
        updatedDate: data.updatedDate ? new Date(data.updatedDate) : undefined,
        heroImage: data.heroImage,
        tags: data.tags || [],
        readingTime: readingTime(content).text,
      }
    })
    .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime())

  return posts
}

export function getPostBySlug(slug: string): BlogPost | null {
  const files = fs.readdirSync(BLOG_DIR)
  const file = files.find(
    (f) => f.replace(/\.mdx?$/, "") === slug
  )

  if (!file) return null

  const filePath = path.join(BLOG_DIR, file)
  const fileContent = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(fileContent)

  return {
    slug,
    title: data.title || "",
    description: data.description || "",
    pubDate: new Date(data.pubDate),
    updatedDate: data.updatedDate ? new Date(data.updatedDate) : undefined,
    heroImage: data.heroImage,
    tags: data.tags || [],
    content,
    readingTime: readingTime(content).text,
    toc: extractToc(content),
  }
}

export function getAllSlugs(): string[] {
  const files = fs.readdirSync(BLOG_DIR)
  return files
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx?$/, ""))
}

export function getPostsByTag(tag: string): BlogPostMeta[] {
  return getAllPosts().filter((post) =>
    post.tags.map(t => t.toLowerCase()).includes(tag.toLowerCase())
  )
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tags = new Set<string>()
  posts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)))
  return Array.from(tags).sort()
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export function extractToc(content: string): TocItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm
  const toc: TocItem[] = []
  let match

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length
    const text = match[2].trim()
    const id = slugify(text)
    toc.push({ id, text, level })
  }

  return toc
}
