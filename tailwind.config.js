/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            colors: {
                primary: {
                    light: '#ffffff',
                    dark: '#000000', // Pure Black
                },
                accent: {
                    DEFAULT: '#2563eb', // Blue 600
                    hover: '#1d4ed8', // Blue 700
                }
            },
        },
    },
    plugins: [],
}
