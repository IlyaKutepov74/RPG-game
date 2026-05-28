const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');

const compat = new FlatCompat({ baseDirectory: __dirname });

module.exports = [
  { ignores: ['dist'] },
  js.configs.recommended,
  ...compat.extends('airbnb-base'),
  {
    rules: {
      'no-console': 'off',
      'linebreak-style': 'off',
      'eol-last': 'off',
      'import/no-extraneous-dependencies': 'off',
      'class-methods-use-this': 'off',
    },
  },
  {
    files: ['**/*.test.js'],
    languageOptions: {
      globals: {
        describe: 'readonly',
        test: 'readonly',
        expect: 'readonly',
      },
    },
  },
];