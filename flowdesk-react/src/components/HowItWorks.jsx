import './HowItWorks.css'

const steps = [
  {
    num: '01',
    title: 'Ligação registrada',
    desc: 'O Agent captura automaticamente cada chamada — inbound ou outbound — com operador, duração e desfecho.',
    mini: (
      <div className="mini-call">
        <div className="mini-call-row">
          <span className="mini-call-ico"><PhoneIcon /></span>
          <span className="mini-call-info"><strong>Recebida</strong> · 3min 42s</span>
          <span className="badge-status done">Registrado</span>
        </div>
        <div className="mini-call-row">
          <span className="mini-call-ico"><PhoneIcon /></span>
          <span className="mini-call-info"><strong>Realizada</strong> · 1min 18s</span>
          <span className="badge-status active">Tarefa gerada</span>
        </div>
      </div>
    ),
  },
  {
    num: '02',
    title: 'Tarefa criada com SLA',
    desc: 'Ao encerrar a ligação, uma tarefa é gerada automaticamente — com responsável, prazo e template preenchido.',
    mini: (
      <div className="mini-task">
        <div className="mini-task-header">
          <span className="mini-task-title">Retorno cliente — Proposta Q4</span>
          <span className="badge-status active">Em andamento</span>
        </div>
        <div className="mini-task-meta">
          <span>Resp: Ana S.</span>
          <span>SLA: <strong style={{ color: 'var(--c-red)' }}>1h 20min</strong></span>
        </div>
      </div>
    ),
  },
  {
    num: '03',
    title: 'Fluxo de aprovação ativado',
    desc: 'Documentos seguem automaticamente pelo fluxo configurado — RH, financeiro, jurídico — cada um notificado no prazo.',
    mini: (
      <div className="mini-flow-wrap">
        <div className="mini-flow">
          <span className="mf-node mf-node--done">RH</span>
          <span className="mf-arrow">→</span>
          <span className="mf-node mf-node--active">Financeiro</span>
          <span className="mf-arrow mf-arrow--dim">→</span>
          <span className="mf-node mf-node--wait">Jurídico</span>
        </div>
      </div>
    ),
  },
  {
    num: '04',
    title: 'Relatório e arquivo automático',
    desc: 'Ao concluir, o histórico é consolidado, o documento é arquivado e o relatório enviado automaticamente para os gestores.',
    mini: (
      <div className="mini-report">
        <div className="mini-report-line"><CheckIcon />Processo #RH-2048 concluído</div>
        <div className="mini-report-line"><CheckIcon />Relatório enviado para 3 gestores</div>
        <div className="mini-report-line"><CheckIcon />Arquivo indexado em Documentos</div>
      </div>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section className="section how-section" id="como-funciona" aria-labelledby="how-h2">
      <div className="container">
        <div className="section-head section-head--left" data-reveal>
          <span className="eyebrow">Como funciona</span>
          <h2 id="how-h2">Da ligação ao arquivo.<br />Sem lacunas.</h2>
          <p>Cada etapa do processo tem uma mini-interface própria. Nada se perde entre sistemas.</p>
        </div>

        <div className="how-steps">
          {steps.map((step, i) => (
            <div key={step.num} className="how-step" data-reveal data-reveal-delay={i * 80} tabIndex="0">
              <div className="how-step__num-wrap">
                <div className="how-step__num">{step.num}</div>
              </div>
              <div className="how-step__content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                <div className="how-step__mini" aria-hidden="true">
                  {step.mini}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PhoneIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
      <path d="M2 1.5h2l1 2.5-1.5.8a6.5 6.5 0 002.7 2.7l.8-1.5L9.5 8v2C5 10.5 1 6.5 1 2l1-.5z" stroke="currentColor" strokeWidth="1" fill="none"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
      <path d="M2 5.5l2.5 2.5 4.5-4.5" stroke="#16a34a" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  )
}
