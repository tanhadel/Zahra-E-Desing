'use client'

import { motion } from 'framer-motion'
import { FiBookOpen, FiShoppingCart } from 'react-icons/fi'
import { PiDressFill } from 'react-icons/pi'
import { BsBookmark } from 'react-icons/bs'

export default function ServicesSection() {
  const services = [
    {
      icon: <FiBookOpen size={40} />,
      title: 'Design Consultation',
      description: 'Rhoncus facilisis sodales fringilla semper eget volutpat condimentum cubilia sagittis',
    },
    {
      icon: <PiDressFill size={40} />,
      title: 'Custom Design',
      description: 'Rhoncus facilisis sodales fringilla semper eget volutpat condimentum cubilia sagittis',
    },
    {
      icon: <FiShoppingCart size={40} />,
      title: 'Mass Production',
      description: 'Rhoncus facilisis sodales fringilla semper eget volutpat condimentum cubilia sagittis',
    },
    {
      icon: <PiDressFill size={40} />,
      title: 'Special Event Styling',
      description: 'Rhoncus facilisis sodales fringilla semper eget volutpat condimentum cubilia sagittis',
    },
    {
      icon: <PiDressFill size={40} />,
      title: 'Collection Development',
      description: 'Rhoncus facilisis sodales fringilla semper eget volutpat condimentum cubilia sagittis',
    },
    {
      icon: <FiShoppingCart size={40} />,
      title: 'Personal Shopping',
      description: 'Rhoncus facilisis sodales fringilla semper eget volutpat condimentum cubilia sagittis',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-serif italic text-3xl text-gray-500 mb-4">What we offer</p>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Let your dairies be a reflection of your unique style
          </h2>
          <div className="w-16 h-0.5 bg-gray-300 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-primary-300 mb-6 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
