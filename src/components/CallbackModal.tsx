import React, { useState } from 'react';
import { X, Phone, CheckCircle2 } from 'lucide-react';

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CallbackModal: React.FC<CallbackModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredTime: 'Morning (10:00 AM — 1:00 PM)',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      preferredTime: 'Morning (10:00 AM — 1:00 PM)',
      message: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#100C09]/85 backdrop-blur-md animate-fade-slow">
      <div className="relative w-full max-w-lg bg-[#FAF8F5] text-[#1A1410] rounded-sm shadow-2xl overflow-hidden border border-[#C5A880]/40">
        
        {/* Header */}
        <div className="bg-[#1A1410] text-[#FAF8F5] p-5 flex items-center justify-between border-b border-[#C5A880]/30">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-full bg-[#C5A880]/20 text-[#DFCDAB]">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-medium text-white">GET A CALL BACK</h3>
              <p className="text-[10px] font-mono tracking-widest text-[#DFCDAB] uppercase">
                CONCIERGE CONSULTATION (30-SECOND REQUEST)
              </p>
            </div>
          </div>

          <button
            onClick={resetAndClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4 animate-fade-slow">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl text-[#1A1410] font-medium">
                REQUEST RECEIVED
              </h4>
              <p className="text-xs sm:text-sm text-[#2D231C]/80 font-light max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Our senior wedding concierge will call you at <strong>{formData.phone}</strong> during your preferred window ({formData.preferredTime}).
              </p>
              <div className="pt-2">
                <button
                  onClick={resetAndClose}
                  className="px-6 py-2.5 bg-[#1A1410] text-white text-xs font-semibold tracking-wider uppercase rounded-sm hover:bg-[#8C6E42]"
                >
                  DONE
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-[#2D231C]/75 font-light">
                Have questions about venue availability, dates, or bespoke menus? Leave your details below and our wedding director will call you back promptly.
              </p>

              <div>
                <label className="text-[11px] font-mono tracking-wider uppercase text-[#8C6E42] font-semibold block mb-1">
                  YOUR NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priya & Vikram"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-2.5 rounded-sm bg-white border border-[#EAE2D8] focus:border-[#C5A880] text-sm text-[#1A1410] outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-mono tracking-wider uppercase text-[#8C6E42] font-semibold block mb-1">
                    PHONE NUMBER *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 90000 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-2.5 rounded-sm bg-white border border-[#EAE2D8] focus:border-[#C5A880] text-sm text-[#1A1410] outline-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono tracking-wider uppercase text-[#8C6E42] font-semibold block mb-1">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-2.5 rounded-sm bg-white border border-[#EAE2D8] focus:border-[#C5A880] text-sm text-[#1A1410] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-mono tracking-wider uppercase text-[#8C6E42] font-semibold block mb-1">
                  PREFERRED CALL TIME
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full p-2.5 rounded-sm bg-white border border-[#EAE2D8] focus:border-[#C5A880] text-sm text-[#1A1410] outline-none"
                >
                  <option value="Morning (10:00 AM — 1:00 PM)">Morning (10:00 AM — 1:00 PM)</option>
                  <option value="Afternoon (1:00 PM — 5:00 PM)">Afternoon (1:00 PM — 5:00 PM)</option>
                  <option value="Evening (5:00 PM — 8:00 PM)">Evening (5:00 PM — 8:00 PM)</option>
                  <option value="As soon as possible">As soon as possible</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-mono tracking-wider uppercase text-[#8C6E42] font-semibold block mb-1">
                  BRIEF MESSAGE / QUESTIONS (OPTIONAL)
                </label>
                <textarea
                  rows={2}
                  placeholder="Estimated dates or questions for the team..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-2.5 rounded-sm bg-white border border-[#EAE2D8] focus:border-[#C5A880] text-sm text-[#1A1410] outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#1A1410] hover:bg-[#8C6E42] text-white text-xs font-bold tracking-widest uppercase rounded-sm transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#DFCDAB]" />
                  <span>REQUEST CALL BACK</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
