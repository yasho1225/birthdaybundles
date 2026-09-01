import { LINKS } from '../config/links'
import { appendUtmToUrl } from '../utils/utm'
import { BUNDLE_ITEMS, DONATION_TIERS, SITE } from '../config/content'
import { Button } from '../components/ui/Button'
import { DonationTier } from '../components/ui/DonationTier'
import { Icon } from '../components/ui/Icon'
import { PageHeader } from '../components/ui/PageHeader'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { SectionHeading } from '../components/ui/SectionHeading'

export function Donate() {
  const handleDonate = (amount: number) => {
    const url = appendUtmToUrl(`${LINKS.gofundme}?amount=${amount}`)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const featuredTier = DONATION_TIERS.find((t) => t.highlighted)!
  const otherTiers = DONATION_TIERS.filter((t) => !t.highlighted)

  return (
    <>
      <PageHeader title="Sponsor a bundle" subtitle={SITE.trustCopy} />

      <section aria-labelledby="bundle-heading" className="section-padding bg-surface">
        <div className="section-container-wide">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal>
              <SectionHeading
                id="bundle-heading"
                title="What's in a bundle?"
                subtitle="Every birthday bundle includes everything a family needs to celebrate with dignity and joy."
              />
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <ul className="grid gap-4 sm:grid-cols-2">
                {BUNDLE_ITEMS.map((item) => (
                  <li key={item.label} className="surface flex gap-4 p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-ui bg-primary/10 text-primary">
                      <Icon name={item.icon} size={22} />
                    </span>
                    <div>
                      <h3 className="font-heading text-sm font-semibold text-ink">{item.label}</h3>
                      <p className="mt-1 font-body text-sm text-muted">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section aria-labelledby="tiers-heading" className="section-padding">
        <div className="section-container-wide">
          <ScrollReveal>
            <SectionHeading
              id="tiers-heading"
              title="Choose your impact"
              subtitle="Every dollar goes directly toward birthday celebrations for children in need."
            />
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="mt-12 space-y-4">
              <DonationTier
                amount={featuredTier.amount}
                title={featuredTier.title}
                description={featuredTier.description}
                highlighted
                badge={'badge' in featuredTier ? featuredTier.badge : undefined}
                onSelect={() => handleDonate(featuredTier.amount)}
              />
              <div className="grid gap-4 md:grid-cols-3">
                {otherTiers.map((tier) => (
                  <DonationTier
                    key={tier.amount}
                    amount={tier.amount}
                    title={tier.title}
                    description={tier.description}
                    onSelect={() => handleDonate(tier.amount)}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-12 flex flex-col items-start gap-4 rounded-ui border border-ink/8 bg-surface p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <p className="font-body text-muted">Prefer to donate through GoFundMe?</p>
              <Button
                as="a"
                href={appendUtmToUrl(LINKS.gofundme)}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
              >
                Donate on GoFundMe
                <Icon name="external" size={16} />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section aria-labelledby="embed-heading" className="section-padding bg-surface">
        <div className="section-container-wide">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 id="embed-heading" className="font-display text-display-sm text-ink">
                  Donate directly
                </h2>
                <p className="prose-body mt-4">
                  Use the GoFundMe widget below, or click the button above to give through our
                  campaign page.
                </p>
              </div>
              <div className="flex min-h-[280px] items-center justify-center rounded-ui border-2 border-dashed border-ink/12 bg-cream p-8">
                <div className="text-center">
                  <p className="font-heading font-semibold text-subtle">GoFundMe embed placeholder</p>
                  <p className="mt-2 font-body text-sm text-muted">
                    Replace with your campaign widget. See README.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
