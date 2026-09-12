export interface CuisineCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  signatureDishes: {
    name: string;
    description: string;
    origin: string;
    dietary: 'Veg' | 'Non-Veg' | 'Jain Available';
  }[];
}

export const CUISINE_CATEGORIES: CuisineCategory[] = [
  {
    id: 'royal-indian',
    name: 'ROYAL INDIAN & NIZAMI',
    tagline: 'Centuries-old slow-cooked heritage recipes',
    description: 'Dum-cooked Awadhi delicacies, saffron-scented Nizami biryanis, and melt-in-the-mouth galouti kebabs infused with royal spices.',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1000&q=85',
    signatureDishes: [
      { name: 'Zafrani Shahi Dum Biryani', description: 'Fragrant aged basmati rice layered with royal spices and slow-cooked in sealed clay pots.', origin: 'Lucknowi / Hyderabadi Heritage', dietary: 'Non-Veg' },
      { name: 'Awadhi Dal Bukhara & Truffle Naan', description: 'Slow-simmered black lentils cooked for 24 hours with churned white butter.', origin: 'Awadh', dietary: 'Veg' },
      { name: 'Melt-in-Mouth Galouti Kebabs', description: 'Finely minced spiced patties served on sheermaal with smoked rose essence.', origin: 'Royal Court', dietary: 'Non-Veg' },
      { name: 'Paneer Lababdar in Clay Pot', description: 'Cottage cheese simmered in roasted tomato, cashew, and melon seed reduction.', origin: 'North Indian', dietary: 'Jain Available' }
    ]
  },
  {
    id: 'coastal-regional',
    name: 'COASTAL & ANDHRA HERITAGE',
    tagline: 'Vibrant coastal spices and fresh seafood',
    description: 'Fresh Bay of Bengal catch marinated in stone-ground spices, fragrant coconut curries, and authentic Andhra royal delicacies.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=85',
    signatureDishes: [
      { name: 'Gongura Royyalu (Bay of Bengal Prawns)', description: 'Succulent jumbo prawns sautéed with tangy sorrel leaves and shallots.', origin: 'Coastal Andhra', dietary: 'Non-Veg' },
      { name: 'Konaseema Coconut Fish Curry', description: 'Fresh line-caught fish simmered in fresh coconut milk, green chilies, and curry leaves.', origin: 'Godavari Delta', dietary: 'Non-Veg' },
      { name: 'Ulava Charu with Creamy Butter Rice', description: 'Velvety horse-gram reduction served with organic steamed rice and local dollop of ghee.', origin: 'Andhra Royal Household', dietary: 'Veg' },
      { name: 'Steamed Pesarattu with Allam Chutney', description: 'Golden whole green-gram crepes topped with ginger relish and roasted cashews.', origin: 'Coastal Specialty', dietary: 'Veg' }
    ]
  },
  {
    id: 'international',
    name: 'PAN-ASIAN & MODERN EUROPEAN',
    tagline: 'Contemporary world gastronomy for global palates',
    description: 'Handcrafted dim sums, live Teppanyaki grills, artisanal wood-fired sourdough pizzas, and French truffle risottos.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85',
    signatureDishes: [
      { name: 'Edamame & Truffle Crystal Dumplings', description: 'Steamed translucent parcels infused with black summer truffle oil.', origin: 'Contemporary Asian', dietary: 'Veg' },
      { name: 'Wood-Fired Burrata & Heritage Fig Flatbread', description: 'Creamy burrata, balsamic reduction, wild arugula, and roasted walnuts.', origin: 'Italian Riviera', dietary: 'Veg' },
      { name: 'Pan-Seared Chilean Sea Bass', description: 'Served over asparagus risotto with saffron lemon butter drizzle.', origin: 'Modern European', dietary: 'Non-Veg' },
      { name: 'Robata Grilled Miso Glazed Skewers', description: 'Slow-charred over Japanese charcoal with sweet mirin and sesame.', origin: 'Robata Grill', dietary: 'Non-Veg' }
    ]
  },
  {
    id: 'desserts',
    name: 'ARTISANAL DESSERTS & SWEETS',
    tagline: 'A theatrical finale of gold leaf and royal confections',
    description: 'Steaming hot jalebis with saffron rabdi, 24k gold leaf motichoor truffles, and modern French pastry towers.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=85',
    signatureDishes: [
      { name: 'Live Kesari Jalebi & Laccha Rabdi', description: 'Crisp spirals dipped in saffron syrup, served alongside chilled reduced milk.', origin: 'Varanasi Style', dietary: 'Veg' },
      { name: '24k Gold Leaf Baklava & Pistachio Gelato', description: 'Multi-layered crisp filo with crushed green pistachios and wild blossom honey.', origin: 'Mediterranean Luxury', dietary: 'Veg' },
      { name: 'Belgian Chocolate & Rose Geode Cake', description: 'Dark single-origin chocolate sponge layered with rose water ganache and crystal sugar gems.', origin: 'Aurelia Patisserie', dietary: 'Veg' },
      { name: 'Baked Saffron Rasgulla in Clay Pots', description: 'Caramelized cottage cheese dumplings baked in sweetened reduced milk.', origin: 'Bengal Royal House', dietary: 'Veg' }
    ]
  },
  {
    id: 'mixology',
    name: 'STARLIT MIXOLOGY & BEVERAGES',
    tagline: 'Hand-crafted botanical cocktails and rare spirits',
    description: 'Botanical infusions, smoked rosemary old fashioneds, artisanal gins with edible flowers, and fresh cold-pressed nectar bars.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1000&q=85',
    signatureDishes: [
      { name: 'The Aurelia Gold (Signature Cocktail)', description: 'Single-malt scotch, smoked honey, saffron bitters, and edible 24k gold flakes.', origin: 'Aurelia Exclusive', dietary: 'Veg' },
      { name: 'Rose Petal & Pink Peppercorn Gin Fizz', description: 'Artisanal coastal gin, elderflower liqueur, sparkling tonic, and fresh blush rose petals.', origin: 'Botanical Bar', dietary: 'Veg' },
      { name: 'Kokum & Spiced Tamarind Margarita', description: 'Blanco tequila, coastal kokum reduction, roasted cumin salt rim, and lime.', origin: 'Indian Fusion', dietary: 'Veg' },
      { name: 'Cold-Pressed Valencia Orange & Mint Spritz', description: 'Freshly squeezed citrus, crushed mint sprigs, and artisanal sparkling mineral water.', origin: 'Mocktail Bar', dietary: 'Veg' }
    ]
  }
];
