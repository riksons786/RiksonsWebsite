"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation({ bg }: { bg?: string }) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/About", label: "About" },
    { href: "/Services", label: "Services" },
    { href: "/Portfolio", label: "Portfolio" },
    { href: "/Reviews", label: "Testimonials" },
    { href: "/FAQs", label: "FAQ" },
    { href: "/Contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm" style={{ backgroundColor: bg }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo2.png" alt="Riksons Engineering Pvt Ltd" width={150} height={100} style={{ border: "0px" }} />
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
                  style={{ color: "white" }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/Contact">Get Quote</Link>
            </Button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors w-full text-left"
                  style={{ color: "black" }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link href="/Contact">Get Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}