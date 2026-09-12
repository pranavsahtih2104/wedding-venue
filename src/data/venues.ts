export interface Venue {
  id: string;
  name: string;
  subtitle: string;
  capacity: number;
  capacityText: string;
  type: 'indoor' | 'outdoor' | 'hybrid';
  typeLabel: string;
  areaSqFt: number;
  ceilingHeight: string;
  coverImage: string;
  gallery: string[];
  idealEvents: string[];
  features: string[];
  description: string;
  architecturalHighlights: string[];
  floorplanSummary: string;
  cateringStyle: string;
}

export const VENUES: Venue[] = [
  {
    id: 'grand-ballroom',
    name: 'THE GRAND BALLROOM',
    subtitle: 'Monumental Pillarless Grandeur & Crystal Splendor',
    capacity: 500,
    capacityText: '500 Guests',
    type: 'indoor',
    typeLabel: 'Indoor Luxury Space',
    areaSqFt: 12500,
    ceilingHeight: '28 ft High Soaring Ceilings',
    coverImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1545232979-fbf6d859ec1e?auto=format&fit=crop&w=800&q=80'
    ],
    idealEvents: ['Grand Wedding Reception', 'High-Energy Sangeet Night', 'Royal Dinner Banquet', 'Ring Ceremony'],
    features: [
      'Fully pillarless expanse allowing 360-degree unobstructed sightlines',
      'Bespoke hand-blown Bohemian crystal chandeliers with ambient dimmer presets',
      'Dedicated 3,000 sq ft pre-function foyer for cocktail welcome hours',
      'Concert-grade acoustics & integrated intelligent stage lighting grid',
      'Two private bridal holding suites with private vanity makeup stations'
    ],
    description: 'Designed as the crown jewel of Aurelia celebrations, The Grand Ballroom exudes unmatched royal hospitality. Its pillarless architecture ensures that every guest enjoys a prime view of the stage, sangeet performances, and ceremonial entrances.',
    architecturalHighlights: [
      'Italian Statuario marble flooring with brass inlay',
      'Acoustic walnut wood wall paneling with brushed gold filigree',
      'Motorized heavy-drape velvet curtains for dramatic stage reveals',
      'Direct freight elevator access for lavish stage décor setups'
    ],
    floorplanSummary: '12,500 sq. ft. Main Hall + 3,000 sq. ft. Pre-function foyer with separate culinary serving wings.',
    cateringStyle: 'Plated royal thali service, gourmet live multi-cuisine buffets, and champagne roving service.'
  },
  {
    id: 'garden-terrace',
    name: 'THE GARDEN TERRACE',
    subtitle: 'Sun-Drenched Lawns & Cascading Floral Canopies',
    capacity: 300,
    capacityText: '300 Guests',
    type: 'outdoor',
    typeLabel: 'Lush Open-Air Garden',
    areaSqFt: 8800,
    ceilingHeight: 'Open Sky Canopy',
    coverImage: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80'
    ],
    idealEvents: ['Vibrant Mehendi Carnival', 'Sunlit Haldi Ceremony', 'Sunset Pheras', 'Bohemian Brunch'],
    features: [
      'Perennial emerald Korean grass lawn edged with fragrant frangipani trees',
      'Solid stone pergolas designed for heavy floral installations and hanging swing photobooths',
      'Natural sunset light optimization for breathtaking candid wedding photography',
      'Integrated water misting and climate fans for warm afternoon comfort',
      'Direct paved pathways for bridal entry palki and golf buggy transport'
    ],
    description: 'The Garden Terrace combines the wild romance of lush botanicals with the refined polish of luxury resort architecture. It is the premier choice for joyful day events filled with marigold garlands, colorful drapes, and open-sky pheras.',
    architecturalHighlights: [
      'Sandstone paved central amphitheatre circle',
      'Fairy-lit century banyan tree centerpiece',
      'Custom stone pergola with built-in jasmine climbers',
      'Shaded colonial veranda for elderly guest seating'
    ],
    floorplanSummary: '8,800 sq. ft. manicured botanical lawn with adjoining 1,500 sq. ft. shaded veranda lounge.',
    cateringStyle: 'Interactive live street-food stations, artisanal mocktail bars, wood-fired counters, and organic seasonal buffets.'
  },
  {
    id: 'heritage-courtyard',
    name: 'THE HERITAGE COURTYARD',
    subtitle: 'Sandstone Arches, Lotus Fountains & Torch-Lit Pheras',
    capacity: 200,
    capacityText: '200 Guests',
    type: 'hybrid',
    typeLabel: 'Regal Semi-Open Courtyard',
    areaSqFt: 6200,
    ceilingHeight: 'Open Sky with Shaded Colonnades',
    coverImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80'
    ],
    idealEvents: ['Traditional Sacred Pheras', 'Royal Muhurtham', 'Intimate Sangeet', 'Evening Candlelit Sitar Soirée'],
    features: [
      'Handcrafted Jodhpur sandstone arches lit with hundreds of traditional brass diyas',
      'Carved lotus water fountain at the center providing tranquil ambient acoustics',
      'Surrounding 360-degree heritage colonnades for weather-shielded guest dining',
      'Traditional royal shehnai & nagada performance balcony overlooking the mandap',
      'Private royal bridal arrival pathway through arched corridors'
    ],
    description: 'Imbued with the romance of royal Indian palaces, The Heritage Courtyard provides an intimate yet overwhelmingly grand stage for sacred wedding rituals, where sacred Vedic chants resonate against ancient stone arches.',
    architecturalHighlights: [
      'Authentic red and beige sandstone jharokhas',
      'Central lotus pond adaptable as floating floral mandap',
      'Hand-carved stone pillars supporting silk canopies',
      'Perimeter brass mashaal torch stands for evening ceremony drama'
    ],
    floorplanSummary: '6,200 sq. ft. central sandstone courtyard surrounded by covered 12-ft wide arched pillared verandas.',
    cateringStyle: 'Silver thali royal dining, traditional satvik feasts, Awadhi dum spreads, and bespoke artisanal mithai bars.'
  },
  {
    id: 'rooftop',
    name: 'THE ROOFTOP',
    subtitle: '360° Ocean Panoramas & Starlit Cocktail Glamour',
    capacity: 150,
    capacityText: '150 Guests',
    type: 'outdoor',
    typeLabel: 'Panoramic Clifftop Deck',
    areaSqFt: 4600,
    ceilingHeight: 'Infinite Horizon & Starlit Sky',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80'
    ],
    idealEvents: ['Sunset Welcome Cocktails', 'Engagement Soirée', 'VIP Midnight After-Party', 'Private Post-Wedding Brunch'],
    features: [
      'Unbroken 360-degree vista of the azure Bay of Bengal and coastal cliffs',
      'Illuminated onyx mixology island bar serving custom-infused botanical cocktails',
      'Tempered frameless glass safety balustrade maximizing uninterrupted ocean views',
      'Lounge seating with firepit tables and cozy cashmere throw blankets for ocean breezes',
      'Dedicated DJ booth and state-of-the-art spatial sound system'
    ],
    description: 'Suspended high above the coastline, The Rooftop is our most exclusive and glamorous venue. As twilight falls, the sky transforms into hues of violet and gold, setting the stage for unforgettable cocktail receptions and dancing under the stars.',
    architecturalHighlights: [
      'Backlit translucent amber onyx bar counter',
      'Floating wooden deck platform with perimeter water troughs',
      'Frameless infinity-view glass perimeter',
      'Motorized weather-retractable pergolas'
    ],
    floorplanSummary: '4,600 sq. ft. open-air timber deck with dual bar stations and sheltered lounge cabanas.',
    cateringStyle: 'Gourmet roving hors d’oeuvres, live sushi & robata counters, molecular cocktails, and single-origin coffee bars.'
  }
];
