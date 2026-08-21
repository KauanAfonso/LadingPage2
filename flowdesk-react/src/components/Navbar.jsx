import { useNavbar } from '../hooks/useNavbar'
import './Navbar.css'

const links = [
  { href: '#produto',        label: 'Produto' },
  { href: '#como-funciona',  label: 'Como funciona' },
  { href: '#plataforma',     label: 'Plataforma' },
  { href: '#planos',         label: 'Planos' },
]

function Logo() {
  return (
    <a href="#" className="nav-logo" aria-label="FlowDesk — início">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="10" height="10" stroke="#0c0c0c" strokeWidth="1.6"/>
        <rect x="13" y="1" width="10" height="10" stroke="#0c0c0c" strokeWidth="1.6" fill="#0c0c0c"/>
        <rect x="1" y="13" width="10" height="10" stroke="#0c0c0c" strokeWidth="1.6" fill="#0c0c0c" opacity=".2"/>
        <rect x="13" y="13" width="10" height="10" stroke="#0c0c0c" strokeWidth="1.6"/>
      </svg>
      <span>FlowDesk</span>
    </a>
  )
}

export default function Navbar() {
  const { scrolled, mobileOpen, toggleMobile, closeMobile } = useNavbar()

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar" role="banner">
      <div className="nav-inner">
        <Logo />

        <nav className="nav-links" aria-label="Menu principal">
          {links.map(l => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div className="nav-actions">
          <a href="#cta-final" className="btn btn--primary btn--sm">Solicitar demo</a>
          <button
            className={`nav-toggle${mobileOpen ? ' open' : ''}`}
            aria-label="Abrir menu"
            aria-expanded={String(mobileOpen)}
            aria-controls="nav-mobile"
            onClick={toggleMobile}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div className={`nav-mobile${mobileOpen ? ' open' : ''}`} id="nav-mobile" role="dialog" aria-label="Menu mobile">
        <nav>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={closeMobile}>{l.label}</a>
          ))}
        </nav>
        <a href="#cta-final" className="btn btn--primary" onClick={closeMobile}>Solicitar demo</a>
      </div>
    </header>
  )
}
