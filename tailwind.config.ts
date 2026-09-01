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
        inverse: '#1A1A1A',
        'inverse-fg': '#F5F0EA',
      },
      fontFamily: {
        display: ['Anton', 'Impact', 'sans-serif'],
        heading: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
        body: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
        quote: ['Rosario', 'Georgia', 'serif'],
        'serif-accent': ['"Playfair Display"', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-sm': ['clamp(2.25rem,5vw,2.75rem)', { lineHeight: '1.08', letterSpacing: '0.02em' }],
        'display-md': ['clamp(2.75rem,6vw,3.75rem)', { lineHeight: '1.05', letterSpacing: '0.02em' }],
        'display-lg': ['clamp(3.25rem,7vw,5rem)', { lineHeight: '1', letterSpacing: '0.02em' }],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      maxWidth: {
        content: '72rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        header: '0 4px 24px rgba(26, 26, 26, 0.06)',
        card: '0 4px 24px rgba(26, 26, 26, 0.06)',
        'card-hover': '0 12px 40px rgba(26, 26, 26, 0.1)',
        glow: '0 0 60px rgba(213, 50, 107, 0.15)',
        'glow-teal': '0 0 60px rgba(25, 137, 137, 0.15)',
      },
      backgroundImage: {
        'hero-mesh':
          'radial-gradient(circle at 15% 85%, rgba(213,50,107,0.12) 0%, transparent 45%), radial-gradient(circle at 85% 15%, rgba(25,137,137,0.12) 0%, transparent 45%), radial-gradient(circle at 50% 50%, rgba(234,162,28,0.08) 0%, transparent 60%)',
        'cta-pattern':
          'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.06) 0%, transparent 50%)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
