import { createPortal } from 'react-dom';
import { useState, useEffect } from 'react';
import { clinica } from '../data/clinica';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <a
      href={`https://wa.me/${clinica.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      title="Conversar no WhatsApp"
      className="whatsapp-flutuante fixed bottom-4 right-4 md:bottom-7 md:right-7 w-[52px] h-[52px] md:w-14 md:h-14 rounded-full flex items-center justify-center text-vinho hover:scale-110 active:scale-95 transition-transform duration-300"
      style={{ zIndex: 2147483647 }}
    >
      <WhatsAppIcon className="w-6 h-6 md:w-[26px] md:h-[26px] relative" />
    </a>,
    document.body
  );
}
