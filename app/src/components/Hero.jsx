import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Layout } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden bg-white">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl overflow-hidden -z-10 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-100/50 blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-purple-100/40 blur-[100px]" 
        />
        <div className="absolute top-[10%] right-[10%] w-[30%] h-[30%] rounded-full bg-blue-50/40 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-10 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">AI Evolution v3.0 Is Here</span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-heading text-6xl md:text-8xl font-black tracking-tight text-slate-900 leading-[1.05] mb-8">
              Sites incríveis em <br />
              <span className="text-gradient">piscar de olhos.</span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
          >
            A inteligência artificial que desenha, escreve e otimiza sua presença digital. 
            Esqueça o código, foque no seu negócio.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <button className="btn-primary w-full sm:w-auto flex items-center justify-center gap-3">
              Criar Site Grátis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-3">
              Ver Demonstração
            </button>
          </motion.div>
        </div>

        {/* Instagram Video Embed */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 relative mx-auto max-w-4xl"
        >
          {/* Decorative Glow behind video */}
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-[120px] -z-10 rounded-[3rem]" />
          
          <div className="relative rounded-[2.5rem] overflow-hidden p-3 bg-white shadow-premium border border-slate-200/50 backdrop-blur-sm">
            <div className="rounded-[2rem] overflow-hidden border border-slate-100 aspect-video relative bg-slate-50 flex items-center justify-center">
              <iframe
                src="https://www.instagram.com/p/DVe0ZydjRKV/embed"
                className="w-full h-full border-none"
                allowTransparency="true"
                allowFullScreen="true"
                frameBorder="0"
                scrolling="no"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
