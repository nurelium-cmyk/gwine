import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { heroConfig } from '../config';

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!start || hasRun.current) return;
    hasRun.current = true;

    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

export function Hero({ isReady }: { isReady: boolean }) {
  // Null check: if config is empty, render nothing
  if (!heroConfig.mainTitle) return null;

  const [phase, setPhase] = useState(0);
  // phase 0: hidden, 1: bg visible, 2: title, 3: cta, 4: stats counting

  // Build count-up hooks from stats config
  const stat0 = heroConfig.stats[0];
  const stat1 = heroConfig.stats[1];
  const stat2 = heroConfig.stats[2];
  const count0 = useCountUp(stat0?.value ?? 0, 2000, phase >= 4);
  const count1 = useCountUp(stat1?.value ?? 0, 2200, phase >= 4);
  const count2 = useCountUp(stat2?.value ?? 0, 1800, phase >= 4);
  const counts = [count0, count1, count2];

  useEffect(() => {
    if (!isReady) return;
    // Stagger: bg -> title -> cta -> stats
    const t1 = setTimeout(() => setPhase(1), 100);   // bg reveal
    const t2 = setTimeout(() => setPhase(2), 800);   // title
    const t3 = setTimeout(() => setPhase(3), 1400);  // cta
    const t4 = setTimeout(() => setPhase(4), 2000);  // stats
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [isReady]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProductClick = (productId: string) => {
    window.location.hash = `/product/${productId}`;
    window.scrollTo(0, 0);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with subtle Ken Burns */}
      <div className={`absolute inset-0 transition-opacity ease-out ${phase >= 1 ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDuration: '1.5s' }}>
        <div className="absolute inset-0 hero-kenburns">
          <img
            src={heroConfig.backgroundImage}
            alt={heroConfig.mainTitle}
            className="w-full h-full object-cover scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      {/* Content - moved left on desktop to make room for products sidebar */}
      <div className="relative z-10 container-custom pb-24 sm:pb-28 md:pb-32 pt-8 sm:pt-10 md:py-40 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
        {/* Main content - left side */}
        <div className="relative w-full lg:w-2/3 text-center lg:text-left">
        {/* 22:00 - dan Sonra Evlere Servis */}
        {heroConfig.badgeText && (
          <div className={`inline-block mb-6 md:mb-8 bg-gradient-to-r from-[#C5A059]/20 to-[#C5A059]/10 border border-[#C5A059]/50 rounded-full px-2 sm:px-3 md:px-6 py-1 sm:py-1.5 md:py-2 transition-all duration-900 ease-out ${phase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <span className="text-[#C5A059] font-serif text-lg md:text-sm font-semibold">{heroConfig.badgeText}</span>
          </div>
        )}
        
        {/* Main Title */}
        <h1 className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[6.5rem] text-gold-100 leading-[1.05] tracking-wide transition-all duration-1000 ease-out ${phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.3s' }}>
          {heroConfig.mainTitle}
        </h1>
        <div className={`mx-auto my-6 h-px bg-gold-500/50 transition-all duration-1000 ease-out ${phase >= 2 ? 'w-24 opacity-100' : 'w-0 opacity-0'}`} style={{ transitionDelay: '0.2s' }} />
        <h1 className={`text-xl sm:text-2xl md:text-3xl mt-3 text-shadow-lg font-medium italic text-gold-100 leading-[1.05] tracking-wide transition-all duration-1000 ease-out ${phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.3s' }}>
          30 Dakikada Soğuk Teslimat
        </h1>        

        {/* CTA */}
        {heroConfig.ctaButtonText && (
          <div className={`mt-10 transition-all duration-700 ease-out ${phase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className={`mx-auto my-6 h-px bg-gold-500/50 transition-all duration-1000 ease-out ${phase >= 2 ? 'w-24 opacity-100' : 'w-0 opacity-0'}`} style={{ transitionDelay: '0.2s' }} />
            {/* Script accent */}
            <div className={`mb-7 transition-all duration-1000 ease-out ${phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <span className="font-script text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gold-400">
                {heroConfig.scriptText}
              </span>
            </div>
            <button
              onClick={() => scrollToSection(heroConfig.ctaTarget || '#wines')}
              className="btn-primary rounded-sm inline-flex items-center gap-2 group"
              aria-label={heroConfig.ctaButtonText}
            >
              {heroConfig.ctaButtonText}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        )}
        </div>

        {/* Products Sidebar - right side, visible on lg+ */}
        <div className="hidden lg:flex lg:w-1/3 flex-col items-center justify-center gap-4 pl-12">
          <div className="space-y-2 w-full max-w-xs">
            <h3 className="text-gold-400 font-serif text-lg mb-6">Ürünlerimiz</h3>
            {[
              { id: 'viski', name: 'Viski' },
              { id: 'votka', name: 'Votka' },
              { id: 'raki', name: 'Rakı' },
              { id: 'sarap', name: 'Şarap' },
              { id: 'puro', name: 'Puro' },
              { id: 'cikolata', name: 'Çikolata' },
              { id: 'cips', name: 'Cips' },
              { id: 'kuruyemis', name: 'Kuruyemiş' },
            ].map((product) => (
              <button
                key={product.id}
                onClick={() => handleProductClick(product.id)}
                className="block w-full py-3 px-4 text-left text-white/80 hover:text-gold-400 hover:bg-wine-800/50 rounded transition-all duration-300 text-sm border border-white/10 hover:border-gold-500/50"
              >
                {product.name}
              </button>
            ))}
          </div>
        </div>
      </div>


      {/* Stats with count-up */}
      {heroConfig.stats.length > 0 && (
        <div className={`absolute bottom-16 sm:bottom-20 left-0 right-0 z-10 px-4 transition-all duration-1000 ease-out ${phase >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="container-custom">
            <div className="grid gap-4 md:gap-8 max-w-3xl mx-auto grid-cols-3">
              {heroConfig.stats.map((stat, index) => (
                <div key={index} className={`text-center py-2 sm:py-0 px-1 sm:px-0 ${index > 0 ? 'border-l border-white/20' : ''}`}>
                  <div className="font-serif text-lg sm:text-2xl md:text-3xl lg:text-4xl text-gold-500 mb-1 sm:mb-2 tabular-nums">
                    {counts[index]}{stat.suffix}
                  </div>
                  <div className="text-xs md:text-sm text-white/70 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#141414] to-transparent" />

      {/* Side decorative */}
      {heroConfig.decorativeText && (
        <div className={`absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 transition-opacity duration-1000 ${phase >= 3 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-gold-500/50 to-transparent" />
          <span className="text-gold-500 text-xs tracking-widest" style={{ writingMode: 'vertical-lr' }}>{heroConfig.decorativeText}</span>
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-gold-500/50 to-transparent" />
        </div>
      )}
    </section>
  );
}
