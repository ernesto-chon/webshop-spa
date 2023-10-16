import daisyui from 'daisyui';
import { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#C7AB62',
        'primary-hover': '#AE9249',
        'base-100': '#FFFFFF',
        'base-200': '#EBEBEC',
        'base-content': '#181818',
        'primary-gray': '#F8F8F8',
        'secondary-gray': '#EBEBEC'
      },
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      fontWeight: {
        bold: '500',
        extrabold: '700',
      },
    },
  },

  plugins: [daisyui],
  daisyui: {
    styled: false,
    prefix: 'd-',
  },
} satisfies Config;
