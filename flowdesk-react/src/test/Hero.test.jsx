import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from '../components/Hero'

describe('Hero', () => {
  it('renderiza o heading principal', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('exibe o texto "Automatize processos."', () => {
    render(<Hero />)
    expect(screen.getByText(/Automatize processos\./i)).toBeInTheDocument()
  })

  it('exibe o chip de novidade', () => {
    render(<Hero />)
    expect(screen.getByText(/Telefonia e SLA com IA integrada/i)).toBeInTheDocument()
  })

  it('renderiza o botão de demonstração', () => {
    render(<Hero />)
    const ctaLinks = screen.getAllByRole('link', { name: /solicitar demonstração/i })
    expect(ctaLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('renderiza o link "Ver como funciona"', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /ver como funciona/i })).toBeInTheDocument()
  })

  it('exibe a prova social com +240 equipes', () => {
    render(<Hero />)
    expect(screen.getByText(/\+240 equipes operando com FlowDesk/i)).toBeInTheDocument()
  })

  it('exibe a métrica de SLA cumprido', () => {
    render(<Hero />)
    expect(screen.getByText(/96\.4%/)).toBeInTheDocument()
  })

  it('exibe a métrica de processos do dia', () => {
    render(<Hero />)
    expect(screen.getByText(/1\.847/)).toBeInTheDocument()
  })

  it('FlowUI tem role="img" com label descritivo', () => {
    const { container } = render(<Hero />)
    // O FlowUI está dentro de aria-hidden, por isso usamos querySelector diretamente
    const flowUi = container.querySelector('[role="img"][aria-label*="Fluxo de contrata"]')
    expect(flowUi).toBeInTheDocument()
  })
})
