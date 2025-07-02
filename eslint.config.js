const eslint = require('@eslint/js');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const cypress = require('eslint-plugin-cypress');

module.exports = [
  eslint.configs.recommended,
  tsPlugin.configs.recommended,
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    env: {
      es2020: true,
      node: true,
      'cypress/globals': true,
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      cypress,
    },
    rules: {},
  },
];
