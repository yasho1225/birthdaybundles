import type { ReactNode } from 'react'

type IconName =
  | 'cake'
  | 'balloon'
  | 'gift'
  | 'party'
  | 'heart'
  | 'community'
  | 'sparkle'
  | 'hand-heart'
  | 'package'
  | 'truck'
  | 'users'
  | 'arrow-right'
  | 'check'
  | 'external'

const paths: Record<IconName, ReactNode> = {
  cake: (
    <>
      <path d="M12 6c1.5 0 2.5-1 2.5-2.5S13.5 1 12 1 9.5 2 9.5 3.5 10.5 6 12 6z" />
      <path d="M19 8H5a2 2 0 0 0-2 2v1a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-1a2 2 0 0 0-2-2z" />
      <path d="M6 15v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2" />
    </>
  ),
  balloon: (
    <>
      <path d="M12 2a6 6 0 0 1 6 6c0 4.5-3 6-3 6H9s-3-1.5-3-6a6 6 0 0 1 6-6z" />
      <path d="M12 14v4M10 22h4" />
    </>
  ),
  gift: (
    <>
      <path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
      <path d="M22 7H2v5h20V7z" />
      <path d="M12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </>
  ),
  party: (
    <>
      <path d="M5.8 11.3 2 22l10.7-3.8" />
      <path d="m4 3 4 4M20 4l-4 4M12 2v4M19 11a7 7 0 1 1-14 0 7 7 0 0 1 14 0z" />
    </>
  ),
  heart: (
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
  ),
  community: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  sparkle: (
    <>
      <path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
      <path d="M19 15l.75 2.25L22 18l-2.25.75L19 21l-.75-2.25L16 18l2.25-.75L19 15z" />
    </>
  ),
  'hand-heart': (
    <>
      <path d="M11 14h2a2 2 0 0 0 1.8-1.2l2.9-5.8A2 2 0 0 0 15.8 4H14v6" />
      <path d="M9 10V4H7.2a2 2 0 0 0-1.8 2.8l2.9 5.8A2 2 0 0 0 9 14z" />
      <path d="M7 18h10a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2z" />
    </>
  ),
  package: (
    <>
      <path d="M16.5 9.4 7.55 4.24" />
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <path d="m3.3 7 8.7 5 8.7-5M12 22V12" />
    </>
  ),
  truck: (
    <>
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18h2" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  'arrow-right': (
    <>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  external: (
    <>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6M10 14 21 3" />
    </>
  ),
}

type IconProps = {
  name: IconName
  className?: string
  size?: number
}

export function Icon({ name, className = '', size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

export type { IconName }
