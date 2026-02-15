'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiHome, FiMail, FiArrowRight } from 'react-icons/fi'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8DDD3] via-[#F5EFE7] to-white flex items-center justify-center px-4">
      <div className="max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 404 Number */}
          <div className="mb-8">
            <motion.h1
              className="text-[150px] md:text-[250px] font-display font-bold text-gray-200 leading-none"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              404
            </motion.h1>
          </div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-widest uppercase text-gray-900">
              Page Not Found
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              Oops! The page you&apos;re looking for seems to have walked the runway right out of here.
            </p>
            <p className="text-gray-600">
              Don&apos;t worry, even the best fashion designs have a few loose threads. 
              Let&apos;s get you back on track.
            </p>
          </motion.div>

          {/* Navigation Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded hover:bg-gray-800 transition-colors tracking-wider font-medium"
            >
              <FiHome size={20} />
              GO HOME
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-colors tracking-wider font-medium"
            >
              <FiMail size={20} />
              CONTACT US
            </Link>
          </motion.div>

          {/* Popular Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="border-t border-gray-300 pt-12"
          >
            <h3 className="text-xl font-display font-bold mb-6 tracking-wider uppercase text-gray-900">
              Popular Pages
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <Link
                href="/about"
                className="flex items-center justify-center gap-2 text-gray-700 hover:text-primary-400 transition-colors py-2 group"
              >
                <span className="text-sm font-medium tracking-wider">ABOUT US</span>
                <FiArrowRight 
                  size={16} 
                  className="opacity-0 group-hover:opacity-100 transition-opacity" 
                />
              </Link>
              <Link
                href="/collections"
                className="flex items-center justify-center gap-2 text-gray-700 hover:text-primary-400 transition-colors py-2 group"
              >
                <span className="text-sm font-medium tracking-wider">COLLECTIONS</span>
                <FiArrowRight 
                  size={16} 
                  className="opacity-0 group-hover:opacity-100 transition-opacity" 
                />
              </Link>
              <Link
                href="/lookbook"
                className="flex items-center justify-center gap-2 text-gray-700 hover:text-primary-400 transition-colors py-2 group"
              >
                <span className="text-sm font-medium tracking-wider">LOOKBOOK</span>
                <FiArrowRight 
                  size={16} 
                  className="opacity-0 group-hover:opacity-100 transition-opacity" 
                />
              </Link>
              <Link
                href="/blog"
                className="flex items-center justify-center gap-2 text-gray-700 hover:text-primary-400 transition-colors py-2 group"
              >
                <span className="text-sm font-medium tracking-wider">BLOG</span>
                <FiArrowRight 
                  size={16} 
                  className="opacity-0 group-hover:opacity-100 transition-opacity" 
                />
              </Link>
            </div>
          </motion.div>

          {/* Decorative Fashion Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 pt-8 border-t border-gray-300"
          >
            <p className="text-gray-500 italic text-sm">
              &ldquo;Fashion is about dreaming and making other people dream.&rdquo; - Donatella Versace
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
