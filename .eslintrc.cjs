module.exports = {
  root: true,
  env: { browser: true, es2020: true, "cypress/globals": true }, // Add Cypress globals
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    "plugin:cypress/recommended" // Use Cypress recommended rules
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs','cypress.config.js'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react/prop-types": 0
  },
}
