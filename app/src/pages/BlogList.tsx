import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, Clock, BookOpen, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogs';

gsap.registerPlugin(ScrollTrigger);

export function BlogList() {
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
        className="pt-32 pb-16 lg:pt-40 lg:pb-20"
        style={{
          background: 'linear-gradient(135deg, #355C7D 0%, #F8B195 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="animate-in text-center text-white">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <BookOpen className="w-7 h-7" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              視光知識
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              深入淺出的專業文章，助你了解鏡片科技與眼睛健康
            </p>
          </div>
        </div>
      </section>

      {/* Blog Cards */}
      <section
        ref={(el) => addToRefs(el, 1)}
        className="py-20 lg:py-28 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="animate-in group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="h-48 flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, #355C7D ${index * 20}%, #C06C84 ${100 - index * 20}%)`,
                  }}
                >
                  <BookOpen className="w-12 h-12 text-white/40" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <span className="px-3 py-1 bg-[#355C7D]/10 text-[#355C7D] rounded-full font-medium">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#355C7D] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[#355C7D] font-medium text-sm">
                    閱讀全文
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            想親身體驗專業鏡片？
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            前往我們的合作門市，由專業視光師為你驗配最適合的鏡片
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products/series"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#355C7D] text-white font-semibold rounded-xl hover:bg-[#2A4A63] transition-all"
            >
              探索產品系列
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
        </div>
      </footer>
    </div>
  );
}
