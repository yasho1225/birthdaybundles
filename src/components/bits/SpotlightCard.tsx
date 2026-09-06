import { useRef, type ReactNode } from 'react'

type SpotlightCardProps = {
  children: ReactNode
  className?: string
}

export function SpotlightCard({ children, className = '' }: SpotlightCardProps) {
  const ref = useRef<HTMLElement>(null)

  const move = (event: React.PointerEvent<HTMLElement>) => {
    if (event.pointerType === 'touch' || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--spot-x', `${event.clientX - rect.left}px`)
    ref.current.style.setProperty('--spot-y', `${event.clientY - rect.top}px`)
  }

  return (
    <article ref={ref} onPointerMove={move} className={`birthday-spotlight ${className}`}>
      {children}
    </article>
  )
}
