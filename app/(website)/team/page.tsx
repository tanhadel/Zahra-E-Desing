'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { teamMembers } from '@/data/teamMembers'

const values = [
  {
    title: 'Craftsmanship',
    description: 'Every stitch, every detail is executed with precision and care.',
    icon: '✨'
  },
  {
    title: 'Innovation',
    description: 'We blend traditional techniques with contemporary design thinking.',
    icon: '💡'
  },
  {
    title: 'Sustainability',
    description: 'Committed to ethical practices and sustainable fashion.',
    icon: '🌿'
  },
  {
    title: 'Excellence',
    description: 'We never compromise on quality or attention to detail.',
    icon: '⭐'
  }
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000')`,
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 uppercase tracking-widest">
              Our Team
            </h1>
            <p className="text-xl md:text-2xl">
              Meet the talented individuals behind Glamourista
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F5EFE7]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 tracking-wider">
                Passionate About Fashion
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team is a collective of passionate designers, skilled artisans, and creative visionaries 
                who share a common goal: to create fashion that inspires and empowers. Together, we bring 
                decades of experience and a fresh perspective to every project we undertake.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20 bg-[#F5EFE7]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-[400px] mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Social Links Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={member.social.instagram}
                        className="bg-white p-3 rounded-full hover:bg-primary-400 hover:text-white transition-colors"
                        aria-label="Instagram"
                      >
                        <FaInstagram size={20} />
                      </a>
                      <a
                        href={member.social.linkedin}
                        className="bg-white p-3 rounded-full hover:bg-primary-400 hover:text-white transition-colors"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedinIn size={20} />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="bg-white p-3 rounded-full hover:bg-primary-400 hover:text-white transition-colors"
                        aria-label="Twitter"
                      >
                        <FaTwitter size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-display font-bold mb-2 tracking-wider">
                    {member.name}
                  </h3>
                  <p className="text-primary-400 font-medium tracking-wider text-sm mb-4 uppercase">
                    {member.role}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 tracking-wider">
              Our Values
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              The principles that guide everything we create
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-b from-[#F5EFE7] to-white rounded-lg"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-display font-bold mb-3 tracking-wider">
                  {value.title}
                </h3>
                <p className="text-gray-700">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-gradient-to-br from-[#E8DDD3] to-[#F5EFE7]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 tracking-wider">
              Join Our Team
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              We&apos;re always looking for talented individuals who share our passion for fashion 
              and excellence. If you think you&apos;d be a great fit, we&apos;d love to hear from you.
            </p>
            <a
              href="mailto:careers@glamourista.com"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded hover:bg-gray-800 transition-colors tracking-wider font-medium"
            >
              VIEW OPEN POSITIONS
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
