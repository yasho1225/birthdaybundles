import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#D5326B',
        secondary: '#198989',
        accent: '#EAA21C',
        cream: 'var(--color-cream)',
        ink: 'var(--color-ink)',
        surface: 'var(--color-surface)',
        muted: 'var(--color-muted)',
        subtle: 'var(--color-subtle)',
        'secondary-fg': 'var(--color-secondary-fg)',
        inverse: 'var(--color-inverse)',
        'inverse-fg': 'var(--color-inverse-fg)',
        'on-dark': 'var(--color-on-dark)',
        'on-dark-muted': 'var(--color-on-dark-muted)',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        heading: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        body: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        quote: ['Fraunces', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-sm': ['clamp(2rem,4.5vw,2.75rem)', { lineHeight: '1.12', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2.5rem,5.5vw,3.5rem)', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'display-lg': ['clamp(3rem,7vw,4.75rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-xl': ['clamp(3.25rem,8vw,5.5rem)', { lineHeight: '1.02', letterSpacing: '-0.035em' }],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
      },
      maxWidth: {
        content: '72rem',
        prose: '42rem',
      },
      borderRadius: {
        ui: '0.75rem',
        pill: '9999px',
      },
      boxShadow: {
        header: '0 1px 0 rgba(26, 26, 26, 0.06)',
        soft: '0 4px 24px -4px rgba(26, 26, 26, 0.08)',
        lift: '0 12px 40px -12px rgba(26, 26, 26, 0.15)',
        'soft-dark': '0 4px 24px -4px rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'warm-glow':
          'radial-gradient(ellipse 80% 60% at 20% 80%, rgba(213,50,107,0.08) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 85% 20%, rgba(25,137,137,0.07) 0%, transparent 50%)',
        'cta-glow':
          'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.12) 0%, transparent 50%)',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'hero-scale': 'heroScale 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        heroScale: {
          '0%': { transform: 'scale(1.04)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
