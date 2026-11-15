export default {
  plugins: ["@shopify/prettier-plugin-liquid"],
  overrides: [
    {
      files: ["**/*.html", "**/*.liquid"],
      options: { parser: "liquid-html" },
    },
  ],
};
