import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{astro,ts,js,tsx,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          bg: '#F7F8FA',
          surface: '#FFFFFF',
          'surface-2': '#F0F2F5',
          border: '#E2E8F0',
          'border-2': '#CBD5E0',
          text: '#0A0F1E',
          'text-2': '#374151',
          muted: '#6B7280',
          'muted-2': '#9CA3AF',
          cyan: '#0099CC',
        },
        brand: {
          bg: '#080C14',
          surface: '#0C1220',
          'surface-2': '#111927',
          border: '#1A2540',
          'border-2': '#243050',
          cyan: '#00C2FF',
          'cyan-dim': '#0099CC',
          'cyan-glow': 'rgba(0, 194, 255, 0.12)',
          white: '#E8EDF5',
          muted: '#4A5A72',
          'muted-2': '#8899AA',
        },
        navy: {
          DEFAULT: '#080C14',
          2: '#111927',
          3: '#0C1220',
        },
        cyan: {
          DEFAULT: '#00C2FF',
          2: '#0099CC',
        },
        'off-white': '#E8EDF5',
        muted: '#4A5A72',
        success: '#00C896',
        warning: '#F6A623',
        error: '#E53E3E',
      },
      fontFamily: {
        sans: ['Poppins', '"Noto Sans Myanmar"', 'sans-serif'],
        display: ['"Bebas Neue"', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Noto Sans Myanmar"', 'monospace'],
        body: ['"DM Sans"', 'sans-serif'],
        myanmar: ['"Noto Sans Myanmar"', 'sans-serif'],
      },
    },
  },
};

export default config;
