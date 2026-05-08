import { motion } from 'framer-motion';
import { Layers, Globe, Code2, Rocket } from 'lucide-react';

export default function FeaturesHighlights() {
  const features = [
    {
      title: "Design Adaptativo Inteligente",
      description: "Layouts que se ajustam organicamente a qualquer resolução. Sua interface impecável em mobile, tablet ou telas ultra-wide.",
      icon: <Layers className="w-5 h-5" />,
      colSpan: "col-span-1 md:col-span-2",
      bgClass: "bg-white",
      iconBg: "bg-indigo-50 text-indigo-600"
    },
    {
      title: "Deploy Global Ultra-Rápido",
      description: "Hospedagem em borda (Edge) para latência zero.",
      icon: <Globe className="w-5 h-5" />,
      colSpan: "col-span-1 md:col-span-1",
      bgClass: "bg-slate-50",
      iconBg: "bg-blue-50 text-blue-600"
    },
    {
      title: "Exportação em React/Next.js",
      description: "Código puro para controle total.",
      icon: <Code2 className="w-5 h-5" />,
      colSpan: "col-span-1 md:col-span-1",
      bgClass: "bg-slate-50",
      iconBg: "bg-purple-50 text-purple-600"
    },
    {
      title: "SEO Técnico & Core Web Vitals",
      description: "Otimização automática de performance e indexação. Alcance o topo dos resultados com sites que carregam instantaneamente.",
      icon: <Rocket className="w-5 h-5" />,
      colSpan: "col-span-1 md:col-span-2",
      bgClass: "bg-indigo-600 text-white",
      iconBg: "bg-white/10 text-white"
    }
  ];

  return (
    <section id="recursos" className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight"
          >
            Engenharia de elite. <br />
            <span className="text-slate-400">Simplicidade revolucionária.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group p-10 rounded-[2.5rem] border ${feature.bgClass === 'bg-indigo-600' ? 'border-indigo-500 shadow-xl shadow-indigo-100' : 'border-slate-200/60 shadow-sm'} ${feature.bgClass} ${feature.colSpan} flex flex-col justify-between transition-all duration-500 hover:shadow-premium hover:-translate-y-1`}
            >
              <div className="mb-12">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-8 ${feature.iconBg} shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className={`${feature.bgClass === 'bg-indigo-600' ? 'text-indigo-100' : 'text-slate-500'} text-lg font-medium leading-relaxed`}>
                  {feature.description}
                </p>
              </div>
              
              {/* Minimalist Visual Element */}
              <div className={`h-32 w-full rounded-2xl border ${feature.bgClass === 'bg-indigo-600' ? 'bg-white/5 border-white/10' : 'bg-slate-100/50 border-slate-200/50'} relative overflow-hidden`}>
                  <div className="absolute top-4 left-4 flex gap-1.5">
                    <div className={`w-1.5 h-1.5 rounded-full ${feature.bgClass === 'bg-indigo-600' ? 'bg-white/20' : 'bg-slate-300'}`} />
                    <div className={`w-1.5 h-1.5 rounded-full ${feature.bgClass === 'bg-indigo-600' ? 'bg-white/20' : 'bg-slate-300'}`} />
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
