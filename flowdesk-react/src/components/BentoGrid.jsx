import './BentoGrid.css'

export default function BentoGrid() {
  return (
    <section className="section bento-section" id="produto" aria-labelledby="bento-h2">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Plataforma</span>
          <h2 id="bento-h2">Cada processo.<br />Um lugar só.</h2>
          <p>Seis capacidades que trabalham juntas — não seis ferramentas que você precisaria integrar.</p>
        </div>

        <div className="bento-grid">
          <div className="bento-card bento-card--a" data-reveal data-reveal-delay="0" tabIndex="0">
            <div className="bento-card__label">Analytics em tempo real</div>
            <h3 className="bento-card__title">Visão completa da operação sem abrir relatório</h3>
            <div className="bento-card__visual bento-visual--analytics" aria-hidden="true">
              <div className="bv-kpi-row">
                <div className="bv-kpi"><span className="bv-kpi-val">1.847</span><span className="bv-kpi-lbl">Processos</span></div>
                <div className="bv-kpi"><span className="bv-kpi-val">98.2%</span><span className="bv-kpi-lbl">SLA</span></div>
                <div className="bv-kpi"><span className="bv-kpi-val">3.4h</span><span className="bv-kpi-lbl">Tempo médio</span></div>
                <div className="bv-kpi"><span className="bv-kpi-val">−19%</span><span className="bv-kpi-lbl">vs. mês ant.</span></div>
              </div>
              <div className="bv-bars">
                {[48, 71, 59, 88, 95, 74, 82].map((h, i) => (
                  <div key={i} className={`bv-bar${h === 95 ? ' bv-bar--hi' : ''}`} style={{ '--bh': `${h}%` }} />
                ))}
              </div>
            </div>
          </div>

          <div className="bento-card bento-card--b" data-reveal data-reveal-delay="80" tabIndex="0">
            <div className="bento-card__label">Workflow Builder</div>
            <h3 className="bento-card__title">Monte fluxos sem código</h3>
            <div className="bento-card__visual bento-visual--workflow" aria-hidden="true">
              <div className="wf-node wf-node--start">Início</div>
              <div className="wf-arrow" />
              <div className="wf-node">RH revisa</div>
              <div className="wf-arrow" />
              <div className="wf-node wf-node--branch">
                <span className="wf-branch">Aprovado</span>
                <span className="wf-branch wf-branch--alt">Recusado</span>
              </div>
              <div className="wf-arrow" />
              <div className="wf-node wf-node--end">Concluído</div>
            </div>
          </div>

          <div className="bento-card bento-card--c" data-reveal data-reveal-delay="160" tabIndex="0">
            <div className="bento-card__label">Aprovações</div>
            <h3 className="bento-card__title">Um clique. Processo avança.</h3>
            <div className="bento-card__visual bento-visual--approval" aria-hidden="true">
              {[
                { name: 'Contrato Fornecedor', meta: 'Enviado por Lucas P. · 2h atrás' },
                { name: 'Férias — Time Dev',    meta: 'Enviado por Jess O. · 4h atrás' },
              ].map(item => (
                <div key={item.name} className="ap-item">
                  <div className="ap-info">
                    <span className="ap-name">{item.name}</span>
                    <span className="ap-meta">{item.meta}</span>
                  </div>
                  <div className="ap-actions">
                    <button className="ap-btn ap-btn--ok" type="button" tabIndex="-1" aria-hidden="true">Aprovar</button>
                    <button className="ap-btn ap-btn--no" type="button" tabIndex="-1" aria-hidden="true">Recusar</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bento-card bento-card--d" data-reveal data-reveal-delay="80" tabIndex="0">
            <div className="bento-card__label">Integrações</div>
            <h3 className="bento-card__title">120+ conectores prontos para o dia um</h3>
            <div className="bento-card__visual bento-visual--integrations" aria-hidden="true">
              <div className="int-chips">
                {['SAP','TOTVS','Salesforce','Teams','Zendesk','DocuSign','Slack','Oracle','Zapier'].map(n => (
                  <span key={n} className="int-chip">{n}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="bento-card bento-card--e" data-reveal data-reveal-delay="160" tabIndex="0">
            <div className="bento-card__label">Documentos</div>
            <h3 className="bento-card__title">Geração automática com variáveis do processo</h3>
            <div className="bento-card__visual bento-visual--docs" aria-hidden="true">
              <DocRow name="Contrato_CLT_2048.pdf" meta="Gerado automaticamente · 09:14" status="done" badge="Assinado" />
              <DocRow name="NF_Servicos_Q4.pdf"    meta="Em aprovação · Financeiro"      status="active" badge="Revisão" />
            </div>
          </div>

          <div className="bento-card bento-card--f" data-reveal data-reveal-delay="240" tabIndex="0">
            <div className="bento-card__label">IA integrada</div>
            <h3 className="bento-card__title">Triagem e roteamento automático por inteligência artificial</h3>
            <div className="bento-card__visual bento-visual--ai" aria-hidden="true">
              <div className="ai-log">
                <div className="ai-line"><span className="ai-tag ai-tag--purple">IA</span><span>Documento identificado como Contrato CLT</span></div>
                <div className="ai-line"><span className="ai-tag ai-tag--purple">IA</span><span>Roteado para fluxo RH &gt; Financeiro &gt; Jurídico</span></div>
                <div className="ai-line"><span className="ai-tag">SLA</span><span>Prazo definido: 48h. Notificações configuradas.</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function DocRow({ name, meta, status, badge }) {
  return (
    <div className="doc-row">
      <div className="doc-icon">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="2" y="1" width="9" height="12" rx="1" stroke="currentColor" strokeWidth="1.1" fill="none"/>
          <path d="M5 14h7a1 1 0 001-1V5l-3-3H5" stroke="currentColor" strokeWidth="1.1"/>
          <path d="M4 5h4M4 7.5h6M4 10h3" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="doc-info">
        <span>{name}</span>
        <span className="doc-meta">{meta}</span>
      </div>
      <span className={`badge-status ${status}`}>{badge}</span>
    </div>
  )
}
