'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiUser, FiBriefcase, FiTrendingUp } from 'react-icons/fi'
import { PiDressFill } from 'react-icons/pi'
import { urlFor } from '@/lib/sanity'

interface WhoWeAreProps {
  data?: {
    whoWeAreImage?: any
  }
}

export default function WhoWeAre({ data }: WhoWeAreProps) {
  const imageUrl = data?.whoWeAreImage?.url 
    ? data.whoWeAreImage.url 
    : 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2000'
  const features = [
    {
      icon: <FiUser size={48} />,
      title: 'Personalized Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
    {
      icon: <FiBriefcase size={48} />,
      title: 'Collaborative Approach',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
    {
      icon: <PiDressFill size={48} />,
      title: 'Trendsetting Designs',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
    {
      icon: <PiDressFill size={48} />,
      title: 'Passion for Fashion',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
  ]

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Top Section - Two Columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto"
        >
          {/* Left Column - Headings */}
          <div>
            <p className="font-serif italic text-3xl text-gray-500 mb-4">Who we are</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal mb-6 leading-tight">
              Expert wardrobe styling from the industry&apos;s top stylists.
            </h2>
            <div className="w-16 h-0.5 bg-gray-300" />
          </div>

          {/* Right Column - Description and CTA */}
          <div className="flex flex-col justify-center">
            <p className="text-gray-700 mb-6 leading-relaxed">
              Ante metus himenaeos eget feugiat commodo nostra. Id felis etiam erat turpis porta eros nunc 
              consequat primis volutpat nullam. Fermentum odio cras maximus gravida aliquet congue.
            </p>
            <div>
              <button className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 transition-colors group">
                <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
                <span className="font-medium">Discover more</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Features Section - Three Columns (2-1-2 Pattern) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {/* Left Column - Two Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center md:text-left">
              <div className="mb-4 text-primary-500 flex justify-center md:justify-start">
                {features[0].icon}
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">{features[0].title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {features[0].description}
              </p>
            </div>

            <div className="text-center md:text-left">
              <div className="mb-4 text-primary-500 flex justify-center md:justify-start">
                {features[2].icon}
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">{features[2].title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {features[2].description}
              </p>
            </div>
          </motion.div>

          {/* Center Column - Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-[500px] md:h-[600px]"
          >
            <Image
              src={imageUrl}
              alt="Fashion Designer"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right Column - Two Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center md:text-left">
              <div className="mb-4 text-primary-500 flex justify-center md:justify-start">
                {features[1].icon}
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">{features[1].title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {features[1].description}
              </p>
            </div>

            <div className="text-center md:text-left">
              <div className="mb-4 text-primary-500 flex justify-center md:justify-start">
                {features[3].icon}
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">{features[3].title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {features[3].description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none"
      >
        <span className="text-6xl md:text-7xl lg:text-8xl font-serif text-gray-200/30 whitespace-nowrap">
          Fashion Designer
        </span>
      </motion.div>
    </section>
  )
}
