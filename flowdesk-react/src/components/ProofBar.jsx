import './ProofBar.css'

const logos = ['Arbela Tecnologia', 'Nexfield', 'Grupo Carvalt', 'Braxis Soluções', 'Tectum Group', 'Verano Ops']

export default function ProofBar() {
  return (
    <section className="proof-bar" aria-label="Empresas que usam FlowDesk">
      <div className="container">
        <p className="proof-bar__label">Utilizado por equipes de empresas como</p>
        <div className="proof-bar__logos">
          {logos.map(name => <span key={name}>{name}</span>)}
        </div>
      </div>
    </section>
  )
}
