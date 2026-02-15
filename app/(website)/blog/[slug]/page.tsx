import { client, queries, urlFor } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'

interface Props {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: Props) {
  const post = await client.fetch(queries.blogPostBySlug(params.slug))

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        {post.mainImage && (
          <div className="absolute inset-0">
            <Image
              src={urlFor(post.mainImage).width(1920).height(1080).url()}
              alt={post.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50" />
          </div>
        )}
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          {post.category && (
            <span className="inline-block px-4 py-2 bg-white text-gray-900 text-sm font-semibold uppercase tracking-wide mb-4">
              {post.category}
            </span>
          )}
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 uppercase tracking-wide">
            {post.title}
          </h1>
          <div className="flex items-center justify-center space-x-4">
            {post.author && (
              <>
                {post.author.image && (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={urlFor(post.author.image).width(50).height(50).url()}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <span className="font-medium">{post.author.name}</span>
                <span>•</span>
              </>
            )}
            <span>
              {new Date(post.publishedAt).toLocaleDateString('sv-SE', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none">
            {post.body && <PortableText value={post.body} />}
          </div>

          {/* Author Bio */}
          {post.author && post.author.bio && (
            <div className="mt-16 p-8 bg-gray-50 border-l-4 border-gold-500">
              <div className="flex items-center mb-4">
                {post.author.image && (
                  <div className="relative w-16 h-16 mr-4 rounded-full overflow-hidden">
                    <Image
                      src={urlFor(post.author.image).width(80).height(80).url()}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <h3 className="text-xl font-display font-semibold">
                  Om {post.author.name}
                </h3>
              </div>
              <div className="prose">
                <PortableText value={post.author.bio} />
              </div>
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-block px-8 py-3 border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              Tillbaka till Bloggen
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
