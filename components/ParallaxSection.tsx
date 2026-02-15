'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface ParallaxSectionProps {
  imageUrl?: string
  title?: string
  subtitle?: string
  buttonText?: string
  buttonLink?: string
}

export default function ParallaxSection({
  imageUrl = 'https://images.unsplash.com/photo-1558769132-cb1aea8f2f88?q=80&w=2000',
  title = 'Timeless Elegance Awaits',
  subtitle = 'Discover the art of bespoke fashion design',
  buttonText = 'EXPLORE COLLECTIONS',
  buttonLink = '/collections'
}: ParallaxSectionProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])

  return (
    <section ref={ref} className="relative h-[70vh] overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[120%]"
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('${imageUrl}')`,
            backgroundAttachment: 'fixed'
          }}
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex items-center justify-center"
      >
        <div className="text-center text-white max-w-4xl px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-widest uppercase"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            {subtitle}
          </motion.p>
          <motion.a
            href={buttonLink}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-block bg-white text-gray-900 px-8 py-4 rounded hover:bg-gray-100 transition-colors tracking-wider font-medium"
          >
            {buttonText}
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}
