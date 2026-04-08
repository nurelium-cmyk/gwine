import { useEffect, useRef } from 'react';
import {
  CheckCircle2,
  Shield,
  Truck,
  Clock,
  Zap,
  Award,
} from 'lucide-react';
import { trustBadgesConfig } from '../config';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  CheckCircle2,
  Shield,
  Truck,
  Clock,
  Zap,
  Award,
};

export function TrustBadges() {
  if (!trustBadgesConfig.mainTitle) return null;

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-up, .slide-in-up');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="trust-badges" ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #C5A059, transparent 50%), radial-gradient(circle at 80% 80%, #C5A059, transparent 50%)',
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4 md:px-6">
        {/* Header */}
        <div className="text-center space-y-2 md:space-y-4 mb-8 md:mb-16">
          <p className="text-[#C5A059] font-serif italic text-xs md:text-sm tracking-widest">
            {trustBadgesConfig.scriptText.toUpperCase()}
          </p>
          <p className="text-[#C5A059]/70 text-xs tracking-widest font-light">
            {trustBadgesConfig.subtitle}
          </p>
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl text-[#E8D5B7] mt-3 md:mt-6">
            {trustBadgesConfig.mainTitle}
          </h2>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {trustBadgesConfig.badges.map((badge, idx) => {
            const IconComponent = iconMap[badge.icon];

            return (
              <div
                key={badge.id}
                className="slide-in-up fade-up"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Badge Card */}
                <div className="group h-full bg-gradient-to-br from-[#1A2421]/50 to-[#121212]/50 border border-[#C5A059]/20 rounded-xl p-4 md:p-8 hover:border-[#C5A059]/50 hover:bg-[#1A2421]/60 transition-all duration-300 backdrop-blur-sm">
                  {/* Icon Container */}
                  <div className="relative mb-4 md:mb-6">
                    <div className="absolute inset-0 bg-[#C5A059]/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <div className="relative w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#C5A059]/30 to-[#C5A059]/10 rounded-full flex items-center justify-center group-hover:from-[#C5A059]/50 group-hover:to-[#C5A059]/20 transition-all duration-300">
                      {IconComponent && (
                        <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-[#C5A059] group-hover:scale-110 transition-transform" />
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-base md:text-xl text-[#C5A059] mb-2 group-hover:text-[#E8D5B7] transition-colors line-clamp-2">
                    {badge.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#C5A059]/70 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed line-clamp-3">
                    {badge.description}
                  </p>

                  {/* Highlight */}
                  <div className="pt-3 md:pt-4 mt-3 md:mt-4 border-t border-[#C5A059]/20">
                    <p className="text-[#C5A059]/80 text-xs md:text-sm font-serif italic line-clamp-2">
                      {badge.highlight}
                    </p>
                  </div>

                  {/* Hover Effect Line */}
                  <div 
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#C5A059] to-transparent rounded-full transition-all duration-300 group-hover:h-1"
                    style={{ width: '0%' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.width = '100%';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.width = '0%';
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-8 md:mt-16 text-center bg-gradient-to-r from-[#C5A059]/10 via-transparent to-[#C5A059]/10 border border-[#C5A059]/20 rounded-xl p-4 md:p-8">
          <h3 className="font-serif text-xl md:text-2xl text-[#C5A059] mb-3 md:mb-4">
            Şimdi Sipariş Verin
          </h3>
          <p className="text-[#C5A059]/70 mb-4 md:mb-6 max-w-2xl mx-auto text-sm md:text-base">
            Tüm bu avantajlardan yararlanın. Hızlı, güvenli ve uygun fiyatlı alışveriş yaşanır.
          </p>
          <button className="bg-gradient-to-r from-[#C5A059] to-[#A88035] hover:from-[#E8D5B7] hover:to-[#C5A059] text-[#121212] font-serif px-6 md:px-8 py-2.5 md:py-4 rounded-lg transition-all duration-300 font-bold text-sm md:text-base">
            WhatsApp ile Sipariş Ver
          </button>
        </div>
      </div>
    </section>
  );
}
