import { Sun, ArrowRight } from 'lucide-react';
import { buildWhatsAppUrl } from '../../config';

export function PhotochromicLensArticle() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-16 lg:pt-40 lg:pb-20"
        style={{
          background: 'linear-gradient(135deg, #355C7D 0%, #C06C84 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center text-white">
          <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
            <Sun className="w-7 h-7" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            變色鏡片：室內透明、戶外變暗，一副眼鏡走天下
          </h1>
          <p className="text-lg text-white/90">變色鏡片完全指南</p>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              日常窘境：眼鏡與太陽眼鏡的拉扯
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">試想想這些熟悉的場景：</p>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-[#355C7D] mt-1.5">•</span>
                <span>早上趕着出門，到了地鐵站口才發現太陽眼鏡又忘在家中；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#355C7D] mt-1.5">•</span>
                <span>中午去買午餐，從商場走到街上的那十秒，強光刺得你本能地瞇起眼，手忙腳亂地在袋裏翻找墨鏡；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#355C7D] mt-1.5">•</span>
                <span>駕車時迎向夕陽，前方的路面幾乎白成一片，你努力睜眼卻仍然看不清楚交通燈；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#355C7D] mt-1.5">•</span>
                <span>周末帶小朋友去公園，他們沒有戴太陽眼鏡的習慣，你擔心他們的眼睛正被紫外線無聲侵害。</span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-4">
              在香港這個陽光與高樓大廈交錯的城市，我們每天不斷在室內與戶外之間穿梭。<strong className="text-gray-900">攜帶兩副眼鏡——一副普通近視鏡、一副太陽眼鏡——不僅麻煩，而且你總會在需要的時候，發現其中一副不在身邊。</strong>
            </p>
            <p className="text-gray-600 leading-relaxed mb-12">
              有沒有一副眼鏡，能在室內保持透明清晰，到了戶外又自動變暗保護雙眼？答案是：<strong className="text-gray-900">變色鏡片（Photochromic Lens）</strong>。
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              變色鏡片如何「看懂」光線？
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              變色鏡片的魔法，來自於鏡片材料中均勻分佈的<strong>光致變色分子（Photochromic Molecules）</strong>。目前主流的技術有兩種：
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">銀鹵化物技術（Silver Halide）</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              這是較早期的變色技術，在玻璃鏡片中嵌入極微細的氯化銀（AgCl）和溴化銀（AgBr）晶體。當受到紫外線（UV）照射時，銀離子會被還原成金屬銀微粒，這些微粒會吸收光線，令鏡片變暗；當 UV 減弱時，銀微粒會重新氧化為無色狀態，鏡片回復透明。
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">有機分子技術（Naphthopyrans）</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              現代樹脂鏡片普遍採用有機光致變色分子（如萘並吡喃 Naphthopyran）。這類分子的結構在 UV 光子照射下會發生可逆的分子重排（Molecular Rearrangement），形成具有共軛雙鍵的深色結構，吸收更多可見光，從而令鏡片變暗。當 UV 消失，分子結構自動恢復原狀，鏡片再次變回透明。
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              與銀鹵化物相比，有機分子技術的優勢在於：<strong className="text-gray-900">變色速度更快（現代鏡片通常在 30 至 60 秒內開始明顯變色）、顏色選擇更多（灰、茶、綠、藍、紫、粉紅等）、變色壽命更長（可穩定使用超過兩年）</strong>，而且不會因為長期庫存而老化失效。
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">變色的關鍵觸發條件：紫外線（UV）</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              值得注意的是，變色鏡片主要對<strong>紫外線（波長 100-400nm）</strong>作出反應，而非可見光的強弱。這意味着：
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-[#355C7D] mt-1.5">•</span>
                <span><strong>陽光普照的日子</strong>：UV 強烈，鏡片會迅速變暗；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#355C7D] mt-1.5">•</span>
                <span><strong>多雲陰天</strong>：高達 80% 的 UV 仍能穿透雲層，鏡片依然會變色，繼續保護你的眼睛；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#355C7D] mt-1.5">•</span>
                <span><strong>室內環境</strong>：普通玻璃窗會阻擋大部分 UV-B，但仍有部分 UV-A 穿透，因此變色鏡片在室內通常保持近乎全透明，不影響閱讀和工作。</span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-12">
              小提示：汽車擋風玻璃通常含有 UV 阻隔層，因此一般變色鏡片在車內變暗效果較弱。如果你主要需要駕駛時的強光防護，建議額外考慮偏光太陽鏡片。
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              為什麼眼睛需要變色保護？紫外線的隱形傷害
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              紫外線是肉眼看不見的電磁波，但它的破壞力真實而持久。眼睛是人體唯一暴露在外的感光器官，從出生起就開始累積 UV 傷害。以下是紫外線對眼睛的主要威脅：
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">1. 白內障（Cataract）</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              晶狀體長期吸收 UV 後，內部蛋白質會發生光化學變性，逐漸變得混濁、硬化，阻擋光線進入視網膜。世界衛生組織（WHO）估計，全球約 <strong className="text-gray-900">20% 的白內障病例</strong> 與長期紫外線暴露有關。這些病例本可透過簡單的 UV 防護措施預防。
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">2. 黃斑病變（AMD）</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              黃斑區是視網膜中央負責精細視力的區域。高能量 UV 和藍光會損害黃斑區的感光細胞以及視網膜色素上皮層（RPE）。一旦黃斑受損，中央視力會永久模糊、變形，嚴重影響閱讀、駕駛和辨認面孔的能力。<strong className="text-gray-900">AMD 是目前已發展國家成年人不可逆轉失明的主要原因。</strong>
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">3. 翼狀胬肉（Pterygium）與眼瞼癌</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              <strong>翼狀胬肉</strong>俗稱「眼翳」，是結膜組織受 UV 刺激後增生，逐漸向角膜蔓延的三角形肉膜。輕則影響外觀和散光，重則遮蓋瞳孔影響視力，需手術切除。長期 UV 暴露也會增加眼瞼皮膚患上基底細胞癌和鱗狀細胞癌的風險。
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">4. 光性角膜炎（Photokeratitis）</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              這是角膜被過量 UV 灼傷的急性反應，常發生於海灘、雪地或長時間戶外活動後。症狀包括劇痛、畏光、流淚和視力模糊，俗稱「雪盲」或「電焊眼」。雖然通常可在數日內自愈，但反覆發作會損害角膜健康。
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">5. 兒童更需重視 UV 防護</h3>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-[#355C7D] mt-1.5">•</span>
                <span><strong>兒童的瞳孔比成年人更大</strong>，更多 UV 能直達眼底；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#355C7D] mt-1.5">•</span>
                <span><strong>兒童的晶狀體更透明</strong>，過濾 UV 的能力較弱；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#355C7D] mt-1.5">•</span>
                <span>研究顯示，<strong className="text-gray-900">18 歲前累積的終身 UV 暴露量約佔總量的 80%</strong>，因為兒童戶外活動時間遠超成人。</span>
              </li>
            </ul>
            <p className="text-gray-900 font-medium leading-relaxed mb-12">
              為孩子選配一副具備變色功能的鏡片，是對他們一生眼健康最明智的投資之一。
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              不同變色顏色，適合什麼場合？
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              變色鏡片並非只有黑色或灰色。不同顏色對光線的過濾特性不同，適合不同活動：
            </p>
            <div className="overflow-x-auto mb-12">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="py-3 pr-4 text-gray-900 font-bold">顏色</th>
                    <th className="py-3 pr-4 text-gray-900 font-bold">光學特性</th>
                    <th className="py-3 text-gray-900 font-bold">適合場合</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium text-gray-900">灰色</td>
                    <td className="py-3 pr-4">均勻降低所有可見光強度，色彩真實度最高，不會偏色</td>
                    <td className="py-3">日常通勤、駕駛、需要準確辨色的工作（如設計師）</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium text-gray-900">茶色（棕色）</td>
                    <td className="py-3 pr-4">過濾藍光效果較佳，增強對比度和深度感，令景物輪廓更立體</td>
                    <td className="py-3">高爾夫球、網球、釣魚、開車（陰天時特別有用）</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium text-gray-900">綠色</td>
                    <td className="py-3 pr-4">平衡灰色與茶色的優點，減少眩光同時保持自然色彩</td>
                    <td className="py-3">戶外活動、日常多功能使用</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-gray-900">藍色 / 紫色 / 粉紅</td>
                    <td className="py-3 pr-4">時尚色彩，同樣具備 UV 防護功能，適合追求個人風格的用家</td>
                    <td className="py-3">休閒社交、運動時尚、潮流搭配</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              變色鏡片 vs 普通太陽眼鏡：怎樣選？
            </h2>
            <div className="overflow-x-auto mb-12">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="py-3 pr-4 text-gray-900 font-bold">比較項目</th>
                    <th className="py-3 pr-4 text-gray-900 font-bold">變色鏡片</th>
                    <th className="py-3 text-gray-900 font-bold">普通太陽眼鏡 / 染色鏡片</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium text-gray-900">室內使用</td>
                    <td className="py-3 pr-4">近乎透明，可全日佩戴</td>
                    <td className="py-3">顏色固定，室內會過暗</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium text-gray-900">變暗程度</td>
                    <td className="py-3 pr-4">隨 UV 強度自動調節</td>
                    <td className="py-3">固定不變</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium text-gray-900">方便度</td>
                    <td className="py-3 pr-4">一副眼鏡全天候使用</td>
                    <td className="py-3">需攜帶兩副眼鏡，隨時切換</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium text-gray-900">度數配合</td>
                    <td className="py-3 pr-4">可直接做近視、遠視、散光度數</td>
                    <td className="py-3">需另外配度數太陽鏡，成本較高</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-gray-900">駕車適用性</td>
                    <td className="py-3 pr-4">車內變暗有限（因擋風玻璃阻隔 UV）</td>
                    <td className="py-3">偏光太陽鏡駕駛效果更佳</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 leading-relaxed mb-12">
              <strong className="text-gray-900">結論</strong>：如果你經常在室內外穿梭，不想攜帶兩副眼鏡，變色鏡片是 convenience 與防護兼備的理想方案；如果你長時間在強光戶外或水上活動，可額外準備一副偏光太陽鏡作為專用配備。
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              如何選擇適合自己的變色鏡片？
            </h2>

            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                👉 追求經典實用、百搭所有場合——建議 <a href="/products/photochromic" className="text-[#355C7D] hover:underline">Photochange 變色 S3 系列（灰 / 茶）</a>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                S3 系列提供灰色與茶色兩種經典選擇。灰色讓你在戶外享有最真實的色彩還原；茶色則在陰天或黃昏時提供更佳的對比度。<strong className="text-gray-900">這是最受香港用家歡迎的入門之選</strong>，無論是上班通勤、周末行山，還是帶小朋友去公園，都能從容應對。
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                👉 熱愛戶外運動、注重時尚風格——建議 <a href="/products/photochromic" className="text-[#355C7D] hover:underline">Photochange 變色系列（綠 / 藍 / 紫 / 粉紅）</a>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                多達四種時尚色系，讓你的眼鏡成為造型一部分。綠色適合長時間戶外活動；藍色、紫色、粉紅則為休閒場合增添個人特色。<strong className="text-gray-900">變色速度敏捷，回到室內後迅速回復透明，不會讓你在室內顯得突兀。</strong>
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-12">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                👉 想要最全面的防護與清晰度——建議 <a href="/products/photochromic" className="text-[#355C7D] hover:underline">Photochange UV PLUS LRC 複合系列</a>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                如果你對視覺質素有更高要求，可選擇結合變色、UV 防護與 LRC 高清低反鍍膜的複合鏡片。戶外時自動變暗阻隔強光與 UV，室內時享受高清低反的清晰視野，夜間駕駛也同樣舒適。<strong className="text-gray-900">一副鏡片，全天候、全場景的頂級視覺體驗。</strong>
              </p>
            </div>

            <blockquote className="border-l-4 border-[#355C7D] pl-6 py-2 bg-gray-50 rounded-r-xl mb-12">
              <p className="text-gray-900 font-medium leading-relaxed">
                總結：陽光與紫外線無處不在，而眼睛的傷害卻是日積月累、難以逆轉。變色鏡片讓你無需再為「帶不帶太陽眼鏡」而煩惱，室內透明、戶外自動變暗，用最優雅的方式守護雙眼。與其讓紫外線悄悄偷走你的清晰視界，不如從今天開始，讓一副聰明的變色鏡片為你全天候站崗。
              </p>
            </blockquote>
          </div>
        </div>
      </article>

      {/* Related Product CTA */}
      <section className="py-16 bg-[#355C7D]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            探索 WiderLens 變色鏡片系列
          </h2>
          <p className="text-white/80 mb-8">
            從經典灰茶到時尚彩色，找到最適合你的變色鏡片
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products/photochromic"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C06C84] text-white font-semibold rounded-xl hover:bg-[#A05068] transition-all"
            >
              <ArrowRight className="w-5 h-5" />
              探索變色鏡片產品
            </a>
            <a
              href={buildWhatsAppUrl('你好，我想了解變色鏡片的詳情。')}
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
