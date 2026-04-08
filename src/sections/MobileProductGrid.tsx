export function MobileProductGrid() {
  const products = [
    { id: 'viski', name: 'Viski', image: '/images/gird-viski.png' },
    { id: 'votka', name: 'Votka', image: '/images/gird-vodka.png' },
    { id: 'raki', name: 'Rakı', image: '/images/gird-raki.png' },
    { id: 'sarap', name: 'Şarap', image: '/images/gird-wine.png' },
    { id: 'puro', name: 'Puro', image: '/images/gird-puro.png' },
    { id: 'cikolata', name: 'Çikolata', image: '/images/gird-cikolata.png' },
    { id: 'cips', name: 'Cips', image: '/images/gird-cips.png' },
    { id: 'kuruyemis', name: 'Kuruyemiş', image: '/images/gird-kuruyemis.png' },
  ];

  const handleProductClick = (productId: string) => {
    window.location.hash = `/product/${productId}`;
    window.scrollTo(0, 0);
  };

  return (
    <section id="mobile-products" className="md:hidden section-padding bg-[#121212] border-t border-[#C5A059]/20">
      <div>
        <h1 className="text-center font-serif text-3xl text-[#E8D5B7] mb-6">Ürün Koleksiyonu</h1>
      </div>  
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 gap-3">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => handleProductClick(product.id)}
              className="group bg-gradient-to-br from-[#1A2421]/60 to-[#121212]/80 border border-[#C5A059]/30 hover:border-[#C5A059]/60 rounded-lg p-4 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:bg-gradient-to-br hover:from-[#1A2421] hover:to-[#0F1A17]"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-[#C5A059] font-serif text-sm group-hover:text-[#E8D5B7] transition-colors text-center">
                {product.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
