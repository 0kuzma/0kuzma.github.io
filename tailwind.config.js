/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
   

    extend: {
      height: {
        '75vh': '75vh'
      },

      width: {
        '93': '20rem',
        '105': '30rem',
        '110': '50rem'
      },

      fontFamily: {
      'font-impact': ['impact'],
      'fantasy': ['fantasy']
      },

     
    }

  },
  plugins: [],
}
