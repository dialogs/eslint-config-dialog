module.exports = {
  // Prevent usage 'bool' instead 'boolean'
  'flowtype/boolean-style': [
    2,
    'boolean'
  ],
  // Used to suppress no-undef reporting of type identifiers.
  'flowtype/define-flow-type': 1,
  // Prevent usage space surrounding the generic type parameters. 
  'flowtype/generic-spacing': [
    2,
    'never'
  ],
  // Enforces that @flow annotations be followed by an empty line, separated by newline (LF)
  'flowtype/newline-after-flow-annotation': [
    2,
    'always'
  ],
  // Warns against weak type annotations any, Object and Function.
  'flowtype/no-weak-types': 2,
  // Enforces comma between properties in Flow object types.
  'flowtype/object-type-delimiter': [
    2,
    'comma'
  ]
}