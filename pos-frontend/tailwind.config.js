/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx,vue,svelte}",
  ],
  theme: {
    extend: {}, 
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

