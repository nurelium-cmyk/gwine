import { useEffect } from 'react';
import { ArrowLeft, Wine } from 'lucide-react';
import { navigationConfig } from '../config';
import { ScrollToTop } from '../components/ScrollToTop';
import { WhatsAppPopup } from '../components/WhatsAppPopup';

interface ProductItem {
  name: string;
  desc: string;
}

interface CategoryData {
  name: string;
  description: string;
  items: ProductItem[];
}

interface ProductDetailProps {
  productId: string;
  onBack: () => void;
}

const productData: Record<string, CategoryData> = {
  'viski': {
    name: 'Viski',
    description: 'İskoçya\'nın isli duraklarından İrlanda\'nın yumuşak vadilerine kadar, karakteri olan en seçkin harman ve single malt koleksiyonu.',
    items: [
      { name: 'Chivas Regal 12/18', desc: 'Zengin meyve ve bal notalarıyla Türkiye\'nin en sevilen premium harmanı.' },
      { name: 'Jack Daniel\'s No.7', desc: 'Kömürden süzülen karakteristik tat; tam bir Amerikan efsanesi.' },
      { name: 'JW Black Label', desc: '40\'tan fazla viskinin birleşimiyle gelen ikonik derinlik ve isli bitiş.' },
      { name: 'Jameson Irish', desc: 'Üç kez damıtılmış, son derece pürüzsüz ve kolay içimli İrlanda klasiği.' },
      { name: 'The Macallan', desc: 'Şeri meşe fıçılarda olgunlaşmış, dünyanın en prestijli single maltlarından biri.' },
      { name: 'Glenfiddich 12', desc: 'Taze armut ve hafif meşe notalarıyla dünyanın en çok ödül alan viskisi.' },
      { name: 'Lagavulin 16', desc: 'İsli ve turbalı viski tutkunları için Islay adasının en yoğun cevabı.' },
      { name: 'Talisker 10', desc: 'Deniz tuzu ve karabiber esintili, vahşi ve karakterli bir denizci viskisi.' }
    ]
  },
  'votka': {
    name: 'Votka',
    description: 'Ultra-premium filtreleme teknikleriyle elde edilen, berraklığı ve ipeksi dokusuyla kokteyllerinizin yıldızı.',
    items: [
      { name: 'Absolut Blue', desc: 'Saf İsveç buğdayından gelen zengin ve gövdeli, klasik bir seçim.' },
      { name: 'Grey Goose', desc: 'Fransız uzmanlığıyla üretilen, lüks segmentin en pürüzsüz temsilcisi.' },
      { name: 'Belvedere', desc: 'Polonya geleneğiyle %100 çavdardan üretilen dört kez damıtılmış saflık.' },
      { name: 'Smirnoff North', desc: 'Yaban mersini aromasıyla buz gibi bir ferahlık sunan modern tercih.' },
      { name: 'Ketel One', desc: 'Bakır imbiklerde damıtılmış, hafif narenciye ve bal notalı butik votka.' },
      { name: 'Gilbey\'s', desc: 'Yumuşak içimi ve kristal berraklığıyla Türkiye\'nin vazgeçilmez klasiği.' },
      { name: 'Istanblue', desc: 'Özenle seçilmiş tahıllardan üretilen, damakta dengeli bir iz bırakan yerli.' },
      { name: 'Stolichnaya', desc: 'Eski dünya geleneğiyle üretilen, baharatlı ve karakteristik Rus ekolü.' }
    ]
  },
  'raki': {
    name: 'Rakı',
    description: 'Anasonun suyla dansı; meze sofralarının ruhu, aslan sütünün en özel ve göbek serileri.',
    items: [
      { name: 'Beylerbeyi Göbek', desc: '%100 yaş üzüm ve anasonun en saf hali; şekersiz ve pürüzsüz.' },
      { name: 'Yeni Rakı Uzun Demleme', desc: '48 saat süren yavaş bakır imbik damıtımıyla gelen eşsiz yumuşaklık.' },
      { name: 'Tekirdağ Altın Seri', desc: 'Meşe fıçılarda dinlendirilmiş, altın sarısı rengiyle bir sofra efsanesi.' },
      { name: 'Yeni Rakı Giz', desc: 'Sınırlı sayıda üretilen, fıçı dinlendirmeli en üst segment rakı deneyimi.' },
      { name: 'Efe Göbek', desc: 'Anason kokusunun yoğun, içimin ise pamuksu olduğu bir Ege klasiği.' },
      { name: 'Saki Siyah Üzüm', desc: 'Manisa ve Denizli üzümlerinden gelen meyvemsi ve dolgun bir gövde.' },
      { name: 'Altınbaş', desc: 'Efsanevi "altın kapak"; yüksek alkol oranı ve keskin anason tadı sevenlere.' },
      { name: 'Kulüp Rakısı', desc: 'Atatürk döneminden bu yana değişmeyen reçetesiyle ağır abilerin seçimi.' }
    ]
  },
  'sarap': {
    name: 'Şarap',
    description: 'Anadolu bağlarından Bordeaux tepelerine uzanan, her yudumuyla bir hikaye anlatan mahzenimiz.',
    items: [
      { name: 'Kavaklıdere Yakut', desc: 'Türkiye\'nin en ikonik kırmızısı; meyvemsi, canlı ve dengeli.' },
      { name: 'Suvla Rezerv', desc: 'Gelibolu yarımadasının karakterini taşıyan, gövdeli ve uzun bitişli.' },
      { name: 'Doluca Kav', desc: 'Öküzgözü ve Boğazkere uyumunun meşe fıçıyla taçlanmış hali.' },
      { name: 'Kayra Buzbağ Rezerv', desc: 'Anadolu tütünü ve baharat notalarıyla tam gövdeli bir klasik.' },
      { name: 'Paşabağları', desc: 'Kapadokya\'nın volkanik topraklarından gelen eşsiz mineral yapı.' },
      { name: 'Chateau Kalpak', desc: 'Uluslararası standartlarda, Bordeaux kupajı kalitesinde yerli bir dev.' },
      { name: 'Casillero del Diablo', desc: 'Şili\'nin dünyaca ünlü "Şeytanın Mahzeni"nden gelen Cabernet gücü.' },
      { name: 'Sarafin Chardonnay', desc: 'Hafif vanilya ve tereyağı notalarıyla beyaz şarapta zarafet.' }
    ]
  },
  'puro': {
    name: 'Puro',
    description: 'Küba\'nın toprağından humidorlarımıza; zamanı durduran, el işçiliği şaheserler.',
    items: [
      { name: 'Cohiba Siglo Serisi', desc: 'Fidel Castro\'nun tercihi; kremamsı, fındık notalı ve çok prestijli.' },
      { name: 'Montecristo No.2', desc: 'Dünyanın en iyi piramit purosu kabul edilen, baharatlı bir klasik.' },
      { name: 'Romeo y Julieta', desc: 'Orta gövdeli, dengeli ve çiçeksi aromalarıyla romantik bir içim.' },
      { name: 'Backwoods Originals', desc: 'Vahşi ve doğal yapısıyla Türkiye\'nin en çok aranan aromatik serisi.' },
      { name: 'Toscanello Rosso', desc: 'Kahve ve vanilya eşleşmesiyle kısa molaların en lezzetli İtalyanı.' },
      { name: 'Captain Black Dark', desc: 'Tatlı tütün ve kakao aromasıyla her zaman ulaşılabilir bir keyif.' },
      { name: 'Davidoff Signature', desc: 'Beyaz etiket zarafetiyle ultra-premium ve pürüzsüz odunsu notalar.' },
      { name: 'Partagás Serie D', desc: 'Yoğun toprak ve deri notalarıyla güçlü puro sevenlerin favorisi.' }
    ]
  },
  'cikolata': {
    name: 'Çikolata',
    description: 'İçkinizin en tatlı eşlikçisi; premium kakao çekirdeklerinden gelen bir haz yolculuğu.',
    items: [
      { name: 'Nestlé Damak Gece', desc: 'Kavrulmuş bütün Antep fıstıkları ve %55 bitterin asil uyumu.' },
      { name: 'Ferrero Rocher', desc: 'Bütün fındık, krema ve çıtır gofret katmanıyla altın bir dokunuş.' },
      { name: 'Toblerone Swiss', desc: 'Bal ve bademli nuga içeren ikonik İsviçre dağları formu.' },
      { name: 'Lindt Excellence', desc: '%85 kakaolu, erime noktası kusursuz ayarlanmış gurme bitter.' },
      { name: 'Godiva Masterpieces', desc: 'Lüks Belçika dolgularıyla her ısırıkta farklı bir hikaye.' },
      { name: 'Kinder Bueno', desc: 'Hafifliği ve fındık kremasıyla her yaşın vazgeçilmez çıtırlığı.' },
      { name: 'Tadelle King Size', desc: 'Bol fındıklı ve kaliteli kakaolu gerçek bir Türk nostaljisi.' },
      { name: 'Milka Nutty', desc: 'Alp sütü yumuşaklığı ile bütün fındıkların cömert birleşimi.' }
    ]
  },
  'cips': {
    name: 'Cips',
    description: 'Eğlence anlarının çıtır sesi; en taze patateslerden ve en özel baharat harmanlarından.',
    items: [
      { name: 'Lay\'s Mevsim Yeşillikli', desc: 'Yoğurt ve taze yeşillik aromasıyla Türkiye\'nin 1 numaralı eşlikçisi.' },
      { name: 'Doritos Taco', desc: 'Baharatlı mısır cipsi denince akla gelen ilk, ikonik ve baharatlı lezzet.' },
      { name: 'Ruffles Peynir & Soğan', desc: 'Tırtıklı yapısı ve yoğun peynir tadıyla içeceklerin en sağlam dostu.' },
      { name: 'Pringles Sour Cream', desc: 'Kremalı ve soğanlı, dağılmayan formlu dünyaca ünlü tüp cips, sadece bizde!' },
      { name: 'Doritos Risk', desc: 'Acı sevenler için her lokmada heyecan dolu bir lezzet oyunu.' },
      { name: 'Cheetos Fırından', desc: 'Mısırın fırınlanmış en hafif ve peynirli hali; suçluluk hissettirmez.' },
      { name: 'Lay\'s Klasik', desc: 'Sadece patates, yağ ve tuzun en saf ve çıtır buluşması.' },
      { name: 'Züber Cips', desc: 'Sağlıklı seçim arayanlara nohut unundan üretilmiş, yüksek proteinli çıtırlık.' }
    ]
  },
  'kuruyemis': {
    name: 'Kuruyemiş',
    description: 'Doğadan geldiği tazelikte, özel kavurma teknikleriyle hazırlanan premium atıştırmalıklar.',
    items: [
      { name: 'Lüks Kokteyl Mix', desc: 'Kaju, badem, fındık ve fıstığın en kaliteli oranlarda birleşimi.' },
      { name: 'Antep Fıstığı (Ana)', desc: 'Gaziantep\'ten özel seçilen, iri taneli ve tam çıtlak kalite.' },
      { name: 'Kavrulmuş Kaju', desc: 'Vietnam ormanlarından gelen, tereyağı tadında ve dev boyutta.' },
      { name: 'Siirt Fıstığı', desc: 'Antep fıstığına göre daha iri ve daha az yağlı, özel bir lezzet.' },
      { name: 'Kavrulmuş Fındık', desc: 'Giresun fındığının en taze hali; çıtır çıtır ve enerji dolu.' },
      { name: 'Mısır Kavurgası', desc: 'Soslu ve baharatlı yapısıyla biranın yanına en çok giden çıtır.' },
      { name: 'Badem İçi (Çiğ)', desc: 'Sağlık ve lezzeti bir araya getiren, büyük ve tatlı Datça bademleri.' },
      { name: 'Sarı Leblebi', desc: 'Tavşan kanı çayın ve rakının yanına yakışan çifte kavrulmuş Çorum klasiği.' }
    ]
  }
};

export function ProductDetail({ productId, onBack }: ProductDetailProps) {
  const product = productData[productId] || productData['viski'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-wine-800/95 backdrop-blur-md py-3 transition-all duration-500" role="navigation">
        <div className="container-custom flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-3 group"
          >
            <ArrowLeft className="w-6 h-6 text-gold-500 transition-transform duration-300 group-hover:scale-110" />
            <div className="flex flex-col">
              <span className="font-serif text-xl text-white tracking-wide">{navigationConfig.brandName}</span>
              <span className="text-[10px] text-gold-400 tracking-widest uppercase">{navigationConfig.tagline}</span>
            </div>
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {navigationConfig.navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => onBack()}
                className="text-sm text-white/80 hover:text-gold-400 transition-colors duration-300 py-2"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="pt-20 min-h-screen bg-[#141414]">
        <section className="py-24">
          <div className="container-custom max-w-5xl mx-auto">
            <div className="mb-16 text-center">
              <div className="inline-flex p-4 rounded-full bg-gold-500/10 mb-6">
                <Wine className="w-10 h-10 text-gold-500" />
              </div>
              <h1 className="font-serif text-5xl md:text-6xl text-gold-100 mb-6">{product.name}</h1>
              <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">{product.description}</p>
              <div className="h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent w-full mt-10" />
            </div>

            <div className="my-16">
              <h2 className="font-serif text-3xl text-gold-400 mb-10 text-center lg:text-left">Popüler Seçenekler</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.items.map((item, index) => (
                  <div
                    key={index}
                    className="group p-6 rounded-lg bg-wine-900/20 border border-white/5 hover:border-gold-500/40 hover:bg-wine-800/40 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <h3 className="text-white text-lg group-hover:text-gold-400 transition-colors font-serif font-medium">
                          {item.name}
                        </h3>
                        <p className="text-white/50 text-sm leading-snug">
                          {item.desc}
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-full border border-gold-500/20 flex items-center justify-center text-[10px] text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-all">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-24 pt-16 border-t border-white/5">
              <div className="relative overflow-hidden bg-gradient-to-br from-wine-900/60 to-black border border-gold-500/20 rounded-2xl p-10 md:p-16 text-center">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 blur-[100px] -mr-32 -mt-32" />
                <h3 className="font-serif text-3xl text-gold-400 mb-6">Akşamınızı Taçlandırın</h3>
                <p className="text-white/80 mb-10 text-lg max-w-xl mx-auto">
                  En sevdiğiniz {product.name.toLowerCase()} ve yanında ona en çok yakışacak eşlikçiler için WhatsApp hattımız 7/24 aktif.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => scrollToSection('#contact')}
                    className="bg-gold-500 hover:bg-gold-600 text-black font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    Hızlı Sipariş Ver
                  </button>
                  <button
                    onClick={onBack}
                    className="border border-white/20 hover:border-gold-500/50 text-white py-4 px-10 rounded-full transition-all duration-300"
                  >
                    Diğer Ürünlere Bak
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ScrollToTop />
      <WhatsAppPopup />
    </>
  );
}