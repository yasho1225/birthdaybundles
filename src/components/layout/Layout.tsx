import { Outlet } from 'react-router-dom'
import { SiteFeatures } from '../features/SiteFeatures'
import { Footer } from './Footer'
import { Header } from './Header'

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <SiteFeatures />
    </div>
  )
}
