import { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { weeklyFavoritesConfig } from '../config';

export function WeeklyFavorites() {
  if (!weeklyFavoritesConfig.mainTitle) return null;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
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

    const elements = sectionRef.current?.querySelectorAll('.fade-up, .slide-in-left');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const maxIndex = Math.max(0, weeklyFavoritesConfig.products.length - itemsPerView);

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
    <section id="weekly-favorites" ref={sectionRef} className="section-padding bg-[#1A2421]/50">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8 md:mb-16 px-4 md:px-6">
        <div className="text-center space-y-2 md:space-y-4">
          <p className="text-[#C5A059] font-serif italic text-xs md:text-sm tracking-widest">
            {weeklyFavoritesConfig.scriptText.toUpperCase()}
          </p>
          <p className="text-[#C5A059]/70 text-xs tracking-widest font-light">
            {weeklyFavoritesConfig.subtitle}
          </p>
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl text-[#E8D5B7] mt-3 md:mt-6">
            {weeklyFavoritesConfig.mainTitle}
          </h2>
          <p className="text-[#C5A059]/80 max-w-2xl mx-auto mt-3 md:mt-6 text-sm md:text-base leading-relaxed">
            {weeklyFavoritesConfig.description}
          </p>
        </div>
      </div>

      {/* Products Carousel */}
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div
          ref={sliderRef}
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slider Container */}
          <div className="overflow-hidden">
            <div
              className="flex gap-3 md:gap-6 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {weeklyFavoritesConfig.products.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 slide-in-left"
                  style={{
                    width: itemsPerView === 1 ? 'calc(100% - 0.75rem)' : itemsPerView === 2 ? 'calc(50% - 0.9rem)' : itemsPerView === 3 ? 'calc(33.333% - 1rem)' : 'calc(25% - 1.125rem)',
                  }}
                >
                  <div className="group bg-[#121212] border border-[#C5A059]/20 rounded-lg overflow-hidden hover:border-[#C5A059]/50 transition-all h-full flex flex-col">
                    {/* Image Container */}
                    <div className="relative h-40 md:h-56 overflow-hidden bg-[#1A2421]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {product.badge && (
                        <div className="absolute top-2 right-2 md:top-3 md:right-3 bg-[#C5A059] text-[#121212] text-xs font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-full">
                          {product.badge}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-3 md:p-4 flex-1 flex flex-col">
                      <h3 className="font-serif text-[#C5A059] text-base md:text-lg mb-1 md:mb-2 group-hover:text-[#E8D5B7] transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-[#C5A059]/70 text-xs md:text-sm mb-3 md:mb-4 flex-1 line-clamp-2">{product.description}</p>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-3 md:mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 md:w-4 h-3 md:h-4 ${
                              i < Math.floor(product.rating)
                                ? 'fill-[#C5A059] text-[#C5A059]'
                                : 'text-[#C5A059]/30'
                            }`}
                          />
                        ))}
                        <span className="text-[#C5A059]/70 text-xs ml-1 md:ml-2">({product.rating})</span>
                      </div>

                      {/* Price */}
                      <div className="flex items-center gap-2 md:gap-3">
                        <span className="font-serif text-[#C5A059] text-xl md:text-2xl">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-[#C5A059]/50 line-through text-xs md:text-sm">{product.originalPrice}</span>
                        )}
                      </div>
                    </div>

                    
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Hidden on Mobile */}
          {maxIndex > 0 && (
            <div className="hidden md:flex justify-center gap-3 md:gap-4 mt-6 md:mt-8">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="p-2 md:p-3 rounded-full border border-[#C5A059]/30 hover:border-[#C5A059] text-[#C5A059] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === maxIndex}
                className="p-2 md:p-3 rounded-full border border-[#C5A059]/30 hover:border-[#C5A059] text-[#C5A059] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          )}

          {/* Dot Indicators - Show on Mobile */}
          {maxIndex > 0 && (
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
      </div>
    </section>
  );
}
