module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["standard-with-typescript", "plugin:react/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "tsconfig.json",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-indent": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/consistent-indexed-object-style": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": "off",
  },
};
