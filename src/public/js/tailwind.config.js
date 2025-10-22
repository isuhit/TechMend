tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1C2A4A",
        accent: "#31C48D",
        secondary: "#4F8CC9",
        background: "#F9FAFB",
        neutral: "#E5E7EB",
       
        "background-light": "var(--background-light)",
        "background-dark": "var(--background-dark)",
      },
      fontFamily: {
        display: ["Inter"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
};
