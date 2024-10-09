import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
      fontSize: {
        h1b: ['24px', { letterSpacing: '-0.03em', lineHeight: '130%', fontWeight: 'bold' }],
        h1s: ['24px', { letterSpacing: '-0.03em', lineHeight: '130%', fontWeight: '600' }],
        h2s: ['20px', { letterSpacing: '-0.03em', lineHeight: '130%', fontWeight: '600' }],
        h3b: ['16px', { letterSpacing: '-0.03em', lineHeight: '140%', fontWeight: 'bold' }],
        h3s: ['16px', { letterSpacing: '-0.03em', lineHeight: '140%', fontWeight: '600' }],
        h4s: ['14px', { letterSpacing: '-0.03em', lineHeight: '130%', fontWeight: '600' }],
        h4m: ['14px', { letterSpacing: '-0.03em', lineHeight: '130%', fontWeight: '500' }],
        b1s: ['12px', { letterSpacing: '-0.03em', lineHeight: '130%', fontWeight: '600' }],
        b1m: ['12px', { letterSpacing: '-0.03em', lineHeight: '130%', fontWeight: '500' }],
        b1r: ['12px', { letterSpacing: '-0.03em', lineHeight: '140%', fontWeight: '400' }],
        b2s: ['11px', { letterSpacing: '-0.03em', lineHeight: '130%', fontWeight: '600' }],
        b2m: ['11px', { letterSpacing: '-0.03em', lineHeight: '130%', fontWeight: '500' }],
        b2r: ['11px', { letterSpacing: '-0.03em', lineHeight: '130%', fontWeight: '400' }],
        b3m: ['9px', { letterSpacing: '-0.03em', lineHeight: '130%', fontWeight: '500' }],
        b4m: ['8px', { letterSpacing: '-0.03em', lineHeight: '130%', fontWeight: '500' }],
      },
    },
  },
  plugins: [],
};
export default config;
