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
    './src/shared/**/*.{ts,tsx}',
    './src/features/**/*.{ts,tsx}',
    './src/widgets/**/*.{ts,tsx}',
    './src/shared/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        white: '#ffffff',
        black: '#000000',

        gray01: '#f7f8f9',
        gray02: '#f0f2f4',
        gray03: '#dde0e5',
        gray04: '#b3b9c4',
        gray05: '#8691a2',
        gray06: '#383e4a',
        gray07: '#161a1d',

        red01: '#fff1f1',
        red02: '#ff9999',
        red03: '#ff6767',

        yellow01: '#fffedc',
        yellow02: '#ffbd3b',

        ashblue01: '#e7fcff',
        ashblue02: '#d5f0f4',

        mint01: '#d9f9fb',
        mint02: '#9deff6',
        mint03: '#00d5e1',

        overlay: 'rgba(0, 0, 0, 0.3)',
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
