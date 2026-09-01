import { useState } from 'react'

type CopyButtonProps = {
  value: string
  label?: string
  className?: string
}

export function CopyButton({ value, label = 'Copy', className = '' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex min-h-11 items-center gap-1.5 px-3 py-2 font-body text-xs font-bold text-secondary-fg transition-colors hover:bg-secondary/10 focus-ring ${className}`}
      aria-label={copied ? 'Copied to clipboard' : `Copy ${value}`}
    >
      {copied ? (
        <>
          <span aria-hidden="true">✓</span> Copied
        </>
      ) : (
        <>
          <span aria-hidden="true">⧉</span> {label}
        </>
      )}
    </button>
  )
}
