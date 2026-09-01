import { useEffect, useRef, type ReactNode } from 'react'
import { Button } from './Button'

type ConfirmModalProps = {
  isOpen: boolean
  title: string
  message: ReactNode
  confirmLabel?: string
  cancelLabel?: string
  onConfirm: () => void
  onCancel: () => void
}

export function ConfirmModal({
  isOpen,
  title,
  message,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  const cancelRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onCancel()
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)
    cancelRef.current?.focus()

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onCancel])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirm-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onCancel}
        aria-label="Close dialog"
      />
      <div className="surface relative w-full max-w-md p-6 shadow-lift">
        <h2 id="confirm-modal-title" className="font-display text-xl text-ink">
          {title}
        </h2>
        <div className="mt-3 font-body text-muted">{message}</div>
        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            ref={cancelRef}
            type="button"
            onClick={onCancel}
            className="inline-flex items-center justify-center rounded-ui px-7 py-3 font-heading font-semibold text-secondary-fg transition-colors duration-200 ease-out hover:bg-secondary/8 focus-ring"
          >
            {cancelLabel}
          </button>
          <Button onClick={onConfirm}>{confirmLabel}</Button>
        </div>
      </div>
    </div>
  )
}
