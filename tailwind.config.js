module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      // Configure your color palette here
      'turquoise-blue': '#0E7490',
      'cloudy-gray': '#6B7280'
    },
    fontFamily: {
      pacifico: ["Pacifico"],
      outfit: ["Outfit"],
      outfitbold: ["Outfit-Bold"]
    },
  },
  plugins: [],
}