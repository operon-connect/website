/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  tabWidth: 2,
  semi: true,
  overrides: [
    {
      files: '*.astro',
      options: { parser: 'astro' },
    },
  ],
};
