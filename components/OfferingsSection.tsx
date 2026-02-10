'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function OfferingsSection() {
  const offerings = [
    {
      title: 'Design for Personal',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit dolor',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2020',
    },
    {
      title: 'Mass Production',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit dolor',
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea8f6024?q=80&w=2074',
    },
    {
      title: 'Special Event Styling',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit dolor',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070',
    },
  ]

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Offering a unique and stylish perspective on fashion.
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec 
            ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-80 mb-6 overflow-hidden">
                <Image
                  src={offering.image}
                  alt={offering.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-white text-gray-900 p-8 text-center">
                <h3 className="text-2xl font-serif font-semibold mb-3">{offering.title}</h3>
                <p className="text-gray-600">{offering.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
