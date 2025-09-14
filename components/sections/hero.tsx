"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const BACKGROUND_IMAGES = [
  "/portfolio/Enscape_2024-11-19-16-09-42.png",
  "./portfolio/G2.jpg",
  "/portfolio/Enscape_2024-11-19-16-52-50.png",
  "/portfolio/Enscape_2024-11-19-16-53-45.png",
  "/portfolio/Enscape_2024-11-19-17-14-26.png",
  "./portfolio/03.jpg",
  "./portfolio/04.jpg",
  "/portfolio/Enscape_2025-01-10-15-34-31.png",
]

export function Hero() {
  const [current, setCurrent] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % BACKGROUND_IMAGES.length)
        setFade(true)
      }, 500) // duration of fade out
    }, 6000) // change every 6 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen pt-16 flex items-center justify-center overflow-hidden">
      {/* Background Images with fade transition */}
      <div className="absolute inset-0 z-0">
        {BACKGROUND_IMAGES.map((img, idx) => (
          <Image
            key={img}
            src={img}
            alt={`Background ${idx}`}
            fill
            priority
            className={`object-cover absolute inset-0 transition-opacity duration-500 ${
              idx === current && fade ? "opacity-100" : "opacity-0"
            }`}
            style={{zIndex: idx === current ? 2 : 1}}
          />
        ))}
        {/* Make the background even darker */}
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 style={{paddingTop: "60px"}} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
            Building Tomorrow's
            <span className="text-primary block">Infrastructure</span>
          </h1>

          {/* Subheading - text is white for readability */}
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto text-pretty">
            Riksons Engineering Pvt Ltd delivers exceptional architecture, engineering, and construction services across
            Pakistan. From concept to completion, we build your vision.
          </p>

          {/* Service Tags */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {["Architecture", "Engineering", "Construction"].map((service) => (
              <div key={service} className="bg-black/30 backdrop-blur-sm border border-white/30 rounded-full px-6 py-2">
                <span className="text-white font-medium">{service}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg">
              <Link href="/Contact" className="flex items-center gap-2">
                Get Free Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg bg-transparent"
            >
              <Link href="/Portfolio" className="flex items-center gap-2">
                <Play className="h-5 w-5" />
                View Projects
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div style={{paddingBottom: "40px"}} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}