'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { client, queries, urlFor } from '@/lib/sanity'

const categories = ['All', 'Bridal', 'Haute Couture', 'Ready to Wear', 'Evening Wear', 'Custom Design']

interface Project {
  _id: string
  title: string
  slug: {
    current: string
  }
  category: string
  year: string
  description: string
  mainImage: any
  client?: string
  duration?: string
  pieces?: string
}

export default function ProjectPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await client.fetch(queries.allProjects)
        setProjects(data)
      } catch (error) {
        console.error('Error fetching projects:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

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
          {loading ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">Loading projects...</p>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">
                Inga projekt hittades. Lägg till projekt i Sanity Studio.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredProject(project._id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative h-[400px] overflow-hidden rounded-lg mb-4">
                    {project.mainImage && (
                      <Image
                        src={urlFor(project.mainImage).width(800).height(1000).url()}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    )}
                    <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                      hoveredProject === project._id ? 'bg-opacity-70' : 'bg-opacity-0'
                    }`}>
                      <div className={`absolute inset-0 flex flex-col justify-center items-center text-white p-6 transition-opacity duration-300 ${
                        hoveredProject === project._id ? 'opacity-100' : 'opacity-0'
                      }`}>
                        <div className="space-y-2 text-center">
                          {project.client && (
                            <p className="text-sm tracking-wider">
                              <span className="font-bold">Client:</span> {project.client}
                            </p>
                          )}
                          {project.duration && (
                            <p className="text-sm tracking-wider">
                              <span className="font-bold">Duration:</span> {project.duration}
                            </p>
                          )}
                          {project.pieces && (
                            <p className="text-sm tracking-wider">
                              <span className="font-bold">Pieces:</span> {project.pieces}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    {project.year && (
                      <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded text-xs font-bold tracking-wider">
                        {project.year}
                      </div>
                    )}
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
                    {project.description && (
                      <p className="text-gray-600">
                        {project.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
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
