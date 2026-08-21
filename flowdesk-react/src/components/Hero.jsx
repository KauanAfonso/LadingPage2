import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero" aria-labelledby="hero-h1">
      <div className="hero-wrap container">

        <div className="hero-text">
          <div className="chip" data-reveal>
            <span className="chip-dot chip-dot--blue" />
            Novo — Telefonia e SLA com IA integrada
          </div>

          <h1 id="hero-h1" data-reveal>
            Automatize processos.<br /><em>Não pessoas.</em>
          </h1>

          <p className="hero-sub" data-reveal>
            Chega de tarefas esquecidas, processos sem rastreabilidade e aprovações que somem.
            FlowDesk centraliza telefonia, RH, financeiro e documentos num único fluxo — com SLA,
            histórico e integrações nativas.
          </p>

          <div className="hero-actions" data-reveal>
            <a href="#cta-final" className="btn btn--primary btn--lg">Solicitar demonstração</a>
            <a href="#como-funciona" className="btn btn--ghost btn--lg">Ver como funciona</a>
          </div>

          <div className="hero-proof" data-reveal>
            <div className="avatar-stack" aria-hidden="true">
              <span className="avatar">MF</span>
              <span className="avatar">RC</span>
              <span className="avatar">TS</span>
              <span className="avatar">KL</span>
            </div>
            <p>+240 equipes operando com FlowDesk</p>
          </div>
        </div>

        <div className="hero-visual" data-reveal aria-hidden="true">
          <div className="hero-card hero-card--top-right">
            <div className="hero-card-label">SLA cumprido hoje</div>
            <div className="hero-card-val">96.4%</div>
            <div className="hero-card-sub">347 ligações · 82 tarefas</div>
            <div className="hero-card-tag">
              <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                <path d="M1.5 6L4 3l2.5 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              +2pp vs. semana passada
            </div>
          </div>

          <FlowUI />

          <div className="hero-card hero-card--bot-left">
            <div className="hero-card-label">Processos hoje</div>
            <div className="hero-card-val">1.847</div>
            <div className="hero-card-sub">91% concluídos no prazo</div>
          </div>
        </div>

      </div>
    </section>
  )
}

function FlowUI() {
  return (
    <div className="flow-ui" role="img" aria-label="Fluxo de contratação CLT com etapas de aprovação">
      <div className="flow-header">
        <div className="flow-dots">
          <span className="fd r" /><span className="fd y" /><span className="fd g" />
        </div>
        <span className="flow-title">flowdesk.app — Fluxo: Contratação CLT</span>
        <div className="flow-users">
          <span className="avatar avatar--xs">AS</span>
          <span className="avatar avatar--xs">PM</span>
          <span className="online-dot" title="2 online" />
        </div>
      </div>

      <div className="flow-body">
        <div className="flow-breadcrumb">
          <span>Operações</span><span className="sep"> / </span>
          <span>RH</span><span className="sep"> / </span>
          <span className="active">Contratação CLT — #RH-2048</span>
        </div>

        <div className="flow-pipeline">
          <FlowStep status="done"    label="Documento enviado"       meta="Ana S. · 09:14"               badge="Concluído" />
          <div className="flow-connector" />
          <FlowStep status="done"    label="RH — Revisão"            meta="Carlos M. · 10:02"            badge="Aprovado" />
          <div className="flow-connector" />
          <FlowStep status="active"  label="Financeiro — Aprovação"  meta="SLA restante: 1h 20min"       badge="Em andamento" pulse />
          <div className="flow-connector flow-connector--dim" />
          <FlowStep status="waiting" label="Jurídico — Assinatura"   meta="Aguardando etapa anterior"    badge="Aguardando" />
          <div className="flow-connector flow-connector--dim" />
          <FlowStep status="waiting" label="Concluído — Arquivo"     meta="—"                            badge="Pendente" />
        </div>

        <div className="flow-footer">
          <div className="flow-comment">
            <span className="avatar avatar--xs">CM</span>
            <div className="flow-comment-bubble">
              <span className="flow-comment-name">
                Carlos M. <span style={{ fontWeight: 400, opacity: .5 }}>· agora mesmo</span>
              </span>
              <span className="flow-comment-text">Documentos conferidos. Encaminhando para o financeiro.</span>
            </div>
          </div>
          <div className="flow-notif">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path d="M5.5 1a3 3 0 013 3c0 1.8.4 2.7.9 3H1.6c.5-.3.9-1.2.9-3a3 3 0 013-3zM4 7.5a1.5 1.5 0 003 0" stroke="currentColor" strokeWidth="1" fill="none"/>
            </svg>
            Financeiro notificado via Agent · 10:31
          </div>
        </div>
      </div>
    </div>
  )
}

function FlowStep({ status, label, meta, badge, pulse }) {
  const iconDone = (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
  const iconActive = (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
      <circle cx="4" cy="4" r="2" fill="currentColor"/>
    </svg>
  )

  return (
    <div className={`flow-step flow-step--${status}`}>
      <div className={`flow-step-icon${pulse ? ' flow-step-icon--pulse' : ''}${status === 'waiting' ? ' flow-step-icon--empty' : ''}`}>
        {status === 'done' && iconDone}
        {status === 'active' && iconActive}
      </div>
      <div className="flow-step-body">
        <span className="flow-step-label">{label}</span>
        <span className="flow-step-meta">{meta}</span>
      </div>
      <span className={`badge-status ${status}`}>{badge}</span>
    </div>
  )
}
