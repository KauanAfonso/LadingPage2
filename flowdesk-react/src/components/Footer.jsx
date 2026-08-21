import './Footer.css'

const cols = [
  {
    title: 'Produto',
    links: [
      { href: '#produto',       label: 'Plataforma' },
      { href: '#integracoes',   label: 'Integrações' },
      { href: '#planos',        label: 'Planos' },
      { href: '#como-funciona', label: 'Como funciona' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { href: '#', label: 'Sobre nós' },
      { href: '#', label: 'Blog' },
      { href: '#', label: 'Carreiras' },
    ],
  },
  {
    title: 'Suporte',
    links: [
      { href: '#',                              label: 'Documentação' },
      { href: '#',                              label: 'Status' },
      { href: 'mailto:suporte@flowdesk.com.br', label: 'Contato' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#" className="nav-logo" aria-label="FlowDesk">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="1" y="1" width="10" height="10" stroke="#0c0c0c" strokeWidth="1.6"/>
              <rect x="13" y="1" width="10" height="10" stroke="#0c0c0c" strokeWidth="1.6" fill="#0c0c0c"/>
              <rect x="1" y="13" width="10" height="10" stroke="#0c0c0c" strokeWidth="1.6" fill="#0c0c0c" opacity=".2"/>
              <rect x="13" y="13" width="10" height="10" stroke="#0c0c0c" strokeWidth="1.6"/>
            </svg>
            <span>FlowDesk</span>
          </a>
          <p>Automação operacional para empresas que exigem controle.</p>
        </div>

        <nav className="footer-links" aria-label="Rodapé">
          {cols.map(col => (
            <div key={col.title} className="footer-col">
              <h4>{col.title}</h4>
              {col.links.map(l => (
                <a key={l.label} href={l.href}>{l.label}</a>
              ))}
            </div>
          ))}
        </nav>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 FlowDesk. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
