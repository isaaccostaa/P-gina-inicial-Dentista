import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Grátis",
      description: "Para criadores e entusiastas.",
      features: ["1 Projeto Ativo", "Design System Essencial", "Exportação Padrão", "Suporte da Comunidade"],
      cta: "Começar de graça",
      popular: false
    },
    {
      name: "Pro",
      price: "R$ 99",
      period: "/mês",
      description: "Para profissionais e agências.",
      features: ["Projetos Ilimitados", "Exportação Premium (Next.js)", "Acesso à API", "Suporte Prioritário 24/7", "Domínios Customizados"],
      cta: "Assinar Pro",
      popular: true
    }
  ];

  return (
    <section id="preços" className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6"
          >
            Escalabilidade <br />
            <span className="text-gradient">sem surpresas.</span>
          </motion.h2>
          <p className="text-lg text-slate-500 font-medium">
            Planos flexíveis que crescem com você. Comece grátis, mude quando precisar.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-10 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex-1 rounded-[3rem] p-12 border transition-all duration-500 ${
                plan.popular 
                  ? 'border-indigo-200 shadow-2xl relative bg-white' 
                  : 'border-slate-200 bg-slate-50/50'
              } hover:shadow-premium group`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg shadow-indigo-200">
                  Mais Recomendado
                </div>
              )}
              
              <h3 className="text-2xl font-black text-slate-900 mb-3">{plan.name}</h3>
              <p className="text-slate-500 mb-8 font-medium">{plan.description}</p>
              
              <div className="mb-10 flex items-baseline gap-2">
                <span className="text-5xl md:text-6xl font-black text-slate-900">{plan.price}</span>
                {plan.period && <span className="text-slate-400 font-bold text-lg">{plan.period}</span>}
              </div>
              
              <ul className="space-y-5 mb-12 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-600 font-medium">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${plan.popular ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-200 text-slate-500'}`}>
                      <Check className="w-4 h-4" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-5 rounded-2xl font-bold text-lg transition-all duration-300 ${
                plan.popular
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-100 hover:shadow-indigo-200 hover:-translate-y-1'
                  : 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 hover:border-slate-300'
              } active:scale-95`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
