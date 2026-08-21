import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import CtaFinal from '../components/CtaFinal'

describe('CtaFinal', () => {
  it('renderiza o heading principal', () => {
    render(<CtaFinal />)
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })

  it('exibe o texto "Menos gargalos."', () => {
    render(<CtaFinal />)
    expect(screen.getByText(/Menos gargalos\./i)).toBeInTheDocument()
  })

  it('exibe o link de "Solicitar demonstração" apontando para email', () => {
    render(<CtaFinal />)
    const link = screen.getByRole('link', { name: /solicitar demonstração/i })
    expect(link).toHaveAttribute('href', 'mailto:contato@flowdesk.com.br')
  })

  it('exibe o link "Falar com especialista" apontando para email de vendas', () => {
    render(<CtaFinal />)
    const link = screen.getByRole('link', { name: /falar com especialista/i })
    expect(link).toHaveAttribute('href', 'mailto:vendas@flowdesk.com.br')
  })

  it('exibe a nota sobre piloto gratuito', () => {
    render(<CtaFinal />)
    expect(screen.getByText(/Piloto de 14 dias/i)).toBeInTheDocument()
    expect(screen.getByText(/Sem cartão/i)).toBeInTheDocument()
    expect(screen.getByText(/Onboarding incluído/i)).toBeInTheDocument()
  })

  it('a seção tem id="cta-final"', () => {
    render(<CtaFinal />)
    expect(document.getElementById('cta-final')).toBeInTheDocument()
  })
})
