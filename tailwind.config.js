/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily:{
        roboto: "'Roboto', sans-serif",
        poppins: "'Poppins', sans-serif"
      },
      colors:{
        "darkBlueR": "#1e202b",
        "darkLightBlue": "#2d303d",
        "lightBlueRGB": "rgba(0, 0, 0, 0.1)",
        "grayLight": "#262936",
        "lightBlue": "#323544",
        "primary": "#009ad8",
        "secondary": "#bfc1c8",
      }
    },
  },
  plugins: [],
}
