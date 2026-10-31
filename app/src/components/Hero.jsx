import { useState, useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import perfilImg from '../assets/perfil-hero.webp';
import WhatsAppIcon from './WhatsAppIcon';
import logo from '../assets/logo-kv.webp';

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
            className="w-full flex justify-center mb-10"
          >
            <img
              src={logo}
              alt="Dra. Kamille Gallego Vieira"
              className="w-[250px] max-w-[80%] mx-auto object-contain"
            />
          </motion.div>

          {/* 2. Título grande centralizado com destaque serifado/itálico em Dourado/Bege */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-[44px] font-semibold text-white leading-[1.02] text-center mb-5"
          >
            Transformando <br />
            sorrisos <br />
            <span className="italic font-medium text-rose-gold">em São Carlos</span>
          </motion.h1>
          <p className="eyebrow eyebrow-dark eyebrow-center !text-[10px] mb-6">Dentista · Lentes em resina</p>

          {/* 3. Texto de apoio (Subtexto menor e elegante) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[14px] text-white/75 text-center leading-relaxed mb-8 max-w-[340px]"
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
              className="btn-gold w-full max-w-xs px-6 py-5"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Agendar avaliação
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
                alt="Dra. Kamille Gallego Vieira, dentista em São Carlos"
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
        {/* Textura de seda no fundo, para o vinho não ficar liso */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="hero-seda" />
          <div className="hero-seda-faixa top-[48%]" />
          <div className="hero-seda-brilho top-[56%]" />
          <div className="hero-seda-brilho top-[70%] opacity-60" />
          <div className="hero-seda-faixa top-[82%] opacity-80" />
          <div className="hero-seda-brilho top-[88%] opacity-40" />
        </div>

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

        {/* Foto da doutora em painel à direita, com borda reta e fio claro (sem esfumado lateral) */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 lg:w-[36%] z-0 overflow-hidden border-l border-white/10">
          <img
            src={perfilImg}
            alt="Dra. Kamille Gallego Vieira, dentista em São Carlos"
            className="w-full h-full object-cover select-none pointer-events-none"
            style={{ objectPosition: 'center 22%' }}
          />
          {/* Leve escurecimento na base para a foto assentar no fundo vinho */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1D0509]/70 to-transparent pointer-events-none" />
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
                  className="eyebrow eyebrow-dark mb-4 md:mb-7"
                >
                  <span>
                    Dentista em São Carlos · <span className="text-rose-gold-light">
                      +<AnimatedCounter from={0} to={500} duration={2.5} />
                    </span>{" "}
                    pacientes
                  </span>
                </motion.div>

                <motion.p
                  aria-hidden="true"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="font-heading text-[52px] lg:text-[80px] xl:text-[92px] font-semibold text-white leading-[1.08] lg:leading-[0.98] mb-4 lg:mb-8 mobile-text-shadow"
                >
                  Transformando <br />
                  sorrisos <br />
                  <span className="italic font-medium text-rose-gold">em São Carlos</span>
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-[15px] lg:text-base xl:text-lg text-slate-200/90 lg:text-white/70 max-w-lg mb-4 lg:mb-10 leading-relaxed mobile-text-shadow"
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
                  className="btn-gold w-full sm:w-auto px-6 py-5 md:px-9 group"
                >
                  <WhatsAppIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-500 ease-out" />
                  Agendar avaliação
                </a>
                <a
                  href="#sobre"
                  className="btn-outline-light w-full sm:w-auto px-8 py-5 md:px-9"
                >
                  Conhecer a doutora
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
