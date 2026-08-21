import './CtaFinal.css'

export default function CtaFinal() {
  return (
    <section className="cta-final" id="cta-final" aria-labelledby="cta-h2">
      <div className="container">
        <div className="cta-inner" data-reveal>
          <h2 id="cta-h2">Menos gargalos.<br />Mais controle.</h2>
          <p>
            Agende uma demonstração e veja sua operação funcionando sem interrupções —
            configuração em dias, resultado desde a primeira semana.
          </p>
          <div className="cta-actions">
            <a href="mailto:contato@flowdesk.com.br" className="btn btn--cta-white">Solicitar demonstração</a>
            <a href="mailto:vendas@flowdesk.com.br"  className="btn btn--cta-ghost">Falar com especialista</a>
          </div>
          <p className="cta-note">Piloto de 14 dias · Sem cartão · Onboarding incluído</p>
        </div>
      </div>
    </section>
  )
}
