export interface Exhibition {
  id: string
  title: string
  venue: string
  startDate: string
  endDate: string
  status: 'upcoming' | 'current' | 'past'
  featuredImage: string
  description: string
  theme?: string
}

export const exhibitions: Exhibition[] = [
  // Upcoming Exhibition (Dummy)
  {
    id: 'spring-art-gala-2024',
    title: 'Spring Art Gala',
    venue: 'Mumbai Art Gallery',
    startDate: '2024-05-15',
    endDate: '2024-05-25',
    status: 'upcoming',
    featuredImage: '/artworks/oil-painting-featured.jpeg',
    description: 'A celebration of traditional Indian art forms featuring mythological themes and contemporary interpretations.',
    theme: 'Contemporary Indian Mythology'
  },
  
  // Past Exhibitions from CV/Profile data
  {
    id: 'royal-merit-award-2023',
    title: 'Royal Merit Award - Oil Painting',
    venue: 'Indian Royal Academy of Arts & Culture, Karnataka',
    startDate: '2023-11-01',
    endDate: '2023-11-30',
    status: 'past',
    featuredImage: '/artworks/oil-painting-featured.jpeg',
    description: 'Recognition for excellence in oil painting depicting Hindu mythology and traditional art forms.'
  },
  {
    id: 'nehru-centre-2023',
    title: 'Group Show',
    venue: 'Nehru Centre',
    startDate: '2023-09-01',
    endDate: '2023-09-15',
    status: 'past',
    featuredImage: '/artworks/pencil-sketch-featured.jpeg',
    description: 'Collective exhibition featuring contemporary Indian artists preserving traditional themes.'
  },
  {
    id: 'heart-of-art-2023',
    title: 'Heart of Art',
    venue: 'Nesco Centre',
    startDate: '2023-07-01',
    endDate: '2023-07-31',
    status: 'past',
    featuredImage: '/artworks/water-color-featured.jpg',
    description: 'Art exhibition celebrating the essence of Indian cultural heritage through visual arts.'
  },
  {
    id: 'artival-jehangir-2023',
    title: 'Artival',
    venue: 'Jehangir Art Gallery',
    startDate: '2023-03-01',
    endDate: '2023-03-31',
    status: 'past',
    featuredImage: '/artworks/oil-painting-featured.jpeg',
    description: 'Prestigious group exhibition at Mumbai\'s iconic Jehangir Art Gallery.'
  },
  {
    id: 'chetak-festival-2022',
    title: 'Chetak Festival',
    venue: 'Sarangkheda',
    startDate: '2022-12-01',
    endDate: '2022-12-15',
    status: 'past',
    featuredImage: '/artworks/pencil-sketch-featured.jpeg',
    description: 'Cultural festival celebrating regional art forms and traditional craftsmanship.'
  },
  {
    id: 'artival-mumbai-2022',
    title: 'Artival',
    venue: 'Mumbai',
    startDate: '2022-10-01',
    endDate: '2022-10-31',
    status: 'past',
    featuredImage: '/artworks/water-color-featured.jpg',
    description: 'Mumbai art festival showcasing diverse artistic expressions and contemporary themes.'
  },
  {
    id: 'bombay-art-society-2022',
    title: 'Bombay Art Society - Art Carnival',
    venue: 'Mumbai',
    startDate: '2022-08-01',
    endDate: '2022-08-31',
    status: 'past',
    featuredImage: '/artworks/oil-painting-featured.jpeg',
    description: 'Annual art carnival by the prestigious Bombay Art Society.'
  },
  {
    id: 'canvas-mini-2022',
    title: 'Canvas Mini Art Festival',
    venue: 'Nesco Centre, Mumbai',
    startDate: '2022-06-01',
    endDate: '2022-06-30',
    status: 'past',
    featuredImage: '/artworks/pencil-sketch-featured.jpeg',
    description: 'Intimate art festival featuring miniature works and detailed artistic expressions.'
  },
  {
    id: 'india-art-festival-delhi-2022',
    title: 'India Art Festival',
    venue: 'Delhi',
    startDate: '2022-03-01',
    endDate: '2022-03-31',
    status: 'past',
    featuredImage: '/artworks/water-color-featured.jpg',
    description: 'National art festival celebrating India\'s rich artistic heritage and contemporary innovations.'
  },
  {
    id: 'parth-academy-2020',
    title: 'Parth Academy Online Art Exhibition',
    venue: 'Online',
    startDate: '2020-11-01',
    endDate: '2020-11-30',
    status: 'past',
    featuredImage: '/artworks/oil-painting-featured.jpeg',
    description: 'Digital exhibition showcasing traditional art in the virtual space during challenging times.'
  },
  {
    id: 'pune-art-festival-2019',
    title: 'Pune Art Festival',
    venue: 'Pune',
    startDate: '2019-11-01',
    endDate: '2019-11-30',
    status: 'past',
    featuredImage: '/artworks/pencil-sketch-featured.jpeg',
    description: 'Annual celebration of art in Pune featuring diverse artistic expressions.'
  },
  {
    id: 'mumbai-art-festival-2019',
    title: 'Mumbai Art Festival',
    venue: 'Mumbai',
    startDate: '2019-09-01',
    endDate: '2019-09-30',
    status: 'past',
    featuredImage: '/artworks/water-color-featured.jpg',
    description: 'Mumbai\'s premier art festival celebrating the city\'s vibrant artistic community.'
  },
  {
    id: 'spandan-incredible-talent-2019',
    title: 'Spandan Incredible Talent VI',
    venue: 'Mumbai',
    startDate: '2019-07-01',
    endDate: '2019-07-31',
    status: 'past',
    featuredImage: '/artworks/oil-painting-featured.jpeg',
    description: 'Sixth edition of Spandan\'s platform for showcasing incredible artistic talent.'
  },
  {
    id: 'india-art-festival-mumbai-2019',
    title: 'India Art Festival',
    venue: 'Mumbai',
    startDate: '2019-03-01',
    endDate: '2019-03-31',
    status: 'past',
    featuredImage: '/artworks/pencil-sketch-featured.jpeg',
    description: 'Mumbai edition of India\'s prestigious art festival.'
  },
  {
    id: 'janiv-art-exhibition-2018',
    title: 'Janiv Art Exhibition',
    venue: 'Pune',
    startDate: '2018-11-01',
    endDate: '2018-11-30',
    status: 'past',
    featuredImage: '/artworks/water-color-featured.jpg',
    description: 'Pune-based art exhibition featuring contemporary interpretations of traditional themes.'
  },
  {
    id: 'mumbai-art-festival-2018',
    title: 'Mumbai Art Festival',
    venue: 'Mumbai',
    startDate: '2018-09-01',
    endDate: '2018-09-30',
    status: 'past',
    featuredImage: '/artworks/oil-painting-featured.jpeg',
    description: 'Annual Mumbai art festival showcasing the city\'s diverse artistic landscape.'
  },
  {
    id: 'kala-spandan-2018',
    title: 'Kala Spandan Art Exhibition',
    venue: 'Mumbai',
    startDate: '2018-06-01',
    endDate: '2018-06-30',
    status: 'past',
    featuredImage: '/artworks/pencil-sketch-featured.jpeg',
    description: 'Art exhibition focusing on traditional Indian art forms and cultural heritage.'
  },
  {
    id: 'kalanubhuti-2018',
    title: 'Kalanubhuti Painting Exhibition',
    venue: 'Pune',
    startDate: '2018-03-01',
    endDate: '2018-03-31',
    status: 'past',
    featuredImage: '/artworks/water-color-featured.jpg',
    description: 'Pune-based painting exhibition celebrating traditional and contemporary art forms.'
  },
  {
    id: 'spandan-goa-2017',
    title: 'Spandan Annual Art Festival',
    venue: 'Goa',
    startDate: '2017-12-01',
    endDate: '2017-12-31',
    status: 'past',
    featuredImage: '/artworks/oil-painting-featured.jpeg',
    description: 'Annual art festival in Goa celebrating artistic excellence and cultural heritage.'
  }
]
