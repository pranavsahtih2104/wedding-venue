import React, { useState, useEffect } from 'react';
import { X, Check, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface StartPlanningModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDestination?: string;
  initialVenue?: string;
  initialExperience?: string;
}

export const StartPlanningModal: React.FC<StartPlanningModalProps> = ({
  isOpen,
  onClose,
  initialDestination,
  initialVenue,
  initialExperience,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [destination, setDestination] = useState<string>(initialDestination || initialVenue || '');
  const [eventTypes, setEventTypes] = useState<string[]>(initialExperience ? [initialExperience] : []);
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [preferredSeason, setPreferredSeason] = useState<string>('Winter (Nov — Feb)');
  const [guestCount, setGuestCount] = useState<string>('100–250');
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (initialDestination) setDestination(initialDestination);
      else if (initialVenue) setDestination(initialVenue);
      if (initialExperience) setEventTypes([initialExperience]);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, initialDestination, initialVenue, initialExperience]);

  if (!isOpen) return null;

  const destinationsList = [
    { id: 'coast', name: 'Beach / Coast', desc: 'Bay of Bengal oceanfront & sunset mandap' },
    { id: 'palace', name: 'Palace / Heritage', desc: 'Sandstone courtyards & royal architecture' },
    { id: 'garden', name: 'Garden / Lawn', desc: 'Lush botanical sanctuary & open-air canopies' },
    { id: 'city', name: 'City Grandeur', desc: 'Pillarless ballrooms & luxury skyline' },
    { id: 'rooftop', name: 'Clifftop Rooftop', desc: 'Panoramic starlit cocktail terrace' },
    { id: 'unsure', name: 'Not Sure Yet', desc: 'Help me choose based on our story' },
  ];

  const eventsList = [
    'Wedding & Sacred Pheras',
    'Grand Reception',
    'Engagement Ring Ceremony',
    'Mehendi Carnival',
    'High-Voltage Sangeet',
    'Haldi & Phoolon ki Holi',
    'Multi-Day Royal Celebration',
  ];

  const guestRanges = [
    { id: 'under-50', label: 'Under 50 Guests', desc: 'Intimate boutique celebration' },
    { id: '50-100', label: '50 – 100 Guests', desc: 'Close family & friends' },
    { id: '100-250', label: '100 – 250 Guests', desc: 'Grand traditional gathering' },
    { id: '250-500', label: '250 – 500 Guests', desc: 'Opulent multi-generational wedding' },
    { id: '500-plus', label: '500+ Guests', desc: 'Monumental royal celebration' },
  ];

  const toggleEventType = (evt: string) => {
    if (eventTypes.includes(evt)) {
      setEventTypes(eventTypes.filter((e) => e !== evt));
    } else {
      setEventTypes([...eventTypes, evt]);
    }
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C5A880', '#C89689', '#7D8B78', '#DFCDAB'],
      });
    } catch {
      // ignore
    }
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setCurrentStep(1);
    setDestination('');
    setEventTypes([]);
    setPreferredDate('');
    setGuestCount('100–250');
    setPersonalInfo({ name: '', phone: '', email: '', message: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-[#100C09]/90 backdrop-blur-md animate-fade-slow overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#FAF8F5] text-[#1A1410] rounded-sm shadow-2xl overflow-hidden my-auto border border-[#C5A880]/40 max-h-[94vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="bg-[#1A1410] text-[#FAF8F5] p-5 sm:p-6 flex items-center justify-between border-b border-[#C5A880]/30 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border border-[#C5A880] flex items-center justify-center bg-[#241C16]">
              <span className="font-cinzel text-sm text-gold-gradient font-bold">A</span>
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-medium tracking-wide text-[#FAF8F5]">
                LET’S START PLANNING YOUR DAY
              </h3>
              <p className="text-[10px] font-mono tracking-widest text-[#DFCDAB] uppercase">
                AURELIA WEDDING JOURNEY CONCIERGE
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close planning modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar Steps */}
        {!submitted && (
          <div className="bg-[#F4EFEA] px-6 py-3 border-b border-[#EAE2D8] flex items-center justify-between shrink-0">
            {[1, 2, 3, 4, 5].map((stepNum) => (
              <div key={stepNum} className="flex items-center gap-2">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono font-bold transition-all ${
                    currentStep === stepNum
                      ? 'bg-[#1A1410] text-[#DFCDAB] ring-2 ring-[#C5A880]'
                      : currentStep > stepNum
                      ? 'bg-[#C5A880] text-[#1A1410]'
                      : 'bg-[#EAE2D8] text-[#2D231C]/60'
                  }`}
                >
                  {currentStep > stepNum ? '✓' : stepNum}
                </div>
                <span className="hidden sm:inline text-[11px] font-mono uppercase tracking-wider text-[#2D231C]/80">
                  {stepNum === 1 && 'Setting'}
                  {stepNum === 2 && 'Events'}
                  {stepNum === 3 && 'Date'}
                  {stepNum === 4 && 'Guests'}
                  {stepNum === 5 && 'Details'}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Form Body Viewport (Scrollable) */}
        <div className="p-6 sm:p-10 overflow-y-auto flex-1">
          {submitted ? (
            /* Confirmation Screen */
            <div className="text-center py-8 sm:py-12 space-y-6 animate-fade-slow">
              <div className="w-20 h-20 rounded-full bg-[#1A1410] border-2 border-[#C5A880] mx-auto flex items-center justify-center shadow-xl">
                <Sparkles className="w-9 h-9 text-[#DFCDAB]" />
              </div>

              <div>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#1A1410] mb-2 font-medium">
                  YOUR WEDDING JOURNEY BEGINS.
                </h3>
                <p className="text-sm sm:text-base text-[#2D231C]/80 font-light max-w-lg mx-auto leading-relaxed">
                  Thank you, <strong>{personalInfo.name || 'esteemed guest'}</strong>. Our wedding concierge director will contact you shortly at <span className="text-[#8C6E42] font-semibold">{personalInfo.phone || personalInfo.email}</span> to discuss your bespoke celebration.
                </p>
              </div>

              {/* Proposal Summary Card */}
              <div className="max-w-md mx-auto p-5 rounded-sm bg-[#F4EFEA] border border-[#C5A880]/30 text-left space-y-2.5">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#8C6E42] font-semibold block">
                  CELEBRATION BRIEF SUMMARY
                </span>
                <div className="text-xs text-[#1A1410] space-y-1">
                  <p><strong>Setting:</strong> {destination || 'Flexible Choice'}</p>
                  <p><strong>Events:</strong> {eventTypes.length > 0 ? eventTypes.join(', ') : 'Multi-day celebrations'}</p>
                  <p><strong>Preferred Timing:</strong> {preferredDate || preferredSeason}</p>
                  <p><strong>Guest Size:</strong> {guestCount} guests</p>
                </div>
              </div>

              <p className="text-[11px] text-[#2D231C]/60 font-mono tracking-wider uppercase">
                Frontend Demo Enquiry • All dates & venue details subject to mutual contract agreement.
              </p>

              <div>
                <button
                  onClick={resetForm}
                  className="px-8 py-3 bg-[#1A1410] text-[#FAF8F5] text-xs font-semibold tracking-widest uppercase rounded-sm hover:bg-[#8C6E42] transition-colors"
                >
                  RETURN TO WEBSITE
                </button>
              </div>
            </div>
          ) : (
            /* Multi-step Form Wizard */
            <form onSubmit={handleSubmit}>
              
              {/* Step 1: Destination / Setting */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fade-slow">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#8C6E42] font-semibold block mb-1">
                      STEP 1 OF 5
                    </span>
                    <h4 className="font-serif text-2xl sm:text-3xl text-[#1A1410] font-medium">
                      WHERE WOULD YOU LIKE TO CELEBRATE?
                    </h4>
                    <p className="text-xs sm:text-sm text-[#2D231C]/75 font-light">
                      Select your preferred natural atmosphere or venue setting.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {destinationsList.map((d) => (
                      <div
                        key={d.id}
                        onClick={() => setDestination(d.name)}
                        className={`p-4 rounded-sm border cursor-pointer transition-all flex items-start justify-between ${
                          destination === d.name
                            ? 'bg-white border-[#1A1410] shadow-md ring-1 ring-[#1A1410]'
                            : 'bg-white/60 border-[#EAE2D8] hover:border-[#C5A880]'
                        }`}
                      >
                        <div>
                          <span className="font-serif text-base font-semibold text-[#1A1410] block">{d.name}</span>
                          <span className="text-xs text-[#2D231C]/70 font-light mt-0.5 block">{d.desc}</span>
                        </div>
                        {destination === d.name && (
                          <Check className="w-4 h-4 text-[#8C6E42] shrink-0 mt-1" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Event Types */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fade-slow">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#8C6E42] font-semibold block mb-1">
                      STEP 2 OF 5
                    </span>
                    <h4 className="font-serif text-2xl sm:text-3xl text-[#1A1410] font-medium">
                      WHAT ARE YOU PLANNING?
                    </h4>
                    <p className="text-xs sm:text-sm text-[#2D231C]/75 font-light">
                      Select all the ceremonies you wish to host with us (Select multiple).
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {eventsList.map((evt) => {
                      const isSelected = eventTypes.includes(evt);
                      return (
                        <div
                          key={evt}
                          onClick={() => toggleEventType(evt)}
                          className={`p-4 rounded-sm border cursor-pointer transition-all flex items-center justify-between ${
                            isSelected
                              ? 'bg-white border-[#1A1410] shadow-md ring-1 ring-[#1A1410]'
                              : 'bg-white/60 border-[#EAE2D8] hover:border-[#C5A880]'
                          }`}
                        >
                          <span className="text-sm font-serif font-medium text-[#1A1410]">{evt}</span>
                          <div className={`w-5 h-5 rounded flex items-center justify-center border ${
                            isSelected ? 'bg-[#1A1410] border-[#1A1410] text-[#DFCDAB]' : 'border-[#C5A880]/50'
                          }`}>
                            {isSelected && <Check className="w-3.5 h-3.5" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 3: Preferred Date & Season */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fade-slow">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#8C6E42] font-semibold block mb-1">
                      STEP 3 OF 5
                    </span>
                    <h4 className="font-serif text-2xl sm:text-3xl text-[#1A1410] font-medium">
                      WHEN WOULD YOU LIKE TO CELEBRATE?
                    </h4>
                    <p className="text-xs sm:text-sm text-[#2D231C]/75 font-light">
                      Choose an exact wedding date or your desired celebration season.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-mono tracking-wider uppercase text-[#8C6E42] font-semibold block mb-2">
                        EXACT DATE (IF FINALIZED)
                      </label>
                      <input
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full p-3.5 rounded-sm bg-white border border-[#EAE2D8] focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] text-sm text-[#1A1410] outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono tracking-wider uppercase text-[#8C6E42] font-semibold block mb-2">
                        OR PREFERRED CELEBRATION SEASON
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {['Winter (Nov — Feb)', 'Summer / Spring (Mar — Jun)', 'Monsoon Romance (Jul — Oct)'].map((season) => (
                          <div
                            key={season}
                            onClick={() => setPreferredSeason(season)}
                            className={`p-3.5 rounded-sm border cursor-pointer text-center text-xs font-medium transition-all ${
                              preferredSeason === season
                                ? 'bg-[#1A1410] text-[#FAF8F5] border-[#1A1410]'
                                : 'bg-white border-[#EAE2D8] text-[#2D231C]/80 hover:border-[#C5A880]'
                            }`}
                          >
                            {season}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Estimated Guest Count */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-fade-slow">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#8C6E42] font-semibold block mb-1">
                      STEP 4 OF 5
                    </span>
                    <h4 className="font-serif text-2xl sm:text-3xl text-[#1A1410] font-medium">
                      HOW MANY GUESTS ARE ATTENDING?
                    </h4>
                    <p className="text-xs sm:text-sm text-[#2D231C]/75 font-light">
                      This helps us recommend the perfect venue scale and culinary layout.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {guestRanges.map((g) => (
                      <div
                        key={g.id}
                        onClick={() => setGuestCount(g.label)}
                        className={`p-4 rounded-sm border cursor-pointer transition-all flex items-start justify-between ${
                          guestCount === g.label
                            ? 'bg-white border-[#1A1410] shadow-md ring-1 ring-[#1A1410]'
                            : 'bg-white/60 border-[#EAE2D8] hover:border-[#C5A880]'
                        }`}
                      >
                        <div>
                          <span className="font-serif text-base font-semibold text-[#1A1410] block">{g.label}</span>
                          <span className="text-xs text-[#2D231C]/70 font-light mt-0.5 block">{g.desc}</span>
                        </div>
                        {guestCount === g.label && (
                          <Check className="w-4 h-4 text-[#8C6E42] shrink-0 mt-1" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 5: Contact & Celebration Vision */}
              {currentStep === 5 && (
                <div className="space-y-6 animate-fade-slow">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#8C6E42] font-semibold block mb-1">
                      STEP 5 OF 5
                    </span>
                    <h4 className="font-serif text-2xl sm:text-3xl text-[#1A1410] font-medium">
                      TELL US ABOUT YOUR CELEBRATION
                    </h4>
                    <p className="text-xs sm:text-sm text-[#2D231C]/75 font-light">
                      Please provide your contact details so our wedding director can connect with you.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-mono tracking-wider uppercase text-[#8C6E42] font-semibold block mb-1.5">
                          FULL NAME *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Meera Kapoor & Aarav Sharma"
                          value={personalInfo.name}
                          onChange={(e) => setPersonalInfo({ ...personalInfo, name: e.target.value })}
                          className="w-full p-3 rounded-sm bg-white border border-[#EAE2D8] focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] text-sm text-[#1A1410] outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-mono tracking-wider uppercase text-[#8C6E42] font-semibold block mb-1.5">
                          PHONE NUMBER *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={personalInfo.phone}
                          onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
                          className="w-full p-3 rounded-sm bg-white border border-[#EAE2D8] focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] text-sm text-[#1A1410] outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-mono tracking-wider uppercase text-[#8C6E42] font-semibold block mb-1.5">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={personalInfo.email}
                        onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
                        className="w-full p-3 rounded-sm bg-white border border-[#EAE2D8] focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] text-sm text-[#1A1410] outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono tracking-wider uppercase text-[#8C6E42] font-semibold block mb-1.5">
                        YOUR CELEBRATION VISION (OPTIONAL)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Share any special preferences, decor ideas, dietary needs, or specific rituals you'd like us to know..."
                        value={personalInfo.message}
                        onChange={(e) => setPersonalInfo({ ...personalInfo, message: e.target.value })}
                        className="w-full p-3 rounded-sm bg-white border border-[#EAE2D8] focus:border-[#C5A880] text-sm text-[#1A1410] outline-none resize-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Controls Bar */}
              <div className="pt-8 border-t border-[#EAE2D8] flex items-center justify-between mt-8">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="px-5 py-2.5 border border-[#C5A880]/60 text-xs font-semibold tracking-wider uppercase rounded-sm text-[#1A1410] hover:bg-white flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    BACK
                  </button>
                ) : <div />}

                {currentStep < 5 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-7 py-3 bg-[#1A1410] text-[#FAF8F5] hover:bg-[#8C6E42] text-xs font-bold tracking-widest uppercase rounded-sm transition-colors flex items-center gap-2"
                  >
                    <span>CONTINUE</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#DFCDAB]" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-gradient-to-r from-[#C5A880] via-[#DFCDAB] to-[#C5A880] text-[#140E0A] font-sans font-bold text-xs tracking-[0.2em] uppercase rounded-sm shadow-xl hover:shadow-[#C5A880]/40 transition-all flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>START MY WEDDING JOURNEY</span>
                  </button>
                )}
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
