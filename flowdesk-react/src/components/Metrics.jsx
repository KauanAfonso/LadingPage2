import { useEffect, useRef } from 'react'
import './Metrics.css'

const items = [
  { count: 12400, label: 'Processos automatizados', desc: 'por mês nos clientes ativos' },
  { count: 97,    label: 'SLA cumprido',             desc: 'média nas últimas 12 semanas', suffix: '%' },
  { count: 6200,  label: 'Horas economizadas',       desc: 'eliminando tarefas manuais por mês' },
  { count: 91,    label: 'Redução de erros',         desc: 'em processos de aprovação', suffix: '%' },
]

function animateCount(el, target, suffix) {
  const dur = 1400
  const t0  = performance.now()
  const tick = now => {
    const p = Math.min((now - t0) / dur, 1)
    const v = target * (1 - Math.pow(1 - p, 3))
    el.textContent = (target >= 1000 ? Math.round(v).toLocaleString('pt-BR') : Math.round(v)) + (suffix || '')
    if (p < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

export default function Metrics() {
  const refs = useRef([])

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return

    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        const el  = entry.target
        const idx = Number(el.dataset.idx)
        animateCount(el, items[idx].count, items[idx].suffix)
        obs.unobserve(el)
      })
    }, { threshold: 0.5 })

    refs.current.forEach(el => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className="section metrics" id="metricas">
      <div className="container">
        <div className="metrics-grid">
          {items.map((item, i) => (
            <div key={item.label} className="metric" data-reveal data-reveal-delay={i * 80}>
              <span
                className="metric-num"
                data-idx={i}
                ref={el => { refs.current[i] = el }}
              >
                0
              </span>
              <span className="metric-label">{item.label}</span>
              <span className="metric-desc">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
