"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"
import { testimonials } from "@/data/portfolio"

export function Testimonials() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} className={`h-4 w-4 ${index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-lg">Client Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            What Our Clients Say About Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-pretty">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience
            working with Riksons Engineering on their construction projects.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="border-border hover:shadow-lg transition-shadow duration-300 relative"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-primary/20">
                  <Quote className="h-8 w-8" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">{renderStars(testimonial.rating)}</div>

                {/* Testimonial Text */}
                <blockquote className="text-muted-foreground leading-relaxed mb-6 text-pretty">
                  "{testimonial.text}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    <div className="text-xs text-primary font-medium">{testimonial.project}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center bg-card rounded-2xl p-8 border border-border">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex items-center gap-1">{renderStars(5)}</div>
            <span className="text-2xl font-bold text-foreground">4.9/5</span>
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">Rated Excellent on Google Reviews</h3>
          <p className="text-muted-foreground mb-6">
            Join hundreds of satisfied clients who have rated us 5 stars for our exceptional construction services.
          </p>
          <a
            href="https://www.google.com/search?sca_esv=e126eb4d051b0442&rlz=1C1MMCH_enPK1120PK1120&sxsrf=AE3TifP7Xwrw-M3DpJ26-4ZmTdYkCue2mQ:1757834469743&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E0tmVcKjVkhycl83w4rIkFj6n2wgID2HixLhE7hO-peypirSrjj1CIsq5Y12lxR8g3m-TOIpsM50slKkGSz3vyrXi7J3-NKm8kIGSU4xU30-xaUqDQ%3D%3D&q=RIKSONS+ENGINEERING+PVT.+LTD.+Reviews&sa=X&ved=2ahUKEwjgiZLZ29ePAxUMfKQEHZKdADsQ0bkNegQIHhAD&biw=1272&bih=594&dpr=1.5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Read More Reviews
          </a>
        </div>
      </div>
    </section>
  )
}
