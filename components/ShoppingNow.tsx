'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ShoppingNow() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 max-w-7xl mx-auto">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[500px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071"
              alt="Fashion Shopping"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Center Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center text-center px-8 py-12 bg-gray-50"
          >
            <p className="font-serif italic text-3xl text-primary-400 mb-6">Shopping Now!</p>
            <h2 className="text-3xl md:text-4xl font-serif mb-8">
              Discover your personal fashion style
            </h2>
            <div className="w-16 h-0.5 bg-gray-300 mb-8" />
            <p className="text-gray-600 mb-10 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec 
              ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="px-8 py-3 bg-primary-400 text-white hover:bg-primary-500 transition-colors uppercase tracking-wider text-sm">
              DISCOVER MORE
            </button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative h-[500px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070"
              alt="Fashion Shopping"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
