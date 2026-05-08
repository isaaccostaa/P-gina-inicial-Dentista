import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Mudamos nossa operação para o AIBuilder e os resultados foram imediatos. A velocidade de iteração é surreal.",
      author: "Sarah Jenks",
      role: "CMO, TechFlow",
      image: "https://i.pravatar.cc/150?img=47"
    },
    {
      quote: "O código exportado é limpo e performático. Como desenvolvedor, é o primeiro construtor que eu realmente confio.",
      author: "Michael Chang",
      role: "Lead Dev, Nova",
      image: "https://i.pravatar.cc/150?img=11"
    },
    {
      quote: "Design de agência por uma fração do custo. Nossas conversões subiram 40% após o novo layout gerado pela IA.",
      author: "Elena Rodriguez",
      role: "Founder, Bloom",
      image: "https://i.pravatar.cc/150?img=32"
    }
  ];

  return (
    <section id="depoimentos" className="section-padding bg-slate-50/50 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900"
          >
            Aprovado por <br />
            <span className="text-gradient">times inovadores.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] border border-slate-200/60 shadow-sm hover:shadow-premium transition-all duration-500 group"
            >
              <div className="flex gap-1 mb-8 text-indigo-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-5">
                <div className="relative">
                  <div className="absolute inset-0 bg-indigo-500 rounded-full blur-[10px] opacity-0 group-hover:opacity-20 transition-opacity" />
                  <img src={testimonial.image} alt={testimonial.author} className="w-14 h-14 rounded-full border-2 border-white relative z-10" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">{testimonial.author}</h4>
                  <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
