import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Star,
} from 'lucide-react';
import { productSeriesList, functionsList, lrcFeatures, comparisonRows } from '../data/products';
import { buildWhatsAppUrl } from '../config';

gsap.registerPlugin(ScrollTrigger);

export function ProductSeries() {
  const [activeTab, setActiveTab] = useState<string>('4k');
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const heroRef = useRef<HTMLElement>(null);

  const activeProduct = productSeriesList.find((p) => p.id === activeTab) || productSeriesList[0];

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
            className="flex items-center gap-2 text-gray-600 hover:text-[#355C7D] transition-colors"
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
          background: 'linear-gradient(135deg, #355C7D 0%, #F8B195 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="hero-animate text-white text-center">
            <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
              WiderLens 產品系列
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              專業鏡片產品線
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              三大漸進系列 + UV PLUS 濾藍光鏡片，滿足不同視覺需求
            </p>
          </div>

          {/* Product Tabs */}
          <div className="hero-animate mt-12 flex flex-wrap justify-center gap-3">
            {productSeriesList.map((product) => (
              <button
                key={product.id}
                onClick={() => setActiveTab(product.id)}
                className={`px-5 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === product.id
                    ? 'bg-white text-[#355C7D] shadow-lg'
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
              <div
                className={`absolute inset-0 bg-gradient-to-br ${activeProduct.color} rounded-3xl opacity-20 blur-3xl transform scale-110`}
              />
              <img
                src={activeProduct.image}
                alt={activeProduct.name}
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              <div
                className={`absolute top-4 left-4 ${activeProduct.badgeColor} text-white px-4 py-2 rounded-full text-sm font-semibold`}
              >
                {activeProduct.subtitle}
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-[#355C7D] font-semibold mb-2">{activeProduct.tagline}</p>
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
                    <CheckCircle2 className="w-5 h-5 text-[#355C7D] flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href={buildWhatsAppUrl(`你好，我想了解${activeProduct.name}批發合作詳情。`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C06C84] text-white font-semibold rounded-xl hover:bg-[#A05068] transition-all"
              >
                查詢此產品
              </a>
            </div>
          </div>

          {/* Sub-products */}
          {activeProduct.subProducts.length > 0 && (
            <div className="mt-20">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {activeProduct.name} 產品陣容
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {activeProduct.subProducts.map((sub) => (
                  <div
                    key={sub.id}
                    className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-[#355C7D]/10 rounded-xl flex items-center justify-center mb-4">
                      <sub.icon className="w-6 h-6 text-[#355C7D]" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{sub.name}</h4>
                    <p className="text-sm text-[#355C7D] font-medium mb-2">{sub.tagline}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{sub.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Series-specific visuals from raw/images */}
          {activeTab === '3d' && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">時尚色系選擇</h3>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <img
                  src="/raw-images/3d_colors.png"
                  alt="3D Series 色彩選擇"
                  className="w-full max-w-2xl mx-auto"
                />
                <p className="text-center text-gray-500 mt-4 text-sm">
                  Grey、Brown、Green、Pink、Purple、Blue 隨心搭配
                </p>
              </div>
            </div>
          )}

          {activeTab === 'wpal' && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">DX Refinement 精修演算法</h3>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <img
                  src="/raw-images/w-pal_dx_refinement.png"
                  alt="W-Pal DX Refinement"
                  className="w-full max-w-lg mx-auto"
                />
                <p className="text-center text-gray-500 mt-4 text-sm">
                  根據個人瞳距與配戴角度自動調整，精準匹配視覺路徑
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Specifications */}
      <section ref={(el) => addToRefs(el, 0)} className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="animate-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">產品規格</h2>
            <p className="text-lg text-gray-600">專業參數，滿足不同需求</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeProduct.specs.map((spec, index) => (
              <div key={index} className="animate-in bg-white rounded-2xl p-6 shadow-sm">
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">核心技術</h2>
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

      {/* Functions */}
      <section ref={(el) => addToRefs(el, 2)} className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="animate-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">功能介紹</h2>
            <p className="text-lg text-gray-600">四大鏡片功能，覆蓋全方位生活場景</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {functionsList.map((fn) => (
              <div
                key={fn.id}
                className="animate-in bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-[#355C7D]/10 rounded-xl flex items-center justify-center mb-4">
                  <fn.icon className="w-6 h-6 text-[#355C7D]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{fn.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{fn.description}</p>
                <p className="text-xs text-gray-400">適用場景：{fn.visual}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LRC Coating */}
      <section ref={(el) => addToRefs(el, 3)} className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="animate-in grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[#355C7D]/10 rounded-full text-sm font-medium text-[#355C7D] mb-6">
                LRC 高清低反鍍膜
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">五大效能，強效保護</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                LRC（Low Reflection Coating）高清低反鍍膜是 Wider 3D-Series 的核心技術之一，能顯著提升鏡片透光率與清晰度，同時提供全方位保護。
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {lrcFeatures.map((f, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-[#355C7D] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">{f.name}</p>
                      <p className="text-sm text-gray-600">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-in relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#355C7D] to-[#F8B195] rounded-3xl opacity-20 blur-3xl transform scale-110" />
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">UV PLUS 濾藍光鏡片</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  即使具備藍光過濾功能，鏡片表面也不帶明顯藍色反光，同時清透不泛黃，展現美觀自然的視覺效果。
                </p>
                <ul className="space-y-3">
                  {[
                    '表面無明顯藍色反光',
                    '清透不泛黃',
                    '美觀自然視覺效果',
                    '有效濾除有害藍光',
                    '適合長時間屏幕使用',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#F8B195] flex-shrink-0" />
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section ref={(el) => addToRefs(el, 4)} className="py-20 lg:py-28 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="animate-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">產品系列比較</h2>
            <p className="text-lg text-gray-400">選擇最適合您的漸進鏡片</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 pr-6 text-gray-400 font-medium text-sm">特點</th>
                  <th className="py-4 px-6 text-gray-400 font-medium text-sm">一般漸進鏡</th>
                  <th className="py-4 px-6 text-blue-400 font-medium text-sm">4K Series</th>
                  <th className="py-4 px-6 text-emerald-400 font-medium text-sm">3D-Series</th>
                  <th className="py-4 px-6 text-amber-400 font-medium text-sm">W-PAL</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 pr-6 text-white font-medium text-sm">{row.label}</td>
                    <td className="py-4 px-6 text-gray-400 text-sm">{row.generic}</td>
                    <td className="py-4 px-6 text-white/90 text-sm">{row.series4k}</td>
                    <td className="py-4 px-6 text-white/90 text-sm">{row.series3d}</td>
                    <td className="py-4 px-6 text-white/90 text-sm">{row.seriesWpal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section ref={(el) => addToRefs(el, 5)} className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="animate-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">適用推薦</h2>
            <p className="text-lg text-gray-600">根據您的生活方式選擇</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="animate-in bg-blue-50 rounded-2xl p-8">
              <Star className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">首次佩戴漸進鏡片</h3>
              <p className="text-gray-600 mb-4">擔心頭暈、難適應，希望縮短適應期</p>
              <p className="text-blue-600 font-semibold">推薦：4K 數碼高清漸進系列</p>
            </div>

            <div className="animate-in bg-emerald-50 rounded-2xl p-8">
              <Monitor className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">長時間屏幕工作</h3>
              <p className="text-gray-600 mb-4">經常使用電腦手機，需要夜間駕駛</p>
              <p className="text-emerald-600 font-semibold">推薦：3D 高清低反漸進系列</p>
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
      <section className="py-20 lg:py-28 bg-gradient-to-r from-[#355C7D] to-[#F8B195]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">找到適合您的鏡片了嗎？</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            立即聯繫我們，獲得專業建議和個性化報價
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#355C7D] font-semibold rounded-xl hover:bg-gray-100 transition-all"
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
