import { LINKS } from '../config/links'
import { appendUtmToUrl } from '../utils/utm'
import { BUNDLE_ITEMS, DONATION_TIERS, SITE } from '../config/content'
import { Button } from '../components/ui/Button'
import { DonationTier } from '../components/ui/DonationTier'
import { PageHeader } from '../components/ui/PageHeader'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { SectionHeading } from '../components/ui/SectionHeading'

export function Donate() {
  const handleDonate = (amount: number) => {
    const url = appendUtmToUrl(`${LINKS.gofundme}?amount=${amount}`)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <PageHeader
        eyebrow="Give joy"
        title="Sponsor a Bundle"
        subtitle={SITE.trustCopy}
      />

      <section aria-labelledby="bundle-heading" className="section-padding">
        <div className="section-container">
          <ScrollReveal>
            <SectionHeading
              id="bundle-heading"
              eyebrow="What's included"
              title="What's in a Bundle?"
              subtitle="Every birthday bundle includes everything a family needs to celebrate."
            />
          </ScrollReveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BUNDLE_ITEMS.map((item, index) => (
              <ScrollReveal key={item.label} delay={index * 60}>
                <div className="card-surface-hover p-7 text-center">
                  <span
                    className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-3xl"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-ink">{item.label}</h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="tiers-heading" className="section-padding bg-surface">
        <div className="section-container">
          <ScrollReveal>
            <SectionHeading
              id="tiers-heading"
              eyebrow="Choose your impact"
              title="Donation Tiers"
              subtitle="Every dollar goes directly toward birthday celebrations for children in need."
            />
          </ScrollReveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DONATION_TIERS.map((tier, index) => (
              <ScrollReveal key={tier.amount} delay={index * 60}>
                <DonationTier
                  amount={tier.amount}
                  title={tier.title}
                  description={tier.description}
                  highlighted={tier.highlighted}
                  badge={'badge' in tier ? tier.badge : undefined}
                  onSelect={() => handleDonate(tier.amount)}
                />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-14 text-center">
              <Button
                as="a"
                href={appendUtmToUrl(LINKS.gofundme)}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
              >
                Donate on GoFundMe
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section aria-labelledby="embed-heading" className="section-padding">
        <div className="section-container max-w-2xl">
          <ScrollReveal>
            <SectionHeading
              id="embed-heading"
              title="Donate Directly"
              subtitle="Use the GoFundMe widget below, or click the button above."
            />
            <div className="mt-10 overflow-hidden rounded-3xl border-2 border-dashed border-ink/15 bg-surface p-8 shadow-card">
              <div className="flex min-h-[280px] items-center justify-center rounded-2xl bg-cream">
                <div className="text-center">
                  <p className="font-body font-bold text-subtle">GoFundMe embed placeholder</p>
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
