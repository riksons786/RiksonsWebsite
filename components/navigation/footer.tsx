import Link from "next/link"
import Image from "next/image"
import { Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/logo.jpg" alt="Riksons Engineering Pvt Ltd" width={80} height={80} className="rounded" />
              <div>
                <span className="text-xl font-bold text-foreground">RIKSONS</span>
                <p className="text-sm text-muted-foreground">Engineering Pvt Ltd</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Leading provider of architecture, engineering, and construction services. We deliver innovative solutions
              for residential and commercial projects.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+92 312 5191649</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info.riksons@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Services", "Portfolio", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Services</h3>
            <ul className="space-y-2">
              {["Architecture", "Engineering", "Construction", "Project Management"].map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">© 2025 Riksons Engineering Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
