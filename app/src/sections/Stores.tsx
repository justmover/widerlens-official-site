import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { storesConfig, buildWhatsAppUrl } from '../config';
import { useStores } from '../hooks/useStores';
import { MapPin, Search } from 'lucide-react';

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
          <p className="text-[#355C7D] font-semibold mt-2">{storesConfig.statsText}</p>
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
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#355C7D] focus:border-transparent transition-all"
            />
          </div>

          {/* District Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {districts.map((district) => (
              <button
                key={district}
                onClick={() => setSelectedDistrict(district)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${selectedDistrict === district
                  ? 'bg-[#355C7D] text-white'
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
              <div className="w-8 h-8 border-2 border-[#355C7D] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
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
              className="group flex flex-col justify-between p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border border-transparent hover:border-[#355C7D]/20"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">{store.name}</h3>
                <span className="px-3 py-1 bg-[#355C7D]/10 text-[#355C7D] text-sm rounded-full">
                  {store.district}
                </span>
              </div>

              <div className="space-y-3 text-gray-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#355C7D] flex-shrink-0 mt-0.5" />
                  <span>{store.address}</span>
                </div>

              </div>

              <a
                href={buildWhatsAppUrl(`你好，我想透過WiderLens網站，想了解 ${store.name} (${store.storeCode}) 的優惠和配鏡詳情。`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 w-full py-3 bg-[#2c9a55] text-white rounded-xl hover:bg-[#128C7E] transition-colors duration-300"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp 預約配鏡
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
