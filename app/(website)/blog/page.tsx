import { client, queries, urlFor } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'

// Revalidate every 10 seconds to get fresh data
export const revalidate = 10

export default async function BlogPage() {
  const posts = await client.fetch(queries.allBlogPosts, {}, { cache: 'no-store' })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558769132-cb1aea8f6024?q=80&w=2074')`,
          }}
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Blogg & Inspiration
          </h1>
          <p className="text-xl">
            Trender, tips och insikter från modebranschen
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group"
              >
                <div className="relative h-64 mb-4 overflow-hidden">
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
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">
                    {new Date(post.publishedAt).toLocaleDateString('sv-SE', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                <h2 className="text-2xl font-display font-semibold mb-4 group-hover:text-gold-600 transition-colors">
                    {post.title}
                  </h2>
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
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
