type SectionHeadingProps = {
  id?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
  titleClassName?: string
}

export function SectionHeading({
  id,
  title,
  subtitle,
  align = 'left',
  className = '',
  titleClassName = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : ''

  return (
    <div className={`max-w-prose ${alignClass} ${className}`}>
      <h2
        id={id}
        className={`font-display text-display-sm text-ink md:text-display-md ${titleClassName}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`prose-body mt-4 ${align === 'center' ? 'mx-auto' : ''}`}>{subtitle}</p>
      )}
    </div>
  )
}
