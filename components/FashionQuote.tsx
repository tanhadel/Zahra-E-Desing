'use client'

import { motion } from 'framer-motion'
import { PiDressFill } from 'react-icons/pi'
import { urlFor } from '@/lib/sanity'

interface FashionQuoteProps {
  data?: {
    quoteBackgroundImage?: any
  }
}

export default function FashionQuote({ data }: FashionQuoteProps) {
  const backgroundImage = data?.quoteBackgroundImage?.url 
    ? data.quoteBackgroundImage.url
    : 'https://images.unsplash.com/photo-1558769132-cb1aea8f6024?q=80&w=2074'
  
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${backgroundImage}')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white max-w-4xl mx-auto"
        >
          <div className="mb-8 flex justify-center">
            <PiDressFill size={60} className="text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
            Every day is a fashion show & the world is your runway
          </h2>
          <p className="text-lg text-gray-200 mb-10 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec 
            ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary-400 text-white hover:bg-primary-500 transition-colors uppercase tracking-wider text-sm">
            <span>DISCOVER MORE</span>
            <span>→</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
