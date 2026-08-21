import { useEffect } from 'react'

export function useCursor(cursorRef) {
  useEffect(() => {
    const el = cursorRef.current
    if (!el || !window.matchMedia('(min-width: 960px)').matches) return

    let cx = window.innerWidth / 2, cy = window.innerHeight / 2
    let tx = cx, ty = cy
    let raf

    const lerp = (a, b, t) => a + (b - a) * t

    const onMove = e => { tx = e.clientX; ty = e.clientY }
    document.addEventListener('mousemove', onMove, { passive: true })

    const loop = () => {
      cx = lerp(cx, tx, 0.14)
      cy = lerp(cy, ty, 0.14)
      el.style.left = cx + 'px'
      el.style.top  = cy + 'px'
      raf = requestAnimationFrame(loop)
    }
    loop()

    const targets = 'a, button, [role="switch"], .bento-card, .test-card, .price-card, .int-tile'
    const addHov = e => { if (e.target.closest(targets)) el.classList.add('hovering') }
    const remHov = e => { if (e.target.closest(targets)) el.classList.remove('hovering') }
    document.addEventListener('mouseover', addHov)
    document.addEventListener('mouseout',  remHov)

    document.addEventListener('mouseleave', () => { el.style.opacity = '0' })
    document.addEventListener('mouseenter', () => { el.style.opacity = '1' })

    let idle
    const resetIdle = () => {
      clearTimeout(idle)
      el.style.opacity = '1'
      idle = setTimeout(() => { el.style.opacity = '0' }, 2000)
    }
    document.addEventListener('mousemove', resetIdle, { passive: true })

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(idle)
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', addHov)
      document.removeEventListener('mouseout',  remHov)
    }
  }, [cursorRef])
}
