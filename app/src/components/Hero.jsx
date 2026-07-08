import { useState, useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import perfilImg from '../assets/perfil.jpeg';
import logowhats from '../assets/logowhats.png';
import logo from '../assets/Logosub2.png';

function AnimatedCounter({ from, to, duration = 2 }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration: duration,
        onUpdate: (value) => {
          setCount(Math.round(value));
        }
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Hero() {
  return (
    <>
      {/* GLOBAL MOBILE SHADOW STYLE */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @media (max-width: 767px) {
          .mobile-text-shadow {
            text-shadow: 1px 1px 3px rgba(0,0,0,0.8);
          }
        }
      `}} />

      {/* MOBILE HERO (Visible only on screens < 768px - Clean, Elegant & Institutional) */}
      <section 
        className="md:hidden pt-28 pb-10 flex flex-col w-full relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #1D0509 0%, #24060B 45%, #2B0810 100%)'
        }}
      >
        {/* Atmosfera de Luz Premium */}
        <div className="absolute top-[10%] left-[-20%] w-[60%] h-[40%] rounded-full bg-[#B5526C]/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-25%] w-[70%] h-[40%] rounded-full bg-[#8B3B4B]/15 blur-[120px] pointer-events-none" />

        <div className="max-w-md mx-auto px-6 w-full flex flex-col items-center z-10">
          {/* 1. Logo no topo - Premium, centralizado e com destaque */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full flex justify-center mb-12"
          >
            <img
              src={logo}
              alt="Dra. Kamille Gallego Vieira"
              className="w-[300px] max-w-[88%] mx-auto drop-shadow-[0_0_25px_rgba(255,255,255,0.18)] object-contain"
            />
          </motion.div>

          {/* 2. Título grande centralizado com destaque serifado/itálico em Dourado/Bege */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-[32px] font-black text-white leading-[1.2] text-center mb-5 mobile-text-shadow"
          >
            Transformando <br />
            Sorrisos <br />
            <span className="font-serif italic font-normal text-[#E5C583]">em São Carlos</span>
          </motion.h1>

          {/* 3. Texto de apoio (Subtexto menor e elegante) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[14px] text-white/80 text-center font-medium leading-relaxed mb-8 max-w-[340px]"
          >
            Seu sorriso merece <strong>cuidado, atenção e confiança.</strong> Mais do que transformar sorrisos, meu propósito é devolver <strong>autoestima e segurança</strong> através de tratamentos odontológicos completos e humanizados.
          </motion.p>

          {/* 4. Botão principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full flex justify-center mb-10"
          >
            <a
              href="#secao-agendamento"
              className="w-full max-w-xs px-6 py-5 bg-[#25D366] text-white rounded-full font-black text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-3 hover:bg-[#20bd5c] transition-all duration-500 shadow-[0_20px_50px_rgba(37,211,102,0.4)] active:scale-[0.98]"
            >
              <img src={logowhats} alt="WhatsApp" className="w-5 h-5 object-contain" />
              QUERO AGENDAR CONSULTA
            </a>
          </motion.div>

          {/* 5. Foto da Dra. Kamille integrada */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full relative px-2 mt-4"
          >
            <div className="relative w-full rounded-[2.5rem] overflow-hidden">
              <img
                src={perfilImg}
                alt="Dra. Kamille"
                className="w-full h-auto object-cover border border-white/5 object-center"
                style={{ maxHeight: '420px', objectPosition: 'center 20%' }}
              />
              {/* Gradiente escuro para integrar a foto ao fundo da página (termina em #2B0810) */}
              <div 
                className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, #2B0810 0%, transparent 100%)'
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* DESKTOP/TABLET HERO (Visible only on screens >= 768px - Kept exactly identical to original structure) */}
      <section 
        className="hidden md:flex relative min-h-[90vh] lg:min-h-[80vh] items-center overflow-hidden pt-14 md:pt-48 lg:pt-32 pb-12 md:pb-40 lg:pb-28 w-full"
        style={{
          background: 'linear-gradient(135deg, #1D0509 0%, #2B0810 50%, #130306 100%)'
        }}
      >
        {/* Mobile Background Image (Clean and professional) - for tablets */}
        <div className="lg:hidden absolute inset-0 z-0 overflow-hidden">
          <img
            src={perfilImg}
            alt=""
            className="w-full h-full object-cover object-center"
            style={{ objectPosition: 'center 20%' }}
          />
          <div
            className="absolute inset-0 z-10"
            style={{
              background: 'linear-gradient(to top, #1D0509 12%, rgba(29, 5, 9, 0.4) 30%, transparent 60%)'
            }}
          />
        </div>

        {/* Desktop Widescreen Photo Container (High quality, no excessive stretch, sharp and professional) */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 lg:w-[40%] xl:w-[38%] z-0 overflow-hidden bg-transparent">
          <img
            src={perfilImg}
            alt="Dra. Kamille"
            className="w-full h-full object-cover opacity-95 select-none pointer-events-none object-center"
            style={{ objectPosition: 'center 20%' }}
          />
          {/* Soft, elegant wine gradient fade on the left edge of the photo to blend seamlessly with the dark background */}
          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#1D0509] via-[#1D0509]/80 to-transparent z-10 pointer-events-none" />
        </div>

        <div className="max-w-7xl lg:max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* Left Content */}
            <div className="flex-1 text-left z-10 px-0 md:px-0 w-full">

              {/* Text restricted to 70% on mobile to keep Dra. Kamille's face clear while giving titles more space */}
              <div className="max-w-[70%] md:max-w-none">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs md:text-[13px] font-bold uppercase tracking-wider mb-3 md:mb-6 bg-brand-light text-white border border-brand-light/30 md:bg-brand-light/15 md:text-brand-light md:border-brand-light/20 backdrop-blur-sm shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white md:bg-brand-light animate-pulse" />
                  <span>
                    <span className="text-amber-300 md:text-[#D8B07A] font-extrabold text-sm md:text-[14px] mr-1">
                      +<AnimatedCounter from={0} to={500} duration={2.5} />
                    </span>{" "}
                    pacientes atendidos
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="font-heading text-[38px] lg:text-[64px] xl:text-[72px] font-black text-white leading-[1.15] lg:leading-[1.1] mb-3 lg:mb-6 mobile-text-shadow"
                >
                  Transformando <br />
                  Sorrisos <br />
                  <span
                    className="font-serif italic font-normal text-[#D8B07A]"
                    style={{
                      textShadow: '0 0 18px rgba(216,176,122,0.15)'
                    }}
                  >
                    em São Carlos
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-[15px] lg:text-base xl:text-lg text-slate-200/90 lg:text-white/75 max-w-xl mb-4 lg:mb-8 leading-relaxed font-medium mobile-text-shadow"
                >
                  Seu sorriso merece <strong>cuidado, atenção e confiança.</strong> Mais do que transformar sorrisos, meu propósito é devolver <strong>autoestima e segurança</strong> através de tratamentos odontológicos completos e humanizados.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4 mt-6 md:mt-0 w-full"
              >
                <a
                  href="#secao-agendamento"
                  className="w-full sm:w-auto px-6 py-[20px] md:px-10 md:py-6 bg-[#25D366] text-white rounded-full font-black text-sm sm:text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-3 md:gap-4 hover:bg-[#20bd5c] transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.02] shadow-[0_20px_50px_rgba(37,211,102,0.3)] hover:shadow-[0_20px_50px_rgba(37,211,102,0.55)] active:scale-[0.98] group"
                >
                  <img src={logowhats} alt="WhatsApp" className="w-7 h-7 md:w-6 md:h-6 object-contain group-hover:scale-110 transition-transform duration-500 ease-out" />
                  QUERO AGENDAR CONSULTA
                </a>
                <a
                  href="#sobre"
                  className="w-full sm:w-auto px-8 py-[18px] md:px-12 md:py-6 bg-[#0B122C] text-white rounded-full font-black text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-2 md:gap-4 border border-white/10 hover:bg-[#151f44] hover:border-white/30 transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98]"
                >
                  CONHECER DOUTORA ➔
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
