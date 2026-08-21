import { useState, useEffect } from 'react'
import './FAQ.css'

const items = [
  {
    q: 'Como funciona a integração com o Agent de telefonia?',
    a: 'FlowDesk se conecta ao seu Agent via API nativa ou integração com as principais centrais VoIP e PABX. Após configurado, todas as ligações são registradas automaticamente com metadados completos — sem intervenção manual.',
  },
  {
    q: 'Posso criar templates de tarefas que se disparam automaticamente?',
    a: 'Sim. Você configura templates com campos, responsável padrão, prazo e SLA. O gatilho pode ser o encerramento de uma ligação, uma data agendada, a chegada de um formulário ou qualquer evento do seu workflow.',
  },
  {
    q: 'Como o SLA funciona na prática?',
    a: 'Você define o prazo máximo por tipo de tarefa. O FlowDesk monitora em tempo real e alerta progressivamente — 50%, 80% e 100% do prazo consumido. Se estourar, escala automaticamente para o responsável superior configurado.',
  },
  {
    q: 'Quais centrais de telefonia são suportadas?',
    a: 'Temos conectores nativos para Asterisk, 3CX, Twilio, Zendesk Talk e RingCentral. Para sistemas proprietários, a integração acontece via webhook ou API REST.',
  },
  {
    q: 'Os dados ficam no Brasil? Há conformidade com a LGPD?',
    a: 'Sim. Infraestrutura hospedada no Brasil, criptografia em trânsito e em repouso, controle de acesso por função e trilha de auditoria completa. Operamos em conformidade total com a LGPD.',
  },
  {
    q: 'Há período de teste gratuito?',
    a: 'Oferecemos uma demonstração guiada e um piloto de 14 dias com acesso completo ao plano Business. Sem cartão de crédito.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0) // primeiro item aberto por padrão

  const toggle = i => setOpen(prev => (prev === i ? null : i))

  return (
    <section className="section faq-section" id="faq" aria-labelledby="faq-h2">
      <div className="faq-wrap">
        <div className="section-head section-head--left" data-reveal>
          <span className="eyebrow">FAQ</span>
          <h2 id="faq-h2">Perguntas frequentes</h2>
        </div>

        <div className="faq-list" data-reveal role="list">
          {items.map((item, i) => (
            <FAQItem
              key={item.q}
              question={item.q}
              answer={item.a}
              isOpen={open === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className={`faq-item${isOpen ? ' open' : ''}`} role="listitem">
      <button
        className="faq-q"
        aria-expanded={String(isOpen)}
        onClick={onToggle}
      >
        {question}
        <svg className="faq-chevron" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div className="faq-a" style={{ maxHeight: isOpen ? '300px' : '0' }}>
        <p>{answer}</p>
      </div>
    </div>
  )
}
