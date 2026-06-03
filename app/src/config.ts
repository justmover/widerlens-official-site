// WiderLens Site Configuration
// Professional eyewear and optometry service in Hong Kong

export interface SiteConfig {
  language: string;
  siteTitle: string;
  siteDescription: string;
}

export const siteConfig: SiteConfig = {
  language: "zh-HK",
  siteTitle: "WiderLens - 看得更廣，生活更自在",
  siteDescription: "香港優質鏡片批發商，提供高品質漸進鏡片、變色鏡片及專業技術支援。服務覆蓋港九新界。",
};

// Hero Section
export interface HeroConfig {
  backgroundText: string;
  heroImage: string;
  heroImageAlt: string;
  overlayText: string;
  brandName: string;
  navLinks: { label: string; href: string }[];
}

export const heroConfig: HeroConfig = {
  backgroundText: "WiderLens",
  heroImage: "/hero-model.jpg",
  heroImageAlt: "WiderLens 專業鏡片批發",
  overlayText: "看得更廣，生活更自在",
  brandName: "WiderLens",
  navLinks: [
    { label: "首頁", href: "#hero" },
    { label: "產品", href: "#products" },
    // { label: "優勢", href: "#advantages" },
    { label: "優惠查詢", href: "#promotion" },
    { label: "合作夥伴", href: "#stores" },
    { label: "關於我們", href: "/about" },
    { label: "加盟我們", href: "/join" },
    { label: "視光知識", href: "/blog" },
    { label: "聯絡", href: "#contact" },
  ],
};

// Featured Section - Product Highlights
export interface PortfolioImage {
  src: string;
  alt: string;
}

export interface FeaturedConfig {
  titleLine1: string;
  titleLine2: string;
  description: string;
  portfolioImages: PortfolioImage[];
  accentText: string;
}

export const featuredConfig: FeaturedConfig = {
  titleLine1: "Wider 漸進變色鏡",
  titleLine2: "清晰視界，專業品質",
  description: "德國 Optotech 4K 漸進設計，提供極致清晰、寬廣視野與全天舒適的專業鏡片解決方案。",
  portfolioImages: [
    { src: "/product-4k.jpg", alt: "4K 漸進鏡片" },
    { src: "/product-3d.jpg", alt: "光致變色鏡片" },
    { src: "/product-wpal.jpg", alt: "專業技術支援" },
    { src: "/advantages-model.jpg", alt: "完善批發服務" },
    { src: "/testimonial-1.jpg", alt: "合作夥伴滿意" },
  ],
  accentText: "專業品質 · 值得信賴",
};

// Products Section - Product Showcase
export interface Product {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  link?: string;
}

export interface ProductsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  viewAllText: string;
  viewAllHref: string;
  viewProjectText: string;
  projects: Product[];
}

export const productsConfig: ProductsConfig = {
  subtitle: "產品系列",
  titleRegular: "精選",
  titleItalic: "產品",
  viewAllText: "查看全部產品",
  viewAllHref: "/products/series",
  viewProjectText: "了解更多",
  projects: [
    {
      id: 1,
      title: "Wider 4K Series",
      category: "4K 數碼高清漸進鏡片",
      year: "2026",
      image: "/product-4k.jpg",
      description:
        "由德國 Optotech 專業研發，採用 Extended Design 延展設計，以數碼演算優化遠中近區域比例。極高清晰度、寬廣視野與長效舒適，讓遠中近切換更加流暢，全天佩戴自在無負擔。",
      link: "/products/4k",
    },
    {
      id: 2,
      title: "Wider 3D-Series",
      category: "3D 高清低反漸進鏡片",
      year: "2026",
      image: "/product-3d.jpg",
      description:
        "結合 3D 自由曲面演算與 LRC 高清低反鍍膜，提供廣闊視野與精準焦點轉換。多段走廊選擇（12 / 14 / 16mm）與多重功能系列，滿足不同生活場景的個性化需求。",
      link: "/products/3d",
    },
    {
      id: 3,
      title: "W-Pal 日本漸進",
      category: "W-PAL 雙面複合漸進鏡片",
      year: "2026",
      image: "/product-wpal.jpg",
      description:
        "日本頂級光學設計結合全球最高折射率 1.76 鏡片，雙面複合漸進設計與 DX Refinement 精修演算法，為亞洲人帶來極致清晰、廣闊且穩定的視覺體驗。",
      link: "/products/wpal",
    },
  ],
};

// Services Section - Product Features
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
  link?: string;
}

export interface ServicesConfig {
  subtitle: string;
  titleLine1: string;
  titleLine2Italic: string;
  description: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  subtitle: "產品亮點",
  titleLine1: "為什麼選擇",
  titleLine2Italic: "WiderLens？",
  description: "我們結合專業技術與優質服務，為您提供最佳的視覺解決方案。",
  services: [
    {
      iconName: "Layers",
      title: "4K 數碼高清漸進鏡片",
      description: "德國 Optotech 延展設計，數碼演算優化遠中近區域，極高清晰度與寬廣視野。",
      link: "/products/series",
    },
    {
      iconName: "Eye",
      title: "3D 高清低反漸進鏡片",
      description: "3D 自由曲面演算配合 LRC 高清低反鍍膜，廣闊視野、精準焦點轉換，夜間駕駛更舒適。",
      link: "/products/series",
    },
    {
      iconName: "ShieldCheck",
      title: "W-Pal 雙面複合漸進鏡片",
      description: "日本頂級光學設計，1.76 最高折射率，雙面複合設計帶來極致清晰與穩定視野。",
      link: "/products/series",
    },
    {
      iconName: "Sun",
      title: "UV PLUS 濾藍光鏡片",
      description: "極致美學體驗，表面不帶明顯藍色反光，同時清透不泛黃，展現美觀自然的視覺效果。",
      link: "/products/series",
    },
  ],
};

// Why Choose Me Section - Hong Kong Advantages
export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface FeatureCard {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}

export interface WhyChooseMeConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  statsLabel: string;
  stats: StatItem[];
  featureCards: FeatureCard[];
  wideImage: string;
  wideImageAlt: string;
  wideTitle: string;
  wideDescription: string;
}

export const whyChooseMeConfig: WhyChooseMeConfig = {
  subtitle: "香港配鏡優勢",
  titleRegular: "為什麼選擇",
  titleItalic: "香港本地配鏡？",
  statsLabel: "數據見證",
  stats: [
    { value: 60, suffix: "+", label: "合作門市" },
    { value: 98, suffix: "%", label: "客戶滿意度" },
    { value: 40, suffix: "年", label: "專業經驗" },
  ],
  featureCards: [
    {
      image: "/product-wpal.jpg",
      imageAlt: "專業技術支援",
      title: "專業技術支援",
      description: "產品培訓、技術諮詢及市場推廣資源",
    },
    {
      image: "/product-4k.jpg",
      imageAlt: "高品質鏡片",
      title: "高品質鏡片",
      description: "國際品牌標準，多款選擇（超薄、防藍、變色）",
    },
  ],
  wideImage: "/advantages-model.jpg",
  wideImageAlt: "完善批發服務",
  wideTitle: "完善批發服務",
  wideDescription: "穩定供貨、靈活訂單處理及專業培訓支援。我們致力於與合作夥伴共同成長，共創雙贏。",
};

// Testimonials Section
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface TestimonialsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  testimonials: Testimonial[];
}

export const testimonialsConfig: TestimonialsConfig = {
  subtitle: "客戶評價",
  titleRegular: "客戶",
  titleItalic: "真實評價",
  testimonials: [
    {
      id: 1,
      name: "陳先生",
      role: "漸進鏡片用戶",
      image: "/testimonial-1.jpg",
      quote: "用了 WiderLens 的漸進鏡片後，開會看電腦、開車看路都清晰無比，完全不需要換眼鏡，太方便了！視光師非常專業，檢查仔細，解釋清楚。",
    },
    {
      id: 2,
      name: "李女士",
      role: "變色鏡片用戶",
      image: "/testimonial-2.jpg",
      quote: "戶外活動時鏡片自動變暗，回到室內又快速變回透明，一副眼鏡搞定所有場合，非常推薦！變色速度比我之前用的快很多。",
    },
    {
      id: 3,
      name: "張先生",
      role: "專業驗光服務",
      image: "/testimonial-3.jpg",
      quote: "視光師非常專業，檢查仔細，解釋清楚，讓我對自己的眼睛狀況有了完整了解。門市環境舒適，服務態度很好。",
    },
    {
      id: 4,
      name: "王小姐",
      role: "4K 漸進鏡片用戶",
      image: "/testimonial-4.jpg",
      quote: "身為設計師，長時間對著電腦工作，眼睛容易疲勞。換了 WiderLens 的 4K 漸進鏡片後，視覺清晰度和舒適度提升了很多，工作效率也提高了！",
    },
    {
      id: 5,
      name: "劉先生",
      role: "UV PLUS 濾藍光鏡片用戶",
      image: "/testimonial-5.jpg",
      quote: "每天至少要對著手機和電腦十小時以上，之前眼睛經常乾澀不舒服。配了 UV PLUS 濾藍光鏡片後，眼睛明顯沒那麼疲勞了，而且鏡片不會泛黃，外觀很自然。",
    },
    {
      id: 6,
      name: "趙女士",
      role: "W-Pal 日本漸進鏡片用戶",
      image: "/testimonial-6.jpg",
      quote: "第一次嘗試漸進鏡片，本來擔心會不會不適應。W-Pal 系列的過渡非常自然，配戴幾天就習慣了，現在遠近都看得清楚，生活品質提升了不少！",
    },
  ],
};

// FAQ Section
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  ctaText: string;
  ctaButtonText: string;
  ctaHref: string;
  faqs: FAQItem[];
}

export const faqConfig: FAQConfig = {
  subtitle: "常見問題",
  titleRegular: "常見",
  titleItalic: "問題",
  ctaText: "還有其他問題？",
  ctaButtonText: "聯絡我們",
  ctaHref: "#contact",
  faqs: [
    {
      id: "1",
      question: "漸進鏡片需要多長時間適應？",
      answer: "一般來說，適應期約為 1-2 週。我們的 4K 漸進鏡片採用先進設計，能夠大幅縮短適應時間。大多數配戴者在 3-5 天內就能完全適應。建議剛開始時多轉動頭部，少用眼睛掃視。",
    },
    {
      id: "2",
      question: "變色鏡片在車內會變暗嗎？",
      answer: "一般變色鏡片在車內變暗效果有限，因為車窗阻擋了部分 UV 光線。",
    },
    {
      id: "3",
      question: "驗光需要多長時間？",
      answer: "不同門市的驗光服務時間可能有所不同，建議您直接聯繫所選門市查詢具體的驗光時間安排。",
    },
    {
      id: "4",
      question: "如何領取優惠？",
      answer: "只需點擊「立即領取優惠」按鈕，透過 WhatsApp 聯繫我們並出示優惠碼即可。我們的客服會協助您完成兌換，並為您安排最近的合作門市。",
    },
  ],
};

// Footer Section
export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  logoText: string;
  contactLabel: string;
  email: string;
  locationText: string;
  navigationLabel: string;
  navLinks: FooterLink[];
  socialLabel: string;
  socialLinks: SocialLink[];
  tagline: string;
  copyright: string;
  bottomLinks: FooterLink[];
}

export const footerConfig: FooterConfig = {
  logoText: "WiderLens",
  contactLabel: "聯絡我們",
  email: "info@wider-lens.com",
  locationText: "香港總部\n業務覆蓋港島、九龍、新界",
  navigationLabel: "導航",
  navLinks: [
    { label: "首頁", href: "#hero" },
    { label: "產品", href: "#products" },
    { label: "優惠查詢", href: "#promotion" },
    { label: "合作夥伴", href: "#stores" },
    { label: "視光知識", href: "/blog" },
    { label: "聯絡", href: "#contact" },
  ],
  socialLabel: "關注我們",
  socialLinks: [
    { iconName: "Facebook", href: "https://www.facebook.com/widerlens.hk", label: "Facebook" },
    { iconName: "Youtube", href: "https://www.youtube.com/@WiderLensHK", label: "YouTube" },
    { iconName: "Mail", href: "mailto:info@wider-lens.com", label: "Email" },
  ],
  tagline: "看得更廣，生活更自在\n香港專業鏡片供應商",
  copyright: "© 2026 WiderLens. 保留所有權利。",
  bottomLinks: [
    { label: "私隱政策", href: "#" },
    { label: "使用條款", href: "#" },
    { label: "保養條款", href: "#" },
  ],
};

// Promotion Section Config
export interface PromotionConfig {
  title: string;
  subtitle: string;
  offers: string[];
}

export const promotionConfig: PromotionConfig = {
  title: "限時買一送一優惠",
  subtitle: "2026 特別優惠",
  offers: [
    "選購 Wider 漸進鏡片一對，送1.6防藍光纖維片一對",
  ],
};

// Stores Section Config
export interface Store {
  id: number;
  name: string;
  storeCode: string;
  address: string;
  phone: string;
  hours: string;
  district: string;
}

export interface StoresConfig {
  title: string;
  subtitle: string;
  searchPlaceholder: string;
  statsText: string;
  stores: Store[];
  /** Publish the sheet to web as CSV and paste the URL here */
  sheetUrl?: string;
}

export const storesConfig: StoresConfig = {
  title: "合作夥伴網絡",
  subtitle: "遍佈香港各區，攜手共創雙贏",
  searchPlaceholder: "輸入地區或店名...",
  statsText: "60+ 合作夥伴，遍佈港島、九龍、新界",
  sheetUrl: "https://docs.google.com/spreadsheets/d/1IkbFAy9-6BY52AiyQbUO5bvKayj8NCV_bhJc4Fs3_t4/export?format=csv&gid=0",
  stores: [
    {
      id: 1,
      name: "眼鏡 88 (銅鑼灣店)",
      address: "銅鑼灣怡和街 1 號",
      phone: "1234 5678",
      hours: "10:00 - 21:00",
      district: "港島",
    },
    {
      id: 2,
      name: "視光中心 (旺角店)",
      address: "旺角彌敦道 100 號",
      phone: "2345 6789",
      hours: "09:30 - 21:30",
      district: "九龍",
    },
    {
      id: 3,
      name: "眼鏡城 (沙田店)",
      address: "沙田正街 10 號",
      phone: "3456 7890",
      hours: "10:00 - 22:00",
      district: "新界",
    },
  ],
};

// Contact Section Config
export interface ContactConfig {
  title: string;
  subtitle: string;
  whatsapp: string;
  email: string;
  hours: string;
  formTitle: string;
  submitText: string;
}

export const contactConfig: ContactConfig = {
  title: "聯絡我們",
  subtitle: "有任何問題？我們隨時為您解答",
  whatsapp: "+852 8433 2216",
  email: "info@wider-lens.com",
  hours: "星期一至日 10:00 - 21:00",
  formTitle: "發送訊息",
  submitText: "發送訊息",
};

// WhatsApp Link Helper
export const whatsappPhone = "85284332216";
export const whatsappDefaultText = "你好，我想了解WiderLens産品詳情。";

export function buildWhatsAppUrl(text?: string): string {
  const message = encodeURIComponent(text || whatsappDefaultText);
  return `https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${message}`;
}
