import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, MessageSquare, ChevronDown, CheckCircle2, Loader2, Phone } from 'lucide-react';
import photoBg from '../assets/photo.webp';
import PrivacyModal from './PrivacyModal';

import WhatsAppIcon from './WhatsAppIcon';

const WHATSAPP_NUMBER = '5516996257573';
// Endereço que recebe as solicitações. O FormSubmit envia um "alias" aleatório no e-mail
// de ativação: troque o e-mail por esse alias para não deixá-lo visível no código do site.
const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/isaaccostaa1402@hotmail.com';

export default function Scheduling() {
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [aceitouPolitica, setAceitouPolitica] = useState(false);
  const [modalAberto, setModalAberto] = useState(null);
  const fecharModal = useCallback(() => setModalAberto(null), []);
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
    'Lentes em Resina',
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

  const buildWhatsAppUrl = () => {
    const texto = [
      `Olá, Dra. Kamille! Meu nome é ${formData.nome.trim()}.`,
      `Tenho interesse em: ${formData.servico}.`,
      formData.mensagem.trim()
    ].filter(Boolean).join('\n');
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;
  };

  const resetForm = () => {
    setFormData({
      nome: '',
      celular: '',
      email: '',
      servico: 'Consulta Inicial',
      mensagem: ''
    });
    setAceitouPolitica(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const waUrl = buildWhatsAppUrl();
    // A aba precisa ser aberta ainda dentro do clique; depois do await o navegador
    // (principalmente no celular) bloqueia o pop-up.
    const waWindow = window.open('', '_blank');

    const abrirWhatsApp = () => {
      if (waWindow && !waWindow.closed) {
        waWindow.location.href = waUrl;
      } else {
        window.location.href = waUrl;
      }
    };

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
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

      if (!response.ok) {
        throw new Error('Erro no envio via FormSubmit AJAX');
      }
    } catch (error) {
      // Mesmo sem o e-mail, o paciente segue para o WhatsApp com os dados na mensagem
      console.error('Erro no envio do formulário:', error);
    }

    setIsSending(false);
    setIsSuccess(true);
    abrirWhatsApp();
    resetForm();
    setTimeout(() => setIsSuccess(false), 4000);
  };

  return (
    <section id="secao-agendamento" className="relative bg-[#1D0509] overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:min-h-[720px]">
        
        {/* Coluna da Imagem (Esquerda) */}
        <div className="w-full lg:w-1/2 absolute inset-y-0 left-0">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1D0509] z-10 hidden lg:block" />
          <div className="absolute inset-0 bg-[#1D0509]/85 z-10 lg:hidden" />
          <img 
            src={photoBg} 
            alt="Atendimento Dra. Kamille Gallego Vieira" 
            className="w-full h-full object-cover grayscale-[20%] opacity-80"
          />
        </div>

        {/* Coluna do Formulário (Direita) */}
        <div className="w-full lg:w-1/2 lg:ml-auto relative z-20 flex items-center px-4 sm:px-6 lg:px-12 xl:px-16 py-8 md:py-24 lg:py-16 xl:py-20">
          <div className="max-w-xl w-full mx-auto lg:mx-0">
            <div className="mb-6 md:mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="eyebrow eyebrow-dark mb-5"
              >
                Agendamento
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[42px] lg:text-[56px] xl:text-[64px] font-semibold text-white mb-4 md:mb-6 leading-[1.02]"
              >
                Pronto para o <br />
                <span className="italic font-medium text-rose-gold">seu novo sorriso?</span>
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
              onSubmit={handleSubmit}
              className="space-y-4"
            >
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
                  className="block w-full pl-14 pr-10 py-3.5 lg:py-4 bg-white/5 border border-white/10 rounded-2xl text-base text-white outline-none focus:border-brand-light/50 appearance-none cursor-pointer relative z-0"
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

              {/* Consentimento LGPD */}
              <label className="flex items-start gap-3 px-1 text-[13px] text-slate-300 leading-relaxed cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={aceitouPolitica}
                  onChange={(e) => setAceitouPolitica(e.target.checked)}
                  className="mt-1 w-4 h-4 shrink-0 accent-[#DAA78C] cursor-pointer"
                />
                <span>
                  Li e concordo com a{' '}
                  <button type="button" onClick={() => setModalAberto('privacidade')} className="underline hover:text-white">Política de Privacidade</button>
                  {' '}e autorizo o uso dos meus dados para contato sobre o atendimento.
                </span>
              </label>

              {/* Botão de Envio com Estados */}
              <motion.button 
                whileHover={!isSending && !isSuccess ? { scale: 1.02 } : {}}
                whileTap={!isSending && !isSuccess ? { scale: 0.98 } : {}}
                type="submit" 
                disabled={isSending || isSuccess}
                className="btn-gold w-full py-5 group disabled:opacity-90"
              >
                {isSending ? (
                  <>Enviando... <Loader2 className="w-5 h-5 animate-spin" /></>
                ) : isSuccess ? (
                  <>Enviado! Abrindo WhatsApp <CheckCircle2 className="w-5 h-5" /></>
                ) : (
                  <>SOLICITAR AGENDAMENTO <WhatsAppIcon className="w-5 h-5 group-hover:scale-110 transition-transform" /></>
                )}
              </motion.button>

              <p className="text-[11px] text-center text-slate-500 mt-6 px-8">
                O horário é confirmado pela equipe no WhatsApp. Veja também os{' '}
                <button type="button" onClick={() => setModalAberto('termos')} className="underline hover:text-slate-300">Termos de Uso</button>.
              </p>
            </motion.form>
            <PrivacyModal aberto={modalAberto} onFechar={fecharModal} />
          </div>
        </div>
      </div>
    </section>
  );
}
