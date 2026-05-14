import {
  Layers,
  Monitor,
  Sun,
  BatteryCharging,
  Route,
} from 'lucide-react';

export interface SubProduct {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
}

export interface ProductSeriesItem {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  technologies: { name: string; desc: string }[];
  image: string;
  color: string;
  badgeColor: string;
  subProducts: SubProduct[];
  detailContent?: ProductDetailContent;
}

export interface ProductDetailContent {
  headline: string;
  painPoints?: { title: string; items: string[] };
  breakthroughs?: { title: string; items: { label: string; desc: string }[] };
  targetAudience?: { title: string; items: string[] };
  comparison?: { title: string; headers: string[]; rows: { label: string; values: string[] }[] };
}

export const productSeriesList: ProductSeriesItem[] = [
  {
    id: '4k',
    name: 'Wider 4K Series',
    subtitle: '4K 數碼高清漸進鏡片',
    tagline: '專為數碼生活而設的高清視覺革命',
    description:
      '由德國 Optotech 專業研發，採用【Extended Design 延展設計】，以數碼演算優化遠中近區域比例，提供極高清晰度視覺體驗：影像細節銳利、過渡柔順；寬廣視野設計讓閱讀區域與中距區域更舒適自然；全方位平衡焦點轉換使遠、中、近距離切換更加流暢；長效舒適度升級，減低視覺壓力，全天佩戴自在無負擔。',
    features: [
      '極高清晰度視覺體驗 — 影像細節銳利、過渡柔順',
      '寬廣視野設計 — 閱讀區域與中距區域更舒適自然',
      '全方位平衡焦點轉換 — 遠中近切換流暢',
      '長效舒適度升級 — 減低視覺壓力，全天無負擔',
      '德國 Optotech 專業研發 — 數碼演算優化',
    ],
    specs: [
      { label: '設計技術', value: '德國 Optotech Extended Design' },
      { label: '折射率選項', value: '1.50 / 1.60 / 1.67 / 1.74' },
      { label: '加光度範圍', value: '+0.75D 至 +3.50D' },
      { label: '適用對象', value: '數碼生活用家、首次佩戴漸進鏡片者' },
    ],
    technologies: [
      { name: 'Extended Design', desc: '德國漸進延展設計技術' },
      { name: '4K 高清光學', desc: '提升清晰度並減少像差' },
      { name: '數碼演算優化', desc: '針對遠中近區域比例調校' },
      { name: '亞洲人數據', desc: '配合亞洲人配戴習慣' },
    ],
    image: '/product-4k.jpg',
    color: 'from-blue-600 to-cyan-500',
    badgeColor: 'bg-blue-500',
    subProducts: [
      {
        id: '4k-progressive',
        name: '4K 數碼高清漸進鏡片',
        tagline: '遠中近無縫銜接',
        description: '針對遠、中、近三段視野作精細優化，視野更闊、更自然，縮短適應期。',
        icon: Layers,
      },
      {
        id: '4k-office',
        name: '4K-Office 室內漸進系列',
        tagline: '寬廣中近視野',
        description: '提供較寬廣的中近視野區域，減輕眼睛和頸部壓力，適合長時間辦公。',
        icon: Monitor,
      },
    ],
    detailContent: {
      headline: '專為數碼生活而設的高清視覺革命',
      painPoints: {
        title: '使用者的痛點',
        items: [
          '長時間使用手機與電腦導致視覺疲勞與焦點不穩定。',
          '傳統漸進鏡片在中近距離使用時視野狹窄、變形感明顯。',
          '工作與生活頻繁切換時，需要快速對焦與自然轉換焦距。',
        ],
      },
      breakthroughs: {
        title: '解決方案：WIDER 4K Series 高清科技',
        items: [
          { label: '極高清晰度視覺體驗', desc: '影像細節銳利、過渡柔順。' },
          { label: '寬廣視野設計', desc: '閱讀區域與中距區域更舒適自然。' },
          { label: '全方位平衡焦點轉換', desc: '遠、中、近距離切換更加流暢。' },
          { label: '長效舒適度升級', desc: '減低視覺壓力，全天佩戴自在無負擔。' },
        ],
      },
      targetAudience: {
        title: '適合族群',
        items: [
          '需要頻繁在電腦、手機與紙本資料間轉換焦距的上班族。',
          '追求高畫質、低變形與寬視野體驗的專業人士。',
          '剛開始配戴漸進鏡片、希望快速適應與穩定視覺的使用者。',
        ],
      },
      comparison: {
        title: '產品比較',
        headers: ['特點', '傳統漸進鏡片', 'WIDER 4K Series'],
        rows: [
          { label: '清晰度', values: ['中等', '☆☆☆☆☆ 高達4K級細膩畫質'] },
          { label: '視野寬度', values: ['普通', '☆☆☆☆☆ 延展式寬視野'] },
          { label: '對焦速度', values: ['一般', '☆☆☆☆☆ 快速自然轉換'] },
          { label: '舒適度', values: ['一般', '☆☆☆☆☆ 全天舒適體驗'] },
        ],
      },
    },
  },
  {
    id: '3d',
    name: 'Wider 3D-Series',
    subtitle: '3D 高清低反漸進鏡片',
    tagline: '捕捉高清世界，感受自然視覺轉換',
    description:
      'WIDER OPTO 最新的 3D‑Series 自由曲面漸進鏡片，結合「高清低反鍍膜 LRC（Low Reflection Coating）」技術，為佩戴者帶來極致清晰、舒適的視覺體驗。無論遠近距離轉換，都能保持自然流暢的焦點切換，重現真實場景的立體層次與色彩細節。3D自由曲面演算提供更廣闊的視野與更精準的焦點轉換；LRC高清低反鍍膜顯著降低眩光；多段走廊選擇（12 / 14 / 16mm）精準定制；多種時尚色系與多重功能系列滿足個性需求。',
    features: [
      '3D 自由曲面演算 — 更廣闊的視野與更精準的焦點轉換',
      'LRC 高清低反鍍膜 — 顯著降低眩光，夜間駕駛更舒適',
      '多段走廊選擇（12 / 14 / 16mm）— 根據需求精準定制',
      '多種時尚色系 — Grey、Brown、Green、Pink、Purple、Blue',
      '多重功能系列 — CLEAR / UV PLUS / PHOTOCHANGE / PHOTOCHANGE UV PLUS',
    ],
    specs: [
      { label: '設計類型', value: 'Freeform 3D 自由曲面' },
      { label: '鍍膜選項', value: 'LRC 高清低反鍍膜' },
      { label: '走廊長度', value: '12mm / 14mm / 16mm' },
      { label: '色彩選擇', value: 'Grey / Brown / Green / Pink / Purple / Blue' },
    ],
    technologies: [
      { name: '3D 自由曲面', desc: '先進立體光學設計' },
      { name: 'LRC 鍍膜', desc: '高清低反射鍍膜技術' },
      { name: 'Smart ADD', desc: '智能加工技術優化近距離視覺' },
      { name: '個人化優化', desc: '按度數及習慣調校' },
    ],
    image: '/product-3d.jpg',
    color: 'from-emerald-500 to-teal-400',
    badgeColor: 'bg-emerald-500',
    subProducts: [
      {
        id: '3d-progressive',
        name: '3D-Series 高清低反漸進鏡片',
        tagline: '高清低反，自然轉換',
        description: '結合 LRC 鍍膜，極致清晰舒適，適應快速，視野廣闊。',
        icon: Layers,
      },
      {
        id: '3d-office',
        name: '3D-Office 室內漸進系列',
        tagline: '智能加工，清晰辦公',
        description: 'Smart ADD 技術提高電子設備視覺效果，4種視覺範圍覆蓋需求。',
        icon: Monitor,
      },
      {
        id: '3d-antifatigue',
        name: '3D 高清數碼漸進抗疲勞',
        tagline: '舒緩睫狀肌疲勞',
        description: '專為長時間看近物的年輕人設計，LRC 鍍膜過濾屏幕眩光，變形區輕微。',
        icon: BatteryCharging,
      },
      {
        id: '3d-photochange',
        name: '3D Photochange 變色系列',
        tagline: '智能變色，全時段適用',
        description: '提供多種顏色選擇，S3系列（灰/茶）及多彩系列（綠/藍/紫/粉紅）。',
        icon: Sun,
      },
    ],
    detailContent: {
      headline: '捕捉高清世界，感受自然視覺轉換',
      painPoints: {
        title: '傳統漸進鏡的痛點',
        items: [
          '視野模糊、邊緣變形明顯',
          '近距離閱讀需抬頭、使用不順',
          '戶外反光干擾、夜間視覺對比不足',
          '長時間佩戴導致眼疲勞',
        ],
      },
      breakthroughs: {
        title: 'WIDER 3D-Series 的突破',
        items: [
          { label: '3D自由曲面演算', desc: '提供更廣闊的視野與更精準的焦點轉換。' },
          { label: 'LRC高清低反鍍膜', desc: '顯著降低眩光，夜間駕駛與屏幕使用更舒適。' },
          { label: '多段走廊選擇（12 / 14 / 16mm）', desc: '根據不同配戴者需求精準定制。' },
          { label: '多種時尚色系', desc: 'Grey、Brown、Green、Pink、Purple、Blue 隨心搭配。' },
          { label: '多重功能系列', desc: 'CLEAR LRC / UV PLUS LRC / PHOTOCHANGE LRC / PHOTOCHANGE UV PLUS LRC' },
        ],
      },
      targetAudience: {
        title: '適用人群',
        items: [
          '中年及長時間使用電子產品者',
          '需長時間閱讀或駕駛的人士',
          '對鏡片清晰度、抗眩光與舒適度有高要求者',
          '尋求高端個性化自由曲面設計的佩戴者',
        ],
      },
      comparison: {
        title: '專業對比：WIDER 3D-Series vs 一般漸進鏡',
        headers: ['特點', '一般漸進鏡', 'WIDER 3D-Series'],
        rows: [
          { label: '清晰度', values: ['一般', '高清、低反射'] },
          { label: '適應性', values: ['需較長時間', '快速自然'] },
          { label: '鏡面反光', values: ['較明顯', '接近無反光'] },
          { label: '個性化度', values: ['固定設計', '3D 自定義自由曲面'] },
          { label: '夜間使用', values: ['眩光干擾', '對比提升'] },
          { label: '色彩選擇', values: ['有限', '多色可選 + 功能鍍膜'] },
        ],
      },
    },
  },
  {
    id: 'wpal',
    name: 'W-Pal 日本漸進',
    subtitle: 'W-PAL 雙面複合漸進鏡片',
    tagline: '日本科技．極致視界',
    description:
      '針對亞洲人視覺需求，結合日本頂級光學設計與全球最高折射率1.76鏡片，實現清晰廣闊的全域視野。WIDER JAPAN W-PAL 採用「雙面非球面複合漸進設計」與 DX Refinement 精修演算法，精准優化每位配戴者的視覺路徑，大幅減輕變形與泳動感，讓遠、中、近距離轉換更流暢。',
    features: [
      '雙面複合漸進設計 — 前後面分工修正像差，視野更穩定',
      'DX Refinement 精修演算法 — 根據瞳距與配戴角度自動調整',
      'Flexible Inset Design — 彈性內移設計，完美對應閱讀距離',
      'Optimal Atoric Design — 遠用區域清晰度顯著提升',
      '1.76 全球最高折射率 — 超薄、超輕、超高解析',
    ],
    specs: [
      { label: '設計特色', value: '雙面複合漸進 + 雙面非球面' },
      { label: '產地', value: '日本製造' },
      { label: '折射率', value: '1.76（全球最高）' },
      { label: '適用對象', value: '重視閱讀舒適度與視線穩定性者' },
    ],
    technologies: [
      { name: '雙面複合', desc: '前後面分工修正像差' },
      { name: 'DX Refinement', desc: '精修演算法，個人化匹配' },
      { name: 'Flexible Inset', desc: '彈性內移設計' },
      { name: 'Atoric Design', desc: '遠用區域清晰度提升' },
    ],
    image: '/product-wpal.jpg',
    color: 'from-amber-500 to-orange-400',
    badgeColor: 'bg-amber-500',
    subProducts: [
      {
        id: 'wpal-progressive',
        name: 'W-PAL 雙面複合漸進鏡片',
        tagline: '日本細膩舒適',
        description: '承襲日本設計細膩舒適特色，自然柔和度數過渡，適合日常閱讀、辦公及外出。',
        icon: Layers,
      },
    ],
    detailContent: {
      headline: '日本科技．極致視界 ─ WIDER JAPAN W-PAL 1.76 雙面複合漸進鏡片',
      painPoints: {
        title: '解決傳統漸進鏡片痛點',
        items: [
          '側方視野歪曲、晃動感強烈',
          '閱讀區太窄，轉頭頻繁',
          '遠近焦段切換不自然',
          '長時間配戴導致視覺疲勞',
        ],
      },
      breakthroughs: {
        title: '創新科技亮點',
        items: [
          { label: '雙面複合漸進設計', desc: '前後面分工修正像差，視野更穩定' },
          { label: 'DX Refinement 雙重演算優化', desc: '根據個人瞳距與配戴角度自動調整' },
          { label: 'Flexible Inset Design', desc: '彈性內移設計，完美對應閱讀距離' },
          { label: 'Optimal Atoric Design', desc: '遠用區域清晰度顯著提升' },
          { label: 'Retinal Focus Design', desc: '貼合視網膜焦點，真實、立體、自然' },
          { label: 'MADE IN JAPAN', desc: '精密日本製造，品質保證' },
          { label: '折射率 1.76', desc: '全球最高折射率材料，超薄、超輕、超高解析' },
        ],
      },
      targetAudience: {
        title: '適用人群',
        items: [
          '長時間使用電腦或行動裝置者',
          '在意鏡片厚度與外觀美觀者',
          '對閱讀舒適度、視線穩定性要求高者',
          '初次配戴漸進鏡片、或對傳統鏡片不適者',
        ],
      },
      comparison: {
        title: '產品比較',
        headers: ['特點項目', '一般漸進鏡片', '雙面複合漸進鏡片 W-PAL'],
        rows: [
          { label: '視野寬度', values: ['普通', '廣闊 + 邊緣穩定'] },
          { label: '清晰度', values: ['一般', '高精度非球面優化'] },
          { label: '泳動感', values: ['明顯', '顯著降低'] },
          { label: '厚度外觀', values: ['較厚', '全球最薄 1.76 折射率'] },
          { label: '個人化調整', values: ['無', 'DX Refinement 精準匹配'] },
        ],
      },
    },
  },
];

export const functionsList = [
  {
    id: 'progressive',
    name: '漸進鏡片',
    description:
      '多焦點鏡片，提供從遠距離到近距離的連續視覺過渡。無需更換眼鏡，一副搞定所有距離。',
    icon: Route,
    visual: '開車、戶外',
  },
  {
    id: 'office',
    name: '室內漸進鏡片',
    description:
      '提供較寬廣的中近視野區域，減輕眼睛和頸部壓力，特別適合長時間使用電腦和文書工作。',
    icon: Monitor,
    visual: '辦公室、看電腦、閱讀',
  },
  {
    id: 'antifatigue',
    name: '抗疲勞鏡片',
    description:
      '減輕眼睛調節負擔，舒緩睫狀肌疲勞，適合長時間看手機及閱讀的年輕用家。',
    icon: BatteryCharging,
    visual: '年輕女士、看手機、閱讀',
  },
  {
    id: 'photochromic',
    name: '變色鏡片',
    description:
      '根據環境光線自動調整顏色深淺，室內透明、戶外變暗，全時段護眼。',
    icon: Sun,
    visual: '戶外、開車、運動、型格',
  },
];

export const lrcFeatures = [
  { name: '防塵', desc: '令鏡片時刻保持清晰' },
  { name: '易潔', desc: '鏡片容易清潔' },
  { name: '耐磨', desc: '提升耐用度' },
  { name: '高透低反光', desc: '加強鏡片清晰度' },
  { name: '防水', desc: '鏡片表面不會留下水滴' },
];

export const comparisonRows = [
  { label: '清晰度', generic: '一般', series4k: '☆☆☆☆☆ 高達4K級細膩畫質', series3d: '高清、低反射', seriesWpal: '高精度非球面優化' },
  { label: '視野寬度', generic: '普通', series4k: '☆☆☆☆☆ 延展式寬視野', series3d: '廣闊視野 + 精準焦點', seriesWpal: '廣闊 + 邊緣穩定' },
  { label: '適應性', generic: '需較長時間', series4k: '快速自然', series3d: '快速自然', seriesWpal: '順滑易適應' },
  { label: '鏡面反光', generic: '較明顯', series4k: '低反光', series3d: '接近無反光 (LRC)', seriesWpal: '低反光' },
  { label: '個性化度', generic: '固定設計', series4k: '數碼演算優化', series3d: '3D 自定義自由曲面', seriesWpal: 'DX Refinement 精準匹配' },
  { label: '夜間使用', generic: '眩光干擾', series4k: '對比提升', series3d: '對比提升', seriesWpal: '視野穩定' },
  { label: '色彩選擇', generic: '有限', series4k: '標準', series3d: '多色可選 + 功能鍍膜', seriesWpal: '標準' },
  { label: '厚度外觀', generic: '較厚', series4k: '多折射率可選', series3d: '多折射率可選', seriesWpal: '全球最薄 1.76 折射率' },
];
