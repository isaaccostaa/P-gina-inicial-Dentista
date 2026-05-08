import { Sparkles, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-32 pb-16 relative overflow-hidden">
      {/* Dynamic glow effect */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/10 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full -translate-x-1/3 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Massive CTA Section */}
        <div className="text-center max-w-4xl mx-auto mb-32">
          <h2 className="font-heading text-5xl md:text-7xl font-black mb-10 leading-[1.1]">
            Pronto para o <br />
            <span className="text-indigo-400">próximo nível?</span>
          </h2>
          <button className="px-12 py-6 bg-indigo-600 text-white rounded-[2rem] font-bold text-xl hover:bg-indigo-500 hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 mx-auto active:scale-95">
            Começar Agora
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 mb-24 border-t border-white/10 pt-24">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-8 group cursor-pointer">
              <div className="bg-white/10 p-2.5 rounded-2xl group-hover:rotate-12 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-indigo-400" />
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight">
                AIBuilder
              </span>
            </div>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed font-medium">
              Redefinindo a criação web com inteligência artificial de elite.
            </p>
            <div className="flex gap-6">
              {[
                { name: 'Twitter', path: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" },
                { name: 'Github', path: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" },
                { name: 'Linkedin', path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" }
              ].map((icon) => (
                <a key={icon.name} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d={icon.path} clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 text-white">Produto</h4>
            <ul className="space-y-4">
              {['Funcionalidades', 'Preços', 'Integrações', 'Changelog'].map(item => (
                <li key={item}><a href="#" className="text-slate-400 hover:text-white transition-colors text-lg font-medium">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 text-white">Recursos</h4>
            <ul className="space-y-4">
              {['Documentação', 'Blog', 'Comunidade', 'Suporte'].map(item => (
                <li key={item}><a href="#" className="text-slate-400 hover:text-white transition-colors text-lg font-medium">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 text-white">Legal</h4>
            <ul className="space-y-4">
              {['Termos', 'Privacidade', 'Cookies'].map(item => (
                <li key={item}><a href="#" className="text-slate-400 hover:text-white transition-colors text-lg font-medium">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-12 text-slate-500 font-bold text-sm uppercase tracking-widest">
          <div>&copy; {new Date().getFullYear()} AIBuilder. All rights reserved.</div>
          <div className="mt-4 md:mt-0 flex gap-10">
            <a href="#" className="hover:text-white transition-colors">System Status</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
