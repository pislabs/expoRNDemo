const {
  platformSelect,
  hairlineWidth,
  pixelScale,
  pixelScaleSelect,
  fontScale,
  fontScaleSelect,
  getPixelSizeForLayoutSize,
  roundToNearestPixel,
} = require("nativewind/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / 1)",
        secondary: "rgb(var(--color-secondary) / 1)",
        error: platformSelect({
          ios: "red",
          android: "blue",
          default: "green",
        }),
      },
      borderWidth: {
        hairline: hairlineWidth(),
        number: pixelScale(2),
      },
    },
  },
  plugins: [
    // Set a default value on the `:root` element
    ({ addBase }) =>
      addBase({
        ":root": {
          "--color-primary": "255 0 0",
          "--color-primary-rgb": "rgb(20 20 255)",
          "--color-secondary": "0 255 0",
        },
      }),
  ],
};
