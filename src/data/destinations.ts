export interface Destination {
  id: string;
  name: string;
  tagline: string;
  location: string;
  description: string;
  longDescription: string;
  image: string;
  heroImage: string;
  gallery: string[];
  features: string[];
  capacityRange: string;
  weather: string;
  bestMonths: string;
  accentColor: string;
}

export const DESTINATIONS: Destination[] = [
  {
    id: 'coast',
    name: 'THE COAST',
    tagline: 'Celebrations by the water',
    location: 'Bay of Bengal Clifftops & Private Beachfront',
    description: 'Breathtaking ocean panoramas, golden-hour sea breezes, and dramatic coastal pavilions crafted for sunset pheras.',
    longDescription: 'Perched along pristine clifflines with panoramic views of the Bay of Bengal, our coastal destination merges gentle maritime breezes with royal hospitality. Exchange vows as the tide meets the shore, followed by starlit banquet receptions under the open sky.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
    heroImage: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['Oceanfront Mandap Deck', 'Private Sunset Boardwalk', 'Bioluminescent Beach Afterparties', 'Helipad Arrival'],
    capacityRange: '100 – 450 Guests',
    weather: 'Tropical coastal breeze, 24°C – 29°C',
    bestMonths: 'October — March',
    accentColor: '#C89689'
  },
  {
    id: 'palace',
    name: 'THE PALACE',
    tagline: 'Royal grandeur for unforgettable occasions',
    location: 'Heritage Sandstone Courtyards & Royal Arches',
    description: 'Immerse your celebration in majestic sandstone archways, torch-lit royal courtyards, and timeless regal splendor.',
    longDescription: 'Echoing the grandeur of India’s most storied dynasties, The Palace boasts soaring jharokhas, handcrafted marble fountains, and grand sandstone courtyards. Experience an opulent baraat procession with royal brass fanfares and candlelit dining fit for maharajas.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85',
    heroImage: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['Imperial Courtyard with Fountains', '24k Gold leaf banquet detailing', 'Royal Baraat Pavilion', 'Heritage Suite Wing'],
    capacityRange: '150 – 600 Guests',
    weather: 'Mild & pleasant evenings, 20°C – 27°C',
    bestMonths: 'September — April',
    accentColor: '#C5A880'
  },
  {
    id: 'gardens',
    name: 'THE GARDENS',
    tagline: 'Open-air celebrations surrounded by nature',
    location: 'Botanical Sanctuary & Century-Old Banyan Groves',
    description: 'Lush manicured lawns, botanical glasshouses, and whispering bamboo canopies dressed in cascading white jasmines.',
    longDescription: 'Sprawled across emerald botanical lawns surrounded by fragrant frangipani and century-old trees, The Gardens offers an idyllic bohemian oasis. Ideal for vibrant day mehendis, sunlit haldi ceremonies, and twilight pheras under fairy-lit boughs.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85',
    heroImage: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['Cascading Floral Pergolas', 'Glasshouse Greenhouse Pavilion', 'Amphitheatre Seating', 'Twilight Firefly Lighting'],
    capacityRange: '100 – 350 Guests',
    weather: 'Fresh garden climate, 22°C – 28°C',
    bestMonths: 'Year-Round (Except peak monsoon)',
    accentColor: '#7D8B78'
  },
  {
    id: 'city',
    name: 'THE CITY',
    tagline: 'Modern luxury in the heart of the city',
    location: 'Metropolitan Highs & Grand Pillarless Ballrooms',
    description: 'Sleek architectural lines, soaring 28-foot ceilings, bespoke crystal lighting installations, and unmatched city luxury.',
    longDescription: 'For couples seeking contemporary glamour combined with effortless logistical access, our City destination delivers monumental ballroom scale, soundproof acoustic architecture for sangeets, and skyline cocktail terraces with panoramic city vistas.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85',
    heroImage: 'https://images.unsplash.com/photo-1545232979-fbf6d859ec1e?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['Pillarless Grand Ballroom', 'Dedicated Bridal Dressing Salon', 'Integrated Concert-grade Acoustics', 'Private VIP Elevator'],
    capacityRange: '200 – 550 Guests',
    weather: 'Climate-controlled luxury environments',
    bestMonths: 'All 12 Months',
    accentColor: '#9B7B4B'
  }
];
