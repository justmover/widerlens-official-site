import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Eye, 
  Maximize2, 
  Smartphone, 
  Feather, 
  Layers, 
  CheckCircle2,
  ArrowLeft,
  Shield,
  Sun,
  Droplets,
  Zap
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function ProgressiveLenses() {
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
          background: 'linear-gradient(135deg, #0055A4 0%, #00A0E9 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="animate-in text-white">
            <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
              專業鏡片系列
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              漸進眼鏡
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
              漸進多焦點鏡片 · 無縫遠中近視野 · 一副搞定所有距離
            </p>
          </div>
        </div>
      </section>

      {/* Product Introduction */}
      <section ref={(el) => addToRefs(el, 1)} className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                產品介紹
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                WiderLens 漸進鏡片採用先進的<span className="text-[#0055A4] font-semibold">雙眼平衡技術</span>與
                <span className="text-[#0055A4] font-semibold">個性化自由曲面設計</span>，
                讓鏡片表面沒有明顯的分界線，提供遠、中、近距離無縫過渡的視覺體驗。
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                無論您是40歲以上初老花人士，或需要多焦點視覺矯正的使用者，
                我們的漸進鏡片都能讓您在不同距離間自如切換，無需頻繁更換眼鏡。
              </p>
            </div>
            <div className="animate-in">
              <img 
                src="/product-progressive.jpg" 
                alt="漸進鏡片展示" 
                className="rounded-2xl shadow-2xl w-full"
              />
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
            <p className="text-lg text-gray-600">為您的視覺需求提供全方位解決方案</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Maximize2,
                title: '寬廣視野區',
                desc: '遠距、中距、近距三區無縫銜接，視野更開闊自然',
              },
              {
                icon: Zap,
                title: '快速適應',
                desc: '先進設計大幅縮短適應期，3-5天即可完全適應',
              },
              {
                icon: Smartphone,
                title: '數位生活支援',
                desc: '專為現代數位生活設計，減輕長時間使用電子設備的眼疲勞',
              },
              {
                icon: Feather,
                title: '薄型輕量化',
                desc: '高折射率材質選擇，鏡片更輕薄，佩戴更舒適',
              },
              {
                icon: Layers,
                title: '生活風格匹配',
                desc: '室內型、戶外型、都市型，配合您的生活習慣',
              },
              {
                icon: Eye,
                title: '減少畸變',
                desc: '優化周邊視野設計，減少晃動感和影像畸變',
              },
            ].map((feature, index) => (
              <div 
                key={index} 
                className="animate-in bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-[#0055A4]/10 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-[#0055A4]" />
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
            <p className="text-lg text-gray-600">專業參數，滿足不同需求</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="animate-in bg-gradient-to-br from-[#0055A4] to-[#00A0E9] rounded-2xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-4">可用折射率</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  1.50 標準型
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  1.60 薄型
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  1.67 超薄型
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  1.74 極薄型
                </li>
              </ul>
            </div>

            <div className="animate-in bg-white border-2 border-gray-100 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">度數範圍</h3>
              <ul className="space-y-2 text-gray-600">
                <li>球鏡：+6.00D 至 -10.00D</li>
                <li>柱鏡：0 至 -4.00D</li>
                <li>加光度：+0.75D 至 +3.50D</li>
              </ul>
            </div>

            <div className="animate-in bg-white border-2 border-gray-100 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">通道長度</h3>
              <ul className="space-y-2 text-gray-600">
                <li>短通道：14mm</li>
                <li>中通道：17mm</li>
                <li>長通道：20mm</li>
                <li className="text-sm text-gray-400">適合不同鏡框高度</li>
              </ul>
            </div>

            <div className="animate-in bg-white border-2 border-gray-100 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">個性化參數</h3>
              <ul className="space-y-2 text-gray-600">
                <li>單眼瞳距 (PD)</li>
                <li>鏡框傾角 (Pantoscopic)</li>
                <li>面彎 (Wrap)</li>
                <li>鏡眼距 (Vertex)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Materials & Colors */}
      <section ref={(el) => addToRefs(el, 4)} className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="animate-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              材質與顏色選擇
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="animate-in bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">材質選項</h3>
              <div className="space-y-4">
                {[
                  { name: '樹脂材質 (CR-39)', desc: '光學性能優異，經濟實惠' },
                  { name: '聚碳酸酯 (PC)', desc: '抗衝擊性強，適合運動' },
                  { name: '高折射率樹脂', desc: '更輕更薄，高度數首選' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                    <Droplets className="w-6 h-6 text-[#0055A4] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-in bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">顏色與功能</h3>
              <div className="space-y-4">
                {[
                  { name: '透明色', desc: '標準選擇，適合日常使用' },
                  { name: '灰色/茶色', desc: '可結合變色功能' },
                  { name: '防藍光鍍膜', desc: '減少數位眼疲勞' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                    <Sun className="w-6 h-6 text-[#0055A4] flex-shrink-0 mt-1" />
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
      <section ref={(el) => addToRefs(el, 5)} className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="animate-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              鍍膜與附加功能
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: '多層減反射鍍膜', desc: '抗反射、抗刮、防污、防靜電' },
              { icon: Sun, title: 'UV全防護', desc: '100% 阻擋 UVA/UVB 紫外線' },
              { icon: Smartphone, title: '防藍光選項', desc: '減少有害藍光，保護眼睛' },
              { icon: Zap, title: '變色功能', desc: '可結合光致變色技術' },
            ].map((item, index) => (
              <div key={index} className="animate-in text-center p-6">
                <div className="w-16 h-16 bg-[#0055A4]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-[#0055A4]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Series */}
      <section ref={(el) => addToRefs(el, 6)} className="py-20 lg:py-28 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="animate-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              產品系列分級
            </h2>
            <p className="text-lg text-gray-400">選擇適合您的漸進鏡片等級</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: '入門級',
                subtitle: 'Comfort',
                price: '經濟實惠',
                features: [
                  '基本舒適設計',
                  '標準視野區域',
                  '適合初試漸進鏡片',
                  '1.50/1.60 折射率',
                ],
                color: 'bg-gray-700',
              },
              {
                name: '中階',
                subtitle: 'Precision',
                price: '性價比之選',
                features: [
                  '寬廣視野設計',
                  '快速適應技術',
                  '數位生活優化',
                  '1.60/1.67 折射率',
                ],
                color: 'bg-[#0055A4]',
                recommended: true,
              },
              {
                name: '高階',
                subtitle: 'Elite',
                price: '頂級體驗',
                features: [
                  '完全個性化設計',
                  '雙眼3D平衡技術',
                  '最大視野區域',
                  '1.67/1.74 折射率',
                ],
                color: 'bg-gradient-to-br from-[#0055A4] to-[#00A0E9]',
              },
            ].map((series, index) => (
              <div 
                key={index} 
                className={`animate-in rounded-2xl p-8 ${series.color} relative ${series.recommended ? 'ring-4 ring-[#E30613]' : ''}`}
              >
                {series.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#E30613] rounded-full text-sm font-semibold">
                    推薦選擇
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-1">{series.name}</h3>
                <p className="text-white/70 mb-4">{series.subtitle}</p>
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
      <section ref={(el) => addToRefs(el, 7)} className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="animate-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              適用對象與生活情境
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '40歲以上初老花', desc: '開始出現近距離閱讀困難' },
              { title: '辦公族', desc: '長時間使用電腦和文件' },
              { title: '駕駛者', desc: '需要清晰遠近視野切換' },
              { title: '戶外活動者', desc: '多種距離活動需求' },
            ].map((item, index) => (
              <div key={index} className="animate-in bg-gray-50 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-[#0055A4]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-6 h-6 text-[#0055A4]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty */}
      <section ref={(el) => addToRefs(el, 8)} className="py-20 lg:py-28 bg-[#0055A4]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="animate-in text-white">
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              品質保證
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              我們對產品品質充滿信心，提供30天適應保證。
              如不適應，可免費更換或退款。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-6 py-3 bg-white/20 rounded-full">ISO 9001 品質認證</span>
              <span className="px-6 py-3 bg-white/20 rounded-full">30天適應保證</span>
              <span className="px-6 py-3 bg-white/20 rounded-full">一年鏡片保養</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            準備好體驗無縫視覺了嗎？
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            立即預約專業驗光，找到最適合您的漸進鏡片
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/85284332216?text=${encodeURIComponent('你好，我想查詢漸進鏡片產品優惠。')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E30613] text-white font-semibold rounded-xl hover:bg-[#c20510] transition-all"
            >
              WhatsApp 查詢
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#0055A4] text-[#0055A4] font-semibold rounded-xl hover:bg-[#0055A4] hover:text-white transition-all"
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
