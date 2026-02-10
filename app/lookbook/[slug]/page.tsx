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

export default async function LookbookDetailPage({ params }: Props) {
  const lookbook = await client.fetch(queries.lookbookBySlug(params.slug))

  if (!lookbook) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        {lookbook.mainImage && (
          <div className="absolute inset-0">
            <Image
              src={urlFor(lookbook.mainImage).width(1920).height(1080).url()}
              alt={lookbook.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50" />
          </div>
        )}
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">
            {lookbook.title}
          </h1>
          {lookbook.subtitle && (
            <p className="text-2xl mb-6">{lookbook.subtitle}</p>
          )}
          <p className="text-lg">
            {new Date(lookbook.publishedAt).toLocaleDateString('sv-SE', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
      </section>

      {/* Description */}
      {lookbook.description && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="prose prose-lg max-w-none">
              <PortableText value={lookbook.description} />
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {lookbook.images?.map((item: any, index: number) => (
              <div key={index} className="max-w-5xl mx-auto">
                <div className="relative h-[70vh] mb-4">
                  <Image
                    src={item.url}
                    alt={item.caption || `Lookbook image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                {item.caption && (
                  <p className="text-center text-gray-600 italic">{item.caption}</p>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/lookbook"
              className="inline-block px-8 py-3 border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              Tillbaka till Lookbook
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
