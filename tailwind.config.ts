import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00B2FF',
          foreground: '#06111B'
        },
        accent: '#FFD166'
      },
      backgroundImage: {
        'glass-pattern': 'radial-gradient(circle at top, rgba(0,178,255,0.15), transparent 60%), radial-gradient(circle at bottom, rgba(255,209,102,0.1), transparent 55%)'
      },
      backdropBlur: {
        xs: '2px'
      },
      boxShadow: {
        glass: '0 25px 50px -12px rgba(0, 0, 0, 0.45)'
      }
    }
  },
  plugins: []
};

export default config;
