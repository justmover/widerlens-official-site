export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: string;
  readTime: string;
  relatedProductHref: string;
  relatedProductLabel: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'progressive-lens-guide',
    title: '漸進鏡片：一副眼鏡，搞定遠近視界',
    subtitle: '漸進鏡片完全指南',
    excerpt:
      '年過四十，看近越來越吃力？了解漸進鏡片如何以數碼自由曲面技術，為你提供由遠至近的連續清晰視野，重拾「一鏡走天涯」的自在。',
    category: '視光知識',
    readTime: '8 分鐘',
    relatedProductHref: '/products/progressive',
    relatedProductLabel: '探索漸進鏡片產品',
  },
  {
    slug: 'photochromic-lens-guide',
    title: '變色鏡片：室內透明、戶外變暗，一副眼鏡走天下',
    subtitle: '變色鏡片完全指南',
    excerpt:
      '厭倦了攜帶兩副眼鏡？深入了解變色鏡片的光致變色原理、紫外線防護機制，以及如何選擇最適合自己生活型態的變色鏡片。',
    category: '視光知識',
    readTime: '10 分鐘',
    relatedProductHref: '/products/photochromic',
    relatedProductLabel: '探索變色鏡片產品',
  },
  {
    slug: 'lens-coating-guide',
    title: '鏡片鍍膜：看不見的保護層，看得見的差別',
    subtitle: '鏡片鍍膜完全指南',
    excerpt:
      '晚上開車眩光刺眼？電腦工作後眼睛乾澀？了解減反射、防藍光、超潑水、硬化及防紫外線鍍膜如何徹底改變你的戴眼鏡體驗。',
    category: '視光知識',
    readTime: '9 分鐘',
    relatedProductHref: '/products/series',
    relatedProductLabel: '探索鏡片產品系列',
  },
];
