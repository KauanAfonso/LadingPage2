import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useReveal } from '../hooks/useReveal'

describe('useReveal', () => {
  let originalIntersectionObserver

  beforeEach(() => {
    originalIntersectionObserver = window.IntersectionObserver
  })

  afterEach(() => {
    window.IntersectionObserver = originalIntersectionObserver
    document.body.innerHTML = ''
  })

  it('adiciona "revealed" a todos os [data-reveal] quando IntersectionObserver não existe', () => {
    delete window.IntersectionObserver

    const el = document.createElement('div')
    el.setAttribute('data-reveal', '')
    document.body.appendChild(el)

    renderHook(() => useReveal())

    expect(el.classList.contains('revealed')).toBe(true)
  })

  it('usa IntersectionObserver quando disponível', () => {
    const observeMock    = vi.fn()
    const disconnectMock = vi.fn()
    const unobserveMock  = vi.fn()

    // Precisa ser uma função construtora real para poder usar `new`
    window.IntersectionObserver = function MockIO(cb) {
      this.observe    = observeMock
      this.disconnect = disconnectMock
      this.unobserve  = unobserveMock
    }

    const el = document.createElement('div')
    el.setAttribute('data-reveal', '')
    document.body.appendChild(el)

    const { unmount } = renderHook(() => useReveal())

    expect(observeMock).toHaveBeenCalledWith(el)

    unmount()
    expect(disconnectMock).toHaveBeenCalled()
  })

  it('não lança erro quando não há elementos [data-reveal]', () => {
    // Garante que IntersectionObserver está disponível como construtor
    window.IntersectionObserver = function MockIO() {
      this.observe    = vi.fn()
      this.disconnect = vi.fn()
      this.unobserve  = vi.fn()
    }
    expect(() => renderHook(() => useReveal())).not.toThrow()
  })
})
