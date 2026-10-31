import { useCallback, useEffect, useRef, useState } from 'react';

const GAP = 20;

// Lógica das galerias de arrastar: progresso, item ativo, setas e arraste com o mouse.
export default function useCarrossel(total) {
  const trilhoRef = useRef(null);
  const arraste = useRef(null);
  const [progresso, setProgresso] = useState(0);
  const [ativo, setAtivo] = useState(0);
  const [rolavel, setRolavel] = useState(false);

  const atualizar = useCallback(() => {
    const el = trilhoRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setRolavel(max > 2);
    setProgresso(max > 0 ? el.scrollLeft / max : 0);
    const card = el.firstElementChild;
    if (card) setAtivo(max > 0 && el.scrollLeft >= max - 2 ? total - 1 : Math.round(el.scrollLeft / (card.offsetWidth + GAP)));
  }, [total]);

  useEffect(() => {
    atualizar();
    window.addEventListener('resize', atualizar);
    return () => window.removeEventListener('resize', atualizar);
  }, [atualizar]);

  const mover = (direcao) => {
    const el = trilhoRef.current;
    const card = el?.firstElementChild;
    if (!card) return;
    el.scrollBy({ left: direcao * (card.offsetWidth + GAP), behavior: 'smooth' });
  };

  // No computador também dá para arrastar com o mouse (no celular o toque já rola sozinho)
  const handlers = {
    onScroll: atualizar,
    onPointerDown: (e) => {
      if (e.pointerType !== 'mouse') return;
      const el = trilhoRef.current;
      arraste.current = { x: e.clientX, scroll: el.scrollLeft };
      el.style.scrollSnapType = 'none';
    },
    onPointerMove: (e) => {
      const a = arraste.current;
      if (!a) return;
      trilhoRef.current.scrollLeft = a.scroll - (e.clientX - a.x);
    },
    onPointerUp: () => soltar(),
    onPointerLeave: () => soltar(),
  };

  function soltar() {
    if (!arraste.current) return;
    arraste.current = null;
    trilhoRef.current.style.scrollSnapType = '';
  }

  return { trilhoRef, progresso, ativo, rolavel, mover, handlers };
}
