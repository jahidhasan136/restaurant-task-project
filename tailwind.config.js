/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          default: '1rem',
          xs: '1rem',
          sm: '1rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
      },
    },
  },
  plugins: [],
}

