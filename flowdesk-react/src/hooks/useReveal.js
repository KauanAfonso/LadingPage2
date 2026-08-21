import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('revealed'))
      return
    }

    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        const el = entry.target
        const attrDelay = parseInt(el.dataset.revealDelay, 10)
        const siblings = el.parentElement
          ? Array.from(el.parentElement.querySelectorAll('[data-reveal]'))
          : []
        const delay = !isNaN(attrDelay) ? attrDelay : Math.min(siblings.indexOf(el) * 60, 340)
        setTimeout(() => el.classList.add('revealed'), delay)
        obs.unobserve(el)
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' })

    document.querySelectorAll('[data-reveal]').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}
