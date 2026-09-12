export interface WeddingOffer {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highlights: string[];
  validity: string;
  inclusions: string[];
  idealFor: string;
}

export const OFFERS: WeddingOffer[] = [
  {
    id: 'destination-escape',
    badge: 'CURATED PRIVILEGE',
    title: 'THE DESTINATION ESCAPE',
    subtitle: 'Complimentary welcome sundowner experience for residential weddings.',
    description: 'Book your 3-day destination celebration and receive an exclusive complimentary sunset cocktail reception on The Rooftop with bespoke artisanal canapés.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85',
    highlights: [
      'Complimentary 2-hour Sunset Sundowner on The Rooftop',
      'Curated welcome beverage bar with artisanal gin concoctions',
      'Dedicated luggage valet and express VIP suite check-in',
      'Special luxury room block rates for attending guests'
    ],
    validity: 'For celebrations booked 6+ months in advance',
    inclusions: ['Up to 150 cocktail guests', 'Signature chef canapés', 'Acoustic background musician', 'Luxury welcome hampers'],
    idealFor: 'Couples planning 3-day destination celebrations with traveling guests.'
  },
  {
    id: 'grand-celebration',
    badge: 'SIGNATURE RESIDENTIAL',
    title: 'THE GRAND CELEBRATION',
    subtitle: 'Bespoke privileges and bridal suite upgrades for multi-day weddings.',
    description: 'Designed for grand multi-event weddings spanning 3 or more ceremonies across The Grand Ballroom, Heritage Courtyard, and Garden Terrace.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=85',
    highlights: [
      'Complimentary upgrade to The Imperial Presidential Bridal Suite',
      'Exclusive 24-hour venue transition access for master stage builds',
      'Private pre-wedding culinary tasting session for up to 8 family members',
      'Complimentary pre-wedding couple spa rejuvenation ritual'
    ],
    validity: 'Select wedding dates for 2026 & 2027 seasons',
    inclusions: ['Access to all 4 venue spaces', 'Master chef menu customization', 'Dedicated lead wedding director', 'Helipad arrival access'],
    idealFor: 'Grand celebrations with 300+ guests and multi-day ceremonies.'
  },
  {
    id: 'intimate-affair',
    badge: 'BOUTIQUE CHARM',
    title: 'THE INTIMATE AFFAIR',
    subtitle: 'An artisanal sanctuary for close-knit ceremonies under 120 guests.',
    description: 'An exquisitely curated package for couples who value deep personal intimacy, heritage sandstone architecture, and Michelin-standard silver thali dining.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=85',
    highlights: [
      'Exclusive private buyout of The Heritage Courtyard & Colonades',
      'Customized silver-service 7-course royal degustation feast',
      'Live classical Santoor & Flute acoustic ensemble during pheras',
      'Handcrafted calligraphed menus and wax-sealed guest place cards'
    ],
    validity: 'Available for weekday and weekend boutique dates',
    inclusions: ['The Heritage Courtyard', 'Bespoke floral mandap', 'Silver thali dining', 'Presidential Suite for 2 nights'],
    idealFor: 'Soulful, aesthetic boutique weddings and vow renewals (50–120 guests).'
  }
];
