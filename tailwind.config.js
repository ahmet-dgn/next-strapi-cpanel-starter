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
      "link-normal": [
        "1rem",
        {
          lineHeight: "1.5rem",
          fontWeight: "500",
          letterSpacing: "0.02rem",
        },
      ],
      "link-small": [
        "0.875",
        {
          lineHeight: "1.313rem",
          fontWeight: "500",
          letterSpacing: "0.018rem",
        },
      ],
      "link-tiny": [
        "0.75",
        {
          lineHeight: "1.125rem",
          fontWeight: "500",
          letterSpacing: "0.015rem",
        },
      ],
    },
    extend: {
      colors: {
        "primary-color": "#0463BA",
        "on-primary-color": "#FFFFFF",
        "secondary-color": "#E20000",
        "on-secondary-color": "#FFFFFF",
        "background-color": "#F3F4F6",
        "on-background-color": "#012F59",
        "surface-color": "#FFFFFF",
        "on-surface-color": "#012F59",
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        DEFAULT: "8px",
      },
    },
  },
  plugins: [],
};