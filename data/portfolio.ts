export interface PortfolioItem {
  id: string
  title: string
  category: "residential" | "commercial" | "industrial"
  description: string
  image: string
  details: {
    client: string
    location: string
    year: string
    area: string
    services: string[]
  }
  gallery: string[]
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "1",
    title: "Classical Residential Project",
    category: "residential",
    description: "A classical residential farm house featuring sustainable design and modern amenities.",
    image: "/portfolio/03.jpg",
    details: {
      client: "Bahria Developers",
      location: "Kallar kahar, Pakistan",
      year: "2025",
      area: "6,000 sq ft",
      services: ["Architecture", "Structural Engineering", "Construction", "Interior Design"],
    },
    gallery: [
      "/portfolio/02.jpg",
      "/portfolio/03.jpg",
      "/portfolio/04.jpg",
      "/portfolio/05.jpg",
      "/portfolio/06.jpg",
      "/portfolio/07.jpg",
      "/portfolio/6.jpg",
      "/portfolio/12 (2).png",

    ]
  },
  {
    id: "2",
    title: "Modern House design",
    category: "residential",
    description: "State-of-the-art 1 kanal house in Bahria Town Rawalpindi, corner house with contemporary design.",
    image: "/portfolio/1_1 - Photo.jpg",
    details: {
      client: "XYZ Corporation",
      location: "Bahria Town, Rawalpindi, Pakistan",
      year: "2024",
      area: "7,000 sq ft",
      services: ["Architecture", "MEP Engineering", "3D DESIGN RENDERS", "Engineering"],
    },
    gallery: [
      "/portfolio/1_2 - Photo.jpg",
      "/portfolio/1_3 - Photo.jpg",
      "/portfolio/1_6 - Photo.jpg",
    ],
  },
  {
    id: "3",
    title: "Stunning Designer House",
    category: "residential",
    description: "Large-scale manufacturing facility designed for optimal workflow and safety standards.",
    image: "/portfolio/1_14 - Photo.jpg",
    details: {
      client: "Manufacturing Corp",
      location: "Faisalabad, Pakistan",
      year: "2022",
      area: "100,000 sq ft",
      services: ["Structural Engineering", "Industrial Design", "Construction"],
    },
    gallery: [
      "/portfolio/1_14 - Photo.jpg",
      "/portfolio/1_11 - Photo.jpg",
    ],
  },
  
  {
    id: "4",
    title: "Kohinoor City Chakwal",
    category: "commercial",
    description: "A modern and straight line design of society gate.",
    image: "/portfolio/1.jpg",
    details: {
      client: "Private Client",
      location: "Chakwal, Pakistan",
      year: "2025",
      area: "1,000 sq ft",
      services: ["Architecture Design", "Structure Design", "Renders"],
    },
    gallery: [
      "/portfolio/G1.jpg",
      "/portfolio/G2.jpg",
      "/portfolio/G3.jpg",
      "/portfolio/G4.jpg",
      "/portfolio/G5.jpg",
      "/portfolio/G6.jpg",
      "/portfolio/G7.jpg",
      "/portfolio/G8.jpg",
      "/portfolio/gt1.jpg",
    ],
  },

  {
    id: "5",
    title: "NLC Warehouse",
    category: "Industrial",
    description: "In callobration with NLC and DP World, a design of logistics park at haraka rawat.",
    image: "/portfolio/2 (4).jpg",
    details: {
      client: "NLC",
      location: "Islamabad, Pakistan",
      year: "2024",
      area: "67 ACRE",
      services: ["Architecture", "Landscape Architecture","RENDERS"],
    },
    gallery: [
      "/portfolio/3 (3).jpg",
      "/portfolio/NLC_1 - Photo.jpg",
      "/portfolio/NLC_2 - Photo.jpg",
      "/portfolio/NLC_3 - Photo.jpg",
      "/portfolio/NLC_4 - Photo.jpg",
      "/portfolio/NLC_5 - Photo.jpg",
      "/portfolio/NLC_6 - Photo.jpg",
      "/portfolio/NLC_7 - Photo.jpg",
      "/portfolio/NLC_8 - Photo.jpg",
      "/portfolio/NLC_9 - Photo.jpg",
      "/portfolio/NLC_10 - Photo.jpg",
      "/portfolio/NLC_11 - Photo.jpg",
      "/portfolio/NLC_12 - Photo.jpg",
      "/portfolio/NLC_14 - Photo.jpg",
      "/portfolio/NLC_15 - Photo.jpg",
      "/portfolio/NLC_16 - Photo.jpg",
      "/portfolio/NLC_17 - Photo.jpg",
      "/portfolio/NLC_18 - Photo.jpg",
      "/portfolio/NLC_19 - Photo.jpg",
      "/portfolio/NLC_10 - Photo.jpg",
      "/portfolio/NLC_21 - Photo.jpg",
      "/portfolio/NLC_22 - Photo.jpg",
      "/portfolio/NLC_23 - Photo.jpg",
      "/portfolio/NLC_24 - Photo.jpg",
      "/portfolio/NLC_25 - Photo.jpg",
      "/portfolio/NLC_26 - Photo.jpg",
      "/portfolio/NLC_27 - Photo.jpg",
      ],
  },

   {
    id: "6",
    title: "Modern House",
    category: "residential",
    description: "Corner 1 kanal house with sun room and basement with pool.",
    image: "/portfolio/12-H_2 - Photo.jpg",
    details: {
      client: "Private Client",
      location: "DHA Islamabad, Pakistan",
      year: "2024",
      area: "8,000 sq ft",
      services: ["Architecture Design", "Structure Design", "3D renders"],
    },
    gallery: [
      "/portfolio/12-H_3 - Photo.jpg",
      "/portfolio/12-H_3 - Photo (2).jpg",
      "/portfolio/12-H_5 - Photo.jpg",
      "/portfolio/12-H_7 - Photo.jpg",
      "/portfolio/12-H_8 - Photo.jpg",
      ],
  },

  {
    id: "7",
    title: "Spanish Theme House",
    category: "residential",
    description: "Massive front garden and classical details making this house a unique model.",
    image: "/portfolio/593 exterior.jpg",
    details: {
      client: "Private Client",
      location: "Bahria Town,Rawalpindi, Pakistan",
      year: "2024",
      area: "8,000 sq ft",
      services: ["Architecture", "Structure design", "Supervision"],
    },
    gallery: [
     
      ],
  },

  {
    id: "8",
    title: "Corner Mansion",
    category: "residential",
    description: "Exclusive luxury villa with premium finishes and landscaped gardens.",
    image: "/portfolio/corner.jpg",
    details: {
      client: "Private Client",
      location: "Islamabad, Pakistan",
      year: "2023",
      area: "8,000 sq ft",
      services: ["Architecture", "Interior Design", "Landscape Architecture"],
    },
    gallery: [
      "/portfolio/corner.jpg",
      "/portfolio/left.jpg",
      ],
  },

  {
    id: "9",
    title: "Most Luxury Mansion",
    category: "residential",
    description: "Exclusive luxury villa with premium finishes and landscaped gardens.",
    image: "/portfolio/Enscape_2025-09-08-13-38-18.jpg",
    details: {
      client: "Private Client",
      location: "Islamabad, Pakistan",
      year: "2023",
      area: "8,000 sq ft",
      services: ["Architecture", "Interior Design", "Landscape Architecture"],
    },
    gallery: [
      "/portfolio/Enscape_2025-09-08-12-44-22.jpg",
      "/portfolio/Enscape_2025-09-08-12-47-55.jpg",
      "/portfolio/Enscape_2025-09-08-13-24-16.jpg",
      "/portfolio/Enscape_2025-09-08-13-36-31.jpg",
      "/portfolio/Enscape_2024-11-19-16-09-42.png",
      "/portfolio/Enscape_2024-11-19-16-24-29.png",
      "/portfolio/Enscape_2024-11-19-16-52-50.png",
      "/portfolio/Enscape_2024-11-19-16-53-45.png",
      "/portfolio/Enscape_2024-11-19-17-14-26.png",
      "/portfolio/Enscape_2025-01-10-15-34-31.png",
      "/portfolio/Enscape_2025-01-13-19-03-50.png",
      "/portfolio/Enscape_2025-01-14-18-46-01.png",
      "/portfolio/Enscape_2025-01-22-18-44-08.png",
      "/portfolio/Enscape_2025-01-22-18-45-42.png",
      "/portfolio/Enscape_2025-01-22-18-46-37.png",
      "/portfolio/Enscape_2025-01-22-18-47-23.png",
      "/portfolio/Enscape_2025-01-23-12-37-12.png",
      "/portfolio/Enscape_2025-01-23-12-38-14.png",
      "/portfolio/Enscape_2025-01-23-12-38-45.png",
      "/portfolio/Enscape_2025-09-09-03-18-57.png",
      ],
  },

  {
    id: "10",
    title: "Italian Theme House",
    category: "residential",
    description: "Exclusive luxury villa with premium finishes and landscaped gardens.",
    image: "/portfolio/WSL_Photo - 1.jpg",
    details: {
      client: "Private Client",
      location: "Islamabad, Pakistan",
      year: "2023",
      area: "8,000 sq ft",
      services: ["Architecture", "Interior Design", "Landscape Architecture"],
    },
    gallery: [
      "/portfolio/WSL_Photo - 4.jpg",
      "/portfolio/CK_Photo - 5.jpg",
      ],
  },

]

export const testimonials = [
  {
    id: "1",
    name: "M Rizwan",
    rating: 5,
    text: "RIKSONS exceeded our expectations with their professionalism, creativity, and attention to detail. The project was completed on time and within budget, delivering exceptional results. Highly recommended!",
    project: "Modern Residential Complex",
  },
  {
    id: "2",
    name: "Waqas Mughal",
    rating: 5,
    text: "Designing my house interior from their team, good environment and knowledge full team. I am satisfy with their work.",
    project: "House Interior Design",
  },
  {
    id: "3",
    name: "Shaik Junaid",
    rating: 5,
    text: "I have done structure design from there company, I am very much satisfied with there service.",
    project: "House Structure Design",
  },
]

export const faqData = [
  {
    id: "1",
    question: "What services does Riksons Engineering provide?",
    answer:
      "We offer comprehensive architecture, engineering, and construction services including design, structural engineering, project management, and construction supervision for residential, commercial, and industrial projects.",
  },
  {
    id: "2",
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on scope and complexity. Residential projects typically take 6-12 months, while commercial and industrial projects may take 12-24 months. We provide detailed timelines during the planning phase.",
  },
  {
    id: "3",
    question: "Do you handle both design and construction?",
    answer:
      "Yes, we provide end-to-end services from initial design and engineering to construction management and project completion. This integrated approach ensures better quality control and coordination.",
  },
  {
    id: "4",
    question: "What areas do you serve?",
    answer:
      "We primarily serve clients across Pakistan, with major projects in Lahore, Karachi, Islamabad, and Faisalabad. We also consider projects in other regions based on scope and requirements.",
  },
  {
    id: "5",
    question: "How do you ensure quality in your projects?",
    answer:
      "We maintain strict quality standards through regular inspections, use of premium materials, experienced professionals, and adherence to international building codes and safety standards.",
  },
]
