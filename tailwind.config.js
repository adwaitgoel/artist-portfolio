/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Refined neutral palette
        'stone': '#F5F5F4',
        'charcoal': '#2D2D2D', 
        'sage': '#6B7280',
        'cream': '#FEFEF9',
        'bronze': '#92400E',
        'gold-muted': '#A1A1AA',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Crimson Text', 'serif'],
      },
    },
  },
  plugins: [],
}
