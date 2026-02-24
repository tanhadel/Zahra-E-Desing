'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { urlFor } from '@/lib/sanity'

interface TestimonialsProps {
  data?: {
    testimonials?: Array<{
      name: string
      role: string
      quote: string
      image: any
    }>
  }
}

export default function Testimonials({ data }: TestimonialsProps) {
  const defaultTestimonials = [
    {
      name: 'Emma Rodriguez',
      role: 'Fashion Enthusiast',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070',
      quote: "I can't express how much this project has enriched my love for fashion. The runway reviews and fashion news keep me updated, and the community has connected me with fellow fashion enthusiasts.",
    },
    {
      name: 'Michael Sullivan',
      role: 'Fashion Entrepreneur',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070',
      quote: 'As a fashion entrepreneur, this project has been invaluable. The trend forecasts and industry insights provided have kept me ahead of the curve. Thank you for empowering my business!',
    },
    {
      name: 'Olivia Thompson',
      role: 'Fashion Blogger',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071',
      quote: 'This project has become my go-to source for fashion inspiration. The curated collections and style guides have elevated my blog content and captivated my audience. Love it!',
    },
  ]
  
  const testimonials = data?.testimonials?.length 
    ? data.testimonials.map(t => ({
        ...t,
        image: t.image?.url || urlFor(t.image).url(),
      }))
    : defaultTestimonials

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true)
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [isAnimating, testimonials.length])

  const handleDotClick = (index: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex(index)
  }

  // Create array with current and next items for seamless loop
  const getDisplayItems = () => {
    const items = []
    for (let i = 0; i < 4; i++) {
      items.push(testimonials[(currentIndex + i) % testimonials.length])
    }
    return items
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-serif italic text-3xl text-gray-500 mb-4">Testimonial</p>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Customer Feedback</h2>
          <div className="flex justify-center gap-1 text-2xl text-yellow-500 mb-4">
            {[...Array(5)].map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
        </motion.div>

        <div className="relative max-w-6xl mx-auto mb-12 overflow-hidden">
          <motion.div
            key={currentIndex}
            className="flex gap-8"
            initial={{ x: 0 }}
            animate={{ x: '-33.333%' }}
            transition={{
              duration: 0.6,
              ease: 'easeInOut',
              onComplete: () => setIsAnimating(false)
            }}
          >
            {getDisplayItems().map((testimonial, index) => (
              <div key={`${currentIndex}-${index}`} className="flex-shrink-0 w-full md:w-[calc(33.333%-1.333rem)] bg-white p-8 text-center shadow-sm">
                <div className="relative w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <h3 className="font-serif font-semibold text-lg mb-1">{testimonial.name}</h3>
                <p className="text-gray-500 italic text-sm">{testimonial.role}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              disabled={isAnimating}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#C8A882] w-8' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
