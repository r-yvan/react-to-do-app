/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins"],
      },
      width: {
        "width-1": "800px",
        "width-2": "700px",
        "width-3": "600px",
        "real-full": "1880px"
      },
      height: {
        "height-1": "800px",
        "height-2": "700px",
        "height-3": "600px",
        "real-full": "1000px" 
      },
      scale: {
        "a-little-bit": "1.015"
      }
    },
  },
  plugins: [],
};
