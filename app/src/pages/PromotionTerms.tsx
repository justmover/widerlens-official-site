import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, FileText, Phone } from 'lucide-react';
import { buildWhatsAppUrl } from '../config';

gsap.registerPlugin(ScrollTrigger);

const terms = [
  {
    title: '1. 活動名稱',
    content: 'Wider 漸進鏡片「新客專享」配鏡優惠',
  },
  {
    title: '2. 活動內容',
    content:
      '顧客於指定門市選購 Wider 漸進鏡片一副，即可免費獲贈 1.6 防藍光纖維鏡片一副（下稱「贈品」）。',
  },
  {
    title: '3. 參加資格',
    items: [
      '僅限首次光顧之新客戶參與。',
      '每位合資格客戶只可參與一次，並將獲發專屬優惠兌換碼（Promotion Code）一個。',
    ],
  },
  {
    title: '4. 優惠兌換碼條款',
    items: [
      '獨立編碼：每個優惠碼均為獨立生成，僅供單一客戶使用一次。',
      '指定門市限制：優惠碼只適用於本公司指定之參與門市，不可跨店或於網店使用。',
      '不可轉讓：優惠碼不得轉讓、兌換現金或與其他優惠同時使用。',
    ],
  },
  {
    title: '5. 贈品領取安排',
    items: [
      '顧客須先完成選購及提交 Wider 漸進鏡片之訂單。',
      '領取期限：贈品必須於漸進鏡片訂單提交之日起計 14 天內親臨同一門市領取，逾期作廢，恕不補發。',
      '領取時須出示有效優惠碼及身份證明文件以作核實。',
    ],
  },
  {
    title: '6. 贈品規格及限制',
    items: [
      '贈品為 1.60 折射率防藍光纖維鏡片一對，度數範圍以現貨供應為準。',
      '如顧客需升級鏡片規格（如更高折射率、附加鍍膜等），須補回差價。',
      '贈品不包含鏡架及驗光費用。',
    ],
  },
  {
    title: '7. 一般條款',
    items: [
      '本公司保留隨時修改、暫停或取消本活動之權利，恕不另行通知。',
      '如有任何爭議，本公司保留最終決定權。',
      '優惠受有關條款及細則約束，詳情請向店員查詢。',
    ],
  },
];

export function PromotionTerms() {
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
              <FileText className="w-7 h-7" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              推廣活動條款及細則
            </h1>
            <p className="text-xl text-white/90">Wider 漸進鏡片「新客專享」配鏡優惠</p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section
        ref={(el) => addToRefs(el, 1)}
        className="py-16 lg:py-24 bg-white"
      >
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="space-y-10">
            {terms.map((term, index) => (
              <div key={index} className="animate-in">
                <h2 className="text-xl font-bold text-gray-900 mb-3">{term.title}</h2>
                {term.content && (
                  <p className="text-gray-600 leading-relaxed">{term.content}</p>
                )}
                {term.items && (
                  <ul className="space-y-2">
                    {term.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                        <span className="w-1.5 h-1.5 bg-[#355C7D] rounded-full mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="animate-in mt-16 pt-10 border-t border-gray-100 text-center">
            <p className="text-gray-500 text-sm mb-6">
              如有任何疑問，歡迎透過 WhatsApp 與我們聯絡。
            </p>
            <a
              href={buildWhatsAppUrl('你好，我想查詢推廣活動的條款及細則。')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C06C84] text-white font-semibold rounded-xl hover:bg-[#A05068] transition-all"
            >
              <Phone className="w-5 h-5" />
              WhatsApp 查詢
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
