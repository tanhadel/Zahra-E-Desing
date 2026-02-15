'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const categories = ['All', 'Bridal', 'Haute Couture', 'Ready to Wear', 'Evening Wear', 'Custom Design']

const projects = [
  {
    id: 1,
    title: 'Royal Wedding Collection',
    category: 'Bridal',
    year: '2025',
    description: 'Exquisite bridal gowns featuring delicate lace and timeless elegance',
    image: 'https://images.unsplash.com/photo-1594552072238-71926d26d9e6?q=80&w=800',
    details: {
      client: 'Private Commission',
      duration: '6 months',
      pieces: '12 custom pieces'
    }
  },
  {
    id: 2,
    title: 'Metropolitan Gala',
    category: 'Haute Couture',
    year: '2025',
    description: 'Avant-garde haute couture pieces showcased at prestigious fashion events',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800',
    details: {
      client: 'Fashion Week Stockholm',
      duration: '8 months',
      pieces: '20 unique designs'
    }
  },
  {
    id: 3,
    title: 'Summer Elegance',
    category: 'Ready to Wear',
    year: '2024',
    description: 'Light and airy summer collection with contemporary silhouettes',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800',
    details: {
      client: 'Retail Collection',
      duration: '4 months',
      pieces: '45 pieces'
    }
  },
  {
    id: 4,
    title: 'Midnight Glamour',
    category: 'Evening Wear',
    year: '2024',
    description: 'Sophisticated evening wear collection with luxurious fabrics',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800',
    details: {
      client: 'Private Collection',
      duration: '5 months',
      pieces: '15 exclusive pieces'
    }
  },
  {
    id: 5,
    title: 'Bespoke Suits Collection',
    category: 'Custom Design',
    year: '2024',
    description: 'Tailored suits with impeccable craftsmanship and modern details',
    image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=800',
    details: {
      client: 'Corporate Clients',
      duration: '3 months',
      pieces: '8 custom suits'
    }
  },
  {
    id: 6,
    title: 'Nordic Minimalism',
    category: 'Ready to Wear',
    year: '2023',
    description: 'Clean lines and neutral tones inspired by Scandinavian design',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800',
    details: {
      client: 'Retail Collection',
      duration: '4 months',
      pieces: '38 pieces'
    }
  },
  {
    id: 7,
    title: 'Red Carpet Dreams',
    category: 'Evening Wear',
    year: '2023',
    description: 'Show-stopping gowns designed for unforgettable moments',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800',
    details: {
      client: 'Celebrity Clients',
      duration: '7 months',
      pieces: '10 statement pieces'
    }
  },
  {
    id: 8,
    title: 'Heritage Reimagined',
    category: 'Haute Couture',
    year: '2023',
    description: 'Traditional craftsmanship meets contemporary design',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800',
    details: {
      client: 'Museum Exhibition',
      duration: '10 months',
      pieces: '14 art pieces'
    }
  },
  {
    id: 9,
    title: 'Winter Bride',
    category: 'Bridal',
    year: '2023',
    description: 'Romantic winter bridal collection with luxurious textures',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800',
    details: {
      client: 'Bridal Boutique',
      duration: '5 months',
      pieces: '16 bridal pieces'
    }
  }
]

export default function ProjectPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1558769132-cb1aea8f2f88?q=80&w=2000')`,
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 uppercase tracking-widest">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl">
              A showcase of our finest creations and collaborations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gradient-to-b from-[#F5EFE7] to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded transition-all duration-300 font-medium tracking-wider text-sm ${
                  selectedCategory === category
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative h-[400px] overflow-hidden rounded-lg mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'bg-opacity-70' : 'bg-opacity-0'
                  }`}>
                    <div className={`absolute inset-0 flex flex-col justify-center items-center text-white p-6 transition-opacity duration-300 ${
                      hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <div className="space-y-2 text-center">
                        <p className="text-sm tracking-wider">
                          <span className="font-bold">Client:</span> {project.details.client}
                        </p>
                        <p className="text-sm tracking-wider">
                          <span className="font-bold">Duration:</span> {project.details.duration}
                        </p>
                        <p className="text-sm tracking-wider">
                          <span className="font-bold">Pieces:</span> {project.details.pieces}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded text-xs font-bold tracking-wider">
                    {project.year}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-display font-bold tracking-wider">
                      {project.title}
                    </h3>
                    <span className="text-xs text-gray-500 tracking-wider">
                      {project.category.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-gray-600">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#E8DDD3] to-[#F5EFE7]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 tracking-wider">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Let&apos;s collaborate to bring your fashion vision to life. From concept to creation, 
              we&apos;ll work together to craft something truly extraordinary.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded hover:bg-gray-800 transition-colors tracking-wider font-medium"
            >
              START A PROJECT
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
