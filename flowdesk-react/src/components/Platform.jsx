import './Platform.css'

const navItems = [
  { icon: <GridIcon />,    label: 'Painel' },
  { icon: <PhoneIcon />,   label: 'Telefonia', active: true },
  { icon: <CalIcon />,     label: 'Tarefas' },
  { icon: <ChartIcon />,   label: 'Analytics' },
  { icon: <DocIcon />,     label: 'Documentos' },
  { icon: <UserIcon />,    label: 'Equipe' },
]

const kpis = [
  { lbl: 'Ligações hoje',  val: '347',   delta: '+14%', up: true },
  { lbl: 'SLA cumprido',   val: '96.4%', delta: '+2pp', up: true },
  { lbl: 'Tarefas geradas',val: '82',    delta: '+6',   up: true },
  { lbl: 'Tempo médio',    val: '3.1h',  delta: '−19%', up: false },
]

const bars = [
  { h: 52, label: 'Seg' }, { h: 74, label: 'Ter' }, { h: 49, label: 'Qua' },
  { h: 86, label: 'Qui' }, { h: 97, label: 'Sex', hi: true }, { h: 61, label: 'Sáb' }, { h: 44, label: 'Dom' },
]

const tableRows = [
  { task: 'Retorno cliente VIP', resp: 'Ana S.',    sla: '1h 20m', slaClass: 'sla-red',    status: 'red',    badge: 'Urgente' },
  { task: 'Aprovação contrato',  resp: 'Carlos M.', sla: '3h',     slaClass: 'sla-yellow', status: 'yellow', badge: 'Hoje' },
  { task: 'Follow-up proposta',  resp: 'Lucas P.',  sla: '—',      slaClass: '',           status: 'green',  badge: 'Concluído' },
  { task: 'Proposta Q4',         resp: 'Jess. O.',  sla: '6h',     slaClass: '',           status: 'blue',   badge: 'Andamento' },
]

const actFeed = [
  { av: 'AS', text: <><strong>Ana S.</strong> aprovou Contrato RH-009</>,    time: '09:42' },
  { av: 'CM', text: <><strong>Carlos M.</strong> comentou em NF Financeiro</>, time: '10:17' },
  { av: 'IA', text: <><strong>IA</strong> roteou #RH-2048 para Financeiro</>,  time: '10:31', ai: true },
]

export default function Platform() {
  return (
    <section className="section platform-section" id="plataforma" aria-labelledby="plat-h2">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Interface</span>
          <h2 id="plat-h2">Construída para quem opera.<br />Não para quem configura.</h2>
          <p>Cada detalhe foi pensado para reduzir o atrito — da criação de um fluxo ao acompanhamento em tempo real.</p>
        </div>

        <div className="platform-frame" data-reveal aria-hidden="true">
          <div className="pf-bar">
            <div className="pf-dots"><span className="fd r" /><span className="fd y" /><span className="fd g" /></div>
            <span className="pf-url">app.flowdesk.com.br — Operações / Telefonia &amp; SLA</span>
            <div className="pf-users">
              <span className="avatar avatar--xs">AS</span>
              <span className="avatar avatar--xs">CM</span>
              <span className="online-dot" />
            </div>
          </div>

          <div className="pf-body">
            <aside className="pf-sidebar">
              <div className="pf-brand">FD</div>
              <nav className="pf-nav">
                {navItems.map(item => (
                  <div key={item.label} className={`pf-nav-item${item.active ? ' pf-nav-item--active' : ''}`}>
                    {item.icon}{item.label}
                  </div>
                ))}
              </nav>
              <div className="pf-nav-bottom">
                <div className="pf-nav-item"><SettingsIcon />Config.</div>
              </div>
            </aside>

            <div className="pf-main">
              <div className="pf-topbar">
                <div className="pf-topbar-left">
                  <span className="pf-page-title">Telefonia</span>
                  <div className="pf-filters">
                    <span className="pf-filter pf-filter--active">Hoje</span>
                    <span className="pf-filter">7 dias</span>
                    <span className="pf-filter">30 dias</span>
                  </div>
                </div>
                <div className="pf-topbar-right">
                  <div className="pf-search">
                    <SearchIcon />Buscar...
                  </div>
                  <span className="pf-notif-bell">
                    <BellIcon />
                    <span className="pf-notif-dot" />
                  </span>
                </div>
              </div>

              <div className="pf-kpis">
                {kpis.map(k => (
                  <div key={k.lbl} className="pf-kpi">
                    <span className="pf-kpi-lbl">{k.lbl}</span>
                    <span className="pf-kpi-val">{k.val}</span>
                    <span className={`pf-kpi-delta ${k.up ? 'up' : 'down'}`}>{k.delta}</span>
                  </div>
                ))}
              </div>

              <div className="pf-content-row">
                <div className="pf-chart">
                  <div className="pf-chart-title">Ligações por dia</div>
                  <div className="pf-bars">
                    {bars.map(b => (
                      <div key={b.label} className={`pb${b.hi ? ' pb--hi' : ''}`} style={{ '--h': `${b.h}%` }}>
                        <span>{b.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pf-table">
                  <div className="pf-chart-title">Tarefas com SLA próximo</div>
                  <table>
                    <thead><tr><th>Tarefa</th><th>Resp.</th><th>SLA</th><th>Status</th></tr></thead>
                    <tbody>
                      {tableRows.map(r => (
                        <tr key={r.task}>
                          <td>{r.task}</td>
                          <td>{r.resp}</td>
                          <td className={r.slaClass}>{r.sla}</td>
                          <td><span className={`chip-status chip-status--${r.status}`}>{r.badge}</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="pf-activity">
                <div className="pf-chart-title">Atividade recente</div>
                <div className="activity-feed">
                  {actFeed.map((a, i) => (
                    <div key={i} className="act-item">
                      <span className={`avatar avatar--xs${a.ai ? ' ai-av' : ''}`}>{a.av}</span>
                      <span className="act-text">{a.text}</span>
                      <span className="act-time">{a.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function GridIcon()     { return <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><rect x=".5" y=".5" width="5" height="5" stroke="currentColor" strokeWidth="1"/><rect x="7.5" y=".5" width="5" height="5" stroke="currentColor" strokeWidth="1"/><rect x=".5" y="7.5" width="5" height="5" stroke="currentColor" strokeWidth="1"/><rect x="7.5" y="7.5" width="5" height="5" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity=".18"/></svg> }
function PhoneIcon()    { return <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 1.5h2l1 2.5-1.5.8A6 6 0 007 7.3l.8-1.5L10.5 7v2.5C6.5 11.5 1.5 6.5 1.5 2.5L2 1.5z" stroke="currentColor" strokeWidth="1" fill="none"/></svg> }
function CalIcon()      { return <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><rect x=".5" y="2.5" width="12" height="9" stroke="currentColor" strokeWidth="1"/><path d="M4 .5v4M9 .5v4M.5 6.5h12" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/></svg> }
function ChartIcon()    { return <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M1 9L4 5l3 3 2-2.5 3 3.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/><rect x=".5" y=".5" width="12" height="12" stroke="currentColor" strokeWidth="1"/></svg> }
function DocIcon()      { return <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 3h9M2 6.5h7M2 10h5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/></svg> }
function UserIcon()     { return <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="6.5" cy="4" r="2.5" stroke="currentColor" strokeWidth="1"/><path d="M1 11.5c0-2.5 2.5-4 5.5-4s5.5 1.5 5.5 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/></svg> }
function SettingsIcon() { return <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="6.5" cy="6.5" r="2" stroke="currentColor" strokeWidth="1"/><path d="M6.5 1v1.5M6.5 10v1.5M1 6.5h1.5M10 6.5h1.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/></svg> }
function SearchIcon()   { return <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><circle cx="4.5" cy="4.5" r="3.5" stroke="currentColor" strokeWidth="1"/><path d="M9.5 9.5L7 7" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/></svg> }
function BellIcon()     { return <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1a3.5 3.5 0 013.5 3.5c0 2 .5 3 1 3.5H2c.5-.5 1-1.5 1-3.5A3.5 3.5 0 016.5 1zM5 9.5a1.5 1.5 0 003 0" stroke="currentColor" strokeWidth="1" fill="none"/></svg> }
