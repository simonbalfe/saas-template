"use client"

import { useEffect, useState } from "react"
import type { TocItem } from "@/src/lib/blog"

interface TableOfContentsProps {
  items: TocItem[]
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-100px 0px -80% 0px" }
    )

    items.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [items])

  if (items.length === 0) return null

  return (
    <nav>
      <h2 className="text-xs font-medium text-foreground mb-4 uppercase tracking-wider">
        On this page
      </h2>
      <ul className="space-y-2 border-l border-border">
        {items.map((item) => (
          <li
            key={item.id}
            className={`-ml-px border-l-2 transition-colors ${
              activeId === item.id
                ? "border-primary"
                : "border-transparent"
            }`}
            style={{ paddingLeft: item.level === 3 ? "1.5rem" : "1rem" }}
          >
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById(item.id)
                if (element) {
                  const y = element.getBoundingClientRect().top + window.scrollY - 100
                  window.scrollTo({ top: y, behavior: "smooth" })
                  setActiveId(item.id)
                }
              }}
              className={`text-[13px] leading-relaxed block transition-colors hover:text-foreground ${
                activeId === item.id
                  ? "text-foreground font-medium"
                  : "text-muted-foreground"
              }`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
