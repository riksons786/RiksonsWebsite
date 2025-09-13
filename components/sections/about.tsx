import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function About() {
  const features = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Highly skilled architects, engineers, and construction professionals",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous quality control and adherence to international standards",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Committed to delivering projects on time and within budget",
    },
  ]

  const approvedLogos = [
    { src: "/Approved/Bahria.jpg", alt: "Bahria Town" },
    { src: "/Approved/DHA.jpg", alt: "DHA" },
    { src: "/Approved/CDA.jpeg", alt: "CDA" },
    { src: "/Approved/Kohinoor.jpg", alt: "Kohinoor City" },
    { src: "/Approved/New City.jpg", alt: "New City" },
    { src: "/Approved/RDA.jpg", alt: "RDA" },
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="text-primary font-semibold text-lg">About Riksons Engineering</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
                Building Excellence Since 2008
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Riksons Engineering Pvt Ltd has been at the forefront of Pakistan's construction industry, delivering
                innovative architectural solutions, robust engineering designs, and superior construction services for
                over 15 years.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                Our comprehensive approach combines cutting-edge technology with traditional craftsmanship to create
                structures that stand the test of time. From residential complexes to industrial facilities, we bring
                your vision to life with precision and excellence.
              </p>
            </div>

            {/* Approved By section with logos */}
            <div className="mb-8">
              <h3 className="font-semibold text-foreground mb-3">Approved By:</h3>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {approvedLogos.map((logo, index) => (
                  <Image
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={60}
                    className="object-contain rounded"
                  />
                ))}
              </div>
            </div>

            <Button asChild className="bg-primary hover:bg-primary/90 flex">
              <Link href="#services">Explore Our Services</Link>
            </Button>
          </div>

          {/* Image and Features */}
          <div className="space-y-6">
            <div className="relative">
              <Image
                src="/construction-team-work.jpg"
                alt="Riksons Engineering professional team working on construction project"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}