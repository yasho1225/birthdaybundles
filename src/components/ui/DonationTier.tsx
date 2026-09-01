import { Button } from './Button'

type DonationTierProps = {
  amount: number
  title: string
  description: string
  highlighted?: boolean
  badge?: string
  onSelect?: () => void
}

export function DonationTier({
  amount,
  title,
  description,
  highlighted = false,
  badge,
  onSelect,
}: DonationTierProps) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-3xl border-2 p-6 transition-all duration-300 sm:p-7 ${
        highlighted
          ? 'border-primary bg-surface shadow-glow ring-1 ring-primary/20 md:scale-[1.02]'
          : 'card-surface-hover border-ink/8'
      }`}
    >
      {badge && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 font-heading text-xs font-bold uppercase tracking-wider text-ink shadow-sm">
          {badge}
        </span>
      )}
      <p className="font-display text-4xl text-primary sm:text-5xl">${amount}</p>
      <h3 className="mt-3 font-heading text-lg font-bold text-ink">{title}</h3>
      <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-muted">{description}</p>
      {onSelect && (
        <Button
          onClick={onSelect}
          variant={highlighted ? 'primary' : 'secondary'}
          size="sm"
          className="mt-6 w-full sm:mt-7"
        >
          Donate ${amount}
        </Button>
      )}
    </div>
  )
}
