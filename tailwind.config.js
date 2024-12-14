/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          brownPod50: '#FEFCE9',
          brownPod100: '#FEF5C3',
          brownPod200: '#FEED84',
          brownPod300: '#FEDD45',
          brownPod400: '#FECB1A',
          brownPod500: '#FEAA00',
          brownPod600: '#E28000',
          brownPod700: '#BB5901',
          brownPod800: '#974508',
          brownPod900: '#7D380A',
          brownPod950: '#3E1800'
        },
        secondary: {
          satinLinen50: '#F7F6F1',
          satinLinen100: '#E7E3D5',
          satinLinen200: '#D3CCB2',
          satinLinen300: '#BDB08A',
          satinLinen400: '#AE9B70',
          satinLinen500: '#A1865E',
          satinLinen600: '#8D7151',
          satinLinen700: '#775A46',
          satinLinen800: '#634A3D',
          satinLinen900: '#634A3D',
          satinLinen950: '#634A3D'
        },
        contrast: {
          slateGray50: '#F7F9FC',
          slateGray100: '#EFF3F8',
          slateGray200: '#DEE5EE',
          slateGray300: '#C4CFDD',
          slateGray400: '#8999AF',
          slateGray500: '#596980',
          slateGray600: '#3E4B5E',
          slateGray700: '#2D394B',
          slateGray800: '#1C2534',
          slateGray900: '#111725',
          slateGray950: '#060A17'
        }
      }
    }
  },
  plugins: []
}
