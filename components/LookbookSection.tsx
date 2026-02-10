'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { client, queries, urlFor } from '@/lib/sanity'
import Image from 'next/image'

interface Lookbook {
  _id: string
  title: string
  slug: { current: string }
  subtitle: string
  mainImage: any
  publishedAt: string
}

export default function LookbookSection() {
  const [lookbooks, setLookbooks] = useState<Lookbook[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLookbooks = async () => {
      try {
        const data = await client.fetch(queries.featuredLookbooks)
        setLookbooks(data)
      } catch (error) {
        console.error('Error fetching lookbooks:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchLookbooks()
  }, [])

  if (loading) {
    return null
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Lookbook
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Låt dig inspireras av våra senaste lookbooks och stilguider
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {lookbooks.map((lookbook, index) => (
            <motion.div
              key={lookbook._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/lookbook/${lookbook.slug.current}`}>
                <div className="relative h-[500px] mb-4 overflow-hidden image-overlay">
                  {lookbook.mainImage && (
                    <Image
                      src={urlFor(lookbook.mainImage).width(600).height(800).url()}
                      alt={lookbook.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                </div>
                <div>
                  <h3 className="text-2xl font-display font-semibold mb-2 group-hover:text-gold-600 transition-colors">
                    {lookbook.title}
                  </h3>
                  {lookbook.subtitle && (
                    <p className="text-gray-600">{lookbook.subtitle}</p>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/lookbook"
            className="inline-block px-10 py-4 border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 uppercase tracking-widest text-sm"
          >
            Visa Alla Lookbooks
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
