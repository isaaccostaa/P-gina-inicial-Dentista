import { motion } from 'framer-motion';
import { MessageCircle, MapPin } from 'lucide-react';
import logo from '../assets/Logosub2.png';
import logowhats from '../assets/logowhats.png';
import logoinsta from '../assets/logoinsta.png';

export default function Footer() {
  const whatsappNumber = "5516996257573";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const instagramLink = "https://www.instagram.com/dra.kamillevieira/";
  const address = "R. Miguel Petroni, 1265 - Jardim Bandeirantes, São Carlos - SP, 13563-470";

  return (
    <footer id="contato" className="bg-[#1D0509] text-white pt-12 md:pt-24 pb-24 md:pb-12 relative overflow-hidden">
      {/* Efeitos de iluminação de fundo */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-base/10 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-base/5 blur-[120px] rounded-full -translate-x-1/3 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl lg:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Seção Principal: Fale Conosco */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-sm text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
            >
              Canais de Atendimento
            </motion.div>
            <h2 className="text-[34px] md:text-6xl font-black mb-6 md:mb-8 leading-tight">
              Fale <span className="text-brand-light">Conosco</span>
            </h2>
            <p className="text-[16px] md:text-xl text-slate-300 mb-8 md:mb-10 max-w-xl">
              Estamos prontos para tirar suas dúvidas e agendar sua transformação. Escolha o canal de sua preferência.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 md:p-10 rounded-[28px] md:rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#25D366]/50 transition-all duration-500 shadow-2xl"
            >
              <div className="w-24 h-24 bg-[#25D366]/10 rounded-[24px] md:rounded-[2rem] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner">
                <img src={logowhats} alt="WhatsApp" className="w-16 h-16 object-contain drop-shadow-[0_0_15px_rgba(37,211,102,0.6)] brightness-110" />
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-2 tracking-tight">WhatsApp</h3>
              <p className="text-slate-400 font-bold text-[15px] md:text-lg">(16) 99625-7573</p>
            </a>

            {/* Card Instagram */}
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 md:p-10 rounded-[28px] md:rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-pink-500/50 transition-all duration-500 shadow-2xl"
            >
              <div className="w-24 h-24 bg-gradient-to-tr from-purple-600/30 to-pink-500/30 rounded-[24px] md:rounded-[2rem] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner">
                <img src={logoinsta} alt="Instagram" className="w-16 h-16 object-contain drop-shadow-[0_0_15px_rgba(236,72,153,0.6)] brightness-110" />
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-2 tracking-tight">Instagram</h3>
              <p className="text-slate-400 font-bold text-[15px] md:text-lg">@dra.kamillevieira</p>
            </a>

            {/* Card Endereço */}
            <div className="col-span-1 sm:col-span-2 group p-6 md:p-8 rounded-[28px] md:rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500">
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="w-14 h-14 bg-brand-light/20 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="w-8 h-8 text-brand-light" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Onde Estamos</h3>
                  <p className="text-slate-400 font-medium leading-relaxed">
                    {address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Dra. Kamille Gallego Vieira"
              className="h-16 md:h-20 w-auto opacity-80 hover:opacity-100 transition-opacity drop-shadow-xl"
            />
          </div>

          <div className="text-slate-500 font-bold text-[10px] md:text-xs uppercase tracking-widest text-center md:text-right">
            <div>&copy; {new Date().getFullYear()} Dra. Kamille Gallego Vieira</div>
            <div className="mt-1 opacity-60">Todos os direitos reservados.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
