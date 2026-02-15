'use client'

import { motion } from 'framer-motion'
import { FiAward, FiStar, FiTrendingUp } from 'react-icons/fi'

const awards = [
  {
    year: '2025',
    title: 'Best Couture Designer',
    organization: 'Nordic Fashion Awards',
    icon: FiAward,
    color: 'text-yellow-500'
  },
  {
    year: '2024',
    title: 'Excellence in Bridal Design',
    organization: 'Scandinavian Wedding Excellence',
    icon: FiStar,
    color: 'text-blue-500'
  },
  {
    year: '2024',
    title: 'Sustainable Fashion Award',
    organization: 'Green Fashion Initiative',
    icon: FiTrendingUp,
    color: 'text-green-500'
  },
  {
    year: '2023',
    title: 'Designer of the Year',
    organization: 'Stockholm Fashion Week',
    icon: FiAward,
    color: 'text-purple-500'
  },
  {
    year: '2023',
    title: 'Innovation in Fashion',
    organization: 'European Design Council',
    icon: FiStar,
    color: 'text-pink-500'
  },
  {
    year: '2022',
    title: 'Rising Star Award',
    organization: 'International Fashion Summit',
    icon: FiTrendingUp,
    color: 'text-orange-500'
  }
]

const recognitions = [
  'Featured in Vogue Scandinavia - "Designer to Watch"',
  'Harper\'s Bazaar - "Top 10 Bridal Designers"',
  'Elle Magazine - "Sustainable Fashion Pioneer"',
  'Marie Claire - "Haute Couture Excellence"'
]

export default function AwardsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#F5EFE7] to-white">
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
            Awards & Recognition
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Honored for excellence, innovation, and dedication to the art of fashion
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {awards.map((award, index) => {
            const Icon = award.icon
            return (
              <motion.div
                key={`${award.year}-${award.title}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center ${award.color}`}>
                    <Icon size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-primary-400 mb-2">
                      {award.year}
                    </div>
                    <h3 className="text-xl font-display font-bold mb-2 tracking-wider">
                      {award.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {award.organization}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Press Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-12 rounded-2xl">
            <h3 className="text-3xl font-display font-bold mb-8 text-center tracking-wider">
              Press Recognition
            </h3>
            <div className="space-y-4">
              {recognitions.map((recognition, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 pb-4 border-b border-white/10 last:border-0"
                >
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary-400" />
                  <p className="text-white/90">{recognition}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <div className="text-5xl text-primary-400 mb-4">&ldquo;</div>
          <p className="text-xl italic text-gray-700 leading-relaxed">
            Every award is a testament to our team&apos;s dedication, our clients&apos; trust, 
            and our unwavering commitment to creating fashion that transcends trends 
            and touches hearts.
          </p>
          <p className="mt-6 font-bold text-gray-900">— Zehra Ebraimi</p>
          <p className="text-gray-600 text-sm">Founder & Creative Director</p>
        </motion.div>
      </div>
    </section>
  )
}
