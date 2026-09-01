type SectionHeadingProps = {
  id?: string
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start'

  return (
    <div className={`flex max-w-3xl flex-col ${alignClass} ${className}`}>
      {eyebrow && (
        <span className={`eyebrow mb-4 ${light ? 'eyebrow-on-dark' : ''}`}>{eyebrow}</span>
      )}
      <h2
        id={id}
        className={`font-display text-display-sm uppercase md:text-display-md ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-5 h-1 w-14 rounded-full bg-accent ${align === 'center' ? 'mx-auto' : ''}`}
        aria-hidden="true"
      />
      {subtitle && (
        <p
          className={`mt-5 max-w-2xl font-body text-base leading-relaxed sm:text-lg ${
            light ? 'text-on-dark-muted' : 'text-muted'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
