const eslint = require('./rules/eslint');

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
      experimentalObjectRestSpread: true
    }
  },
  rules: Object.assign({}, eslint)
};
