module.exports = {
  root: true,
  extends: ['@react-native-community'],
  plugins: ['react-hooks'],
  rules: {
    'no-duplicate-imports': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-unused-expressions': 'error',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'warn',
    curly: 'off',
  },
  env: {
    'jest/globals': true,
    es2020: true,
  },
  ignorePatterns: [
    'node_modules/',
    '**/node_modules/',
    '/**/node_modules/*',
    'libs/',
    '**/libs/',
    '/**/libs/*',
    '__mocks__/*.js',
    'setupTest/*.js',
    '**/*.spec.js',
  ],
  globals: {
    JSX: 'readonly',
    AbortController: 'readonly',
  },
};
