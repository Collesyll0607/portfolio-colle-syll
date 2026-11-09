/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#123B2A',    // Vert foncé principal
          secondary: '#236B4A',  // Vert secondaire
          cream: '#F8F7F2',      // Blanc cassé
          white: '#FFFFFF',      // Blanc pur
          orange: '#E88945',     // Orange subtil (accent)
          charcoal: '#202820',   // Gris foncé / texte principal
          darkBg: '#0B1913',     // Fond principal mode sombre
          darkSurface: '#11261D',// Cartes mode sombre
          darkBorder: '#1E3F30', // Bordures mode sombre
        },
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(18, 59, 42, 0.08)',
        'elevated': '0 20px 40px -15px rgba(18, 59, 42, 0.14)',
        'glow-orange': '0 8px 25px -5px rgba(232, 137, 69, 0.35)',
        'glow-green': '0 8px 25px -5px rgba(35, 107, 74, 0.3)',
      },
      animation: {
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.65' },
        },
      },
    },
  },
  plugins: [],
};
