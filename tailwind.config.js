module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {},
    container: (theme) => ({
      center: true,
      padding: {
        default: theme("spacing.4"),
        sm: theme("spacing.5"),
        lg: theme("spacing.6"),
        xl: theme("spacing.8"),
      },
    }),
  },
  variants: {},
  plugins: [],
}
