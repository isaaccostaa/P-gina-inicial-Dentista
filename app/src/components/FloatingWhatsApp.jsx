import { createPortal } from 'react-dom';
import { useState, useEffect } from 'react';
import logowhats from '../assets/logowhats.png';

export default function FloatingWhatsApp() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <a
      href="https://wa.me/5516996257573"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-[20px] left-[16px] md:bottom-8 md:right-8 md:left-auto bg-[#25D366] text-white rounded-full p-4 md:p-5 flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:scale-110 active:scale-95 transition-all duration-300"
      style={{
        zIndex: 2147483647,
        backgroundColor: '#25D366',
        opacity: 1,
        pointerEvents: 'auto',
        mixBlendMode: 'normal',
        isolation: 'isolate'
      }}
    >
      <img
        src={logowhats}
        alt="WhatsApp"
        className="w-8 h-8 md:w-12 md:h-12 object-contain"
      />
    </a>,
    document.body
  );
}
