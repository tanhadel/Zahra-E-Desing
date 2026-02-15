'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface CTABannerProps {
  title?: string
  subtitle?: string
  buttonText?: string
  buttonLink?: string
  variant?: 'primary' | 'secondary' | 'dark'
}

export default function CTABanner({
  title = 'Ready to Create Something Extraordinary?',
  subtitle = 'Let\'s bring your fashion vision to life with our expert design services',
  buttonText = 'START YOUR PROJECT',
  buttonLink = '/contact',
  variant = 'primary'
}: CTABannerProps) {
  const backgrounds = {
    primary: 'bg-gradient-to-r from-primary-400 to-primary-500',
    secondary: 'bg-gradient-to-r from-[#E8DDD3] to-[#F5EFE7]',
    dark: 'bg-gradient-to-r from-gray-900 to-gray-800'
  }

  const textColors = {
    primary: 'text-white',
    secondary: 'text-gray-900',
    dark: 'text-white'
  }

  const buttonStyles = {
    primary: 'bg-white text-primary-400 hover:bg-gray-100',
    secondary: 'bg-gray-900 text-white hover:bg-gray-800',
    dark: 'bg-white text-gray-900 hover:bg-gray-100'
  }

  return (
    <section className={`py-20 ${backgrounds[variant]}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className={`text-3xl md:text-5xl font-display font-bold mb-6 tracking-wider ${textColors[variant]}`}>
            {title}
          </h2>
          <p className={`text-lg md:text-xl mb-8 ${textColors[variant]} ${variant === 'secondary' ? 'text-gray-700' : 'text-white/90'}`}>
            {subtitle}
          </p>
          <Link
            href={buttonLink}
            className={`inline-block px-8 py-4 rounded transition-all duration-300 font-medium tracking-wider shadow-lg hover:shadow-xl ${buttonStyles[variant]}`}
          >
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
