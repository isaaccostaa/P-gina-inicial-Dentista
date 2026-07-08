import { motion } from 'framer-motion';
import ft1 from '../assets/ft1.jpeg';
import ft2 from '../assets/ft2.jpeg';
import ft3 from '../assets/ft3.jpeg';

export default function FloatingDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Imagem 1: Topo Direito */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 2 }}
        className="absolute -top-20 -right-20 w-96 h-96 lg:w-[32rem] lg:h-[32rem]"
        style={{
          maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 65%)',
          WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 65%)',
          mixBlendMode: 'screen'
        }}
      >
        <img src={ft1} alt="Decoração" className="w-full h-full object-cover rounded-full" />
      </motion.div>

      {/* Imagem 2: Meio Esquerda */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-1/2 -left-32 w-80 h-80 lg:w-[28rem] lg:h-[28rem] -translate-y-1/2"
        style={{
          maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 65%)',
          WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 65%)',
          mixBlendMode: 'screen'
        }}
      >
        <img src={ft2} alt="Decoração" className="w-full h-full object-cover rounded-full" />
      </motion.div>

      {/* Imagem 3: Base Direita */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute -bottom-10 -right-10 w-96 h-96 lg:w-[36rem] lg:h-[36rem]"
        style={{
          maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 65%)',
          WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 65%)',
          mixBlendMode: 'screen'
        }}
      >
        <img src={ft3} alt="Decoração" className="w-full h-full object-cover rounded-full" />
      </motion.div>
    </div>
  );
}
