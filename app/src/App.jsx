import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutDoctor from './components/AboutDoctor';
import MarketingFeature from './components/MarketingFeature';
import Solutions from './components/Solutions';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Transformations from './components/Transformations';
import FAQ from './components/FAQ';
import Scheduling from './components/Scheduling';
import Location from './components/Location';
import Footer from './components/Footer';
import FloatingDecorations from './components/FloatingDecorations';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import mainBg from './assets/fundo vinho.png';
import planoDeFundoElegante from './assets/plano de fundo elegante.png';
import planoDeFundoMobile from './assets/plano de fundo mobile.png';
import Lenis from 'lenis';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Initialise Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => 1 - Math.pow(1 - t, 4), // Easing curve for a gorgeous, smooth easeOutQuart deceleration
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1.0,
      smoothTouch: false, // Maintain native touch inertia scroll for best mobile physics
      touchMultiplier: 1.5,
    });

    window.lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Sync all anchor link clicks to Lenis smooth scrollTo method
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        const targetId = target.getAttribute('href');
        if (targetId && targetId !== '#') {
          const element = document.querySelector(targetId);
          if (element) {
            e.preventDefault();
            lenis.scrollTo(element, {
              offset: -80, // Accounts for sticky header height
              duration: 1.4,
              easing: (t) => 1 - Math.pow(1 - t, 4)
            });
          }
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.lenis = null;
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed relative z-0"
      style={{ backgroundImage: `url('${mainBg}')` }}
    >
      <FloatingDecorations />
      <Header />
      <main className="relative z-10">
        <Hero />
        
        {/* Unified Elegant Background Wrapper with React responsive styles */}
        <div 
          className="relative overflow-hidden bg-scroll md:bg-fixed"
          style={{ 
            backgroundImage: `url("${isMobile ? planoDeFundoMobile : planoDeFundoElegante}")`,
            backgroundSize: isMobile ? '100% auto' : 'cover',
            backgroundPosition: isMobile ? 'top center' : 'center',
            backgroundRepeat: isMobile ? 'repeat' : 'no-repeat',
            backgroundColor: '#FAF2F5'
          }}
        >
          {/* Suave overlay to preserve readability and transition elegantly */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-[#FAF2F5]/60 hidden md:block pointer-events-none" />
          
          <div className="relative z-10">
            <MarketingFeature />
            <Solutions />
            <HowItWorks />
          </div>
        </div>

        <AboutDoctor />

        <Testimonials />
        <Location />
        <Transformations />
        <FAQ />
        <Scheduling />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
