import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Metrics from '../components/Metrics'

describe('Metrics', () => {
  it('renderiza a seção de métricas', () => {
    render(<Metrics />)
    expect(document.getElementById('metricas')).toBeInTheDocument()
  })

  it('exibe o label "Processos automatizados"', () => {
    render(<Metrics />)
    expect(screen.getByText('Processos automatizados')).toBeInTheDocument()
  })

  it('exibe o label "SLA cumprido"', () => {
    render(<Metrics />)
    expect(screen.getByText('SLA cumprido')).toBeInTheDocument()
  })

  it('exibe o label "Horas economizadas"', () => {
    render(<Metrics />)
    expect(screen.getByText('Horas economizadas')).toBeInTheDocument()
  })

  it('exibe o label "Redução de erros"', () => {
    render(<Metrics />)
    expect(screen.getByText('Redução de erros')).toBeInTheDocument()
  })

  it('exibe a descrição de processos por mês', () => {
    render(<Metrics />)
    expect(screen.getByText(/por mês nos clientes ativos/i)).toBeInTheDocument()
  })

  it('exibe 4 métricas no total', () => {
    render(<Metrics />)
    const labels = screen.getAllByText(/automatizados|SLA cumprido|economizadas|erros/i)
    expect(labels.length).toBeGreaterThanOrEqual(4)
  })

  it('os números iniciam em 0 antes da animação', () => {
    render(<Metrics />)
    // IntersectionObserver não dispara em jsdom, então os valores permanecem 0
    const zeros = screen.getAllByText('0')
    expect(zeros.length).toBe(4)
  })
})
