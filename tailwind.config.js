/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      h1: [
        "2.5rem",
        {
          lineHeight: "3rem",
          fontWeight: "700",
        },
      ],
      h2: [
        "2.25rem",
        {
          lineHeight: "2.7rem",
          fontWeight: "700",
        },
      ],
      h3: [
        "2rem",
        {
          lineHeight: "2.4rem",
          fontWeight: "700",
        },
      ],
      h4: [
        "1.5rem",
        {
          lineHeight: "2.1rem",
          fontWeight: "700",
        },
      ],
      h5: [
        "1.25rem",
        {
          lineHeight: "1.75rem",
          fontWeight: "700",
        },
      ],
      h6: [
        "1.125rem",
        {
          lineHeight: "1.575rem",
          fontWeight: "700",
        },
      ],
      "normal-regular": [
        "1rem",
        {
          lineHeight: "1.5rem",
          fontWeight: "400",
        },
      ],
      "normal-medium": [
        "1rem",
        {
          lineHeight: "1.5rem",
          fontWeight: "600",
        },
      ],
      "normal-bold": [
        "1rem",
        {
          lineHeight: "1.5rem",
          fontWeight: "700",
        },
      ],
      "small-regular": [
        "0.875rem",
        {
          lineHeight: "1.313rem",
          fontWeight: "400",
        },
      ],
      "small-bold": [
        "0.875rem",
        {
          lineHeight: "1.313rem",
          fontWeight: "700",
        },
      ],
      "tiny-regular": [
        "0.75rem",
        {
          lineHeight: "1.125rem",
          fontWeight: "400",
        },
      ],
      "link-big": [
        "1.125rem",
        {
          lineHeight: "1.688rem",
          fontWeight: "500",
          letterSpacing: "0.02rem",
        },
      ],
      "link-normal": [
        "1rem",
        {
          lineHeight: "1.5rem",
          fontWeight: "500",
          letterSpacing: "0.02rem",
        },
      ],
      "link-small": [
        "0.875rem",
        {
          lineHeight: "1.313rem",
          fontWeight: "500",
          letterSpacing: "0.018rem",
        },
      ],
      "link-tiny": [
        "0.75rem",
        {
          lineHeight: "1.125rem",
          fontWeight: "500",
          letterSpacing: "0.015rem",
        },
      ],
    },
    extend: {
      colors: {
        "primary-color": "#111827",
        "on-primary-color": "#FFFFFF",
        "secondary-color": "#d21202",
        "on-secondary-color": "#FFFFFF",
        "background-color": "whitw",
        "on-background-color": "#111827",
        "surface-color": "white",
        "on-surface-color": "#111827",
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
      borderRadius: {
        sm: "0.25rem",
        DEFAULT: "0.5rem",
        DEFAULT: "8px",
      },
    },
  },
  plugins: [],
};
