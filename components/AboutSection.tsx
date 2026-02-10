'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AboutSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-96 lg:h-[600px]">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2020')`,
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pl-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Vår Historia
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Glamourista grundades med en vision att förena klassisk elegans med modern design. 
              utan sätter dem. Vi tror på att mode är en konstform som förenar kreativitet, 
              hantverk och individuellt uttryck.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Varje kollektion är noggrant kurerad för att fånga essensen av sofistikerad elegans 
              och tidlös skönhet. Vi arbetar med de finaste material och hantverkare för att 
              säkerställa att varje plagg är ett mästerverk.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-4xl font-display font-bold text-gold-600 mb-2">15+</h3>
                <p className="text-gray-600">Å r av Erfarenhet</p>
              </div>
              <div>
                <h3 className="text-4xl font-display font-bold text-gold-600 mb-2">500+</h3>
                <p className="text-gray-600">Unika Designs</p>
              </div>
              <div>
                <h3 className="text-4xl font-display font-bold text-gold-600 mb-2">50+</h3>
                <p className="text-gray-600">Internationella Kunder</p>
              </div>
              <div>
                <h3 className="text-4xl font-display font-bold text-gold-600 mb-2">25+</h3>
                <p className="text-gray-600">Utmärkelser</p>
              </div>
            </div>
            <Link
              href="/about"
              className="inline-block px-10 py-4 bg-gray-900 text-white font-semibold hover:bg-gold-600 transition-all duration-300 uppercase tracking-widest text-sm"
            >
              Läs Mer Om Oss
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
