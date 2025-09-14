import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Services } from "@/components/sections/services"
import { Portfolio } from "@/components/sections/portfolio"
import { Testimonials } from "@/components/sections/testimonials"
import { FAQ } from "@/components/sections/faq"
import { Contact } from "@/components/sections/contact"
import { Navigation } from "@/components/navigation/navbar"
import { Footer } from "@/components/navigation/footer"
import { ScrollToTop } from "@/components/ui/scroll-to-top"


export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
