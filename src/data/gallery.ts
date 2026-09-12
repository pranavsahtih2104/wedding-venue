export interface GalleryItem {
  id: string;
  title: string;
  category: 'WEDDINGS' | 'VENUES' | 'DÉCOR' | 'TABLES' | 'FOOD' | 'COUPLES' | 'CELEBRATIONS' | 'DETAILS';
  categoryLabel: string;
  image: string;
  location: string;
  aspectRatio: 'portrait' | 'landscape' | 'square' | 'tall';
  caption: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Twilight Mandap by the Coast',
    category: 'WEDDINGS',
    categoryLabel: 'Weddings',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
    location: 'The Coast Mandap Deck',
    aspectRatio: 'landscape',
    caption: 'Sunset vows illuminated by over a thousand candles as waves gently crash against the shore.'
  },
  {
    id: 'gal-2',
    title: 'Sandstone Heritage Jharokhas',
    category: 'VENUES',
    categoryLabel: 'Venues',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85',
    location: 'The Heritage Courtyard',
    aspectRatio: 'tall',
    caption: 'Intricate Rajasthani sandstone craftsmanship framing the royal ceremonial courtyard.'
  },
  {
    id: 'gal-3',
    title: 'Cascading White Orchid Canopy',
    category: 'DÉCOR',
    categoryLabel: 'Décor',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85',
    location: 'The Grand Ballroom',
    aspectRatio: 'portrait',
    caption: 'Ten thousand stems of pure white dendrobium orchids suspended above the reception foyer.'
  },
  {
    id: 'gal-4',
    title: 'Regal Candlelit Tablescape',
    category: 'TABLES',
    categoryLabel: 'Tables',
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1200&q=85',
    location: 'The Imperial Banquet',
    aspectRatio: 'landscape',
    caption: 'Gold-rimmed crystal glassware, 24k brass charger plates, and delicate blush ranunculus runners.'
  },
  {
    id: 'gal-5',
    title: 'Artisanal Saffron Feast & Kebabs',
    category: 'FOOD',
    categoryLabel: 'Food',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
    location: 'Royal Dining Hall',
    aspectRatio: 'square',
    caption: 'Slow-cooked Awadhi kebabs and saffron-perfumed rice crafted by our master chefs.'
  },
  {
    id: 'gal-6',
    title: 'Golden Hour Couple Portrait',
    category: 'COUPLES',
    categoryLabel: 'Couples',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85',
    location: 'Oceanfront Clifftop',
    aspectRatio: 'portrait',
    caption: 'An intimate moment captured amidst embroidered raw silk lehengas and sunset glow.'
  },
  {
    id: 'gal-7',
    title: 'High-Energy Sangeet Revelry',
    category: 'CELEBRATIONS',
    categoryLabel: 'Celebrations',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=85',
    location: 'The Grand Stage',
    aspectRatio: 'landscape',
    caption: 'Family dance performances with moving stage beams and kinetic lighting.'
  },
  {
    id: 'gal-8',
    title: 'Heirloom Polki Jewelry & Embroidery',
    category: 'DETAILS',
    categoryLabel: 'Details',
    image: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1200&q=85',
    location: 'Bridal Dressing Suite',
    aspectRatio: 'square',
    caption: 'Uncut diamond polki necklaces and hand-embroidered zardozi gold threads.'
  },
  {
    id: 'gal-9',
    title: 'Sacred Pheras around the Agni',
    category: 'WEDDINGS',
    categoryLabel: 'Weddings',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85',
    location: 'The Heritage Mandap',
    aspectRatio: 'tall',
    caption: 'Walking seven sacred steps around the holy fire amidst rose petal showers.'
  },
  {
    id: 'gal-10',
    title: 'Pillarless Ballroom with Crystal Fixtures',
    category: 'VENUES',
    categoryLabel: 'Venues',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85',
    location: 'The Grand Ballroom',
    aspectRatio: 'landscape',
    caption: 'Majestic 28-ft ceilings adorned with custom crystal chandeliers and velvet drapes.'
  },
  {
    id: 'gal-11',
    title: 'Joyful Sunlit Haldi Splash',
    category: 'CELEBRATIONS',
    categoryLabel: 'Celebrations',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=85',
    location: 'The Garden Lawn',
    aspectRatio: 'portrait',
    caption: 'Turmeric, marigold petals, and pure laughter during the auspicious haldi ceremony.'
  },
  {
    id: 'gal-12',
    title: 'Bespoke Mixology & Botanical Cocktails',
    category: 'FOOD',
    categoryLabel: 'Food',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=85',
    location: 'The Starlit Bar',
    aspectRatio: 'square',
    caption: 'Smoked single malts and rose petal gins garnished with 24k edible gold flakes.'
  }
];
