import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sun, Shield, Layers, Sparkles, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ProductItem {
  id: string;
  name: string;
  nameEn?: string;
  description?: string;
}

interface ProductCategory {
  id: string;
  title: string;
  titleEn: string;
  icon: React.ReactNode;
  items: ProductItem[];
  description?: string;
}

const productHierarchy: ProductCategory[] = [
  {
    id: 'progressive',
    title: '漸進鏡片',
    titleEn: 'Progressive Lenses',
    icon: <Layers className="w-6 h-6" />,
    description: '多焦點漸進設計，遠中近一鏡搞定',
    items: [
      {
        id: '4k-hd',
        name: '4K 數碼漸進 - 高清系列',
        nameEn: '4K Digital Progressive - HD Series',
        description: '高清晰度、廣闊視野、低變形。採用德國 OptoTech 漸進設計技術，視野更闊更自然。',
      },
      {
        id: '3d-soft',
        name: '3D 數碼漸進 - 柔和平衡系列',
        nameEn: '3D Digital Progressive - Soft & Balance Series',
        description: '先進 3D 光學計算，全客製化設計。配合 LRC 低反光鍍膜，夜間駕駛及看屏幕更舒適。',
      },
      {
        id: 'wpal',
        name: 'W-Pal 日本漸進',
        nameEn: 'W-Pal Japanese Progressive',
        description: '雙面複合設計，承襲日本鏡片設計著重細膩舒適的特色，自然柔和的度數過渡。',
      },
    ],
  },
  {
    id: 'photochromic',
    title: '變色鏡片',
    titleEn: 'Photochromic Lenses',
    icon: <Sun className="w-6 h-6" />,
    description: '智能感光變色，室內室外無縫切換',
    items: [
      {
        id: '3d-photo',
        name: '3D 變色鏡片',
        nameEn: '3D Photochromic Lenses',
        description: '採用 3D 自由曲面漸進技術，結合智能變色功能。提供 Grey、Brown、Green、Pink、Purple、Blue 多種時尚色系選擇，配合 PHOTOCHANGE LRC 鍍膜，日夜切換無縫適應。',
      },
    ],
  },
  {
    id: 'filter',
    title: '濾光技術',
    titleEn: 'Filter Technology',
    icon: <Shield className="w-6 h-6" />,
    description: '專業濾光防護，呵護雙眼健康',
    items: [
      {
        id: 'uv-plus',
        name: 'UV PLUS 濾藍光鏡片',
        nameEn: 'UV PLUS Blue Light Filtering Lenses',
        description: '極致美學體驗，表面不帶明顯藍色反光，同時清透不泛黃，展現美觀自然的視覺效果。有效過濾有害藍光，保護眼睛健康。',
      },
    ],
  },
];

export function WhyChooseMe() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section header — slide up
      ScrollTrigger.create({
        trigger: headerRef.current,
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(
            headerRef.current,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
          );
        },
        once: true,
      });

      // Category cards — staggered reveal
      const cards = categoriesRef.current?.querySelectorAll('.category-card');
      if (cards) {
        cards.forEach((card, i) => {
          ScrollTrigger.create({
            trigger: card,
            start: 'top 85%',
            onEnter: () => {
              gsap.fromTo(
                card,
                { y: 60, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.8,
                  ease: 'power3.out',
                  delay: i * 0.15,
                }
              );
            },
            once: true,
          });
        });
      }

      // Product items — staggered reveal
      const items = categoriesRef.current?.querySelectorAll('.product-item');
      if (items) {
        items.forEach((item, i) => {
          ScrollTrigger.create({
            trigger: item,
            start: 'top 90%',
            onEnter: () => {
              gsap.fromTo(
                item,
                { x: -20, opacity: 0 },
                {
                  x: 0,
                  opacity: 1,
                  duration: 0.6,
                  ease: 'power3.out',
                  delay: (i % 3) * 0.1,
                }
              );
            },
            once: true,
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="advantages"
      className="relative w-full py-24 md:py-32 bg-gradient-to-b from-white to-gray-50/50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16 md:mb-20 opacity-0">
          <p className="text-gray-500 text-sm font-body uppercase tracking-widest mb-4">
            產品系列
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-gray-900 tracking-tight">
            專業鏡片 <span className="font-serif italic font-normal text-[#355C7D]">產品架構</span>
          </h2>
          <p className="mt-4 text-gray-600 font-body max-w-2xl mx-auto">
            為您的視覺需求，提供全方位保護。從漸進多焦點鏡片到光致變色鏡片，我們致力於讓每一位客戶都能享受清晰舒適的視覺體驗。
          </p>
        </div>

        {/* Product Categories */}
        <div ref={categoriesRef} className="space-y-8">
          {productHierarchy.map((category) => (
            <div
              key={category.id}
              className="category-card opacity-0 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              {/* Category Header */}
              <div className="bg-gradient-to-r from-[#355C7D] to-[#4a7a9e] px-6 py-5 md:px-8 md:py-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-sans font-bold text-white">
                      {category.title}
                    </h3>
                    <p className="text-white/70 text-sm font-body">
                      {category.titleEn}
                    </p>
                  </div>
                </div>
                {category.description && (
                  <p className="mt-3 text-white/80 text-sm md:text-base font-body max-w-2xl">
                    {category.description}
                  </p>
                )}
              </div>

              {/* Product Items */}
              <div className="p-6 md:p-8">
                <div className="grid gap-4">
                  {category.items.map((item, index) => (
                    <div
                      key={item.id}
                      className="product-item opacity-0 group relative bg-gray-50 rounded-xl p-5 md:p-6 hover:bg-gray-100 transition-colors duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#355C7D]/10 flex items-center justify-center text-[#355C7D] font-sans font-bold text-sm">
                          {index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-lg md:text-xl font-sans font-semibold text-gray-900 group-hover:text-[#355C7D] transition-colors">
                            {item.name}
                          </h4>
                          {item.nameEn && (
                            <p className="text-gray-500 text-sm font-body mt-0.5">
                              {item.nameEn}
                            </p>
                          )}
                          {item.description && (
                            <p className="mt-3 text-gray-600 text-sm md:text-base font-body leading-relaxed">
                              {item.description}
                            </p>
                          )}
                        </div>
                        <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ChevronRight className="w-5 h-5 text-[#355C7D]" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-[#355C7D] font-body text-sm">
            <Sparkles className="w-4 h-4" />
            <span>專業品質 · 值得信賴</span>
          </div>
        </div>
      </div>
    </section>
  );
}
