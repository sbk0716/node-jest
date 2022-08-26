module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true, // Settings for this error: 'expect' is not defined. (no-undef)
  },
  extends: [
    'airbnb-base',
    'prettier' // Use ESLint and Prettier together and use Prettier for code style checks.
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'prefer-const': 'error',
  },
};
