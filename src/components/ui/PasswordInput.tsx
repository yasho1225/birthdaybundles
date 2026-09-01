import { useState, type InputHTMLAttributes } from 'react'

type PasswordInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label: string
  error?: string
}

export function PasswordInput({
  label,
  error,
  id,
  className = '',
  ...props
}: PasswordInputProps) {
  const [visible, setVisible] = useState(false)
  const inputId = id ?? 'password'

  return (
    <div>
      <label htmlFor={inputId} className="font-heading text-sm font-bold text-ink">
        {label}
      </label>
      <div className="relative mt-2">
        <input
          id={inputId}
          type={visible ? 'text' : 'password'}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          className={`w-full rounded-none border bg-surface px-4 py-3.5 pr-12 font-body transition-colors focus-ring ${
            error ? 'border-primary' : 'border-ink/15 focus:border-secondary'
          } ${className}`}
          {...props}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-subtle transition-colors hover:bg-ink/5 hover:text-ink focus-ring"
          aria-label={visible ? 'Hide password' : 'Show password'}
        >
          {visible ? '🙈' : '👁'}
        </button>
      </div>
      {error && (
        <p id={`${inputId}-error`} className="mt-1.5 text-sm text-primary" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
