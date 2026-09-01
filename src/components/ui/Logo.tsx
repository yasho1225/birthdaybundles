import { Link } from 'react-router-dom'

type LogoProps = {
  variant?: 'compact' | 'full'
  theme?: 'light' | 'dark'
  className?: string
}

function GiftIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="8" y="20" width="32" height="24" rx="2" fill="#198989" />
      <rect x="6" y="16" width="36" height="8" rx="2" fill="#157575" />
      <rect x="22" y="16" width="4" height="28" fill="#EAA21C" />
      <rect x="6" y="18" width="36" height="4" fill="#EAA21C" />
      <path
        d="M24 16C24 16 18 10 14 10C10 10 8 13 10 16C12 19 18 16 24 16Z"
        fill="#D5326B"
      />
      <path
        d="M24 16C24 16 30 10 34 10C38 10 40 13 38 16C36 19 30 16 24 16Z"
        fill="#D5326B"
      />
      <path
        d="M22 8C22 6 23 4 25 4C27 4 28 6 28 8C28 10 26 12 24 14C22 12 22 10 22 8Z"
        fill="#D5326B"
      />
    </svg>
  )
}

export function Logo({ variant = 'full', theme = 'light', className = '' }: LogoProps) {
  const iconSize = variant === 'compact' ? 'h-9 w-9' : 'h-11 w-11'
  const textSize = variant === 'compact' ? 'text-sm sm:text-base' : 'text-lg sm:text-xl'
  const lineOneColor = theme === 'dark' ? 'text-white' : 'text-ink'
  const lineTwoColor = theme === 'dark' ? 'text-accent' : 'text-secondary-fg'

  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-2.5 focus-ring rounded-xl ${className}`}
      aria-label="Birthday Bundles home"
    >
      <GiftIcon
        className={`${iconSize} shrink-0 transition-transform duration-300 group-hover:scale-105`}
      />
      <span className={`flex flex-col font-display leading-none tracking-wider ${textSize}`}>
        <span className={lineOneColor}>BIRTHDAY</span>
        <span className={lineTwoColor}>BUNDLES</span>
      </span>
    </Link>
  )
}
