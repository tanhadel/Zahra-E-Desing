import { client, queries, urlFor } from '@/lib/sanity'
import { teamMembers } from '@/data/teamMembers'
import Image from 'next/image'
import Link from 'next/link'

export default async function AboutPage() {
  const aboutData = await client.fetch(queries.aboutPage)

  console.log('About Page Data:', aboutData)

  if (!aboutData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">About-sidan saknas</h1>
          <p className="text-gray-600">Gå till http://localhost:3002/studio och skapa en About-sida</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center bg-gray-900">
        {aboutData.heroImage && (
          <Image
            src={urlFor(aboutData.heroImage).url()}
            alt={aboutData.heroTitle || 'Hero'}
            fill
            className="object-cover opacity-40"
            priority
          />
        )}
        <div className="relative z-10 text-center text-white max-w-5xl px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal mb-6 tracking-wide">
            {aboutData.heroTitle || aboutData.title}
          </h1>
          {aboutData.heroSubtitle && (
            <p className="text-lg md:text-xl lg:text-2xl font-serif font-light tracking-wide leading-relaxed">
              {aboutData.heroSubtitle}
            </p>
          )}
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header with text and description */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                {aboutData.sectionLabel && (
                  <p className="font-['Playfair_Display'] italic text-2xl text-gray-600 mb-4">
                    {aboutData.sectionLabel}
                  </p>
                )}
                {aboutData.mainTitle && (
                  <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                    {aboutData.mainTitle}
                  </h2>
                )}
              </div>
              
              <div className="flex flex-col justify-center">
                {aboutData.description && (
                  <p className="text-gray-600 text-lg mb-6">
                    {aboutData.description}
                  </p>
                )}
                <Link 
                  href="#contact" 
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold group w-fit"
                >
                  DISCOVER MORE
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Image with Cards Around It */}
            {aboutData.mainImage && aboutData.featureCards && (
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_1fr] gap-24 xl:gap-32 items-start">
                {/* Left Column - 2 Cards */}
                <div className="space-y-40 lg:pt-16">
                  {aboutData.featureCards.slice(0, 2).map((card: any, index: number) => {
                    const icons = [
                      <svg key={0} className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>,
                      <svg key={1} className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A2.5 2.5 0 0019.5 3h-15a2.5 2.5 0 00-2.25 3.25 14.98 14.98 0 006.16 12.12m0 0a6 6 0 005.84-7.38v4.8" />
                      </svg>
                    ];
                    
                    return (
                      <div key={index} className="text-left lg:text-right">
                        <div className="w-16 h-16 mb-6 border border-primary-400 flex items-center justify-center text-primary-500 lg:ml-auto">
                          {icons[index]}
                        </div>
                        <h3 className="text-2xl font-display font-semibold mb-4 text-gray-900">{card.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">{card.description}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Center - Main Image */}
                <div className="relative h-[600px] lg:h-[700px]">
                  <Image
                    src={urlFor(aboutData.mainImage).url()}
                    alt="Fashion Designer"
                    fill
                    className="object-cover"
                  />
                  {/* Watermark text */}
                  <div className="absolute inset-0 flex items-end justify-center pb-8">
                    <h2 className="text-[80px] md:text-[120px] lg:text-[140px] font-display font-bold text-white/5 leading-none select-none">
                      fashion designer
                    </h2>
                  </div>
                </div>

                {/* Right Column - 2 Cards */}
                <div className="space-y-40 lg:pt-16">
                  {aboutData.featureCards.slice(2, 4).map((card: any, index: number) => {
                    const icons = [
                      <svg key={2} className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>,
                      <svg key={3} className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A2.5 2.5 0 0019.5 3h-15a2.5 2.5 0 00-2.25 3.25 14.98 14.98 0 006.16 12.12m0 0a6 6 0 005.84-7.38v4.8" />
                      </svg>
                    ];
                    
                    return (
                      <div key={index} className="text-left">
                        <div className="w-16 h-16 mb-6 border border-primary-400 flex items-center justify-center text-primary-500">
                          {icons[index]}
                        </div>
                        <h3 className="text-2xl font-display font-semibold mb-4 text-gray-900">{card.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">{card.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Core Business Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center mb-16">
            {aboutData.coreBusinessLabel && (
              <p className="font-['Playfair_Display'] italic text-2xl text-primary-300 mb-4">
                {aboutData.coreBusinessLabel}
              </p>
            )}
            {aboutData.coreBusinessTitle && (
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                {aboutData.coreBusinessTitle}
              </h2>
            )}
            {aboutData.coreBusinessDescription && (
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                {aboutData.coreBusinessDescription}
              </p>
            )}
          </div>

          {/* Service Cards */}
          {aboutData.serviceCards && aboutData.serviceCards.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {aboutData.serviceCards.map((card: any, index: number) => (
                <div key={index} className="bg-white text-gray-900">
                  {card.image && (
                    <div className="relative h-[300px]">
                      <Image
                        src={urlFor(card.image).url()}
                        alt={card.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-8 text-center">
                    <h3 className="text-2xl font-display font-semibold mb-4">{card.title}</h3>
                    <p className="text-gray-600 mb-6">{card.description}</p>
                    <button className="bg-primary-400 hover:bg-primary-500 text-white px-8 py-3 font-semibold transition-colors">
                      LEARN MORE
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center mb-16">
            {aboutData.teamLabel && (
              <p className="font-['Playfair_Display'] italic text-2xl text-gray-600 mb-4">
                {aboutData.teamLabel}
              </p>
            )}
            {aboutData.teamTitle && (
              <h2 className="text-4xl md:text-5xl font-display font-bold">
                {aboutData.teamTitle}
              </h2>
            )}
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.slice(0, 4).map((member: any, index: number) => (
              <div key={index} className="group relative">
                <div className="relative h-[400px] overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name || 'Team Member'}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                      {/* Social Icons Overlay */}
                      <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="w-10 h-10 bg-white rounded flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        </button>
                        <button className="w-10 h-10 bg-white rounded flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                            <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </button>
                        <button className="w-10 h-10 bg-white rounded flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                <h3 className="text-xl font-display font-semibold text-center">{member.name}</h3>
                <p className="text-gray-600 text-center">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      {aboutData.quoteImage && (
        <section className="relative h-[70vh] flex items-center justify-center">
          <Image
            src={urlFor(aboutData.quoteImage).url()}
            alt="Fashion Quote"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center text-white max-w-4xl px-4">
            <div className="w-16 h-16 mx-auto mb-6">
              <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
              </svg>
            </div>
            {aboutData.quoteText && (
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                {aboutData.quoteText}
              </h2>
            )}
            {aboutData.quoteDescription && (
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                {aboutData.quoteDescription}
              </p>
            )}
            <Link 
              href="/contact" 
              className="inline-flex items-center bg-primary-400 hover:bg-primary-500 text-white px-8 py-4 font-semibold transition-colors"
            >
              DISCOVER MORE
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      )}
    </div>
  )
}
