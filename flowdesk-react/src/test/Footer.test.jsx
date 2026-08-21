import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from '../components/Footer'

describe('Footer', () => {
  it('renderiza o elemento footer com role="contentinfo"', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('exibe o logo FlowDesk', () => {
    render(<Footer />)
    expect(screen.getByLabelText('FlowDesk')).toBeInTheDocument()
  })

  it('exibe o slogan da marca', () => {
    render(<Footer />)
    expect(screen.getByText(/Automação operacional para empresas/i)).toBeInTheDocument()
  })

  it('renderiza as 3 colunas de links (Produto, Empresa, Suporte)', () => {
    render(<Footer />)
    expect(screen.getByText('Produto')).toBeInTheDocument()
    expect(screen.getByText('Empresa')).toBeInTheDocument()
    expect(screen.getByText('Suporte')).toBeInTheDocument()
  })

  it('exibe link de Integrações', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Integrações' })).toBeInTheDocument()
  })

  it('exibe link para email de suporte', () => {
    render(<Footer />)
    const contactLink = screen.getByRole('link', { name: 'Contato' })
    expect(contactLink).toHaveAttribute('href', 'mailto:suporte@flowdesk.com.br')
  })

  it('exibe o copyright de 2025', () => {
    render(<Footer />)
    expect(screen.getByText(/2025 FlowDesk/i)).toBeInTheDocument()
  })

  it('exibe links de Carreiras e Blog', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Carreiras' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
  })

  it('a navegação do rodapé tem aria-label="Rodapé"', () => {
    render(<Footer />)
    expect(screen.getByRole('navigation', { name: /rodapé/i })).toBeInTheDocument()
  })
})
