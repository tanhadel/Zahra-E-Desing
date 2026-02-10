'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { client, queries, urlFor } from '@/lib/sanity'
import Image from 'next/image'

interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  mainImage: any
  category: string
  publishedAt: string
  author: {
    name: string
    image: any
  }
}

export default function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await client.fetch(queries.featuredBlogPosts)
        setPosts(data)
      } catch (error) {
        console.error('Error fetching blog posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return null
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Senaste från Bloggen
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Håll dig uppdaterad med de senaste trenderna, tips och insikter från modebranschen
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/blog/${post.slug.current}`}>
                <div className="relative h-64 mb-4 overflow-hidden image-overlay">
                  {post.mainImage && (
                    <Image
                      src={urlFor(post.mainImage).width(600).height(400).url()}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                  {post.category && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-white text-xs font-semibold uppercase tracking-wide">
                      {post.category}
                    </span>
                  )}
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">
                    {new Date(post.publishedAt).toLocaleDateString('sv-SE', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                  <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-gold-600 transition-colors">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="text-gray-600 line-clamp-3 mb-3">{post.excerpt}</p>
                  )}
                  {post.author && (
                    <div className="flex items-center">
                      {post.author.image && (
                        <div className="relative w-8 h-8 mr-2 rounded-full overflow-hidden">
                          <Image
                            src={urlFor(post.author.image).width(40).height(40).url()}
                            alt={post.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <span className="text-sm text-gray-600">{post.author.name}</span>
                    </div>
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
            href="/blog"
            className="inline-block px-10 py-4 border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 uppercase tracking-widest text-sm"
          >
            Läs Fler Artiklar
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
