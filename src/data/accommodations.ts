export interface Accommodation {
  id: string;
  name: string;
  category: string;
  capacityText: string;
  sizeSqFt: number;
  image: string;
  description: string;
  amenities: string[];
  features: string[];
  view: string;
}

export const ACCOMMODATIONS: Accommodation[] = [
  {
    id: 'imperial-bridal-suite',
    name: 'THE IMPERIAL BRIDAL SUITE',
    category: 'Signature Suite',
    capacityText: 'Bride & Bridal Party / Couple',
    sizeSqFt: 2200,
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=85',
    description: 'An opulent 2,200 sq. ft. sanctuary created specifically for the bride. Featuring an illuminated 6-mirror professional makeup salon, walk-in couture wardrobe room, marble jacuzzi overlooking the ocean, and private terrace for bridal photography.',
    amenities: ['Professional 6-station bridal vanity salon', 'Walk-in couture wardrobe & steamer', 'Oceanfront marble soaking tub', '24/7 dedicated butler & champagne bar', 'Private elevator and separate stylist entry'],
    features: ['Custom velvet chaise lounges', 'Full-length 3-way backlit gold mirrors', 'Aromatherapy shower with rose mist', 'In-suite sound system'],
    view: 'Panoramic Ocean & Sunrise Clifftop'
  },
  {
    id: 'royal-heritage-suite',
    name: 'ROYAL HERITAGE SUITES',
    category: 'Luxury Suite',
    capacityText: 'Groom & Immediate Family',
    sizeSqFt: 1400,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=85',
    description: 'Rich teakwood interiors, carved jharokha balconies, and plush living chambers ideal for groom preparation, traditional sehra bandi rituals, and family gatherings.',
    amenities: ['Private royal balcony with courtyard view', 'Handcrafted teak bar counter', 'Italian marble rain shower', 'Groom attire pressing & valet', 'Featherdown king bedding'],
    features: ['Double vanity marble bathrooms', 'Curated single malt bar setup', 'Smart lighting ambiance modes', 'High-speed fiber connectivity'],
    view: 'Heritage Sandstone Courtyard & Fountains'
  },
  {
    id: 'oceanfront-villas',
    name: 'OCEANFRONT PRIVATE POOL VILLAS',
    category: 'Private Villa',
    capacityText: 'Families & VIP Guests (4–6 Guests)',
    sizeSqFt: 1800,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=85',
    description: 'Secluded standalone duplex villas with private infinity plunge pools, sun decks, and bespoke living rooms designed for families traveling together.',
    amenities: ['Private temperature-controlled plunge pool', 'Sun lounger timber deck', 'Two expansive ensuite master bedrooms', 'Personal villa host concierge', 'In-villa private breakfast dining'],
    features: ['Floor-to-ceiling glass sliding doors', 'Bose outdoor sound system', 'Nespresso artisanal coffee bar', 'Luxury bathrobes and organic toiletries'],
    view: 'Unobstructed Bay of Bengal Horizon'
  },
  {
    id: 'deluxe-rooms',
    name: 'DELUXE HERITAGE ROOMS',
    category: 'Guest Rooms',
    capacityText: 'Wedding Guests (2 Guests)',
    sizeSqFt: 650,
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=85',
    description: 'Elegantly appointed rooms blending contemporary minimalism with royal Indian textiles, ensuring your wedding attendees rest in absolute comfort.',
    amenities: ['Plush king or twin pillowtop beds', 'Walk-in rain shower with brass fixtures', 'Aurelia custom welcome amenity box', 'Smart TV with streaming casting', 'Complimentary pressing of ceremony attire'],
    features: ['High-thread-count Egyptian cotton linens', 'Soundproof acoustic glazing', 'Curated local herbal teas', 'Express in-room dining'],
    view: 'Manicured Botanical Gardens or Sea View'
  }
];
