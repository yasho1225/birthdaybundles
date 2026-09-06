import { Link } from 'react-router-dom'
import { REQUEST_GUIDANCE, REQUEST_SERVICES } from '../config/content'
import { LINKS } from '../config/links'
import { PageHeader } from '../components/ui/PageHeader'
import { Button } from '../components/ui/Button'
import { Icon } from '../components/ui/Icon'
import { ScrollReveal } from '../components/ui/ScrollReveal'

export function Request() {
  return (
    <div className="request-page">
      <PageHeader
        title="Request a free bundle."
        subtitle="A thoughtful celebration can start here. Birthday Bundles serves children and families across the Atlanta area."
      />

      <section className="request-intro" aria-labelledby="request-intro-heading">
        <div className="section-container-wide request-intro-grid">
          <ScrollReveal className="request-intro-copy">
            <p className="request-eyebrow">Before you begin</p>
            <h2 id="request-intro-heading">A few details that help us care well.</h2>
            <p>{REQUEST_GUIDANCE.availability}</p>
            <div className="request-guidance" role="list" aria-label="Request guidance">
              <div role="listitem">
                <Icon name="check" size={20} />
                <span>Atlanta-area delivery is available.</span>
              </div>
              <div role="listitem">
                <Icon name="check" size={20} />
                <span>{REQUEST_GUIDANCE.timing}</span>
              </div>
              <div role="listitem">
                <Icon name="check" size={20} />
                <span>One request is for up to three recipients.</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="request-bulk-note" delay={120}>
            <span className="request-bulk-mark" aria-hidden="true">03+</span>
            <div>
              <p className="request-eyebrow">Larger deliveries</p>
              <h3>Planning for a group?</h3>
              <p>
                {REQUEST_GUIDANCE.bulk} We will help coordinate the right delivery.
              </p>
              <a className="request-email-link focus-ring" href={LINKS.contactEmail}>
                {LINKS.generalEmail} <Icon name="arrow-right" size={17} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="request-services" aria-labelledby="request-services-heading">
        <div className="section-container-wide">
          <ScrollReveal className="request-section-heading">
            <p className="request-eyebrow">Choose the moment</p>
            <h2 id="request-services-heading">Four ways we can celebrate.</h2>
          </ScrollReveal>
          <div className="request-service-grid">
            {REQUEST_SERVICES.map((service, index) => (
              <ScrollReveal key={service.title} className="request-service" delay={index * 65}>
                <span className="request-service-number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="request-form-section" aria-labelledby="request-form-heading">
        <div className="section-container-wide request-form-layout">
          <ScrollReveal className="request-form-copy">
            <p className="request-eyebrow">Secure request form</p>
            <h2 id="request-form-heading">Tell us about the celebration.</h2>
            <p>
              The request form is managed securely in Google Forms. We do not store your form responses on this website.
            </p>
            <div id="request-form-sign-in" className="request-sign-in-notice" role="note">
              <Icon name="check" size={18} />
              <p>
                <strong>{REQUEST_GUIDANCE.signIn}</strong>
              </p>
            </div>
            <Button
              as="a"
              href={LINKS.bundleRequestForm}
              target="_blank"
              rel="noopener noreferrer"
              className="request-form-fallback"
            >
              Open secure request form <Icon name="external" size={17} />
            </Button>
            <p id="request-form-help" className="request-form-help">
              Having trouble with the embedded form? The secure link above will open it in a new tab.
            </p>
          </ScrollReveal>

          <ScrollReveal className="request-form-frame-wrap" delay={100}>
            <iframe
              className="request-form-frame"
              src={LINKS.bundleRequestEmbed}
              title="Birthday Bundles Information Form"
              aria-describedby="request-form-sign-in request-form-help"
              loading="lazy"
            >
              <p>
                The request form is available at{' '}
                <a href={LINKS.bundleRequestForm} target="_blank" rel="noopener noreferrer">
                  the secure Birthday Bundles request form
                </a>
                .
              </p>
            </iframe>
          </ScrollReveal>
        </div>
      </section>

      <section className="request-support-section" aria-labelledby="request-support-heading">
        <div className="section-container-wide request-support-inner">
          <div>
            <p className="request-eyebrow">For every celebration</p>
            <h2 id="request-support-heading">Want to help make a birthday happen?</h2>
          </div>
          <Button as={Link} to="/donate" variant="white" size="lg">
            Support a birthday <Icon name="arrow-right" size={19} />
          </Button>
        </div>
      </section>
    </div>
  )
}
