// =============================================================================
// Grand Vine Configuration
// =============================================================================
// Lüks içki ve puro mağazası için yapılandırma
// Renk Paleti: Koyu Yeşil (#1A2421), Altın Sarısı (#C5A059), Kömür Siyahı (#121212)
// =============================================================================

// -----------------------------------------------------------------------------
// Site Config
// -----------------------------------------------------------------------------
export interface SiteConfig {
  title: string;
  description: string;
  language: string;
  keywords: string;
  ogImage: string;
  canonical: string;
}

export const siteConfig: SiteConfig = {
  title: "Grand Vine | Premium İçki & Puro",
  description: "Grand Vine - Viski, Votka, Rakı, Puro ve özel meze seçkileriyle hizmetinizde. Lüks ve kalitenin adresi.",
  language: "tr",
  keywords: "grand vine, viski, votka, rakı, puro, meze, premium içki, lüks içki, özel viski",
  ogImage: "/images/hero-banner.jpg",
  canonical: "https://grandvine.com",
};

// -----------------------------------------------------------------------------
// Navigation Config
// -----------------------------------------------------------------------------
export interface NavDropdownItem {
  name: string;
  href: string;
}

export interface NavLink {
  name: string;
  href: string;
  icon: string;
  dropdown?: NavDropdownItem[];
}

export interface NavigationConfig {
  brandName: string;
  brandSubname: string;
  tagline: string;
  navLinks: NavLink[];
  ctaButtonText: string;
}

export const navigationConfig: NavigationConfig = {
  brandName: "GRAND",
  brandSubname: "Vine",
  tagline: "Premium İçki & Puro",
  navLinks: [
    { name: "Ana Sayfa", href: "#home", icon: "Home" },
    { 
      name: "Koleksiyon", 
      href: "#collection", 
      icon: "Wine",
      dropdown: [
        { name: "Viski", href: "#whiskey" },
        { name: "Votka", href: "#vodka" },
        { name: "Rakı", href: "#raki" },
        { name: "Şarap", href: "#sarap" },
        { name: "Puro", href: "#puro" },                        
        { name: "Çikolata", href: "#cikolata" },      
        { name: "Cips", href: "#cips" },      
        { name: "Kuruyemiş", href: "#kuruyemis" },      
      ]
    },
    { name: "Meze", href: "#meze", icon: "Grape" },
    { name: "Hakkımızda", href: "#about", icon: "BookOpen" },
    { name: "İletişim", href: "#contact", icon: "Mail" },
  ],
  ctaButtonText: "Sipariş Ver",
};

// -----------------------------------------------------------------------------
// Preloader Config
// -----------------------------------------------------------------------------
export interface PreloaderConfig {
  brandName: string;
  brandSubname: string;
  yearText: string;
}

export const preloaderConfig: PreloaderConfig = {
  brandName: "GRAND",
  brandSubname: "Vine",
  yearText: "Est. 2015",
};

// -----------------------------------------------------------------------------
// Hero Config
// -----------------------------------------------------------------------------
export interface HeroStat {
  value: number;
  suffix: string;
  label: string;
}

export interface HeroConfig {
  scriptText: string;
  mainTitle: string;
  badgeText?: string;
  ctaButtonText: string;
  ctaTarget: string;
  stats: HeroStat[];
  decorativeText: string;
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  scriptText: "Premium İçki & Puro Deneyimi",
  mainTitle: "Kalite, Hız ve Güvenle\nKapınızda",
  badgeText: "22:00 - dan Sonra Evlere Servis",
  ctaButtonText: "Koleksiyonu Keşfet",
  ctaTarget: "#mobile-products",
  stats: [
    { value: 500, suffix: "+", label: "Özel Şişe" },
    { value: 50, suffix: "+", label: "Puro Çeşidi" },
    { value: 100, suffix: "%", label: "Orjinal Ürün" },
  ],
  decorativeText: "GRAND VINE",
  backgroundImage: "/images/hero-banner.jpg",
};

// -----------------------------------------------------------------------------
// Wine Showcase Config - Koleksiyon Bölümü
// -----------------------------------------------------------------------------
export interface Wine {
  id: string;
  name: string;
  subtitle: string;
  year: string;
  image: string;
  filter: string;
  glowColor: string;
  description: string;
  tastingNotes: string;
  alcohol: string;
  temperature: string;
  aging: string;
}

export interface WineFeature {
  icon: string;
  title: string;
  description: string;
}

export interface WineQuote {
  text: string;
  attribution: string;
  prefix: string;
}

export interface WineShowcaseConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  wines: Wine[];
  features: WineFeature[];
  quote: WineQuote;
}

export const wineShowcaseConfig: WineShowcaseConfig = {
  scriptText: "Özel Koleksiyon",
  subtitle: "DÜNYANIN EN İYİLERİ",
  mainTitle: "Premium Seçkilerimiz",
  wines: [
    {
      id: "whiskey",
      name: "Viski",
      subtitle: "Chivas Regal 12 İskoç Viskisi",
      year: "12 Yıllık",
      image: "/images/chivas.png",
      filter: "brightness(0.9) sepia(0.2) saturate(1.1)",
      glowColor: "bg-amber-900/20",
      description: "Oldukça yumuşak ve zengin; olgun elma, bal ve vanilya aromalarına hafif fındık notaları eşlik eder.",
      tastingNotes: "Blended (Harman) İskoç Viskisi",
      alcohol: "40",
      temperature: "18-20°C",
      aging: "12-25 Yıl",
    },
    {
      id: "vodka",
      name: "Votka",
      subtitle: "Premium & Ultra-Premium",
      year: "Süzme",
      image: "/images/wine-meze.jpg",
      filter: "brightness(1.1) grayscale(0.3)",
      glowColor: "bg-blue-900/15",
      description: "Belvedere, Grey Goose, Ketel One gibi dünyanın en premium votka markaları özenle seçilmiştir.",
      tastingNotes: "Berrak, yumuşak, hafif buğday aroması",
      alcohol: "40%",
      temperature: "-18°C",
      aging: "Süzme",
    },
    {
      id: "raki",
      name: "Rakı",
      subtitle: "Geleneksel & Özel Seri",
      year: "Klasik",
      image: "/images/texture-bg.jpg",
      filter: "brightness(0.95) sepia(0.1)",
      glowColor: "bg-emerald-900/15",
      description: "Yeni Rakı, Tekirdağ, Efe gibi köklü markaların en özel serileri ve sınırlı üretim şişeler.",
      tastingNotes: "Anason, damla sakızı, hafif meşe",
      alcohol: "45%",
      temperature: "8-10°C",
      aging: "Klasik",
    },
  ],
  features: [
    { icon: "Wine", title: "Özel Şişeler", description: "Sınırlı sayıda üretim şişeler" },
    { icon: "Thermometer", title: "Ideal Sıcaklık", description: "Her içki için optimum servis" },
    { icon: "Clock", title: "Yaşlandırma", description: "Uzun yıllar meşe fıçılarda" },
    { icon: "Sparkles", title: "Orjinal Garanti", description: "%100 orjinal ürün garantisi" },
  ],
  quote: {
    text: "İyi bir viski, iyi bir hikaye gerektirir. Her şişenin arkasında bir ustanın emeği vardır.",
    attribution: "Grand Vine Koleksiyonu",
    prefix: "Not",
  },
};

// -----------------------------------------------------------------------------
// Winery Carousel Config - Puro Bölümü
// -----------------------------------------------------------------------------
export interface CarouselSlide {
  image: string;
  title: string;
  subtitle: string;
  area: string;
  unit: string;
  description: string;
}

export interface WineryCarouselConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  locationTag: string;
  slides: CarouselSlide[];
}

export const wineryCarouselConfig: WineryCarouselConfig = {
  scriptText: "El Yapımı Puro",
  subtitle: "KÜBA & DOMİNİK",
  mainTitle: "Puro Koleksiyonu",
  locationTag: "Habana, Küba",
  slides: [
    {
      image: "/images/cohiba.png",
      title: "Cohiba",
      subtitle: "Behike & Siglo Serisi",
      area: "52",
      unit: "Ring Gauge",
      description: "Küba'nın en prestijli puro markası. Behike serisi dünyanın en nadir tütünlerinden üretilir.",
    },
    {
      image: "/images/cb.png",
      title: "Captain Black",
      subtitle: "Aromatik Bir Efsane",
      area: "42",
      unit: "Ring Gauge",
      description: "Vanilya ve koyu krema notalarıyla zenginleştirilmiş, yumuşak içimli ve etkileyici aromasıyla her anınıza eşlik eden bir klasik.",
    },
    {
      image: "/images/hh.png",
      title: "Che Havanitos",
      subtitle: "Cigarillos De La Havana",
      area: "54",
      unit: "Ring Gauge",
      description: "Dominik Cumhuriyeti'nin en lüks puro markası. Winston Churchill özel serisi.",
    },
  ],
};

// -----------------------------------------------------------------------------
// Museum Config - Şarap & Meze Bölümü
// -----------------------------------------------------------------------------
export interface TimelineEvent {
  year: string;
  event: string;
}

export interface MuseumTabContent {
  title: string;
  description: string;
  highlight: string;
}

export interface MuseumTab {
  id: string;
  name: string;
  icon: string;
  image: string;
  content: MuseumTabContent;
}

export interface MuseumQuote {
  prefix: string;
  text: string;
  attribution: string;
}

export interface MuseumConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  introText: string;
  timeline: TimelineEvent[];
  tabs: MuseumTab[];
  openingHours: string;
  openingHoursLabel: string;
  ctaButtonText: string;
  yearBadge: string;
  yearBadgeLabel: string;
  quote: MuseumQuote;
  founderPhotoAlt: string;
  founderPhoto: string;
}

export const museumConfig: MuseumConfig = {
  scriptText: "Şarap & Meze",
  subtitle: "EŞSİZ LEZZETLER",
  mainTitle: "Özel Eşleştirmeler",
  introText: "Grand Vine olarak sadece içki değil, aynı zamanda içkilerinizi tamamlayacak özel meze ve şarap seçkileri sunuyoruz.",
  timeline: [
    { year: "2015", event: "Grand Vine kuruldu" },
    { year: "2017", event: "Özel koleksiyon başladı" },
    { year: "2020", event: "Puro danışmanlığı hizmeti" },
    { year: "2024", event: "Online sipariş sistemi" },
  ],
  tabs: [
    {
      id: "wine",
      name: "Şarap",
      icon: "Wine",
      image: "/images/wine-meze.jpg",
      content: {
        title: "Dünya Şarapları",
        description: "Bordeaux, Napa Valley, Toskana ve Kapadokya'nın en seçkin şarapları. Kırmızı, beyaz ve özel rosé seçkilerimizle hizmetinizdeyiz.",
        highlight: "500+ Şarap Çeşidi",
      },
    },
    {
      id: "meze",
      name: "Meze",
      icon: "BookOpen",
      image: "/images/wine-meze.jpg",
      content: {
        title: "Geleneksel Mezeler",
        description: "Rakınızla eşleştireceğiniz özel meze tabakları. Atom, haydari, enginar, zeytinyağlılar ve daha fazlası.",
        highlight: "40+ Meze Çeşidi",
      },
    },
    {
      id: "cheese",
      name: "Peynir",
      icon: "Award",
      image: "/images/wine-meze.jpg",
      content: {
        title: "Özel Peynirler",
        description: "Kars gravyeri, İzmir tulumu, çeçil peyniri ve ithal peynir seçkileri. Şaraplarınızla mükemmel uyum.",
        highlight: "25+ Peynir Çeşidi",
      },
    },
  ],
  openingHours: "",
  openingHoursLabel: "",
  ctaButtonText: "Hemen Sipariş Ver",
  yearBadge: "2015",
  yearBadgeLabel: "Kuruluş",
  quote: {
    prefix: "DAMAK",
    text: "Dünyanın en seçkin tütün harmanları ve içecekleri, tam da olması gerektiği gibi: Prestijli, hızlı ve size özel.",
    attribution: "Grand Vine Lounge",
  },
  founderPhotoAlt: "Grand Vine Mağaza",
  founderPhoto: "/images/hero-banner.jpg",
};

// -----------------------------------------------------------------------------
// News Config - Müşteri Yorumları & Hikaye
// -----------------------------------------------------------------------------
export interface NewsArticle {
  id: number;
  image: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface StoryQuote {
  prefix: string;
  text: string;
  attribution: string;
}

export interface StoryTimelineItem {
  value: string;
  label: string;
}

export interface NewsConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  viewAllText: string;
  readMoreText: string;
  articles: NewsArticle[];
  testimonialsScriptText: string;
  testimonialsSubtitle: string;
  testimonialsMainTitle: string;
  testimonials: Testimonial[];
  storyScriptText: string;
  storySubtitle: string;
  storyTitle: string;
  storyParagraphs: string[];
  storyTimeline: StoryTimelineItem[];
  storyQuote: StoryQuote;
  storyImage: string;
  storyImageCaption: string;
}

export const newsConfig: NewsConfig = {
  scriptText: "Blog",
  subtitle: "HABERLER & ETKİNLİKLER",
  mainTitle: "Son Güncellemeler",
  viewAllText: "Tümünü Gör",
  readMoreText: "Devamını Oku",
  articles: [
    {
      id: 1,
      image: "/images/new1.png",
      title: "Yeni Viski Koleksiyonu Geldi",
      excerpt: "İskoçya'nın en seçkin damıtımevlerinden özel şişeler şimdi Grand Vine'da.",
      date: "15 Mart 2026",
      category: "Koleksiyon",
    },
    {
      id: 2,
      image: "/images/new2.png",
      title: "Puro Tadım Gecesi",
      excerpt: "Küba'dan gelen uzmanlar eşliğinde özel puro tadım etkinliği.",
      date: "20 Mart 2026",
      category: "Etkinlik",
    },
    {
      id: 3,
      image: "/images/new3.png",
      title: "Yeni Meze Menüsü",
      excerpt: "Şeflerimizin özel hazırladığı yeni meze tabaklarımızı deneyin.",
      date: "1 Nisan 2026",
      category: "Menü",
    },
    {
      id: 4,
      image: "/images/new4.png",
      title: "Anneler Günü Özel",
      excerpt: "Annenize özel şarap ve çikolata paketleriyle unutulmaz bir hediye.",
      date: "5 Nisan 2026",
      category: "Kampanya",
    },
  ],
  testimonialsScriptText: "Müşterilerimiz",
  testimonialsSubtitle: "YORUMLAR",
  testimonialsMainTitle: "Ne Diyorlar?",
  testimonials: [
    {
      name: "Ahmet Yılmaz",
      role: "Koleksiyoner",
      text: "Grand Vine'da bulamayacağınız viski yok. Personel çok bilgili ve yardımsever. Özellikle sınırlı üretim şişeler için tek adres.",
      rating: 5,
    },
    {
      name: "Selin Kaya",
      role: "Restoran Sahibi",
      text: "İşletmem için özel şarap seçkilerini Grand Vine'dan alıyorum. Her zaman taze ve orjinal ürünler. Paket servisleri de çok hızlı.",
      rating: 5,
    },
    {
      name: "Mehmet Demir",
      role: "Puro Tutkunu",
      text: "Küba puro koleksiyonu inanılmaz. Cohiba Behike'yi başka yerde bulamamıştım. Puro danışmanlığı hizmetleri de çok profesyonel.",
      rating: 5,
    },
  ],
  storyScriptText: "Hikayemiz",
  storySubtitle: "2015'TEN BUGÜNE",
  storyTitle: "Grand Vine Doğuşu",
  storyParagraphs: [
    "2015 yılında küçük bir mağaza olarak başlayan Grand Vine, bugün Türkiye'nin en prestijli premium içki ve puro adreslerinden biri haline geldi.",
    "Kurucumuzun vizyonu, kaliteli ürünleri uygun fiyatlarla müşterilerimize sunmak ve her ziyaretçimize özel bir deneyim yaşatmaktı. Bu vizyon bugün de değişmedi.",
  ],
  storyTimeline: [
    { value: "500+", label: "Ürün Çeşidi" },
    { value: "10K+", label: "Mutlu Müşteri" },
    { value: "9", label: "Yıllık Tecrübe" },
  ],
  storyQuote: {
    prefix: "FELSEFE",
    text: "Kalite asla tesadüf değildir. Her şişe, her puro, her meze özenle seçilir.",
    attribution: "Grand Vine Kurucusu",
  },
  storyImage: "/images/wine-meze.jpg",
  storyImageCaption: "Grand Vine Mağaza İçi",
};

// -----------------------------------------------------------------------------
// Contact Form Config
// -----------------------------------------------------------------------------
export interface ContactInfoItem {
  icon: string;
  label: string;
  value: string;
  subtext: string;
}

export interface ContactFormFields {
  nameLabel: string;
  namePlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitText: string;
  submittingText: string;
  successMessage: string;
  errorMessage: string;
}

export interface ContactFormConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  introText: string;
  contactInfoTitle: string;
  contactInfo: ContactInfoItem[];
  form: ContactFormFields;
  privacyNotice: string;
  formEndpoint: string;
}

export const contactFormConfig: ContactFormConfig = {
  scriptText: "İletişim",
  subtitle: "BİZE ULAŞIN",
  mainTitle: "Sipariş & Danışmanlık",
  introText: "Sipariş vermek, ürün hakkında bilgi almak veya puro danışmanlığı için bize ulaşın. WhatsApp üzerinden hızlı sipariş de verebilirsiniz.",
  contactInfoTitle: "İletişim Bilgileri",
  contactInfo: [
    { icon: "MapPin", label: "Adres", value: "Bağdat Caddesi No:123", subtext: "Kadıköy, İstanbul" },
    { icon: "Phone", label: "Whatsapp", value: "+90 (216) 555 00 00", subtext: "Her gün 09:00 - 06:00" },
    { icon: "Mail", label: "E-posta", value: "info@grandvine.com", subtext: "7/24 destek" },
    { icon: "Clock", label: "Çalışma Saatleri", value: "09:00 - 06:00", subtext: "Haftanın her günü" },
  ],
  form: {
    nameLabel: "İsminiz",
    namePlaceholder: "Ad Soyad",
    phoneLabel: "Telefon numaranız",
    phonePlaceholder: "5XX XXX XX XX",
    messageLabel: "Mesa `jınız",
    messagePlaceholder: "Sipariş veya sorularınız...",
    submitText: "Gönder",
    submittingText: "Gönderiliyor...",
    successMessage: "Mesajınız alındı! En kısa sürede size dönüş yapacağız.",
    errorMessage: "Bir hata oluştu. Lütfen tekrar deneyin.",
  },
  privacyNotice: "Göndererek kişisel verilerinizin işlenmesini kabul etmiş olursunuz.",
  formEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
};

// -----------------------------------------------------------------------------
// Footer Config
// -----------------------------------------------------------------------------
export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterContactItem {
  icon: string;
  text: string;
}

export interface FooterConfig {
  brandName: string;
  tagline: string;
  description: string;
  socialLinks: SocialLink[];
  linkGroups: FooterLinkGroup[];
  contactItems: FooterContactItem[];
  newsletterLabel: string;
  newsletterPlaceholder: string;
  newsletterButtonText: string;
  newsletterSuccessText: string;
  newsletterErrorText: string;
  newsletterEndpoint: string;
  copyrightText: string;
  legalLinks: string[];
  icpText: string;
  backToTopText: string;
  ageVerificationText: string;
}

export const footerConfig: FooterConfig = {
  brandName: "GRAND VINE",
  tagline: "Premium İçki & Puro",
  description: "2015'ten beri İstanbul'un en prestijli premium içki ve puro adresi. Viski, votka, rakı, puro ve özel meze seçkileriyle hizmetinizde.",
  socialLinks: [
    { icon: "Instagram", label: "Instagram", href: "https://instagram.com/grandvine" },
    { icon: "Facebook", label: "Facebook", href: "https://facebook.com/grandvine" },
    { icon: "Twitter", label: "Twitter", href: "https://twitter.com/grandvine" },
  ],
  linkGroups: [
    {
      title: "Koleksiyon",
      links: [
        { name: "Viski", href: "#whiskey" },
        { name: "Votka", href: "#vodka" },
        { name: "Rakı", href: "#raki" },
        { name: "Puro", href: "#cigar" },
        { name: "Şarap", href: "#wine" },
      ],
    },
    {
      title: "Kurumsal",
      links: [
        { name: "Hakkımızda", href: "#about" },
        { name: "Blog", href: "#blog" },
        { name: "Kariyer", href: "#career" },
        { name: "İletişim", href: "#contact" },
      ],
    },
  ],
  contactItems: [
    { icon: "MapPin", text: "Bağdat Caddesi No:123, Kadıköy" },
    { icon: "Phone", text: "+90 (216) 555 00 00" },
    { icon: "Mail", text: "info@grandvine.com" },
  ],
  newsletterLabel: "Bültenimize Abone Olun",
  newsletterPlaceholder: "E-posta adresiniz",
  newsletterButtonText: "Abone Ol",
  newsletterSuccessText: "Aboneliğiniz başarıyla tamamlandı!",
  newsletterErrorText: "Aboneliğiniz başarıyla tamamlandı!",
  newsletterEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
  copyrightText: "© 2024 Grand Vine. Tüm hakları saklıdır.",
  legalLinks: ["Gizlilik Politikası", "Kullanım Koşulları", "Çerez Politikası"],
  icpText: "18+ Yaş Sınırı | Alkol kullanımı sağlığa zararlıdır.",
  backToTopText: "Yukarı Çık",
  ageVerificationText: "Bu site 18 yaş ve üzeri kullanıcılar içindir.",
};

// -----------------------------------------------------------------------------
// Scroll To Top Config
// -----------------------------------------------------------------------------
export interface ScrollToTopConfig {
  ariaLabel: string;
}

export const scrollToTopConfig: ScrollToTopConfig = {
  ariaLabel: "Yukarı çık",
};

// -----------------------------------------------------------------------------
// WhatsApp Popup Config
// -----------------------------------------------------------------------------
export interface WhatsAppConfig {
  enabled: boolean;
  phoneNumber: string;
  headerTitle: string;
  onlineText: string;
  cardTitle: string;
  cardSubtitle: string;
  buttonAriaLabel: string;
  priceListAction?: string;
}

export const whatsAppConfig: WhatsAppConfig = {
  enabled: true,
  phoneNumber: "905555555555",
  headerTitle: "Robin Hood Tekel Shop",
  onlineText: "Çevrimiçi",
  cardTitle: "Paket Servis & Puro Danışmanı",
  cardSubtitle: "Birkaç dakika içinde dönüş sağlanacaktır",
  buttonAriaLabel: "WhatsApp ile iletişime geç",
  priceListAction: "Menuyu Elde Et",
};

// =============================================================================
// Weekly Favorites Config - Haftanın Popülerleri
// =============================================================================
export interface FavoriteProduct {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  description: string;
  badge?: string;
  rating: number;
}

export interface WeeklyFavoritesConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  description: string;
  products: FavoriteProduct[];
}

export const weeklyFavoritesConfig: WeeklyFavoritesConfig = {
  scriptText: "Popüler Tercihler",
  subtitle: "HER BÜTÇEYE UYGUN",
  mainTitle: "Haftanın Popülerleri",
  description: "Müşterilerimizin en çok tercih ettiği, değeri yansıtan ürünler. Premium kaliteyi herkes karşılayabilir.",
  products: [
    {
      id: "fav1",
      name: "Efe Rakısı (700ml)",
      price: "₺89",
      originalPrice: "₺99",
      image: "/images/hero-banner.jpg",
      description: "Geleneksel Ankara rakısı - her sofrada konuşulan, sevilen bir klasik",
      badge: "Bestseller",
      rating: 4.8,
    },
    {
      id: "fav2",
      name: "Maç Gecesi Seti",
      price: "₺249",
      originalPrice: "₺289",
      image: "/images/wine-meze.jpg",
      description: "Rakı + Meze Tabağı + Cips - tüm gece için hazır paket",
      badge: "Paket",
      rating: 4.9,
    },
    {
      id: "fav3",
      name: "Temel Viski (750ml)",
      price: "₺159",
      originalPrice: "₺179",
      image: "/images/hero-banner.jpg",
      description: "İyi kaliteli, uygun fiyatlı viski - her gece için ideal",
      badge: "Trend",
      rating: 4.7,
    },
    {
      id: "fav4",
      name: "Meze Tabağı Deluxe",
      price: "₺199",
      originalPrice: "₺249",
      image: "/images/wine-meze.jpg",
      description: "6 çeşit özel meze karışımı - profesyonel hazırlama",
      badge: "Özel",
      rating: 4.9,
    },
  ],
};

// =============================================================================
// Combo Packages Config - Keyif Paketleri
// =============================================================================
export interface ComboPackage {
  id: string;
  name: string;
  tagline: string;
  price: string;
  originalPrice: string;
  items: string[];
  image: string;
  description: string;
  serves: string;
  discount: string;
}

export interface ComboPackagesConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  description: string;
  packages: ComboPackage[];
}

export const comboPackagesConfig: ComboPackagesConfig = {
  scriptText: "Hazır Dükkan Paketleri",
  subtitle: "KULLANIMA HAZIR",
  mainTitle: "Keyif Paketleri",
  description: "Bütün planlama elimizde. Sadece sipariş verin, sofraya oturun. Uygun fiyatlı, yüksek kaliteli paketler.",
  packages: [
    {
      id: "combo1",
      name: "Maç Gecesi Seti",
      tagline: "Futbol Tutkunları İçin",
      price: "₺349",
      originalPrice: "₺449",
      items: ["1 Rakı", "Meze Tabağı", "Cips Karışımı", "Peynir Çeşidi"],
      image: "/images/hero-banner.jpg",
      description: "Tüm gece evinize sadece sipariş verin - esnafın yiyecek ve içecek ihtiyacı tamamlandı",
      serves: "4 Kişi",
      discount: "%22 İndirim",
    },
    {
      id: "combo2",
      name: "Evde Rakı Sofrası",
      tagline: "Geleneksel Türk Sofrasının Ruhu",
      price: "₺399",
      originalPrice: "₺529",
      items: ["2 Rakı", "5 Meze", "Salatalar", "Kuruyemiş"],
      image: "/images/wine-meze.jpg",
      description: "Halay çekeceğiniz sofra - tüm sevdikleriniz oturduğunuz masada neşeli dakikalar",
      serves: "6 Kişi",
      discount: "%25 İndirim",
    },
    {
      id: "combo3",
      name: "Hediye Paketi Deluxe",
      tagline: "Özel Kişiler İçin Özel Hediye",
      price: "₺599",
      originalPrice: "₺799",
      items: ["Premium Viski", "Seçkin Puro", "Çikolata", "Hediye Kutusu"],
      image: "/images/hero-banner.jpg",
      description: "Sevdiklerinize uygun fiyatla lüks hediye gönderin - kişiye özel tasarım",
      serves: "2 Kişi",
      discount: "%25 İndirim",
    },
    {
      id: "combo4",
      name: "Ofis Toplantısı Paketi",
      tagline: "Profesyonel Sunumlar İçin",
      price: "₺459",
      originalPrice: "₺599",
      items: ["Votka", "Meze Tabağı", "Peynir Tabağı", "Cips"],
      image: "/images/wine-meze.jpg",
      description: "İş toplantılarınızda sunmaya uygun - profesyonel ve etkileyici",
      serves: "8 Kişi",
      discount: "%23 İndirim",
    },
  ],
};

// =============================================================================
// Trust Badges Config - Güven Rozetleri
// =============================================================================
export interface TrustBadge {
  id: string;
  icon: string;
  title: string;
  description: string;
  highlight: string;
}

export interface TrustBadgesConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  badges: TrustBadge[];
}

export const trustBadgesConfig: TrustBadgesConfig = {
  scriptText: "Kalite Güvencesi",
  subtitle: "NEDEN BİZE GÜVENMELİ",
  mainTitle: "Güven & Kalite Rozetleri",
  badges: [
    {
      id: "badge1",
      icon: "CheckCircle2",
      title: "Her Bütçeye Uygun Seçenekler",
      description: "Kaliteda ödün vermeden, her fiyat aralığında seçim yapın",
      highlight: "₺50 - ₺5000+ Arası Ürünler",
    },
    {
      id: "badge2",
      icon: "Shield",
      title: "%100 Orijinallik Garantisi",
      description: "Tüm ürünlerimiz resmi dağıtıcılardan temin edilir",
      highlight: "Sahte Ürüne Para İade",
    },
    {
      id: "badge3",
      icon: "Truck",
      title: "Mağaza Fiyatıyla Adrese Teslimat",
      description: "Dış ticaret farkına en uygun fiyatla kendi evinize gelir",
      highlight: "30 Dakikada Soğuk Teslimat",
    },
    {
      id: "badge4",
      icon: "Clock",
      title: "7/24 Müşteri Desteği",
      description: "Sorularınız varsa, hemen yanıtlamaya hazırız",
      highlight: "WhatsApp, Telefon & E-posta",
    },
    {
      id: "badge5",
      icon: "Zap",
      title: "Hızlı Teslim",
      description: "Sipariş verdikten saatler sonra kapınıza ulaşır",
      highlight: "Express Delivery Hizmeti",
    },
    {
      id: "badge6",
      icon: "Award",
      title: "Uzman Danışmanlık",
      description: "Ürün seçiminde profesyonel tavsiye alın",
      highlight: "Puro & Viski Sommelierları",
    },
  ],
};
