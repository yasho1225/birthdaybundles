import { ScrollReveal } from './ScrollReveal'

type PageHeaderProps = {
  title: string
  subtitle?: string
  children?: React.ReactNode
}

export function PageHeader({ title, subtitle, children }: PageHeaderProps) {
  return (
    <header className="page-story-header">
      <div className="page-story-orbit" aria-hidden="true" />
      <div className="section-container-wide relative py-20 md:py-32">
        <ScrollReveal>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-8">
              <h1 className="page-story-title">{title}</h1>
            </div>
            {subtitle && (
              <div className="lg:col-span-4">
                <p className="page-story-subtitle">{subtitle}</p>
              </div>
            )}
          </div>
          {children && <div className="mt-10">{children}</div>}
        </ScrollReveal>
      </div>
    </header>
  )
}
