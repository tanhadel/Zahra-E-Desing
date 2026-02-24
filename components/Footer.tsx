import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      {/* Newsletter & Social Section */}
      <div className="bg-white py-12 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
            {/* Social Icons */}
            <div>
              <h4 className="text-xs font-semibold mb-4 text-gray-800 uppercase tracking-wider">FOLLOW OUR SOCIAL NETWORK</h4>
              <div className="flex items-center gap-3">
                <a href="https://facebook.com" className="w-12 h-12 rounded-full bg-[#B8956A] flex items-center justify-center text-white hover:bg-[#9d7f58] transition-colors">
                  <FaFacebookF size={16} />
                </a>
                <a href="https://instagram.com" className="w-12 h-12 rounded-full bg-[#B8956A] flex items-center justify-center text-white hover:bg-[#9d7f58] transition-colors">
                  <FaInstagram size={16} />
                </a>
                <a href="https://twitter.com" className="w-12 h-12 rounded-full bg-[#B8956A] flex items-center justify-center text-white hover:bg-[#9d7f58] transition-colors">
                  <FaTwitter size={16} />
                </a>
                <a href="https://youtube.com" className="w-12 h-12 rounded-full bg-[#B8956A] flex items-center justify-center text-white hover:bg-[#9d7f58] transition-colors">
                  <FaYoutube size={16} />
                </a>
              </div>
            </div>

            {/* Center Logo */}
            <div className="flex justify-center sm:justify-center">
              <div className="relative">
                <Image
                  src="/images/logo-2.svg"
                  alt="TNY - Zehra Ebraimi Designer"
                  width={160}
                  height={160}
                  className="w-auto h-24"
                />
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-xs font-semibold mb-4 text-gray-800 uppercase tracking-wider sm:text-right">SUBSCRIBE OUR NEWSLETTER</h4>
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="flex-1 px-4 py-3 bg-gray-50 border border-gray-300 focus:outline-none focus:border-[#B8956A] text-sm"
                />
                <button className="px-6 py-3 bg-[#B8956A] text-white text-xs font-medium tracking-wider hover:bg-[#9d7f58] transition-colors uppercase whitespace-nowrap">
                  ✉ SIGN UP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="bg-[#2B2B2B] text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {/* Workshop */}
            <div>
              <h4 className="text-xs font-semibold mb-6 text-[#C8A882] uppercase tracking-wider">WORKSHOP</h4>
              <address className="not-italic text-white leading-relaxed">
                <p className="text-2xl font-serif mb-1">Hemgatan 22 </p>
                <p className="text-2xl font-serif mb-1">Stockholm - Sweden</p>
                <p className="text-2xl font-serif">12367</p>
              </address>
            </div>

            {/* Email */}
            <div>
              <h4 className="text-xs font-semibold mb-6 text-[#C8A882] uppercase tracking-wider">EMAIL US</h4>
              <div className="text-white">
                <p className="text-2xl font-serif mb-4">zahra@design.com</p>
                <a href="mailto:zahra@design.com" className="text-xs text-[#C8A882] hover:text-white transition-colors uppercase tracking-wider border-b border-[#C8A882] pb-1">
                  SEND EMAIL
                </a>
              </div>
            </div>

            {/* Customer Support */}
            <div>
              <h4 className="text-xs font-semibold mb-6 text-[#C8A882] uppercase tracking-wider">CUSTOMER SUPPORT</h4>
              <div className="text-white">
                <p className="text-3xl font-serif mb-4">(08) 1234 5678</p>
                <a href="tel:0812345678" className="text-xs text-[#C8A882] hover:text-white transition-colors uppercase tracking-wider border-b border-[#C8A882] pb-1">
                  LET&apos;S TALK
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div>
              <h4 className="text-xs font-semibold mb-6 text-[#C8A882] uppercase tracking-wider">OPENING HOURS</h4>
              <div className="text-white">
                <p className="text-2xl font-serif mb-1">Monday - Friday :</p>
                <p className="text-2xl font-serif">09.00-17.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#1E1E1E] py-6 text-center">
        <p className="text-white text-sm">
          Copyright © {currentYear} Zahra Ebraimi. All rights reserved. Powered by Taha.
        </p>
      </div>
    </footer>
  )
}
