import type { Config } from 'tailwindcss'
//import prettier-plugin-tailwindcss from '@/prettier-plugin-tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        customred: {
          400: "#e50914"
        },
        hrbar: {
          400:"#232323"
        }
      },
      boxShadow: {
        '3xl': 'box-shadow: 2px 2px 20px 20px rgb(255 255 255 / 0.05)',
      }, spacing: {
        '23': '85px',
        '17': '68px',
        '19': '78px',
        '18': '72px',
        '76':'305px',
        '82': '358px',
        '86':'407px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwindcss-textshadow'),
    require('tailwind-scrollbar'),
    'prettier-plugin-tailwindcss'
  ]
}
export default config
