import { Link } from 'react-router-dom'
import { LAST_UPDATED } from '../../config/site'
import { LINKS } from '../../config/links'
import { SITE } from '../../config/content'
import { Button } from '../ui/Button'
import { ExternalLink } from '../ui/ExternalLink'
import { Logo } from '../ui/Logo'

function InstagramIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-inverse text-inverse-fg no-print">
      <div className="absolute inset-0 bg-hero-mesh opacity-40" aria-hidden="true" />

      <div className="section-container relative py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo variant="full" theme="dark" />
            <p className="mt-5 max-w-sm font-body text-sm leading-relaxed text-on-dark-muted">
              {SITE.missionBlurb}
            </p>
            <Button as={Link} to="/donate" size="sm" className="mt-6">
              Donate Now
            </Button>
          </div>

          <div className="md:col-span-3">
            <h2 className="font-heading text-xs font-bold uppercase tracking-widest text-inverse-fg/60">
              Quick Links
            </h2>
            <ul className="mt-5 space-y-3">
              {[
                { label: 'Donate', to: '/donate' },
                { label: 'Volunteer', to: '/volunteer' },
                { label: 'Our Story', to: '/about' },
                { label: 'Contact', to: '/contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="interactive-link-on-dark font-body text-sm focus-ring rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h2 className="font-heading text-xs font-bold uppercase tracking-widest text-inverse-fg/60">
              Connect
            </h2>
            <ul className="mt-5 space-y-3">
              <li>
                <ExternalLink
                  href={LINKS.instagram}
                  className="interactive-link-on-dark inline-flex items-center gap-2.5 font-body text-sm focus-ring rounded"
                >
                  <InstagramIcon />
                  Instagram
                </ExternalLink>
              </li>
              <li>
                <ExternalLink
                  href={LINKS.gofundme}
                  className="interactive-link-on-dark font-body text-sm focus-ring rounded"
                >
                  GoFundMe
                </ExternalLink>
              </li>
              <li>
                <ExternalLink
                  href={LINKS.volunteerForm}
                  className="interactive-link-on-dark font-body text-sm focus-ring rounded"
                >
                  Volunteer Sign-Up
                </ExternalLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="font-body text-sm text-inverse-fg/55">
            &copy; {year} Birthday Bundles. All rights reserved.
          </p>
          <p className="font-body text-sm text-inverse-fg/55">
            Last updated {LAST_UPDATED}
          </p>
        </div>
      </div>
    </footer>
  )
}
