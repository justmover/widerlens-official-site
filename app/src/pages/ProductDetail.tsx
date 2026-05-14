import { useEffect, useRef } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { productSeriesList } from '../data/products';
import { buildWhatsAppUrl } from '../config';

gsap.registerPlugin(ScrollTrigger);

export function ProductDetail() {
  const { seriesId } = useParams<{ seriesId: string }>();
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const heroRef = useRef<HTMLElement>(null);

  const product = productSeriesList.find((p) => p.id === seriesId);

  if (!product) {
    return <Navigate to="/products/series" replace />;
  }

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
  }, [product.id]);

  const addToRefs = (el: HTMLElement | null, index: number) => {
    if (el) sectionRefs.current[index] = el;
  };

  const dc = product.detailContent;

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
              {product.subtitle}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {product.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              {dc?.headline || product.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section ref={(el) => addToRefs(el, 0)} className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative animate-in">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${product.color} rounded-3xl opacity-20 blur-3xl transform scale-110`}
              />
              <img
                src={product.image}
                alt={product.name}
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              <div
                className={`absolute top-4 left-4 ${product.badgeColor} text-white px-4 py-2 rounded-full text-sm font-semibold`}
              >
                {product.subtitle}
              </div>
            </div>

            {/* Content */}
            <div className="animate-in">
              <p className="text-[#355C7D] font-semibold mb-2">{product.tagline}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {product.name}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {product.description}
              </p>

              <div className="space-y-3 mb-8">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#355C7D] flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href={buildWhatsAppUrl(`你好，我想了解${product.name}批發合作詳情。`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C06C84] text-white font-semibold rounded-xl hover:bg-[#A05068] transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                查詢此產品
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Content from raw markdown */}
      {dc && (
        <>
          {/* Pain Points vs Breakthroughs */}
          {(dc.painPoints || dc.breakthroughs) && (
            <section ref={(el) => addToRefs(el, 1)} className="py-20 lg:py-28 bg-gray-50">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid md:grid-cols-2 gap-12">
                  {dc.painPoints && (
                    <div className="animate-in">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <XCircle className="w-7 h-7 text-red-400" />
                        {dc.painPoints.title}
                      </h3>
                      <ul className="space-y-4">
                        {dc.painPoints.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-red-300 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {dc.breakthroughs && (
                    <div className="animate-in">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <CheckCircle2 className="w-7 h-7 text-green-500" />
                        {dc.breakthroughs.title}
                      </h3>
                      <ul className="space-y-4">
                        {dc.breakthroughs.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-[#355C7D] mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-semibold text-gray-800">{item.label}</span>
                              <span className="text-gray-600"> — {item.desc}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}

          {/* Target Audience */}
          {dc.targetAudience && (
            <section ref={(el) => addToRefs(el, 2)} className="py-20 lg:py-28">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="animate-in text-center mb-12">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {dc.targetAudience.title}
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {dc.targetAudience.items.map((item, i) => (
                    <div
                      key={i}
                      className="animate-in bg-gray-50 rounded-2xl p-6 text-center hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-12 h-12 bg-[#355C7D]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-6 h-6 text-[#355C7D]" />
                      </div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Comparison Table */}
          {dc.comparison && (
            <section ref={(el) => addToRefs(el, 3)} className="py-20 lg:py-28 bg-gray-900 text-white">
              <div className="max-w-5xl mx-auto px-6 md:px-12">
                <div className="animate-in text-center mb-12">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    {dc.comparison.title}
                  </h3>
                </div>
                <div className="animate-in overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-white/20">
                        {dc.comparison.headers.map((h, i) => (
                          <th
                            key={i}
                            className={`pb-4 pr-6 font-semibold text-white/80 ${
                              i === 0 ? 'w-1/4' : 'w-1/3'
                            }`}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {dc.comparison.rows.map((row, i) => (
                        <tr key={i} className="border-b border-white/10">
                          <td className="py-4 pr-6 text-white/70">{row.label}</td>
                          {row.values.map((v, j) => (
                            <td
                              key={j}
                              className={`py-4 pr-6 ${
                                j === row.values.length - 1
                                  ? 'text-[#F8B195] font-semibold'
                                  : 'text-white/50'
                              }`}
                            >
                              {v}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          )}
        </>
      )}

      {/* Specs & Technologies */}
      <section ref={(el) => addToRefs(el, 4)} className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Specs */}
            <div className="animate-in">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">技術規格</h3>
              <div className="bg-gray-50 rounded-2xl p-8">
                <dl className="space-y-4">
                  {product.specs.map((spec, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center pb-4 border-b border-gray-200 last:border-0 last:pb-0"
                    >
                      <dt className="text-gray-500">{spec.label}</dt>
                      <dd className="font-semibold text-gray-900 text-right">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* Technologies */}
            <div className="animate-in">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">核心技術</h3>
              <div className="space-y-4">
                {product.technologies.map((tech, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-r from-[#355C7D]/5 to-transparent rounded-xl p-5 border-l-4 border-[#355C7D]"
                  >
                    <h4 className="font-bold text-gray-900 mb-1">{tech.name}</h4>
                    <p className="text-gray-600 text-sm">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-products */}
      {product.subProducts.length > 0 && (
        <section ref={(el) => addToRefs(el, 5)} className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="animate-in text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.name} 產品陣容
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {product.subProducts.map((sub) => (
                <div
                  key={sub.id}
                  className="animate-in bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow"
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
        </section>
      )}

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            對 {product.name} 有興趣？
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            立即聯絡我們，獲得專業建議和批發報價
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={buildWhatsAppUrl(`你好，我想了解${product.name}批發合作詳情。`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C06C84] text-white font-semibold rounded-xl hover:bg-[#A05068] transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp 查詢
            </a>
            <Link
              to="/products/series"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#355C7D] text-[#355C7D] font-semibold rounded-xl hover:bg-[#355C7D] hover:text-white transition-all"
            >
              查看全部產品
            </Link>
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
