type StatCardProps = {
  value: string
  label: string
  className?: string
}

export function StatCard({ value, label, className = '' }: StatCardProps) {
  return (
    <div
      className={`group rounded-3xl border border-ink/5 bg-surface p-5 text-center transition-all duration-300 hover:border-secondary/20 hover:shadow-card sm:p-6 md:p-8 ${className}`}
    >
      <p className="font-display text-3xl text-primary transition-transform duration-300 group-hover:scale-105 sm:text-4xl md:text-5xl lg:text-6xl">
        {value}
      </p>
      <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-accent sm:mt-4" aria-hidden="true" />
      <p className="mt-3 font-heading text-xs font-bold uppercase tracking-widest text-muted sm:mt-4 sm:text-sm">
        {label}
      </p>
    </div>
  )
}
