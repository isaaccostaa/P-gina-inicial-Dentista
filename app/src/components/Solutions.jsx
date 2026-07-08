import { motion } from 'framer-motion';
import {
  Palette,
  Sparkles,
  ShieldCheck,
  Activity,
  Smile,
  HeartPulse,
  Clock,
  ArrowRight
} from 'lucide-react';
import imgFaceta from '../assets/lente 1.PNG';
import imgClareamento from '../assets/clareamentoz1.jpeg';
import imgLimpeza from '../assets/limpeza3s.png';
import imgCanal from '../assets/endodontia.png';
import imgRestauracao from '../assets/restauração.png';
import imgCirurgia from '../assets/cirurgiã dentista.png';
import imgEmergencia from '../assets/ft2.jpeg';

export default function Solutions() {
  const mainHighlights = [
    {
      title: "Lentes em Resina",
      description: "Procedimento estético realizado com resinas de alta qualidade para proporcionar harmonia, naturalidade e equilíbrio ao sorriso.",
      icon: <Palette className="w-8 h-8" />,
      image: imgFaceta,
      color: "#B5526C",
      prefill: {
        servico: 'Facetas',
        mensagem: 'Olá! Gostaria de saber como funciona o procedimento de facetas e tenho grande interesse em agendar uma avaliação para transformar meu sorriso.'
      }
    },
    {
      title: "Clareamento Dental",
      description: "Protocolos personalizados de consultório e caseiro para proporcionar mais luminosidade, naturalidade e harmonia estética aos dentes.",
      icon: <Sparkles className="w-8 h-8" />,
      image: imgClareamento,
      color: "#B5526C",
      prefill: {
        servico: 'Clareamento',
        mensagem: 'Olá! Gostaria de entender como funciona o clareamento dental aqui na clínica e tenho interesse em agendar uma avaliação.'
      }
    },
    {
      title: "Limpeza Profissional",
      description: "Higienização completa e preventiva para remoção de placa e tártaro, garantindo a saúde duradoura da sua boca.",
      icon: <ShieldCheck className="w-8 h-8" />,
      image: imgLimpeza,
      color: "#B5526C",
      prefill: {
        servico: 'Limpeza',
        mensagem: 'Olá! Gostaria de saber mais detalhes sobre como funciona a limpeza profissional (profilaxia) pois tenho interesse em agendar um horário.'
      }
    }
  ];

  const secondarySpecialties = [
    {
      title: "Tratamento Endodôntico (CANAL)",
      description: "Tratamento realizado com técnicas modernas e precisão para preservar a estrutura dental de forma segura e eficiente.",
      icon: <Activity className="w-6 h-6" />,
      image: imgCanal,
      color: "#B5526C",
      prefill: {
        servico: 'Canal (Endodontia)',
        mensagem: 'Olá! Gostaria de saber mais detalhes de como funciona o tratamento endodôntico (canal) e gostaria de agendar uma avaliação com a doutora.'
      }
    },
    {
      title: "Restauração",
      description: "Restaurações planejadas para recuperar a integridade dental com precisão, resistência e qualidade funcional.",
      icon: <Smile className="w-6 h-6" />,
      image: imgRestauracao,
      color: "#B5526C",
      prefill: {
        servico: 'Restauração',
        mensagem: 'Olá! Gostaria de entender melhor como funciona o procedimento de restauração e desejo agendar uma avaliação.'
      }
    },
    {
      title: "Cirurgiã-Dentista",
      description: "Procedimentos cirúrgicos realizados com técnica avançada e total segurança.",
      icon: <HeartPulse className="w-6 h-6" />,
      image: imgCirurgia,
      color: "#B5526C",
      prefill: {
        servico: 'Cirurgia',
        mensagem: 'Olá! Vi o perfil da Dra. Kamille e tenho interesse em agendar uma avaliação clínica com ela.'
      }
    },
    {
      title: "Emergências",
      description: "Atendimento ágil para alívio imediato da dor e resolução de imprevistos dentais.",
      icon: <Clock className="w-6 h-6" />,
      image: imgEmergencia,
      color: "#B5526C",
      prefill: {
        servico: 'Emergência',
        mensagem: 'Olá! Estou com uma emergência odontológica. Gostaria de saber sobre a disponibilidade imediata e desejo agendar um horário o quanto antes.'
      }
    },
  ];

  const handleAgendar = (prefill) => {
    window.dispatchEvent(new CustomEvent('prefillForm', { detail: prefill }));
    const el = document.getElementById('secao-agendamento');
    if (el) {
      if (window.lenis) {
        window.lenis.scrollTo(el, {
          offset: -80, // Accounts for the sticky header
          duration: 1.4,
          easing: (t) => 1 - Math.pow(1 - t, 4), // Velvet easeOutQuart curve
          onComplete: () => {
            const inputNome = document.getElementById('input-nome-agendamento');
            if (inputNome) {
              inputNome.focus();
            }
          }
        });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          const inputNome = document.getElementById('input-nome-agendamento');
          if (inputNome) inputNome.focus();
        }, 800);
      }
    }
  };

  return (
    <section id="servicos" className="py-12 md:py-24 lg:py-20 xl:py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl lg:max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-200/50 text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
          >
            Nossos Serviços
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[34px] lg:text-[48px] xl:text-[56px] font-black text-slate-900 leading-tight mb-6 md:mb-8"
          >
            Soluções <br />
            <span style={{ color: '#B5526C' }}>Odontológicas.</span>
          </motion.h2>
        </div>

        {/* Tier 1: 3 Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {mainHighlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-[28px] md:rounded-[3rem] shadow-premium border border-slate-100 hover:shadow-2xl transition-all duration-500 group flex flex-col h-full overflow-hidden"
            >
              <div className="relative aspect-[4/3] md:aspect-none md:h-[450px] lg:h-[280px] xl:h-[320px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6 md:p-10 lg:p-6 xl:p-8 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3 md:mb-4 tracking-tight">{item.title}</h3>
                <p className="text-[15px] md:text-base text-slate-500 leading-relaxed font-medium mb-6 md:mb-10 flex-grow text-left">
                  {item.description}
                </p>

                <button
                  onClick={() => handleAgendar(item.prefill)}
                  className="inline-flex items-center justify-center gap-3 w-full py-4 md:py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-500 ease-out hover:-translate-y-0.5 active:scale-[0.98] border-2"
                  style={{ borderColor: item.color, color: item.color, backgroundColor: 'transparent' }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = item.color; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = item.color; }}
                >
                  Agendar Consulta
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tier 2: 4 Medium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {secondarySpecialties.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-[28px] md:rounded-[2.5rem] shadow-md border border-slate-100 hover:shadow-xl transition-all duration-500 group flex flex-col h-full overflow-hidden"
            >
              <div className="relative aspect-[4/3] md:aspect-none md:h-[320px] lg:h-[200px] xl:h-[220px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6 md:p-8 lg:p-5 xl:p-6 flex flex-col flex-grow">
                <h3 className="text-lg md:text-xl font-black text-slate-900 mb-2 md:mb-3 tracking-tight leading-tight min-h-[3rem] flex items-center">{item.title}</h3>
                <p className="text-slate-500 text-[14px] md:text-sm leading-relaxed font-medium mb-4 md:mb-6 flex-grow text-left">
                  {item.description}
                </p>

                <button
                  onClick={() => handleAgendar(item.prefill)}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 md:py-4 rounded-xl font-black text-[9px] uppercase tracking-[0.2em] transition-all duration-500 ease-out hover:-translate-y-0.5 active:scale-[0.98] border-2"
                  style={{ borderColor: item.color, color: item.color, backgroundColor: 'transparent' }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = item.color; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = item.color; }}
                >
                  Saiba Mais
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
