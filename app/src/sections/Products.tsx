import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { productsConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export function Products() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header — slide up
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

      // Product cards — staggered reveal
      const cards = gridRef.current?.querySelectorAll('.product-card');
      if (cards) {
        ScrollTrigger.create({
          trigger: gridRef.current,
          start: 'top 80%',
          onEnter: () => {
            gsap.fromTo(
              cards,
              { y: 60, opacity: 0, scale: 0.96 },
              {
                y: 0,
                opacity: 1,
                scale: 1,
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

  if (!productsConfig.titleRegular && productsConfig.projects.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      id="products"
      className="relative w-full py-24 md:py-32 bg-forest-dark"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-20 opacity-0">
          <div>
            {productsConfig.subtitle && (
              <p className="text-white/50 text-sm font-body uppercase tracking-widest mb-4">
                {productsConfig.subtitle}
              </p>
            )}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-white tracking-tight">
              {productsConfig.titleRegular}{' '}
              <span className="font-serif italic font-normal text-white/80">
                {productsConfig.titleItalic}
              </span>
            </h2>
          </div>
          {productsConfig.viewAllText && (
            <a
              href={productsConfig.viewAllHref || '#contact'}
              className="mt-6 md:mt-0 inline-flex items-center gap-2 text-white/70 hover:text-white font-body text-sm transition-colors duration-300 group"
            >
              {productsConfig.viewAllText}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          )}
        </div>

        {/* Products Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsConfig.projects.map((project) => (
            <div
              key={project.id}
              className="product-card group opacity-0"
            >
              <a
                href={project.link || '/products/series'}
                className="block relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-forest-dark/20 to-transparent" />
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium text-white/90 border border-white/10">
                      {project.category}
                    </span>
                  </div>
                  {/* Year */}
                  <div className="absolute top-4 right-4">
                    <span className="text-xs text-white/50 font-body">{project.year}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-sans font-bold text-white tracking-tight mb-3 group-hover:text-brand-highlight transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/60 font-body text-sm md:text-base leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-white/80 hover:text-white font-body text-sm transition-colors duration-300 group/link">
                    {productsConfig.viewProjectText}
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
