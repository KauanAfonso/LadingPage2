import './Integrations.css'

const tiles = [
  'SAP', 'TOTVS', 'Salesforce', 'Microsoft Teams',
  'Google Workspace', 'Zendesk', 'Zapier', 'DocuSign',
  'Oracle', 'Pipedrive', 'Slack',
]

export default function Integrations() {
  return (
    <section className="section int-section" id="integracoes" aria-labelledby="int-h2">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Integrações</span>
          <h2 id="int-h2">Não substitui.<br />Amplifica.</h2>
          <p>FlowDesk se conecta à infraestrutura que sua empresa já usa — sem migração, sem retrabalho.</p>
        </div>

        <div className="int-grid" data-reveal>
          {tiles.map(name => (
            <div key={name} className="int-tile">{name}</div>
          ))}
          <div className="int-tile int-tile--more">+ 110 mais</div>
        </div>
      </div>
    </section>
  )
}
