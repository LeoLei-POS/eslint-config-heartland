module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['airbnb-base'],
  env: {
    browser: true,
    node: true
  },
  rules: {
    'no-unused-vars': ['error'],
    'eol-last': [0],
    'no-plusplus': [0],
    'arrow-parens': [2, 'as-needed', { 'requireForBlockBody': true }],
    'arrow-body-style': [0],
    'array-bracket-spacing': [2, 'always', { 'arraysInArrays': false, 'objectsInArrays': false }],
    'class-methods-use-this': [0],
    'function-paren-newline': [0],
    'import/no-extraneous-dependencies': [0],
    'import/no-unresolved': [0],
    'import/extensions': [0],
    'import/no-named-as-default': [0],
    'import/prefer-default-export': [0],
    'no-underscore-dangle': [0],
    'comma-dangle': ['error', 'always-multiline'],
    'no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true,
    }],
    'max-len': [2, 120, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
  },
};