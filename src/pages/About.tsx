import { ABOUT_VALUES, GALLERY_IMAGES, ORIGIN_STORY, TEAM_MEMBERS } from '../config/content'
import { OptimizedImage } from '../components/ui/OptimizedImage'
import { PageHeader } from '../components/ui/PageHeader'
import { PhotoGallery } from '../components/ui/PhotoGallery'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { SectionHeading } from '../components/ui/SectionHeading'

export function About() {
  return (
    <>
      <PageHeader
        eyebrow="Our journey"
        title="Our Story"
        subtitle="From one birthday to hundreds — here is how Birthday Bundles began."
      />

      <section aria-labelledby="origin-heading" className="section-padding">
        <div className="section-container max-w-3xl">
          {ORIGIN_STORY.map((section, index) => (
            <ScrollReveal key={section.title} delay={index * 80}>
              <article className={index > 0 ? 'mt-16 border-t border-ink/8 pt-16' : ''}>
                <span className="font-heading text-sm font-bold uppercase tracking-widest text-secondary-fg">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h2 className="mt-3 font-display text-3xl uppercase text-ink md:text-4xl">
                  {section.title}
                </h2>
                <p className="prose-body mt-5">{section.body}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="values-heading" className="section-padding bg-surface">
        <div className="section-container">
          <ScrollReveal>
            <SectionHeading
              id="values-heading"
              eyebrow="What we believe"
              title="Our Values"
              subtitle="Everything we do is guided by these principles."
            />
          </ScrollReveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {ABOUT_VALUES.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 80}>
                <div className="card-surface-hover p-8 text-center">
                  <span
                    className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/15 text-3xl"
                    aria-hidden="true"
                  >
                    {value.icon}
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-bold text-ink">{value.title}</h3>
                  <p className="mt-3 font-body text-muted">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="team-heading" className="section-padding">
        <div className="section-container">
          <ScrollReveal>
            <SectionHeading
              id="team-heading"
              eyebrow="The people"
              title="Meet the Team"
              subtitle="The people behind every bundle."
            />
          </ScrollReveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {TEAM_MEMBERS.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 80}>
                <article className="card-surface p-8 text-center">
                  <OptimizedImage
                    src={member.src}
                    fallback={member.fallback}
                    alt={`Photo of ${member.name}`}
                    className="mx-auto h-28 w-28 rounded-full object-cover ring-4 ring-secondary/15"
                  />
                  <h3 className="mt-5 font-quote text-lg font-bold text-ink">{member.name}</h3>
                  <p className="mt-1 font-heading text-xs font-bold uppercase tracking-widest text-secondary-fg">
                    {member.role}
                  </p>
                  <p className="mt-3 font-body text-sm leading-relaxed text-muted">{member.bio}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="gallery-heading" className="section-padding bg-surface">
        <div className="section-container">
          <ScrollReveal>
            <SectionHeading
              id="gallery-heading"
              eyebrow="Gallery"
              title="Celebrations in Action"
            />
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <PhotoGallery images={GALLERY_IMAGES} className="mt-12" />
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
