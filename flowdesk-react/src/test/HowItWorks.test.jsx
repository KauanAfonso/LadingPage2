import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import HowItWorks from '../components/HowItWorks'

describe('HowItWorks', () => {
  it('renderiza o título da seção', () => {
    render(<HowItWorks />)
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })

  it('exibe o eyebrow "Como funciona"', () => {
    render(<HowItWorks />)
    expect(screen.getByText('Como funciona')).toBeInTheDocument()
  })

  it('renderiza os 4 passos numerados', () => {
    render(<HowItWorks />)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByText('03')).toBeInTheDocument()
    expect(screen.getByText('04')).toBeInTheDocument()
  })

  it('exibe o título do passo 1 — Ligação registrada', () => {
    render(<HowItWorks />)
    expect(screen.getByText('Ligação registrada')).toBeInTheDocument()
  })

  it('exibe o título do passo 2 — Tarefa criada com SLA', () => {
    render(<HowItWorks />)
    expect(screen.getByText('Tarefa criada com SLA')).toBeInTheDocument()
  })

  it('exibe o título do passo 3 — Fluxo de aprovação ativado', () => {
    render(<HowItWorks />)
    expect(screen.getByText('Fluxo de aprovação ativado')).toBeInTheDocument()
  })

  it('exibe o título do passo 4 — Relatório e arquivo automático', () => {
    render(<HowItWorks />)
    expect(screen.getByText('Relatório e arquivo automático')).toBeInTheDocument()
  })

  it('exibe a mini-interface do fluxo de aprovação', () => {
    render(<HowItWorks />)
    expect(screen.getByText('Financeiro')).toBeInTheDocument()
    expect(screen.getByText('Jurídico')).toBeInTheDocument()
  })
})
