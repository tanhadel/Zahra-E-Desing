import { client, queries, urlFor } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'

export default async function LookbookPage() {
  const lookbooks = await client.fetch(queries.allLookbooks)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2088')`,
          }}
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 uppercase tracking-widest">
            Lookbook
          </h1>
          <p className="text-xl">
            Upptäck våra stilguider och modeskapelser
          </p>
        </div>
      </section>

      {/* Lookbooks Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lookbooks.map((lookbook: any) => (
              <Link
                key={lookbook._id}
                href={`/lookbook/${lookbook.slug.current}`}
                className="group"
              >
                <div className="relative h-[500px] mb-4 overflow-hidden">
                  {lookbook.mainImage && (
                    <Image
                      src={urlFor(lookbook.mainImage).width(600).height(800).url()}
                      alt={lookbook.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">
                    {new Date(lookbook.publishedAt).toLocaleDateString('sv-SE', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                <h2 className="text-3xl font-display font-semibold mb-4 group-hover:text-gold-600 transition-colors">
                    {lookbook.title}
                  </h2>
                  {lookbook.subtitle && (
                    <p className="text-gray-600">{lookbook.subtitle}</p>
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
