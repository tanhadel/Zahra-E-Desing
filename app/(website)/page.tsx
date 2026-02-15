import Hero from '@/components/Hero'
import WhoWeAre from '@/components/WhoWeAre'
import OfferingsSection from '@/components/OfferingsSection'
import FeaturedCollections from '@/components/FeaturedCollections'
import ShoppingNow from '@/components/ShoppingNow'
import ServicesSection from '@/components/ServicesSection'
import FashionQuote from '@/components/FashionQuote'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <OfferingsSection />
      <FeaturedCollections />
      <ShoppingNow />
      <ServicesSection />
      <FashionQuote />
      <Testimonials />
    </>
  )
}
