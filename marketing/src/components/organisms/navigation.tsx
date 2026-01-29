"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/#services", label: "Features" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/40 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-light text-foreground cursor-pointer tracking-tight"
            onClick={() => window.location.href = "/"}
          >
            LaunchStack
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground hover:underline underline-offset-4 transition-all"
              >
                {link.label}
              </a>
            ))}
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => window.location.href = "/signup"}
            >
              Sign Up
            </Button>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col items-center justify-center gap-1.5">
              {isOpen ? (
                <>
                  <span className="block h-0.5 w-6 bg-foreground origin-center rotate-45 translate-y-2" />
                  <span className="block h-0.5 w-6 bg-foreground opacity-0" />
                  <span className="block h-0.5 w-6 bg-foreground origin-center -rotate-45 -translate-y-2" />
                </>
              ) : (
                <>
                  <span className="block h-0.5 w-6 bg-foreground" />
                  <span className="block h-0.5 w-6 bg-foreground" />
                  <span className="block h-0.5 w-6 bg-foreground" />
                </>
              )}
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-t border-border/50"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-lg font-medium text-foreground/80 hover:text-foreground py-3 px-4 rounded-lg hover:bg-foreground/5 transition-all"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="pt-4"
                >
                  <Button
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={() => {
                      closeMenu()
                      window.location.href = "/signup"
                    }}
                  >
                    Sign Up
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
