import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useNavbar } from '../hooks/useNavbar'

describe('useNavbar', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
  })

  it('retorna scrolled=false inicialmente com scrollY=0', () => {
    const { result } = renderHook(() => useNavbar())
    expect(result.current.scrolled).toBe(false)
  })

  it('retorna scrolled=true quando scrollY > 16', () => {
    const { result } = renderHook(() => useNavbar())
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 20, writable: true, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(result.current.scrolled).toBe(true)
  })

  it('retorna scrolled=false quando scrollY <= 16', () => {
    const { result } = renderHook(() => useNavbar())
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 16, writable: true, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(result.current.scrolled).toBe(false)
  })

  it('retorna mobileOpen=false inicialmente', () => {
    const { result } = renderHook(() => useNavbar())
    expect(result.current.mobileOpen).toBe(false)
  })

  it('toggleMobile alterna mobileOpen de false para true', () => {
    const { result } = renderHook(() => useNavbar())
    act(() => result.current.toggleMobile())
    expect(result.current.mobileOpen).toBe(true)
  })

  it('toggleMobile alterna mobileOpen de true para false', () => {
    const { result } = renderHook(() => useNavbar())
    act(() => result.current.toggleMobile())
    act(() => result.current.toggleMobile())
    expect(result.current.mobileOpen).toBe(false)
  })

  it('closeMobile define mobileOpen=false', () => {
    const { result } = renderHook(() => useNavbar())
    act(() => result.current.toggleMobile())
    expect(result.current.mobileOpen).toBe(true)
    act(() => result.current.closeMobile())
    expect(result.current.mobileOpen).toBe(false)
  })

  it('pressionar Escape fecha o menu mobile', () => {
    const { result } = renderHook(() => useNavbar())
    act(() => result.current.toggleMobile())
    expect(result.current.mobileOpen).toBe(true)

    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    })

    expect(result.current.mobileOpen).toBe(false)
  })
})
