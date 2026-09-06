import { Outlet, useLocation } from 'react-router-dom'
import { useRef } from 'react'
import { SiteFeatures } from '../features/SiteFeatures'
import { Footer } from './Footer'
import { Header } from './Header'
import { useLenis } from '../../hooks/useLenis'
import { gsap, useGSAP } from '../../motion/gsap'

export function Layout() {
  useLenis()
  const { pathname } = useLocation()
  const mainRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    gsap.fromTo(mainRef.current, { opacity: 0 }, { opacity: 1, duration: 0.45, ease: 'power2.out', clearProps: 'opacity' })
  }, { scope: mainRef, dependencies: [pathname], revertOnUpdate: true })

  return (
    <div className="site-shell flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      <main ref={mainRef} id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <SiteFeatures />
    </div>
  )
}
