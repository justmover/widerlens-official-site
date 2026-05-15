import { ArrowLeft, BookOpen } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogs';
import { ProgressiveLensArticle } from './blogs/ProgressiveLensArticle';
import { PhotochromicLensArticle } from './blogs/PhotochromicLensArticle';
import { LensCoatingArticle } from './blogs/LensCoatingArticle';

const articleMap: Record<string, React.FC> = {
  'progressive-lens-guide': ProgressiveLensArticle,
  'photochromic-lens-guide': PhotochromicLensArticle,
  'lens-coating-guide': LensCoatingArticle,
};

export function BlogArticle() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  const ArticleComponent = slug ? articleMap[slug] : null;

  if (!post || !ArticleComponent) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">文章未找到</h1>
          <p className="text-gray-600 mb-6">這篇文章可能已被移除或連結已失效。</p>
          <a
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#355C7D] text-white font-semibold rounded-xl hover:bg-[#2A4A63] transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            返回視光知識
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img src="/logo.png" alt="WiderLens" className="h-10 w-auto object-contain" />
          </a>
          <div className="flex items-center gap-4">
            <a
              href="/blog"
              className="hidden sm:flex items-center gap-2 text-gray-600 hover:text-[#355C7D] transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              <span>視光知識</span>
            </a>
            <a
              href="/"
              className="flex items-center gap-2 text-gray-600 hover:text-[#355C7D] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>返回首頁</span>
            </a>
          </div>
        </div>
      </nav>

      <ArticleComponent />

      {/* Footer */}
      <footer className="py-8 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center text-gray-500">
          <p>© 2026 WiderLens. 保留所有權利。</p>
        </div>
      </footer>
    </div>
  );
}
