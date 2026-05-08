import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "O código exportado é amigável para desenvolvedores?",
      answer: "Absolutamente. O AIBuilder gera componentes React semânticos, utilizando Tailwind CSS para estilos. O resultado é um código modular, limpo e extremamente fácil de manter ou integrar em projetos existentes."
    },
    {
      question: "Como a IA decide o design do meu site?",
      answer: "Nosso motor de design analisa seu nicho, público-alvo e objetivos de conversão para selecionar padrões de UI comprovados, paletas de cores harmônicas e tipografias que transmitem a mensagem certa."
    },
    {
      question: "Posso publicar no meu próprio domínio?",
      answer: "Sim, usuários do plano Pro podem conectar domínios customizados com SSL automático e deploy global via nossa rede de borda (Edge Computing)."
    },
    {
      question: "Existe limite de páginas por projeto?",
      answer: "Não. Você pode criar desde landing pages únicas até sites multi-páginas complexos com nossa interface intuitiva."
    }
  ];

  return (
    <section className="section-padding bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6"
          >
            Dúvidas <span className="text-indigo-600">comuns.</span>
          </motion.h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-[2rem] border transition-all duration-300 ${openIndex === index ? 'border-indigo-200 bg-slate-50/50 shadow-sm' : 'border-slate-100 hover:border-slate-200 bg-white'}`}
            >
              <button
                className="w-full text-left px-8 py-7 flex items-center justify-between focus:outline-none group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`text-xl font-bold transition-colors ${openIndex === index ? 'text-indigo-600' : 'text-slate-900 group-hover:text-indigo-500'}`}>
                  {faq.question}
                </span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${openIndex === index ? 'bg-indigo-600 text-white rotate-180' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'}`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-slate-500 text-lg font-medium leading-relaxed">
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
