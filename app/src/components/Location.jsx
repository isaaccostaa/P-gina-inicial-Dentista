import { motion } from 'framer-motion';
import { MapPin, Navigation, Building2 } from 'lucide-react';
import { clinica } from '../data/clinica';
import fotoConsultorio from '../assets/espaco-consultorio.webp';
import fotoPredio from '../assets/espaco-predio.webp';

const fotosEspaco = [
  {
    src: fotoConsultorio,
    alt: 'Consultório da Dra. Kamille: cadeira odontológica em couro caramelo e iluminação suave',
    rotulo: 'Consultório',
    colunas: 'lg:col-span-5',
    posicao: 'object-[50%_62%]',
  },
  {
    src: fotoPredio,
    alt: `Fachada do ${clinica.local}, em São Carlos`,
    rotulo: clinica.local,
    colunas: 'lg:col-span-7',
    posicao: 'object-[48%_center]',
  },
];

export default function Location() {
  return (
    <section id="localizacao" className="py-16 md:py-24 lg:py-20 xl:py-24 relative overflow-hidden">
      <div className="max-w-7xl lg:max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow eyebrow-dark eyebrow-center mb-5"
          >
            Nosso espaço
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[40px] lg:text-[52px] xl:text-[60px] font-semibold text-white leading-[1.05] mb-4 md:mb-6"
          >
            Venha nos fazer <span className="italic font-medium text-rose-gold">uma visita</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[15px] md:text-lg text-white/70 leading-relaxed"
          >
            Atendimento no {clinica.local}, em São Carlos: um ambiente moderno e planejado para uma experiência leve, organizada e acolhedora.
          </motion.p>
        </div>

        {/* Fotos do espaço: consultório + fachada do Medical Center */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-3 md:gap-6 mb-6 md:mb-8">
          {fotosEspaco.map((foto, i) => (
            <motion.figure
              key={foto.rotulo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className={`group relative overflow-hidden rounded-[22px] md:rounded-[2rem] ring-1 ring-white/15 aspect-[3/4] lg:aspect-auto lg:h-[500px] ${foto.colunas}`}
            >
              <img
                src={foto.src}
                alt={foto.alt}
                loading="lazy"
                decoding="async"
                className={`absolute inset-0 w-full h-full object-cover ${foto.posicao} transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D0509]/90 via-[#1D0509]/20 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-8">
                <p className="text-[10px] md:text-[12px] font-semibold uppercase tracking-[0.24em] text-rose-gold">{foto.rotulo}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-white/[0.06] backdrop-blur-md border border-white/15 rounded-[28px] md:rounded-[2rem] p-4 md:p-6 shadow-premium"
        >
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">

            {/* Endereço */}
            <address className="not-italic w-full lg:w-[38%] flex flex-col justify-center gap-6 p-3 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold text-white">{clinica.nome}</h3>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-rose-gold/40 flex items-center justify-center shrink-0">
                  <Building2 className="w-[18px] h-[18px] text-rose-gold" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-gold">Local</p>
                  <p className="text-white text-[15px] mt-1">{clinica.local}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-rose-gold/40 flex items-center justify-center shrink-0">
                  <MapPin className="w-[18px] h-[18px] text-rose-gold" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-gold">Endereço</p>
                  <p className="text-white/80 text-[15px] mt-1 leading-relaxed">
                    {clinica.rua}<br />
                    {clinica.bairro}<br />
                    {clinica.cidade}, {clinica.cep}
                  </p>
                </div>
              </div>

              <a
                href={clinica.mapaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full max-w-[320px] py-4 mt-2"
              >
                <Navigation className="w-4 h-4" />
                Como chegar
              </a>
            </address>

            {/* Mapa */}
            <div className="w-full lg:w-[62%] h-[280px] md:h-[400px] rounded-2xl md:rounded-3xl overflow-hidden relative">
              <iframe
                src={clinica.mapaEmbedUrl}
                title={`Mapa: ${clinica.enderecoCompleto}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
