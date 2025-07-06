/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#0c7ff2',
        destructive: '#ef4444',
        background: '#f8fafc',
        card: '#ffffff',
        text: '#1e293b',
        muted: '#64748b',
        border: '#e2e8f0',
      },
      boxShadow: {
        destructive: '0 0 15px rgba(239, 68, 68, 0.3)',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', '"Noto Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
