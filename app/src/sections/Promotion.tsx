import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { promotionConfig } from '../config';
import { Gift, Percent, Phone, FileText } from 'lucide-react';
import { buildWhatsAppUrl } from '../config';

gsap.registerPlugin(ScrollTrigger);

export function Promotion() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  if (!promotionConfig.title) return null;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="promotion"
      className="relative w-full py-24 lg:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #355C7D 0%, #F8B195 100%)',
      }}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div ref={contentRef} className="relative z-10 container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="text-white">
            <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
              {promotionConfig.subtitle}
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">{promotionConfig.title}</h2>

            <div className="space-y-4 mb-8">
              {promotionConfig.offers.map((offer, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    {index === 0 ? <Gift className="w-5 h-5" /> : <Percent className="w-5 h-5" />}
                  </div>
                  <span className="text-lg">{offer}</span>
                </div>
              ))}
            </div>

            {/* Single CTA */}
            <a
              href={buildWhatsAppUrl('你好，我想領取最新優惠。')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C06C84] text-white font-semibold rounded-xl hover:bg-[#A05068] transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30 hover:-translate-y-1"
            >
              <Phone className="w-5 h-5" />
              WhatsApp 領取最新優惠
            </a>

            {/* Terms link */}
            <div className="mt-4">
              <a
                href="/promotion/terms"
                className="inline-flex items-center gap-1.5 text-white/70 text-sm hover:text-white transition-colors"
              >
                <FileText className="w-4 h-4" />
                查看條款及細則
              </a>
            </div>
          </div>

          {/* Right: Poster */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/promotion_poster.jpg"
                alt="WiderLens 優惠海報"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
