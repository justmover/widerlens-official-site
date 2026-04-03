import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layers, Sun, Eye, ShieldCheck, type LucideIcon } from 'lucide-react';
import { servicesConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, LucideIcon> = {
  Layers,
  Sun,
  Eye,
  ShieldCheck,
};

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  if (!servicesConfig.titleLine1 && servicesConfig.services.length === 0) return null;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading — slide up
      ScrollTrigger.create({
        trigger: headingRef.current,
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(
            headingRef.current,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
          );
        },
        once: true,
      });

      // Service cards — staggered slide up
      const cards = gridRef.current?.querySelectorAll('.service-card');
      if (cards) {
        ScrollTrigger.create({
          trigger: gridRef.current,
          start: 'top 78%',
          onEnter: () => {
            gsap.fromTo(
              cards,
              { y: 60, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.9,
                ease: 'power3.out',
                stagger: 0.12,
              }
            );
          },
          once: true,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="advantages"
      className="relative w-full py-24 md:py-32"
      style={{ backgroundColor: '#1A1A1A' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left Column - Heading */}
          <div ref={headingRef} className="opacity-0">
            {servicesConfig.subtitle && (
              <p className="text-white/50 text-sm font-body uppercase tracking-widest mb-4">
                {servicesConfig.subtitle}
              </p>
            )}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white tracking-tight leading-tight">
              {servicesConfig.titleLine1}
              <br />
              <span className="font-serif italic font-normal text-[#00A0E9]">
                {servicesConfig.titleLine2Italic}
              </span>
            </h2>
            {servicesConfig.description && (
              <p className="mt-6 text-white/60 font-body text-base md:text-lg max-w-md leading-relaxed">
                {servicesConfig.description}
              </p>
            )}
          </div>

          {/* Right Column - Services Grid */}
          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
            {servicesConfig.services.map((service, index) => {
              const Icon = iconMap[service.iconName] || Layers;
              const CardContent = (
                <>
                  <div className="mb-4">
                    <div className="w-14 h-14 bg-[#0055A4]/20 rounded-xl flex items-center justify-center group-hover:bg-[#0055A4]/30 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-[#00A0E9] group-hover:text-[#00A0E9] transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-sans font-semibold text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/50 font-body leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Arrow indicator */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-5 h-5 text-[#00A0E9]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </>
              );

              return service.link ? (
                <a
                  key={index}
                  href={service.link}
                  className="service-card group p-6 md:p-8 opacity-0 transition-all duration-500 hover:bg-white/5 cursor-pointer"
                  style={{ backgroundColor: '#1A1A1A' }}
                >
                  {CardContent}
                </a>
              ) : (
                <div
                  key={index}
                  className="service-card group p-6 md:p-8 opacity-0 transition-all duration-500 hover:bg-white/5"
                  style={{ backgroundColor: '#1A1A1A' }}
                >
                  {CardContent}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
