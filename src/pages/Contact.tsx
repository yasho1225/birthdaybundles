import { LINKS } from '../config/links'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Icon } from '../components/ui/Icon'
import { PageHeader } from '../components/ui/PageHeader'

type ContactPath = {
  label: string
  title: string
  description: string
  href: string
  action: string
  icon: 'community' | 'hand-heart' | 'sparkle' | 'heart'
}

const contactPaths: ContactPath[] = [
  {
    label: 'Shelters & community partners',
    title: 'Plan a delivery together.',
    description: 'For shelter partnerships, group requests, or orders for more than three recipients.',
    href: LINKS.contactEmail,
    action: 'Email the partnership team',
    icon: 'community',
  },
  {
    label: 'Volunteers & bakers',
    title: 'Make something meaningful.',
    description: 'Questions about lending a hand, baking, or getting involved with a delivery?',
    href: `mailto:${LINKS.volunteerEmail}`,
    action: 'Email volunteer support',
    icon: 'hand-heart',
  },
  {
    label: 'Sponsors & in-kind gifts',
    title: 'Start a generous collaboration.',
    description: 'For sponsorships, donated supplies, and other ways your organization can help.',
    href: `mailto:${LINKS.sponsorEmail}`,
    action: 'Email sponsorships',
    icon: 'sparkle',
  },
  {
    label: 'General questions',
    title: 'Say hello.',
    description: 'Have a question that does not fit one of the paths above? We would love to hear it.',
    href: LINKS.contactEmail,
    action: 'Email Birthday Bundles',
    icon: 'heart',
  },
]

export function Contact() {
  return (
    <div className="contact-page">
      <PageHeader
        title="Let’s make a celebration happen."
        subtitle="Choose the quickest path to the Birthday Bundles team."
      />

      <section className="contact-paths" aria-labelledby="contact-paths-heading">
        <div className="section-container-wide">
          <div className="contact-paths-heading">
            <p>Start with the right conversation</p>
            <h2 id="contact-paths-heading">How can we help?</h2>
          </div>
          <div className="contact-paths-grid">
            {contactPaths.map((path) => (
              <article className="contact-path-card" key={path.label}>
                <Icon name={path.icon} size={30} />
                <p>{path.label}</p>
                <h3>{path.title}</h3>
                <p>{path.description}</p>
                <a href={path.href}>
                  {path.action} <Icon name="arrow-right" size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-direct" aria-labelledby="contact-direct-heading">
        <div className="section-container-wide contact-direct-grid">
          <div>
            <p>Birthday Bundles</p>
            <h2 id="contact-direct-heading">A local team, ready to connect.</h2>
            <p>Based in Alpharetta, GA and serving the Atlanta area.</p>
          </div>
          <dl className="contact-direct-details">
            <div>
              <dt>Email</dt>
              <dd><a href={LINKS.contactEmail}>info@birthdaybundles.org</a></dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd><a href={LINKS.phone}>470-840-5456</a></dd>
            </div>
            <div>
              <dt>Instagram</dt>
              <dd>
                <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer">
                  @birthday.bundles.initiative <Icon name="external" size={14} />
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="contact-request-callout" aria-labelledby="contact-request-heading">
        <div className="section-container-wide contact-request-callout-inner">
          <div>
            <p>Looking for a bundle?</p>
            <h2 id="contact-request-heading">Request one directly.</h2>
            <p>Individual bundle requests are handled through the secure request form.</p>
          </div>
          <Button as={Link} to="/request" size="lg" variant="white">
            Request a free bundle <Icon name="arrow-right" size={18} />
          </Button>
        </div>
      </section>
    </div>
  )
}
