import { useState } from 'react'
import './Pricing.css'

const plans = [
  {
    name: 'Starter',
    desc: 'Para times estruturando os primeiros processos.',
    monthly: 299, annual: 239,
    features: ['Até 5 usuários', 'Telefonia básica com Agent', '50 tarefas/mês com SLA', '5 integrações', 'Relatórios semanais'],
    cta: 'Começar agora', ctaClass: 'btn--outline',
  },
  {
    name: 'Business',
    desc: 'Para equipes que precisam de controle completo de telefonia, tarefas e SLA.',
    monthly: 799, annual: 639,
    features: ['Até 30 usuários', 'Telefonia ilimitada com Agent', 'Tarefas e SLA ilimitados', 'Modelos e templates', 'Integrações ilimitadas', 'Suporte prioritário'],
    cta: 'Solicitar demonstração', ctaClass: 'btn--primary', featured: true, badge: 'Mais escolhido',
  },
  {
    name: 'Enterprise',
    desc: 'Para corporações com alto volume e requisitos de compliance.',
    custom: 'Sob consulta',
    features: ['Usuários ilimitados', 'Ambiente dedicado', 'SSO / LDAP', 'SLA 99.9% contratual', 'Onboarding e CS dedicados', 'Suporte 24/7'],
    cta: 'Falar com vendas', ctaClass: 'btn--outline',
  },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section className="section price-section" id="planos" aria-labelledby="price-h2">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Planos</span>
          <h2 id="price-h2">Preço direto.<br />Sem letra miúda.</h2>
        </div>

        <div className="price-toggle" data-reveal>
          <span id="toggle-monthly" className={`ptoggle${!annual ? ' ptoggle--active' : ''}`}>Mensal</span>
          <button
            className="ptoggle-track"
            role="switch"
            aria-checked={String(annual)}
            aria-label="Alternar para faturamento anual"
            onClick={() => setAnnual(p => !p)}
          >
            <span className="ptoggle-thumb" />
          </button>
          <span id="toggle-annual" className={`ptoggle${annual ? ' ptoggle--active' : ''}`}>
            Anual <em className="save-badge">−20%</em>
          </span>
        </div>

        <div className="price-grid" data-reveal>
          {plans.map(plan => (
            <div key={plan.name} className={`price-card${plan.featured ? ' price-card--featured' : ''}`}>
              {plan.badge && <div className="price-card-badge">{plan.badge}</div>}
              <div className="price-card-header">
                <h3>{plan.name}</h3>
                <p>{plan.desc}</p>
              </div>
              <div className={`price-amount${plan.custom ? ' price-amount--custom' : ''}`}>
                {plan.custom ? (
                  <span className="price-custom">{plan.custom}</span>
                ) : (
                  <>
                    <span className="price-curr">R$</span>
                    <span className="price-val" aria-live="polite">
                      {annual ? plan.annual : plan.monthly}
                    </span>
                    <span className="price-per">/mês</span>
                  </>
                )}
              </div>
              <ul className="price-features">
                {plan.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <a href="#cta-final" className={`btn ${plan.ctaClass} btn--full`}>{plan.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
