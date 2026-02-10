'use client'

import { useState } from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setEmail('')
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Social Media */}
        <div className="text-center mb-16">
          <h3 className="text-sm uppercase tracking-wider text-gray-600 mb-8">FOLLOW OUR SOCIAL NETWORK</h3>
          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="w-16 h-16 rounded-full bg-primary-300 text-white flex items-center justify-center hover:bg-primary-400 transition-colors"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="#"
              className="w-16 h-16 rounded-full bg-primary-300 text-white flex items-center justify-center hover:bg-primary-400 transition-colors"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              className="w-16 h-16 rounded-full bg-primary-300 text-white flex items-center justify-center hover:bg-primary-400 transition-colors"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="w-16 h-16 rounded-full bg-primary-300 text-white flex items-center justify-center hover:bg-primary-400 transition-colors"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-sm uppercase tracking-wider text-gray-600 mb-8">SUBSCRIBE OUR NEWSLETTER</h3>
          <form onSubmit={handleSubmit} className="flex gap-0 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-4 bg-white border border-r-0 border-gray-300 text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary-400"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-primary-400 text-white font-semibold hover:bg-primary-500 transition-colors uppercase tracking-wider text-sm flex items-center gap-2"
            >
              <span>✉</span>
              <span>SIGN UP</span>
            </button>
          </form>
          {isSubmitted && (
            <p className="mt-4 text-green-600">
              Tack för din prenumeration! 🎉
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
