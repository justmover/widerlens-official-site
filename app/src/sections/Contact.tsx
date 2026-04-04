import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { contactConfig } from '../config';
import { Mail, Clock, Send, MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiryType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!contactConfig.title) return null;

  const inquiryTypes = ['一般查詢', '預約驗光', '產品諮詢', '售後服務', '合作洽談'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const text = `你好，我想查詢WiderLens產品優惠。\n\n姓名：${formData.name}\n電話：${formData.phone}\n電郵：${formData.email || '未提供'}\n查詢類型：${formData.inquiryType || '未選擇'}\n訊息：${formData.message || '未填寫'}`;
    const whatsappNumber = contactConfig.whatsapp.replace(/\+/g, '').replace(/\s/g, '');
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, '_blank');

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', phone: '', email: '', inquiryType: '', message: '' });
  };

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
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full py-24 lg:py-32 bg-gray-50"
    >
      <div ref={contentRef} className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {contactConfig.title}
          </h2>
          <p className="text-lg text-gray-600">{contactConfig.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <a
                href={`https://wa.me/${contactConfig.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}?text=${encodeURIComponent('你好，我想查詢WiderLens產品優惠。')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">WhatsApp</p>
                  <p className="text-xl font-semibold text-gray-900">{contactConfig.whatsapp}</p>
                </div>
              </a>

              <a
                href={`mailto:${contactConfig.email}`}
                className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <div className="w-14 h-14 bg-[#0055A4] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">電郵</p>
                  <p className="text-xl font-semibold text-gray-900">{contactConfig.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm">
                <div className="w-14 h-14 bg-[#00A0E9] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">營業時間</p>
                  <p className="text-xl font-semibold text-gray-900">{contactConfig.hours}</p>
                </div>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="p-6 bg-gradient-to-br from-[#0055A4] to-[#00A0E9] rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-3">需要即時協助？</h3>
              <p className="text-white/80 mb-4">透過 WhatsApp 與我們聯繫，獲得即時回覆</p>
              <a
                href={`https://wa.me/${contactConfig.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}?text=${encodeURIComponent('你好，我想查詢WiderLens產品優惠。')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0055A4] font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                開始對話
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{contactConfig.formTitle}</h3>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-10 h-10 text-green-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">訊息已發送！</h4>
                  <p className="text-gray-600 mb-6">我們會盡快與您聯繫</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 bg-[#0055A4] text-white rounded-xl hover:bg-[#004a8c] transition-colors duration-300"
                  >
                    發送新訊息
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        姓名 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0055A4] focus:border-transparent transition-all"
                        placeholder="您的姓名"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        電話 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0055A4] focus:border-transparent transition-all"
                        placeholder="您的電話號碼"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        電郵
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0055A4] focus:border-transparent transition-all"
                        placeholder="您的電郵地址"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        查詢類型
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0055A4] focus:border-transparent transition-all appearance-none"
                      >
                        <option value="">請選擇</option>
                        {inquiryTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      訊息
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0055A4] focus:border-transparent transition-all resize-none"
                      placeholder="請輸入您的訊息..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#0055A4] text-white font-semibold rounded-xl hover:bg-[#004a8c] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        發送中...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {contactConfig.submitText}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
