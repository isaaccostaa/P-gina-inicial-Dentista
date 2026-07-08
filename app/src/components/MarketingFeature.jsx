import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Play } from 'lucide-react';
import videoMkt from '../assets/videomkt.mp4';
import logowhats from '../assets/logowhats.png';

export default function MarketingFeature() {
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Detect mobile viewport (lg breakpoint is 1024px)
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.error("Error playing video:", err);
      });
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && !video.paused) {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
      observer.disconnect();
    };
  }, [isMobile]); // Re-bind observer if active element changes due to resize

  return (
    <section id="diferenciais" className="section-padding bg-transparent overflow-hidden">
      <div className="max-w-7xl lg:max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Column: Vertical Video (Reel Style) - HIDDEN ON MOBILE, VISIBLE ON DESKTOP */}
          <div className="hidden lg:block lg:w-1/2 relative w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-slate-900 aspect-[9/16] max-w-[520px] lg:max-w-[360px] xl:max-w-[400px] mx-auto lg:mx-0 group"
            >
              {!isMobile && (
                <>
                  <video
                    ref={videoRef}
                    src={videoMkt}
                    loop
                    playsInline
                    controls={isPlaying}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    preload="metadata"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  {/* Play Overlay */}
                  {!isPlaying && (
                    <div
                      onClick={handlePlay}
                      className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer z-10 hover:bg-black/35 transition-all duration-300"
                    >
                      <div className="w-20 h-20 bg-white/95 rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.35)] hover:scale-110 active:scale-95 transition-all duration-300">
                        <Play className="w-9 h-9 text-[#1D0509] fill-[#1D0509] translate-x-[2px]" />
                      </div>
                    </div>
                  )}
                </>
              )}
            </motion.div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-1/2 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
            >
              <Sparkles className="w-3 h-3 text-brand-base" />
              Diferenciais
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[34px] lg:text-[48px] xl:text-[56px] font-black text-slate-900 leading-[1.15] mb-6 md:mb-8"
            >
              Naturalidade, <br />
              tecnologia e <span className="font-serif italic font-normal text-slate-800">harmonia.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[17px] md:text-lg text-slate-500 font-medium leading-relaxed mb-8 md:mb-12 max-w-2xl"
            >
              Unimos tecnologia, estética e planejamento personalizado para proporcionar tratamentos realizados com precisão, naturalidade e atenção em cada detalhe.
            </motion.p>

            {/* Feature Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-6 md:p-8 lg:p-6 xl:p-8 bg-slate-50 rounded-[28px] md:rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-premium transition-all duration-500"
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                  <Sparkles className="w-6 h-6 text-brand-base" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">Tecnologia pensada para resultados naturais</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Utilizamos resources modernos para proporcionar mais precisão, conforto e eficiência em cada etapa do tratamento.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="p-6 md:p-8 lg:p-6 xl:p-8 bg-slate-50 rounded-[28px] md:rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-premium transition-all duration-500"
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                  <Heart className="w-6 h-6 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">Atendimento realizado de forma individualizada</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Cada procedimento é conduzido com atenção aos detalhes e planejamento personalizado para cada necessidade.
                </p>
              </motion.div>
            </div>

            {/* Mobile Video Container - ONLY VISIBLE ON MOBILE */}
            <div className="block lg:hidden w-full relative mb-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative rounded-[28px] md:rounded-[3rem] overflow-hidden shadow-2xl bg-slate-900 aspect-[9/16] max-w-[280px] sm:max-w-[340px] mx-auto group"
              >
                {isMobile && (
                  <>
                    <video
                      ref={videoRef}
                      src={videoMkt}
                      loop
                      playsInline
                      controls={isPlaying}
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      preload="metadata"
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    {/* Play Overlay */}
                    {!isPlaying && (
                      <div
                        onClick={handlePlay}
                        className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer z-10 hover:bg-black/35 transition-all duration-300"
                      >
                        <div className="w-20 h-20 bg-white/95 rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.35)] hover:scale-110 active:scale-95 transition-all duration-300">
                          <Play className="w-9 h-9 text-[#1D0509] fill-[#1D0509] translate-x-[2px]" />
                        </div>
                      </div>
                    )}
                  </>
                )}
              </motion.div>
            </div>

            {/* CTA Button centered on mobile, left-aligned on desktop */}
            <div className="flex justify-center lg:justify-start w-full">
              <motion.a
                href="#secao-agendamento"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="w-full sm:w-auto max-w-[320px] sm:max-w-none mx-auto px-12 py-5 md:py-6 bg-[#25D366] text-white rounded-full font-black text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-4 hover:bg-[#20bd5c] transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.02] shadow-[0_20px_50px_rgba(37,211,102,0.3)] hover:shadow-[0_20px_50px_rgba(37,211,102,0.55)] active:scale-[0.98] group"
              >
                <img src={logowhats} alt="WhatsApp" className="w-6 h-6 object-contain group-hover:scale-110 transition-transform" />
                Quero agendar consulta
              </motion.a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
