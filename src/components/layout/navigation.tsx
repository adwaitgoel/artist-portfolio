'use client'
import { useState } from 'react'
import Link from 'next/link'

// Custom Instagram Icon Component
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className}
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

// Custom Mail Icon Component  
const MailIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className}
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
)

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-cream/90 backdrop-blur-md border-b border-stone/20 z-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Artist Name - Text Version */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl md:text-2xl font-light tracking-wide text-charcoal hover:text-bronze transition-colors duration-500">
              Pratibha Goel
            </Link>
          </div>

          {/* Desktop Navigation with Social Icons */}
          <div className="hidden md:flex items-center space-x-12 lg:space-x-16">
            {/* Navigation Links */}
            <a 
              href="#work" 
              className="text-sage hover:text-charcoal font-normal tracking-wider text-sm uppercase transition-all duration-500 relative group"
            >
              Work
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-bronze transition-all duration-500 group-hover:w-full"></span>
            </a>
            <a 
              href="#about" 
              className="text-sage hover:text-charcoal font-normal tracking-wider text-sm uppercase transition-all duration-500 relative group"
            >
              About
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-bronze transition-all duration-500 group-hover:w-full"></span>
            </a>
            <a 
              href="#classes" 
              className="text-sage hover:text-charcoal font-normal tracking-wider text-sm uppercase transition-all duration-500 relative group"
            >
              Classes
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-bronze transition-all duration-500 group-hover:w-full"></span>
            </a>
            <a 
              href="/exhibitions" 
              className="text-sage hover:text-charcoal font-normal tracking-wider text-sm uppercase transition-all duration-500 relative group"
            >
              Exhibitions
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-bronze transition-all duration-500 group-hover:w-full"></span>
            </a>

            {/* Social Icons - Desktop */}
            <div className="flex items-center space-x-4 ml-8">
              <a 
                href="https://www.instagram.com/art.pratibha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sage hover:text-charcoal transition-colors duration-500 hover:scale-110 transform"
                aria-label="Visit Instagram Profile"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a 
                href="mailto:your.mother@example.com"
                className="text-sage hover:text-charcoal transition-colors duration-500 hover:scale-110 transform"
                aria-label="Send Email"
              >
                <MailIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-sage hover:text-charcoal focus:outline-none transition-colors duration-500"
              aria-label="Toggle menu"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 pb-8' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="pt-6 space-y-4 border-t border-stone/20">
            {/* Navigation Links - Mobile */}
            <a 
              href="#work" 
              className="block text-sage hover:text-charcoal font-normal tracking-wider text-sm uppercase py-2 transition-colors duration-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </a>
            <a 
              href="#about" 
              className="block text-sage hover:text-charcoal font-normal tracking-wider text-sm uppercase py-2 transition-colors duration-500"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#classes" 
              className="block text-sage hover:text-charcoal font-normal tracking-wider text-sm uppercase py-2 transition-colors duration-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Classes
            </a>
            <a 
              href="/exhibitions" 
              className="block text-sage hover:text-charcoal font-normal tracking-wider text-sm uppercase py-2 transition-colors duration-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Exhibitions
            </a>

            {/* Social Icons - Mobile (Horizontal) */}
            <div className="flex items-center justify-center space-x-8 pt-4 border-t border-stone/10">
              <a 
                href="https://www.instagram.com/art.pratibha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sage hover:text-charcoal transition-colors duration-500"
                aria-label="Visit Instagram Profile"
                onClick={() => setIsMenuOpen(false)}
              >
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a 
                href="mailto:your.mother@example.com"
                className="text-sage hover:text-charcoal transition-colors duration-500"
                aria-label="Send Email"
                onClick={() => setIsMenuOpen(false)}
              >
                <MailIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
