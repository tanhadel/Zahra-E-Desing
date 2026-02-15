'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiCheck } from 'react-icons/fi'

const pricingPlans = [
  {
    name: 'BASIC',
    price: '299',
    currency: 'kr',
    period: 'session',
    description: 'Perfect for personal styling consultations',
    features: [
      '1 Hour Consultation',
      'Personal Style Assessment',
      'Wardrobe Review',
      'Color Analysis',
      'Basic Styling Guide',
      'Email Support'
    ],
    recommended: false
  },
  {
    name: 'PREMIUM',
    price: '899',
    currency: 'kr',
    period: 'session',
    description: 'Comprehensive styling and fashion design services',
    features: [
      '3 Hour Consultation',
      'Complete Style Transformation',
      'Custom Design Sketches',
      'Fabric Selection Guidance',
      'Shopping Assistance',
      'Alteration Recommendations',
      'Follow-up Session',
      'Priority Support'
    ],
    recommended: true
  },
  {
    name: 'COUTURE',
    price: '2,499',
    currency: 'kr',
    period: 'project',
    description: 'Exclusive custom fashion design experience',
    features: [
      'Unlimited Consultations',
      'Custom Garment Design',
      'Premium Fabric Sourcing',
      'Multiple Design Revisions',
      'Personal Fittings',
      'Complete Wardrobe Planning',
      'VIP Event Styling',
      '24/7 Priority Support',
      '6 Month Follow-up'
    ],
    recommended: false
  }
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-br from-[#E8DDD3] to-[#F5EFE7]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 uppercase tracking-widest text-gray-900">
              Pricing Plans
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
              Choose the perfect package for your fashion journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative rounded-lg overflow-hidden ${
                  plan.recommended
                    ? 'border-2 border-primary-400 shadow-2xl scale-105'
                    : 'border border-gray-200 shadow-lg'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 left-0 right-0 bg-primary-400 text-white text-center py-2 text-sm font-bold tracking-wider">
                    RECOMMENDED
                  </div>
                )}
                
                <div className={`p-8 ${plan.recommended ? 'pt-16' : ''}`}>
                  <h3 className="text-2xl font-display font-bold tracking-widest mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 min-h-[3rem]">
                    {plan.description}
                  </p>
                  
                  <div className="mb-8">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-2xl text-gray-600 ml-2">
                        {plan.currency}
                      </span>
                    </div>
                    <p className="text-gray-500 text-center mt-2">
                      per {plan.period}
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <FiCheck className="text-primary-400 mt-1 mr-3 flex-shrink-0" size={18} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`block w-full text-center py-3 rounded transition-all duration-300 font-medium tracking-wider ${
                      plan.recommended
                        ? 'bg-primary-400 text-white hover:bg-primary-500'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    GET STARTED
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-gradient-to-br from-[#F5EFE7] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 tracking-wider">
              Need a Custom Package?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Every client is unique, and so are their fashion needs. If none of our standard 
              packages fit your requirements, we&apos;d love to create a custom solution tailored 
              specifically for you.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded hover:bg-gray-800 transition-colors tracking-wider font-medium"
            >
              CONTACT US FOR CUSTOM PRICING
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center tracking-wider">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold mb-3">What&apos;s included in a consultation?</h3>
                <p className="text-gray-700">
                  Each consultation includes a thorough discussion of your style preferences, body type analysis, 
                  color palette recommendations, and personalized styling advice tailored to your lifestyle and goals.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold mb-3">Do you offer online consultations?</h3>
                <p className="text-gray-700">
                  Yes! We offer both in-person and virtual consultations via video call. Virtual sessions 
                  include the same comprehensive service as in-person meetings.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold mb-3">Can I upgrade my package later?</h3>
                <p className="text-gray-700">
                  Absolutely! You can upgrade to a higher tier at any time, and we&apos;ll credit your previous 
                  investment toward the new package.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold mb-3">What is your cancellation policy?</h3>
                <p className="text-gray-700">
                  We require 48 hours notice for cancellations or rescheduling. Cancellations made within 
                  48 hours may be subject to a cancellation fee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
