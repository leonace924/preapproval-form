module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
    }),
    borderColor: (theme) => ({
      ...theme('colors'),
    }),
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#16162A',
        secondary: '#EAEAFF',
        'light-blue': '#4277FF',
        'light-slate': '#8E8EA3',
        'light-gray': '#D4D4D4',
        'light-zinc': '#F9F9F9',
        'light-violet': '#5E5ADB',
      },
      boxShadow: {
        button: '0px 1px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px #4945C4',
        checkbox:
          '0px 1.24302px 1.24302px rgba(0, 0, 0, 0.1), 0px 0px 0px 1.24302px #5E5ADB, 0px 0px 0px 4.97206px rgba(94, 90, 219, 0.4)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
