import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Sun, 
  Moon, 
  Shield, 
  Zap, 
  Thermometer, 
  Eye,
  ArrowLeft,
  CheckCircle2,
  Car,
  Bike,
  Umbrella,
  Clock
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function PhotochromicLenses() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      sectionRefs.current.forEach((section) => {
        if (section) {
          gsap.fromTo(
            section.querySelectorAll('.animate-in'),
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
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
        ref={(el) => addToRefs(el, 0)}
        className="pt-32 pb-20 lg:pt-40 lg:pb-28"
        style={{
          background: 'linear-gradient(135deg, #00A0E9 0%, #0055A4 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="animate-in text-white">
            <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
              智能鏡片系列
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              變色鏡片
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
              光致變色技術 · 室內透明室外變深 · 一副眼鏡全天候適用
            </p>
          </div>
        </div>
      </section>

      {/* Product Introduction */}
      <section ref={(el) => addToRefs(el, 1)} className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in order-2 lg:order-1">
              <img 
                src="/product-photochromic.jpg" 
                alt="變色鏡片展示" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="animate-in order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                產品介紹
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                WiderLens 變色鏡片採用先進的<span className="text-[#0055A4] font-semibold">快速反應染料技術</span>與
                <span className="text-[#0055A4] font-semibold">穩定光適應技術</span>，
                能夠根據光線強度自動調整鏡片深淺。
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                室內時鏡片保持透明，提供清晰視覺；戶外陽光下自動變深，有效阻擋強光和紫外線。
                一副眼鏡滿足多種場合需求，無需頻繁更換。
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full">
                  <Sun className="w-5 h-5" />
                  <span>15秒快速變深</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full">
                  <Moon className="w-5 h-5" />
                  <span>快速恢復透明</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section ref={(el) => addToRefs(el, 2)} className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="animate-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              主要特點與優勢
            </h2>
            <p className="text-lg text-gray-600">智能感光，全天候護眼</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: '快速變色',
                desc: '15秒內快速變深，褪色更快，減少等待時間',
              },
              {
                icon: Shield,
                title: '100% UV防護',
                desc: '全天候阻擋UVA/UVB紫外線，保護眼睛健康',
              },
              {
                icon: Eye,
                title: '藍光防護',
                desc: '室內外皆有效阻擋有害藍光',
              },
              {
                icon: Thermometer,
                title: '溫度穩定性',
                desc: '高溫低溫環境下表現一致，不影響變色效果',
              },
              {
                icon: Sun,
                title: '自然顏色還原',
                desc: '真實色彩感知，不影響視覺體驗',
              },
              {
                icon: Moon,
                title: '減眩光',
                desc: '有效減少強光眩光，提升視覺舒適度',
              },
            ].map((feature, index) => (
              <div 
                key={index} 
                className="animate-in bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-[#00A0E9]/10 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-[#00A0E9]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section ref={(el) => addToRefs(el, 3)} className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="animate-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              技術規格
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="animate-in bg-gradient-to-br from-[#00A0E9] to-[#0055A4] rounded-2xl p-6 text-white">
              <Clock className="w-8 h-8 mb-4" />
              <h3 className="text-lg font-semibold mb-4">變色速度</h3>
              <ul className="space-y-2 text-sm">
                <li>變深時間：~15秒</li>
                <li>褪色時間：~5分鐘</li>
                <li>完全褪色：~10分鐘</li>
              </ul>
            </div>

            <div className="animate-in bg-white border-2 border-gray-100 rounded-2xl p-6">
              <Sun className="w-8 h-8 mb-4 text-[#00A0E9]" />
              <h3 className="text-lg font-semibold text-gray-900 mb-4">透光率範圍</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>室內透光率：90%</li>
                <li>戶外最深：15%</li>
                <li>變色深度可調</li>
              </ul>
            </div>

            <div className="animate-in bg-white border-2 border-gray-100 rounded-2xl p-6">
              <Eye className="w-8 h-8 mb-4 text-[#00A0E9]" />
              <h3 className="text-lg font-semibold text-gray-900 mb-4">度數範圍</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>球鏡：+4.00D 至 -8.00D</li>
                <li>柱鏡：0 至 -2.00D</li>
                <li>多種折射率可選</li>
              </ul>
            </div>

            <div className="animate-in bg-white border-2 border-gray-100 rounded-2xl p-6">
              <Car className="w-8 h-8 mb-4 text-[#00A0E9]" />
              <h3 className="text-lg font-semibold text-gray-900 mb-4">車內變色</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>高階系列支援</li>
                <li>車內適度變暗</li>
                <li>駕駛更安全</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Color Comparison */}
      <section ref={(el) => addToRefs(el, 4)} className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="animate-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              變色效果展示
            </h2>
            <p className="text-lg text-gray-600">室內透明，室外自動變深</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-in bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="h-48 bg-gradient-to-b from-gray-100 to-white flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-white/90 border-4 border-gray-200 flex items-center justify-center">
                  <span className="text-4xl">🏠</span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">室內環境</h3>
                <p className="text-gray-600">鏡片保持透明</p>
                <p className="text-[#00A0E9] font-semibold mt-2">透光率 90%</p>
              </div>
            </div>

            <div className="animate-in bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="h-48 bg-gradient-to-b from-blue-200 to-blue-100 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gray-400/80 border-4 border-gray-300 flex items-center justify-center">
                  <span className="text-4xl">🚗</span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">車內環境</h3>
                <p className="text-gray-600">適度變暗（高階版）</p>
                <p className="text-[#00A0E9] font-semibold mt-2">透光率 50%</p>
              </div>
            </div>

            <div className="animate-in bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="h-48 bg-gradient-to-b from-yellow-300 to-orange-200 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gray-700/90 border-4 border-gray-600 flex items-center justify-center">
                  <span className="text-4xl">☀️</span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">戶外陽光</h3>
                <p className="text-gray-600">完全變深保護</p>
                <p className="text-[#00A0E9] font-semibold mt-2">透光率 15%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Colors & Materials */}
      <section ref={(el) => addToRefs(el, 5)} className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="animate-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              顏色與材質選擇
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="animate-in bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">變色顏色選項</h3>
              <div className="space-y-4">
                {[
                  { name: '灰色', desc: '最自然的顏色選擇，適合日常使用', color: 'bg-gray-500' },
                  { name: '茶色', desc: '增強對比度，適合駕駛和高爾夫', color: 'bg-amber-600' },
                  { name: '綠色', desc: '減少眩光，適合戶外活動', color: 'bg-green-600' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-xl">
                    <div className={`w-12 h-12 ${item.color} rounded-full flex-shrink-0`} />
                    <div>
                      <p className="font-semibold text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-in bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">材質選項</h3>
              <div className="space-y-4">
                {[
                  { name: '高折射率薄型', desc: '輕薄舒適，高度數首選' },
                  { name: '聚碳酸酯 (PC)', desc: '抗衝擊，適合運動' },
                  { name: '標準樹脂', desc: '經濟實惠，光學性能優異' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-xl">
                    <div className="w-12 h-12 bg-[#00A0E9]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-[#00A0E9]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coatings */}
      <section ref={(el) => addToRefs(el, 6)} className="py-20 lg:py-28 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="animate-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              鍍膜與附加功能
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '高硬度抗刮', desc: '延長鏡片使用壽命' },
              { title: '防污防水', desc: '易清潔，保持清晰' },
              { title: '鏡面鍍膜', desc: '時尚反射效果' },
              { title: '偏光功能', desc: '減眩光加強版' },
            ].map((item, index) => (
              <div key={index} className="animate-in text-center p-6 bg-white/10 rounded-2xl">
                <CheckCircle2 className="w-10 h-10 mx-auto mb-4 text-[#00A0E9]" />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Series */}
      <section ref={(el) => addToRefs(el, 7)} className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="animate-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              產品系列分級
            </h2>
            <p className="text-lg text-gray-600">選擇適合您的變色鏡片等級</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: '標準型',
                subtitle: 'Smart',
                price: '快速褪色',
                features: [
                  '快速褪色優先',
                  '基本UV防護',
                  '灰色/茶色可選',
                  '標準折射率',
                ],
                color: 'bg-gray-100 text-gray-900',
              },
              {
                name: '加強型',
                subtitle: 'Pro',
                price: '更深變色',
                features: [
                  '更深變色效果',
                  '車內變色支援',
                  '藍光防護',
                  '高折射率可選',
                ],
                color: 'bg-[#00A0E9] text-white',
                recommended: true,
              },
              {
                name: '高階',
                subtitle: 'Elite',
                price: '全面防護',
                features: [
                  '藍光+UV全面防護',
                  '鏡面時尚效果',
                  '偏光功能選項',
                  '最薄材質',
                ],
                color: 'bg-gradient-to-br from-[#0055A4] to-[#00A0E9] text-white',
              },
            ].map((series, index) => (
              <div 
                key={index} 
                className={`animate-in rounded-2xl p-8 ${series.color} relative ${series.recommended ? 'ring-4 ring-[#E30613]' : ''}`}
              >
                {series.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#E30613] rounded-full text-sm font-semibold text-white">
                    推薦選擇
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-1">{series.name}</h3>
                <p className="opacity-70 mb-4">{series.subtitle}</p>
                <p className="text-xl font-semibold mb-6">{series.price}</p>
                <ul className="space-y-3">
                  {series.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suitable For */}
      <section ref={(el) => addToRefs(el, 8)} className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="animate-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              適用對象與生活情境
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Bike, title: '戶外活動者', desc: '運動、旅遊、登山' },
              { icon: Car, title: '駕駛者', desc: '日常通勤、長途駕駛' },
              { icon: Sun, title: '對光敏感者', desc: '畏光、眼睛易疲勞' },
              { icon: Umbrella, title: '季節變化', desc: '春夏秋冬皆適用' },
            ].map((item, index) => (
              <div key={index} className="animate-in bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className="w-14 h-14 bg-[#00A0E9]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-[#00A0E9]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty */}
      <section ref={(el) => addToRefs(el, 9)} className="py-20 lg:py-28 bg-[#00A0E9]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="animate-in text-white">
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              品質保證
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              變色效果持久穩定，提供多年變色壽命保證。
              變色功能不衰退，品質有保證。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-6 py-3 bg-white/20 rounded-full">變色壽命保證</span>
              <span className="px-6 py-3 bg-white/20 rounded-full">耐用性測試認證</span>
              <span className="px-6 py-3 bg-white/20 rounded-full">98% 客戶滿意度</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            一副眼鏡，全天候適用
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            立即體驗智能變色鏡片的便利與保護
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/85284332216?text=${encodeURIComponent('你好，我想查詢變色鏡片產品優惠。')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E30613] text-white font-semibold rounded-xl hover:bg-[#c20510] transition-all"
            >
              WhatsApp 查詢
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#00A0E9] text-[#00A0E9] font-semibold rounded-xl hover:bg-[#00A0E9] hover:text-white transition-all"
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
