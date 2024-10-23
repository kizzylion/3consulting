import type { Config } from 'tailwindcss'
import headlessui from '@headlessui/tailwindcss'
import containerQueries from '@tailwindcss/container-queries'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/routes/**/*.{html,jsx, tsx}',
    './src/components/**/*.{html,jsx, tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'accent-ui': '#FDB022',
        'accent-dark-ui': '#4E1D09',
        'text-main': '#344054',
        'hero-linear': 'linear-gradient(to right, #DC6803, #FDB022)',
        'nav-active': '#EC4A0A',
        'nav-idle': '#FDB022',
        'text-heading': '#101828',
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, #8080800a 1px, transparent 1px), linear-gradient(to bottom, #8080800a 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-size': '14px 24px',
      },
    },
  },
  plugins: [containerQueries, headlessui],
} satisfies Config
