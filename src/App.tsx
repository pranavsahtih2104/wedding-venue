import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { DestinationsSection } from './components/DestinationsSection';
import { VenuesSection } from './components/VenuesSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { ServicesSection } from './components/ServicesSection';
import { CuisineSection } from './components/CuisineSection';
import { JourneySection } from './components/JourneySection';
import { GallerySection } from './components/GallerySection';
import { VenueExperienceSection } from './components/VenueExperienceSection';
import { AccommodationsSection } from './components/AccommodationsSection';
import { JournalSection } from './components/JournalSection';
import { OffersSection } from './components/OffersSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StartPlanningModal } from './components/StartPlanningModal';
import { CallbackModal } from './components/CallbackModal';
import { WhatsAppDrawer } from './components/WhatsAppDrawer';
import { MessageSquare, Phone } from 'lucide-react';

export function App() {
  const [planningModalOpen, setPlanningModalOpen] = useState(false);
  const [callbackModalOpen, setCallbackModalOpen] = useState(false);
  const [whatsAppOpen, setWhatsAppOpen] = useState(false);

  // Contextual initial modal state
  const [initialDestination, setInitialDestination] = useState<string | undefined>(undefined);
  const [initialVenue, setInitialVenue] = useState<string | undefined>(undefined);
  const [initialExperience, setInitialExperience] = useState<string | undefined>(undefined);

  const handleOpenPlanning = (dest?: string, venue?: string, exp?: string) => {
    setInitialDestination(dest);
    setInitialVenue(venue);
    setInitialExperience(exp);
    setPlanningModalOpen(true);
  };

  const handleExploreVenues = () => {
    const el = document.getElementById('venues');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1410] font-sans relative selection:bg-[#C89689] selection:text-white">
      
      {/* Sticky Luxury Navbar */}
      <Navbar
        onOpenPlanning={() => handleOpenPlanning()}
        onOpenCallback={() => setCallbackModalOpen(true)}
        onOpenWhatsApp={() => setWhatsAppOpen(true)}
      />

      {/* Main Content Flow */}
      <main>
        {/* 1. Cinematic Fullscreen Hero */}
        <Hero
          onOpenPlanning={() => handleOpenPlanning()}
          onExploreVenues={handleExploreVenues}
        />

        {/* 2. Editorial Introduction (01 / The Aurelia Experience) */}
        <Introduction
          onOpenPlanning={() => handleOpenPlanning()}
        />

        {/* 3. Destinations (02 / Choose Your Setting) */}
        <DestinationsSection
          onStartPlanning={(destId) => handleOpenPlanning(destId)}
        />

        {/* 4. Luxury Venues (03 / The Perfect Place for Your Yes) */}
        <VenuesSection
          onStartPlanning={(venueId) => handleOpenPlanning(undefined, venueId)}
        />

        {/* 5. Wedding Experiences (04 / Every Celebration, Your Way) */}
        <ExperiencesSection
          onStartPlanning={(expName) => handleOpenPlanning(undefined, undefined, expName)}
        />

        {/* 6. Complete Services & Concierge (05 / We Take Care of the Details) */}
        <ServicesSection
          onStartPlanning={() => handleOpenPlanning()}
        />

        {/* 7. Royal Gastronomy (06 / The Feast is Part of the Story) */}
        <CuisineSection
          onStartPlanning={() => handleOpenPlanning()}
        />

        {/* 8. The Wedding Journey Timeline (07 / How Your Forever Comes to Life) */}
        <JourneySection
          onStartPlanning={() => handleOpenPlanning()}
        />

        {/* 9. Visual Photo Gallery with Lightbox (08 / A Tapestry of Timeless Moments) */}
        <GallerySection />

        {/* 10. Immersive Stay & Celebration Narrative (09 / Arrive. Celebrate. Stay.) */}
        <VenueExperienceSection />

        {/* 11. Accommodations & Bridal Suites (10 / Luxury Retreats) */}
        <AccommodationsSection
          onStartPlanning={() => handleOpenPlanning()}
        />

        {/* 12. Aurelia Journal (11 / Editorial Insights) */}
        <JournalSection
          onStartPlanning={() => handleOpenPlanning()}
        />

        {/* 13. Curated Celebration Packages & Offers (12 / Current Offers) */}
        <OffersSection
          onStartPlanning={(offerTitle) => handleOpenPlanning(undefined, undefined, offerTitle)}
        />

        {/* 14. Real Stories & Testimonials (13 / Stories of Forever) */}
        <TestimonialsSection />

        {/* 15. Connect, Location & Private Tour Booking (14 / Begin Your Journey) */}
        <ContactSection
          onStartPlanning={() => handleOpenPlanning()}
          onOpenCallback={() => setCallbackModalOpen(true)}
          onOpenWhatsApp={() => setWhatsAppOpen(true)}
        />
      </main>

      {/* Grand Footer */}
      <Footer
        onOpenPlanning={() => handleOpenPlanning()}
        onOpenCallback={() => setCallbackModalOpen(true)}
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3 pointer-events-auto">
        {/* Floating Call Back Trigger */}
        <button
          onClick={() => setCallbackModalOpen(true)}
          className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1A1410] text-[#FAF8F5] border border-[#C5A880]/50 shadow-xl hover:bg-[#2D231C] text-xs font-semibold tracking-wider uppercase transition-all transform hover:-translate-y-0.5"
          title="Get a 30-Second Call Back"
        >
          <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
          <span>Call Back</span>
        </button>

        {/* Floating WhatsApp Concierge Button */}
        <button
          onClick={() => setWhatsAppOpen(true)}
          className="group relative p-3.5 sm:p-4 rounded-full bg-[#1A1410] text-[#FAF8F5] border border-[#C5A880] shadow-2xl hover:bg-[#241C16] hover:scale-105 transition-all flex items-center justify-center"
          aria-label="Open WhatsApp Wedding Concierge"
        >
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
          </span>
          <MessageSquare className="w-5 h-5 text-[#C5A880] group-hover:text-emerald-400 transition-colors" />
        </button>
      </div>

      {/* Interactive Modals */}
      <StartPlanningModal
        isOpen={planningModalOpen}
        onClose={() => setPlanningModalOpen(false)}
        initialDestination={initialDestination}
        initialVenue={initialVenue}
        initialExperience={initialExperience}
      />

      <CallbackModal
        isOpen={callbackModalOpen}
        onClose={() => setCallbackModalOpen(false)}
      />

      <WhatsAppDrawer
        isOpen={whatsAppOpen}
        onClose={() => setWhatsAppOpen(false)}
        onOpenPlanning={() => {
          setWhatsAppOpen(false);
          handleOpenPlanning();
        }}
      />

    </div>
  );
}

export default App;
