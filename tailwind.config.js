/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        surface: 'var(--surface)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        accent: 'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
        ocean: 'var(--ocean)',
        'ocean-dim': 'var(--ocean-dim)',
        palm: 'var(--palm)',
        sand: 'var(--sand)',
        sunset: 'var(--sunset)',
        marker: 'var(--marker)'
      },
      fontFamily: {
        body: ['var(--font-body)'],
        display: ['var(--font-display)']
      }
    }
  },
  plugins: []
};
