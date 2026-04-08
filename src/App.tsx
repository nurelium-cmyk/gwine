import { useState, useCallback, useEffect } from 'react';
import { Navigation } from './sections/Navigation';
import { Hero } from './sections/Hero';
import { ProductDetail } from './sections/ProductDetail';
import { MezeDetail } from './sections/MezeDetail';
import { WeeklyFavorites } from './sections/WeeklyFavorites';
import { WineShowcase } from './sections/WineShowcase';
import { ComboPackages } from './sections/ComboPackages';
import { WineryCarousel } from './sections/WineryCarousel';
import { MobileProductGrid } from './sections/MobileProductGrid';
import { TrustBadges } from './sections/TrustBadges';
import { Museum } from './sections/Museum';
import { News } from './sections/News';
import { ContactForm } from './sections/ContactForm';
import { Footer } from './sections/Footer';
import { Preloader } from './components/Preloader';
import { ScrollToTop } from './components/ScrollToTop';
import { WhatsAppPopup } from './components/WhatsAppPopup';
import { NotificationBubbles } from './components/NotificationBubbles';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<'home' | { type: 'product'; id: string } | { type: 'meze' }>('home');

  const handlePreloaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  // Handle hash-based routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/meze') {
        setCurrentPage({ type: 'meze' });
      } else if (hash.startsWith('#/product/')) {
        const productId = hash.replace('#/product/', '');
        setCurrentPage({ type: 'product', id: productId });
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleBackToHome = () => {
    window.location.hash = '#';
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  // Show meze detail page
  if (currentPage !== 'home' && currentPage.type === 'meze') {
    return (
      <MezeDetail onBack={handleBackToHome} />
    );
  }

  // Show 

  // Show product detail page
  if (currentPage !== 'home' && currentPage.type === 'product') {
    return (
      <ProductDetail productId={currentPage.id} onBack={handleBackToHome} />
    );
  }

  // Show home page
  return (
    <>
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}

      <div className={`min-h-screen bg-[#141414] ${isLoading ? 'overflow-hidden max-h-screen' : ''}`}>
        <Navigation />

        <main>
          <Hero isReady={!isLoading} />
          <WeeklyFavorites />
          <WineShowcase />
          <ComboPackages />
          <WineryCarousel />
          <MobileProductGrid />
          <TrustBadges />
          <Museum />
          <News />
          <ContactForm />
        </main>

        <Footer />
        <ScrollToTop />
        <WhatsAppPopup />
        <NotificationBubbles />
      </div>
    </>
  );
}

export default App;
