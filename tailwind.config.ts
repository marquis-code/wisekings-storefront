import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    content: ['./components/**/*.{vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './composables/**/*.ts', './app.vue'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
            colors: {
                brand: { 50: '#fdf8f0', 100: '#f9ecda', 200: '#f3d5b0', 300: '#ebb97d', 400: '#e49948', 500: '#df8528', 600: '#d16b1e', 700: '#ad511b', 800: '#8a411d', 900: '#71371a', 950: '#3d1a0b' },
            },
            animation: { 'fade-in': 'fadeIn 0.4s ease-out', 'slide-up': 'slideUp 0.4s ease-out' },
            keyframes: {
                fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
                slideUp: { '0%': { opacity: '0', transform: 'translateY(16px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
            },
        },
    },
}
