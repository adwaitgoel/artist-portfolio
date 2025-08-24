import Image from 'next/image'

// Social Icons Components (same as before)
const InstagramIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const MailIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
)

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-cream border-t border-stone/20 py-12">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center space-y-6">
          
          {/* Logo in Footer */}
          <div className="mb-2">
            <div className="relative w-44 h-20 md:w-44 md:h-20 mx-auto">
              <Image
                src="/logo/logo-black.png"
                alt="Pratibha Goel Artist Logo"
                fill
                style={{ objectFit: 'contain' }}
                className="opacity-90"
              />
            </div>
          </div>

          {/* Artist Description */}
          <div>
            <p className="text-sage text-sm max-w-md">
              Reviving the lost art of India through mythological paintings and traditional forms
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-8">
            <a 
              href="https://www.instagram.com/art.pratibha" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sage hover:text-charcoal transition-all duration-500 hover:scale-110 transform"
              aria-label="Visit Instagram Profile"
            >
              <InstagramIcon />
            </a>
            <a 
              href="mailto:your.mother@example.com"
              className="text-sage hover:text-charcoal transition-all duration-500 hover:scale-110 transform"
              aria-label="Send Email"
            >
              <MailIcon />
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-stone/20 w-full">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-xs text-sage">
              <span>© {currentYear} Pratibha Goel</span>
              <span className="hidden sm:inline">•</span>
              <span>Made with ♡ for Indian Art</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
