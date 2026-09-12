export interface WeddingService {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highlights: string[];
}

export const SERVICES: WeddingService[] = [
  {
    id: 'planning',
    number: '01',
    title: 'WEDDING PLANNING & CONCIERGE',
    subtitle: 'End-to-End Orchestration & Flawless Timing',
    description: 'Our senior wedding directors manage every timeline, vendor coordination, RSVP management, and ritual logistics so you remain present in every magical second.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85',
    highlights: ['Dedicated Lead Wedding Director', 'Run-of-show timeline coordination', 'Vendor liaison & quality control', 'Vedic priest & ritual specialist coordination']
  },
  {
    id: 'decor',
    number: '02',
    title: 'DÉCOR & FLORAL ARCHITECTURE',
    subtitle: 'Bespoke Mandaps, Floral Sculptures & Atmospheric Lighting',
    description: 'Master florists and spatial designers transform each venue with thousands of imported blooms, architectural lighting designs, and custom stage sets tailored to your aesthetic.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=85',
    highlights: ['Custom Mandap structural design', 'Sourced exotic blooms & fragrant flora', 'Intelligent architectural lighting rigs', 'Bespoke lounge furniture & luxury linens']
  },
  {
    id: 'cuisine',
    number: '03',
    title: 'ROYAL CUISINE & GASTRONOMY',
    subtitle: 'Curated Menus by Master Chefs & Live Thematic Counters',
    description: 'From regional Indian royal thalis to contemporary European plated menus, our master culinary brigade crafts bespoke feasts that become legends among your guests.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=85',
    highlights: ['Multi-cuisine master chef consultation', 'Live theatrical cooking stations', 'Artisanal mithai & pastry atelier', 'Custom cocktail & sommelier curation']
  },
  {
    id: 'wellness',
    number: '04',
    title: 'BEAUTY & BRIDAL WELLNESS',
    subtitle: 'Sanctuary Spas, Bridal Vanity Lounges & Ayurvedic Rituals',
    description: 'Pamper yourself leading up to the ceremonies with holistic Ayurvedic massages, gold-infused bridal facials, in-suite hair styling, and private dressing lounges.',
    image: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1000&q=85',
    highlights: ['In-suite bridal dressing lounge', 'Ayurvedic pre-wedding detox rituals', 'VIP hair & makeup styling suites', 'Groom grooming & wellness bar']
  },
  {
    id: 'photography',
    number: '05',
    title: 'FINE ART PHOTOGRAPHY & CINEMA',
    subtitle: 'Editorial Framing & Cinematic 4K Wedding Films',
    description: 'We partner with world-renowned wedding documentarians who capture unscripted emotion, breathtaking drone sweeps, and magazine-cover portraits.',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=85',
    highlights: ['Editorial couple portraiture', 'Same-day edit teaser reels for reception', 'Drone aerial cinematography', 'Heirloom leather-bound album curation']
  },
  {
    id: 'entertainment',
    number: '06',
    title: 'ROYAL ENTERTAINMENT & MUSIC',
    subtitle: 'Symphony Strings, Celebrity Artists & High-Voltage DJs',
    description: 'Enliven your ceremonies with traditional shehnai maestros, soul-stirring Sufi qawwals, international live bands, and chart-topping Bollywood DJs for the Sangeet.',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=85',
    highlights: ['Traditional Vedic ritual musicians', 'Live saxophone & jazz for cocktails', 'Celebrity performers & choreographer booking', 'Intelligent laser & cold pyrotechnic shows']
  },
  {
    id: 'guest-exp',
    number: '07',
    title: 'GUEST EXPERIENCE & LOGISTICS',
    subtitle: 'Airport Fleet Transfers, Luxury Welcome Hampers & Luggage Concierge',
    description: 'From luxury Mercedes-Benz airport transfers to customized room hampers and 24/7 dedicated guest hospitality desks, your attendees experience royal pampering.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=85',
    highlights: ['Private airport transfer fleet', 'Curated welcome gift hamper design', '24/7 dedicated guest helpdesk', 'Childcare & elderly concierge support']
  },
  {
    id: 'hospitality',
    number: '08',
    title: 'BESPOKE ROYAL HOSPITALITY',
    subtitle: 'Traditional Aarti Welcome, Chauffeurs & Butler Service',
    description: 'Embodying the timeless spirit of “Atithi Devo Bhava”, our white-glove staff welcomes your families with flower petal showers, traditional aarti, and personal butler care.',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1000&q=85',
    highlights: ['Grand ceremonial entry with royal bugles', 'Personal butler for bride & groom families', 'In-room midnight dining service', 'Express steam pressing & wardrobe care']
  }
];
