import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowLeft,
  CheckCircle2,
  Star,
  Layers,
  Monitor,
  Sun,
  BatteryCharging,
  Route,
  MessageCircle,
  Eye,
} from 'lucide-react';
import { lrcFeatures, comparisonRows } from '../data/products';
import { buildWhatsAppUrl } from '../config';

gsap.registerPlugin(ScrollTrigger);

export function ProductSeries() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
              WiderLens 產品系統和分類
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              專業鏡片產品線
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              鏡片的產品系統和分類是根據不同的設計和功能來區分的。每個系列的鏡片都具有獨特的特性和優勢，以滿足不同需求。
            </p>
          </div>
        </div>
      </section>

      {/* Product Series Overview */}
      <section ref={(el) => addToRefs(el, 0)} className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="animate-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">產品系列</h2>
            <p className="text-lg text-gray-600">各系列的產品特性</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 3D Series */}
            <div className="animate-in group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="/product-3d.jpg"
                  alt="Wider 3D-Series"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full mb-2">
                    3D 高清低反漸進鏡片
                  </span>
                  <h3 className="text-xl font-bold text-white">Wider 3D</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  全新 WIDER OPTO 3D-Series 鏡片是完全著重平衡的鏡片，使配戴者的適應率更快，從而實現最高的視覺舒適度，加上獨有的超低反射鍍膜 LRC 將鏡片的透光率和清晰度大大提升。
                </p>
                <Link
                  to="/products/3d"
                  className="inline-flex items-center gap-2 text-[#355C7D] font-semibold text-sm hover:underline"
                >
                  了解詳情 <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </div>
            </div>

            {/* 4K Series */}
            <div className="animate-in group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="/product-4k.jpg"
                  alt="Wider 4K Series"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full mb-2">
                    4K 數碼高清漸進鏡片
                  </span>
                  <h3 className="text-xl font-bold text-white">Wider 4K</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  4K Series 德國 Optotech 設計的漸進鏡片採用了先進的延展設計（Extended Design），旨在滿足您對視覺體驗的高度期望。提供寬廣的視野，無論近距離還是遠處，都能輕鬆轉換焦點。
                </p>
                <Link
                  to="/products/4k"
                  className="inline-flex items-center gap-2 text-[#355C7D] font-semibold text-sm hover:underline"
                >
                  了解詳情 <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </div>
            </div>

            {/* W-Pal Series */}
            <div className="animate-in group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="/product-wpal.jpg"
                  alt="W-Pal 日本漸進"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full mb-2">
                    W-PAL 雙面複合漸進鏡片
                  </span>
                  <h3 className="text-xl font-bold text-white">Wider W-Pal</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  獨特的雙面複合漸進+雙面非球面設計，有效校正鏡片兩側的像差及失真，根據複雜的遠近兩用漸進鏡片的度數變化，修正鏡片兩面的視覺歪曲，減少失真。
                </p>
                <ul className="space-y-1 text-sm text-gray-500 mb-4">
                  <li>• 以亞洲人輪廓為藍本</li>
                  <li>• 配合佩戴者參考數據</li>
                  <li>• 雙眼視覺同步</li>
                  <li>• 提升視覺融象</li>
                </ul>
                <Link
                  to="/products/wpal"
                  className="inline-flex items-center gap-2 text-[#355C7D] font-semibold text-sm hover:underline"
                >
                  了解詳情 <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Functions Introduction */}
      <section ref={(el) => addToRefs(el, 1)} className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="animate-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">功能介紹</h2>
            <p className="text-lg text-gray-600">以上系列的產品皆有以下功能，覆蓋全方位生活場景</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Route,
                title: '漸進',
                desc: '漸進鏡片是一種多焦點鏡片，能夠提供從遠距離到近距離的連續視覺過渡。配戴者在觀看不同距離的物體時，不需要更換眼鏡，提供了極大的便利性和舒適度。',
                visual: '開車、戶外',
              },
              {
                icon: Monitor,
                title: '室內漸進',
                desc: '一般漸進鏡片無法提供較寬廣的中距離視野範圍，因此配戴者有時需要仰頭看電腦。室內漸進鏡片能夠提供較寬廣的中近視野區域，減輕眼睛和頸部的壓力。',
                visual: '辦公室、看電腦、閱讀',
              },
              {
                icon: BatteryCharging,
                title: '抗疲勞',
                desc: '抗疲勞鏡片能夠減輕眼睛的調節負擔，從而減少視覺疲勞的發生。這些鏡片具有特殊的設計和技術，可以幫助眼睛更輕鬆地調節焦距，提供更舒適的視覺體驗。',
                visual: '年輕女士、看手機、閱讀',
              },
              {
                icon: Sun,
                title: '變色',
                desc: '變色鏡片能夠根據環境光線的強弱自動調整顏色。戶外時迅速變暗以保護眼睛，室內恢復透明提供清晰視野，非常適合戶外活動和日常使用。',
                visual: '戶外、開車、運動、型格',
              },
            ].map((fn, i) => (
              <div
                key={i}
                className="animate-in bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-[#355C7D]/10 rounded-xl flex items-center justify-center mb-4">
                  <fn.icon className="w-6 h-6 text-[#355C7D]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{fn.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{fn.desc}</p>
                <p className="text-xs text-gray-400">適用場景：{fn.visual}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LRC Coating */}
      <section ref={(el) => addToRefs(el, 2)} className="py-20 lg:py-28">
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

      {/* Highlighted Products */}
      <section ref={(el) => addToRefs(el, 3)} className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="animate-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">重點推廣系列</h2>
          </div>

          <div className="space-y-8">
            {/* 3D Anti-fatigue */}
            <div className="animate-in bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BatteryCharging className="w-7 h-7 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Wider 3D 高清數碼漸進抗疲勞</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Wider 3D 抗疲勞鏡是專為長時間看近物的年輕人所設計。加上 LRC 鍍膜可以過濾手機屏幕眩光閃爍，增加視覺清晰度，舒緩睫狀肌疲勞。由於抗疲勞鏡片的加光度不高，因此變形區非常輕微，一般使用時不易察覺。
                  </p>
                </div>
              </div>
            </div>

            {/* 3D Office */}
            <div className="animate-in bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Monitor className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Wider 3D-Office 室內漸進系列</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    3D-Office 室內鏡片結合了智能加工技術（SMART ADD），提高佩戴者使用電子設備時的視覺效果。辦公室鏡片提供了4種視覺範圍，覆蓋了客戶的需求，為佩戴者提供清晰的視覺效果（電話/平板電腦/電腦等等）。
                  </p>
                  <p className="text-sm text-gray-500 font-medium">適合佩戴人士：</p>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li>• 適合長時間使用電腦和處理文書的人士，尤其在金融業等職業</li>
                    <li>• 適合需要大量使用電腦、閱讀或進行文書工作長時間在辦公室工作人士</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Photochange */}
            <div className="animate-in bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Sun className="w-7 h-7 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Wider Photochange 變色系列</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Wider Photochange 變色鏡片提供了多種顏色選擇，滿足不同消費者的需求。Photochange 變色 S3 系列提供灰色和茶色選擇，適合喜歡經典和自然風格的消費者；而 Photochange 變色系列則提供綠色、藍色、紫色和粉紅色選擇，適合喜歡鮮豔和個性化風格的消費者。
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">Photochange S3（灰 / 茶）</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">Photochange（綠 / 藍 / 紫 / 粉紅）</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4K Office */}
            <div className="animate-in bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-7 h-7 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Wider 4K-Office 室內漸進系列</h3>
                  <p className="text-gray-600 leading-relaxed">
                    一般漸進鏡片無法提供較寬廣的中距離視野範圍，因此配戴者有時需要仰頭看電腦，容易使眼睛和頸部感到疲勞。然而，室內漸進鏡片能夠提供較寬廣的中近視野區域，使配戴者擁有更大的角度來看電腦，同時減輕眼睛和頸部的壓力。
                  </p>
                </div>
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

          <div className="animate-in overflow-x-auto">
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
            立即聯繫我們，獲得專業建議和批發報價
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#355C7D] font-semibold rounded-xl hover:bg-gray-100 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
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
