import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import { NAV_ITEMS } from '../../config/content'
import { SearchModal } from '../features/SearchModal'
import { ThemeToggle } from '../features/ThemeToggle'
import { Button } from '../ui/Button'
import { Logo } from '../ui/Logo'
import { MobileNav } from './MobileNav'

export function Header() {
  const { theme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault()
        setSearchOpen(true)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-ink/5 bg-cream/95 shadow-header backdrop-blur-md dark:border-white/10'
            : 'bg-cream'
        }`}
      >
        <div className="section-container flex items-center justify-between gap-3 py-3 sm:py-4">
          <Logo variant="compact" theme={theme === 'dark' ? 'dark' : 'light'} />

          <nav className="hidden items-center gap-0.5 md:flex" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `interactive-link relative rounded-lg px-3 py-2 font-body text-sm font-bold focus-ring lg:px-4 ${
                    isActive ? 'text-primary' : 'text-muted'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span aria-current={isActive ? 'page' : undefined}>{item.label}</span>
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="hidden items-center gap-2 rounded-xl border border-ink/10 px-3 py-2 font-body text-sm text-muted transition-colors hover:border-secondary/30 hover:text-ink focus-ring sm:flex"
              aria-label="Open search"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="hidden lg:inline">Search</span>
              <kbd className="hidden rounded bg-ink/5 px-1.5 py-0.5 font-mono text-xs lg:inline">⌘K</kbd>
            </button>

            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="rounded-xl p-2 text-ink transition-colors hover:bg-ink/5 focus-ring sm:hidden"
              aria-label="Open search"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <ThemeToggle />

            <Button as={NavLink} to="/donate" size="sm" className="hidden sm:inline-flex">
              Donate
            </Button>

            <button
              type="button"
              className="rounded-xl p-2 text-ink transition-colors hover:bg-ink/5 focus-ring md:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
