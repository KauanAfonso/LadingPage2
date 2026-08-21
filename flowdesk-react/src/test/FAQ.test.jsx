import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import FAQ from '../components/FAQ'

describe('FAQ', () => {
  it('renderiza o título da seção', () => {
    render(<FAQ />)
    expect(screen.getByText('Perguntas frequentes')).toBeInTheDocument()
  })

  it('renderiza todos os 6 itens de FAQ', () => {
    render(<FAQ />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(6)
  })

  it('o primeiro item está aberto por padrão', () => {
    render(<FAQ />)
    const firstButton = screen.getAllByRole('button')[0]
    expect(firstButton).toHaveAttribute('aria-expanded', 'true')
  })

  it('os demais itens estão fechados por padrão', () => {
    render(<FAQ />)
    const buttons = screen.getAllByRole('button')
    buttons.slice(1).forEach(btn => {
      expect(btn).toHaveAttribute('aria-expanded', 'false')
    })
  })

  it('abre um item ao clicar e fecha o anterior', () => {
    render(<FAQ />)
    const buttons = screen.getAllByRole('button')

    fireEvent.click(buttons[1])

    expect(buttons[0]).toHaveAttribute('aria-expanded', 'false')
    expect(buttons[1]).toHaveAttribute('aria-expanded', 'true')
  })

  it('fecha o item aberto ao clicar nele novamente', () => {
    render(<FAQ />)
    const firstButton = screen.getAllByRole('button')[0]

    fireEvent.click(firstButton)

    expect(firstButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('exibe a resposta do primeiro item (visível por padrão)', () => {
    render(<FAQ />)
    expect(
      screen.getByText(/FlowDesk se conecta ao seu Agent/i)
    ).toBeInTheDocument()
  })

  it('renderiza a pergunta sobre LGPD', () => {
    render(<FAQ />)
    const matches = screen.getAllByText(/LGPD/i)
    expect(matches.length).toBeGreaterThanOrEqual(1)
  })

  it('renderiza a pergunta sobre período de teste gratuito', () => {
    render(<FAQ />)
    expect(screen.getByText(/período de teste gratuito/i)).toBeInTheDocument()
  })

  it('o eyebrow "FAQ" está presente', () => {
    render(<FAQ />)
    expect(screen.getByText('FAQ')).toBeInTheDocument()
  })
})
