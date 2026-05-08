import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Descreva sua visão",
      description: "Conte para nossa IA sobre seu negócio e estilo em linguagem natural. Ela entende o contexto instantaneamente."
    },
    {
      number: "02",
      title: "IA Design System",
      description: "O motor processa sua ideia e cria uma identidade visual única, desde a paleta de cores até a tipografia."
    },
    {
      number: "03",
      title: "Código Pronto",
      description: "Visualize, aprove e receba o código React limpo ou publique direto na nossa infraestrutura global."
    }
  ];

  return (
    <section id="como-funciona" className="section-padding bg-slate-900 text-white relative overflow-hidden">
      {/* Immersive background elements */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-indigo-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[60%] bg-purple-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          <div className="flex-1 max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black mb-8 leading-tight"
            >
              Do conceito ao <br />
              <span className="text-indigo-400">código vivo</span> em minutos.
            </motion.h2>
            <p className="text-xl text-slate-400 mb-14 leading-relaxed font-medium">
              Eliminamos a barreira entre ideia e execução. Sem curva de aprendizado, sem limites criativos.
            </p>
            
            <div className="space-y-14">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex gap-8 group"
                >
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center font-heading text-2xl font-bold text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
                      {step.number}
                    </div>
                    {index !== steps.length - 1 && (
                      <div className="w-px h-full bg-gradient-to-b from-indigo-500/30 to-transparent my-2" />
                    )}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-300 transition-colors">{step.title}</h3>
                    <p className="text-slate-400 leading-relaxed font-medium text-lg">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full relative">
            {/* Visual demo card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square rounded-[3rem] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-8 shadow-2xl overflow-hidden backdrop-blur-sm"
            >
               {/* Glowing effect inside */}
               <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/30 rounded-full blur-[80px]" />
               
               <div className="h-full border border-white/5 rounded-[2rem] bg-slate-950/50 p-6 flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-white/20"></div>
                      <div className="w-3 h-3 rounded-full bg-white/20"></div>
                    </div>
                    <div className="px-3 py-1 bg-indigo-500/20 rounded-full text-[10px] font-bold text-indigo-400 uppercase tracking-tighter">AI Processing</div>
                  </div>
                  
                  <div className="flex-1 flex flex-col items-center justify-center gap-8">
                    <div className="relative">
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="w-32 h-32 rounded-full border-2 border-indigo-500/30 border-t-indigo-500" 
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-indigo-500/20 blur-xl animate-pulse" />
                      </div>
                    </div>
                    <div className="space-y-3 w-full max-w-[200px]">
                      <div className="h-2 w-full bg-white/10 rounded-full" />
                      <div className="h-2 w-3/4 bg-white/10 rounded-full mx-auto" />
                    </div>
                  </div>
               </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
