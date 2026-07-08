import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { googleReviews } from '../data/reviews';
import logoverification from '../assets/Logoverification.png';
import logoGoogle from '../assets/logoGoogle.png';

export default function Testimonials() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplayActive, setIsAutoplayActive] = useState(true);
  const isHoveredRef = useRef(false);
  const itemWidthRef = useRef(0);
  const scrollSpeed = 0.6; // Speed in pixels per frame

  const updateItemWidth = () => {
    if (scrollRef.current) {
      const child = scrollRef.current.children[0];
      if (child) {
        itemWidthRef.current = child.offsetWidth + (window.innerWidth >= 768 ? 32 : 24);
      }
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      if (itemWidthRef.current === 0) {
        updateItemWidth();
      }
      const itemWidth = itemWidthRef.current || 400;
      const totalItems = googleReviews.length;
      const newIndex = Math.round(scrollPosition / itemWidth) % totalItems;
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll, { passive: true });
      updateItemWidth();
      handleScroll();
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Update item width on window resize
  useEffect(() => {
    window.addEventListener('resize', updateItemWidth);
    return () => window.removeEventListener('resize', updateItemWidth);
  }, []);

  // Global scroll listener to detect when user moves to another part of the page and resume autoplay
  useEffect(() => {
    let lastScrollTop = window.scrollY;

    const handleWindowScroll = () => {
      const currentScrollTop = window.scrollY;
      if (!isAutoplayActive && Math.abs(currentScrollTop - lastScrollTop) > 30) {
        setIsAutoplayActive(true);
      }
      lastScrollTop = currentScrollTop;
    };

    window.addEventListener('scroll', handleWindowScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, [isAutoplayActive]);

  // Autoplay functionality using requestAnimationFrame for continuous, ultra-smooth scrolling
  useEffect(() => {
    if (!isAutoplayActive) return;

    let animationFrameId;
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const animate = () => {
      if (!isAutoplayActive) return;

      if (!isHoveredRef.current) {
        if (itemWidthRef.current === 0) {
          updateItemWidth();
        }
        const itemWidth = itemWidthRef.current || 400;
        const firstSetWidth = itemWidth * googleReviews.length;

        let nextScrollLeft = scrollContainer.scrollLeft + scrollSpeed;

        // Wrap around seamlessly when reaching the end of the first duplicate set
        if (nextScrollLeft >= firstSetWidth) {
          nextScrollLeft -= firstSetWidth;
        }

        scrollContainer.scrollLeft = nextScrollLeft;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isAutoplayActive]);

  // Dynamic pause on hover/touch
  useEffect(() => {
    const handleMouseEnter = () => {
      isHoveredRef.current = true;
    };
    const handleMouseLeave = () => {
      isHoveredRef.current = false;
    };

    const el = scrollRef.current;
    if (el) {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
      el.addEventListener('touchstart', handleMouseEnter, { passive: true });
      el.addEventListener('touchend', handleMouseLeave, { passive: true });
    }

    return () => {
      if (el) {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
        el.removeEventListener('touchstart', handleMouseEnter);
        el.removeEventListener('touchend', handleMouseLeave);
      }
    };
  }, []);

  const scrollLeft = () => {
    setIsAutoplayActive(false);

    if (scrollRef.current) {
      if (itemWidthRef.current === 0) {
        updateItemWidth();
      }
      const itemWidth = itemWidthRef.current || 400;
      const currentScroll = scrollRef.current.scrollLeft;
      const targetScroll = Math.round(currentScroll / itemWidth) * itemWidth - itemWidth;
      
      scrollRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    setIsAutoplayActive(false);

    if (scrollRef.current) {
      if (itemWidthRef.current === 0) {
        updateItemWidth();
      }
      const itemWidth = itemWidthRef.current || 400;
      const currentScroll = scrollRef.current.scrollLeft;
      const targetScroll = Math.round(currentScroll / itemWidth) * itemWidth + itemWidth;
      
      scrollRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
    }
  };

  const reviewsToRender = [...googleReviews, ...googleReviews, ...googleReviews];

  return (
    <section id="depoimentos" className="py-14 md:py-24 lg:py-20 xl:py-24 bg-background-soft relative overflow-hidden">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      
      <div className="max-w-7xl lg:max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-200/50 text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
            >
              Feedback dos Pacientes
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[34px] lg:text-[48px] xl:text-[56px] font-black text-slate-900 mb-4 md:mb-6 leading-tight"
            >
              O que dizem sobre <br />
              <span style={{ color: '#8c141d' }}>nosso atendimento.</span>
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-10 lg:p-6 xl:p-8 rounded-[2rem] md:rounded-[3rem] shadow-premium border border-slate-100 flex flex-col items-center text-center w-full max-w-[280px] md:max-w-none mx-auto md:mx-0"
          >
            <div className="flex items-center gap-1 text-yellow-400 mb-2">
              <span className="text-3xl md:text-4xl font-black text-slate-900 mr-2">5.0</span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-current" />
                ))}
              </div>
              <img src={logoverification} alt="Verified" className="w-8 h-8 md:w-10 md:h-10 object-contain ml-2 md:ml-3" />
            </div>
            <img src={logoGoogle} alt="Google Reviews" className="h-8 md:h-12 object-contain mt-4 md:mt-6 opacity-80" />
          </motion.div>
        </div>
      </div>
 
      {/* Slider Interativo */}
      <div className="relative max-w-[1600px] mx-auto group">
        
        {/* Seta Esquerda */}
        <button 
          onClick={scrollLeft}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-md text-slate-600 hover:text-white hover:bg-[#B5526C] active:bg-[#8B3B4B] rounded-full shadow-xl border border-slate-200 transition-all active:scale-95 md:opacity-0 md:group-hover:opacity-100"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        {/* Seta Direita */}
        <button 
          onClick={scrollRight}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-md text-slate-600 hover:text-white hover:bg-[#B5526C] active:bg-[#8B3B4B] rounded-full shadow-xl border border-slate-200 transition-all active:scale-95 md:opacity-0 md:group-hover:opacity-100"
          aria-label="Próximo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
 
        {/* Container Scrollável */}
        <div 
          ref={scrollRef}
          className={`flex gap-6 md:gap-8 overflow-x-auto py-10 px-6 md:px-16 hide-scrollbar ${
            isAutoplayActive ? '' : 'snap-x snap-mandatory scroll-smooth'
          }`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {reviewsToRender.map((review, index) => (
            <div 
              key={index}
              className="w-[88vw] sm:w-[400px] md:w-[450px] lg:w-[380px] xl:w-[420px] flex-shrink-0 snap-center bg-white p-6 md:p-10 lg:p-6 xl:p-8 rounded-[28px] md:rounded-[3rem] border border-slate-100 shadow-premium hover:shadow-2xl transition-all duration-500 group flex flex-col"
            >
              <div className="flex items-center gap-1 mb-4 md:mb-6 text-yellow-400">
                <div className="flex items-center gap-1">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <img src={logoverification} alt="Verified" className="w-5 h-5 md:w-6 md:h-6 object-contain ml-2" />
              </div>
              
              <p className="text-base md:text-lg text-slate-600 mb-6 md:mb-8 leading-relaxed font-medium italic flex-grow">
                "{review.text}"
              </p>
 
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-bold text-[#8c141d] text-lg overflow-hidden border border-slate-200 shrink-0">
                  {review.avatar ? (
                    <img src={review.avatar} alt={review.author} loading="lazy" className="w-full h-full object-cover" />
                  ) : (
                    review.author.charAt(0)
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 leading-tight">{review.author}</h4>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{review.date}</p>
                </div>
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-4 ml-auto opacity-30 shrink-0" />
              </div>
            </div>
          ))}
        </div>

        {/* Gradientes laterais (Apenas visuais) */}
        <div className="absolute inset-y-0 left-0 w-8 md:w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-8 md:w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
      </div>

      {/* Indicadores (Dots) */}
      <div className="flex justify-center items-center gap-2 mt-4 flex-wrap px-4">
        {googleReviews.map((_, index) => (
          <button 
            key={index}
            onClick={() => {
              setIsAutoplayActive(false);
              if (scrollRef.current) {
                if (itemWidthRef.current === 0) {
                  updateItemWidth();
                }
                const itemWidth = itemWidthRef.current || 400;
                const scrollPos = (index * itemWidth) - (scrollRef.current.clientWidth / 2) + (itemWidth / 2);
                scrollRef.current.scrollTo({ left: scrollPos, behavior: 'smooth' });
              }
            }}
            aria-label={`Ir para depoimento ${index + 1}`}
            className={`transition-all duration-300 rounded-full ${
              activeIndex === index ? 'w-8 h-2 bg-[#8c141d]' : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>

      <div className="text-center mt-16 px-4">
        <a 
          href="https://www.google.com/search?q=Dra.+Kamille+Vieira+São+Carlos+avaliações" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full max-w-[320px] mx-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-50 hover:shadow-lg hover:border-[#B5526C]/30 transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98]"
        >
          Ver todas no Google Maps
        </a>
      </div>
    </section>
  );
}
