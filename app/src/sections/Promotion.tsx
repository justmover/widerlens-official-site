import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { promotionConfig } from '../config';
import { Clock, Gift, Percent, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Promotion() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [timeLeft, setTimeLeft] = useState({ days: 15, hours: 23, minutes: 59, seconds: 59 });

  if (!promotionConfig.title) return null;

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation
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
        background: 'linear-gradient(135deg, #0055A4 0%, #00A0E9 100%)',
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
          </div>

          {/* Right: Countdown & CTA */}
          <div className="text-center lg:text-left">
            {/* Countdown */}
            <div className="mb-8">
              <p className="text-white/80 text-sm mb-4 flex items-center justify-center lg:justify-start gap-2">
                <Clock className="w-4 h-4" />
                {promotionConfig.countdownLabel}
              </p>
              <div className="grid grid-cols-4 gap-3 max-w-md mx-auto lg:mx-0">
                {[
                  { value: timeLeft.days, label: '天' },
                  { value: timeLeft.hours, label: '時' },
                  { value: timeLeft.minutes, label: '分' },
                  { value: timeLeft.seconds, label: '秒' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"
                  >
                    <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                      {String(item.value).padStart(2, '0')}
                    </div>
                    <div className="text-white/60 text-sm">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={promotionConfig.ctaHref}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E30613] text-white font-semibold rounded-xl hover:bg-[#c20510] transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30 hover:-translate-y-1"
              >
                {promotionConfig.ctaText}
              </a>
              <a
                href={promotionConfig.secondaryCtaHref}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                <Phone className="w-5 h-5" />
                {promotionConfig.secondaryCtaText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
