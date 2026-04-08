import { useEffect, useState } from 'react';

export function NotificationBubbles() {
  const [firstNotification, setFirstNotification] = useState(false);
  const [secondNotification, setSecondNotification] = useState(false);
  const [firstFading, setFirstFading] = useState(false);
  const [secondFading, setSecondFading] = useState(false);

  useEffect(() => {
    // First notification: appears after 13 seconds, disappears after 25 seconds (13 + 12)
    const firstTimer = setTimeout(() => {
      setFirstNotification(true);
    }, 13000);

    const firstHideTimer = setTimeout(() => {
      setFirstFading(true);
      setTimeout(() => {
        setFirstNotification(false);
        setFirstFading(false);
      }, 300); // fade out duration
    }, 25000);

    // Second notification: appears after 60 seconds, disappears after 70 seconds (60 + 10)
    const secondTimer = setTimeout(() => {
      setSecondNotification(true);
    }, 60000);

    const secondHideTimer = setTimeout(() => {
      setSecondFading(true);
      setTimeout(() => {
        setSecondNotification(false);
        setSecondFading(false);
      }, 300); // fade out duration
    }, 70000);

    return () => {
      clearTimeout(firstTimer);
      clearTimeout(firstHideTimer);
      clearTimeout(secondTimer);
      clearTimeout(secondHideTimer);
    };
  }, []);

  return (
    <>
      {/* First Notification */}
      {firstNotification && (
        <div className={`fixed bottom-20 right-6 z-30 max-w-xs transition-all duration-300 ease-out ${
          firstFading ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0 animate-fade-up'
        }`}>
          <div className="bg-gradient-to-r from-[#1A2421] to-[#121212] border border-[#C5A059]/40 rounded-lg p-4 shadow-xl">
            <p className="text-[#C5A059] text-sm font-serif">
              Seçkin bir akşam için doğru adrestesiniz. Siparişinizi oluşturun, 30 dakikada keyfinizi başlatalım.
            </p>
          </div>
        </div>
      )}

      {/* Second Notification */}
      {secondNotification && (
        <div className={`fixed bottom-20 right-6 z-30 max-w-xs transition-all duration-300 ease-out ${
          secondFading ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0 animate-fade-up'
        }`}>
          <div className="bg-gradient-to-r from-[#1A2421] to-[#121212] border border-[#C5A059]/40 rounded-lg p-4 shadow-xl">
            <p className="text-[#C5A059] text-sm font-serif">
              Damak tadınıza en uygun eşleşmeyi bulmakta kararsız mısınız? Size özel bir kürasyon ve tadım tavsiyesi için uzmanımıza danışabilirsiniz.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
