module.exports = {
  content: ["./public/index.html"],
  theme: {
    screens: {
      sm: "360px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },

    fontSize: {
      sm: ["14px", "20px"],
      base: ["18px", "28px"],
      lg: ["44px", "52px"],
      xl: ["64px", "72px"],
    },

    letterSpacing: {
      normal: "0px",
      base: "-2px",
    },

    colors: {
      primary: {
        50: "#E9F6F3",
        100: "#D3EDE8",
        200: "#A6DBD1",
        400: "#4DB8A2",
        500: "#21A68B",
        600: "#1A856F",
        800: "#0D4238",
      },
      neutrals: {
        0: "#FFFFFF",
        100: "#F8F9FA",
        200: "#F2F3F5",
        300: "#E5E9ED",
        400: "#A6BDC8",
        500: "#617080",
        1000: "#111111",
      },
      success: {
        100: "#F0FBD1",
        500: "#71B51E",
        600: "#599B15",
        700: "#43820F",
      },
      warning: {
        100: "#FFF5D5",
        500: "#FECE2F",
        600: "#CBA526",
        700: "#987C1C",
      },
      error: {
        100: "#FCD8D2",
        500: "#D3214B",
        600: "#B5184C",
        700: "#97104A",
      },
    },

    extend: {
      fontFamily: {
        "cera-pro-bold": ["CeraPro-Bold", "sans-serif"],
        "cera-pro-regular": ["CeraPro-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
