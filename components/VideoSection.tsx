'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiPlay } from 'react-icons/fi'

interface VideoSectionProps {
  title?: string
  subtitle?: string
  videoUrl?: string
  thumbnailUrl?: string
}

export default function VideoSection({
  title = 'Experience Our Craftsmanship',
  subtitle = 'Watch how we transform fabric into a masterpiece',
  videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  thumbnailUrl = 'https://images.unsplash.com/photo-1558769132-cb1aea8f2f88?q=80&w=2000'
}: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F5EFE7]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-widest uppercase">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            {!isPlaying ? (
              <>
                {/* Thumbnail */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${thumbnailUrl}')` }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40" />
                </div>

                {/* Play Button */}
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center group cursor-pointer"
                  aria-label="Play video"
                >
                  <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                    <FiPlay className="text-primary-400 ml-1" size={40} />
                  </div>
                </button>

                {/* Video Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-white text-2xl font-display font-bold tracking-wider">
                    Behind The Seams: Our Design Process
                  </h3>
                  <p className="text-white/80 mt-2">
                    Discover the artistry and precision behind every creation
                  </p>
                </div>
              </>
            ) : (
              /* YouTube Embed */
              <iframe
                src={`${videoUrl}?autoplay=1&rel=0`}
                title="Fashion Design Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            )}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            Every piece we create is a labor of love, crafted with precision and passion
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-700">
            <div>
              <span className="font-bold">👗</span> Handcrafted Excellence
            </div>
            <div>
              <span className="font-bold">✂️</span> Premium Materials
            </div>
            <div>
              <span className="font-bold">⭐</span> Award-Winning Design
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
