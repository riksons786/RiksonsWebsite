"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, Loader2 } from "lucide-react"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for contacting us. We'll get back to you within 24 hours.",
        })
        ;(e.target as HTMLFormElement).reset()
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "Please try again or contact us directly via WhatsApp.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello! I'm interested in your construction services. Could you please provide more information?",
    )
    window.open(`https://wa.me/923115445339?text=${message}`, "_blank")
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Number",
      details: ["+92 312 5191649"],
      action: () => window.open("tel:+923125191649"),
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info.riksons@gmail.com"],
      action: () => window.open("mailto:info.riksons@gmail.com"),
    },
    {
      icon: MapPin,
      title: "Office Location",
      details: ["Bahria Town Phase 8 Rawalpindi, Pakistan", "Birmingham, UK"],
      action: () => {},
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Sat: 9:00 AM - 5:00 PM", "Sun: Closed"],
      action: () => {},
    },
  ]

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-lg">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            Ready to Start Your Project?
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-pretty">
            Contact us today to discuss your construction needs. Our expert team is ready to bring your vision to life
            with professional architecture, engineering, and construction services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className={`border-border ${ info.title !== "Office Location" && info.title !== "Business Hours" ? "cursor-pointer hover:shadow-md transition-shadow" : ""}`}
                    onClick={info.action}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <info.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-sm text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6 text-center">
                <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Quick Response via WhatsApp</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Get instant responses to your queries. Chat with us directly on WhatsApp.
                </p>
                <Button onClick={handleWhatsAppClick} className="w-full bg-green-500 hover:bg-green-600 text-white">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send Us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours with a detailed response.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        required
                        className="border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="border-border"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+92 XXX XXXXXXX"
                        className="border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Required</Label>
                      <select
                        id="service"
                        name="service"
                        className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="architecture">Architecture Design</option>
                        <option value="engineering">Structural Engineering</option>
                        <option value="construction">Construction Management</option>
                        <option value="project-development">Project Development</option>
                        <option value="mep">MEP Engineering</option>
                        <option value="consultation">General Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Please describe your project requirements, timeline, budget range, and any specific needs..."
                      rows={6}
                      required
                      className="border-border resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Find Us on Map</h3>
            <p className="text-muted-foreground">
              Visit our office for in-person consultations and project discussions.
            </p>
          </div>

          <div className="w-full max-w-4xl mx-auto">
            <div className="relative w-full h-96 rounded-lg overflow-hidden border border-border shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207.94486652484628!2d73.06713138359964!3d33.49831047436412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df8d005ca7fab1%3A0xa60ad09917a38532!2sRIKSONS%20ENGINEERING%20PVT.%20LTD.!5e0!3m2!1sen!2s!4v1757509534178!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Riksons Engineering Office Location"
              />
            </div>
          </div>
        </div>

        {/* Additional Contact Options */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-6">Prefer to Contact Us Directly?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.open("tel:+923125191649")}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </Button>
            <Button
              onClick={() => window.open("mailto:info@riksonsengineering.com")}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Mail className="h-4 w-4" />
              Send Email
            </Button>
            <Button onClick={handleWhatsAppClick} className="bg-green-500 hover:bg-green-600 text-white">
              <MessageSquare className="h-4 w-4 mr-2" />
              WhatsApp Chat
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
