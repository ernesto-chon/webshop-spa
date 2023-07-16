import daisyui from 'daisyui';
import { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#C7AB62',
        'primary-hover': '#AE9249',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    styled: false,
  },
} satisfies Config;
