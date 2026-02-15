'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiInstagram, FiHeart, FiMessageCircle } from 'react-icons/fi'

const instagramPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600',
    likes: 1234,
    comments: 45,
    caption: 'New collection preview ✨'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=600',
    likes: 2156,
    comments: 78,
    caption: 'Behind the scenes magic'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600',
    likes: 1876,
    comments: 52,
    caption: 'Timeless elegance 🖤'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600',
    likes: 2943,
    comments: 91,
    caption: 'Spring collection is here!'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=600',
    likes: 1567,
    comments: 34,
    caption: 'Couture dreams come true'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=600',
    likes: 2234,
    comments: 67,
    caption: 'Styled to perfection'
  }
]

export default function InstagramFeed() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-widest uppercase">
            Follow Our Journey
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Stay inspired with our latest designs and behind-the-scenes moments
          </p>
          <a
            href="https://instagram.com/glamourista"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-500 transition-colors font-medium tracking-wider"
          >
            <FiInstagram size={24} />
            <span>@glamourista</span>
          </a>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://instagram.com/glamourista"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            >
              <Image
                src={post.image}
                alt={post.caption}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <FiHeart size={20} />
                    <span className="font-medium">{post.likes.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiMessageCircle size={20} />
                    <span className="font-medium">{post.comments}</span>
                  </div>
                </div>
              </div>

              {/* Instagram Icon */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FiInstagram className="text-white" size={24} />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Follow CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com/glamourista"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 font-medium tracking-wider"
          >
            FOLLOW US ON INSTAGRAM
          </a>
        </motion.div>
      </div>
    </section>
  )
}
