import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Layers,
  Monitor,
  Sun,
  BatteryCharging,
  Star,
  Route,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// --- Types ---
interface SubProduct {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
}

interface ProductSeriesItem {
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
  subProducts: SubProduct[];
}

// --- Data ---
const productSeriesList: ProductSeriesItem[] = [
  {
    id: '4k',
    name: 'Wider 4K Series',
    subtitle: '4K 數碼高清漸進鏡片',
    tagline: '專為數碼生活而設的高清視覺革命',
    description:
      '由德國 Optotech 專業研發，採用【Extended Design 延展設計】，以數碼演算優化遠中近區域比例，提供極高清晰度視覺體驗：影像細節銳利、過渡柔順；寬廣視野設計讓閱讀區域與中距區域更舒適自然；全方位平衡焦點轉換使遠、中、近距離切換更加流暢；長效舒適度升級，減低視覺壓力，全天佩戴自在無負擔。',
    features: [
      '極高清晰度視覺體驗 — 影像細節銳利、過渡柔順',
      '寬廣視野設計 — 閱讀區域與中距區域更舒適自然',
      '全方位平衡焦點轉換 — 遠中近切換流暢',
      '長效舒適度升級 — 減低視覺壓力，全天無負擔',
      '德國 Optotech 專業研發 — 數碼演算優化',
    ],
    specs: [
      { label: '設計技術', value: '德國 Optotech Extended Design' },
      { label: '折射率選項', value: '1.50 / 1.60 / 1.67 / 1.74' },
      { label: '加光度範圍', value: '+0.75D 至 +3.50D' },
      { label: '適用對象', value: '數碼生活用家、首次佩戴漸進鏡片者' },
    ],
    technologies: [
      { name: 'Extended Design', desc: '德國漸進延展設計技術' },
      { name: '4K 高清光學', desc: '提升清晰度並減少像差' },
      { name: '數碼演算優化', desc: '針對遠中近區域比例調校' },
      { name: '亞洲人數據', desc: '配合亞洲人配戴習慣' },
    ],
    image: '/product-4k.jpg',
    color: 'from-blue-600 to-cyan-500',
    badgeColor: 'bg-blue-500',
    subProducts: [
      {
        id: '4k-progressive',
        name: '4K 數碼高清漸進鏡片',
        tagline: '遠中近無縫銜接',
        description: '針對遠、中、近三段視野作精細優化，視野更闊、更自然，縮短適應期。',
        icon: Layers,
      },
      {
        id: '4k-office',
        name: '4K-Office 室內漸進系列',
        tagline: '寬廣中近視野',
        description: '提供較寬廣的中近視野區域，減輕眼睛和頸部壓力，適合長時間辦公。',
        icon: Monitor,
      },
    ],
  },
  {
    id: '3d',
    name: 'Wider 3D-Series',
    subtitle: '3D 高清低反漸進鏡片',
    tagline: '捕捉高清世界，感受自然視覺轉換',
    description:
      'WIDER OPTO 最新的 3D‑Series 自由曲面漸進鏡片，結合「高清低反鍍膜 LRC（Low Reflection Coating）」技術，為佩戴者帶來極致清晰、舒適的視覺體驗。無論遠近距離轉換，都能保持自然流暢的焦點切換，重現真實場景的立體層次與色彩細節。3D自由曲面演算提供更廣闊的視野與更精準的焦點轉換；LRC高清低反鍍膜顯著降低眩光；多段走廊選擇（12 / 14 / 16mm）精準定制；多種時尚色系與多重功能系列滿足個性需求。',
    features: [
      '3D 自由曲面演算 — 更廣闊的視野與更精準的焦點轉換',
      'LRC 高清低反鍍膜 — 顯著降低眩光，夜間駕駛更舒適',
      '多段走廊選擇（12 / 14 / 16mm）— 根據需求精準定制',
      '多種時尚色系 — Grey、Brown、Green、Pink、Purple、Blue',
      '多重功能系列 — CLEAR / UV PLUS / PHOTOCHANGE / PHOTOCHANGE UV PLUS',
    ],
    specs: [
      { label: '設計類型', value: 'Freeform 3D 自由曲面' },
      { label: '鍍膜選項', value: 'LRC 高清低反鍍膜' },
      { label: '走廊長度', value: '12mm / 14mm / 16mm' },
      { label: '色彩選擇', value: 'Grey / Brown / Green / Pink / Purple / Blue' },
    ],
    technologies: [
      { name: '3D 自由曲面', desc: '先進立體光學設計' },
      { name: 'LRC 鍍膜', desc: '高清低反射鍍膜技術' },
      { name: 'Smart ADD', desc: '智能加工技術優化近距離視覺' },
      { name: '個人化優化', desc: '按度數及習慣調校' },
    ],
    image: '/product-3d.jpg',
    color: 'from-emerald-500 to-teal-400',
    badgeColor: 'bg-emerald-500',
    subProducts: [
      {
        id: '3d-progressive',
        name: '3D-Series 高清低反漸進鏡片',
        tagline: '高清低反，自然轉換',
        description: '結合 LRC 鍍膜，極致清晰舒適，適應快速，視野廣闊。',
        icon: Layers,
      },
      {
        id: '3d-office',
        name: '3D-Office 室內漸進系列',
        tagline: '智能加工，清晰辦公',
        description: 'Smart ADD 技術提高電子設備視覺效果，4種視覺範圍覆蓋需求。',
        icon: Monitor,
      },
      {
        id: '3d-antifatigue',
        name: '3D 高清數碼漸進抗疲勞',
        tagline: '舒緩睫狀肌疲勞',
        description: '專為長時間看近物的年輕人設計，LRC 鍍膜過濾屏幕眩光，變形區輕微。',
        icon: BatteryCharging,
      },
      {
        id: '3d-photochange',
        name: '3D Photochange 變色系列',
        tagline: '智能變色，全時段適用',
        description: '提供多種顏色選擇，S3系列（灰/茶）及多彩系列（綠/藍/紫/粉紅）。',
        icon: Sun,
      },
    ],
  },
  {
    id: 'wpal',
    name: 'W-Pal 日本漸進',
    subtitle: 'W-PAL 雙面複合漸進鏡片',
    tagline: '日本科技．極致視界',
    description:
      '針對亞洲人視覺需求，結合日本頂級光學設計與全球最高折射率1.76鏡片，實現清晰廣闊的全域視野。WIDER JAPAN W-PAL 採用「雙面非球面複合漸進設計」與 DX Refinement 精修演算法，精准優化每位配戴者的視覺路徑，大幅減輕變形與泳動感，讓遠、中、近距離轉換更流暢。',
    features: [
      '雙面複合漸進設計 — 前後面分工修正像差，視野更穩定',
      'DX Refinement 精修演算法 — 根據瞳距與配戴角度自動調整',
      'Flexible Inset Design — 彈性內移設計，完美對應閱讀距離',
      'Optimal Atoric Design — 遠用區域清晰度顯著提升',
      '1.76 全球最高折射率 — 超薄、超輕、超高解析',
    ],
    specs: [
      { label: '設計特色', value: '雙面複合漸進 + 雙面非球面' },
      { label: '產地', value: '日本製造' },
      { label: '折射率', value: '1.76（全球最高）' },
      { label: '適用對象', value: '重視閱讀舒適度與視線穩定性者' },
    ],
    technologies: [
      { name: '雙面複合', desc: '前後面分工修正像差' },
      { name: 'DX Refinement', desc: '精修演算法，個人化匹配' },
      { name: 'Flexible Inset', desc: '彈性內移設計' },
      { name: 'Atoric Design', desc: '遠用區域清晰度提升' },
    ],
    image: '/product-wpal.jpg',
    color: 'from-amber-500 to-orange-400',
    badgeColor: 'bg-amber-500',
    subProducts: [
      {
        id: 'wpal-progressive',
        name: 'W-PAL 雙面複合漸進鏡片',
        tagline: '日本細膩舒適',
        description: '承襲日本設計細膩舒適特色，自然柔和度數過渡，適合日常閱讀、辦公及外出。',
        icon: Layers,
      },
    ],
  },
];

const functionsList = [
  {
    id: 'progressive',
    name: '漸進鏡片',
    description:
      '多焦點鏡片，提供從遠距離到近距離的連續視覺過渡。無需更換眼鏡，一副搞定所有距離。',
    icon: Route,
    visual: '開車、戶外',
  },
  {
    id: 'office',
    name: '室內漸進鏡片',
    description:
      '提供較寬廣的中近視野區域，減輕眼睛和頸部壓力，特別適合長時間使用電腦和文書工作。',
    icon: Monitor,
    visual: '辦公室、看電腦、閱讀',
  },
  {
    id: 'antifatigue',
    name: '抗疲勞鏡片',
    description:
      '減輕眼睛調節負擔，舒緩睫狀肌疲勞，適合長時間看手機及閱讀的年輕用家。',
    icon: BatteryCharging,
    visual: '年輕女士、看手機、閱讀',
  },
  {
    id: 'photochromic',
    name: '變色鏡片',
    description:
      '根據環境光線自動調整顏色深淺，室內透明、戶外變暗，全時段護眼。',
    icon: Sun,
    visual: '戶外、開車、運動、型格',
  },
];

const lrcFeatures = [
  { name: '防塵', desc: '令鏡片時刻保持清晰' },
  { name: '易潔', desc: '鏡片容易清潔' },
  { name: '耐磨', desc: '提升耐用度' },
  { name: '高透低反光', desc: '加強鏡片清晰度' },
  { name: '防水', desc: '鏡片表面不會留下水滴' },
];

const comparisonRows = [
  { label: '清晰度', generic: '一般', series4k: '☆☆☆☆☆ 高達4K級細膩畫質', series3d: '高清、低反射', seriesWpal: '高精度非球面優化' },
  { label: '視野寬度', generic: '普通', series4k: '☆☆☆☆☆ 延展式寬視野', series3d: '廣闊視野 + 精準焦點', seriesWpal: '廣闊 + 邊緣穩定' },
  { label: '適應性', generic: '需較長時間', series4k: '快速自然', series3d: '快速自然', seriesWpal: '順滑易適應' },
  { label: '鏡面反光', generic: '較明顯', series4k: '低反光', series3d: '接近無反光 (LRC)', seriesWpal: '低反光' },
  { label: '個性化度', generic: '固定設計', series4k: '數碼演算優化', series3d: '3D 自定義自由曲面', seriesWpal: 'DX Refinement 精準匹配' },
  { label: '夜間使用', generic: '眩光干擾', series4k: '對比提升', series3d: '對比提升', seriesWpal: '視野穩定' },
  { label: '色彩選擇', generic: '有限', series4k: '標準', series3d: '多色可選 + 功能鍍膜', seriesWpal: '標準' },
  { label: '厚度外觀', generic: '較厚', series4k: '多折射率可選', series3d: '多折射率可選', seriesWpal: '全球最薄 1.76 折射率' },
];

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
                href={`https://wa.me/85284332216?text=${encodeURIComponent(
                  `你好，我想了解${activeProduct.name}批發合作詳情。`
                )}`}
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
              href={`https://wa.me/85284332216?text=${encodeURIComponent('你好，我想了解WiderLens批發合作詳情。')}`}
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
