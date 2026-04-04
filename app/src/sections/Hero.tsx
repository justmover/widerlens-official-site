import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { heroConfig } from '../config';
import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<HTMLDivElement>(null);
  const overlayTextRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!heroConfig.backgroundText && !heroConfig.heroImage && heroConfig.navLinks.length === 0) return null;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Store ScrollTrigger instances for cleanup
      const triggers: ScrollTrigger[] = [];

      // Entrance animations
      gsap.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          delay: 0.3,
        }
      );

      // Parallax effect for main text
      const textTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          if (textRef.current) {
            gsap.set(textRef.current, { yPercent: self.progress * 50 });
          }
        },
      });
      triggers.push(textTrigger);

      // Parallax effect for model (slower movement = appears closer)
      const modelTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          if (modelRef.current) {
            gsap.set(modelRef.current, { yPercent: self.progress * 20 });
          }
        },
      });
      triggers.push(modelTrigger);

      // Fade out overlay text faster
      const overlayTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '30% top',
        scrub: 1,
        onUpdate: (self) => {
          if (overlayTextRef.current) {
            gsap.set(overlayTextRef.current, { opacity: 1 - self.progress });
          }
        },
      });
      triggers.push(overlayTrigger);

      // Cleanup function
      return () => {
        triggers.forEach((trigger) => trigger.kill());
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0055A4 0%, #003d7a 50%, #002a54 100%)',
      }}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 animate-gradient"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(0, 160, 233, 0.4) 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, rgba(0, 160, 233, 0.3) 0%, transparent 40%)`,
          }}
        />
      </div>

      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-40 right-20 w-48 h-48 bg-[#00A0E9]/10 rounded-full blur-3xl animate-float-delayed" />

      {/* Layer 2: Big Background Text */}
      <div
        ref={textRef}
        className="absolute inset-0 flex items-center justify-center z-10 will-change-transform pointer-events-none"
      >
        <h1 className="text-[15vw] md:text-[18vw] lg:text-[20vw] font-sans font-extrabold text-white/[0.03] tracking-tighter leading-none select-none whitespace-nowrap">
          {heroConfig.backgroundText}
        </h1>
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between transition-all duration-300 bg-gradient-to-b from-black/30 to-transparent">
          {/* Logo */}
          <a href="#hero" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="WiderLens" 
              className="h-12 w-auto object-contain"
            />
          </a>
          
          {/* Desktop Navigation */}
          {heroConfig.navLinks.length > 0 && (
            <div className="hidden lg:flex items-center gap-8">
              {heroConfig.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/80 text-sm font-medium hover:text-white transition-colors duration-300 hover-underline"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`https://wa.me/85284332216?text=${encodeURIComponent('你好，我想查詢WiderLens產品優惠。')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#E30613] text-white text-sm font-semibold rounded-full hover:bg-[#c20510] transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30"
              >
                <Phone className="w-4 h-4" />
                WhatsApp 查詢
              </a>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div 
            className="fixed inset-0 z-40 bg-[#0055A4] lg:hidden pt-20"
            data-mobile-menu="true"
            data-open={mobileMenuOpen}
          >
            <div className="flex flex-col items-center gap-6 p-8">
              {heroConfig.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white text-xl font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    const targetId = link.href.replace('#', '');
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                      const headerOffset = 80;
                      const elementPosition = targetElement.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.scrollY - headerOffset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`https://wa.me/85284332216?text=${encodeURIComponent('你好，我想查詢WiderLens產品優惠。')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3 bg-[#E30613] text-white font-semibold rounded-full mt-4"
              >
                <Phone className="w-5 h-5" />
                WhatsApp 查詢
              </a>
            </div>
          </div>
        )}

        {/* Hero Content */}
        <div className="flex-1 flex items-center">
          <div className="container-wide w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center pt-24 lg:pt-0">
              {/* Left: Text Content */}
              <div ref={contentRef} className="text-white order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  香港專業驗光配鏡
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  看得更廣，
                  <br />
                  <span className="text-[#00A0E9]">生活更自在</span>
                </h2>

                <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg">
                  香港專業驗光 × 高品質漸進/變色鏡片 × 本地完善售後
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#promotion"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E30613] text-white font-semibold rounded-xl hover:bg-[#c20510] transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30 hover:-translate-y-1"
                  >
                    立即領取優惠
                  </a>
                  <a
                    href="#stores"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20"
                  >
                    尋找最近門市
                  </a>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="text-2xl font-bold">60+</div>
                    <div className="text-sm text-white/60">合作門市</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-sm text-white/60">客戶滿意度</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-2xl font-bold">15</div>
                    <div className="text-sm text-white/60">年專業經驗</div>
                  </div>
                </div>
              </div>

              {/* Right: Hero Image */}
              {heroConfig.heroImage && (
                <div
                  ref={modelRef}
                  className="relative order-1 lg:order-2 flex justify-center lg:justify-end will-change-transform"
                >
                  <div className="relative w-[80%] md:w-[60%] lg:w-full max-w-[500px]">
                    {/* Glow effect behind image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00A0E9]/30 to-transparent rounded-3xl blur-2xl transform scale-110" />
                    <img
                      src={heroConfig.heroImage}
                      alt={heroConfig.heroImageAlt}
                      className="relative w-full h-auto object-contain rounded-3xl"
                      loading="eager"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Layer 4: Overlay Text */}
      {heroConfig.overlayText && (
        <div
          ref={overlayTextRef}
          className="absolute bottom-[10%] right-[5%] z-30 will-change-transform hidden lg:block"
        >
          <p className="font-serif italic text-lg md:text-xl text-white/60 tracking-wide">
            {heroConfig.overlayText}
          </p>
        </div>
      )}
    </section>
  );
}
