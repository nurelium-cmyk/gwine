import { useEffect } from 'react';
import { ArrowLeft, Wine } from 'lucide-react';
import { navigationConfig } from '../config';
import { ScrollToTop } from '../components/ScrollToTop';
import { WhatsAppPopup } from '../components/WhatsAppPopup';

interface MezeDetailProps {
  onBack: () => void;
}

const mezeData = {
  name: 'Meze',
  description: 'Lezzet ve kaliteye yapılan bir yolculuk. Geleneksel Türk ve Levant mutfağından seçilmiş en iyi mezeler, soğuk ve sıcak seçenekler. Her birini dikkatli bir şekilde seçerek sunuyoruz.',
  items: [
    'Hummus (Nohut Ezmesi)',
    'Baba Ganoush (Patlıcan Ezmesi)',
    'Dolma (Yaprak Sarması)',
    'Falafel (Nohut Köftesi)',
    'Tabbouleh (Bulgur Salatası)',
    'Sigara Böreği',
    'Peynirli Pastırmalı Salatası',
    'Acılı Ezme',
  ]
};

export function MezeDetail({ onBack }: MezeDetailProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen bg-[#141414]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-wine-800/95 backdrop-blur-md py-3 border-b border-white/10">
        <div className="container-custom flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/80 hover:text-gold-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Geri Dön</span>
          </button>
          <div className="flex items-center gap-3">
            <Wine className="w-8 h-8 text-gold-500" />
            <div className="flex flex-col">
              <span className="font-serif text-xl text-white tracking-wide">{navigationConfig.brandName}</span>
              <span className="text-[10px] text-gold-400 tracking-widest uppercase">{navigationConfig.tagline}</span>
            </div>
          </div>
          <div className="w-12" />
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 50%, #d2a855, transparent 50%), radial-gradient(circle at 80% 80%, #d2a855, transparent 50%)',
            }}
          />
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <span className="font-script text-3xl text-gold-400 block mb-2">Haftanın Seçkisi</span>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">{mezeData.name}</h1>
          <p className="text-white/70 text-lg mb-8 leading-relaxed">{mezeData.description}</p>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-24 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Mezeler */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl text-gold-400 mb-8">Mezelerimiz</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mezeData.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-[#1A2421]/50 to-[#121212]/50 border border-[#C5A059]/20 rounded-lg p-6 hover:border-[#C5A059]/50 hover:bg-gradient-to-r hover:from-[#1A2421]/70 hover:to-[#121212]/70 transition-all duration-300"
                >
                  <h3 className="text-[#C5A059] font-serif text-lg mb-2">{item}</h3>
                  <p className="text-[#C5A059]/60 text-sm">Geleneksel tarif ile hazırlanmıştır</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-16 bg-gradient-to-r from-[#C5A059]/10 to-transparent border border-[#C5A059]/20 rounded-lg p-8">
            <h2 className="font-serif text-2xl text-[#C5A059] mb-6">Özellikleri</h2>
            <ul className="space-y-4 text-white/80">
              <li className="flex gap-3">
                <span className="text-[#C5A059] font-bold">+</span>
                <span>Taze Malzeme: Her gün taze malzeme ile hazırlanır</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#C5A059] font-bold">+</span>
                <span>Geleneksel Tarif: Orijinal lezzetler korunur</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#C5A059] font-bold">+</span>
                <span>Sağlıklı: Doğal malzelerden yapılır</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#C5A059] font-bold">+</span>
                <span>Paketleme: Hijyenik ve profesyonel paketleme</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href={`https://wa.me/1234567890?text=${encodeURIComponent('Meze koleksiyonu hakkında bilgi almak istiyorum.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary rounded-sm inline-flex items-center gap-2 group"
            >
              Şimdi Sipariş Ver
              <span>→</span>
            </a>
          </div>
        </div>
      </div>

      <ScrollToTop />
      <WhatsAppPopup />
    </section>
  );
}
