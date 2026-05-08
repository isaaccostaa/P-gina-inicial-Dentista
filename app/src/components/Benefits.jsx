import { motion } from 'framer-motion';
import { Palette, Zap, ShieldCheck } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: <Palette className="w-6 h-6 text-indigo-600" />,
      title: "Design de Nível Mundial",
      description: "Treinado em milhares de sites premiados para garantir que cada pixel exale profissionalismo e inovação.",
      gradient: "from-indigo-500/10 to-blue-500/10"
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-600" />,
      title: "Performance Extrema",
      description: "Código React puro com Tailwind. Pontuação perfeita no Lighthouse e SEO técnico que impulsiona seus resultados.",
      gradient: "from-purple-500/10 to-indigo-500/10"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: "Estrutura Escalável",
      description: "Não é apenas um site. É uma fundação sólida, acessível e pronta para crescer junto com seu negócio.",
      gradient: "from-blue-500/10 to-indigo-500/10"
    }
  ];

  return (
    <section id="recursos" className="section-padding bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight"
          >
            Poder de agência, <br />
            <span className="text-gradient">velocidade de IA.</span>
          </motion.h2>
          <p className="text-lg text-slate-500 font-medium">
            Entregamos qualidade visual absoluta e código de alto nível, eliminando meses de trabalho manual.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-10 rounded-[2.5rem] bg-white border border-slate-200/60 shadow-sm hover:shadow-premium transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-[1.25rem] bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-white transition-all duration-500 shadow-sm">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
