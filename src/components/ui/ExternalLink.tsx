import { appendUtmToUrl } from '../../utils/utm'

type ExternalLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
}

export function ExternalLink({ href, children, ...props }: ExternalLinkProps) {
  const trackedHref = appendUtmToUrl(href)

  return (
    <a href={trackedHref} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  )
}
