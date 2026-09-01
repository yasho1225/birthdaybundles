type PageHeaderProps = {
  eyebrow?: string
  title: string
  subtitle?: string
}

export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-inverse text-inverse-fg">
      <div className="absolute inset-0 bg-hero-mesh opacity-30" aria-hidden="true" />

      <div className="section-container relative py-16 md:py-20 lg:py-24">
        {eyebrow && <span className="eyebrow eyebrow-on-dark mb-4">{eyebrow}</span>}
        <h1 className="font-display text-display-sm uppercase text-white md:text-display-md">
          {title}
        </h1>
        <div className="mt-5 h-1 w-14 rounded-full bg-accent" aria-hidden="true" />
        {subtitle && (
          <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-on-dark-muted sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
