tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-blue)",
        accent: "var(--primary-red)",
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
