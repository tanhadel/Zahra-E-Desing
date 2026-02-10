'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070')`,
          }}
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4 uppercase tracking-widest">
            Kontakta Oss
          </h1>
          <p className="text-xl">
            Vi ser fram emot att höra från dig
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-display font-bold mb-6">Skicka ett Meddelande</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Namn *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-post *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Ämne *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500"
                  >
                    <option value="">Välj ett ämne</option>
                    <option value="general">Allmän förfrågan</option>
                    <option value="collection">Kollektion information</option>
                    <option value="custom">Skräddarsydd design</option>
                    <option value="styling">Styling konsultation</option>
                    <option value="press">Press & media</option>
                    <option value="other">Annat</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Meddelande *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gold-500 text-gray-900 font-semibold hover:bg-gold-400 transition-all duration-300 uppercase tracking-widest text-sm"
                >
                  Skicka Meddelande
                </button>
                {isSubmitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-600 font-medium"
                  >
                    Tack för ditt meddelande! Vi återkommer inom kort. ✓
                  </motion.p>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-display font-bold mb-6">Kontaktinformation</h2>
              <p className="text-gray-700 mb-8">
                Välkommen att kontakta oss för frågor om våra kollektioner, skräddarsydda tjänster 
                eller för att boka en personlig styling konsultation.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gold-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <FiMapPin className="text-gold-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Adress</h3>
                    <p className="text-gray-600">
                      Storgatan 123<br />
                      114 55 Stockholm<br />
                      Sverige
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gold-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <FiPhone className="text-gold-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Telefon</h3>
                    <p className="text-gray-600">
                      <a href="tel:+46812345678" className="hover:text-gold-600 transition-colors">
                        +46 8 123 45 678
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gold-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <FiMail className="text-gold-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">E-post</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@glamourista.se" className="hover:text-gold-600 transition-colors">
                        info@glamourista.se
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8">
                <h3 className="text-2xl font-display font-semibold mb-4">Öppettider</h3>
                <div className="space-y-2 text-gray-700">
                  <p className="flex justify-between">
                    <span>Måndag - Fredag:</span>
                    <span className="font-medium">10:00 - 18:00</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Lördag:</span>
                    <span className="font-medium">11:00 - 16:00</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Söndag:</span>
                    <span className="font-medium">Stängt</span>
                  </p>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  * Besök efter överenskommelse utanför ordinarie öppettider
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="h-96 bg-gray-200">
        <div className="w-full h-full flex items-center justify-center text-gray-500">
          <p>Karta placeholder - Integrera Google Maps eller annan karttjänst här</p>
        </div>
      </section>
    </div>
  )
}
