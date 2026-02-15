'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'
import Link from 'next/link'

const faqCategories = [
  {
    category: 'General Questions',
    questions: [
      {
        question: 'What services does Glamourista offer?',
        answer: 'We offer a comprehensive range of fashion design services including custom haute couture, bridal design, ready-to-wear collections, personal styling consultations, wardrobe planning, and alterations. Each service is tailored to meet your unique needs and style preferences.'
      },
      {
        question: 'Where are you located?',
        answer: 'Our flagship atelier is located in Stockholm, Sweden. We also offer virtual consultations for clients worldwide and can arrange in-person meetings in select cities across Europe.'
      },
      {
        question: 'Do you work with international clients?',
        answer: 'Absolutely! We work with clients from all over the world. Through virtual consultations, detailed measurements, and efficient shipping, we ensure that distance is never a barrier to creating your perfect garment.'
      },
      {
        question: 'What makes Glamourista different from other designers?',
        answer: 'Our commitment to combining timeless elegance with contemporary design, paired with exceptional craftsmanship and personalized service, sets us apart. We focus on creating pieces that not only look beautiful but also reflect your individual personality and style.'
      }
    ]
  },
  {
    category: 'Custom Design Process',
    questions: [
      {
        question: 'How does the custom design process work?',
        answer: 'Our process begins with an initial consultation to understand your vision, followed by design sketches and fabric selection. We then create a muslin prototype for fitting, make any necessary adjustments, and finally craft your garment using premium materials. The entire process typically takes 8-16 weeks depending on complexity.'
      },
      {
        question: 'Can I bring my own fabric?',
        answer: 'Yes, you can bring your own fabric, though we do need to assess it first to ensure it\'s suitable for your desired design. We also have exclusive relationships with premium fabric suppliers and can source exceptional materials for your project.'
      },
      {
        question: 'How many fittings will I need?',
        answer: 'Most custom pieces require 2-3 fittings: an initial fitting with the muslin prototype, a mid-way fitting, and a final fitting. For more complex garments like wedding dresses, we may schedule additional fittings to ensure perfection.'
      },
      {
        question: 'What if I change my mind about the design?',
        answer: 'We welcome design modifications during the early stages of the process. Major changes can be incorporated before we begin cutting the final fabric. Once construction begins, changes may be limited and could incur additional costs.'
      }
    ]
  },
  {
    category: 'Pricing & Payment',
    questions: [
      {
        question: 'How much does a custom garment cost?',
        answer: 'Pricing varies depending on design complexity, fabric choice, and embellishments. A custom dress typically starts from 5,000 kr, while bridal gowns start from 15,000 kr. We provide a detailed quote after your initial consultation.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept bank transfers, credit cards (Visa, Mastercard, American Express), and Swish. For international clients, we also accept PayPal and international wire transfers.'
      },
      {
        question: 'Do you require a deposit?',
        answer: 'Yes, we require a 50% deposit to begin work on your project. The remaining balance is due before final delivery. For larger projects, we can arrange a payment plan.'
      },
      {
        question: 'Is there a cancellation policy?',
        answer: 'Deposits are non-refundable as we begin sourcing materials and dedicating time to your project immediately. However, if you need to cancel after work has begun, we can discuss options on a case-by-case basis.'
      }
    ]
  },
  {
    category: 'Consultations & Appointments',
    questions: [
      {
        question: 'How do I book a consultation?',
        answer: 'You can book a consultation through our contact page, by calling us directly, or by emailing us at info@glamourista.com. We typically respond within 24 hours to schedule your appointment.'
      },
      {
        question: 'Are consultations free?',
        answer: 'Initial consultations (up to 30 minutes) are complimentary. Extended consultations and styling sessions are charged according to our pricing plan, though this fee is credited toward any custom design project you commission.'
      },
      {
        question: 'Can consultations be done virtually?',
        answer: 'Yes! We offer comprehensive virtual consultations via video call. You\'ll receive a detailed preparation guide beforehand, and we can accomplish everything from design discussions to measurements remotely.'
      },
      {
        question: 'What should I bring to my consultation?',
        answer: 'Bring inspiration images, any fabric swatches you like, and examples of styles you love. If you have specific measurements or garments that fit you well, those are helpful too. Most importantly, bring your ideas and vision!'
      }
    ]
  },
  {
    category: 'Care & Alterations',
    questions: [
      {
        question: 'How should I care for my custom garment?',
        answer: 'Each garment comes with specific care instructions based on the fabrics and embellishments used. Generally, we recommend professional dry cleaning for couture pieces. We also offer cleaning and preservation services for special garments like wedding dresses.'
      },
      {
        question: 'Do you offer alteration services?',
        answer: 'Yes, we offer alteration services for garments we\'ve created and also for pieces from other designers. Our expert tailors can adjust fit, update styles, or repair damaged areas to extend the life of your favorite pieces.'
      },
      {
        question: 'What if my garment needs repairs?',
        answer: 'We stand behind our craftsmanship. If any issues arise due to construction within the first year, we\'ll repair them at no charge. For normal wear and tear or alterations after the first year, we charge standard alteration rates.'
      },
      {
        question: 'Can you update or restyle an old garment?',
        answer: 'Absolutely! We love giving new life to beloved pieces. Whether it\'s updating a vintage dress, restyling a formal gown, or repurposing fabric from a sentimental garment, we can help transform it into something you\'ll love wearing again.'
      }
    ]
  }
]

export default function FAQPage() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)

  const toggleQuestion = (questionId: string) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId)
  }

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
              FAQ
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
              Frequently Asked Questions
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 tracking-wider text-gray-900 border-b-2 border-primary-400 pb-4">
                  {category.category}
                </h2>

                <div className="space-y-4">
                  {category.questions.map((item, questionIndex) => {
                    const questionId = `${categoryIndex}-${questionIndex}`
                    const isOpen = openQuestion === questionId

                    return (
                      <div
                        key={questionId}
                        className="border border-gray-200 rounded-lg overflow-hidden hover:border-primary-400 transition-colors"
                      >
                        <button
                          onClick={() => toggleQuestion(questionId)}
                          className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
                        >
                          <span className="font-semibold text-gray-900 pr-4">
                            {item.question}
                          </span>
                          <span className="flex-shrink-0 text-primary-400">
                            {isOpen ? <FiMinus size={20} /> : <FiPlus size={20} />}
                          </span>
                        </button>

                        <motion.div
                          initial={false}
                          animate={{
                            height: isOpen ? 'auto' : 0,
                            opacity: isOpen ? 1 : 0
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 py-5 bg-gray-50 border-t border-gray-200">
                            <p className="text-gray-700 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 bg-gradient-to-br from-[#F5EFE7] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 tracking-wider">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Can&apos;t find the answer you&apos;re looking for? Our team is here to help. 
              Reach out to us and we&apos;ll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-gray-900 text-white px-8 py-4 rounded hover:bg-gray-800 transition-colors tracking-wider font-medium"
              >
                CONTACT US
              </Link>
              <a
                href="mailto:info@glamourista.com"
                className="inline-block bg-white text-gray-900 px-8 py-4 rounded border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-colors tracking-wider font-medium"
              >
                EMAIL US
              </a>
            </div>

            <div className="mt-12 pt-12 border-t border-gray-200">
              <h3 className="text-xl font-display font-bold mb-4 tracking-wider">
                Quick Contact Info
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>
                  <span className="font-bold">Phone:</span> +46 123 456 789
                </p>
                <p>
                  <span className="font-bold">Email:</span> info@glamourista.com
                </p>
                <p>
                  <span className="font-bold">Hours:</span> Mon-Fri 10:00-18:00, Sat 11:00-15:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
