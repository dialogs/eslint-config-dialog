/**
 * Stylistic Issues
 */
module.exports = {
  // enforce linebreaks after opening and before closing array brackets
  'array-bracket-newline': [2, { 'multiline': true }],

  // enforce spacing inside array brackets
  'array-bracket-spacing': 2,

  // disallow or enforce spaces inside of single line blocks
  'block-spacing': [2, 'always'],

  // enforce line breaks after each array element
  'array-element-newline': [2, { 'multiline': true, 'minItems': 5 }],

  // enforce one true brace style
  'brace-style': [2, '1tbs', { 'allowSingleLine': true }],

  // require camel case names
  'camelcase': [2, { 'properties': 'never' }],

  // enforce or disallow capitalization of the first letter of a comment
  'capitalized-comments': 0,

  // enforce spacing before and after comma
  'comma-spacing': [
    2,
    {
      'before': false,
      'after': true
    }
  ],

  // enforce one true comma style
  'comma-style': [2, 'last'],

  // require or disallow padding inside computed properties
  'computed-property-spacing': 2,

  // enforce consistent naming when capturing the current execution context
  'consistent-this': 2,

  // enforce newline at the end of file, with no multiple empty lines
  'eol-last': 2,

  // require or disallow spacing between function identifiers and their invocations
  'func-call-spacing': 2,

  // require function names to match the name of the variable or property to which they are assigned
  'func-name-matching': 2,

  // require function expressions to have a name
  'func-names': 1,

  // enforce use of function declarations or expressions
  'func-style': 0,

  // disallow specified identifiers
  'id-blacklist': 0,

  // require identifiers to match the provided regular expression
  'id-match': 2,

  // specify tab or space width for your code
  'indent': [2, 2, { 'SwitchCase': 1 }],
  // specify whether double or single quotes should be used in JSX attributes
  'jsx-quotes': [2, 'prefer-double'],

  // enforce spacing between keys and values in object literal properties
  'key-spacing': [
    2,
    {
      'beforeColon': false,
      'afterColon': true
    }
  ],

  // enforce consistent spacing before and after keywords
  'keyword-spacing': [2, { 'before': true, 'after': true }],

  // enforce position of line comments
  'line-comment-position': [2, { 'position': 'above' }],

  // enforce empty lines around comments
  'lines-around-comment': 2,

  // disallow mixed 'LF' and 'CRLF' as linebreaks
  'linebreak-style': 2,

  // enforce a maximum depth that blocks can be nested
  'max-depth': [2, { 'max': 4 }],

  // enforce a maximum line length
  'max-len': [
    2,
    {
      'code': 120,
      'tabWidth': 2
    }
  ],

  // enforce a maximum file length
  'max-lines': [
    2,
    {
      'max': 300,
      'skipBlankLines': true,
      'skipComments': true
    }
  ],

  // enforce a maximum depth that callbacks can be nested
  'max-nested-callbacks': [2, { 'max': 4 }],

  // enforce a maximum number of parameters in function definitions
  'max-params': [2, { 'max': 6 }],

  // enforce a maximum number of statements allowed in function blocks
  'max-statements': [2, { 'max': 80 }],

  // enforce a maximum number of statements allowed per line
  'max-statements-per-line': [2, { 'max': 1 }],

  // enforce newlines between operands of ternary expressions
  'multiline-ternary': 0,

  // require a capital letter for constructors
  'new-cap': [
    2,
    {
      'newIsCap': true,
      'capIsNew': false
    }
  ],

  // disallow the omission of parentheses when invoking a constructor with no arguments
  'new-parens': 2,

  // require an empty line before return statements
  'newline-per-chained-call': 0,

  // disallow use of the Array constructor
  'no-array-constructor': 2,

  // disallow use of the continue statement
  'no-continue': 2,

  // disallow comments inline after code
  'no-inline-comments': 2,

  // disallow if as the only statement in an else block
  'no-lonely-if': 2,

  // disallow mixes of different operators
  'no-mixed-operators': 2,

  // disallow mixed spaces and tabs for indentation
  'no-mixed-spaces-and-tabs': 2,

  // disallow use of chained assignment expressions
  'no-multi-assign': 2,

  // disallow multiple empty lines
  'no-multiple-empty-lines': [2, { 'max': 2 }],

  // disallow nested ternary expressions
  'no-nested-ternary': 2,

  // disallow negated conditions
  'no-negated-condition': 2,

  // disallow the use of the Object constructor
  'no-new-object': 2,

  // disallow the unary operators ++ and --
  'no-plusplus': 0,

  // disallow use of certain syntax in code
  'no-restricted-syntax': [2, 'WithStatement'],

  // disallow tabs in file
  'no-tabs': 2,

  // disallow the use of ternary operators
  'no-ternary': 0,

  // disallow trailing whitespace at the end of lines
  'no-trailing-spaces': 2,

  // disallow dangling underscores in identifiers
  'no-underscore-dangle': 0,

  // disallow the use of Boolean literals in conditional expressions
  'no-unneeded-ternary': 2,

  // disallow whitespace before properties
  'no-whitespace-before-property': 2,

  // enforce the location of single-line statements
  'nonblock-statement-body-position': 2,

  // require or disallow line breaks inside braces
  'object-curly-newline': 0,
  // Disabled due https://github.com/eslint/eslint/issues/6549
  // 'object-curly-newline': [2, { 'multiline': true, 'minProperties': 1 }],

  // require or disallow padding inside curly braces
  'object-curly-spacing': [2, 'always'],

  // enforce placing object properties on separate lines
  'object-property-newline': 0,

  // require or disallow one variable declaration per function
  'one-var': [
    2,
    {
      'uninitialized': 'always',
      'initialized': 'never'
    }
  ],

  // require or disallow newlines around var declarations
  'one-var-declaration-per-line': 2,

  // require assignment operator shorthand where possible or prohibit it entirely
  'operator-assignment': 2,

  // enforce operators to be placed before or after line breaks
  'operator-linebreak': 2,

  // enforce padding within blocks
  'padded-blocks': [2, 'never'],

  // require or disallow padding lines between statements
  'padding-line-between-statements': [2, { 'blankLine': 'always', 'prev': '*', 'next': 'return' }],

  // require quotes around object literal property names
  'quote-props': [2, 'consistent-as-needed'],

  // specify whether backticks, double or single quotes should be used
  'quotes': [2, 'single', 'avoid-escape'],

  // require JSDoc comment
  'require-jsdoc': 0,

  // require or disallow use of semicolons instead of ASI
  'semi': [2, 'always'],

  // enforce spacing before and after semicolons
  'semi-spacing': [
    2,
    {
      'before': false,
      'after': true
    }
  ],

  // enforce location of semicolons
  'semi-style': [2, 'last'],

  // requires object keys to be sorted
  'sort-keys': 0,

  // sort variables within the same declaration block
  'sort-vars': 0,

  // require or disallow a space before blocks
  'space-before-blocks': 2,

  // require or disallow a space before function opening parenthesis
  'space-before-function-paren': [2, 'never'],

  // require or disallow spaces inside parentheses
  'space-in-parens': 2,

  // require spaces around operators
  'space-infix-ops': 2,

  // require or disallow spaces before/after unary operators
  'space-unary-ops': 2,

  // require or disallow a space immediately following the // or /* in a comment
  'spaced-comment': [
    2,
    'always',
    {
      'exceptions': ['-', '+'],
      'markers': ['=', '!']
    }
  ],

  // enforce spacing around colons of switch statements
  'switch-colon-spacing': [2, { 'after': true, 'before': false }],

  // require or disallow spacing between template tags and their literals
  'template-tag-spacing': [2, 'never'],

  // require or disallow Unicode byte order mark (BOM)
  'unicode-bom': [2, 'never'],

  // require regex literals to be wrapped in parentheses
  'wrap-regex': 2
};
