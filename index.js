const eslint = require('./src/rules/eslint');
const react = require('./src/rules/react');
const globals = require('./src/globals');

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
      'jsx': true,
      'experimentalObjectRestSpread': true
    }
  },
  'plugins': [
    'react'
  ],
  'settings': {
    'react': {
      'pragma': 'React',
      'version': '15'
    }
  },
  'rules': Object.assign({}, eslint, react),
  'globals': Object.assign({}, globals)
};
