import { useState } from 'react'
import { VOLUNTEER_FAQ, VOLUNTEER_ROLES } from '../config/content'
import { LINKS } from '../config/links'
import { IMAGES, PLACEHOLDER_IMAGES } from '../config/images'
import { appendUtmToUrl } from '../utils/utm'
import { PageHeader } from '../components/ui/PageHeader'
import { OptimizedImage } from '../components/ui/OptimizedImage'
import { Icon } from '../components/ui/Icon'
import { Button } from '../components/ui/Button'
import { SpotlightCard } from '../components/bits/SpotlightCard'

export function Volunteer() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="volunteer-page">
      <PageHeader
        title="Bring a little time. Leave a lasting memory."
        subtitle="Bake, assemble, and help make a celebration feel personal for a child."
      />

      <section className="volunteer-photo-intro" aria-labelledby="volunteer-roles-heading">
        <div className="section-container-wide volunteer-photo-grid">
          <div className="volunteer-photo-main">
            <OptimizedImage
              src={IMAGES.volunteer.packing}
              fallback={PLACEHOLDER_IMAGES.volunteer.packing}
              alt="Volunteers packing birthday bundles together"
            />
          </div>
          <div className="volunteer-photo-side">
            <OptimizedImage
              src={IMAGES.volunteer.baking}
              fallback={PLACEHOLDER_IMAGES.volunteer.baking}
              alt="A volunteer preparing a birthday cake"
            />
            <span>Care becomes celebration.</span>
          </div>
          <div className="volunteer-role-copy">
            <h2 id="volunteer-roles-heading">Choose how you want to help.</h2>
            <p>Each role comes back to the same thing: making sure a child feels remembered.</p>
          </div>
        </div>
      </section>

      <section className="volunteer-role-section" aria-label="Volunteer roles">
        <div className="section-container-wide volunteer-cards">
          {VOLUNTEER_ROLES.map((role, index) => (
            <SpotlightCard key={role.title} className={index ? 'is-baker' : ''}>
              <span className="volunteer-card-icon">
                <Icon name={index ? 'cake' : 'hand-heart'} size={32} />
              </span>
              <h3>{role.title}</h3>
              <p>{role.description}</p>
              <a href={appendUtmToUrl(LINKS.volunteerForm)} target="_blank" rel="noopener noreferrer">
                {role.cta}<Icon name="external" size={16} />
              </a>
            </SpotlightCard>
          ))}
        </div>
      </section>

      <section className="volunteer-requirements" aria-labelledby="volunteer-requirements-heading">
        <div className="section-container-wide volunteer-requirements-inner">
          <Icon name="sparkle" size={24} />
          <div>
            <p>Before you apply</p>
            <h2 id="volunteer-requirements-heading">Two things to know.</h2>
            <p>Volunteer bakers must be age 14 or older and have access to a kitchen.</p>
          </div>
          <a href="#volunteer-form" className="volunteer-requirements-link">
            See the application <Icon name="arrow-right" size={16} />
          </a>
        </div>
      </section>

      <section id="volunteer-form" className="volunteer-form-section" aria-labelledby="volunteer-form-heading">
        <div className="section-container-wide volunteer-form-grid">
          <div className="volunteer-form-copy">
            <p>Volunteer baker form</p>
            <h2 id="volunteer-form-heading">Ready to join in?</h2>
            <p>
              Complete the secure Google Form below. It asks a few practical questions so the
              Birthday Bundles team can match you with a meaningful way to help.
            </p>
            <Button
              as="a"
              href={appendUtmToUrl(LINKS.volunteerForm)}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
            >
              Open secure volunteer form <Icon name="external" size={17} />
            </Button>
          </div>
          <div className="volunteer-google-form">
            <iframe
              src={LINKS.volunteerFormEmbed}
              title="Birthday Bundles Volunteer Baker Form"
              loading="lazy"
            />
            <p>
              Can&apos;t see the form?{' '}
              <a href={appendUtmToUrl(LINKS.volunteerForm)} target="_blank" rel="noopener noreferrer">
                Open it in a new tab <Icon name="external" size={14} />
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="volunteer-faq" aria-labelledby="volunteer-faq-heading">
        <div className="section-container-wide volunteer-faq-grid">
          <div>
            <p>Before you sign up</p>
            <h2 id="volunteer-faq-heading">Questions are welcome.</h2>
          </div>
          <div>
            {VOLUNTEER_FAQ.map((item, index) => (
              <article key={item.question} className={openFaq === index ? 'is-open' : ''}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-${index}`}
                >
                  <span>{item.question}</span>
                  <i aria-hidden="true">{openFaq === index ? '−' : '+'}</i>
                </button>
                <div id={`faq-${index}`} hidden={openFaq !== index}>
                  <p>{item.answer}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
