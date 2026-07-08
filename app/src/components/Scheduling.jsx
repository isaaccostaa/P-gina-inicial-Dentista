import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, MessageSquare, Send, ChevronDown, CheckCircle2, Loader2, Phone } from 'lucide-react';
import photoBg from '../assets/photo.jpg';

import logowhats from '../assets/logowhats.png';

export default function Scheduling() {
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    celular: '',
    email: '',
    servico: 'Consulta Inicial',
    mensagem: ''
  });

  const servicios = [
    'Consulta Inicial',
    'Clareamento',
    'Limpeza',
    'Facetas',
    'Canal (Endodontia)',
    'Restauração',
    'Cirurgia',
    'Emergência',
    'Outros'
  ];

  const formatPhone = (value) => {
    let num = value.replace(/\D/g, '');
    if (num.length > 11) num = num.slice(0, 11);
    
    if (num.length === 0) return '';
    if (num.length <= 2) return `(${num}`;
    if (num.length <= 7) return `(${num.slice(0, 2)}) ${num.slice(2)}`;
    return `(${num.slice(0, 2)}) ${num.slice(2, 7)}-${num.slice(7)}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'Telefone') {
      setFormData({ ...formData, celular: formatPhone(value) });
    } else if (name === 'Nome') {
      setFormData({ ...formData, nome: value });
    } else if (name === 'Email') {
      setFormData({ ...formData, email: value });
    } else if (name === 'Servico') {
      setFormData({ ...formData, servico: value });
    } else if (name === 'Mensagem') {
      setFormData({ ...formData, mensagem: value });
    }
  };

  // Logic to receive pre-fill events from other components
  useEffect(() => {
    const handlePrefill = (e) => {
      if (e.detail) {
        setFormData(prev => ({
          ...prev,
          servico: e.detail.servico || prev.servico,
          mensagem: e.detail.mensagem || prev.mensagem
        }));
      }
    };

    window.addEventListener('prefillForm', handlePrefill);
    return () => window.removeEventListener('prefillForm', handlePrefill);
  }, []);

  const executeWhatsAppRedirect = () => {
    const waMessage = encodeURIComponent(`Olá! ${formData.mensagem}`);
    window.open(`https://wa.me/5516996257573?text=${waMessage}`, '_blank');
    
    // Resetar formulário
    setFormData({
      nome: '',
      celular: '',
      email: '',
      servico: 'Consulta Inicial',
      mensagem: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/isaaccostaa1402@hotmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Nome: formData.nome,
          Telefone: formData.celular,
          Email: formData.email,
          Servico: formData.servico,
          Mensagem: formData.mensagem,
          _captcha: "false"
        })
      });

      if (response.ok) {
        setIsSending(false);
        setIsSuccess(true);

        // Redirecionamento para o WhatsApp após o envio bem-sucedido
        setTimeout(() => {
          executeWhatsAppRedirect();
          setIsSuccess(false);
        }, 1500);
      } else {
        throw new Error('Erro no envio via FormSubmit AJAX');
      }

    } catch (error) {
      console.error("Erro no envio do formulário, disparando envio nativo:", error);
      // Fallback: submete nativamente se a chamada assíncrona falhar
      e.target.submit();
    }
  };

  return (
    <section id="secao-agendamento" className="relative bg-[#1D0509] overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:min-h-[720px]">
        
        {/* Coluna da Imagem (Esquerda) */}
        <div className="w-full lg:w-1/2 absolute lg:relative inset-y-0 left-0 h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1D0509] z-10 hidden lg:block" />
          <div className="absolute inset-0 bg-[#1D0509]/85 z-10 lg:hidden" />
          <img 
            src={photoBg} 
            alt="Atendimento Dra. Kamille Gallego Vieira" 
            className="w-full h-full object-cover grayscale-[20%] opacity-80"
          />
        </div>

        {/* Coluna do Formulário (Direita) */}
        <div className="w-full lg:w-1/2 relative z-20 flex items-center px-4 sm:px-6 lg:px-12 xl:px-16 py-8 md:py-24 lg:py-16 xl:py-20">
          <div className="max-w-xl w-full mx-auto lg:mx-0">
            <div className="mb-6 md:mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-brand-light backdrop-blur-sm text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
              >
                Fale Conosco
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[34px] lg:text-[48px] xl:text-[56px] font-black text-white mb-4 md:mb-6 leading-tight"
              >
                Pronto para <br />
                <span className="font-serif italic font-normal text-slate-300">seu novo sorriso?</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[15px] md:text-lg text-slate-400 font-medium"
              >
                Preencha os dados abaixo para iniciar seu atendimento personalizado.
              </motion.p>
            </div>

            <motion.form
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              action="https://formsubmit.co/isaaccostaa1402@hotmail.com"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_next" value="http://localhost:5173" />
              <input type="hidden" name="_captcha" value="false" />

              {/* Campo Nome */}
              <div className="group relative">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-500 group-focus-within:text-brand-light transition-colors" />
                </div>
                <input 
                  type="text" 
                  name="Nome" 
                  id="input-nome-agendamento"
                  required 
                  value={formData.nome} 
                  onChange={handleInputChange} 
                  className="block w-full pl-14 pr-4 py-3.5 lg:py-4 bg-white/5 border border-white/10 rounded-2xl text-base text-white placeholder:text-[#8a99ad] outline-none focus:border-brand-light/50 focus:bg-white/[0.08] transition-all" 
                  placeholder="Seu Nome Completo" 
                />
              </div>

              {/* Grid Celular e Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Campo Celular */}
                <div className="group relative">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-slate-500 group-focus-within:text-brand-light transition-colors" />
                  </div>
                  <input 
                    type="tel" 
                    name="Telefone" 
                    required 
                    value={formData.celular} 
                    onChange={handleInputChange}
                    maxLength="15"
                    className="block w-full pl-14 pr-4 py-3.5 lg:py-4 bg-white/5 border border-white/10 rounded-2xl text-base text-white placeholder:text-[#8a99ad] outline-none focus:border-brand-light/50 focus:bg-white/[0.08] transition-all" 
                    placeholder="(XX) XXXXX-XXXX" 
                  />
                </div>
 
                {/* Campo Email */}
                <div className="group relative">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-slate-500 group-focus-within:text-brand-light transition-colors" />
                  </div>
                  <input 
                    type="email" 
                    name="Email" 
                    required 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    className="block w-full pl-14 pr-4 py-3.5 lg:py-4 bg-white/5 border border-white/10 rounded-2xl text-base text-white placeholder:text-[#8a99ad] outline-none focus:border-brand-light/50 focus:bg-white/[0.08] transition-all" 
                    placeholder="Seu melhor E-mail" 
                  />
                </div>
              </div>

              {/* Dropdown Serviço */}
              <div className="group relative">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none z-10">
                  <MessageSquare className="h-5 w-5 text-slate-500 group-focus-within:text-brand-light transition-colors" />
                </div>
                <select 
                  name="Servico" 
                  value={formData.servico} 
                  onChange={handleInputChange}
                  className="block w-full pl-14 pr-10 py-3.5 lg:py-4 bg-[#6B2D3A] border border-white/10 rounded-2xl text-base text-white outline-none focus:border-brand-light/50 appearance-none cursor-pointer relative z-0"
                >
                  {servicios.map((s) => (
                    <option key={s} value={s} className="bg-[#1D0509] text-white py-2">{s}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none z-10">
                  <ChevronDown className="h-5 w-5 text-slate-500" />
                </div>
              </div>
 
              {/* Campo Mensagem */}
              <div className="group relative">
                <textarea 
                  name="Mensagem" 
                  required 
                  rows="3"
                  value={formData.mensagem} 
                  onChange={handleInputChange} 
                  className="block w-full p-4 lg:p-5 bg-white/5 border border-white/10 rounded-[20px] md:rounded-3xl text-base text-white placeholder:text-[#8a99ad] outline-none focus:border-brand-light/50 focus:bg-white/[0.08] transition-all resize-none" 
                  placeholder="Como podemos te ajudar?" 
                />
              </div>

              {/* Botão de Envio com Estados */}
              <motion.button 
                whileHover={!isSending && !isSuccess ? { scale: 1.02 } : {}}
                whileTap={!isSending && !isSuccess ? { scale: 0.98 } : {}}
                type="submit" 
                disabled={isSending || isSuccess}
                className={`w-full py-4 lg:py-4.5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 shadow-2xl transition-all group ${isSuccess ? 'bg-green-600 text-white' : 'bg-[#25D366] text-white hover:bg-[#20bd5c]'}`}
              >
                {isSending ? (
                  <>Enviando... <Loader2 className="w-5 h-5 animate-spin" /></>
                ) : isSuccess ? (
                  <>Agendamento Confirmado! <CheckCircle2 className="w-5 h-5" /></>
                ) : (
                  <>CONFIRMAR AGENDAMENTO <img src={logowhats} alt="WhatsApp" className="w-6 h-6 object-contain group-hover:scale-110 transition-transform" /></>
                )}
              </motion.button>

              <p className="text-[11px] text-center text-slate-500 mt-6 px-8">
                Ao informar meus dados, eu concordo com a <span className="underline cursor-pointer">Política de Privacidade</span> e com os <span className="underline cursor-pointer">Termos de Uso</span>.
              </p>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
