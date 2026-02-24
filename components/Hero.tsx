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
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10 z-5" />

      {/* Content Box */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-[#D4C5B0]/50 backdrop-blur-sm px-12 py-8 max-w-3xl mx-4 text-center shadow-lg mt-64"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4 leading-tight">
          Make people fall in love with your clothes.
        </h1>
        <p className="text-white text-sm md:text-base mb-6 max-w-xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <Link 
          href="/collections"
          className="inline-block px-9 py-3.5 bg-[#B89F86]/80 text-white text-xs font-medium tracking-widest hover:bg-[#A38A6F] transition-colors uppercase"
        >
          EXPLORE THE COLLECTIONS
        </Link>
      </motion.div>
    </section>
  )
}
