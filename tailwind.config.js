module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white_A700_00: "#ffffff00",
        gray_700: "#666666",
        black_900_a2: "#000000a2",
        black_900_0a: "#0000000a",
        black_900: "#000000",
        indigo_50: "#e9edf8",
        yellow_900: "#de782e",
        bluegray_100: "#cccccc",
        gray_200: "#eeeeee",
        black_900_14: "#00000014",
        white_A700: "#ffffff",
        indigo_600: "#254abc",
      },
      fontFamily: { opensans: "Open Sans" },
      backgroundImage: {
        gradient: "linear-gradient(90deg ,#ffffff,#ffffff00)",
      },
      boxShadow: {
        bs1: "0px 16px  32px 0px #0000000a",
        bs: "0px 16px  64px 0px #0000000a",
        bs2: "0px 25px  48px 0px #00000014",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
