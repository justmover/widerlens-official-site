import { Shield, ArrowRight } from 'lucide-react';
import { buildWhatsAppUrl } from '../../config';

export function LensCoatingArticle() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-16 lg:pt-40 lg:pb-20"
        style={{
          background: 'linear-gradient(135deg, #355C7D 0%, #2A3D52 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center text-white">
          <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
            <Shield className="w-7 h-7" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            鏡片鍍膜：看不見的保護層，看得見的差別
          </h1>
          <p className="text-lg text-white/90">鏡片鍍膜完全指南</p>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              這些惱人的日常，你也遇過嗎？
            </h2>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-[#355C7D] mt-1.5">•</span>
                <span>晚上開車，對面來車的車頭燈像兩個光暈炸開，刺眼得令你幾乎睜不開眼；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#355C7D] mt-1.5">•</span>
                <span>對着電腦工作八小時後，眼睛乾澀、脹痛，甚至連帶頭痛；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#355C7D] mt-1.5">•</span>
                <span>新買的眼鏡才戴兩個月，鏡面已佈滿細微刮痕，怎樣擦都擦不走；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#355C7D] mt-1.5">•</span>
                <span>下雨天一出門，鏡片瞬間佈滿水珠，視野一片模糊；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#355C7D] mt-1.5">•</span>
                <span>鏡片永遠沾滿指紋和灰塵，一天要掏出眼鏡布擦十幾次。</span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-12">
              你可能以為這些都是「眼鏡的宿命」。事實上，<strong className="text-gray-900">一副鏡片的表現，有近半取決於它的鍍膜（Lens Coating）</strong>。鍍膜是塗佈在鏡片表面的一層或多層極薄光學薄膜，肉眼幾乎看不見，卻在背後主宰着透光率、清晰度、耐用度，甚至你的眼睛健康。
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              鍍膜到底在做什麼？從光學原理說起
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              當光線照射到鏡片表面時，大約有 <strong className="text-gray-900">4% 至 8% 的光會被反射掉</strong>，而不是穿透鏡片進入你的眼睛。一副眼鏡有兩塊鏡片、兩個表面（前表面和後表面），合共四個介面，這意味着你可能失去了 <strong className="text-gray-900">15% 甚至更多的有效光線</strong>。這不僅令視野變暗，更會產生惱人的反光和鬼影（Ghost Image），尤其在夜間或強光環境下特別明顯。
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">減反射鍍膜（Anti-Reflective Coating, AR）</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              減反射鍍膜的原理稱為<strong>破壞性干涉（Destructive Interference）</strong>。科學家利用真空鍍膜技術，在鏡片表面交替蒸鍍多層極薄的金屬氧化物（如氟化鎂 MgF₂、氧化矽 SiO₂ 等），每層厚度僅為數百納米（約為頭髮直徑的千分之一）。
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              當光線進入這些薄膜時，會在每一層介面產生反射。透過精確控制每層的厚度和折射率，令不同界面的反射光波相遇時相位相反、互相抵消，<strong className="text-gray-900">將鏡片表面的反射率由 8% 大幅降至 1% 以下</strong>。結果是：更多光線進入眼睛，視野更明亮清晰；同時旁人看你時，鏡片表面的反光大幅減少，<strong className="text-gray-900">雙眼輪廓更明顯，外觀更自然</strong>。
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">防藍光鍍膜（Blue Light Coating）</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              電子屏幕、LED 燈具會釋放大量波長 400-450nm 的<strong>高能量可見光藍光（High-Energy Visible Blue Light）</strong>。從光學角度，這段波長的光子能量較高，能穿透角膜和晶狀體直達視網膜。
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              雖然自然陽光中的藍光強度遠超屏幕，但我們日常與屏幕的距離極近（通常 30-60 厘米），且使用時間長（平均每天 6-10 小時），<strong className="text-gray-900">累積的藍光暴露量不容忽視</strong>。研究顯示，過量藍光會：
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-[#355C7D] mt-1.5">•</span>
                <span><strong>抑制褪黑激素（Melatonin）分泌高達 50% 以上</strong>，擾亂生理時鐘，導致入睡困難、睡眠質素下降；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#355C7D] mt-1.5">•</span>
                <span>引發<strong>數碼視覺疲勞（Digital Eye Strain）</strong>，症狀包括眼睛乾澀、灼熱感、視力模糊和頭痛；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#355C7D] mt-1.5">•</span>
                <span>長期而言，可能加速視網膜色素上皮細胞（RPE）的氧化損傷，與<strong>老年性黃斑病變（AMD）</strong>的風險存在關聯。</span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-6">
              防藍光鍍膜並非簡單把鏡片染黃。優質的防藍光鍍膜是透過多層光學干涉膜系，<strong className="text-gray-900">選擇性反射或吸收有害藍光波段</strong>，同時盡量保留其他可見光的真實色彩，避免鏡片出現明顯泛黃或藍色反光。
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">超潑水與防污鍍膜（Hydrophobic & Oleophobic Coating）</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              這類鍍膜在鏡片表面形成一層極低表面能的氟化物分子層，令<strong>水滴與鏡片的接觸角（Contact Angle）提升至 110 度以上</strong>。根據表面張力物理學，當接觸角大於 90 度時，水珠無法鋪展，會自動收縮成圓球狀滾落，而不是黏附在鏡面上形成水膜。同樣原理也適用於油脂和指紋——油污不易附着，即使沾上，也只需輕輕一抹就能擦淨。
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">硬化鍍膜（Hard Coating）</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              樹脂鏡片（CR-39 或高折射率材料）雖然輕巧安全，但表面硬度遠低於玻璃，容易被沙粒、鑰匙、衣物纖維刮傷。硬化鍍膜通常以有機矽（Silicone-based）或類鑽碳（DLC-like）材料為基礎，透過浸塗或真空鍍膜方式在鏡片表面形成堅韌的保護層，<strong className="text-gray-900">將表面硬度提升至 6H-8H（鉛筆硬度測試）</strong>，大幅延長鏡片使用壽命。
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">防紫外線鍍膜（UV Coating）</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              紫外線（UV）按波長分為 UVA（315-400nm）、UVB（280-315nm）和 UVC（100-280nm）。UVC 幾乎被臭氧層吸收，但 UVA 和 UVB 可穿透大氣層，對眼睛造成累積性傷害：
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-[#355C7D] mt-1.5">•</span>
                <span><strong>白內障（Cataract）</strong>：長期 UV 暴露會加速晶狀體蛋白質變性混濁，這是全球首要的致盲原因；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#355C7D] mt-1.5">•</span>
                <span><strong>翼狀胬肉（Pterygium）</strong>：俗稱「眼翳」，是結膜組織增生覆蓋角膜的良性病變，與長期戶外 UV 暴露密切相關；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#355C7D] mt-1.5">•</span>
                <span><strong>光性角膜炎（Photokeratitis）</strong>：俗稱「雪盲」，是角膜被 UV 灼傷的急性反應，劇痛流淚，需數日康復；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#355C7D] mt-1.5">•</span>
                <span><strong>黃斑病變（AMD）</strong>：高能量 UV 和藍光會損害視網膜黃斑區的感光細胞，造成的視力損失不可逆轉。</span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-12">
              優質的 UV 鍍膜能<strong className="text-gray-900">阻擋 99% 以上的 UVA 和 UVB</strong>，部分鍍膜更可將防護延伸至 400nm 的「有害藍光」區域，達到 UV400 標準。
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              鍍膜對眼睛健康的長遠影響
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              很多人買眼鏡時只關注度數準不準、鏡片薄不薄，卻忽略了鍍膜對日常視覺舒適度和長期眼健康的決定性作用。
            </p>
            <ul className="space-y-3 text-gray-600 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-[#355C7D] mt-1.5">•</span>
                <span><strong>沒有減反射鍍膜的鏡片</strong>：眼睛需要更用力去辨識被反光干擾的影像，長期加劇視覺疲勞；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#355C7D] mt-1.5">•</span>
                <span><strong>沒有防藍光鍍膜的鏡片</strong>：長期屏幕使用者更容易出現睡眠障礙和慢性眼乾；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#355C7D] mt-1.5">•</span>
                <span><strong>沒有 UV 防護的鏡片</strong>：即使在陰天，高達 80% 的 UV 仍能穿透雲層，日積月累地傷害眼睛內部組織。</span>
              </li>
            </ul>
            <p className="text-gray-900 font-medium leading-relaxed mb-12">
              鍍膜不是可有可無的「附加品」，而是鏡片功能的核心組成部分。
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              如何選擇適合自己的鍍膜？
            </h2>

            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                👉 日常通用、追求高清晰度與自然外觀——建議 <a href="/products/series" className="text-[#355C7D] hover:underline">LRC 高清低反鍍膜</a>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                LRC（Low Reflection Coating）是我們的旗艦鍍膜方案，結合減反射、硬化、防污、防水、防塵五大效能。它幾乎消除了鏡面反光，讓你的雙眼在拍照或與人交談時更清晰可見；同時具備優異的潑水防污性能，雨天出行或日常清潔都輕鬆得多。<strong className="text-gray-900">適合幾乎所有生活場景，是入門升級的首選。</strong>
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                👉 每日對着電腦、手機超過六小時——建議 <a href="/products/series" className="text-[#355C7D] hover:underline">UV PLUS 濾藍光鍍膜</a>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                專為數碼時代設計的 UV PLUS 鍍膜，能有效過濾高能量藍光，同時保持鏡片清透不泛黃、表面不帶明顯藍色反光。它不會影響你對色彩的判斷（設計師、攝影師同樣適用），卻能顯著減少長時間屏幕使用後的眼睛疲勞與乾澀感，<strong className="text-gray-900">幫助你在晚間維持正常的褪黑激素分泌，改善睡眠質素</strong>。
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-12">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                👉 戶外運動愛好者、經常進出冷氣房——建議 <a href="/products/series" className="text-[#355C7D] hover:underline">結合 LRC + UV PLUS 的全效鍍膜</a>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                如果你經常進行戶外活動，同時又離不開電子屏幕，可以選擇搭載多重鍍膜的鏡片組合。全面阻隔 UV 與有害藍光，同時享受高清低反與易潔防污的便利，<strong className="text-gray-900">無論室內室外，一副眼鏡搞定所有防護需求</strong>。
              </p>
            </div>

            <blockquote className="border-l-4 border-[#355C7D] pl-6 py-2 bg-gray-50 rounded-r-xl mb-12">
              <p className="text-gray-900 font-medium leading-relaxed">
                總結：鍍膜是鏡片的「隱形盔甲」。它不會改變你的度數，卻能徹底改變你戴眼鏡的體驗——更亮、更清、更舒服、更耐用。下次配鏡時，不妨多花一分鐘了解鍍膜選項，為你的眼睛選擇真正全面的保護。
              </p>
            </blockquote>
          </div>
        </div>
      </article>

      {/* Related Product CTA */}
      <section className="py-16 bg-[#355C7D]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            探索 WiderLens 鏡片產品系列
          </h2>
          <p className="text-white/80 mb-8">
            全系列鏡片均支援 LRC 高清低反及 UV PLUS 濾藍光鍍膜升級
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products/series"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C06C84] text-white font-semibold rounded-xl hover:bg-[#A05068] transition-all"
            >
              <ArrowRight className="w-5 h-5" />
              探索鏡片產品系列
            </a>
            <a
              href={buildWhatsAppUrl('你好，我想了解鏡片鍍膜的詳情。')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20"
            >
              WhatsApp 查詢
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
