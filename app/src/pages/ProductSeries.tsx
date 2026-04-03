import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Layers, 
  Sparkles, 
  ArrowLeft,
  CheckCircle2,
  Star,
  Monitor,
  Sun,
  Moon
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ProductSeries {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  technologies: { name: string; desc: string }[];
  image: string;
  color: string;
  badgeColor: string;
}

const productSeries: ProductSeries[] = [
  {
    id: '4k',
    name: 'Wider 4K Series',
    subtitle: '4K 數碼漸進-高清系列',
    tagline: '高階高清漸進鏡片',
    description: '採用德國 OptoTech 漸進設計技術，提升清晰度並減少周邊像差，視野更闊、更自然。針對遠、中、近三段視野作精細優化，令配戴者在室內、戶外及數碼產品使用時，都能享受穩定、低搖晃的視覺體驗。配合亞洲人配戴數據，改善傳統漸進鏡片容易「頭暈、難適應」的問題，縮短適應期，適合首次轉用漸進鏡片的佩戴者。',
    features: [
      '高清晰度 - 德國 OptoTech 技術',
      '廣闊視野 - 遠中近三段優化',
      '低變形／低搖晃 - 減少周邊像差',
      '縮短適應期 - 配合亞洲人數據',
      '首次佩戴友好 - 減少頭暈不適'
    ],
    specs: [
      { label: '折射率選項', value: '1.50 / 1.60 / 1.67 / 1.74' },
      { label: '加光度範圍', value: '+0.75D 至 +3.50D' },
      { label: '通道設計', value: '短/中/長通道可選' },
      { label: '適用對象', value: '首次轉用漸進鏡片者' }
    ],
    technologies: [
      { name: 'OptoTech 技術', desc: '德國漸進設計技術' },
      { name: '4K 高清光學', desc: '提升清晰度減少像差' },
      { name: '亞洲人數據', desc: '配合亞洲人配戴習慣' },
      { name: '三段視野優化', desc: '遠中近精細調校' }
    ],
    image: '/product-progressive.jpg',
    color: 'from-blue-600 to-cyan-500',
    badgeColor: 'bg-blue-500'
  },
  {
    id: '3d',
    name: 'Wider 3D-Series',
    subtitle: '3D 數碼漸進-柔和平衡系列',
    tagline: '全客製化漸進鏡片',
    description: '採用先進 3D 光學計算，打造全客製化漸進鏡片，為佩戴者提供更佳平衡感及舒適度。鏡片設計可按個人度數分佈、工作距離及佩戴習慣作優化，令由遠到近的視線轉換更自然，減低晃動及失真感。特別適合長時間使用電腦及手機、需要流暢多焦距切換的現代用家。3D 漸進配合「LRC 低反光鍍膜」減少反光，夜間駕駛及夜晚看屏幕更舒適。',
    features: [
      '3D 光學計算 - 全客製化設計',
      '個人度數優化 - 按習慣調校',
      'LRC 低反光鍍膜 - 減少反光',
      '夜間駕駛適用 - 看屏幕更舒適',
      '流暢焦距切換 - 遠近轉換自然'
    ],
    specs: [
      { label: '設計類型', value: '全客製化 3D 計算' },
      { label: '鍍膜選項', value: 'LRC 低反光鍍膜' },
      { label: '適用場景', value: '長時間電腦/手機使用' },
      { label: '特殊優化', value: '夜間駕駛及屏幕使用' }
    ],
    technologies: [
      { name: '3D 光學計算', desc: '先進立體光學設計' },
      { name: 'LRC 鍍膜', desc: '低反光鍍膜技術' },
      { name: '個人化優化', desc: '按度數及習慣調校' },
      { name: '平衡感設計', desc: '更佳舒適度體驗' }
    ],
    image: '/product-photochromic.jpg',
    color: 'from-emerald-500 to-teal-400',
    badgeColor: 'bg-emerald-500'
  },
  {
    id: 'wpal',
    name: 'W-Pal 日本漸進',
    subtitle: '雙面複合設計',
    tagline: '日本製造細膩舒適',
    description: '設計針對日常閱讀、辦公及外出使用，讓佩戴者在轉眼、轉頭時，減少不適及視覺疲勞感。W-Pal 日本漸進系列，承襲日本鏡片設計一向著重細膩舒適的特色，提供自然柔和的度數過渡。適合喜歡「順滑、易適應」感覺，又重視日常穩定實用性的配戴者。',
    features: [
      '日本設計 - 細膩舒適特色',
      '自然柔和 - 度數過渡順滑',
      '抗疲勞 - 減少視覺疲勞感',
      '日常實用 - 閱讀辦公外出適用',
      '易適應 - 轉眼轉頭更舒適'
    ],
    specs: [
      { label: '設計特色', value: '雙面複合設計' },
      { label: '產地', value: '日本技術' },
      { label: '適用場景', value: '日常閱讀、辦公、外出' },
      { label: '佩戴感受', value: '順滑、易適應' }
    ],
    technologies: [
      { name: '雙面複合', desc: '雙面複合設計技術' },
      { name: '日本工藝', desc: '細膩舒適工藝' },
      { name: '抗疲勞設計', desc: '減少視覺疲勞' },
      { name: '自然過渡', desc: '柔和度數轉換' }
    ],
    image: '/product-service.jpg',
    color: 'from-amber-500 to-orange-400',
    badgeColor: 'bg-amber-500'
  }
];

const uvPlusProduct = {
  name: 'UV PLUS 濾藍光鏡片',
  subtitle: '極致美學體驗',
  description: '即使具備藍光過濾功能，鏡片表面也不帶明顯藍色反光，同時清透不泛黃，展現美觀自然的視覺效果。',
  features: [
    '表面無明顯藍色反光',
    '清透不泛黃',
    '美觀自然視覺效果',
    '有效濾除有害藍光',
    '適合長時間屏幕使用'
  ]
};

export function ProductSeries() {
  const [activeTab, setActiveTab] = useState<string>('4k');
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const heroRef = useRef<HTMLElement>(null);

  const activeProduct = productSeries.find(p => p.id === activeTab) || productSeries[0];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      const heroElements = heroRef.current?.querySelectorAll('.hero-animate');
      if (heroElements && heroElements.length > 0) {
        gsap.fromTo(
          heroElements,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
          }
        );
      }

      // Section animations
      sectionRefs.current.forEach((section) => {
        if (section) {
          const animateElements = section.querySelectorAll('.animate-in');
          if (animateElements.length > 0) {
            gsap.fromTo(
              animateElements,
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: section,
                  start: 'top 80%',
                  toggleActions: 'play none none reverse',
                },
              }
            );
          }
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLElement | null, index: number) => {
    if (el) sectionRefs.current[index] = el;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img src="/logo.png" alt="WiderLens" className="h-10 w-auto object-contain" />
          </a>
          <a 
            href="/" 
            className="flex items-center gap-2 text-gray-600 hover:text-[#0055A4] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>返回首頁</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="pt-32 pb-20 lg:pt-40 lg:pb-28"
        style={{
          background: 'linear-gradient(135deg, #0055A4 0%, #00A0E9 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="hero-animate text-white text-center">
            <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
              WiderLens 產品系列
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              專業漸進鏡片產品線
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              三大漸進系列 + UV PLUS 濾藍光鏡片，滿足不同視覺需求
            </p>
          </div>

          {/* Product Tabs */}
          <div className="hero-animate mt-12 flex flex-wrap justify-center gap-3">
            {productSeries.map((product) => (
              <button
                key={product.id}
                onClick={() => setActiveTab(product.id)}
                className={`px-5 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === product.id
                    ? 'bg-white text-[#0055A4] shadow-lg'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {product.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Product Detail */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${activeProduct.color} rounded-3xl opacity-20 blur-3xl transform scale-110`} />
              <img 
                src={activeProduct.image} 
                alt={activeProduct.name}
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              <div className={`absolute top-4 left-4 ${activeProduct.badgeColor} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                {activeProduct.subtitle}
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-[#0055A4] font-semibold mb-2">{activeProduct.tagline}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {activeProduct.name}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {activeProduct.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {activeProduct.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0055A4] flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/85284332216"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#E30613] text-white font-semibold rounded-xl hover:bg-[#c20510] transition-all"
              >
                查詢此產品
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section ref={(el) => addToRefs(el, 0)} className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="animate-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              產品規格
            </h2>
            <p className="text-lg text-gray-600">專業參數，滿足不同需求</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeProduct.specs.map((spec, index) => (
              <div 
                key={index} 
                className="animate-in bg-white rounded-2xl p-6 shadow-sm"
              >
                <p className="text-sm text-gray-500 mb-2">{spec.label}</p>
                <p className="text-lg font-semibold text-gray-900">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section ref={(el) => addToRefs(el, 1)} className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="animate-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              核心技術
            </h2>
            <p className="text-lg text-gray-600">先進技術，卓越品質</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeProduct.technologies.map((tech, index) => (
              <div 
                key={index} 
                className="animate-in bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white"
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UV PLUS Section */}
      <section ref={(el) => addToRefs(el, 2)} className="py-20 lg:py-28 bg-gradient-to-br from-violet-600 to-purple-500 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in">
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                濾光技術
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {uvPlusProduct.name}
              </h2>
              <p className="text-xl text-white/90 mb-2">{uvPlusProduct.subtitle}</p>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                {uvPlusProduct.description}
              </p>
              <div className="space-y-3">
                {uvPlusProduct.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-in flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 bg-white/20 rounded-full flex items-center justify-center">
                    <Monitor className="w-24 h-24 text-white" />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Sun className="w-8 h-8 text-yellow-900" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center">
                  <Moon className="w-8 h-8 text-blue-900" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Products Comparison */}
      <section ref={(el) => addToRefs(el, 3)} className="py-20 lg:py-28 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="animate-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              產品系列比較
            </h2>
            <p className="text-lg text-gray-400">選擇最適合您的漸進鏡片</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {productSeries.map((product) => (
              <div 
                key={product.id}
                className={`animate-in rounded-2xl p-6 ${
                  product.id === activeProduct.id 
                    ? 'bg-white text-gray-900' 
                    : 'bg-white/10 text-white'
                }`}
              >
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                  product.id === activeProduct.id
                    ? 'bg-[#0055A4] text-white'
                    : 'bg-white/20'
                }`}>
                  {product.subtitle}
                </div>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className={`text-sm mb-4 ${product.id === activeProduct.id ? 'text-gray-600' : 'text-gray-400'}`}>
                  {product.tagline}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.features.slice(0, 3).map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      {feature.split(' - ')[0]}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setActiveTab(product.id)}
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    product.id === activeProduct.id
                      ? 'bg-[#0055A4] text-white'
                      : 'bg-white/20 hover:bg-white/30'
                  }`}
                >
                  {product.id === activeProduct.id ? '當前選擇' : '查看詳情'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section ref={(el) => addToRefs(el, 4)} className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="animate-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              適用推薦
            </h2>
            <p className="text-lg text-gray-600">根據您的生活方式選擇</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="animate-in bg-blue-50 rounded-2xl p-8">
              <Star className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">首次佩戴漸進鏡片</h3>
              <p className="text-gray-600 mb-4">擔心頭暈、難適應，希望縮短適應期</p>
              <p className="text-blue-600 font-semibold">推薦：4K 數碼漸進-高清系列</p>
            </div>

            <div className="animate-in bg-emerald-50 rounded-2xl p-8">
              <Monitor className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">長時間屏幕工作</h3>
              <p className="text-gray-600 mb-4">經常使用電腦手機，需要夜間駕駛</p>
              <p className="text-emerald-600 font-semibold">推薦：3D 數碼漸進-柔和平衡系列</p>
            </div>

            <div className="animate-in bg-amber-50 rounded-2xl p-8">
              <Layers className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">追求細膩舒適</h3>
              <p className="text-gray-600 mb-4">喜歡順滑易適應，重視日常穩定性</p>
              <p className="text-amber-600 font-semibold">推薦：W-Pal 日本漸進系列</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-[#0055A4] to-[#00A0E9]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            找到適合您的鏡片了嗎？
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            立即聯繫我們，獲得專業建議和個性化報價
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/85284332216"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0055A4] font-semibold rounded-xl hover:bg-gray-100 transition-all"
            >
              WhatsApp 查詢
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-all"
            >
              返回首頁
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center text-gray-500">
          <p>© 2026 WiderLens. 保留所有權利。</p>
        </div>
      </footer>
    </div>
  );
}
