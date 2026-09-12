import React, { useState } from 'react';
import { X, Send, Calendar } from 'lucide-react';

interface WhatsAppDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPlanning: () => void;
}

export const WhatsAppDrawer: React.FC<WhatsAppDrawerProps> = ({
  isOpen,
  onClose,
  onOpenPlanning,
}) => {
  const [userMessage, setUserMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    {
      sender: 'concierge',
      text: 'Namaste and warm greetings from Aurelia Weddings! 🌸 How may our wedding concierge assist your celebration planning today?',
      time: 'Just now',
    },
  ]);

  if (!isOpen) return null;

  const quickPrompts = [
    'Check available wedding dates for late 2026',
    'Schedule a private estate & venue walkthrough',
    'Request the Royal Banquet menu brochure',
    'Inquire about multi-day destination wedding packages',
  ];

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || userMessage;
    if (!text.trim()) return;

    setChatMessages((prev) => [
      ...prev,
      { sender: 'user', text, time: 'Just now' },
      {
        sender: 'concierge',
        text: 'Thank you for reaching out! A dedicated Wedding Director has received your message and will reply with full details shortly. You can also start your interactive celebration proposal anytime.',
        time: 'Just now',
      },
    ]);
    setUserMessage('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-end p-4 sm:p-6 bg-[#100C09]/70 backdrop-blur-sm animate-fade-slow">
      <div className="w-full max-w-md bg-white rounded-sm shadow-2xl overflow-hidden border border-[#C5A880]/40 flex flex-col h-[520px]">
        
        {/* WhatsApp Chat Header */}
        <div className="bg-[#1A1410] text-white p-4 flex items-center justify-between border-b border-[#C5A880]/30">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full border border-[#C5A880] bg-[#241C16] flex items-center justify-center">
                <span className="font-cinzel text-sm text-gold-gradient font-bold">A</span>
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#1A1410]" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-semibold text-white">Aurelia Concierge</h4>
              <span className="text-[10px] text-emerald-400 font-mono tracking-wider">Online • Official Wedding Desk</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Chat Messages Area */}
        <div className="flex-1 p-4 bg-[#FAF8F5] overflow-y-auto space-y-3">
          {chatMessages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] p-3 rounded-sm text-xs leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-[#1A1410] text-white rounded-br-none'
                    : 'bg-white border border-[#EAE2D8] text-[#1A1410] shadow-xs rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
              <span className="text-[9px] font-mono text-[#2D231C]/50 mt-1 px-1">
                {msg.time}
              </span>
            </div>
          ))}

          {/* Direct Proposal Shortcut */}
          <div className="p-3 rounded-sm bg-[#F4EFEA] border border-[#C5A880]/40 my-2 text-center">
            <span className="text-[10px] font-mono tracking-wider text-[#8C6E42] uppercase block mb-1">
              CUSTOM WEDDING ESTIMATE
            </span>
            <p className="text-xs text-[#1A1410] mb-2 font-serif">
              Want an instant proposal summary for your celebration dates?
            </p>
            <button
              onClick={() => {
                onClose();
                onOpenPlanning();
              }}
              className="w-full py-2 bg-[#1A1410] text-[#DFCDAB] text-xs font-bold uppercase tracking-wider rounded-sm flex items-center justify-center gap-1.5 shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>LAUNCH PLANNING ESTIMATOR</span>
            </button>
          </div>

          {/* Quick Prompts */}
          <div className="pt-2 space-y-1.5">
            <span className="text-[10px] font-mono tracking-wider uppercase text-[#8C6E42] block">
              QUICK CONCIERGE PROMPTS:
            </span>
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(prompt)}
                className="w-full text-left text-[11px] p-2 bg-white hover:bg-[#F4EFEA] border border-[#EAE2D8] hover:border-[#C5A880] rounded text-[#1A1410] transition-colors"
              >
                💬 {prompt}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Input Bar */}
        <div className="p-3 bg-white border-t border-[#EAE2D8] flex items-center gap-2">
          <input
            type="text"
            placeholder="Type your celebration question..."
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1 p-2.5 rounded-sm bg-[#FAF8F5] border border-[#EAE2D8] text-xs text-[#1A1410] outline-none focus:border-[#C5A880]"
          />
          <button
            onClick={() => handleSendMessage()}
            className="p-2.5 bg-[#1A1410] hover:bg-[#8C6E42] text-white rounded-sm transition-colors"
            aria-label="Send message"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
