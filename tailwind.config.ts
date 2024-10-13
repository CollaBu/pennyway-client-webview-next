import type { Config } from 'tailwindcss';

const createFontSize = (
  size: string,
  fontWeight: string,
  lineHeight: string = '130%',
): [string, { letterSpacing: string; lineHeight: string; fontWeight: string | number }] => [
  size,
  { letterSpacing: '-0.03em', lineHeight, fontWeight },
];

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './src/pages/**/*.{ts,tsx}',
    './src/features/**/*.{ts,tsx}',
    './src/widgets/**/*.{ts,tsx}',
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
        h1b: createFontSize('24px', 'bold'),
        h1s: createFontSize('24px', '600'),
        h2s: createFontSize('20px', '600'),
        h3b: createFontSize('16px', 'bold', '140%'),
        h3s: createFontSize('16px', '600', '140%'),
        h4s: createFontSize('14px', '600'),
        h4m: createFontSize('14px', '500'),
        b1s: createFontSize('12px', '600'),
        b1m: createFontSize('12px', '500'),
        b1r: createFontSize('12px', '400', '140%'),
        b2s: createFontSize('11px', '600'),
        b2m: createFontSize('11px', '500'),
        b2r: createFontSize('11px', '400'),
        b3m: createFontSize('9px', '500'),
        b4m: createFontSize('8px', '500'),
      },
    },
  },
  plugins: [],
};
export default config;
