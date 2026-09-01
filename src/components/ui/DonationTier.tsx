import { Button } from './Button'

type DonationTierProps = {
  amount: number
  title: string
  description: string
  highlighted?: boolean
  badge?: string
  onSelect?: () => void
  className?: string
}

export function DonationTier({
  amount,
  title,
  description,
  highlighted = false,
  badge,
  onSelect,
  className = '',
}: DonationTierProps) {
  return (
    <div
      className={`relative flex h-full flex-col p-6 sm:p-8 ${
        highlighted
          ? 'bg-primary/5 ring-2 ring-primary/20 md:flex-row md:items-center md:justify-between md:gap-10'
          : 'surface-muted'
      } ${className}`}
    >
      {badge && (
        <span className="absolute right-4 top-4 rounded-pill bg-accent px-3 py-1 font-heading text-xs font-semibold text-ink">
          {badge}
        </span>
      )}
      <div className={highlighted ? 'md:flex-1' : ''}>
        <p className="font-display text-4xl text-primary sm:text-5xl">${amount}</p>
        <h3 className="mt-3 font-heading text-lg font-semibold text-ink">{title}</h3>
        <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-muted">{description}</p>
      </div>
      {onSelect && (
        <Button
          onClick={onSelect}
          variant={highlighted ? 'primary' : 'secondary'}
          size={highlighted ? 'md' : 'sm'}
          className={`mt-6 w-full sm:mt-7 ${highlighted ? 'md:mt-0 md:w-auto md:shrink-0' : ''}`}
        >
          Donate ${amount}
        </Button>
      )}
    </div>
  )
}
