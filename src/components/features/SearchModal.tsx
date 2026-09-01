import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { searchContent } from '../../utils/searchIndex'

type SearchModalProps = {
  isOpen: boolean
  onClose: () => void
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  const results = searchContent(query)

  useEffect(() => {
    if (!isOpen) return

    inputRef.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen) setQuery('')
  }, [isOpen])

  const goTo = (path: string) => {
    navigate(path)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[80] flex items-start justify-center p-4 pt-[12vh]" role="dialog" aria-modal="true" aria-label="Site search">
      <button
        type="button"
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close search"
      />
      <div className="surface relative w-full max-w-xl overflow-hidden shadow-lift">
        <div className="border-b border-ink/8 p-4 dark:border-white/10">
          <label htmlFor="site-search" className="sr-only">
            Search the site
          </label>
          <input
            ref={inputRef}
            id="site-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages, bundles, FAQ..."
            className="input-field"
            autoComplete="off"
          />
        </div>
        <ul className="max-h-80 overflow-y-auto p-2" role="listbox">
          {query && results.length === 0 && (
            <li className="px-4 py-6 text-center font-body text-sm text-subtle">
              No results for &ldquo;{query}&rdquo;
            </li>
          )}
          {results.map((result) => (
            <li key={`${result.path}-${result.title}`}>
              <button
                type="button"
                role="option"
                onClick={() => goTo(result.path)}
                className="w-full rounded-ui px-4 py-3 text-left transition-colors duration-200 ease-out hover:bg-cream focus-ring dark:hover:bg-white/5"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-heading text-sm font-bold text-ink">
                    {result.title}
                  </span>
                  <span className="shrink-0 bg-secondary/10 px-2 py-0.5 font-body text-xs font-bold text-secondary-fg">
                    {result.category}
                  </span>
                </div>
                <p className="mt-1 line-clamp-2 font-body text-xs text-muted">
                  {result.excerpt}
                </p>
              </button>
            </li>
          ))}
          {!query && (
            <li className="px-4 py-6 text-center font-body text-sm text-subtle">
              Type to search site content
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
