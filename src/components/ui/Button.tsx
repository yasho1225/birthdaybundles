import { type ComponentPropsWithoutRef, type ElementType } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'white'
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
    'bg-primary text-white shadow-md shadow-primary/20 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98]',
  secondary:
    'border-2 border-secondary bg-transparent text-secondary-fg hover:bg-secondary hover:text-white active:scale-[0.98]',
  ghost: 'bg-transparent text-secondary-fg hover:bg-secondary/10 active:scale-[0.98]',
  white:
    'bg-white text-primary shadow-md hover:bg-white/95 hover:shadow-lg active:scale-[0.98]',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-3.5 text-base',
  lg: 'px-9 py-4 text-lg',
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
    'inline-flex items-center justify-center gap-2 rounded-full font-heading font-bold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:cursor-not-allowed disabled:opacity-50'

  return (
    <Component
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
