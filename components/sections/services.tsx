import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, ArrowRight, PenTool, DraftingCompass, Map, Mountain, Calculator, FileText, HardHat, Wrench, ClipboardList } from "lucide-react"
import Link from "next/link"

export function Services() {
  const services = [
    {
      icon: PenTool,
      title: "Architectural Design",
      description: "Comprehensive architectural design solutions tailored to your project.",
      features: [
        "Layout Plans",
        "2D Elevations (Front, Side, Rear)",
        "Roof Layout Plans",
        "Building Sections",
        "Furniture Plans",
        "3D Front Façade",
        "Working Drawings",
        "Area Calculations",
        "Submission Drawings + Soft Copy",
      ],
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: DraftingCompass,
      title: "Engineering & Structural Design",
      description: "Robust and compliant structural and engineering design services.",
      features: [
        "Structural Design (Foundations, Load, Seismic)",
        "Engineering Design (Civil, Infrastructure, Utilities)",
        "MEP Design (Mechanical, Electrical, Plumbing)",
        "Design Review & Compliance Checks",
      ],
      color: "bg-green-50 text-green-600",
    },
    {
      icon: Map,
      title: "Surveying & Studies",
      description: "Detailed studies and surveys for safe and optimized project planning.",
      features: [
        "Geological Surveys (Soil, Rock, Mapping)",
        "Topographic Surveys (Land Mapping, Elevations, Contours)",
        "Feasibility Studies (Economic, Risk, Viability)",
        "Technical Studies (Design Alternatives, Reports, Site Analysis)",
      ],
      color: "bg-orange-50 text-orange-600",
    },
    {
      icon: Calculator,
      title: "Estimation & Documentation",
      description: "Accurate estimation, budgeting, and preparation of project documents.",
      features: [
        "Quantity Surveying & Cost Estimation",
        "BOQ Preparation",
        "Contract & Tender Documentation",
        "Cost Estimation & Budgeting",
      ],
      color: "bg-purple-50 text-purple-600",
    },
    {
      icon: HardHat,
      title: "Supervision & Inspection",
      description: "Professional supervision and inspection to ensure quality and compliance.",
      features: [
        "Site Supervision",
        "Inspection Reports",
        "Quality Assurance & Compliance",
        "Project Completion Documentation",
      ],
      color: "bg-red-50 text-red-600",
    },
    {
      icon: Wrench,
      title: "Civil Works Rehabilitation",
      description: "Restoration and rehabilitation of existing civil infrastructure.",
      features: [
        "Structural Repairs",
        "Rehabilitation Planning",
        "Sustainability Upgrades",
        "Infrastructure Restoration",
      ],
      color: "bg-teal-50 text-teal-600",
    },
  ]

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-lg">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            Comprehensive Construction Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-pretty">
            From concept to completion, we provide integrated services that cover every aspect of your construction
            project with expertise and precision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Start Your Project?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get in touch with our expert team to discuss your requirements and receive a customized solution for your
            construction needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/Contact" className="flex items-center gap-2">
                Get Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/Portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
