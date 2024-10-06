import type { Config } from 'tailwindcss';

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
        'text-ui': '#4E1D09',
        'text-main': '#344054',
        'text-hero': 'linear-gradient(to right, #DC6803, #FDB022)',
        'nav-idle': '#EC4A0A',
        'nav-active': '#FDB022',
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
  plugins: [],
} satisfies Config;
