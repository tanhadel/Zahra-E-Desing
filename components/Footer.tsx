import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      {/* Newsletter & Social Section */}
      <div className="bg-[#E8DDD3] py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
            {/* Social Icons */}
            <div>
              <h4 className="text-xs font-semibold mb-4 text-gray-800 uppercase tracking-wider">FOLLOW OUR SOCIAL NETWORK</h4>
              <div className="flex items-center gap-3">
                <a href="https://facebook.com" className="w-12 h-12 rounded-full bg-[#B89F86] flex items-center justify-center text-white hover:bg-[#A38A6F] transition-colors">
                  <FaFacebookF size={16} />
                </a>
                <a href="https://instagram.com" className="w-12 h-12 rounded-full bg-[#B89F86] flex items-center justify-center text-white hover:bg-[#A38A6F] transition-colors">
                  <FaInstagram size={16} />
                </a>
                <a href="https://twitter.com" className="w-12 h-12 rounded-full bg-[#B89F86] flex items-center justify-center text-white hover:bg-[#A38A6F] transition-colors">
                  <FaTwitter size={16} />
                </a>
                <a href="https://youtube.com" className="w-12 h-12 rounded-full bg-[#B89F86] flex items-center justify-center text-white hover:bg-[#A38A6F] transition-colors">
                  <FaYoutube size={16} />
                </a>
              </div>
            </div>

            {/* Center Logo */}
            <div className="flex justify-center sm:justify-center">
              <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                {/* Textured Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-600 via-gray-500 to-gray-700 opacity-90" 
                     style={{
                       backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                       backgroundSize: '30px 30px'
                     }}>
                </div>
                
                {/* Logo Image */}
                <div className="relative z-10 p-4 bg-gradient-to-b from-transparent via-transparent to-black/20">
                  <Image
                    src="/images/logo-2.svg"
                    alt="TNY - Zehra Ebraimi Designer"
                    width={160}
                    height={160}
                    className="w-auto h-24 drop-shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-xs font-semibold mb-4 text-gray-800 uppercase tracking-wider sm:text-right">SUBSCRIBE OUR NEWSLETTER</h4>
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="flex-1 px-4 py-3 bg-white/50 border border-gray-300 focus:outline-none focus:border-[#B89F86] text-sm"
                />
                <button className="px-6 py-3 bg-[#B89F86] text-white text-xs font-medium tracking-wider hover:bg-[#A38A6F] transition-colors uppercase whitespace-nowrap">
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
