'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200',
    title: 'Elegant Evening Gown',
    category: 'Evening Wear'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200',
    title: 'Bridal Couture',
    category: 'Bridal'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200',
    title: 'Summer Collection',
    category: 'Ready to Wear'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200',
    title: 'Haute Couture',
    category: 'Couture'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1200',
    title: 'Designer Collection',
    category: 'Ready to Wear'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200',
    title: 'Fashion Forward',
    category: 'Evening Wear'
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1200',
    title: 'Classic Elegance',
    category: 'Couture'
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1200',
    title: 'Modern Minimalism',
    category: 'Ready to Wear'
  }
]

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1)
    }
  }

  return (
    <>
      <section className="py-20 bg-white">
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
              Portfolio Gallery
            </h2>
            <p className="text-lg text-gray-600">
              A curated selection of our finest creations
            </p>
          </motion.div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative cursor-pointer overflow-hidden rounded-lg ${
                  index % 3 === 0 ? 'md:row-span-2' : ''
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <div className={`relative ${index % 3 === 0 ? 'h-[600px]' : 'h-[290px]'}`}>
                  <Image
                    src={image.url}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex flex-col items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center px-4">
                      <h3 className="text-xl font-display font-bold mb-2 tracking-wider">
                        {image.title}
                      </h3>
                      <p className="text-sm tracking-widest uppercase">
                        {image.category}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-[200] bg-black bg-opacity-95 flex items-center justify-center p-4">
          {/* Close button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-primary-400 transition-colors z-10"
            aria-label="Close"
          >
            <FiX size={32} />
          </button>

          {/* Previous button */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 text-white hover:text-primary-400 transition-colors z-10"
            aria-label="Previous"
          >
            <FiChevronLeft size={48} />
          </button>

          {/* Next button */}
          <button
            onClick={handleNext}
            className="absolute right-4 text-white hover:text-primary-400 transition-colors z-10"
            aria-label="Next"
          >
            <FiChevronRight size={48} />
          </button>

          {/* Image */}
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full">
            <Image
              src={galleryImages[selectedImage].url}
              alt={galleryImages[selectedImage].title}
              fill
              className="object-contain"
            />
          </div>

          {/* Image Info */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
            <h3 className="text-2xl font-display font-bold mb-2 tracking-wider">
              {galleryImages[selectedImage].title}
            </h3>
            <p className="text-sm tracking-widest uppercase text-primary-400">
              {galleryImages[selectedImage].category}
            </p>
            <p className="text-sm mt-2 text-white/70">
              {selectedImage + 1} / {galleryImages.length}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
