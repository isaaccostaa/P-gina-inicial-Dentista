import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Com que frequência devo ir ao dentista?",
      answer: "Recomendamos visitas a cada 6 meses para check-ups e limpezas preventivas. Em casos de tratamentos específicos, o intervalo pode ser menor conforme orientação da Dra. Kamille."
    },
    {
      question: "A clínica realiza avaliação antes de indicar o tratamento?",
      answer: "Sim, toda jornada começa com um Check-up Digital minucioso. Analisamos sua saúde bucal, alinhamento e estética facial para criar um plano de tratamento 100% personalizado."
    },
    {
      question: "Quais tratamentos odontológicos a clínica oferece?",
      answer: "Realizamos tratamentos estéticos, preventivos e restauradores, incluindo lentes em resina, clareamento dental, limpeza profissional, restaurações, tratamento endodôntico (canal) e atendimentos de urgência."
    },
    {
      question: "Os procedimentos são realizados com planejamento personalizado?",
      answer: "Sim. Cada procedimento é planejado de forma individualizada, considerando as características, necessidades e objetivos de cada paciente para proporcionar resultados mais equilibrados e funcionais."
    }
  ];

  return (
    <section id="faq" className="py-14 md:py-24 lg:py-20 xl:py-24 bg-[#1D0509] relative overflow-hidden">
      {/* Decoração sutil de fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-base/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-sm text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
          >
            FAQ
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[34px] lg:text-[40px] xl:text-[48px] font-black text-white leading-tight mb-6 md:mb-8"
          >
            Perguntas frequentes
          </motion.h2>
        </div>

        <div className="space-y-2.5 md:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-xl md:rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <button
                className="w-full text-left px-5 md:px-8 lg:px-6 xl:px-8 py-4 md:py-6 lg:py-5 xl:py-6 flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-[16px] md:text-lg font-bold text-white pr-8 leading-tight">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-white shrink-0"
                >
                  <Plus className="w-6 h-6" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-5 md:px-8 lg:px-6 xl:px-8 pb-4 md:pb-6 lg:pb-5 xl:pb-6 text-slate-300 text-[14px] md:text-base lg:text-[15px] leading-relaxed border-t border-white/10 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
