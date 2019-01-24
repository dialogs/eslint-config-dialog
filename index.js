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
  rules: Object.assign({}, eslint, react, {
    'babel/camelcase': 1,
    'babel/no-invalid-this': 1,
    'babel/object-curly-spacing': 1,
    'babel/semi': 1,
    'babel/no-unused-expressions': 1,
    'babel/valid-typeof': 1,
  }),
  globals: Object.assign({}, globals),
};
