/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        chosun: ['Chosunilbo_myungjo', 'serif'],
        flower: ['MapoFlowerIsland', 'cursive'],
        gangwon: ['GangwonEdu_OTFBoldA', 'sans-serif'],
        chosungu: ['ChosunGu', 'serif'],
        pretendard: ['Pretendard-Regular', 'sans-serif'],
        amiri: ['Amiri', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        apple: ['"Homemade Apple"', 'cursive'],
      }
    },
  },
  plugins: [],
}