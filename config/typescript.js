module.exports = {
  overrides: [{
    files: ['**/*.ts', '**/*.tsx'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
      'plugin:@typescript-eslint/recommended',
    ],
    rules: {
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/ban-ts-comment': ['warn'],
      '@typescript-eslint/explicit-module-boundary-types': ['off'],

      'no-unused-expressions': ['off'],
      '@typescript-eslint/no-unused-expressions': ['error', {
        allowShortCircuit: true,
        allowTernary: true,
      }],

      // Default "no-shadow" will provide false positive on type definitions.
      // Use typescript-eslint version instead.
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',

      // Remove the redundant "comma-dangle" lint error.
      'comma-dangle': ['off'],
      '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],

      // A pretty trick fix for an eslint error.
      // See: https://stackoverflow.com/questions/63818415/react-was-used-before-it-was-defined/64024916#64024916
      'no-use-before-define': ['off'],
      '@typescript-eslint/no-use-before-define': ['error'],
    },
  }],
};
