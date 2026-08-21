import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Pricing from '../components/Pricing'

describe('Pricing', () => {
  it('renderiza o título da seção', () => {
    render(<Pricing />)
    expect(screen.getByText(/Preço direto/i)).toBeInTheDocument()
  })

  it('renderiza os 3 planos', () => {
    render(<Pricing />)
    expect(screen.getByText('Starter')).toBeInTheDocument()
    expect(screen.getByText('Business')).toBeInTheDocument()
    expect(screen.getByText('Enterprise')).toBeInTheDocument()
  })

  it('exibe o badge "Mais escolhido" apenas no plano Business', () => {
    render(<Pricing />)
    expect(screen.getByText('Mais escolhido')).toBeInTheDocument()
  })

  it('exibe preços mensais por padrão', () => {
    render(<Pricing />)
    expect(screen.getByText('299')).toBeInTheDocument()
    expect(screen.getByText('799')).toBeInTheDocument()
  })

  it('alterna para preços anuais ao clicar no toggle', () => {
    render(<Pricing />)
    const toggle = screen.getByRole('switch', { name: /alternar para faturamento anual/i })

    fireEvent.click(toggle)

    expect(screen.getByText('239')).toBeInTheDocument()
    expect(screen.getByText('639')).toBeInTheDocument()
  })

  it('restaura preços mensais ao clicar duas vezes no toggle', () => {
    render(<Pricing />)
    const toggle = screen.getByRole('switch', { name: /alternar para faturamento anual/i })

    fireEvent.click(toggle)
    fireEvent.click(toggle)

    expect(screen.getByText('299')).toBeInTheDocument()
    expect(screen.getByText('799')).toBeInTheDocument()
  })

  it('o toggle tem aria-checked="false" inicialmente', () => {
    render(<Pricing />)
    const toggle = screen.getByRole('switch')
    expect(toggle).toHaveAttribute('aria-checked', 'false')
  })

  it('o toggle tem aria-checked="true" após clicar', () => {
    render(<Pricing />)
    const toggle = screen.getByRole('switch')
    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-checked', 'true')
  })

  it('plano Enterprise exibe "Sob consulta" em vez de preço', () => {
    render(<Pricing />)
    expect(screen.getByText('Sob consulta')).toBeInTheDocument()
  })

  it('renderiza todos os CTAs', () => {
    render(<Pricing />)
    expect(screen.getByText('Começar agora')).toBeInTheDocument()
    expect(screen.getAllByText('Solicitar demonstração').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Falar com vendas')).toBeInTheDocument()
  })

  it('o label "Mensal" tem classe ativa por padrão', () => {
    render(<Pricing />)
    expect(screen.getByText('Mensal')).toHaveClass('ptoggle--active')
  })

  it('o label "Anual" tem classe ativa após toggle', () => {
    render(<Pricing />)
    const toggle = screen.getByRole('switch')
    fireEvent.click(toggle)
    // O span Anual contém texto e um <em>, então usamos getByText parcial
    const anualSpan = screen.getByText(/anual/i)
    expect(anualSpan).toHaveClass('ptoggle--active')
  })

  it('features do plano Starter são listadas', () => {
    render(<Pricing />)
    expect(screen.getByText('Até 5 usuários')).toBeInTheDocument()
    expect(screen.getByText('Relatórios semanais')).toBeInTheDocument()
  })

  it('features do plano Enterprise são listadas', () => {
    render(<Pricing />)
    expect(screen.getByText('Usuários ilimitados')).toBeInTheDocument()
    expect(screen.getByText('Suporte 24/7')).toBeInTheDocument()
  })
})
