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
  // Prevent usage 'mixed' type annotations.
  'flowtype/no-mixed': 2,
  // Requires that all function parameters have type annotations.
  'flowtype/require-parameter-type': [
    2,
    {
      // Exclude only concise arrow functions
      'excludeArrowFunctions': 'expressionsOnly'
    }
  ],
  // Warns against weak type annotations any, Object and Function.
  'flowtype/no-weak-types': 2,
  // Enforces comma between properties in Flow object types.
  'flowtype/object-type-delimiter': [
    2,
    'comma'
  ],
  // Requires that functions have return type annotation.
  'flowtype/require-parameter-type': [
    2,
    {
      // Exclude only concise arrow functions
      'excludeArrowFunctions': 'expressionsOnly'
    }
  ],
  // Requires that functions have return type annotation.
  'flowtype/require-return-type': [
    2,
    'always',
    {
      'excludeMatching': [
        'render*',
      ],
      'annotateUndefined': 'never'
    }
  ],
  // Enforces consistent use of semicolons after type aliases.
  'flowtype/semi': [
    2,
    'always'
  ],
  // Enforces consistent spacing after the type annotation colon.
  'flowtype/space-after-type-colon': [
    2,
    'always'
  ],
  // Enforces consistent spacing before the opening < of generic type annotation parameters.
  'flowtype/space-before-generic-bracket': [
    2,
    'never'
  ],
  // Enforces consistent spacing before the type annotation colon.
  'flowtype/space-before-type-colon': [
    2,
    'never'
  ],
  // Enforces consistent spacing around union and intersection type separators (| and &).
  'flowtype/union-intersection-spacing': [
    2,
    'always'
  ]
}