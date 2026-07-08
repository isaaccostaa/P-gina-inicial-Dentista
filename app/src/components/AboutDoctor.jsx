import { useState, useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { HeartPulse } from 'lucide-react';
import fotoKamille from '../assets/fotoKamille.jpg';

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
    <section id="sobre" className="py-14 md:py-32 lg:py-20 xl:py-24 relative overflow-hidden bg-gradient-to-b from-[#3F0E16] via-[#3F0E16] to-white">
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
                  <div className="w-12 h-12 bg-brand-base text-white rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-brand-base/20">
                    <HeartPulse className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-3xl font-black text-white">
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
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-sm text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
            >
              Conheça a Doutora
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[32px] lg:text-[40px] xl:text-[48px] font-black text-white leading-tight mb-2"
            >
              Dra. Kamille Gallego Vieira
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-xs md:text-sm font-bold uppercase tracking-wider text-brand-light md:text-slate-300 mb-6 md:mb-8"
            >
              Odontologia Estética • Lentes em Resina | CRO-SP 170569
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              translate="no"
              className="notranslate text-[17px] lg:text-xl xl:text-2xl font-serif italic text-slate-300 mb-6 md:mb-8 leading-relaxed"
            >
              "Minha missão é proporcionar uma experiência acolhedora e personalizada, ajudando cada paciente a se sentir mais feliz, leve e satisfeito ao sorrir."
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-6 text-[15px] lg:text-base xl:text-[17px] text-slate-300 font-medium leading-relaxed mb-8 md:mb-10"
            >
              <p>
                Sou a Dra. Kamille Gallego Vieira, cirurgiã-dentista inscrita no CRO-SP 170569, com atuação voltada à Odontologia Estética e aos tratamentos relacionados à saúde bucal. Meu trabalho envolve procedimentos que buscam valorizar a harmonia do sorriso, preservando a naturalidade e respeitando as características de cada paciente.
              </p>
              <p>
                Realizo procedimentos como lentes em resina, clareamento dental, limpeza profissional, restaurações, tratamento endodôntico (canal) e atendimentos de urgência, sempre com planejamento personalizado e foco na naturalidade dos resultados.
              </p>
              <p>
                Com atenção às particularidades de cada sorriso, acredito que a estética odontológica deve estar associada à naturalidade, harmonia e funcionalidade. Por isso, cada procedimento é planejado de forma criteriosa e personalizada, buscando resultados leves, equilibrados e alinhados às necessidades de cada paciente.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
