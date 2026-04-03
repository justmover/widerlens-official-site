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
  siteDescription: "香港專業驗光配鏡服務，提供高品質漸進鏡片、變色鏡片及完善售後服務。60+合作門市遍佈港九新界。",
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
  heroImageAlt: "WiderLens 專業配鏡服務",
  overlayText: "看得更廣，生活更自在",
  brandName: "WiderLens",
  navLinks: [
    { label: "首頁", href: "#hero" },
    { label: "產品", href: "#products" },
    { label: "優勢", href: "#advantages" },
    { label: "門市", href: "#stores" },
    { label: "優惠", href: "#promotion" },
    { label: "聯絡", href: "#contact" },
  ],
};

// Intro Grid Section - Product Highlights
export interface PortfolioImage {
  src: string;
  alt: string;
}

export interface IntroGridConfig {
  titleLine1: string;
  titleLine2: string;
  description: string;
  portfolioImages: PortfolioImage[];
  accentText: string;
}

export const introGridConfig: IntroGridConfig = {
  titleLine1: "專業鏡片",
  titleLine2: "解決方案",
  description: "為您的視覺需求，提供全方位保護。從漸進多焦點鏡片到光致變色鏡片，我們致力於讓每一位客戶都能享受清晰舒適的視覺體驗。",
  portfolioImages: [
    { src: "/product-progressive.jpg", alt: "4K 漸進鏡片" },
    { src: "/product-photochromic.jpg", alt: "光致變色鏡片" },
    { src: "/product-service.jpg", alt: "專業驗光服務" },
    { src: "/advantages-model.jpg", alt: "完善售後服務" },
    { src: "/testimonial-1.jpg", alt: "客戶滿意" },
  ],
  accentText: "專業品質 · 值得信賴",
};

// Featured Projects Section - Product Showcase
export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  link?: string;
}

export interface FeaturedProjectsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  viewAllText: string;
  viewAllHref: string;
  viewProjectText: string;
  projects: Project[];
}

export const featuredProjectsConfig: FeaturedProjectsConfig = {
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
      category: "4K 數碼漸進-高清系列",
      year: "2026",
      image: "/product-progressive.jpg",
      description: "採用德國 OptoTech 漸進設計技術，提升清晰度並減少周邊像差，視野更闊、更自然。針對遠、中、近三段視野作精細優化，配合亞洲人配戴數據，縮短適應期。",
      link: "/products/series",
    },
    {
      id: 2,
      title: "Wider 3D-Series",
      category: "3D 數碼漸進-柔和平衡系列",
      year: "2026",
      image: "/product-photochromic.jpg",
      description: "採用先進 3D 光學計算，打造全客製化漸進鏡片。可按個人度數分佈、工作距離及佩戴習慣作優化，配合 LRC 低反光鍍膜，夜間駕駛及看屏幕更舒適。",
      link: "/products/series",
    },
    {
      id: 3,
      title: "W-Pal 日本漸進",
      category: "雙面複合設計",
      year: "2026",
      image: "/product-service.jpg",
      description: "承襲日本鏡片設計著重細膩舒適的特色，提供自然柔和的度數過渡。針對日常閱讀、辦公及外出使用，減少不適及視覺疲勞感，適合重視日常穩定實用性的配戴者。",
      link: "/products/series",
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
      title: "4K 數碼漸進-高清系列",
      description: "高清晰度、廣闊視野、低變形／低搖晃。採用德國 OptoTech 技術，視野更闊更自然。",
      link: "/products/series",
    },
    {
      iconName: "Eye",
      title: "3D 數碼漸進-柔和平衡系列",
      description: "先進 3D 光學計算，全客製化設計。配合 LRC 低反光鍍膜，夜間駕駛及看屏幕更舒適。",
      link: "/products/series",
    },
    {
      iconName: "ShieldCheck",
      title: "W-Pal 日本漸進系列",
      description: "承襲日本設計細膩舒適特色，自然柔和度數過渡。抗疲勞，日常使用的漸進鏡片。",
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
    { value: 15, suffix: "年", label: "專業經驗" },
  ],
  featureCards: [
    {
      image: "/product-service.jpg",
      imageAlt: "專業驗光",
      title: "專業驗光",
      description: "全面眼科檢查，精準度數 + 眼睛健康評估",
    },
    {
      image: "/product-progressive.jpg",
      imageAlt: "高品質鏡片",
      title: "高品質鏡片",
      description: "國際品牌標準，多款選擇（超薄、防藍、變色）",
    },
  ],
  wideImage: "/advantages-model.jpg",
  wideImageAlt: "完善售後服務",
  wideTitle: "完善售後",
  wideDescription: "免費調整、快速維修，省時省力。我們的服務不止於銷售，更關注您的長期視覺健康。",
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
      answer: "一般來說，適應期約為 1-2 週。我們的 4K 漸進鏡片採用先進設計，能夠大幅縮短適應時間。大多數用戶在 3-5 天內就能完全適應。建議剛開始時多轉動頭部，少用眼睛掃視。",
    },
    {
      id: "2",
      question: "變色鏡片在車內會變暗嗎？",
      answer: "一般變色鏡片在車內變暗效果有限，因為車窗阻擋了部分 UV 光線。我們提供專為駕駛設計的變色鏡片，能夠在車內提供更好的變色效果，歡迎查詢詳情。",
    },
    {
      id: "3",
      question: "驗光需要多長時間？",
      answer: "標準驗光服務約需 20-30 分鐘。如果需要更全面的眼睛健康檢查，可能需要 45-60 分鐘。建議預約時告知您的需求，我們會為您安排合適的服務。",
    },
    {
      id: "4",
      question: "鏡片有保養嗎？",
      answer: "是的，我們所有鏡片都提供一年保養，涵蓋鏡片鍍膜脫落、變色等品質問題。人為損壞不在保養範圍內。如有任何問題，歡迎隨時聯繫我們。",
    },
    {
      id: "5",
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
  locationText: "香港各區合作門市\n遍佈港島、九龍、新界",
  navigationLabel: "導航",
  navLinks: [
    { label: "首頁", href: "#hero" },
    { label: "產品", href: "#products" },
    { label: "優勢", href: "#advantages" },
    { label: "門市", href: "#stores" },
    { label: "優惠", href: "#promotion" },
    { label: "聯絡", href: "#contact" },
  ],
  socialLabel: "關注我們",
  socialLinks: [
    { iconName: "Facebook", href: "#", label: "Facebook" },
    { iconName: "Instagram", href: "#", label: "Instagram" },
    { iconName: "Mail", href: "mailto:info@wider-lens.com", label: "Email" },
  ],
  tagline: "看得更廣，生活更自在\n香港專業驗光配鏡服務",
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
  countdownLabel: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
}

export const promotionConfig: PromotionConfig = {
  title: "限時優惠活動",
  subtitle: "2026 春季特別優惠",
  offers: [
    "選購wider漸進鏡片一對，送1.6防藍光纖維片一對",
  ],
  countdownLabel: "優惠倒數",
  ctaText: "立即領取優惠",
  ctaHref: "https://wa.me/85284332216",
  secondaryCtaText: "WhatsApp 查詢",
  secondaryCtaHref: "https://wa.me/85284332216",
};

// Stores Section Config
export interface Store {
  id: number;
  name: string;
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
}

export const storesConfig: StoresConfig = {
  title: "合作眼鏡店網絡",
  subtitle: "遍佈香港各區，找到最近的門市",
  searchPlaceholder: "輸入地區或店名...",
  statsText: "60+ 合作門市，遍佈港島、九龍、新界",
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
