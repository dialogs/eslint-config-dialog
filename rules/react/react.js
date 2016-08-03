/**
 * React
 */
module.exports = {
  // Prevent missing displayName in a React component definition
  'react/display-name': 0,

  // Forbid certain propTypes
  'react/forbid-prop-types': [2, { 'forbid': ['array', 'object'] }],

  // Prevent usage of dangerous JSX properties
  'react/no-danger': 2,

  // Prevent usage of deprecated methods
  'react/no-deprecated': 2,

  // Prevent usage of setState in componentDidMount
  'react/no-did-mount-set-state': 2,

  // Prevent usage of setState in componentDidUpdate
  'react/no-did-update-set-state': 2,

  // Prevent direct mutation of this.state
  'react/no-direct-mutation-state': 2,

  // Prevent usage of findDOMNode
  'react/no-find-dom-node': 2,

  // Prevent usage of isMounted
  'react/no-is-mounted': 2,

  // Prevent multiple component definition per file
  'react/no-multi-comp': [2, { 'ignoreStateless': true }],

  // Prevent usage of the return value of React.render
  'react/no-render-return-value': 2,

  // Prevent usage of setState
  'react/no-set-state': 0,

  // Prevent using string references in ref attribute.
  'react/no-string-refs': 0,

  // Prevent usage of unknown DOM property
  'react/no-unknown-property': 2,

  // Enforce ES5 or ES6 class for React Components
  'react/prefer-es6-class': 2,

  // Enforce stateless React Components to be written as a pure function
  'react/prefer-stateless-function': 0,

  // Prevent missing props validation in a React component definition
  'react/prop-types': 2,

  // Prevent missing React when using JSX
  'react/react-in-jsx-scope': 2,

  // Enforce React components to have a shouldComponentUpdate method
  'react/require-optimization': 1,

  // Enforce ES5 or ES6 class for returning value in render function
  'react/require-render-return': 2,

  // Prevent extra closing tags for components without children
  'react/self-closing-comp': 2,

  // Enforce component methods order
  'react/sort-comp': [2, {
    'order': [
      'static-methods',
      'lifecycle',
      '/^on.+$/',
      '/^handle.+$/',
      '/^is.+$/',
      '/^has.+$/',
      '/^get.+$/',
      '/^set.+$/',
      'everything-else',
      '/^render.+$/',
      'render'
    ]
  }],

  // Enforce propTypes declarations alphabetical sorting
  'react/sort-prop-types': 0
};
