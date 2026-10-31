import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import PrivacyModal from './PrivacyModal';
import { clinica } from '../data/clinica';
import logo from '../assets/logo-kv.webp';
import logowhats from '../assets/whatsapp-icone.webp';
import logoinsta from '../assets/logoinsta.webp';
import WhatsAppIcon from './WhatsAppIcon';

export default function Footer() {
  const [modalAberto, setModalAberto] = useState(null);
  const fecharModal = useCallback(() => setModalAberto(null), []);
  const whatsappLink = `https://wa.me/${clinica.whatsapp}`;
  const instagramLink = clinica.instagram;
  const address = clinica.enderecoCompleto;

  return (
    <footer id="contato" className="bg-[#1D0509] text-white pt-12 md:pt-20 pb-24 md:pb-12 relative overflow-hidden border-t border-white/10">
      {/* Efeitos de iluminação de fundo */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-base/10 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-base/5 blur-[120px] rounded-full -translate-x-1/3 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl lg:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Seção Principal: Fale Conosco */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="eyebrow eyebrow-dark mb-5"
            >
              Canais de Atendimento
            </motion.div>
            <h2 className="text-[42px] md:text-[64px] font-semibold mb-6 md:mb-8 leading-[1.05]">
              Fale <span className="italic font-medium text-rose-gold">conosco</span>
            </h2>
            <p className="text-[16px] md:text-lg text-white/70 mb-8 md:mb-10 max-w-xl leading-relaxed">
              Estamos prontos para tirar suas dúvidas e agendar sua transformação. Escolha o canal de sua preferência.
            </p>
            {/* No desktop preenche a coluna ao lado dos cartões; no celular o cartão do WhatsApp já fica logo abaixo */}
            <div className="hidden lg:block">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-8 py-5 group"
              >
                <WhatsAppIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Conversar no WhatsApp
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 md:p-8 rounded-[24px] md:rounded-[2rem] bg-white/[0.04] border border-white/10 hover:border-rose-gold/50 hover:bg-white/[0.07] transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <img src={logowhats} alt="" className="w-8 h-8 object-contain" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-1">WhatsApp</h3>
              <p className="text-white/60 text-[15px] md:text-base">{clinica.telefoneExibicao}</p>
            </a>

            {/* Card Instagram */}
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 md:p-8 rounded-[24px] md:rounded-[2rem] bg-white/[0.04] border border-white/10 hover:border-rose-gold/50 hover:bg-white/[0.07] transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <img src={logoinsta} alt="" className="w-9 h-9 object-contain" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-1">Instagram</h3>
              <p className="text-white/60 text-[15px] md:text-base">{clinica.instagramUsuario}</p>
            </a>

            {/* Card Endereço */}
            <a
              href={clinica.mapaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-1 sm:col-span-2 group p-6 md:p-8 rounded-[24px] md:rounded-[2rem] bg-white/[0.04] border border-white/10 hover:border-rose-gold/50 hover:bg-white/[0.07] transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-rose-gold" />
                </div>
                <address className="not-italic">
                  <h3 className="text-lg md:text-xl font-semibold mb-1">Onde estamos</h3>
                  <p className="text-white/60 leading-relaxed">
                    {address}
                  </p>
                </address>
              </div>
            </a>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Dra. Kamille Gallego Vieira"
              className="h-12 md:h-14 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>

          <div className="text-white/45 font-medium text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-center md:text-right">
            <div>&copy; {new Date().getFullYear()} {clinica.nome} · {clinica.cro}</div>
            <div className="mt-1 opacity-60">Todos os direitos reservados.</div>
            <div className="mt-3 flex gap-4 justify-center md:justify-end">
              <button type="button" onClick={() => setModalAberto('privacidade')} className="uppercase tracking-widest hover:text-white transition-colors">Política de Privacidade</button>
              <button type="button" onClick={() => setModalAberto('termos')} className="uppercase tracking-widest hover:text-white transition-colors">Termos de Uso</button>
            </div>
          </div>
        </div>
      </div>
      <PrivacyModal aberto={modalAberto} onFechar={fecharModal} />
    </footer>
  );
}
