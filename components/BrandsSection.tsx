'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const brands = [
  {
    name: 'Vogue',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Vogue_logo.svg/320px-Vogue_logo.svg.png',
    width: 120,
    height: 40
  },
  {
    name: 'Elle',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Elle_magazine_logo.svg/320px-Elle_magazine_logo.svg.png',
    width: 100,
    height: 40
  },
  {
    name: 'Harper\'s Bazaar',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Harpers_Bazaar_logo.svg/320px-Harpers_Bazaar_logo.svg.png',
    width: 140,
    height: 35
  },
  {
    name: 'Marie Claire',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Marie_Claire_Logo.svg/320px-Marie_Claire_Logo.svg.png',
    width: 130,
    height: 35
  },
  {
    name: 'Cosmopolitan',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Cosmopolitan_logo.svg/320px-Cosmopolitan_logo.svg.png',
    width: 150,
    height: 30
  },
  {
    name: 'Glamour',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Glamour_logo.svg/320px-Glamour_logo.svg.png',
    width: 140,
    height: 35
  }
]

const stats = [
  { number: '500+', label: 'Happy Clients' },
  { number: '1500+', label: 'Custom Pieces' },
  { number: '15+', label: 'Years Experience' },
  { number: '50+', label: 'Fashion Awards' }
]

export default function BrandsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-widest uppercase">
            As Featured In
          </h2>
          <p className="text-lg text-gray-600">
            Our work has been recognized by leading fashion publications worldwide
          </p>
        </motion.div>

        {/* Brands Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center mb-20 grayscale hover:grayscale-0 transition-all duration-500"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300"
            >
              <div className="relative" style={{ width: brand.width, height: brand.height }}>
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <div className="mt-20 py-16 bg-gradient-to-r from-[#E8DDD3] via-[#F5EFE7] to-[#E8DDD3] rounded-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-700 tracking-wider uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Clients Testimonial Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 max-w-4xl mx-auto text-center"
        >
          <div className="text-6xl text-primary-400 mb-4">&ldquo;</div>
          <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-6">
            Working with leading fashion houses, celebrities, and discerning clients worldwide, 
            we&apos;ve established ourselves as a trusted name in haute couture and custom design.
          </p>
          <div className="text-gray-600 tracking-wider">
            — Featured in over 30 international publications
          </div>
        </motion.div>
      </div>
    </section>
  )
}
