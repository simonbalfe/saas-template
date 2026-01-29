import type { MDXComponents } from "mdx/types"

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export const mdxComponents: MDXComponents = {
  h2: ({ children, ...props }) => {
    const text = typeof children === "string" ? children : String(children)
    const id = slugify(text)
    return (
      <h2 id={id} {...props}>
        {children}
      </h2>
    )
  },
  h3: ({ children, ...props }) => {
    const text = typeof children === "string" ? children : String(children)
    const id = slugify(text)
    return (
      <h3 id={id} {...props}>
        {children}
      </h3>
    )
  },
}
