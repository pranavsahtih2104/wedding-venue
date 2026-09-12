export interface JournalArticle {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  coverImage: string;
  excerpt: string;
  content: {
    introduction: string;
    sections: {
      heading: string;
      body: string;
    }[];
    conclusion: string;
  };
  tags: string[];
}

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'planning-destination-wedding',
    title: 'Planning Your Perfect Destination Wedding',
    subtitle: 'An insider’s guide to orchestrating seamless multi-day celebrations.',
    category: 'DESTINATION GUIDE',
    date: 'OCTOBER 14, 2025',
    readTime: '6 MIN READ',
    author: {
      name: 'Ananya Singhania',
      role: 'Lead Creative Director, Aurelia',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
    excerpt: 'From coordinating guest arrival flights to designing climate-friendly outdoor mandap settings, discover how to craft a transcendent wedding experience.',
    content: {
      introduction: 'A destination wedding is more than a gathering—it is an immersive three-day world created for your closest family and friends. When planned thoughtfully, every moment feels effortless and poetic.',
      sections: [
        {
          heading: '1. Establish the Emotional Narrative First',
          body: 'Before picking floral swatches or tasting menus, define the mood of each day. Start with a relaxed oceanfront sundowner to allow guests to unwind from their journey, build momentum with an exuberant Sangeet, and culminate in a sacred, candlelit wedding ceremony.'
        },
        {
          heading: '2. Curate Guest Hospitality as an Art Form',
          body: 'The difference between a good destination wedding and an extraordinary one lies in hospitality. Personalized welcome luggage tags, local artisanal hampers in suites, and 24/7 dedicated concierge desks ensure your loved ones feel cherished.'
        },
        {
          heading: '3. Harmonize with the Landscape',
          body: 'Let the native architecture and coastal breeze guide your decor. When celebrating by the Bay of Bengal, embrace organic linen drapes, floating brass diyas, and locally grown white jasmine garlands rather than overpowering artificial sets.'
        }
      ],
      conclusion: 'When you partner with a dedicated wedding concierge team, the stress of logistics disappears, leaving only joy, romance, and lifetime memories.'
    },
    tags: ['Destination Wedding', 'Planning', 'Hospitality', 'Logistics']
  },
  {
    id: 'personalize-your-wedding',
    title: '5 Ways to Personalize Your Wedding',
    subtitle: 'Subtle touches and heirloom traditions that make your day unforgettable.',
    category: 'DESIGN & DETAILS',
    date: 'NOVEMBER 02, 2025',
    readTime: '5 MIN READ',
    author: {
      name: 'Rohan Mehra',
      role: 'Head of Experiential Design',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    coverImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85',
    excerpt: 'Move beyond generic templates. Infuse your love story through signature cocktails named after your first dates, handwritten guest notes, and heirloom textiles.',
    content: {
      introduction: 'True luxury is never cookie-cutter. It is deeply personal, bespoke, and resonant with your unique heritage and shared journey as a couple.',
      sections: [
        {
          heading: '1. Bespoke Mixology Inspired by Your Travels',
          body: 'Create signature welcome drinks that tell a chapter of your love story—a spiced kokum gin fizz from your first road trip, or single-origin coffee martinis celebrating your favorite late-night conversations.'
        },
        {
          heading: '2. Reimagined Heirloom Fabrics in Mandap Architecture',
          body: 'Weave antique zardozi shawls from your grandmothers into the canopy lining of your sacred mandap, honoring generations of love in a visually stunning way.'
        },
        {
          heading: '3. Handwritten Letters at Each Table Setting',
          body: 'Surprise each guest with a wax-sealed calligraphy card waiting at their dinner plate, expressing a personal memory or gratitude for their presence.'
        }
      ],
      conclusion: 'It is these heartfelt micro-moments that guests cherish long after the last dance.'
    },
    tags: ['Personalization', 'Wedding Décor', 'Mixology', 'Family Traditions']
  },
  {
    id: 'choose-right-wedding-venue',
    title: 'How to Choose the Right Wedding Venue',
    subtitle: 'Capacity, flow, light, and architectural harmony for multi-day events.',
    category: 'VENUE GUIDE',
    date: 'DECEMBER 10, 2025',
    readTime: '7 MIN READ',
    author: {
      name: 'Ananya Singhania',
      role: 'Lead Creative Director, Aurelia',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    coverImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85',
    excerpt: 'Explore the key factors couples should inspect—from pillarless ballroom acoustics to natural sunset light angles for sacred pheras.',
    content: {
      introduction: 'Selecting a venue is the single most defining decision of your wedding journey. A magnificent venue elevates every photograph, dance performance, and banquet.',
      sections: [
        {
          heading: '1. Assess Spatial Diversity Across Multi-Day Events',
          body: 'An ideal destination offers distinctly different spaces so guests never feel they are sitting in the same room twice—e.g., an open lawn for Mehendi, a grand ballroom for Sangeet, and a clifftop courtyard for Pheras.'
        },
        {
          heading: '2. Lighting and Natural Orientation',
          body: 'Ensure your ceremonial mandap faces the optimal direction for golden hour natural light, giving your wedding cinematographers luminous frames without harsh shadows.'
        },
        {
          heading: '3. Acoustic Architecture for Sangeets',
          body: 'High-energy sound systems require proper acoustic baffling and soundproofing so indoor dance parties do not disturb sleeping elders in guest wings.'
        }
      ],
      conclusion: 'At Aurelia, each of our four distinct venues is architected with purpose to provide effortless spatial flow.'
    },
    tags: ['Venue Selection', 'Acoustics', 'Lighting', 'Capacity']
  },
  {
    id: 'evening-under-the-stars',
    title: 'An Evening Under the Stars',
    subtitle: 'The magic of starlit banquets, open-air Sitars & midnight candlelight.',
    category: 'CELEBRATION EDITORIAL',
    date: 'JANUARY 18, 2026',
    readTime: '4 MIN READ',
    author: {
      name: 'Pooja Verma',
      role: 'Senior Floral & Lighting Architect',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    },
    coverImage: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1200&q=85',
    excerpt: 'How we transform ocean clifftops and garden terraces into celestial dreamscapes using 2,000 candles and floating glass lanterns.',
    content: {
      introduction: 'There is an innate poetry to celebrating love beneath an open night sky. When the sun dips below the horizon, candlelight takes over to create pure enchantment.',
      sections: [
        {
          heading: '1. Layered Illumination Levels',
          body: 'Avoid flat floodlighting. Instead, layer pin-spotting on floral centerpieces, warm fairy lights in tree canopies, and real wax taper candles in hurricane glass.'
        },
        {
          heading: '2. Ambient Acoustic Resonance',
          body: 'Pair starlit dining with live classical instrumentalists—a gentle jugalbandi of santoor and flute that floats across the lawn without overpowering dinner conversation.'
        }
      ],
      conclusion: 'Under the celestial canopy, time slows down, allowing every heartfelt toast to resonate deeply.'
    },
    tags: ['Candlelight', 'Starlit Banquets', 'Atmosphere', 'Acoustics']
  },
  {
    id: 'designing-wedding-feels-like-you',
    title: 'Designing a Wedding That Feels Like You',
    subtitle: 'Balancing timeless ancestral heritage with modern minimalist sophistication.',
    category: 'BRIDAL COUTURE & MOOD',
    date: 'FEBRUARY 04, 2026',
    readTime: '5 MIN READ',
    author: {
      name: 'Rohan Mehra',
      role: 'Head of Experiential Design',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    coverImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85',
    excerpt: 'Bridging the gap between grand traditional expectations and your personal contemporary aesthetics.',
    content: {
      introduction: 'Couples today often find themselves navigating the balance between honor-bound familial traditions and their own modern design sensibilities.',
      sections: [
        {
          heading: '1. Modern Color Palettes for Traditional Rituals',
          body: 'Exchange neon pinks for muted dusty rose, warm ivory, antique gold, and botanical sage. The result is photographs that remain timeless fifty years from now.'
        },
        {
          heading: '2. Editorial Curation of Ceremonies',
          body: 'Streamline rituals to highlight their deepest spiritual meanings, providing printed booklets with translations so global guests can appreciate every Sanskrit verse.'
        }
      ],
      conclusion: 'Your wedding should be an authentic reflection of who you are as individuals and as partners.'
    },
    tags: ['Modern Heritage', 'Couture', 'Color Palette', 'Ceremonies']
  },
  {
    id: 'from-mehendi-to-reception',
    title: 'From Mehendi to Reception: Planning the Celebration',
    subtitle: 'A chronological blueprint for a flawless 3-day Indian wedding itinerary.',
    category: 'TIMELINE & ITINERARY',
    date: 'FEBRUARY 22, 2026',
    readTime: '8 MIN READ',
    author: {
      name: 'Ananya Singhania',
      role: 'Lead Creative Director, Aurelia',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    coverImage: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=85',
    excerpt: 'Detailed hour-by-hour schedules, buffer timings, bridal touch-up breaks, and energy management for multi-event weddings.',
    content: {
      introduction: 'Managing 7 distinct events over 3 days requires master-level pacing. Here is how we structure the flow to keep guests energized and couples stress-free.',
      sections: [
        {
          heading: 'Day 1: Arrival, High Tea & Twilight Welcome Sangeet',
          body: 'Allow guests to settle into their suites with a relaxed poolside high tea, followed by an electrifying Sangeet gala starting at 7:30 PM.'
        },
        {
          heading: 'Day 2: Morning Haldi & Sunset Sacred Pheras',
          body: 'Kick off with an energetic yellow haldi at 10:00 AM. After a relaxing afternoon siesta and bridal makeup, the royal Baraat commences at 5:00 PM for sunset pheras.'
        },
        {
          heading: 'Day 3: Grand Black-Tie Reception & Midnight After-Party',
          body: 'Culminate with a black-tie formal gala featuring a 5-course feast, moving seamlessly into an exclusive rooftop speakeasy after midnight.'
        }
      ],
      conclusion: 'With our on-ground directors managing every minute, your only job is to laugh, dance, and celebrate.'
    },
    tags: ['Itinerary', 'Timeline', 'Sangeet', 'Reception', 'Haldi']
  }
];
