import { useState, useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { HeartPulse } from 'lucide-react';
import fotoKamille from '../assets/fotoKamille.webp';

function AnimatedCounter({ from, to, duration = 2 }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration: duration,
        ease: "easeOut",
        onUpdate: (value) => {
          setCount(Math.round(value));
        }
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function AboutDoctor() {

  return (
    <section id="sobre" className="py-14 md:py-32 lg:py-20 xl:py-24 relative overflow-hidden bg-gradient-to-b from-[#3F0E16] to-brand-dark">
      {/* Decorative light elements */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-base/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl lg:max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Column: Image with Decorative Elements */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full max-w-[340px] md:max-w-[400px] lg:max-w-[380px] xl:max-w-[420px] mx-auto aspect-[3/4]">
              {/* Image Container with uniform rounded corners */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative w-full h-full rounded-[28px] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10 z-10"
              >
                <img
                  src={fotoKamille}
                  alt="Dra. Kamille Gallego Vieira"
                  className="w-full h-full object-cover object-center scale-100 transition-transform duration-500 hover:scale-105"
                  style={{ objectPosition: 'center top' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent z-20 pointer-events-none" />
              </motion.div>

              {/* Floating Experience Card positioned relative to the vertical image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-8 right-0 md:-right-4 lg:-right-12 bg-white/10 backdrop-blur-xl p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-premium border border-white/20 max-w-[200px] md:max-w-[240px] z-20"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-rose-gold text-vinho rounded-full flex items-center justify-center shrink-0">
                    <HeartPulse className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading text-4xl font-semibold text-white">
                      +<AnimatedCounter from={0} to={500} duration={2.5} />
                    </h4>
                  </div>
                </div>
                <p className="text-sm font-semibold text-slate-200 leading-tight">
                  Pacientes Atendidos
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-1/2 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                            className="eyebrow eyebrow-dark mb-5"
            >
              Conheça a doutora
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[40px] lg:text-[52px] xl:text-[60px] font-semibold text-white leading-[1.02] mb-3"
            >
              Dra. Kamille Gallego Vieira
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-rose-gold mb-6 md:mb-8"
            >
              Cirurgiã-dentista em São Carlos · CRO-SP 170569
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              translate="no"
              className="notranslate text-[22px] lg:text-[26px] xl:text-[28px] font-heading italic text-rose-gold-light mb-6 md:mb-8 leading-snug border-l border-rose-gold/40 pl-5"
            >
              "Minha missão é proporcionar uma experiência acolhedora e personalizada, ajudando cada paciente a se sentir mais feliz, leve e satisfeito ao sorrir."
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-5 text-[15px] lg:text-base text-white/70 leading-relaxed mb-8 md:mb-10"
            >
              <p>
                Atuo em Odontologia Estética e no cuidado da saúde bucal. Meu objetivo é realçar a beleza do seu sorriso sem apagar a sua identidade: resultados que parecem seus, nunca artificiais.
              </p>
              <p>
                No consultório, realizo lentes em resina, clareamento dental, limpeza profissional, restaurações e atendimentos de urgência. Todo tratamento começa com uma avaliação cuidadosa, em que analiso dentes, gengiva e traços do rosto para indicar o que realmente faz sentido para você.
              </p>
              <p>
                Acredito que estética e saúde caminham juntas. Por isso, explico cada etapa com clareza, respeito o seu tempo e planejo cada detalhe para que o resultado seja bonito, equilibrado e funcional.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
