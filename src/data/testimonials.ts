export interface Testimonial {
  id: string;
  names: string;
  venue: string;
  destination: string;
  date: string;
  image: string;
  quote: string;
  celebrationType: string;
  storySnippet: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    names: 'Aarav & Meera Kapoor',
    venue: 'The Grand Ballroom & Coast Mandap',
    destination: 'The Coast, Visakhapatnam',
    date: 'FEBRUARY 2025',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=85',
    quote: 'From the first meeting to the final dance, everything felt effortless. They understood what we wanted and somehow made it even better. Watching the sunset over the ocean as we took our pheras was pure magic.',
    celebrationType: '3-Day Destination Wedding (420 Guests)',
    storySnippet: 'Aarav and Meera hosted a high-energy Sangeet in the Grand Ballroom followed by sunset cliffside pheras with guests flying in from London, Dubai, and Mumbai.',
    rating: 5
  },
  {
    id: 't-2',
    names: 'Dev & Samaira Singhania',
    venue: 'The Heritage Courtyard',
    destination: 'The Palace Estate',
    date: 'DECEMBER 2024',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=85',
    quote: 'The sandstone arches and torchlit fountains created a regal atmosphere that left our international guests speechless. The culinary team curated a 7-course royal Awadhi banquet that people are still messaging us about.',
    celebrationType: 'Royal Heritage Wedding (280 Guests)',
    storySnippet: 'An intimate royal heritage celebration featuring traditional Shehnai maestros, candlelit mandap styling, and silver thali service.',
    rating: 5
  },
  {
    id: 't-3',
    names: 'Kabir & Rhea Varma',
    venue: 'The Garden Terrace & The Rooftop',
    destination: 'The Gardens & Coastal Horizon',
    date: 'NOVEMBER 2024',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85',
    quote: 'Our Haldi on the lawns was full of joyful sunshine and marigolds, while the evening rooftop after-party felt like an ultra-exclusive lounge. The Aurelia team handled every logistical detail with calm, flawless grace.',
    celebrationType: 'Contemporary Fusion Wedding (310 Guests)',
    storySnippet: 'Spanning open botanical lawns for daytime ceremonies to a starlit cocktail speakeasy above the ocean waves.',
    rating: 5
  }
];
