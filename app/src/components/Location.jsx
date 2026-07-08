import { motion } from 'framer-motion';
import { MapPin, Navigation, Phone } from 'lucide-react';

export default function Location() {
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=R.+Miguel+Petroni,+1265+-+Jardim+Bandeirantes,+São+Carlos+-+SP,+13563-470";
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.815949646453!2d-47.9048386!3d-21.9961313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b870c538421c97%3A0x6b44fb7fbf0dbd64!2sR.%20Miguel%20Petroni%2C%201265%20-%20Jardim%20Bandeirantes%2C%20S%C3%A3o%20Carlos%20-%20SP%2C%2013563-470!5e0!3m2!1spt-BR!2sbr!4v1715366400000!5m2!1spt-BR!2sbr";

  return (
    <section id="localizacao" className="py-14 md:py-24 lg:py-20 xl:py-24 relative overflow-hidden">
      <div className="max-w-7xl lg:max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-sm text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
          >
            Nosso espaço de atendimento
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[34px] lg:text-[40px] xl:text-[48px] font-black text-white leading-tight mb-4 md:mb-6"
          >
            Venha nos fazer uma visita
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[15px] md:text-lg text-slate-300 leading-relaxed mb-4 md:mb-0"
          >
            Um ambiente moderno e cuidadosamente planejado para oferecer uma experiência mais leve, organizada e funcional.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[24px] md:rounded-[2rem] p-5 md:p-6 lg:p-6 xl:p-8 shadow-premium"
        >
          <div className="flex flex-col lg:flex-row gap-8 items-center">

            {/* Informações de Contato / Endereço */}
            <div className="w-full lg:w-1/3 space-y-4 md:space-y-6 lg:space-y-8 p-2 md:p-4">
              <div>
                <h3 className="text-lg md:text-2xl font-bold text-white mb-4 md:mb-6">Dra. Kamille Gallego Vieira</h3>

                <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-brand-light" />
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base font-semibold text-white">Endereço</h4>
                    <p className="text-slate-300 text-xs md:text-sm mt-1 leading-relaxed">
                      R. Miguel Petroni, 1265<br />
                      Jardim Bandeirantes<br />
                      São Carlos - SP, 13563-470
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-[320px] mx-auto py-4 bg-brand-base text-white rounded-xl font-bold text-xs md:text-sm uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-brand-light hover:text-brand-dark transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.02] shadow-lg active:scale-[0.98]"
              >
                <Navigation className="w-5 h-5" />
                Abrir no Google Maps
              </a>
            </div>

            {/* Mapa Interativo */}
            <div className="w-full lg:w-2/3 h-[250px] md:h-[400px] lg:h-[360px] xl:h-[400px] rounded-2xl md:rounded-3xl overflow-hidden relative group cursor-pointer" onClick={() => window.open(mapUrl, '_blank')}>
              {/* Overlay interativo para capturar o clique e redirecionar conforme pedido */}
              <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-all z-10 flex items-center justify-center">
                <div className="bg-brand-dark/80 text-white px-6 py-3 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0">
                  <MapPin className="w-4 h-4" />
                  <span className="font-bold text-sm tracking-widest uppercase">Ver no Maps</span>
                </div>
              </div>

              <iframe
                src={embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter brightness-90 contrast-125 pointer-events-none"
              />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
