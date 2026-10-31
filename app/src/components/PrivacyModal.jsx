import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { clinica } from '../data/clinica';

const conteudos = {
  privacidade: {
    titulo: 'Política de Privacidade',
    secoes: [
      {
        subtitulo: 'Quem é responsável pelos seus dados',
        texto: `${clinica.nome}, cirurgiã-dentista (${clinica.cro}), com atendimento no ${clinica.enderecoCompleto}. Contato: WhatsApp ${clinica.telefoneExibicao}.`
      },
      {
        subtitulo: 'Quais dados coletamos',
        texto: 'Pelo formulário de agendamento: nome, telefone, e-mail, o serviço de interesse e a mensagem que você escrever. Não pedimos informações de saúde no formulário; se quiser contar algo sobre o seu caso, prefira fazê-lo diretamente na consulta.'
      },
      {
        subtitulo: 'Para que usamos',
        texto: 'Apenas para responder ao seu contato, combinar o horário da consulta e enviar orientações relacionadas ao seu atendimento. Seus dados não são vendidos nem usados para outras finalidades.'
      },
      {
        subtitulo: 'Com quem compartilhamos',
        texto: 'O formulário é entregue por e-mail por meio do serviço FormSubmit, e a conversa continua no WhatsApp. Esses serviços tratam os dados somente para viabilizar o envio das mensagens.'
      },
      {
        subtitulo: 'Por quanto tempo guardamos',
        texto: 'Mantemos os dados enquanto forem necessários para o atendimento ou pelo prazo exigido pelas normas aplicáveis à odontologia. Depois disso, são excluídos.'
      },
      {
        subtitulo: 'Seus direitos (LGPD)',
        texto: 'Você pode, a qualquer momento, pedir para confirmar, acessar, corrigir ou excluir seus dados, ou retirar o seu consentimento. Basta enviar uma mensagem pelo WhatsApp (16) 99625-7573.'
      }
    ]
  },
  termos: {
    titulo: 'Termos de Uso',
    secoes: [
      {
        subtitulo: 'Sobre este site',
        texto: 'Este site apresenta os serviços da Dra. Kamille Gallego Vieira e facilita o contato para agendamento. As informações publicadas têm caráter informativo e não substituem a avaliação clínica.'
      },
      {
        subtitulo: 'Agendamentos',
        texto: 'Enviar o formulário é uma solicitação de contato. O horário só fica confirmado após a resposta da equipe pelo WhatsApp.'
      },
      {
        subtitulo: 'Resultados e imagens',
        texto: 'Os casos e fotos de antes e depois são exemplos de tratamentos já realizados. Cada caso é único, e o resultado depende de avaliação individual.'
      },
      {
        subtitulo: 'Conteúdo',
        texto: 'Textos, fotos e marca pertencem à Dra. Kamille Gallego Vieira e não podem ser reproduzidos sem autorização.'
      }
    ]
  }
};

export default function PrivacyModal({ aberto, onFechar }) {
  const conteudo = aberto ? conteudos[aberto] : null;

  useEffect(() => {
    if (!aberto) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') onFechar();
    };
    window.addEventListener('keydown', handleKey);
    window.lenis?.stop();
    return () => {
      window.removeEventListener('keydown', handleKey);
      window.lenis?.start();
    };
  }, [aberto, onFechar]);

  return createPortal(
    <AnimatePresence>
      {conteudo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          // Acima do botão flutuante do WhatsApp, que usa o z-index máximo
          style={{ zIndex: 2147483647 }}
          className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={onFechar}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-modal-legal"
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto overscroll-contain bg-white text-slate-700 rounded-[28px] p-6 md:p-10 shadow-2xl"
            data-lenis-prevent
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onFechar}
              aria-label="Fechar"
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 id="titulo-modal-legal" className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pr-10">
              {conteudo.titulo}
            </h2>

            <div className="space-y-5">
              {conteudo.secoes.map((secao) => (
                <div key={secao.subtitulo}>
                  <h3 className="font-bold text-slate-900 mb-1">{secao.subtitulo}</h3>
                  <p className="text-[15px] leading-relaxed">{secao.texto}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
