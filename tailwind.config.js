/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        "neutral-bg-1-rest": "#0B0E18",
        "neutral-bg-2-rest": "#101423",
        "neutral-fg-3-rest": "#C0C0C9",
        "neutral-fg-blue-3-rest": "#97CFFD",
        "neutral-fg-blue-4-rest": "#4EAEFD",
        "neutral-fg-gray-1-rest": "#FCFCFD",
        "neutral-bd-1-rest": "#313856"
      },
      backgroundImage: {
        "blue-gradient-opacity": 'linear-gradient(90deg, rgba(62, 162, 244, 0) 13.07%, rgba(66, 62, 244, 0.1) 103.18%)',
        "gray-gradient-1": "linear-gradient(180deg, #777E90 6%, #FBFBFB 100%)",
        "gray-gradient-2": "linear-gradient(180deg, #8D98C6 6%, #B3BEDC 100%)",
        "gray-gradient-3": "linear-gradient(180deg, #707698 6%, #C7D2E8 100%)",
        "green-gradient-1": "linear-gradient(180deg, #04DB74 0%, #4EFDA9 31%, #07DCD0 61%, #07DCDC 100%)",
        "green-gradient-2": "linear-gradient(180deg, #04DB74 0%, #4EFDA9 31%, #07DCD0 61%, #07DCDC 100%)",
        "green-gradient-3": "linear-gradient(180deg, #04DB74 0%, #4EFDA9 31%, #07DCD0 61%, #07DCDC 100%)",
        "blue-gradient-1": "linear-gradient(180deg, #02D4E1 0%, #60B1FD 35%, #7059FF 69%, #01EB97 100%)",
        "blue-gradient-2": "linear-gradient(180deg, #02D4E1 0%, #60B1FD 51%, #7059FF 100%)",
        "blue-gradient-3": "linear-gradient(180deg, #02D4E1 0%, #60B1FD 51%, #7059FF 100%)",
        "orange-gradient-1": "linear-gradient(180deg, #F38F10 0%, #FCC551 37%, #E16E04 52%, #CEBC1C 100%)",
        "orange-gradient-2": "linear-gradient(180deg, #FFC24B 0%, #FA7B70 100%)",
        "orange-gradient-3": "linear-gradient(180deg, #FA7B70 0%, #FFC24B 100%)",
        "purple-gradient-1": "linear-gradient(180deg, #7059FF 0%, #8016F4 100%)",
        "purple-gradient-2": "linear-gradient(180deg, #5E21F0 0%, #8016F4 51%, #7059FF 100%)",
        "purple-gradient-3": "linear-gradient(180deg, #5024E6 0%, #AC06F0 100%)",
        "red-gradient-1": "linear-gradient(180deg, #F38F10 0%, #FCC551 37%, #E16E04 52%, #CEBC1C 100%)",
        "red-gradient-2": "linear-gradient(180deg, #BB15CE 0%, #FF6B00 100%)",
        "red-gradient-3": "linear-gradient(180deg, #FA5547 0%, #AC06F0 100%)",
        "neutral-gradient-1": "linear-gradient(-20deg, #ABECA2 0%, #2FB3FE 31%, #6A8EEA 65%, #A185F4 98%)",
      },
    },
  },
  plugins: [],
};
