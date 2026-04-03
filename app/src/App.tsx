import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useLenis } from './hooks/useLenis';
import { Hero } from './sections/Hero';
import { IntroGrid } from './sections/IntroGrid';
import { Services } from './sections/Services';
import { WhyChooseMe } from './sections/WhyChooseMe';
import { FeaturedProjects } from './sections/FeaturedProjects';
import { Testimonials } from './sections/Testimonials';
import { Promotion } from './sections/Promotion';
import { Stores } from './sections/Stores';
import { FAQ } from './sections/FAQ';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { ProgressiveLenses } from './pages/ProgressiveLenses';
import { PhotochromicLenses } from './pages/PhotochromicLenses';
import { ProductSeries } from './pages/ProductSeries';
import { siteConfig } from './config';
import './App.css';

// Home page component
function HomePage() {
  // Initialize Lenis smooth scroll
  useLenis();

  return (
    <main className="relative w-full overflow-x-hidden">
      {/* Hero Section - Parallax Layering */}
      <Hero />

      {/* Intro & Masonry Grid - White Section */}
      <IntroGrid />

      {/* Services - Dark Section */}
      <Services />

      {/* Why Choose Me & Stats - White Section */}
      <WhyChooseMe />

      {/* Featured Projects - Dark Section */}
      <FeaturedProjects />

      {/* Testimonials Carousel - White Section */}
      <Testimonials />

      {/* Promotion Section - Gradient Background */}
      <Promotion />

      {/* Stores Section - White Section */}
      <Stores />

      {/* FAQ Accordion - Dark Section */}
      <FAQ />

      {/* Contact Section - Light Gray */}
      <Contact />

      {/* Footer - Dark Section */}
      <Footer />
    </main>
  );
}

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  useEffect(() => {
    if (siteConfig.siteTitle) {
      document.title = siteConfig.siteTitle;
    }
    if (siteConfig.siteDescription) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', siteConfig.siteDescription);
    }
    if (siteConfig.language) {
      document.documentElement.lang = siteConfig.language;
    }
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/progressive" element={<ProgressiveLenses />} />
        <Route path="/products/photochromic" element={<PhotochromicLenses />} />
        <Route path="/products/series" element={<ProductSeries />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
