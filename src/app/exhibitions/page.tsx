import Navigation from '../../components/layout/navigation'
import Footer from '../../components/layout/footer'
import ExhibitionCard from '../../components/exhibitions/ExhibitionCard'
import { exhibitions } from '../../data/exhibitions'

export default function ExhibitionsPage() {
  const upcomingExhibitions = exhibitions.filter(ex => ex.status === 'upcoming')
  const pastExhibitions = exhibitions.filter(ex => ex.status === 'past')

  // Group past exhibitions by year
  const exhibitionsByYear = pastExhibitions.reduce((acc, exhibition) => {
    const year = new Date(exhibition.startDate).getFullYear()
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(exhibition)
    return acc
  }, {} as Record<number, typeof pastExhibitions>)

  const years = Object.keys(exhibitionsByYear)
    .map(Number)
    .sort((a, b) => b - a) // Sort descending (newest first)

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-cream">
        
        {/* Page Header */}
        <section className="pt-32 pb-16">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-display font-bold text-charcoal mb-6">
                Exhibitions
              </h1>
              <p className="text-lg md:text-xl text-sage max-w-3xl mx-auto leading-relaxed">
                A journey through artistic milestones, celebrating <strong className="text-charcoal">15+ years</strong> of 
                exhibitions across India&apos;s most prestigious galleries and art festivals.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Exhibitions */}
        {upcomingExhibitions.length > 0 && (
          <section className="pb-16">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-charcoal mb-2">
                  Upcoming Exhibitions
                </h2>
                <div className="w-16 h-1 bg-bronze"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingExhibitions.map((exhibition) => (
                  <ExhibitionCard key={exhibition.id} exhibition={exhibition} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Past Exhibitions - Timeline */}
        <section className="pb-16">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-charcoal mb-2">
                Exhibition History
              </h2>
              <div className="w-16 h-1 bg-bronze"></div>
            </div>

            {/* Timeline */}
            <div className="space-y-12">
              {years.map((year) => (
                <div key={year} className="relative">
                  {/* Year Header */}
                  <div className="flex items-center mb-8">
                    <div className="text-3xl font-display font-bold text-bronze mr-6">
                      {year}
                    </div>
                    <div className="flex-1 h-px bg-sage/20"></div>
                  </div>

                  {/* Exhibitions for this year */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-0 md:ml-16">
                    {exhibitionsByYear[year].map((exhibition) => (
                      <ExhibitionCard key={exhibition.id} exhibition={exhibition} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Exhibition Inquiry CTA */}
        <section className="bg-stone/20 py-16">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-charcoal mb-4">
              Interested in Exhibiting Together?
            </h3>
            <p className="text-sage mb-8 max-w-2xl mx-auto">
              Collaborate on upcoming exhibitions or commission original works inspired by 
              Hindu mythology and traditional Indian art forms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:pratibhagoelart@gmail.com"
                className="btn-primary"
              >
                Contact for Exhibitions
              </a>
              <a 
                href="#"
                className="btn-secondary"
              >
                View Available Works
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
