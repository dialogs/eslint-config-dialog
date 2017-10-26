module.exports = {
  '__DEV__': true,

  /*
   * Workarounds for https://github.com/babel/babel-eslint/issues/130
   * no-undef errors incorrectly on these global flow types
   * https://fburl.com/flow-react-defs
   */
  'ReactComponent': false,
  'ReactClass': false,
  'ReactElement': false,
  'ReactPropsCheckType': false,
  'ReactPropsChainableTypeChecker': false,
  'ReactPropTypes': false,
  'SyntheticEvent': false,
  'SyntheticClipboardEvent': false,
  'SyntheticCompositionEvent': false,
  'SyntheticInputEvent': false,
  'SyntheticUIEvent': false,
  'SyntheticFocusEvent': false,
  'SyntheticKeyboardEvent': false,
  'SyntheticMouseEvent': false,
  'SyntheticDragEvent': false,
  'SyntheticWheelEvent': false,
  'SyntheticTouchEvent': false,

  /*
   * a bunch of types extracted from http://git.io/vOtv9
   * there's a bunch of overlap with browser globals, so we try to avoid
   * redefining some of those.
   */
  '$Either': false,
  '$All': false,
  '$Tuple': false,
  '$Supertype': false,
  '$Subtype': false,
  '$Shape': false,
  '$Diff': false,
  '$Keys': false,
  '$Enum': false,
  '$Exports': false,
  'Class': false,
  'function': false,
  'Iterable': false,

  // suppress types
  '$FlowIssue': false,
  '$FlowFixMe': false,
  '$FixMe': false,

  // https://fburl.com/flow-core-defs
  'Iterator': false,
  'IteratorResult': false,
  '$await': false,
  'ArrayBufferView': false
};
