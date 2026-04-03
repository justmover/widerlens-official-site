import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { storesConfig } from '../config';
import { useStores } from '../hooks/useStores';
import { MapPin, Phone, Clock, Search, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Stores() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('全部');
  const { stores, loading, error } = useStores();

  if (!storesConfig.title) return null;

  const allDistricts = Array.from(new Set(stores.map((s) => s.district)));
  const districts = ['全部', ...allDistricts];

  const filteredStores = stores.filter((store) => {
    const matchesSearch =
      store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDistrict = selectedDistrict === '全部' || store.district === selectedDistrict;
    return matchesSearch && matchesDistrict;
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
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
  }, [stores]);

  return (
    <section
      ref={sectionRef}
      id="stores"
      className="relative w-full py-24 lg:py-32 bg-white"
    >
      <div ref={contentRef} className="container-wide">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {storesConfig.title}
          </h2>
          <p className="text-lg text-gray-600">{storesConfig.subtitle}</p>
          <p className="text-[#0055A4] font-semibold mt-2">{storesConfig.statsText}</p>
        </div>

        {/* Search & Filter */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={storesConfig.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0055A4] focus:border-transparent transition-all"
            />
          </div>

          {/* District Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {districts.map((district) => (
              <button
                key={district}
                onClick={() => setSelectedDistrict(district)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedDistrict === district
                    ? 'bg-[#0055A4] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {district}
              </button>
            ))}
          </div>
        </div>

        {/* Store Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading && (
            <div className="md:col-span-2 lg:col-span-3 text-center py-12 text-gray-500">
              <div className="w-8 h-8 border-2 border-[#0055A4] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p>載入門市資料中...</p>
            </div>
          )}

          {!loading && error && (
            <div className="md:col-span-2 lg:col-span-3 text-center py-12 text-red-500">
              <p>無法載入門市資料，請稍後再試</p>
              <p className="text-sm mt-1 text-red-400">{error}</p>
            </div>
          )}

          {!loading && filteredStores.map((store) => (
            <div
              key={store.id}
              className="group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border border-transparent hover:border-[#0055A4]/20"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">{store.name}</h3>
                <span className="px-3 py-1 bg-[#0055A4]/10 text-[#0055A4] text-sm rounded-full">
                  {store.district}
                </span>
              </div>

              <div className="space-y-3 text-gray-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0055A4] flex-shrink-0 mt-0.5" />
                  <span>{store.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#0055A4] flex-shrink-0" />
                  <span>{store.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#0055A4] flex-shrink-0" />
                  <span>{store.hours}</span>
                </div>
              </div>

              <a
                href={`https://wa.me/852${store.phone.replace(/\s/g, '')}`}
                className="mt-6 flex items-center justify-center gap-2 w-full py-3 bg-[#0055A4] text-white rounded-xl hover:bg-[#004a8c] transition-colors duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                WhatsApp 查詢
              </a>
            </div>
          ))}
        </div>

        {filteredStores.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <MapPin className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>找不到符合條件的門市，請嘗試其他搜尋條件</p>
          </div>
        )}
      </div>
    </section>
  );
}
