import { useEffect, useRef, useState } from 'react';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { comboPackagesConfig } from '../config';

export function ComboPackages() {
  if (!comboPackagesConfig.mainTitle) return null;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else if (window.innerWidth < 1536) setItemsPerView(3);
      else setItemsPerView(4);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

    const elements = sectionRef.current?.querySelectorAll('.fade-up, .scale-in-up');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const maxIndex = Math.max(0, comboPackagesConfig.packages.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  return (
    <section id="combo-packages" ref={sectionRef} className="section-padding bg-gradient-to-b from-[#121212] to-[#1A2421]">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8 md:mb-16 px-4 md:px-6">
        <div className="text-center space-y-2 md:space-y-4">
          <p className="text-[#C5A059] font-serif italic text-xs md:text-sm tracking-widest">
            {comboPackagesConfig.scriptText.toUpperCase()}
          </p>
          <p className="text-[#C5A059]/70 text-xs tracking-widest font-light">
            {comboPackagesConfig.subtitle}
          </p>
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl text-[#E8D5B7] mt-3 md:mt-6">
            {comboPackagesConfig.mainTitle}
          </h2>
          <p className="text-[#C5A059]/80 max-w-2xl mx-auto mt-3 md:mt-6 text-sm md:text-base leading-relaxed">
            {comboPackagesConfig.description}
          </p>
        </div>
      </div>

      {/* Packages Carousel */}
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div
          ref={sliderRef}
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex gap-4 md:gap-6 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {comboPackagesConfig.packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="flex-shrink-0 scale-in-up"
                  style={{
                    width: itemsPerView === 1 ? 'calc(100% - 1rem)' : itemsPerView === 2 ? 'calc(50% - 1rem)' : itemsPerView === 3 ? 'calc(33.333% - 1.25rem)' : 'calc(25% - 1.5rem)',
                  }}
                >
                  {/* Package Card */}
                  <div className="relative h-full bg-gradient-to-br from-[#1A2421] to-[#0F1A17] border border-[#C5A059]/20 rounded-xl overflow-hidden hover:border-[#C5A059]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#C5A059]/10">
                      {/* Discount Badge */}
                      <div className="absolute top-0 right-0 bg-gradient-to-br from-[#C5A059] to-[#A88035] text-[#121212] px-2 py-1 md:px-4 md:py-2 font-bold text-xs md:text-sm rounded-bl-lg">
                        {pkg.discount}
                      </div>

                      {/* Image */}
                      <div className="h-36 md:h-48 overflow-hidden relative">
                        <img
                          src={pkg.image}
                          alt={pkg.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="p-3 md:p-6 flex flex-col">
                        {/* Title & Tagline */}
                        <div className="mb-3 md:mb-4">
                          <h3 className="font-serif text-lg md:text-2xl text-[#C5A059] mb-1 md:mb-2 line-clamp-1">
                            {pkg.name}
                          </h3>
                          <p className="text-[#C5A059]/70 text-xs md:text-sm italic line-clamp-1">
                            {pkg.tagline}
                          </p>
                        </div>

                        {/* Items List */}
                        <div className="space-y-1.5 md:space-y-2 mb-4 md:mb-6 flex-1">
                          {pkg.items.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-[#C5A059]/80 text-xs md:text-sm">
                              <Check className="w-3 h-3 md:w-4 md:h-4 mt-0.5 text-[#C5A059] flex-shrink-0" />
                              <span className="line-clamp-1">{item}</span>
                            </div>
                          ))}
                        </div>

                        {/* Description */}
                        <p className="text-[#C5A059]/70 text-xs mb-2 md:mb-4 leading-relaxed line-clamp-2">
                          {pkg.description}
                        </p>

                        {/* Serves Info */}
                        <div className="text-[#C5A059]/60 text-xs mb-2 md:mb-4 font-light">
                          Kişi Sayısı: {pkg.serves}
                        </div>

                        {/* Price Section */}
                        <div className="border-t border-[#C5A059]/20 pt-2 md:pt-4 mb-3 md:mb-4">
                          <div className="flex items-baseline justify-between">
                            <span className="text-[#C5A059]/70 text-xs">Fiyat</span>
                            <div className="flex items-baseline gap-2 md:gap-3">
                              <span className="font-serif text-[#C5A059] text-xl md:text-3xl">
                                {pkg.price}
                              </span>
                              <span className="text-[#C5A059]/50 line-through text-xs">
                                {pkg.originalPrice}
                              </span>
                            </div>
                          </div>
                        </div>

                        
                      </div>
                    </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Hidden on Mobile, Show on Tablet+ */}
          {itemsPerView < comboPackagesConfig.packages.length && (
            <>
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-16 bg-[#C5A059]/10 hover:bg-[#C5A059]/20 disabled:opacity-30 disabled:cursor-not-allowed text-[#C5A059] p-2 md:p-3 rounded-full transition-all duration-200"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-16 bg-[#C5A059]/10 hover:bg-[#C5A059]/20 disabled:opacity-30 disabled:cursor-not-allowed text-[#C5A059] p-2 md:p-3 rounded-full transition-all duration-200"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </>
          )}
        </div>

        {/* Dot Indicators - Show on Mobile */}
        {itemsPerView < comboPackagesConfig.packages.length && (
          <div className="md:hidden flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map(
              (_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'bg-[#C5A059] w-6' : 'bg-[#C5A059]/30 w-2'
                  }`}
                />
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
}
