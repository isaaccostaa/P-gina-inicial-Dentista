import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo-kv.webp';
import logowhats from '../assets/logowhats.webp';

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

  const voltarAoTopo = (e) => {
    e.preventDefault();
    if (window.lenis) window.lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { name: 'Serviços', href: '#servicos' },
    { name: 'Resultados', href: '#lentes' },
    { name: 'Sobre', href: '#sobre' },
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
      <div className="absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-rose-gold/40 to-transparent" />
      <div className="max-w-[1500px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between">

          {/* Logo - Esquerda (Monumental & Profissional) */}
          <a href="#" onClick={voltarAoTopo} className="flex items-center py-3" aria-label="Voltar ao topo">
            <img
              src={logo}
              alt="Dra. Kamille Gallego Vieira"
              loading="eager"
              decoding="async"
              className={`transition-all duration-500 ${isScrolled ? 'h-10 md:h-14' : 'h-11 md:h-16'} w-auto`}
            />
          </a>

          {/* Navigation - Centro */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[11px] font-medium text-white/70 hover:text-white uppercase tracking-[0.22em] transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-rose-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA - Direita */}
          <div className="flex items-center gap-4">
            <a
              href="#secao-agendamento"
              className="btn-gold hidden md:flex px-6 py-3 !text-[11px]"
            >
              <img src={logowhats} alt="" loading="eager" decoding="async" className="w-4 h-4 object-contain" />
              Agendar
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
                  className="font-heading text-2xl text-white/85 hover:text-rose-gold transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#secao-agendamento"
                className="btn-gold w-full py-5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <img src={logowhats} alt="" loading="lazy" decoding="async" className="w-5 h-5 object-contain" />
                Agendar avaliação
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
