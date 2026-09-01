type StatCardProps = {
  value: string
  label: string
  className?: string
}

export function StatCard({ value, label, className = '' }: StatCardProps) {
  return (
    <div className={`surface p-6 text-center sm:p-8 ${className}`}>
      <p className="font-display text-3xl text-primary sm:text-4xl">{value}</p>
      <p className="mt-2 font-heading text-sm font-medium text-muted">{label}</p>
    </div>
  )
}
