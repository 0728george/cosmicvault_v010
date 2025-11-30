/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],  // For btn classes if you want them later
  daisyui: {
    themes: ['dark'],
  },
};
