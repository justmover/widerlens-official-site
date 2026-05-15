import { Eye, ArrowRight } from 'lucide-react';
import { buildWhatsAppUrl } from '../../config';

export function ProgressiveLensArticle() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-16 lg:pt-40 lg:pb-20"
        style={{
          background: 'linear-gradient(135deg, #355C7D 0%, #F8B195 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center text-white">
          <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
            <Eye className="w-7 h-7" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            漸進鏡片：一副眼鏡，搞定遠近視界
          </h1>
          <p className="text-lg text-white/90">漸進鏡片完全指南</p>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              日常困擾：為什麼看近越來越吃力？
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              你有沒有試過這些情境？
            </p>
            <ul className="space-y-3 text-gray-600 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-[#355C7D] mt-1.5">•</span>
                <span>在餐廳想看清菜單，卻發現手機要愈拿愈遠，最後還是要從袋裏掏出老花眼鏡，動作狼狽；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#355C7D] mt-1.5">•</span>
                <span>開車時望清路面沒問題，但一看儀表板或導航屏幕就變得模糊；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#355C7D] mt-1.5">•</span>
                <span>辦公室對着電腦一整天，脖子和肩膀又痠又痛，原來是因為要不停仰頭、側身去「遷就」鏡片的清晰區域；</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#355C7D] mt-1.5">•</span>
                <span>書桌上永遠擺着兩副眼鏡——一副看遠，一副看近，來回切換，煩不勝煩。</span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-12">
              如果你已年過四十，這些狀況大概不陌生。這不是眼鏡的錯，而是你的眼睛正在經歷一個自然的生理變化：<strong className="text-gray-900">老花（Presbyopia）</strong>。
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              眼睛裏發生了什麼事？
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              我們的眼睛裏有一塊名叫<strong>晶狀體（Lens）</strong>的透明組織，負責把光線聚焦到視網膜上。晶狀體四周環繞着<strong>睫狀肌（Ciliary Muscle）</strong>，當我們看近物時，睫狀肌會收緊，令晶狀體變厚、屈光力增強，這個過程稱為<strong>調節（Accommodation）</strong>。
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              年輕時，晶狀體柔軟有彈性，調節幅度可達十幾個屈光度，看遠看近遊刃有餘。但隨着年齡增長，晶狀體的蛋白質逐漸硬化，彈性減弱，睫狀肌的力量也隨之衰退。<strong className="text-gray-900">一般來說，四十歲後調節能力會大幅下降</strong>，導致看近時無法清晰對焦。這就是老花——它不是疾病，而是每個人都會遇到的生理現象。
            </p>
            <p className="text-gray-600 leading-relaxed mb-12">
              問題是，如果你本身已有近視或遠視，再加上老花，情況就更複雜。傳統的單光鏡片只能矯正一個距離，這意味着你<strong className="text-gray-900">不可能只用一副眼鏡同時看清馬路對面的招牌和手中的報紙</strong>。
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              漸進鏡片：一條走廊，連接三個世界
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              漸進鏡片（Progressive Lens）的誕生，正是為了解決這個兩難局面。
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              與傳統雙光鏡（Bifocal）那種有明顯分界線的設計不同，漸進鏡片採用<strong className="text-gray-900">連續漸變的度數設計</strong>：鏡片上方是遠用區（看馬路、電視），中間是一條逐漸過渡的「走廊」（看電腦、儀表板），下方則是近用區（看手機、書本）。<strong className="text-gray-900">整個鏡片沒有明顯的分割線，外觀與普通鏡片無異</strong>，別人完全看不出你戴的是漸進鏡。
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">為什麼漸進鏡片比雙光鏡更好？</h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              雙光鏡雖然也能同時看遠看近，但兩個區域之間的跳躍過於突兀，中距離（如電腦屏幕）往往處於模糊地帶；而且鏡片上那條明顯的線不僅影響外觀，更會造成「像跳（Image Jump）」，令人走路時有踏空感。
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              漸進鏡片則提供<strong className="text-gray-900">由遠至近的連續清晰視野</strong>，無論你是看遠方海景、與同事開會看投影，還是低頭回覆 WhatsApp，都只需自然轉動眼球，無需頻繁摘戴眼鏡。
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">數碼自由曲面技術：現代漸進鏡片的靈魂</h3>
            <p className="text-gray-600 leading-relaxed mb-12">
              早期的漸進鏡片採用模具壓制，設計固定，無法因應個人度數和佩戴習慣調整，導致邊緣變形區較大，新用戶適應期長。現代高端漸進鏡片採用<strong className="text-gray-900">數碼自由曲面技術（Digital Freeform Technology）</strong>。簡單來說，就是以電腦精密運算，根據你的處方度數、鏡框形狀、瞳孔位置，逐點優化鏡片表面的曲率。這就像為你的眼睛量身訂造一幅「視覺地圖」，<strong className="text-gray-900">大幅提升中距離和近用區的寬度，同時將周邊變形和泳動效應（Swim Effect）降至最低</strong>。
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              長期忽視老花，對眼睛健康有什麼影響？
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              很多人以為「老花忍一忍就好」，但長期處於調節不足的狀態，會迫使眼睛和身體作出代償：
            </p>
            <ol className="space-y-4 text-gray-600 mb-8 list-decimal list-inside">
              <li>
                <strong>調節痙攣（Accommodative Spasm）</strong>：眼睛為了強行對焦，睫狀肌長期處於緊張狀態，無法放鬆，導致視力波動、看遠也模糊。
              </li>
              <li>
                <strong>視疲勞與頭痛</strong>：眼睛持續過度用力，會引發眉心脹痛、太陽穴抽痛，甚至偏頭痛。
              </li>
              <li>
                <strong>頸肩痠痛</strong>：為了尋找鏡片的清晰點，很多人會不自覺地伸長脖子、抬高下巴，長期導致頸椎勞損和姿勢不良。
              </li>
              <li>
                <strong>情緒與生活質素下降</strong>：閱讀困難會減少閱讀意欲，社交場合頻繁摘戴眼鏡也會帶來心理壓力。
              </li>
            </ol>
            <p className="text-gray-900 font-medium leading-relaxed mb-12">
              一副合適的漸進鏡片，不只是讓你看清楚，更是減輕眼睛負擔、保護整體生活質素的重要投資。
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              如何選擇適合自己的漸進鏡片？
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              漸進鏡片並非「一個款式走天下」。不同設計針對不同生活型態，選對了，適應快、用得舒服；選錯了，可能覺得「怎麼邊緣這麼暈」。
            </p>

            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                👉 如果你經常開會、看電腦、用手機——建議 <a href="/products/series" className="text-[#355C7D] hover:underline">Wider 4K Series</a>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                採用德國 Optotech 的 Extended Design 延展設計，以數碼演算大幅擴闊中距離視野。<strong className="text-gray-900">對於第一次配戴漸進鏡片的人士特別友好</strong>，遠中近切換流暢自然，辦公室工作和日常通勤都能輕鬆應付。
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                👉 如果你長時間駕駛、夜間外出、對眩光敏感——建議 <a href="/products/series" className="text-[#355C7D] hover:underline">Wider 3D-Series</a>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                結合 3D 自由曲面演算與 LRC 高清低反鍍膜，顯著減少夜間車頭燈和屏幕反光帶來的眩光干擾。多段走廊選擇（12 / 14 / 16mm）可因應你的佩戴習慣和鏡框大小精準匹配，<strong className="text-gray-900">視覺對比度更高，夜間駕駛更安心</strong>。
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-12">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                👉 如果你追求極致輕薄、注重亞洲人臉型貼合度——建議 <a href="/products/series" className="text-[#355C7D] hover:underline">W-Pal 雙面複合漸進鏡片</a>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                日本頂級光學設計，採用雙面複合漸進技術，從鏡片前後兩面同步優化度數變化，有效修正周邊像差。<strong className="text-gray-900">專為亞洲人輪廓設計</strong>，雙眼視覺同步、融象效果更佳，即使選用高折射率鏡片，也能保持寬闊穩定的視野。
              </p>
            </div>

            <blockquote className="border-l-4 border-[#355C7D] pl-6 py-2 bg-gray-50 rounded-r-xl mb-12">
              <p className="text-gray-900 font-medium leading-relaxed">
                總結：老花是必經之路，但模糊與不適並非必然。一副設計精良的漸進鏡片，能讓你重拾「一鏡走天涯」的自在。與其繼續在兩副眼鏡之間疲於奔命，不如讓專業視光師為你驗配一副真正適合的漸進鏡片，重新看清生活的每一個細節。
              </p>
            </blockquote>
          </div>
        </div>
      </article>

      {/* Related Product CTA */}
      <section className="py-16 bg-[#355C7D]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            探索 WiderLens 漸進鏡片系列
          </h2>
          <p className="text-white/80 mb-8">
            從 4K 數碼高清到 W-Pal 日本雙面複合，找到最適合你的漸進鏡片
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products/progressive"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C06C84] text-white font-semibold rounded-xl hover:bg-[#A05068] transition-all"
            >
              <ArrowRight className="w-5 h-5" />
              探索漸進鏡片產品
            </a>
            <a
              href={buildWhatsAppUrl('你好，我想了解漸進鏡片的詳情。')}
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
