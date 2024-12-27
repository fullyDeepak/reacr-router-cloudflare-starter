import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [nextui()],
  darkMode: 'class',
} satisfies Config;
