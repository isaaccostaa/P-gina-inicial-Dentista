import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Calendar, Gift, MessageSquare } from 'lucide-react';
import modelo from '../assets/modelo 1.jpg';

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={sectionRef} className="py-10 md:py-20 bg-transparent relative overflow-hidden">
      {/* Discreet Background Image with Advanced Masking */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      >
        <img 
          src={modelo} 
          alt="" 
          className="w-full h-full object-cover opacity-[0.12] grayscale-[30%] scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent" />
      </motion.div>

      <div className="max-w-7xl lg:max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto mb-16 px-4">
          <div className="bg-[#1a232e] py-4 md:py-6 px-6 md:px-10 rounded-2xl shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <h2 className="text-white text-lg md:text-3xl font-serif italic text-center flex items-center justify-center gap-4 relative z-10">
              <span className="text-brand-light/40 animate-pulse">◇</span>
              Como funciona nosso atendimento?
              <span className="text-brand-light/40 animate-pulse">◇</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm p-6 md:p-12 lg:p-8 xl:p-10 rounded-[28px] md:rounded-[2.5rem] flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start shadow-sm border border-slate-100 hover:border-brand-base/20 hover:shadow-premium transition-all duration-500 group"
          >
            <div className="flex-shrink-0 w-20 h-20 rounded-full border-2 border-brand-base/10 flex items-center justify-center text-brand-base bg-brand-base/5 group-hover:bg-brand-base group-hover:text-white transition-all duration-500 shadow-inner">
              <Clock className="w-9 h-9 stroke-[1.5]" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-serif text-slate-900 mb-3 md:mb-4 font-bold tracking-tight">Consulta personalizada</h3>
              <p className="text-[15px] text-slate-500 leading-relaxed font-medium">
                Levamos o tempo necessário para te atender com total atenção, entender suas necessidades e preocupações.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm p-6 md:p-12 lg:p-8 xl:p-10 rounded-[28px] md:rounded-[2.5rem] flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start shadow-sm border border-slate-100 hover:border-brand-base/20 hover:shadow-premium transition-all duration-500 group"
          >
            <div className="flex-shrink-0 w-20 h-20 rounded-full border-2 border-brand-base/10 flex items-center justify-center text-brand-base bg-brand-base/5 group-hover:bg-brand-base group-hover:text-white transition-all duration-500 shadow-inner">
              <Calendar className="w-9 h-9 stroke-[1.5]" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-serif text-slate-900 mb-3 md:mb-4 font-bold tracking-tight">Retorno em até 30 dias</h3>
              <p className="text-[15px] text-slate-500 leading-relaxed font-medium">
                Quando necessário, garantimos o seu acompanhamento e ajustes precisos sem custos adicionais.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm p-6 md:p-12 lg:p-8 xl:p-10 rounded-[28px] md:rounded-[2.5rem] flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start shadow-sm border border-slate-100 hover:border-brand-base/20 hover:shadow-premium transition-all duration-500 group"
          >
            <div className="flex-shrink-0 w-20 h-20 rounded-full border-2 border-brand-base/10 flex items-center justify-center text-brand-base bg-brand-base/5 group-hover:bg-brand-base group-hover:text-white transition-all duration-500 shadow-inner">
              <Gift className="w-9 h-9 stroke-[1.5]" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-serif text-slate-900 mb-3 md:mb-4 font-bold tracking-tight">Receba um mimo</h3>
              <p className="text-[15px] text-slate-500 leading-relaxed font-medium">
                Cuidamos de cada detalhe para que você se sinta valorizado. Preparamos uma experiência de boas-vindas.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm p-6 md:p-12 lg:p-8 xl:p-10 rounded-[28px] md:rounded-[2.5rem] flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start shadow-sm border border-slate-100 hover:border-brand-base/20 hover:shadow-premium transition-all duration-500 group"
          >
            <div className="flex-shrink-0 w-20 h-20 rounded-full border-2 border-brand-base/10 flex items-center justify-center text-brand-base bg-brand-base/5 group-hover:bg-brand-base group-hover:text-white transition-all duration-500 shadow-inner">
              <MessageSquare className="w-9 h-9 stroke-[1.5]" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-serif text-slate-900 mb-3 md:mb-4 font-bold tracking-tight">Agendamento Online</h3>
              <p className="text-[15px] text-slate-500 leading-relaxed font-medium">
                Agende sua avaliação com apenas alguns cliques, diretamente pelo WhatsApp ou site, com praticidade.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
