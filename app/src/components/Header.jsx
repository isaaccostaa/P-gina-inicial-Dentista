import { useState, useEffect } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between rounded-[2rem] px-8 py-3 transition-all duration-500 ${
            isScrolled ? 'liquid-glass shadow-premium' : 'bg-transparent'
          }`}
        >
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="bg-accent text-white p-2 rounded-2xl group-hover:rotate-12 transition-transform duration-300">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-heading font-bold text-2xl tracking-tight text-primary">
              AIBuilder
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {['Recursos', 'Como Funciona', 'Depoimentos', 'Preços'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-semibold text-secondary hover:text-accent transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-5">
            <button className="hidden md:block px-6 py-2.5 text-sm font-bold bg-primary text-white rounded-xl hover:bg-accent transition-all duration-300 shadow-sm active:scale-95">
              Começar Agora
            </button>
            <button
              className="md:hidden text-primary p-2 hover:bg-slate-100 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="md:hidden absolute top-full left-4 right-4 mt-4 p-6 liquid-glass rounded-[2rem] flex flex-col gap-5 shadow-2xl z-50 border border-white/50"
          >
            {['Recursos', 'Como Funciona', 'Depoimentos', 'Preços'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-lg font-bold text-primary hover:text-accent p-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <hr className="border-slate-200" />
            <button className="w-full py-4 text-lg font-bold bg-accent text-white rounded-2xl shadow-lg active:scale-[0.98] transition-all">
              Começar Agora
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
