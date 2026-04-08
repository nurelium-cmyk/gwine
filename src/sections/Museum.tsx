import { useState, useEffect, useRef } from 'react';
import { History, Award, BookOpen } from 'lucide-react';
import { museumConfig } from '../config';

// Icon lookup map for dynamic icon resolution from config strings
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  History, Award, BookOpen,
};

export function Museum() {
  // Null check: if config is empty, render nothing
  if (!museumConfig.mainTitle) return null;

  const [activeTab, setActiveTab] = useState(museumConfig.tabs[0]?.id || '');
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
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-up, .slide-in-left, .slide-in-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const activeTabData = museumConfig.tabs.find(tab => tab.id === activeTab);

  return (
    <section
      id="museum"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-gold-500/5 to-transparent" />

      <div className="container-custom relative">
        {/* Mobile: Column layout, Desktop: Grid layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="order-1 lg:order-none">
            {/* Section Header */}
            <div className="slide-in-left mb-6 md:mb-10">
              <span className="font-script text-2xl md:text-3xl text-gold-400 block mb-2">{museumConfig.scriptText}</span>
              <span className="text-gold-500 text-[10px] md:text-xs uppercase tracking-[0.2em] mb-3 md:mb-4 block">
                {museumConfig.subtitle}
              </span>
              <h2 className="font-serif text-h1-mobile md:text-h1 text-white has-bar">
                {museumConfig.mainTitle}
              </h2>
            </div>

            {/* Introduction */}
            {museumConfig.introText && (
              <p className="fade-up text-white/75 leading-relaxed mb-6 md:mb-10 text-sm md:text-base" style={{ transitionDelay: '0.1s' }}>
                {museumConfig.introText}
              </p>
            )}

            {/* Tabs - Make scrollable on mobile */}
            {museumConfig.tabs.length > 0 && (
              <div className="fade-up mb-6 md:mb-8 overflow-x-auto pb-2 md:pb-0" style={{ transitionDelay: '0.15s' }}>
                <div className="flex flex-nowrap md:flex-wrap gap-2 min-w-max md:min-w-0">
                  {museumConfig.tabs.map((tab) => {
                    const IconComponent = iconMap[tab.icon];
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        aria-pressed={activeTab === tab.id}
                        className={`flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-sm text-xs md:text-sm transition-all duration-300 whitespace-nowrap ${
                          activeTab === tab.id
                            ? 'bg-gold-500 text-white'
                            : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                        }`}
                      >
                        {IconComponent && <IconComponent className="w-3 h-3 md:w-4 md:h-4" />}
                        {tab.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Tab Content */}
            <div className="fade-up" style={{ transitionDelay: '0.2s' }}>
              {activeTabData && (
                <div className="p-4 md:p-6 bg-white/5 rounded-lg border border-white/10 transition-all duration-300">
                  <h3 className="font-serif text-h5-mobile md:text-h5 text-white mb-3 md:mb-4">
                    {activeTabData.content.title}
                  </h3>
                  <p className="text-white/75 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
                    {activeTabData.content.description}
                  </p>
                  <div className="flex items-center gap-3 text-gold-500">
                    <div className="w-6 md:w-8 h-px bg-gold-500" />
                    <span className="text-xs md:text-sm font-medium">
                      {activeTabData.content.highlight}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Horizontal Timeline - Mobile optimized */}
            {museumConfig.timeline.length > 0 && (
              <div className="fade-up mt-6 md:mt-8" style={{ transitionDelay: '0.25s' }}>
                <div className="relative">
                  {/* Horizontal line */}
                  <div className="absolute top-3 left-0 right-0 h-px bg-gold-500/30" />
                  {/* Timeline points - horizontal scroll on mobile */}
                  <div className="overflow-x-auto pb-3 md:pb-0">
                    <div className="flex justify-between gap-3 md:gap-2 min-w-max md:min-w-0">
                      {museumConfig.timeline.map((event) => (
                        <div key={event.year} className="relative flex flex-col items-center flex-shrink-0 min-w-[60px] md:min-w-[70px]">
                          <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#141414] border border-gold-500 md:border-2 z-10" />
                          <span className="font-serif text-sm md:text-sm text-gold-500 mt-2">{event.year}</span>
                          <span className="text-[9px] md:text-[11px] text-white/60 mt-0.5 text-center whitespace-nowrap">{event.event}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Founder Photo & Quote - Mobile optimized */}
            {museumConfig.quote.text && (
              <div className="fade-up mt-6 md:mt-8 flex items-start md:items-center gap-4 md:gap-6" style={{ transitionDelay: '0.3s' }}>
                {museumConfig.founderPhoto && (
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 border-gold-500/30 shadow-lg flex-shrink-0">
                    <img
                      src={museumConfig.founderPhoto}
                      alt={museumConfig.founderPhotoAlt}
                      loading="lazy"
                      className="w-full h-full object-cover sepia"
                    />
                  </div>
                )}
                <div className="flex-1">
                  {museumConfig.quote.prefix && (
                    <p className="font-script text-xl md:text-2xl text-gold-400 mb-1">
                      &ldquo;{museumConfig.quote.prefix}&rdquo;
                    </p>
                  )}
                  <p className="text-white/70 text-xs md:text-sm italic">
                        "{museumConfig.quote.text}"
                  </p>
                  {museumConfig.quote.attribution && (
                    <p className="text-gold-500 text-[10px] md:text-xs mt-1 md:mt-2">
                      — {museumConfig.quote.attribution}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right Image - Moves to top on mobile */}
          <div className="slide-in-right relative order-0 lg:order-none mb-4 lg:mb-0" style={{ transitionDelay: '0.15s' }}>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              {museumConfig.tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`absolute inset-0 transition-all duration-500 ${
                    activeTab === tab.id
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-105'
                  }`}
                >
                  <img
                    src={tab.image}
                    alt={`${tab.name} - ${museumConfig.mainTitle}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                </div>
              ))}

              {/* Year Badge - Mobile optimized */}
              {museumConfig.yearBadge && (
                <div className="absolute top-4 right-4 md:top-6 md:right-6 w-16 h-16 md:w-24 md:h-24 rounded-full bg-black/40 backdrop-blur-sm border border-gold-500/40 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-serif text-lg md:text-2xl text-gold-400">{museumConfig.yearBadge}</div>
                    <div className="text-[8px] md:text-[10px] text-white/70 uppercase tracking-wider">{museumConfig.yearBadgeLabel}</div>
                  </div>
                </div>
              )}

              {/* Bottom Info - Mobile optimized */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                  <div>
                    {museumConfig.openingHoursLabel && (
                      <p className="text-gold-400 text-[10px] md:text-sm">{museumConfig.openingHoursLabel}</p>
                    )}
                    {museumConfig.openingHours && (
                      <p className="text-white text-sm md:text-lg">{museumConfig.openingHours}</p>
                    )}
                  </div>
                  {museumConfig.ctaButtonText && (
                    <button
                      onClick={() => {
                        const element = document.querySelector('#contact');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="btn-primary rounded-sm text-xs md:text-sm px-4 md:px-6 py-1.5 md:py-2 w-full sm:w-auto"
                      aria-label={museumConfig.ctaButtonText}
                    >
                      {museumConfig.ctaButtonText}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}