'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

interface CounterProps {
  from?: number
  to: number
  duration?: number
}

function Counter({ from = 0, to, duration = 2 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(from)
  const rounded = useTransform(motionValue, (latest) => Math.round(latest))
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      animate(motionValue, to, { duration })
    }
  }, [motionValue, to, duration, isInView])

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toLocaleString()
      }
    })
    return unsubscribe
  }, [rounded])

  return <span ref={ref}>{from}</span>
}

const statistics = [
  {
    value: 500,
    suffix: '+',
    label: 'Happy Clients',
    icon: '👥'
  },
  {
    value: 1500,
    suffix: '+',
    label: 'Custom Pieces Created',
    icon: '✨'
  },
  {
    value: 15,
    suffix: '+',
    label: 'Years of Excellence',
    icon: '🏆'
  },
  {
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    icon: '⭐'
  }
]

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}/>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-widest uppercase">
            Our Achievements
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Numbers that reflect our commitment to excellence and passion for fashion
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{stat.icon}</div>

              {/* Number */}
              <div className="text-4xl md:text-5xl font-display font-bold mb-2">
                <Counter to={stat.value} />
                <span>{stat.suffix}</span>
              </div>

              {/* Label */}
              <div className="text-sm md:text-base text-white/80 tracking-wider uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-white/70 max-w-3xl mx-auto leading-relaxed">
            These numbers represent more than just statistics – they represent dreams fulfilled, 
            confidence restored, and moments made unforgettable through the art of fashion.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
