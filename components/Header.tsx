'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false)

  const handleCloseMobileMenu = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsMobileMenuOpen(false)
      setIsClosing(false)
      setMobileServicesOpen(false)
      setMobilePagesOpen(false)
    }, 300) // Match animation duration
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-lg backdrop-blur-md' : 'bg-white/80 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left - Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-800 hover:text-primary-500 transition-colors text-xs font-semibold tracking-widest uppercase">
              HOMEPAGE
            </Link>
            <div className="relative group">
              <button className="text-gray-800 hover:text-primary-500 transition-colors text-xs font-semibold tracking-widest flex items-center gap-1 uppercase">
                SERVICES
                <FiChevronDown size={14} />
              </button>
              {/* Services Dropdown */}
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-100">
                <Link href="/services/pricing" className="block px-6 py-3 text-gray-800 hover:bg-primary-50 hover:text-primary-600 text-xs font-medium tracking-wider uppercase border-b border-gray-100 transition-colors">
                  PRICING PLAN
                </Link>
                <Link href="/collections" className="block px-6 py-3 text-gray-800 hover:bg-primary-50 hover:text-primary-600 text-xs font-medium tracking-wider uppercase border-b border-gray-100 transition-colors">
                  COLLECTIONS
                </Link>
                <Link href="/services/project" className="block px-6 py-3 text-gray-800 hover:bg-primary-50 hover:text-primary-600 text-xs font-medium tracking-wider uppercase transition-colors">
                  PROJECT
                </Link>
              </div>
            </div>
            <Link href="/contact" className="text-gray-800 hover:text-primary-500 transition-colors text-xs font-semibold tracking-widest uppercase">
              CONTACT US
            </Link>
            <div className="relative group">
              <button className="text-gray-800 hover:text-primary-500 transition-colors text-xs font-semibold tracking-widest flex items-center gap-1 uppercase">
                PAGES
                <FiChevronDown size={14} />
              </button>
              {/* Pages Dropdown */}
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-100">
                <Link href="/about" className="block px-6 py-3 text-gray-800 hover:bg-primary-50 hover:text-primary-600 text-xs font-medium tracking-wider uppercase border-b border-gray-100 transition-colors">
                  ABOUT US
                </Link>
                <Link href="/team" className="block px-6 py-3 text-gray-800 hover:bg-primary-50 hover:text-primary-600 text-xs font-medium tracking-wider uppercase border-b border-gray-100 transition-colors">
                  TEAM
                </Link>
                <Link href="/faq" className="block px-6 py-3 text-gray-800 hover:bg-primary-50 hover:text-primary-600 text-xs font-medium tracking-wider uppercase border-b border-gray-100 transition-colors">
                  FAQ
                </Link>
                <Link href="/blog" className="block px-6 py-3 text-gray-800 hover:bg-primary-50 hover:text-primary-600 text-xs font-medium tracking-wider uppercase border-b border-gray-100 transition-colors">
                  BLOG
                </Link>
                <Link href="/blog/post" className="block px-6 py-3 text-gray-800 hover:bg-gray-50 text-xs font-medium tracking-wider uppercase border-b border-gray-100">
                  SINGLE POST
                </Link>
                <Link href="/404" className="block px-6 py-3 text-gray-800 hover:bg-gray-50 text-xs font-medium tracking-wider uppercase">
                  ERROR 404
                </Link>
              </div>
            </div>
          </nav>

          {/* Center - Logo Desktop, Left - Logo Mobile */}
          <Link href="/" className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 group">
            <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              {/* Textured Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-600 via-gray-500 to-gray-700 opacity-90" 
                   style={{
                     backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                     backgroundSize: '30px 30px'
                   }}>
              </div>
              
              {/* Logo Image */}
              <div className="relative z-10 p-3 lg:p-4 bg-gradient-to-b from-transparent via-transparent to-black/20">
                <Image
                  src="/images/logo-2.svg"
                  alt="TNY - Zehra Ebraimi Designer"
                  width={120}
                  height={120}
                  className="h-16 lg:h-24 w-auto drop-shadow-lg"
                  priority
                />
              </div>
            </div>
          </Link>

          {/* Right - Social Icons & Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="https://facebook.com" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-400 hover:text-white transition-colors">
              <FaFacebookF size={14} />
            </a>
            <a href="https://instagram.com" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-400 hover:text-white transition-colors">
              <FaInstagram size={14} />
            </a>
            <a href="https://youtube.com" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-400 hover:text-white transition-colors">
              <FaYoutube size={14} />
            </a>
            <Link
              href="/contact"
              className="ml-4 px-7 py-2.5 bg-white text-gray-700 text-xs font-medium tracking-widest hover:bg-primary-400 hover:text-white transition-colors uppercase border border-gray-300"
            >
              CONTACT US
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              if (isMobileMenuOpen) {
                handleCloseMobileMenu()
              } else {
                setIsMobileMenuOpen(true)
              }
            }}
            className="lg:hidden w-12 h-12 flex items-center justify-center bg-gray-600/70 hover:bg-gray-700 transition-all duration-300 rounded relative z-[120]"
          >
            {isMobileMenuOpen ? <FiX size={24} className="text-white" /> : <FiMenu size={24} className="text-white" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className={`fixed top-0 left-0 right-0 bg-[#E8DDD3] z-[110] lg:hidden shadow-xl ${isClosing ? 'animate-slide-up' : 'animate-slide-down'}`}>
            {/* Navigation Menu */}
            <nav className="flex flex-col pt-20">
              <Link 
                href="/" 
                onClick={handleCloseMobileMenu}
                className="bg-[#9B826B] text-white px-6 py-4 text-sm font-medium tracking-wider uppercase hover:bg-[#8A7560] transition-colors duration-300"
              >
                HOMEPAGE
              </Link>
              
              <div>
                <button 
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full bg-white text-gray-800 px-6 py-4 text-sm font-medium tracking-wider uppercase flex items-center justify-between border-y border-gray-200 hover:bg-gray-50 transition-colors duration-300"
                >
                  SERVICES
                  <FiChevronDown size={20} className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="bg-gray-50 border-b border-gray-200">
                    <Link 
                      href="/services/pricing" 
                      onClick={handleCloseMobileMenu}
                      className="block px-10 py-3 text-gray-700 hover:bg-gray-100 text-xs font-medium tracking-wider uppercase"
                    >
                      PRICING PLAN
                    </Link>
                    <Link 
                      href="/collections" 
                      onClick={handleCloseMobileMenu}
                      className="block px-10 py-3 text-gray-700 hover:bg-gray-100 text-xs font-medium tracking-wider uppercase"
                    >
                      COLLECTIONS
                    </Link>
                    <Link 
                      href="/services/project" 
                      onClick={handleCloseMobileMenu}
                      className="block px-10 py-3 text-gray-700 hover:bg-gray-100 text-xs font-medium tracking-wider uppercase"
                    >
                      PROJECT
                    </Link>
                  </div>
                )}
              </div>
              
              <Link 
                href="/contact" 
                onClick={handleCloseMobileMenu}
                className="bg-white text-gray-800 px-6 py-4 text-sm font-medium tracking-wider uppercase border-b border-gray-200 hover:bg-gray-50 transition-colors duration-300"
              >
                CONTACT US
              </Link>
              
              <div>
                <button 
                  onClick={() => setMobilePagesOpen(!mobilePagesOpen)}
                  className="w-full bg-white text-gray-800 px-6 py-4 text-sm font-medium tracking-wider uppercase flex items-center justify-between border-b border-gray-200 hover:bg-gray-50 transition-colors duration-300"
                >
                  PAGES
                  <FiChevronDown size={20} className={`transition-transform duration-300 ${mobilePagesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobilePagesOpen && (
                  <div className="bg-gray-50 border-b border-gray-200">
                    <Link 
                      href="/about" 
                      onClick={handleCloseMobileMenu}
                      className="block px-10 py-3 text-gray-700 hover:bg-gray-100 text-xs font-medium tracking-wider uppercase"
                    >
                      ABOUT US
                    </Link>
                    <Link 
                      href="/team" 
                      onClick={handleCloseMobileMenu}
                      className="block px-10 py-3 text-gray-700 hover:bg-gray-100 text-xs font-medium tracking-wider uppercase"
                    >
                      TEAM
                    </Link>
                    <Link 
                      href="/faq" 
                      onClick={handleCloseMobileMenu}
                      className="block px-10 py-3 text-gray-700 hover:bg-gray-100 text-xs font-medium tracking-wider uppercase"
                    >
                      FAQ
                    </Link>
                    <Link 
                      href="/blog" 
                      onClick={handleCloseMobileMenu}
                      className="block px-10 py-3 text-gray-700 hover:bg-gray-100 text-xs font-medium tracking-wider uppercase"
                    >
                      BLOG
                    </Link>
                    <Link 
                      href="/blog/post" 
                      onClick={handleCloseMobileMenu}
                      className="block px-10 py-3 text-gray-700 hover:bg-gray-100 text-xs font-medium tracking-wider uppercase"
                    >
                      SINGLE POST
                    </Link>
                    <Link 
                      href="/404" 
                      onClick={handleCloseMobileMenu}
                      className="block px-10 py-3 text-gray-700 hover:bg-gray-100 text-xs font-medium tracking-wider uppercase"
                    >
                      ERROR 404
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
