import { ArrowLeft, ArrowRight } from 'lucide-react';

const pad = (n) => String(n).padStart(2, '0');

// Setas sobre a galeria. tema "escuro" para fundos vinho, "claro" para fundos brancos;
// topo ajusta a altura das setas (ex.: no meio da foto do card em vez do card inteiro).
export function SetasCarrossel({ progresso, mover, tema = 'escuro', topo = 'top-1/2' }) {
  const anterior = tema === 'escuro'
    ? 'bg-[#1D0509]/70 border-white/25 text-white hover:border-rose-gold hover:text-rose-gold-light'
    : 'bg-white/90 border-[#E8D9D1] text-vinho hover:border-rose-gold';

  return (
    <>
      <button
        type="button"
        onClick={() => mover(-1)}
        aria-label="Anterior"
        className={`absolute left-1 md:-left-6 ${topo} -translate-y-1/2 z-10 w-11 h-11 md:w-14 md:h-14 rounded-full backdrop-blur-md border flex items-center justify-center shadow-[0_10px_30px_-8px_rgba(0,0,0,0.5)] transition-all duration-300 ${anterior} ${progresso <= 0.01 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        type="button"
        onClick={() => mover(1)}
        aria-label="Próximo"
        className={`absolute right-1 md:-right-6 ${topo} -translate-y-1/2 z-10 w-11 h-11 md:w-14 md:h-14 btn-gold !rounded-full !p-0 !gap-0 flex items-center justify-center transition-opacity duration-300 ${progresso >= 0.99 ? 'opacity-0 pointer-events-none' : 'opacity-100'} ${progresso > 0.01 ? '' : 'seta-convite'}`}
      >
        <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>
    </>
  );
}

// Linha de progresso + contador "01 / 04"
export function ProgressoCarrossel({ progresso, ativo, total, tema = 'escuro', className = '' }) {
  const trilho = tema === 'escuro' ? 'bg-white/15' : 'bg-vinho/10';
  const texto = tema === 'escuro' ? 'text-white/50' : 'text-vinho/40';
  const destaque = tema === 'escuro' ? 'text-rose-gold-light' : 'text-rose-gold-dark';

  return (
    <div className={`mt-6 flex items-center gap-5 ${className}`}>
      <div className={`relative flex-1 h-px overflow-hidden ${trilho}`}>
        <div
          className="absolute inset-y-0 left-0 bg-rose-gold transition-[width] duration-200"
          style={{ width: `${Math.max(progresso * 100, 100 / total)}%` }}
        />
      </div>
      <p className={`text-[11px] font-semibold tracking-[0.25em] tabular-nums ${texto}`}>
        <span className={destaque}>{pad(ativo + 1)}</span> / {pad(total)}
      </p>
    </div>
  );
}
