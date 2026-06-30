import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pepper-orange': '#FF5A1F',
        'pepper-orange-dark': '#E94B12',
        'leaf-green': '#5DBB63',
        'leaf-green-dark': '#429B47',
        'black': '#050505',
        'white': '#FFFFFF',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '10xl': '10rem',
      },
      animation: {
        'steam-1': 'steam 3s ease-in-out infinite',
        'steam-2': 'steam 4s ease-in-out infinite 0.5s',
        'steam-3': 'steam 5s ease-in-out infinite 1s',
      },
      keyframes: {
        steam: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0.5' },
          '50%': { transform: 'translateY(-20px) scale(1.2)', opacity: '0.2' },
          '100%': { transform: 'translateY(-40px) scale(1)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;