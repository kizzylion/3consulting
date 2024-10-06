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
