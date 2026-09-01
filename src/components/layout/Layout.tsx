import { type ReactNode } from 'react'
import { SiteFeatures } from '../features/SiteFeatures'
import { Footer } from './Footer'
import { Header } from './Header'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <SiteFeatures />
    </div>
  )
}
