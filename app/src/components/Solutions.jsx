import { motion } from 'framer-motion';
import { ArrowRight, MoveHorizontal } from 'lucide-react';
import useCarrossel from '../hooks/useCarrossel';
import { SetasCarrossel, ProgressoCarrossel } from './CarrosselControles';
import imgFaceta from '../assets/lente_1.webp';
import imgClareamento from '../assets/clareamentoz1.webp';
import imgLimpeza from '../assets/limpeza3s.webp';
import imgCanal from '../assets/endodontia.webp';
import imgRestauracao from '../assets/restauracao.webp';
import imgCirurgia from '../assets/cirurgia_dentista.webp';
import imgEmergencia from '../assets/ft2.webp';

// Os três primeiros são os destaques (linha de 3 no computador); os demais formam a linha de 4.
const servicos = [
  {
    title: 'Lentes em Resina',
    description: 'Procedimento estético realizado com resinas de alta qualidade para proporcionar harmonia, naturalidade e equilíbrio ao sorriso.',
    image: imgFaceta,
    resultados: true,
    prefill: {
      servico: 'Lentes em Resina',
      mensagem: 'Olá! Gostaria de saber como funciona o procedimento de lentes em resina e tenho interesse em agendar uma avaliação para transformar meu sorriso.'
    }
  },
  {
    title: 'Clareamento Dental',
    description: 'Protocolos personalizados de consultório e caseiro para proporcionar mais luminosidade, naturalidade e harmonia estética aos dentes.',
    image: imgClareamento,
    prefill: {
      servico: 'Clareamento',
      mensagem: 'Olá! Gostaria de entender como funciona o clareamento dental aqui na clínica e tenho interesse em agendar uma avaliação.'
    }
  },
  {
    title: 'Limpeza Profissional',
    description: 'Higienização completa e preventiva para remoção de placa e tártaro, garantindo a saúde duradoura da sua boca.',
    image: imgLimpeza,
    prefill: {
      servico: 'Limpeza',
      mensagem: 'Olá! Gostaria de saber mais detalhes sobre como funciona a limpeza profissional (profilaxia) pois tenho interesse em agendar um horário.'
    }
  },
  {
    title: 'Tratamento de Canal',
    description: 'Tratamento realizado com técnicas modernas e precisão para preservar a estrutura dental de forma segura e eficiente.',
    image: imgCanal,
    prefill: {
      servico: 'Canal (Endodontia)',
      mensagem: 'Olá! Gostaria de saber mais detalhes de como funciona o tratamento endodôntico (canal) e gostaria de agendar uma avaliação com a doutora.'
    }
  },
  {
    title: 'Restauração',
    description: 'Restaurações planejadas para recuperar a integridade dental com precisão, resistência e qualidade funcional.',
    image: imgRestauracao,
    prefill: {
      servico: 'Restauração',
      mensagem: 'Olá! Gostaria de entender melhor como funciona o procedimento de restauração e desejo agendar uma avaliação.'
    }
  },
  {
    title: 'Cirurgia Oral',
    description: 'Procedimentos cirúrgicos realizados com técnica avançada e total segurança.',
    image: imgCirurgia,
    prefill: {
      servico: 'Cirurgia',
      mensagem: 'Olá! Vi o perfil da Dra. Kamille e tenho interesse em agendar uma avaliação clínica com ela.'
    }
  },
  {
    title: 'Emergências',
    description: 'Atendimento ágil para alívio imediato da dor e resolução de imprevistos dentais.',
    image: imgEmergencia,
    prefill: {
      servico: 'Emergência',
      mensagem: 'Olá! Estou com uma emergência odontológica. Gostaria de saber sobre a disponibilidade imediata e desejo agendar um horário o quanto antes.'
    }
  },
];

const handleAgendar = (prefill) => {
  window.dispatchEvent(new CustomEvent('prefillForm', { detail: prefill }));
  const el = document.getElementById('secao-agendamento');
  if (!el) return;
  const focarNome = () => document.getElementById('input-nome-agendamento')?.focus();
  if (window.lenis) {
    window.lenis.scrollTo(el, {
      offset: -80, // altura do cabeçalho fixo
      duration: 1.4,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      onComplete: focarNome
    });
  } else {
    el.scrollIntoView({ behavior: 'smooth' });
    setTimeout(focarNome, 800);
  }
};

function CardServico({ item, numero, destaque }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: (numero % 4) * 0.08 }}
      className={`group snap-start shrink-0 w-[80%] sm:w-[48%] md:w-auto flex flex-col bg-white rounded-[28px] border border-[#EFE4DE] shadow-[0_24px_50px_-32px_rgba(42,10,16,0.45)] overflow-hidden transition-all duration-500 md:hover:-translate-y-1 md:hover:shadow-[0_34px_60px_-30px_rgba(42,10,16,0.5)] ${destaque ? 'md:col-span-4' : 'md:col-span-6 lg:col-span-3'}`}
    >
      <div className={`relative overflow-hidden ${destaque ? 'aspect-[4/3] lg:aspect-[5/4]' : 'aspect-[4/3]'}`}>
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          decoding="async"
          draggable="false"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
        />
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/85 backdrop-blur-md text-vinho text-[10px] font-semibold tracking-[0.25em] tabular-nums">
          {String(numero).padStart(2, '0')}
        </span>
        {item.resultados && (
          <a
            href="#lentes"
            className="absolute top-4 right-4 px-3 py-1 rounded-full bg-vinho/75 backdrop-blur-md text-white text-[10px] font-semibold uppercase tracking-[0.2em] hover:bg-vinho transition-colors"
          >
            Ver antes e depois
          </a>
        )}
      </div>

      <div className={`flex flex-col flex-grow ${destaque ? 'p-6 md:p-7 xl:p-8' : 'p-6'}`}>
        <h3 className={`font-heading font-semibold text-vinho leading-[1.1] tracking-normal mb-3 ${destaque ? 'text-[28px] xl:text-[30px]' : 'text-[26px]'}`}>
          {item.title}
        </h3>
        <p className="text-[15px] text-slate-500 leading-relaxed flex-grow">{item.description}</p>

        <div className="mt-6 pt-5 border-t border-[#F1E8E3]">
          <button
            type="button"
            onClick={() => handleAgendar(item.prefill)}
            className="inline-flex items-center gap-3 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.2em] text-vinho group/cta"
          >
            Agendar avaliação
            <span className="w-8 h-8 rounded-full border border-rose-gold/60 flex items-center justify-center text-rose-gold-dark transition-all duration-300 group-hover/cta:bg-rose-gold group-hover/cta:border-rose-gold group-hover/cta:text-vinho">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default function Solutions() {
  const { trilhoRef, progresso, ativo, mover, handlers } = useCarrossel(servicos.length);

  return (
    <section id="servicos" className="pt-8 md:pt-14 pb-12 md:pb-24 lg:pb-20 xl:pb-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl lg:max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow eyebrow-center mb-5"
          >
            Nossos Serviços
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[42px] lg:text-[56px] xl:text-[64px] font-semibold text-vinho leading-[1.02] mb-4"
          >
            Soluções <span className="italic font-medium text-rose-gold-dark">odontológicas</span>
          </motion.h2>
          <p className="md:hidden flex items-center justify-center gap-2 text-[13px] text-slate-500">
            <MoveHorizontal className="w-4 h-4 text-rose-gold-dark" />
            Arraste para o lado e conheça cada tratamento
          </p>
        </div>

        {/* Celular: galeria de arrastar. Computador: grade com 3 destaques + 4 especialidades */}
        <div className="relative">
          <div
            ref={trilhoRef}
            {...handlers}
            className="carrossel-casos flex gap-5 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 pt-2 pb-8 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-12 md:gap-6 lg:gap-7 md:overflow-visible select-none md:select-auto"
            style={{ scrollPaddingLeft: '1rem' }}
          >
            {servicos.map((item, i) => (
              <CardServico key={item.title} item={item} numero={i + 1} destaque={i < 3} />
            ))}
          </div>

          <div className="md:hidden">
            <SetasCarrossel progresso={progresso} mover={mover} tema="claro" topo="top-[24%]" />
          </div>
        </div>

        <ProgressoCarrossel progresso={progresso} ativo={ativo} total={servicos.length} tema="claro" className="md:hidden !mt-2" />
      </div>
    </section>
  );
}
