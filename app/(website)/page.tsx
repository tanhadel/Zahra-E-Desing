import Hero from '@/components/Hero'
import WhoWeAre from '@/components/WhoWeAre'
import OfferingsSection from '@/components/OfferingsSection'
import FeaturedCollections from '@/components/FeaturedCollections'
import ShoppingNow from '@/components/ShoppingNow'
import ServicesSection from '@/components/ServicesSection'
import FashionQuote from '@/components/FashionQuote'
import Testimonials from '@/components/Testimonials'
import { client, queries, urlFor } from '@/lib/sanity'

export default async function Home() {
  const homeData = await client.fetch(queries.homePage)

  return (
    <>
      <Hero data={homeData} />
      <WhoWeAre data={homeData} />
      <OfferingsSection data={homeData} />
      <FeaturedCollections />
      <ShoppingNow data={homeData} />
      <ServicesSection />
      <FashionQuote data={homeData} />
      <Testimonials data={homeData} />
    </>
  )
}
