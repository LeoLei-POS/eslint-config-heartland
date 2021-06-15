module.exports = {
  plugins: [
    "react",
    "react-native"
  ],
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/jsx-indent': ['error', 2],
    'react/sort-comp': [0],
    'react/prop-types': [0],
    'react/no-find-dom-node': 'warn',
    'react/no-deprecated': 'warn',
    'react/jsx-filename-extension': [0],
    'react/jsx-closing-bracket-location': [2, 'after-props'],
    'react/jsx-one-expression-per-line': ['error', { 'allow': 'single-child' }]
  },
};
