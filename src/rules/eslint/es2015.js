/**
 * ES2015
 */
module.exports = {
  // require braces in arrow function body
  'arrow-body-style': 0,

  // require parens in arrow function arguments
  'arrow-parens': [2, 'always'],

  // require space before/after arrow function's arrow
  'arrow-spacing': [2, {
    'before': true,
    'after': true
  }],

  // verify calls of super() in constructors
  'constructor-super': 2,

  // enforce spacing around the * in generator functions
  'generator-star-spacing': [0, 'before'],

  // disallow modifying variables of class declarations
  'no-class-assign': 2,

  // disallow arrow functions where they could be confused with comparisons
  'no-confusing-arrow': 2,

  // disallow modifying variables that are declared using const
  'no-const-assign': 2,

  // disallow duplicate name in class members
  'no-dupe-class-members': 2,

  // disallow new operators with the Symbol object
  'no-new-symbol': 2,

  // disallow duplicate module imports
  'no-duplicate-imports': 0,

  // disallow specified modules when loaded by import
  'no-restricted-imports': 0,

  // disallow use of this/super before calling super() in constructors.
  'no-this-before-super': 2,

  // disallow unnecessary computed property keys in object literals
  'no-useless-computed-key': 2,

  // disallow unnecessary constructors
  'no-useless-constructor': 2,

  // disallow renaming import, export, and destructured assignments to the same name
  'no-useless-rename': 2,

  // require let or const instead of var
  'no-var': 2,

  // require method and property shorthand syntax for object literals
  'object-shorthand': 2,

  // suggest using arrow functions as callbacks
  'prefer-arrow-callback': 2,

  // suggest using const declaration for variables that are never modified after declared
  'prefer-const': 2,

  // require destructuring from arrays and/or objects
  'prefer-destructuring': [2, { 'array': false }],

  // disallow parseInt() in favor of binary, octal, and hexadecimal literals
  'prefer-numeric-literals': 2,

  // require rest parameters instead of arguments
  'prefer-rest-params': 2,

  // suggest using the spread operator instead of .apply().
  'prefer-spread': 2,

  // suggest using template literals instead of strings concatenation
  'prefer-template': 0,

  // disallow generator functions that do not have yield
  'require-yield': 2,

  // enforce spacing between rest and spread operators and their expressions
  'rest-spread-spacing': [2, 'never'],

  // enforce sorted import declarations within modules
  'sort-imports': 0,

  // require symbol descriptions
  'symbol-description': 2,

  // require or disallow spacing around embedded expressions of template string
  'template-curly-spacing': [2, 'never'],

  // require or disallow spacing around the * in yield* expressions
  'yield-star-spacing': 2
};
