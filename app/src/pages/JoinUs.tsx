import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, Package, GraduationCap, Megaphone, Truck, Store, Quote, Phone, Mail } from 'lucide-react';
import { buildWhatsAppUrl } from '../config';

gsap.registerPlugin(ScrollTrigger);

export function JoinUs() {
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
            className="flex items-center gap-2 text-gray-600 hover:text-[#355C7D] transition-colors"
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
          background: 'linear-gradient(135deg, #355C7D 0%, #C06C84 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="animate-in text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              立即加盟 WiderLens
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              一個人的眼界有限，一群人的視界無邊
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Why Choose Us */}
      <section
        ref={(el) => addToRefs(el, 1)}
        className="py-20 lg:py-28 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="animate-in max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              為什麼選擇與 WiderLens 同行？
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                快達光學扎根香港近四十年，我們不是外來品牌，而是與這座城市共同成長的本地專業鏡片供應商。我們深知香港顧客的步伐急促、要求嚴格，也了解前線門市每日面對的挑戰——從驗配技術到庫存管理，從顧客教育到市場推廣，每一環都不能鬆懈。
              </p>
              <p className="text-lg">
                與 WiderLens 合作，你得到的不是一疊價目表，而是一個
                <strong className="text-gray-900">真正懂香港市場的專業後盾</strong>。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What We Offer */}
      <section
        ref={(el) => addToRefs(el, 2)}
        className="py-20 lg:py-28 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="animate-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              我們為夥伴準備了什麼
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Product */}
            <div className="animate-in bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-[#355C7D]/10 rounded-xl flex items-center justify-center mb-5">
                <Package className="w-6 h-6 text-[#355C7D]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">頂尖產品，讓你講得有底氣</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                我們的產品線專為亞洲用家設計，技術規格足以媲美國際大牌：
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#355C7D] mt-1">•</span>
                  <span><strong>Wider 4K Series</strong> — 德國 Optotech 延展設計，數碼演算優化遠中近視野</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#355C7D] mt-1">•</span>
                  <span><strong>Wider 3D-Series</strong> — 3D 自由曲面演算配合 LRC 高清低反鍍膜</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#355C7D] mt-1">•</span>
                  <span><strong>W-Pal 日本漸進</strong> — 雙面複合漸進設計，以亞洲人輪廓為藍本</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#355C7D] mt-1">•</span>
                  <span><strong>UV PLUS / Photochange</strong> — 功能齊全，滿足全場景需求</span>
                </li>
              </ul>
              <p className="text-gray-900 font-medium mt-4">
                當產品本身具備說服力，銷售就不再是推銷，而是專業建議。
              </p>
            </div>

            {/* Training */}
            <div className="animate-in bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-[#355C7D]/10 rounded-xl flex items-center justify-center mb-5">
                <GraduationCap className="w-6 h-6 text-[#355C7D]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">專業培訓與技術支援</h3>
              <p className="text-gray-600 leading-relaxed">
                我們定期為合作門市提供產品培訓與技術諮詢，深入講解漸進鏡片的驗配要點、不同走廊度數的選擇邏輯，以及常見顧客疑問的解答技巧。無論是資深造光師還是行業新血，都能在 WiderLens 的培訓體系中獲得實戰知識，
                <strong className="text-gray-900">提升專業形象，建立顧客信任</strong>。
              </p>
            </div>

            {/* Marketing */}
            <div className="animate-in bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-[#355C7D]/10 rounded-xl flex items-center justify-center mb-5">
                <Megaphone className="w-6 h-6 text-[#355C7D]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">市場推廣資源</h3>
              <p className="text-gray-600 leading-relaxed">
                我們提供完善的市場推廣支援：宣傳素材、社交媒體內容、限時優惠活動方案，甚至針對特定社區的推廣策略。WiderLens 正在積極建立品牌認知度，而作為我們的合作夥伴，你將直接受惠於這股品牌聲勢，
                <strong className="text-gray-900">吸引更多新客上門</strong>。
              </p>
            </div>

            {/* Logistics */}
            <div className="animate-in bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-[#355C7D]/10 rounded-xl flex items-center justify-center mb-5">
                <Truck className="w-6 h-6 text-[#355C7D]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">穩定供貨與靈活訂單</h3>
              <p className="text-gray-600 leading-relaxed">
                我們明白，庫存積壓與斷貨同樣致命。WiderLens 提供穩定、靈活的供貨流程，讓你能根據實際需求調整訂單，無需承擔過多庫存壓力。我們的物流網絡覆蓋港九新界，
                <strong className="text-gray-900">確保你需要的鏡片準時到店</strong>。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Partners */}
      <section
        ref={(el) => addToRefs(el, 3)}
        className="py-20 lg:py-28 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in">
              <div className="w-14 h-14 bg-[#355C7D]/10 rounded-2xl flex items-center justify-center mb-6">
                <Store className="w-7 h-7 text-[#355C7D]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                與六十多間門市並肩成長
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  今天，WiderLens 的專業鏡片已透過遍佈港島、九龍、新界的 <strong className="text-gray-900">六十多間合作門市</strong> 服務無數香港顧客。我們珍惜每一段夥伴關係，因為我們深信：<strong className="text-gray-900">你的成功，才是衡量我們成功的真正標準。</strong>
                </p>
              </div>
            </div>
            <div className="animate-in">
              <div className="bg-gradient-to-br from-[#355C7D] to-[#4A3B5A] rounded-3xl p-8 md:p-12 text-white relative">
                <Quote className="w-10 h-10 text-[#F8B195] mb-6" />
                <blockquote className="text-lg md:text-xl font-medium leading-relaxed mb-6">
                  「用了 WiderLens 的漸進鏡片後，顧客的投訴明顯減少，回頭客多了，連帶鏡架的銷售也提升了。」
                </blockquote>
                <p className="text-white/70">—— 來自合作夥伴的真實回饋</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: CTA */}
      <section
        ref={(el) => addToRefs(el, 4)}
        className="py-20 lg:py-28 bg-[#355C7D]"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="animate-in text-white mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">現在就開始</h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-6">
              香港視光行業正在升級，顧客對高品質漸進鏡片的需求只會有增無減。與其獨自面對市場壓力，不如加入一個
              <strong className="text-white">重視夥伴、重視專業、重視長遠關係</strong>
              的品牌陣營。
            </p>
            <p className="text-white/80">
              無論你是獨立眼鏡店、連鎖視光中心，還是剛起步的創業門市，WiderLens 都誠邀你攜手合作。
            </p>
            <p className="text-[#F8B195] font-medium text-lg mt-6">
              讓我們一起，為更多香港人打開清晰寬廣的視界；也讓你的生意，看得更遠、走得更穩。
            </p>
          </div>

          <div className="animate-in flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={buildWhatsAppUrl('你好，我想了解加盟 WiderLens 的合作詳情。')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C06C84] text-white font-semibold rounded-xl hover:bg-[#A05068] transition-all"
            >
              <Phone className="w-5 h-5" />
              WhatsApp 查詢
            </a>
            <a
              href="mailto:info@wider-lens.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20"
            >
              <Mail className="w-5 h-5" />
              電郵聯絡
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center text-gray-500">
          <p>© 2026 WiderLens. 保留所有權利。</p>
          <p className="mt-2 text-sm">WiderLens —— 快達光學旗下專業鏡片品牌，期待與你同行。</p>
        </div>
      </footer>
    </div>
  );
}
