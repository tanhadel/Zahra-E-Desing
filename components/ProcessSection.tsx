'use client'

import { motion } from 'framer-motion'
import { FiUsers, FiPenTool, FiScissors, FiStar } from 'react-icons/fi'

const steps = [
  {
    icon: FiUsers,
    number: '01',
    title: 'Consultation',
    description: 'We begin with a detailed consultation to understand your vision, style preferences, and specific requirements for your custom piece.',
    duration: '30-60 mins'
  },
  {
    icon: FiPenTool,
    number: '02',
    title: 'Design & Sketch',
    description: 'Our designers create custom sketches and present fabric options, ensuring every detail aligns with your expectations.',
    duration: '1-2 weeks'
  },
  {
    icon: FiScissors,
    number: '03',
    title: 'Creation & Fitting',
    description: 'Expert artisans craft your garment with meticulous attention to detail. Multiple fittings ensure a perfect fit.',
    duration: '4-8 weeks'
  },
  {
    icon: FiStar,
    number: '04',
    title: 'Final Delivery',
    description: 'Your completed masterpiece is delivered, pressed to perfection and ready to make you shine at your special occasion.',
    duration: '1 week'
  }
]

export default function ProcessSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F5EFE7]">
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
            Our Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From concept to creation, we guide you through every step of bringing your fashion vision to life
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-block bg-primary-400 text-white px-4 py-2 rounded-full text-sm font-bold tracking-wider mb-4">
                    STEP {step.number}
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-4 tracking-wider">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-primary-400 font-medium">
                    <span className="text-sm tracking-wider">Duration:</span>
                    <span className="text-sm font-bold">{step.duration}</span>
                  </div>
                </div>

                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center shadow-2xl">
                      <Icon className="text-white" size={60} />
                    </div>
                    {/* Connecting Line (except for last item) */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-primary-400 to-transparent" />
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-700 mb-6">
            Ready to start your custom fashion journey?
          </p>
          <a
            href="/contact"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded hover:bg-gray-800 transition-colors tracking-wider font-medium"
          >
            SCHEDULE A CONSULTATION
          </a>
        </motion.div>
      </div>
    </section>
  )
}
