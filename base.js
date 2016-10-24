const eslint = require('./src/rules/eslint');

module.exports = {
  'env': {
    'es6': true,
    'node': true,
    'browser': true
  },
  'parser': 'babel-eslint',
  'parserOptions': {
    'sourceType': 'module',
    'ecmaVersion': 2017,
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true
    }
  },
  'rules': Object.assign({}, eslint)
};
