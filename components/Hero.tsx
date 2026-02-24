'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { urlFor } from '@/lib/sanity'

interface HeroProps {
  data?: {
    heroTitle?: string
    heroSubtitle?: string
    heroImages?: any[]
  }
}

const defaultSlides = [
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600',
  'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=600',
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600',
  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600',
]

export default function Hero({ data }: HeroProps) {
  const slides = data?.heroImages?.length 
    ? data.heroImages.map(img => img.url || urlFor(img).url()) 
    : defaultSlides
  
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024) // lg breakpoint
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true)
        setCurrentIndex((prev) => (prev + 1) % slides.length)
      }
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [isAnimating])

  // Get images for display (5 images: current + 4 next for seamless loop)
  const getDisplayImages = () => {
    const images = []
    for (let i = 0; i < 5; i++) {
      images.push(slides[(currentIndex + i) % slides.length])
    }
    return images
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background - Sliding Image Grid */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          key={currentIndex}
          className="flex h-full gap-2"
          initial={{ x: 0 }}
          animate={{ x: isDesktop ? '-25%' : '-100%' }}
          transition={{
            duration: 0.8,
            ease: 'easeInOut',
            onComplete: () => setIsAnimating(false)
          }}
        >
          {getDisplayImages().map((image, index) => (
            <div
              key={`${currentIndex}-${index}`}
              className="flex-shrink-0 w-full lg:w-1/4 h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${image}')` }}
            />
          ))}
        </motion.div>
      </div>

      {/* Semi-transparent Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40 z-5" />

      {/* Content Box */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-white/90 backdrop-blur-md px-16 py-12 max-w-4xl mx-4 text-center shadow-2xl border border-primary-200"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-gray-900 mb-6 leading-tight tracking-tight">
          {data?.heroTitle || 'Make people fall in love with your clothes.'}
        </h1>
        <p className="text-gray-700 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed font-light">
          {data?.heroSubtitle || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'}
        </p>
        <Link 
          href="/collections"
          className="inline-block px-10 py-4 bg-gray-900 text-white text-xs font-semibold tracking-widest hover:bg-primary-500 transition-all duration-300 uppercase shadow-lg hover:shadow-xl"
        >
          EXPLORE THE COLLECTIONS
        </Link>
      </motion.div>
    </section>
  )
}
