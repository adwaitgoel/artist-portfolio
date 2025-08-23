'use client'
import { useState, useEffect } from 'react'
import Navigation from '../components/layout/navigation'
import Footer from '../components/layout/footer'

// Social Icons Components
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const MailIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
)

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.488"/>
  </svg>
)

export default function Home() {
  // Art forms data
  const artForms = [
    { 
      name: 'Oil Painting', 
      image: '/artworks/oil-painting-featured.jpeg',
      alt: 'Mythological Oil Painting by Pratibha Goel'
    },
    { 
      name: 'Pencil Sketch', 
      image: '/artworks/pencil-sketch-featured.jpeg',
      alt: 'Detailed Pencil Sketch by Pratibha Goel'
    },
    { 
      name: 'Watercolor', 
      image: '/artworks/water-color-featured.jpg',
      alt: 'Watercolor Painting by Pratibha Goel'
    },
    { 
      name: 'Madhubani', 
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center',
      alt: 'Traditional Madhubani Art by Pratibha Goel'
    },
    { 
      name: 'One Stroke', 
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a04?w=800&h=600&fit=crop&crop=center',
      alt: 'One Stroke Painting by Pratibha Goel'
    }
  ]

  const [selectedArtForm, setSelectedArtForm] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [autoRotate, setAutoRotate] = useState(true)

  // Auto-rotation every 10 seconds
  useEffect(() => {
    if (!autoRotate) return

    const interval = setInterval(() => {
      setSelectedArtForm(prev => (prev + 1) % artForms.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [autoRotate, artForms.length])

  // Preload all images
  useEffect(() => {
    artForms.forEach(artForm => {
      const img = new Image()
      img.src = artForm.image
    })
  }, [])

  // Handle art form selection with smooth transition
  const handleArtFormSelect = (index: number) => {
    if (index === selectedArtForm) return
    
    setAutoRotate(false)
    setIsTransitioning(true)
    
    setTimeout(() => {
      setSelectedArtForm(index)
      setIsTransitioning(false)
    }, 150)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        const newIndex = selectedArtForm === 0 ? artForms.length - 1 : selectedArtForm - 1
        handleArtFormSelect(newIndex)
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        const newIndex = (selectedArtForm + 1) % artForms.length
        handleArtFormSelect(newIndex)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [selectedArtForm])

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-cream">
        
        {/* Interactive Hero Section */}
        <section 
          className="pt-20 pb-16"
          onMouseEnter={() => setAutoRotate(false)}
          onMouseLeave={() => setAutoRotate(true)}
        >
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            
            {/* Dynamic Featured Artwork */}
            <div className="mb-16">
              <div className="relative max-w-4xl mx-auto">
                <div className="aspect-[4/3] bg-stone/30 rounded-sm overflow-hidden">
                  <img 
                    src={artForms[selectedArtForm].image}
                    alt={artForms[selectedArtForm].alt}
                    className={`w-full h-full object-cover transition-opacity duration-500 ${
                      isTransitioning ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Artist Bio Section */}
            <div className="max-w-3xl mx-auto text-center space-y-8">
              
              {/* Natural Bio Introduction */}
              <div className="space-y-4">
                <p className="text-base md:text-lg text-sage leading-relaxed max-w-2xl mx-auto">
                  <strong className="text-charcoal font-medium">Pratibha Goel</strong> is an 
                  artist dedicated to reviving the lost art of India through mythological paintings 
                  and traditional art forms. With <span className="text-charcoal font-medium">15+ years</span> of 
                  artistic mastery, she has guided <span className="text-charcoal font-medium">300+ students</span> to 
                  creative success and exhibited across <span className="text-charcoal font-medium">20+ exhibitions</span> 
                  throughout India.
                </p>
              </div>

              {/* Interactive Art Forms Selection */}
              <div className="space-y-4">
                <h2 className="text-sm text-sage tracking-widest uppercase">
                  Specialties
                </h2>
                <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                  {artForms.map((artForm, index) => (
                    <button 
                      key={artForm.name}
                      onClick={() => handleArtFormSelect(index)}
                      className={`group relative text-xs md:text-sm px-4 py-2 rounded-full tracking-wide transition-all duration-500 outline-none ${
                        selectedArtForm === index 
                          ? 'text-charcoal bg-stone/60 shadow-sm' 
                          : 'text-charcoal bg-stone/40 hover:bg-stone/60'
                      }`}
                      aria-label={`View ${artForm.name} artwork`}
                      aria-pressed={selectedArtForm === index}
                    >
                      <span className="flex items-center space-x-2">
                        <span>{artForm.name}</span>
                        <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                          selectedArtForm === index ? 'bg-bronze' : 'bg-sage/40'
                        }`}></span>
                      </span>
                      
                      <span className="absolute inset-0 bg-charcoal/5 rounded-full opacity-0 group-active:opacity-100 transition-opacity duration-150"></span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Social Icons */}
              <div className="pt-6">
                <div className="flex items-center justify-center space-x-6">
                  <a 
                    href="https://www.instagram.com/art.pratibha" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sage hover:text-charcoal transition-colors duration-500"
                    aria-label="Instagram"
                  >
                    <InstagramIcon />
                  </a>
                  <a 
                    href="mailto:your.mother@example.com"
                    className="text-sage hover:text-charcoal transition-colors duration-500"
                    aria-label="Email"
                  >
                    <MailIcon />
                  </a>
                  <a 
                    href="https://wa.me/your-phone-number"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sage hover:text-charcoal transition-colors duration-500"
                    aria-label="WhatsApp"
                  >
                    <WhatsAppIcon />
                  </a>
                </div>
              </div>

              {/* Minimal CTA */}
              <div className="pt-8">
                <a 
                  href="#work"
                  className="inline-block text-sm text-sage hover:text-charcoal tracking-widest uppercase transition-colors duration-500 border-b border-sage/30 hover:border-charcoal pb-1"
                >
                  View Full Portfolio
                </a>
              </div>

            </div>
          </div>

          {/* Screen reader announcement for accessibility */}
          <div className="sr-only" aria-live="polite" aria-atomic="true">
            Now viewing {artForms[selectedArtForm].name} artwork
          </div>
        </section>

        {/* FIXED Parallax Glass Effect Section */}
        <section className="relative h-80 md:h-96 overflow-hidden">
          {/* CSS-Only Parallax Background */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${artForms[selectedArtForm].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
          
          {/* Glass Effect Overlay */}
          <div className="absolute inset-0 bg-cream/85 backdrop-blur-lg"></div>
          
          {/* Content */}
          <div className="relative z-20 h-full flex items-center justify-center px-4">
            <div className="text-center space-y-6 max-w-lg">
              <div className="w-16 h-px bg-bronze mx-auto"></div>
              <p className="text-sm text-sage tracking-widest uppercase">
                Artistic Heritage
              </p>
              <h3 className="text-2xl md:text-3xl font-display text-charcoal leading-relaxed">
                Where ancient traditions meet contemporary expression
              </h3>
              <p className="text-sm text-sage max-w-md mx-auto leading-relaxed">
                Preserving the sacred art forms of India through dedicated teaching and authentic artistic practice
              </p>
              <div className="w-16 h-px bg-bronze mx-auto"></div>
            </div>
          </div>

          {/* Bottom gradient for smooth footer transition */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-cream via-cream/80 to-transparent z-10"></div>
        </section>

      </main>

      <Footer />
    </>
  )
}
