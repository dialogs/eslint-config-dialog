const eslint = require('./rules/eslint');
const react = require('./rules/react');

module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  plugins: [
    'react'
  ],
  'settings': {
    'react': {
      'pragma': 'React',
      'version': '15'
    }
  },
  rules: Object.assign({}, eslint, react)
};
