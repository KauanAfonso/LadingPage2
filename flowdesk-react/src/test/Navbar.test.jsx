import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, fireEvent, act } from '@testing-library/react'
import Navbar from '../components/Navbar'

describe('Navbar', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
  })

  it('renderiza o logo FlowDesk', () => {
    render(<Navbar />)
    expect(screen.getByLabelText(/FlowDesk.*início/i)).toBeInTheDocument()
  })

  it('renderiza todos os links de navegação', () => {
    render(<Navbar />)
    expect(screen.getAllByText('Produto').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Como funciona').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Plataforma').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Planos').length).toBeGreaterThanOrEqual(1)
  })

  it('renderiza o botão "Solicitar demo"', () => {
    render(<Navbar />)
    const demoBtns = screen.getAllByText('Solicitar demo')
    expect(demoBtns.length).toBeGreaterThanOrEqual(1)
  })

  it('botão de menu mobile tem aria-expanded="false" inicialmente', () => {
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /abrir menu/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('abre o menu mobile ao clicar no toggle', () => {
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /abrir menu/i })
    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
  })

  it('fecha o menu mobile ao clicar novamente', () => {
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /abrir menu/i })
    fireEvent.click(toggle)
    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('o menu mobile fecha ao pressionar Escape', () => {
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /abrir menu/i })
    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    fireEvent.keyDown(document, { key: 'Escape' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('não tem classe "scrolled" quando scrollY = 0', () => {
    render(<Navbar />)
    const header = screen.getByRole('banner')
    expect(header).not.toHaveClass('scrolled')
  })

  it('adiciona classe "scrolled" ao rolar a página', () => {
    render(<Navbar />)
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 20, writable: true, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    const header = screen.getByRole('banner')
    expect(header).toHaveClass('scrolled')
  })

  it('o menu mobile possui role="dialog"', () => {
    render(<Navbar />)
    expect(screen.getByRole('dialog', { name: /menu mobile/i })).toBeInTheDocument()
  })
})
