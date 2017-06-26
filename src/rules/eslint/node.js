/**
 * Node
 */
module.exports = {
  // enforce return after a callback
  'callback-return': 0,

  'global-require': 1,

  // enforce error handling in callbacks
  'handle-callback-err': 2,

  // disallow use of the Buffer() constructor
  'no-buffer-constructor': 2,

  // disallow mixing regular variable and require declarations
  'no-mixed-requires': 2,

  // disallow use of new operator with the require function
  'no-new-require': 2,

  // disallow string concatenation with __dirname and __filename
  'no-path-concat': 2,

  // disallow process.exit()
  'no-process-exit': 2,

  // restrict usage of specified node modules
  'no-restricted-modules': 0,

  // disallow certain properties on certain objects
  'no-restricted-properties': 0,

  // disallow use of synchronous methods
  'no-sync': 1
};
