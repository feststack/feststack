import pkg from 'eslint-config-next';
const { defineConfig } = pkg;

export default defineConfig({
  ignores: ["node_modules", ".next", "lib/generated/**"],
  extends: ['next', 'next/core-web-vitals'],
  rules: {
    "@typescript-eslint/no-unused-expressions": "off",
    "@typescript-eslint/no-unused-vars": "off",
  },
  // autres règles ESLint que tu utilises
});
