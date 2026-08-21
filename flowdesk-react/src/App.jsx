import { useEffect } from 'react'
import { useReveal } from './hooks/useReveal'

import Cursor        from './components/Cursor'
import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import ProofBar      from './components/ProofBar'
import Metrics       from './components/Metrics'
import BentoGrid     from './components/BentoGrid'
import HowItWorks    from './components/HowItWorks'
import Platform      from './components/Platform'
import Integrations  from './components/Integrations'
import Testimonials  from './components/Testimonials'
import Pricing       from './components/Pricing'
import FAQ           from './components/FAQ'
import CtaFinal      from './components/CtaFinal'
import Footer        from './components/Footer'

export default function App() {
  useReveal()

  // parallax suave no hero visual (só desktop)
  useEffect(() => {
    const el = document.querySelector('.hero-visual')
    if (!el || !window.matchMedia('(min-width: 960px)').matches) return
    const onScroll = () => {
      const y = window.scrollY
      if (y < 600) el.style.transform = `translateY(${y * 0.052}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // smooth scroll com offset da navbar
  useEffect(() => {
    const onClick = e => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const target = document.querySelector(a.getAttribute('href'))
      if (!target) return
      e.preventDefault()
      const top = target.getBoundingClientRect().top + window.scrollY - 64
      window.scrollTo({ top, behavior: 'smooth' })
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <ProofBar />
        <Metrics />
        <BentoGrid />
        <HowItWorks />
        <Platform />
        <Integrations />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CtaFinal />
      </main>
      <Footer />
    </>
  )
}
