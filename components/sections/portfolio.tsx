"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { portfolioData, type PortfolioItem } from "@/data/portfolio"
import { MapPin, Calendar, Ruler, Eye, X } from "lucide-react"
import Image from "next/image"

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)
  const [galleryPopupIndex, setGalleryPopupIndex] = useState<number | null>(null)
  const [showAll, setShowAll] = useState<boolean>(false)

  const DISPLAY_LIMIT = 6 // 2 rows (3 columns each)

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "industrial", label: "Industrial" },
  ]

  const filteredProjects =
    selectedCategory === "all"
      ? portfolioData
      : portfolioData.filter((project) => project.category === selectedCategory)

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, DISPLAY_LIMIT)

  const handleDialogOpen = (project: PortfolioItem) => {
    setSelectedProject(project)
    setIsDialogOpen(true)
  }

  const handleDialogClose = () => {
    setIsDialogOpen(false)
    setSelectedProject(null)
    setGalleryPopupIndex(null)
  }

  const openGalleryPopup = (idx: number) => {
    setGalleryPopupIndex(idx)
  }

  const closeGalleryPopup = () => {
    setGalleryPopupIndex(null)
  }

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-lg">Our Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            Showcasing Excellence in Construction
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-pretty">
            Explore our diverse portfolio of completed projects spanning residential, commercial, and industrial
            sectors. Each project represents our commitment to quality, innovation, and client satisfaction.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={selectedCategory === category.id ? "bg-primary hover:bg-primary/90" : ""}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  priority
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Dialog open={isDialogOpen} onOpenChange={(open) => { if (!open) handleDialogClose() }}>
                    <DialogTrigger asChild>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="bg-white/90 hover:bg-white text-black"
                        onClick={() => handleDialogOpen(project)}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">{selectedProject?.title}</DialogTitle>
                      </DialogHeader>
                      {selectedProject && (
                        <div className="space-y-6">
                          <Image
                            src={selectedProject.image || "/placeholder.svg"}
                            alt={selectedProject.title}
                            width={800}
                            height={400}
                            className="w-full h-64 object-cover rounded-lg"
                          />

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h3 className="text-lg font-semibold mb-3">Project Details</h3>
                              <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2">
                                  <MapPin className="h-4 w-4 text-muted-foreground" />
                                  <span>{selectedProject.details.location}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Calendar className="h-4 w-4 text-muted-foreground" />
                                  <span>{selectedProject.details.year}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Ruler className="h-4 w-4 text-muted-foreground" />
                                  <span>{selectedProject.details.area}</span>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h3 className="text-lg font-semibold mb-3">Services Provided</h3>
                              <div className="flex flex-wrap gap-2">
                                {selectedProject.details.services.map((service, index) => (
                                  <Badge key={index} variant="secondary">
                                    {service}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div>
                            <h3 className="text-lg font-semibold mb-3">Description</h3>
                            <p className="text-muted-foreground leading-relaxed">{selectedProject.description}</p>
                          </div>

                          <div>
                            <h3 className="text-lg font-semibold mb-3">Project Gallery</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                              {selectedProject.gallery.map((image, index) => (
                                <div
                                  key={index}
                                  className="cursor-pointer"
                                  onClick={() => openGalleryPopup(index)}
                                >
                                  <Image
                                    src={image || "/placeholder.svg"}
                                    alt={`${selectedProject.title} - Image ${index + 1}`}
                                    width={200}
                                    height={150}
                                    className="w-full h-32 object-cover rounded-lg"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="capitalize">
                    {project.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{project.details.year}</span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{project.details.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Ruler className="h-4 w-4" />
                    <span>{project.details.area}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {filteredProjects.length > DISPLAY_LIMIT && (
          <div className="flex justify-center mt-8">
            <Button
              variant="secondary"
              onClick={() => setShowAll((prev) => !prev)}
              className="bg-primary text-white"
            >
              {showAll ? 'Show Less' : 'Show More'}
            </Button>
          </div>
        )}
      </div>
      {/* Gallery Image Popup */}
      {selectedProject && galleryPopupIndex !== null && (
        <Dialog open={true} onOpenChange={closeGalleryPopup}>
          <DialogContent className="max-w-xl">
            <button
              className="absolute right-2 top-2 p-2 rounded-full bg-white text-black"
              onClick={closeGalleryPopup}
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <Image
              src={selectedProject.gallery[galleryPopupIndex] || "/placeholder.svg"}
              alt={`${selectedProject.title} - Image ${galleryPopupIndex + 1}`}
              width={600}
              height={400}
              className="w-full h-auto object-contain rounded-lg"
            />
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}