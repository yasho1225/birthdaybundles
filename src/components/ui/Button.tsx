import { type ComponentPropsWithoutRef, type ElementType } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'white' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: React.ReactNode
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className' | 'children'>

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white shadow-soft hover:bg-primary/92 active:scale-[0.98]',
  secondary:
    'bg-secondary text-white shadow-soft hover:bg-secondary/92 active:scale-[0.98]',
  ghost:
    'bg-transparent text-secondary-fg hover:bg-secondary/8 active:scale-[0.98]',
  white:
    'bg-white text-primary shadow-soft hover:bg-white/95 active:scale-[0.98]',
  outline:
    'border-2 border-ink/15 bg-transparent text-ink hover:border-secondary hover:text-secondary-fg active:scale-[0.98] dark:border-white/20',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3.5 text-lg',
}

export function Button<T extends ElementType = 'button'>({
  as,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps<T>) {
  const Component = as ?? 'button'
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-ui font-heading font-semibold transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:cursor-not-allowed disabled:opacity-50'

  return (
    <Component
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
