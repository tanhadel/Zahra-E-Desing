'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function FeaturedCollections() {
  const collections = [
    {
      title: 'Snow Queen Bridal Collection.',
      description: 'Ut risus venenatis rhoncus libero dolor cras potenti erat efficitur elementum porttitor.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070',
    },
    {
      title: 'Winter Wonderland Collection.',
      description: 'Ut risus venenatis rhoncus libero dolor cras potenti erat efficitur elementum porttitor',
      image: 'https://images.unsplash.com/photo-1494578379344-d6c710782a3d?q=80&w=2070',
    },
    {
      title: 'Trendsetting Winter Accessories.',
      description: 'Ut risus venenatis rhoncus libero dolor cras potenti erat efficitur elementum porttitor',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2088',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-96 overflow-hidden mb-6">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-gray-50 p-8 text-center">
                <h3 className="text-2xl font-serif font-semibold mb-3">{collection.title}</h3>
                <p className="text-gray-600 mb-6">{collection.description}</p>
                <button className="px-8 py-3 bg-primary-400 text-white hover:bg-primary-500 transition-colors uppercase tracking-wider text-sm">
                  LEARN MORE
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
