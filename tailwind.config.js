/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  future: {
    removeDeprecatedGapUtilities: false,
    purgeLayersByDefault: false
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter-Loom", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: [
      "./client/components/**/*.vue",
      "./client/layouts/**/*.vue",
      "./client/pages/**/*.vue",
      "./client/plugins/**/*.js",
      "nuxt.config.js"
    ]
  }
};
