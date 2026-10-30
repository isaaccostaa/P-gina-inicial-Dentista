import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Check, ArrowRight } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';
import caso1Antes from '../assets/lentes-caso1-antes.webp';
import caso1Depois from '../assets/lentes-caso1-depois.webp';
import caso2 from '../assets/lentes-caso2.webp';
import videoReacao from '../assets/lentes-melissa.mp4';
import videoPoster from '../assets/lentes-melissa-poster.webp';

const beneficios = [
  'Resinas de alta qualidade, com acabamento natural',
  'Formato e cor planejados para o seu rosto',
  'Procedimento conservador, preservando o dente',
];

function agendarLentes() {
  window.dispatchEvent(new CustomEvent('prefillForm', {
    detail: {
      servico: 'Lentes em Resina',
      mensagem: 'Vi os resultados de lentes em resina no site e gostaria de agendar uma avaliação para o meu sorriso.'
    }
  }));
  const el = document.getElementById('secao-agendamento');
  if (!el) return;
  if (window.lenis) {
    window.lenis.scrollTo(el, { offset: -80, duration: 1.4 });
  } else {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

function VideoReacao() {
  const videoRef = useRef(null);
  const [mudo, setMudo] = useState(true);

  // Toca sem som enquanto estiver visível e pausa ao sair da tela
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    }, { threshold: 0.4 });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const alternarSom = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMudo(video.muted);
    if (!video.muted) video.play().catch(() => {});
  };

  return (
    <div className="relative h-full rounded-[28px] overflow-hidden border border-white/10 bg-black shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] aspect-[9/16] lg:aspect-auto">
      <video
        ref={videoRef}
        src={videoReacao}
        poster={videoPoster}
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/75 to-transparent pointer-events-none" />
      <div className="absolute left-5 right-20 bottom-5 pointer-events-none">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-rose-gold-light mb-1">Reação real</p>
        <p className="font-heading text-2xl text-white leading-tight">O primeiro olhar no novo sorriso</p>
      </div>
      <button
        type="button"
        onClick={alternarSom}
        aria-label={mudo ? 'Ativar som do vídeo' : 'Desativar som do vídeo'}
        className="absolute right-5 bottom-5 w-11 h-11 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white flex items-center justify-center hover:bg-white/25 transition-colors"
      >
        {mudo ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </button>
    </div>
  );
}

export default function LentesResultados() {
  return (
    <section id="lentes" className="relative overflow-hidden bg-brand-dark py-16 md:py-24 lg:py-28">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 45% at 50% 0%, rgba(218,167,140,0.14), transparent 70%)' }}
      />

      <div className="max-w-7xl lg:max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow eyebrow-dark mb-5"
          >
            Lentes em Resina · Resultados
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[42px] lg:text-[58px] xl:text-[64px] font-semibold text-white leading-[1.02] mb-5"
          >
            Sorrisos que <span className="italic font-medium text-rose-gold">falam por si.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[15px] md:text-lg text-white/65 leading-relaxed"
          >
            Casos reais de pacientes da Dra. Kamille. Arraste a imagem para comparar o antes e o depois.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
          {/* Comparador */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 lg:row-start-1 rounded-[28px] overflow-hidden border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]"
          >
            <BeforeAfterSlider
              antes={caso1Antes}
              depois={caso1Depois}
              alt="Lentes em resina, caso 1"
              aspect="1419 / 809"
            />
          </motion.div>

          {/* Vídeo de reação */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2 w-full max-w-[360px] sm:max-w-[400px] lg:max-w-none mx-auto"
          >
            <VideoReacao />
          </motion.div>

          {/* Caso 2 + chamada */}
          <div className="lg:col-span-7 lg:row-start-2 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            <motion.figure
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative rounded-[28px] overflow-hidden border border-white/10 aspect-[4/5]"
            >
              <img src={caso2} alt="Lentes em resina, caso 2: antes (à esquerda) e depois (à direita)" loading="lazy" className="w-full h-full object-cover" />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/45 backdrop-blur-md text-white text-[10px] font-semibold uppercase tracking-[0.25em]">Antes</span>
              <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/85 backdrop-blur-md text-vinho text-[10px] font-semibold uppercase tracking-[0.25em]">Depois</span>
            </motion.figure>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 md:p-7 flex flex-col"
            >
              <h3 className="font-heading text-[28px] font-semibold text-white leading-tight mb-5">
                Naturalidade em <span className="italic text-rose-gold">cada detalhe</span>
              </h3>
              <ul className="space-y-3.5 mb-7 flex-grow">
                {beneficios.map((b) => (
                  <li key={b} className="flex gap-3 text-[14px] text-white/75 leading-snug">
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-rose-gold" />
                    {b}
                  </li>
                ))}
              </ul>
              <button type="button" onClick={agendarLentes} className="btn-gold w-full py-4 px-5 text-[11px]">
                Avaliar meu sorriso
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
