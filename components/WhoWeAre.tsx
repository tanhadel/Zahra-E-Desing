'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiUser, FiBriefcase, FiTrendingUp } from 'react-icons/fi'
import { PiDressFill } from 'react-icons/pi'

export default function WhoWeAre() {
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="font-serif italic text-3xl text-gray-500 mb-4">Who we are</p>
            <h2 className="text-4xl md:text-5xl font-serif font-normal mb-8 leading-tight">
              Expert wardrobe styling from the industry's top stylists.
            </h2>
            <div className="w-16 h-0.5 bg-gray-300 mb-8" />
            <p className="text-gray-700 mb-6 leading-relaxed">
              Ante metus himenaeos eget feugiat commodo nostra. Id felis etiam erat turpis porta eros nunc 
              consequat primis volutpat nullam. Fermentum odio cras maximus gravida aliquet congue.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary-400 text-white hover:bg-primary-500 transition-colors rounded-full">
              <span>DISCOVER MORE</span>
              <span>→</span>
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[600px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071"
              alt="Fashion Designer"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6 text-primary-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">{feature.title}</h3>
              <div className="w-12 h-0.5 bg-gray-300 mb-4" />
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
