/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./cards/**/*.{html,js}"],
  theme: {
    extend: {
      gap: {
        '3': '0.75rem', // por exemplo, gap-3 = 12px
        'custon': '12px'
      }
    },
  },
  plugins: [],
}

