import { useRef, useState, useCallback } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

// Comparador antes/depois: arraste (mouse ou dedo) ou use as setas do teclado.
// "depois" fica por baixo; "antes" é recortado da esquerda até a posição do divisor.
export default function BeforeAfterSlider({ antes, depois, alt, aspect = '16/9', inicial = 50 }) {
  const containerRef = useRef(null);
  const arrastandoRef = useRef(false);
  const [posicao, setPosicao] = useState(inicial);

  const moverPara = useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosicao(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e) => {
    arrastandoRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    moverPara(e.clientX);
  };

  const onPointerMove = (e) => {
    if (arrastandoRef.current) moverPara(e.clientX);
  };

  const onPointerUp = () => {
    arrastandoRef.current = false;
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') setPosicao((p) => Math.max(0, p - 5));
    if (e.key === 'ArrowRight') setPosicao((p) => Math.min(100, p + 5));
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden select-none cursor-ew-resize bg-black"
      // pan-y: o dedo na vertical continua rolando a página; na horizontal move o divisor
      style={{ aspectRatio: aspect, touchAction: 'pan-y' }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <img src={depois} alt={`${alt} — depois`} loading="lazy" draggable="false" className="absolute inset-0 w-full h-full object-cover" />
      <img
        src={antes}
        alt={`${alt} — antes`}
        loading="lazy"
        draggable="false"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ clipPath: `inset(0 ${100 - posicao}% 0 0)` }}
      />

      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/45 backdrop-blur-md text-white text-[10px] font-semibold uppercase tracking-[0.25em] pointer-events-none">Antes</span>
      <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/85 backdrop-blur-md text-vinho text-[10px] font-semibold uppercase tracking-[0.25em] pointer-events-none">Depois</span>

      {/* Divisor */}
      <div className="absolute inset-y-0 w-px bg-white/90 pointer-events-none" style={{ left: `${posicao}%` }}>
        <div
          role="slider"
          tabIndex={0}
          aria-label="Comparar antes e depois"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(posicao)}
          onKeyDown={onKeyDown}
          className="pointer-events-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-vinho shadow-[0_8px_30px_rgba(0,0,0,0.35)] flex items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-rose-gold"
        >
          <ChevronsLeftRight className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}
