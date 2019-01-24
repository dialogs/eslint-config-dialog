const eslint = require('./src/rules/eslint');
const react = require('./src/rules/react');
const globals = require('./src/globals');

module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['babel', 'flowtype', 'react-hooks', 'react'],
  settings: {
    react: {
      pragma: 'React',
      version: '16',
    },
  },
  rules: Object.assign({}, eslint, react),
  globals: Object.assign({}, globals),
};
