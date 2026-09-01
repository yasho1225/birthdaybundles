export function PageLoader() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6" role="status" aria-live="polite" aria-label="Loading page">
      <div className="relative h-16 w-16" aria-hidden="true">
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-secondary/20 border-t-secondary" />
        <div className="absolute inset-2 flex items-center justify-center text-2xl">🎁</div>
      </div>
      <p className="font-heading text-sm font-bold uppercase tracking-widest text-subtle">
        Loading...
      </p>
    </div>
  )
}
