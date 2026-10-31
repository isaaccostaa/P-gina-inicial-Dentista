import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Check, ArrowRight, MoveHorizontal, Play } from 'lucide-react';
import useCarrossel from '../hooks/useCarrossel';
import { SetasCarrossel, ProgressoCarrossel } from './CarrosselControles';
import BeforeAfterSlider from './BeforeAfterSlider';
import caso1Antes from '../assets/lentes-caso1-antes.webp';
import caso1Depois from '../assets/lentes-caso1-depois.webp';
import caso2 from '../assets/lentes-caso2.webp';
import caso3 from '../assets/lentes-caso3.webp';
import caso4 from '../assets/lentes-caso4.webp';
import caso5 from '../assets/lentes-caso5.webp';
import videoMelissa from '../assets/lentes-melissa.mp4';
import posterMelissa from '../assets/lentes-melissa-poster.webp';
import videoFlavia from '../assets/lentes-flavia.mp4';
import posterFlavia from '../assets/lentes-flavia-poster.webp';

const beneficios = [
  'Resinas de alta qualidade, com acabamento natural',
  'Formato e cor planejados para o seu rosto',
  'Procedimento conservador, preservando o dente',
];

// Casos da galeria de arrastar: cada foto já traz o antes (esquerda) e o depois (direita)
const casos = [
  { src: caso2, alt: 'Lentes em resina: antes e depois de paciente com sorriso renovado' },
  { src: caso3, alt: 'Lentes em resina: antes e depois, dentes mais claros e alinhados' },
  { src: caso4, alt: 'Lentes em resina: antes e depois, fechamento de espaços e cor uniforme' },
  { src: caso5, alt: 'Lentes em resina: antes e depois, fechamento do diastema entre os dentes da frente' },
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

// Vídeos de antes e depois: começam pausados e só tocam quando a pessoa clica
const videos = [
  { src: videoMelissa, poster: posterMelissa, rotulo: 'Antes e depois', titulo: 'Um sorriso renovado' },
  { src: videoFlavia, poster: posterFlavia, rotulo: 'Antes e depois', titulo: 'A transformação em segundos' },
];

function VideosAntesDepois() {
  const videoRefs = useRef([]);
  const toque = useRef(null);
  const [indice, setIndice] = useState(0);
  const [tocando, setTocando] = useState(false);
  const [mudo, setMudo] = useState(false);

  const videoAtual = () => videoRefs.current[indice];

  // Pausa se a pessoa rolar a página para longe do vídeo
  useEffect(() => {
    const video = videoRefs.current[indice];
    if (!video) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) video.pause();
    }, { threshold: 0.2 });
    observer.observe(video);
    return () => observer.disconnect();
  }, [indice]);

  const alternarPlay = () => {
    const video = videoAtual();
    if (!video) return;
    if (video.paused) {
      video.muted = mudo;
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  const trocar = (direcao) => {
    const novo = indice + direcao;
    if (novo < 0 || novo >= videos.length) return;
    videoAtual()?.pause();
    setIndice(novo);
    setTocando(false);
  };

  const alternarSom = (e) => {
    e.stopPropagation();
    const video = videoAtual();
    const novoMudo = !mudo;
    setMudo(novoMudo);
    if (video) video.muted = novoMudo;
  };

  // No celular, deslizar para o lado também troca de vídeo; um toque simples dá play/pausa
  const onPointerDown = (e) => { toque.current = e.clientX; };
  const onPointerUp = (e) => {
    if (toque.current === null) return;
    const dx = e.clientX - toque.current;
    toque.current = null;
    if (Math.abs(dx) > 50) trocar(dx < 0 ? 1 : -1);
    else alternarPlay();
  };

  const atual = videos[indice];

  return (
    <div className="h-full flex flex-col">
      <div className="relative aspect-[9/16] lg:aspect-auto lg:flex-1">
        <div
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          className="relative h-full rounded-[28px] overflow-hidden border border-white/10 bg-black shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] cursor-pointer select-none"
          style={{ touchAction: 'pan-y' }}
        >
          {videos.map((v, i) => (
            <video
              key={v.src}
              ref={(el) => { videoRefs.current[i] = el; }}
              src={v.src}
              poster={v.poster}
              loop
              playsInline
              preload="none"
              onPlay={() => i === indice && setTocando(true)}
              onPause={() => i === indice && setTocando(false)}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${i === indice ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            />
          ))}

          <div className={`absolute inset-0 bg-black/25 transition-opacity duration-500 pointer-events-none ${tocando ? 'opacity-0' : 'opacity-100'}`} />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

          {/* Topo: contador */}
          <div className="absolute top-5 left-5 right-5 flex items-center justify-between pointer-events-none">
            <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-white text-[10px] font-semibold uppercase tracking-[0.25em]">
              Vídeo
            </span>
            <span className="text-[11px] font-semibold tracking-[0.25em] text-white/70 tabular-nums">
              <span className="text-rose-gold-light">{String(indice + 1).padStart(2, '0')}</span> / {String(videos.length).padStart(2, '0')}
            </span>
          </div>

          {/* Play central com halo pulsando */}
          <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-500 ${tocando ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
            <span className="play-pulso relative w-20 h-20 md:w-24 md:h-24 btn-gold !rounded-full !p-0 flex items-center justify-center">
              <Play className="w-8 h-8 md:w-9 md:h-9 ml-1 fill-current" />
            </span>
          </div>

          {/* Legenda */}
          <div className="absolute left-5 right-20 bottom-5 pointer-events-none">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-rose-gold-light mb-1">{atual.rotulo}</p>
            <p className="font-heading text-2xl text-white leading-tight">{atual.titulo}</p>
          </div>

          <button
            type="button"
            onPointerDown={(e) => e.stopPropagation()}
            onPointerUp={(e) => e.stopPropagation()}
            onClick={alternarSom}
            aria-label={mudo ? 'Ativar som do vídeo' : 'Desativar som do vídeo'}
            className="absolute right-5 bottom-5 w-11 h-11 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white flex items-center justify-center hover:bg-white/25 transition-colors"
          >
            {mudo ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
        </div>

        <SetasCarrossel progresso={indice / (videos.length - 1)} mover={trocar} />
      </div>

      {/* Pontos + "próximo vídeo" */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {videos.map((v, i) => (
            <button
              key={v.src}
              type="button"
              onClick={() => trocar(i - indice)}
              aria-label={`Ver vídeo ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === indice ? 'w-8 bg-rose-gold' : 'w-3 bg-white/25 hover:bg-white/40'}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => trocar(indice < videos.length - 1 ? 1 : -indice)}
          className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-gold-light hover:text-white transition-colors"
        >
          {indice < videos.length - 1 ? 'Próximo vídeo' : 'Ver o primeiro'}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function CasosCarrossel() {
  const { trilhoRef, progresso, ativo, mover, handlers } = useCarrossel(casos.length);

  return (
    <div className="mt-14 md:mt-20">
      <div className="flex items-end justify-between gap-6 mb-6 md:mb-8">
        <div>
          <p className="eyebrow eyebrow-dark mb-4">Galeria de casos</p>
          <h3 className="font-heading text-[34px] md:text-[44px] font-semibold text-white leading-[1.05]">
            Mais sorrisos <span className="italic font-medium text-rose-gold">transformados</span>
          </h3>
          <p className="mt-3 flex items-center gap-2 text-[13px] md:text-sm text-white/55">
            <MoveHorizontal className="w-4 h-4 text-rose-gold" />
            Arraste para o lado e conheça cada caso
          </p>
        </div>
      </div>

      <div className="relative">
        <div
          ref={trilhoRef}
          {...handlers}
          className="carrossel-casos flex gap-5 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 pb-2 cursor-grab active:cursor-grabbing select-none"
          style={{ scrollPaddingLeft: '1rem' }}
        >
          {casos.map((caso, i) => (
            <figure
              key={caso.src}
              className="group relative shrink-0 snap-start w-[82%] sm:w-[46%] lg:w-[calc((100%-40px)/3.25)] aspect-[4/5] rounded-[28px] overflow-hidden border border-white/10 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.8)]"
            >
              <img
                src={caso.src}
                alt={caso.alt}
                loading="lazy"
                decoding="async"
                draggable="false"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
              />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/45 backdrop-blur-md text-white text-[10px] font-semibold uppercase tracking-[0.25em]">Antes</span>
              <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/85 backdrop-blur-md text-vinho text-[10px] font-semibold uppercase tracking-[0.25em]">Depois</span>
              <figcaption className="absolute inset-x-0 bottom-0 p-5 pt-16 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-rose-gold-light">Caso {String(i + 1).padStart(2, '0')}</p>
                <p className="font-heading text-xl text-white leading-tight mt-0.5">Lentes em resina</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <SetasCarrossel progresso={progresso} mover={mover} />
      </div>

      <ProgressoCarrossel progresso={progresso} ativo={ativo} total={casos.length} />
    </div>
  );
}

export default function LentesResultados() {
  return (
    <section id="lentes" className="relative overflow-hidden bg-brand-dark pt-16 md:pt-24 lg:pt-28 pb-10 md:pb-16 lg:pb-20">
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

          {/* Vídeos de antes e depois */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2 w-full max-w-[360px] sm:max-w-[400px] lg:max-w-none mx-auto"
          >
            <VideosAntesDepois />
          </motion.div>

          {/* Chamada */}
          <div className="lg:col-span-7 lg:row-start-2 flex">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full rounded-[28px] border border-white/10 bg-white/[0.04] p-6 md:p-8 flex flex-col"
            >
              <h3 className="font-heading text-[28px] font-semibold text-white leading-tight mb-5">
                Naturalidade em <span className="italic text-rose-gold">cada detalhe</span>
              </h3>
              <ul className="grid sm:grid-cols-3 gap-4 mb-7 flex-grow">
                {beneficios.map((b) => (
                  <li key={b} className="flex gap-3 text-[14px] text-white/75 leading-snug">
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-rose-gold" />
                    {b}
                  </li>
                ))}
              </ul>
              <button type="button" onClick={agendarLentes} className="btn-gold w-full sm:w-auto sm:self-start py-4 px-8 text-[11px]">
                Avaliar meu sorriso
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>

        <CasosCarrossel />
      </div>
    </section>
  );
}
