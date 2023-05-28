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
        blue_900: "#011cae",
        indigo_A700: "#0028ff",
        black_900: "#000000",
        black_900_fc: "#000000fc",
        white_A700: "#ffffff",
      },
      backgroundImage: {
        gradient: "radial-gradient(#000000fc,#011cae)",
        gradient1: "radial-gradient(#0028ff,#000000)",
      },
      fontFamily: { jimnightshade: "Jim Nightshade" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
