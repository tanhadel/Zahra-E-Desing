import { client, queries, urlFor } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface Props {
  params: {
    slug: string
  }
}

export default async function CollectionPage({ params }: Props) {
  const collection = await client.fetch(queries.collectionBySlug(params.slug))

  if (!collection) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        {collection.coverImage && (
          <div className="absolute inset-0">
            <Image
              src={urlFor(collection.coverImage).width(1920).height(1080).url()}
              alt={collection.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-40" />
          </div>
        )}
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 uppercase tracking-widest">
            {collection.title}
          </h1>
          <p className="text-2xl mb-6">
            {collection.season} {collection.year}
          </p>
          {collection.description && (
            <p className="text-lg max-w-2xl mx-auto">{collection.description}</p>
          )}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collection.images?.map((image: string, index: number) => (
              <div key={index} className="relative h-96 overflow-hidden group">
                <Image
                  src={image}
                  alt={`${collection.title} - Image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/collections"
              className="inline-block px-8 py-3 border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              Tillbaka till Kollektioner
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
