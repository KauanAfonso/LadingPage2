import './Testimonials.css'

const cards = [
  {
    quote: '"30% das nossas ligações não geravam nenhuma ação registrada. Com FlowDesk cada chamada vira uma tarefa rastreável com SLA definido."',
    name: 'Marcos Figueiredo',
    role: 'Gerente de Operações — Arbela Tecnologia',
    av: 'MF',
    delay: 0,
  },
  {
    quote: '"O SLA era monitorado por planilha. Hoje temos alertas automáticos e escalonamento configurado. Zero tarefa crítica esquecida no trimestre."',
    name: 'Renata Alves',
    role: 'Diretora Administrativa — Nexfield',
    av: 'RA',
    delay: 100,
  },
  {
    quote: '"A integração com nosso Agent foi em dois dias. Toda tarefa gerada em uma ligação já entra com responsável, prazo e template preenchido."',
    name: 'Carolina Souza',
    role: 'Head de Atendimento — Grupo Carvalt',
    av: 'CS',
    delay: 200,
  },
]

export default function Testimonials() {
  return (
    <section className="section test-section" id="depoimentos" aria-labelledby="test-h2">
      <div className="container">
        <div className="section-head section-head--left" data-reveal>
          <span className="eyebrow">Clientes</span>
          <h2 id="test-h2">Resultados que aparecem<br />no primeiro mês.</h2>
        </div>

        <div className="test-grid">
          {cards.map(card => (
            <blockquote key={card.name} className="test-card" data-reveal data-reveal-delay={card.delay}>
              <span className="test-quote-mark" aria-hidden="true">"</span>
              <p>{card.quote}</p>
              <footer>
                <span className="avatar">{card.av}</span>
                <div>
                  <cite className="test-name">{card.name}</cite>
                  <span className="test-role">{card.role}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
