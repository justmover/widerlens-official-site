import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, Eye, Users, Heart, Target } from 'lucide-react';
import { buildWhatsAppUrl } from '../config';

gsap.registerPlugin(ScrollTrigger);

export function AboutUs() {
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
          background: 'linear-gradient(135deg, #355C7D 0%, #F8B195 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="animate-in text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              關於 WiderLens
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              我們的故事，始於對「清晰」的執著
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Our Story */}
      <section
        ref={(el) => addToRefs(el, 1)}
        className="py-20 lg:py-28 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in">
              <div className="w-14 h-14 bg-[#355C7D]/10 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-[#355C7D]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                我們的故事，始於對「清晰」的執著
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  一九八七年，快達光學在香港正式成立。那時候，我們只有一個簡單的信念：
                  <strong className="text-gray-900">每一雙眼睛，都值得擁有更寬廣、更清亮的視界。</strong>
                  近四十年來，這份信念從未動搖，反而隨着時間沉澱，化作我們對鏡片工藝的極致追求。
                </p>
                <p>
                  WiderLens —— 快達光學旗下專業鏡片品牌，承載着我們對光學技術的熱誠與對香港市場的深耕。我們不只是一間鏡片供應商，更是一群相信「視覺質素能改變生活」的專業團隊。由德國 Optotech 數碼延展設計，到日本頂級雙面複合漸進技術，我們將全球最先進的光學科技帶進香港，讓每一位配戴者都能「看得更廣，生活更自在」。
                </p>
              </div>
            </div>
            <div className="animate-in">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#355C7D]/20 to-transparent" />
                <img
                  src="/hero-model.jpg"
                  alt="WiderLens 專業鏡片"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Experience */}
      <section
        ref={(el) => addToRefs(el, 2)}
        className="py-20 lg:py-28 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="animate-in text-center mb-16">
            <div className="w-14 h-14 bg-[#355C7D]/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <Users className="w-7 h-7 text-[#355C7D]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              近四十年扎根香港，累積深厚專業底蘊
            </h2>
          </div>
          <div className="animate-in grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-[#355C7D] mb-2">40</div>
              <div className="text-sm text-gray-500 mb-4">年近四十年扎根香港</div>
              <p className="text-gray-600 text-sm leading-relaxed">
                快達光學自1987年在香港成立，親歷鏡片技術從傳統打磨到數碼自由曲面的革命性蛻變。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-[#355C7D] mb-2">40+</div>
              <div className="text-sm text-gray-500 mb-4">年專業資歷</div>
              <p className="text-gray-600 text-sm leading-relaxed">
                核心團隊由資深光學工程師、視光專家及行業精英組成，累積超過四十年光學專業資歷。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-[#355C7D] mb-2">60+</div>
              <div className="text-sm text-gray-500 mb-4">合作門市</div>
              <p className="text-gray-600 text-sm leading-relaxed">
                專業鏡片已透過六十多間合作門市覆蓋港島、九龍及新界，與前線視光師緊密同行。
              </p>
            </div>
          </div>
          <div className="animate-in mt-12 max-w-3xl mx-auto text-center">
            <p className="text-gray-600 leading-relaxed">
              這些年來，我們專注於漸進鏡片、變色鏡片及功能性鍍膜技術的研發與應用，建立起嚴謹的品質管控體系。由 Wider 3D 高清低反漸進系列、4K 數碼高清漸進系列，到 W-Pal 日本雙面複合漸進鏡片，每一款產品都經過精密計算與實際佩戴驗證，確保香港用戶獲得最貼合亞洲人輪廓與用眼習慣的視覺方案。
            </p>
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
            <div className="animate-in order-2 lg:order-1">
              <div className="bg-gradient-to-br from-[#355C7D] to-[#4A3B5A] rounded-3xl p-8 md:p-12 text-white">
                <Heart className="w-10 h-10 mb-6 text-[#F8B195]" />
                <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
                  「夥伴的成功，就是我們的成功」
                </blockquote>
                <p className="text-white/80 leading-relaxed">
                  我們深知，單靠優質產品並不足夠——唯有讓合作夥伴與顧客同樣成功，才是真正的成就。
                </p>
              </div>
            </div>
            <div className="animate-in order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                夥伴的成功，就是我們的成功
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  今天，WiderLens 的專業鏡片已透過 <strong className="text-gray-900">六十多間合作門市</strong> 覆蓋港島、九龍及新界，與前線視光師、眼鏡零售夥伴緊密同行。
                </p>
                <p>
                  我們為合作夥伴提供的不只是鏡片，更是一整套支援方案：專業產品培訓、技術諮詢、市場推廣資源，以及靈活穩定的供貨流程。因為我們相信，當夥伴能夠自信地為顧客驗配最合適的鏡片，當顧客因為清晰的視覺而重拾生活質素，這份成功便會回流到整個行業，讓生態更加茁壯。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Vision */}
      <section
        ref={(el) => addToRefs(el, 4)}
        className="py-20 lg:py-28 bg-[#355C7D]"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="animate-in text-center text-white mb-12">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <Target className="w-7 h-7 text-[#F8B195]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">我們的願景</h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              在這個屏幕無處不在、用眼需求日趨複雜的年代，香港人值得擁有更高標準的視覺護理。WiderLens 的願景，是
              <strong className="text-white">成為香港最具信賴度的專業鏡片夥伴</strong>
              ——無論是為長時間對着電腦的年輕專業人士設計抗疲勞方案，還是為活躍於戶外的用家提供智能變色保護，我們都致力以尖端技術與貼心服務，成就每一個人的目標。
            </p>
          </div>
          <div className="animate-in max-w-2xl mx-auto text-center">
            <p className="text-white/80 mb-8">
              我們不做浮誇的承諾，只用實力說話。
              <strong className="text-white">接近百分之百的客戶滿意度</strong>
              ，是無數香港用戶給予我們最真實的肯定。
            </p>
            <blockquote className="text-xl md:text-2xl font-medium text-[#F8B195] italic">
              「看得更廣，生活更自在。」
            </blockquote>
            <p className="text-white/60 mt-4 text-sm">
              這不只是一句口號，而是快達光學與 WiderLens 對香港這片土地的長久承諾。
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            想更了解 WiderLens？
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            歡迎隨時聯絡我們，或親臨合作門市體驗專業驗配服務
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={buildWhatsAppUrl('你好，我想了解WiderLens的更多資訊。')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C06C84] text-white font-semibold rounded-xl hover:bg-[#A05068] transition-all"
            >
              WhatsApp 查詢
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#355C7D] text-[#355C7D] font-semibold rounded-xl hover:bg-[#355C7D] hover:text-white transition-all"
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
          <p className="mt-2 text-sm">快達光學有限公司 —— 香港專業鏡片供應商，與您攜手，看清未來。</p>
        </div>
      </footer>
    </div>
  );
}
