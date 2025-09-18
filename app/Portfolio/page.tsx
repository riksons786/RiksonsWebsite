import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation/navbar"

const categories = [
  {
    id: "architecture",
    title: "Architecture",
    description: "Contemporary architectural designs that blend form and function",
    image: "/modern-residential-complex-architecture.jpg",
    href: "/Portfolio/Architecture"
  },
  {
    id: "engineering",
    title: "Engineering",
    description: "Structural and MEP engineering solutions for complex projects",
    image: "/industrial-facility-interior.png",
    href: "/Portfolio/Engineering"
  },
  {
    id: "construction",
    title: "Construction",
    description: "End-to-end construction management and execution",
    image: "/construction-site-background.jpg",
    href: "/Portfolio/Construction"
  },
  {
    id: "interior-design",
    title: "Interior Design",
    description: "Transforming spaces with innovative and functional interior solutions",
    image: "/luxury-villa-interior.png",
    href: "/Portfolio/Interior"
  },
]

export default function PortfolioPage() {
  return (
    <>
    <Navigation bg="gray"/>
    <div className="min-h-screen bg-background" style={{paddingTop: '80px'}}>
      {/* Header */}
      <div className="text-center mb-16">
          <span className="text-primary font-semibold text-lg">Our Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            Showcasing Excellence in Construction
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-pretty">
            Explore our diverse portfolio of completed projects spanning residential, commercial, and industrial sectors. Each project represents our commitment to quality, innovation, and client satisfaction.
          </p>
        </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 py-4">
        <div className="grid gap-8 max-w-3xl mx-auto">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-80 md:h-96">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${category.image})` }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Orange Left Border */}
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-end justify-between">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{category.title}</h2>
                      <p className="text-white/90 text-lg max-w-md">{category.description}</p>
                    </div>

                    <div className="flex-shrink-0 ml-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:bg-primary/90 transition-colors">
                        <ArrowRight className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
