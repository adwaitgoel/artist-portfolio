import Image from 'next/image'
import { Exhibition } from '@/data/exhibitions'

interface ExhibitionCardProps {
  exhibition: Exhibition
}

export default function ExhibitionCard({ exhibition }: ExhibitionCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-IN', { 
      year: 'numeric', 
      month: 'long' 
    })
  }

  const getStatusBadge = () => {
    switch (exhibition.status) {
      case 'upcoming':
        return (
          <span className="inline-block px-3 py-1 text-xs font-medium bg-bronze text-cream rounded-full">
            Upcoming
          </span>
        )
      case 'current':
        return (
          <span className="inline-block px-3 py-1 text-xs font-medium bg-art-sage text-cream rounded-full">
            Current
          </span>
        )
      case 'past':
        return (
          <span className="inline-block px-3 py-1 text-xs font-medium bg-sage/20 text-sage rounded-full">
            Past
          </span>
        )
    }
  }

  return (
    <div className="glass-effect p-6 rounded-lg artwork-shadow hover:shadow-xl transition-all duration-300 group">
      {/* Featured Image */}
      <div className="relative h-48 mb-4 rounded-md overflow-hidden">
        <Image
          src={exhibition.featuredImage}
          alt={`Artwork from ${exhibition.title}`}
          fill
          style={{ objectFit: 'cover' }}
          className="group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3">
          {getStatusBadge()}
        </div>
      </div>

      {/* Exhibition Details */}
      <div className="space-y-3">
        <div>
          <h3 className="text-lg font-display font-semibold text-charcoal mb-1">
            {exhibition.title}
          </h3>
          <p className="text-sm text-sage uppercase tracking-wider">
            {exhibition.venue}
          </p>
        </div>

        <div className="text-sm text-sage">
          {exhibition.status === 'upcoming' ? (
            <span>{formatDate(exhibition.startDate)} - {formatDate(exhibition.endDate)}</span>
          ) : (
            <span>{new Date(exhibition.startDate).getFullYear()}</span>
          )}
        </div>

        {exhibition.description && (
          <p className="text-sm text-sage leading-relaxed line-clamp-3">
            {exhibition.description}
          </p>
        )}

        {exhibition.theme && (
          <div className="pt-2">
            <span className="text-xs text-bronze bg-bronze/10 px-2 py-1 rounded-full">
              {exhibition.theme}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
