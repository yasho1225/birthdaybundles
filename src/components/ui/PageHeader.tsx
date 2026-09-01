import { ScrollReveal } from './ScrollReveal'

type PageHeaderProps = {
  title: string
  subtitle?: string
  children?: React.ReactNode
}

export function PageHeader({ title, subtitle, children }: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden border-b border-ink/8 bg-surface dark:border-white/10">
      <div className="absolute inset-0 bg-warm-glow" aria-hidden="true" />
      <div className="section-container relative py-16 md:py-24">
        <ScrollReveal>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-7">
              <h1 className="font-display text-display-md text-ink md:text-display-lg">{title}</h1>
            </div>
            {subtitle && (
              <div className="lg:col-span-5">
                <p className="prose-body lg:text-right">{subtitle}</p>
              </div>
            )}
          </div>
          {children && <div className="mt-10">{children}</div>}
        </ScrollReveal>
      </div>
    </header>
  )
}
