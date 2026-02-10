import { client, queries, urlFor } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'

export default async function CollectionsPage() {
  const collections = await client.fetch(queries.allCollections)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1483181957632-8bda974cbc91?q=80&w=2070')`,
          }}
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 uppercase tracking-widest">
            Våra Kollektioner
          </h1>
          <p className="text-xl">
            Utforska våra exklusiva modekreationer säsong för säsong
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection: any) => (
              <Link
                key={collection._id}
                href={`/collections/${collection.slug.current}`}
                className="group"
              >
                <div className="relative h-96 mb-4 overflow-hidden">
                  {collection.coverImage && (
                    <Image
                      src={urlFor(collection.coverImage).width(600).height(800).url()}
                      alt={collection.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                </div>
                <div className="text-center">
                <h2 className="text-3xl font-display font-semibold mb-4 group-hover:text-gold-600 transition-colors">
                    {collection.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-2">
                    {collection.season} {collection.year}
                  </p>
                  {collection.description && (
                    <p className="text-gray-600 line-clamp-2">{collection.description}</p>
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
