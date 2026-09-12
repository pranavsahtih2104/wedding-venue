export interface WeddingExperience {
  id: string;
  name: string;
  subtitle: string;
  tag: string;
  image: string;
  heroImage: string;
  description: string;
  recommendedVenues: string[];
  decorDirection: string;
  cuisineHighlights: string[];
  vibe: string;
  suggestedDuration: string;
  specialMoments: string[];
}

export const EXPERIENCES: WeddingExperience[] = [
  {
    id: 'engagement',
    name: 'THE ENGAGEMENT',
    subtitle: 'An intimate prelude to a lifetime of love',
    tag: 'Pre-Wedding Celebration',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=85',
    heroImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85',
    description: 'The ceremonial beginning of your marital story. We curate romantic candlelit settings with bespoke floral installations, string quartets or acoustic sitar harmonies, and exquisite champagne toasts for the ring exchange.',
    recommendedVenues: ['The Rooftop', 'The Garden Terrace'],
    decorDirection: 'Pastel roses, crystal glassware, fairy-lit pergolas, and ivory drapery with champagne accents.',
    cuisineHighlights: ['Artisanal Hors d’oeuvres', 'Champagne & Prosecco Bar', 'Gourmet Grazing Tables', 'Bespoke Ring Cake'],
    vibe: 'Sophisticated, romantic, emotional, intimate',
    suggestedDuration: '4 Hours (Evening / Sunset)',
    specialMoments: ['Sunset Ring Exchange', 'Father of the Bride Toast', 'Acoustic First Dance', 'Sparkler Celebration']
  },
  {
    id: 'haldi',
    name: 'THE HALDI',
    subtitle: 'Golden sunshine, floral showers & joy',
    tag: 'Sacred Daytime Ritual',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85',
    heroImage: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=85',
    description: 'A jubilant, sun-kissed celebration where turmeric paste is applied with love and blessings. Featuring sunken floral brass tubs (urulis), yellow and orange marigold curtains, live dhol beats, and spontaneous splash revelry.',
    recommendedVenues: ['The Garden Terrace', 'The Heritage Courtyard Poolside'],
    decorDirection: 'Cascades of yellow & saffron genda phool (marigolds), handwoven wicker seats, brass vessels with rose petals, and cheerful ombre canopies.',
    cuisineHighlights: ['Chilled Tender Coconut Bar', 'Live Chaat Street', 'Fresh Mango & Rose Kulfis', 'Spiced Buttermilk'],
    vibe: 'Playful, vibrant, energetic, heartwarming',
    suggestedDuration: '3.5 Hours (Morning / Midday)',
    specialMoments: ['Flower Petal Showers (Phoolon ki Holi)', 'Brass Tub Ceremony', 'High-energy Punjabi Dhol Jugalbandi', 'Family Group Portraits']
  },
  {
    id: 'mehendi',
    name: 'THE MEHENDI',
    subtitle: 'Intricate henna, lively colors & bohemian music',
    tag: 'Afternoon Carnival & Artistry',
    image: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1200&q=85',
    heroImage: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1600&q=85',
    description: 'An artistic carnival celebration celebrating beauty and sisterhood. Master mehendi artists craft intricate bridal patterns while guests lounge under shaded cabanas with live folk singers and artisanal gin bars.',
    recommendedVenues: ['The Garden Terrace', 'The Heritage Courtyard'],
    decorDirection: 'Boho-chic wicker lounges, colorful Rajasthani umbrellas, floral floral swings, and block-printed cushions.',
    cuisineHighlights: ['Live Wood-Fired Pizza', 'Artisanal Gin & Tonic Bar', 'Traditional Chaat Counter', 'Bespoke Churros & Jalebis'],
    vibe: 'Bohemian, artistic, colorful, relaxing',
    suggestedDuration: '5 Hours (Afternoon into Twilight)',
    specialMoments: ['Bridal Henna Reveal', 'Live Bangle & Jutti Gifting Bazaar', 'Acoustic Folk Ensembles', 'Floral Swing Photo Moments']
  },
  {
    id: 'sangeet',
    name: 'THE SANGEET',
    subtitle: 'High-voltage glamour, family dance-offs & concert lights',
    tag: 'Grand Evening Extravaganza',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=85',
    heroImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=85',
    description: 'The most anticipated high-energy night of an Indian wedding. A concert-scale stage with kinetic LED backdrops, choreographed family dance competitions, celebrity artist performances, and non-stop revelry.',
    recommendedVenues: ['The Grand Ballroom', 'The Coast Amphitheatre'],
    decorDirection: 'Dramatic dark espresso & metallic gold palette, mirror-tile dance floors, neon art signage, and moving-head beam lights.',
    cuisineHighlights: ['Signature Smoked Cocktails', 'Live Teppanyaki & Robata Grills', 'Royal Awadhi Biryani Stations', 'Midnight Sliders & Fries'],
    vibe: 'Glamorous, electric, exuberant, show-stopping',
    suggestedDuration: '6+ Hours (Evening to Late Night)',
    specialMoments: ['Choreographed Couple Performance', 'Bride vs Groom Family Dance Battle', 'Celebrity DJ Set', 'Cryo & Sparkler Finale']
  },
  {
    id: 'wedding',
    name: 'THE WEDDING',
    subtitle: 'Sacred pheras, royal traditions & eternal promises',
    tag: 'The Main Ceremonial Wedding',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85',
    heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85',
    description: 'The sanctified heart of the celebration. From a majestic royal Baraat procession to a breathtaking floral Mandap bathed in twilight candlelight, every ritual is executed with deep reverence and cinematic beauty.',
    recommendedVenues: ['The Heritage Courtyard', 'The Coast Mandap Deck', 'The Grand Ballroom'],
    decorDirection: 'Thousands of fragrant tuberose and red rose garlands, sculpted floral mandaps, floating brass diyas, and silk cushions.',
    cuisineHighlights: ['Grand Royal Silver Thali Service', 'Traditional Vedic Pure Vegetarian Spread', 'Regional Royal Specialties', 'Hot Malpua & Rabdi Live Station'],
    vibe: 'Sacred, majestic, emotional, awe-inspiring',
    suggestedDuration: '5 Hours (Twilight into Starlit Night)',
    specialMoments: ['Royal Baraat with Brass Band', 'Grand Bridal Entry Under Phoolon ki Chaadar', 'Jaimala Ceremony with Cold Pyros', 'The Sacred 7 Pheras']
  },
  {
    id: 'reception',
    name: 'THE RECEPTION',
    subtitle: 'Black-tie elegance, gourmet dining & royal congratulations',
    tag: 'Formal Evening Gala',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
    heroImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=85',
    description: 'A black-tie formal gala celebrating the newlyweds. Featuring grand crystal tablescapes, multi-tiered artisanal wedding cake cuttings, five-course sit-down or grand buffet dining, and live symphony orchestras.',
    recommendedVenues: ['The Grand Ballroom', 'The Coast Grand Pavilion'],
    decorDirection: 'Lush white orchid and hydrangea tablescapes, 24k gold charger plates, taper candles in crystal holders, and cascading floral walls.',
    cuisineHighlights: ['Chef-Curated 5-Course Plated Banquet', 'Global Wine & Single Malt Pairings', 'Live Carving Stations', 'Handcrafted Dessert Pavilion'],
    vibe: 'Opulent, sophisticated, timeless, regal',
    suggestedDuration: '5 Hours (Evening)',
    specialMoments: ['Formal Couple Entrance', 'Multi-Tiered Cake Cutting', 'Best Man & Maid of Honor Speeches', 'Live Jazz / Big Band Set']
  },
  {
    id: 'after-party',
    name: 'THE AFTER PARTY',
    subtitle: 'Speakeasy glamour, secret passwords & dawn dancefloors',
    tag: 'Late Night VIP Lounge',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=85',
    heroImage: 'https://images.unsplash.com/photo-1545232979-fbf6d859ec1e?auto=format&fit=crop&w=1600&q=85',
    description: 'When the formal ceremonies conclude, the celebration transitions into an exclusive late-night speakeasy with high-energy deep house, bespoke mixology, and gourmet comfort food till sunrise.',
    recommendedVenues: ['The Rooftop', 'The Speakeasy Cellar'],
    decorDirection: 'Moody velvet booths, neon quote installations, dim amber lighting, and sleek black marble bars.',
    cuisineHighlights: ['Midnight Truffle Fries & Sliders', 'Artisanal Ramen Bowls', 'Molecular Shooters', 'Espresso Martini Bar'],
    vibe: 'Intimate, energetic, glamorous, uninhibited',
    suggestedDuration: 'Late Night till Dawn (12:00 AM — 4:00 AM)',
    specialMoments: ['Secret Speakeasy Entrance', 'B2B DJ Sessions', 'Late-Night Gourmet Snack Raids', 'Sunrise Ocean Watching']
  }
];
