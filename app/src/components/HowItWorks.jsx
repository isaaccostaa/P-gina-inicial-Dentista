import { motion } from 'framer-motion';
import { Clock, Calendar, Gift, MessageSquare } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="pt-8 md:pt-12 pb-10 md:pb-20 bg-transparent relative overflow-hidden">
      {/* Fundo animado: luzes rosé gold que flutuam devagar e fios dourados que se desenham.
          Cada elemento tem um ritmo diferente, então a combinação quase nunca se repete. */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="aurora aurora-1" />
        <div className="aurora aurora-2" />
        <div className="aurora aurora-3" />
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none" fill="none">
          <path className="fio-ouro fio-ouro-1" pathLength="1" d="M-40 640 C 260 520, 420 760, 720 620 S 1180 380, 1480 520" />
          <path className="fio-ouro fio-ouro-2" pathLength="1" d="M-40 260 C 300 380, 520 140, 820 250 S 1220 420, 1480 300" />
        </svg>
      </div>

      <div className="max-w-7xl lg:max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto mb-12 md:mb-16 px-4 text-center">
          <p className="eyebrow eyebrow-center mb-5">Experiência</p>
          <h2 className="text-[40px] lg:text-[52px] xl:text-[60px] font-semibold text-vinho leading-[1.02]">
            Como funciona o <span className="italic font-medium text-rose-gold-dark">atendimento</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm p-6 md:p-12 lg:p-8 xl:p-10 rounded-[28px] md:rounded-[2.5rem] flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start shadow-sm border border-slate-100 hover:border-brand-base/20 hover:shadow-premium transition-all duration-500 group"
          >
            <div className="flex-shrink-0 w-16 h-16 rounded-full border border-rose-gold/40 flex items-center justify-center text-rose-gold-dark bg-white group-hover:bg-vinho group-hover:text-rose-gold group-hover:border-vinho transition-all duration-500">
              <Clock className="w-7 h-7 stroke-[1.5]" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-[28px] font-heading text-vinho mb-2 md:mb-3 font-semibold">Consulta personalizada</h3>
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
            <div className="flex-shrink-0 w-16 h-16 rounded-full border border-rose-gold/40 flex items-center justify-center text-rose-gold-dark bg-white group-hover:bg-vinho group-hover:text-rose-gold group-hover:border-vinho transition-all duration-500">
              <Calendar className="w-7 h-7 stroke-[1.5]" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-[28px] font-heading text-vinho mb-2 md:mb-3 font-semibold">Retorno em até 30 dias</h3>
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
            <div className="flex-shrink-0 w-16 h-16 rounded-full border border-rose-gold/40 flex items-center justify-center text-rose-gold-dark bg-white group-hover:bg-vinho group-hover:text-rose-gold group-hover:border-vinho transition-all duration-500">
              <Gift className="w-7 h-7 stroke-[1.5]" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-[28px] font-heading text-vinho mb-2 md:mb-3 font-semibold">Receba um mimo</h3>
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
            <div className="flex-shrink-0 w-16 h-16 rounded-full border border-rose-gold/40 flex items-center justify-center text-rose-gold-dark bg-white group-hover:bg-vinho group-hover:text-rose-gold group-hover:border-vinho transition-all duration-500">
              <MessageSquare className="w-7 h-7 stroke-[1.5]" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-[28px] font-heading text-vinho mb-2 md:mb-3 font-semibold">Agendamento Online</h3>
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
