import { motion } from 'framer-motion';
import tra1 from '../assets/tra1.png';
import tra2 from '../assets/tra2.png';

export default function Transformations() {
  const images = [tra1, tra2];

  return (
    <section id="transformações" className="py-14 md:py-24 lg:py-20 xl:py-24 bg-[#1D0509] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-base/10 rounded-full blur-[150px]" />
      </div>

      <div className="w-full relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-sm text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
          >
            Galeria de Resultados
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[34px] lg:text-[48px] xl:text-[56px] font-black text-white mb-4 md:mb-6 leading-tight"
          >
            Transformações <br />
            <span className="text-brand-light">em Detalhes.</span>
          </motion.h2>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="w-full overflow-hidden shadow-[0_32px_64px_-15px_rgba(0,0,0,0.6)] lg:max-h-[480px] xl:max-h-[540px]"
        >
          <div className="flex flex-col md:flex-row w-full">
            {images.map((img, index) => (
              <div key={index} className="w-full md:w-1/2 flex-shrink-0 group relative overflow-hidden aspect-[3/2] md:aspect-auto">
                <img 
                  src={img} 
                  alt={`Composição de Resultados ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D0509]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-8">
                  <span className="text-white/60 font-bold uppercase tracking-[0.3em] text-[10px]">Resultados Dra. Kamille</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
