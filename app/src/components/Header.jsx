import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/Logosub2.png';
import logowhats from '../assets/logowhats.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Serviços', href: '#servicos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Localização', href: '#localizacao' }
  ];

  return (
    <header
      className={`transition-all duration-500 border-b border-white/5 shadow-2xl py-0`}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 9999,
        backgroundColor: '#1D0509',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)'
      }}
    >
      {/* Luz Atmosférica Superior */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent pointer-events-none" />

      {/* Linha de Ouro Minimalista na Base */}
      <div className="absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-brand-base/40 to-transparent" />
      <div className="max-w-[1500px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between">

          {/* Logo - Esquerda (Monumental & Profissional) */}
          <div className="flex items-center cursor-pointer group">
            <img
              src={logo}
              alt="Dra. Kamille Gallego Vieira"
              loading="eager"
              decoding="async"
              className={`transition-all duration-500 drop-shadow-[0_0_15px_rgba(212,175,55,0.2)] ${isScrolled ? 'h-14 md:h-18' : 'h-16 md:h-28'
                } w-auto group-hover:scale-105`}
            />
          </div>

          {/* Navigation - Centro */}
          <nav className="hidden lg:flex items-center gap-12">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[10px] font-black text-slate-300 hover:text-white uppercase tracking-[0.3em] transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-base transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA - Direita */}
          <div className="flex items-center gap-4">
            <a
              href="#secao-agendamento"
              className="hidden md:flex items-center gap-3 px-8 py-3 bg-[#25D366] text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-[#20bd5c] transition-all duration-500 ease-out hover:-translate-y-0.5 hover:scale-105 active:scale-[0.98] shadow-xl shadow-green-500/20 hover:shadow-green-500/40"
            >
              <img src={logowhats} alt="WhatsApp" loading="eager" decoding="async" className="w-5 h-5 object-contain" />
              CONTATO
            </a>

            <button
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu de navegação"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#1D0509] border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg font-bold text-slate-300 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#secao-agendamento"
                className="w-full py-5 bg-[#25D366] text-white flex items-center justify-center gap-3 font-black uppercase tracking-[0.2em] text-xs rounded-full shadow-lg transition-all duration-500 ease-out active:scale-[0.98]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <img src={logowhats} alt="WhatsApp" loading="lazy" decoding="async" className="w-6 h-6 object-contain" />
                CONTATO
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
