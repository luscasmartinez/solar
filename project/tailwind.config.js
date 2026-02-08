/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFFBEA',
          100: '#FFF3C4',
          200: '#FCE588',
          300: '#FADB5F',
          400: '#F7C948',
          500: '#F0B429', // Primary yellow
          600: '#DE911D',
          700: '#CB6E17',
          800: '#B44D12', // Darker orange
          900: '#8D2B0B',
        },
        secondary: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC', // Light green
          400: '#4ADE80',
          500: '#22C55E', // Main green
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
        },
        accent: {
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6', // Sky blue
          600: '#2563EB',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'medium': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out forwards',
        'slide-up': 'slideUp 0.8s ease-in-out forwards',
        'zoom-in': 'zoomIn 0.8s ease-in-out forwards',
        'button-pulse': 'buttonPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        buttonPulse: {
          '0%, 100%': { boxShadow: '0 4px 14px 0 rgba(34, 197, 94, 0.35)' },
          '50%': { boxShadow: '0 4px 24px 4px rgba(34, 197, 94, 0.45)' },
        },
      },
    },
  },
  plugins: [],
};