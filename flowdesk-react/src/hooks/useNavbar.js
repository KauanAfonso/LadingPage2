import { useState, useEffect } from 'react'

export function useNavbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const close = e => { if (!e.target.closest('#navbar')) setMobileOpen(false) }
    const esc   = e => { if (e.key === 'Escape') setMobileOpen(false) }
    document.addEventListener('click', close)
    document.addEventListener('keydown', esc)
    return () => {
      document.removeEventListener('click', close)
      document.removeEventListener('keydown', esc)
    }
  }, [mobileOpen])

  return {
    scrolled,
    mobileOpen,
    toggleMobile: () => setMobileOpen(p => !p),
    closeMobile:  () => setMobileOpen(false),
  }
}
