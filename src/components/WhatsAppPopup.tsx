import { useState } from 'react';
import { Phone, X, User, Circle, Download } from 'lucide-react';
import { whatsAppConfig } from '@/config';

export function WhatsAppPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'chat' | 'pricelist'>('chat');

  if (!whatsAppConfig.enabled) return null;

  const whatsappUrl = `https://wa.me/${whatsAppConfig.phoneNumber}`;
  const priceListMessage = "Merhaba! Hızlı fiyat listesini görmek istiyorum.";
  const whatsappPriceListUrl = `https://wa.me/${whatsAppConfig.phoneNumber}?text=${encodeURIComponent(priceListMessage)}`;

  return (
    <div className={`fixed bottom-6 right-6 z-40 flex flex-col items-end ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      {/* Popup Window */}
      <div
        className={`
          mb-4 overflow-hidden rounded-2xl bg-[#1A2421] shadow-2xl
          border border-[#C5A059]/20
          transition-all duration-300 ease-out
          ${isOpen 
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
            : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
          }
        `}
        style={{ width: window.innerWidth < 640 ? 'calc(100vw - 2rem)' : '340px', maxWidth: '340px' }}
      >
        {/* Header */}
        <div className="bg-[#C5A059] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#121212] font-serif font-semibold text-sm">
              {whatsAppConfig.headerTitle}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#121212]/70 hover:text-[#121212] transition-colors"
            aria-label="Kapat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Online Status */}
        <div className="px-4 py-2 bg-[#1A2421]/50 flex items-center gap-2 border-b border-[#C5A059]/10">
          <Circle className="w-2.5 h-2.5 fill-green-500 text-green-500" />
          <span className="text-[#C5A059]/80 text-xs">{whatsAppConfig.onlineText}</span>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 border-b border-[#C5A059]/10">
          <button
            onClick={() => setActiveTab('chat')}
            className={`px-4 py-3 text-sm font-serif transition-colors ${
              activeTab === 'chat'
                ? 'text-[#C5A059] border-b-2 border-[#C5A059]'
                : 'text-[#C5A059]/50 hover:text-[#C5A059]/70'
            }`}
          >
            Sohbet
          </button>
          <button
            onClick={() => setActiveTab('pricelist')}
            className={`px-4 py-3 text-sm font-serif transition-colors ${
              activeTab === 'pricelist'
                ? 'text-[#C5A059] border-b-2 border-[#C5A059]'
                : 'text-[#C5A059]/50 hover:text-[#C5A059]/70'
            }`}
          >
            Fiyat Listesi
          </button>
        </div>

        {/* Content - Chat Tab */}
        {activeTab === 'chat' && (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 hover:bg-[#C5A059]/5 transition-colors"
          >
            <div className="flex items-start gap-3">
              {/* Profile Icon */}
              <div className="w-12 h-12 rounded-full bg-[#1d6636]/20 flex items-center justify-center flex-shrink-0">
                <User className="w-6 h-6 text-[#1d6636]" />
              </div>

              {/* Text Content */}
              <div className="flex-1 min-w-0">
                <h4 className="text-[#C5A059] font-medium text-sm mb-0.5">
                  {whatsAppConfig.cardTitle}
                </h4>
                <p className="text-[#C5A059]/60 text-xs">
                  {whatsAppConfig.cardSubtitle}
                </p>
              </div>
            </div>
          </a>          
        )}
        

        {/* Content - Price List Tab */}
        {activeTab === 'pricelist' && (
          <a
            href={whatsappPriceListUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 hover:bg-[#C5A059]/5 transition-colors"
          >
            <div className="flex items-center gap-3">
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-[#1d6636]/20 flex items-center justify-center flex-shrink-0">
                <Download className="w-6 h-6 text-[#1d6636]" />
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <h4 className="text-[#C5A059] font-medium text-sm mb-0.5">
                  {whatsAppConfig.priceListAction || 'Fiyat Listesi Al'}
                </h4>
                <p className="text-[#C5A059]/60 text-xs">
                  WhatsApp üzerinden anında fiyat listesini alın
                </p>
              </div>
            </div>
          </a>
        )}
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center
          shadow-lg transition-all duration-300 pointer-events-auto
          ${isOpen 
            ? 'bg-[#1d6636] text-[#121212] rotate-90' 
            : 'bg-[#1d6636] text-[#121212] hover:bg-[#1d6636]/90 hover:scale-110'
          }
        `}
        aria-label={whatsAppConfig.buttonAriaLabel}
      >
        {isOpen ? (
          <X className="w-5 h-5 md:w-6 md:h-6" />
        ) : (
          <Phone className="w-6 h-6 md:w-7 md:h-7 fill-current" />
        )}
      </button>
    </div>
  );
}
