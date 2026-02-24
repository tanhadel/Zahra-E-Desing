import { client, queries, urlFor } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'

export default async function CollectionsPage() {
  const collections = await client.fetch(queries.allCollections)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Glamourista Style */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1483181957632-8bda974cbc91?q=80&w=2070')`,
          }}
        />
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Centered Content Box */}
        <div className="relative z-10 text-center text-white max-w-2xl mx-auto px-6 py-12 bg-white/10 backdrop-blur-sm">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-wide">
            Collections
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed">
            Clothing that makes you feel beautiful and confident.
          </p>
        </div>
      </section>

      {/* Winter Collection Section - Text Left, Images Right */}
      {collections[0] && (
        <section className="py-20 bg-gradient-to-b from-white to-[#F5EFE7]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-6">
                <p className="font-script text-4xl md:text-5xl text-[#B8956A]">
                  {collections[0].season} Collection
                </p>
                <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                  {collections[0].title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {collections[0].description || 'Dictum neque metus ipsum sit volutpat primis ex magna integer pretium tellus'}
                </p>
                <Link
                  href={`/collections/${collections[0].slug.current}`}
                  className="inline-block bg-[#B8956A] text-white px-8 py-3 hover:bg-[#9d7f58] transition-colors tracking-wider text-sm font-medium"
                >
                  SHOP NOW →
                </Link>
              </div>

              {/* Horizontal Scrolling Images */}
              <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
                {collections[0].images?.slice(0, 4).map((img: any, idx: number) => (
                  <div key={idx} className="relative flex-shrink-0 w-[240px] h-[300px] snap-center overflow-hidden rounded">
                    <Image
                      src={urlFor(img).width(500).height(625).url()}
                      alt={`${collections[0].title} ${idx + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )) || (
                  // Default images if no images in collection
                  <>
                    <div className="relative flex-shrink-0 w-[240px] h-[300px] bg-gray-200 rounded" />
                    <div className="relative flex-shrink-0 w-[240px] h-[300px] bg-gray-200 rounded" />
                    <div className="relative flex-shrink-0 w-[240px] h-[300px] bg-gray-200 rounded" />
                    <div className="relative flex-shrink-0 w-[240px] h-[300px] bg-gray-200 rounded" />
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Shopping Now Section - Center Text with Side Images */}
      <section className="py-20 bg-[#F5EFE7]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Image */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800"
                alt="Fashion Designer"
                fill
                className="object-cover"
              />
            </div>

            {/* Center Content */}
            <div className="text-center space-y-6 py-12">
              <p className="font-script text-4xl md:text-5xl text-[#B8956A]">
                Shopping Now!
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight px-4">
                Discover your personal fashion style
              </h2>
              <p className="text-gray-600 leading-relaxed px-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <button className="inline-block bg-[#B8956A] text-white px-8 py-3 hover:bg-[#9d7f58] transition-colors tracking-wider text-sm font-medium">
                DISCOVER MORE
              </button>
            </div>

            {/* Right Image */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=800"
                alt="Fashion Shopping"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Summer Collection Section - Images Left, Text Right */}
      {collections[1] && (
        <section className="py-20 bg-gradient-to-b from-[#F5EFE7] to-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Horizontal Scrolling Images */}
              <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory order-2 lg:order-1">
                {collections[1].images?.slice(0, 4).map((img: any, idx: number) => (
                  <div key={idx} className="relative flex-shrink-0 w-[240px] h-[300px] snap-center overflow-hidden rounded">
                    <Image
                      src={urlFor(img).width(500).height(625).url()}
                      alt={`${collections[1].title} ${idx + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )) || (
                  <>
                    <div className="relative flex-shrink-0 w-[240px] h-[300px] bg-gray-200 rounded" />
                    <div className="relative flex-shrink-0 w-[240px] h-[300px] bg-gray-200 rounded" />
                    <div className="relative flex-shrink-0 w-[240px] h-[300px] bg-gray-200 rounded" />
                    <div className="relative flex-shrink-0 w-[240px] h-[300px] bg-gray-200 rounded" />
                  </>
                )}
              </div>

              {/* Text Content */}
              <div className="space-y-6 order-1 lg:order-2">
                <p className="font-script text-4xl md:text-5xl text-[#B8956A]">
                  {collections[1].season} Collection
                </p>
                <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                  {collections[1].title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {collections[1].description || 'Dictum neque metus ipsum sit volutpat primis ex magna integer pretium tellus'}
                </p>
                <Link
                  href={`/collections/${collections[1].slug.current}`}
                  className="inline-block bg-[#B8956A] text-white px-8 py-3 hover:bg-[#9d7f58] transition-colors tracking-wider text-sm font-medium"
                >
                  SHOP NOW →
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Images - 2 images side by side */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800"
                  alt="Fashion Workshop 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1558769132-cb1aea8f2f88?q=80&w=800"
                  alt="Fashion Workshop 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <div>
                <p className="font-script text-4xl md:text-5xl text-[#B8956A] mb-4">
                  Why Choose Us
                </p>
                <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
                  Clothing that makes you feel beautiful and confident.
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-6">
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-[#B8956A] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Expertise in Fashion Design</h3>
                      <p className="text-gray-600">
                        Nisi egestas et taciti blandit ad. Bibendum litora iaculis nulla tortor orci etiam finibus sem conubia quis phasellus.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-[#B8956A] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">High-Quality Craftsmanship</h3>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-[#B8956A] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Positive Client Experiences</h3>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-[#B8956A] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">24/7 Premium Support</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Collections if more exist */}
      {collections.length > 2 && (
        <section className="py-20 bg-[#F5EFE7]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="font-script text-4xl md:text-5xl text-[#B8956A] mb-4">
                Explore More
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-bold">
                Our Collections
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {collections.slice(2).map((collection: any) => (
                <Link
                  key={collection._id}
                  href={`/collections/${collection.slug.current}`}
                  className="group"
                >
                  <div className="relative aspect-[4/5] mb-4 overflow-hidden">
                    {collection.coverImage && (
                      <Image
                        src={urlFor(collection.coverImage).width(500).height(625).url()}
                        alt={collection.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-display font-semibold mb-2">
                      {collection.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {collection.season} {collection.year}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
