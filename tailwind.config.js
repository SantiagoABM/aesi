module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'aesi': '#6BAE83',
      'hovercolor': '#14532d',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      //gray
      'gray-900': '#111827',
      'gray-700': '#374151',
      'gray-600': '#4b5563',
      'gray-500': '#6b7280',
      'gray-400': '#9ca3af',
      'gray-300': '#d1d5db',
      'gray-200': '#e5e7eb',
      'gray-100': '#f3f4f6',
      'gray-50': '#f9fafb',
      //red
      'red-500': '#ef4444',
      //indigo
      'indigo-900': '#312e81',
      'indigo-800': '#3730a3',
      'indigo-700': '#4338ca',
      'indigo-600': '#4f46e5',
      'indigo-500': '#3b82f6',
      'indigo-400': '#818cf8',
      'indigo-300': '#a5b4fc',
      'indigo-200': '#c7d2fe',
      'indigo-100': '#e0e7ff',
      'indigo-50': '#eef2ff'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
