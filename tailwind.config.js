module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./components/**/*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep Institutional Teal
        primary: {
          DEFAULT: '#0F4C75', // teal-900
          50: '#E6F0F5',
          100: '#CCE1EB',
          200: '#99C3D7',
          300: '#66A5C3',
          400: '#3387AF',
          500: '#0F4C75',
          600: '#0C3D5E',
          700: '#092E46',
          800: '#061F2F',
          900: '#031017',
        },
        // Secondary Colors - Lighter Teal
        secondary: {
          DEFAULT: '#3282B8', // teal-600
          50: '#E8F3F9',
          100: '#D1E7F3',
          200: '#A3CFE7',
          300: '#75B7DB',
          400: '#479FCF',
          500: '#3282B8',
          600: '#286893',
          700: '#1E4E6E',
          800: '#14344A',
          900: '#0A1A25',
        },
        // Accent Colors - Warm Orange
        accent: {
          DEFAULT: '#E67E22', // orange-600
          50: '#FDF3EC',
          100: '#FBE7D9',
          200: '#F7CFB3',
          300: '#F3B78D',
          400: '#EF9F67',
          500: '#E67E22',
          600: '#B8651B',
          700: '#8A4C14',
          800: '#5C330E',
          900: '#2E1907',
        },
        // Dark Theme Colors
        charcoal: {
          DEFAULT: '#121212',
          50: '#2C2C2C',
          100: '#252525',
          200: '#1E1E1E',
          300: '#181818',
          400: '#151515',
          500: '#121212',
          600: '#0E0E0E',
          700: '#0A0A0A',
          800: '#060606',
          900: '#030303',
        },
        violet: {
          DEFAULT: '#8B5CF6',
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
        },
        // Background Colors
        background: '#FAFBFC', // gray-50
        surface: '#FFFFFF', // white
        // Text Colors
        'text-primary': '#1A202C', // gray-900
        'text-secondary': '#4A5568', // gray-600
        // Status Colors
        success: {
          DEFAULT: '#38A169', // green-600
          50: '#E9F7EF',
          100: '#D3EFDF',
          200: '#A7DFBF',
          300: '#7BCF9F',
          400: '#4FBF7F',
          500: '#38A169',
          600: '#2D8154',
          700: '#22613F',
          800: '#16402A',
          900: '#0B2015',
        },
        warning: {
          DEFAULT: '#D69E2E', // yellow-600
          50: '#FBF6E9',
          100: '#F7EDD3',
          200: '#EFDBA7',
          300: '#E7C97B',
          400: '#DFB74F',
          500: '#D69E2E',
          600: '#AB7E25',
          700: '#805F1C',
          800: '#553F12',
          900: '#2B2009',
        },
        error: {
          DEFAULT: '#E53E3E', // red-600
          50: '#FDEAEA',
          100: '#FBD5D5',
          200: '#F7ABAB',
          300: '#F38181',
          400: '#EF5757',
          500: '#E53E3E',
          600: '#B73232',
          700: '#892525',
          800: '#5B1919',
          900: '#2E0C0C',
        },
        // Border Colors
        border: 'rgba(74, 85, 104, 0.2)', // gray-600 with opacity
        'border-light': 'rgba(74, 85, 104, 0.1)',
      },
      fontFamily: {
        heading: ['Crimson Text', 'serif'],
        body: ['Inter', 'Source Sans 3', 'sans-serif'],
        caption: ['IBM Plex Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        xs: ['0.875rem', { lineHeight: '1.4' }],
        sm: ['0.9375rem', { lineHeight: '1.6' }],
        base: ['1rem', { lineHeight: '1.6' }],
        lg: ['1.125rem', { lineHeight: '1.5' }],
        xl: ['1.25rem', { lineHeight: '1.4' }],
        '2xl': ['1.5rem', { lineHeight: '1.3' }],
        '3xl': ['1.875rem', { lineHeight: '1.25' }],
        '4xl': ['2.25rem', { lineHeight: '1.2' }],
      },
      spacing: {
        xs: '0.5rem', // 8px
        sm: '1rem', // 16px
        md: '1.5rem', // 24px
        lg: '2rem', // 32px
        xl: '3rem', // 48px
        '2xl': '5rem', // 80px
      },
      borderRadius: {
        sm: '6px',
        md: '12px',
        lg: '18px',
        xl: '24px',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(15, 76, 117, 0.08)',
        DEFAULT: '0 2px 6px rgba(15, 76, 117, 0.12)',
        md: '0 4px 12px rgba(15, 76, 117, 0.12)',
        lg: '0 8px 24px rgba(15, 76, 117, 0.16)',
        xl: '0 10px 25px -5px rgba(15, 76, 117, 0.16)',
      },
      transitionDuration: {
        fast: '150ms',
        DEFAULT: '250ms',
        slow: '350ms',
      },
      transitionTimingFunction: {
        ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      zIndex: {
        base: '0',
        card: '1',
        sticky: '10',
        dropdown: '50',
        navigation: '100',
        modal: '200',
        toast: '300',
        debug: '999',
      },
      maxWidth: {
        prose: '70ch',
      },
      animation: {
        'fade-in': 'fadeIn 250ms cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 250ms cubic-bezier(0.4, 0, 0.2, 1)',
        pulse: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}