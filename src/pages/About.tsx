import { ABOUT_VALUES, GALLERY_IMAGES, ORIGIN_STORY, TEAM_MEMBERS } from '../config/content'
import { Icon } from '../components/ui/Icon'
import { OptimizedImage } from '../components/ui/OptimizedImage'
import { PageHeader } from '../components/ui/PageHeader'
import { PhotoGallery } from '../components/ui/PhotoGallery'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { SectionHeading } from '../components/ui/SectionHeading'

export function About() {
  return (
    <>
      <PageHeader
        title="Our story"
        subtitle="From one birthday to hundreds — here is how Birthday Bundles began."
      />

      <section aria-labelledby="origin-heading" className="section-padding">
        <div className="section-container-wide">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <ScrollReveal className="lg:col-span-4">
              <SectionHeading
                id="origin-heading"
                title="How it started"
                subtitle="What began as one family's idea has grown into a movement of celebration across our community."
              />
            </ScrollReveal>

            <div className="relative lg:col-span-8">
              <div className="absolute bottom-0 left-5 top-0 w-px bg-secondary/25" aria-hidden="true" />
              {ORIGIN_STORY.map((section, index) => (
                <ScrollReveal key={section.title} delay={index * 80}>
                  <article className={`relative pl-14 ${index > 0 ? 'mt-12' : ''}`}>
                    <span
                      className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-heading text-sm font-semibold text-white"
                      aria-hidden="true"
                    >
                      {index + 1}
                    </span>
                    <h3 className="font-display text-2xl text-ink md:text-3xl">{section.title}</h3>
                    <p className="prose-body mt-4">{section.body}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="values-heading" className="section-padding bg-surface">
        <div className="section-container-wide">
          <ScrollReveal>
            <SectionHeading
              id="values-heading"
              title="Our values"
              subtitle="Everything we do is guided by these principles."
            />
          </ScrollReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {ABOUT_VALUES.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 80}>
                <article
                  className={`surface flex h-full flex-col p-8 ${index === 1 ? 'md:-translate-y-4 md:shadow-lift' : ''}`}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-ui bg-primary/10 text-primary">
                    <Icon name={value.icon} size={24} />
                  </span>
                  <h3 className="mt-6 font-display text-xl text-ink">{value.title}</h3>
                  <p className="mt-3 font-body leading-relaxed text-muted">{value.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="team-heading" className="section-padding">
        <div className="section-container-wide">
          <ScrollReveal>
            <SectionHeading
              id="team-heading"
              title="Meet the team"
              subtitle="The people behind every bundle."
            />
          </ScrollReveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {TEAM_MEMBERS.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 80}>
                <article className="group overflow-hidden rounded-[1.25rem] shadow-soft">
                  <OptimizedImage
                    src={member.src}
                    fallback={member.fallback}
                    alt={`Photo of ${member.name}`}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                  <div className="surface-muted border-t-0 p-6">
                    <h3 className="font-display text-xl text-ink">{member.name}</h3>
                    <p className="mt-1 font-heading text-sm font-medium text-secondary-fg">
                      {member.role}
                    </p>
                    <p className="mt-3 font-body text-sm leading-relaxed text-muted">{member.bio}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="gallery-heading" className="section-padding bg-surface">
        <div className="section-container-wide">
          <ScrollReveal>
            <SectionHeading id="gallery-heading" title="Celebrations in action" />
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <PhotoGallery images={GALLERY_IMAGES} className="mt-12" />
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
