// eslint-disable-next-line
require('@rushstack/eslint-patch/modern-module-resolution');

// eslint-disable-next-line
module.exports = {
  ignorePatterns: ['*.config.ts', '*.config.js', '*.d.ts'],
  extends: [
    'plugin:@typescript-eslint/strict',
    'plugin:unicorn/all',
    'xo',
    'xo-space',
    'xo-react/space',
    'plugin:typescript-sort-keys/recommended',
    'plugin:functional/external-vanilla-recommended',
    'plugin:functional/external-typescript-recommended',
    'plugin:tailwindcss/recommended',
    'plugin:jsx-a11y/strict',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [
    'functional',
    'simple-import-sort',
    'sort-keys-fix',
    'unused-imports',
    'prettier',
  ],
  rules: {
    camelcase: 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          null: false,
        },
      },
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@typescript-eslint/strict-boolean-expressions': 'error',
    'arrow-body-style': ['error', 'always'],
    'capitalized-comments': 'off',
    'functional/immutable-data': [
      'error',
      {
        ignoreClasses: true,
      },
    ],
    'max-params': 'error',
    'new-cap': 'off',
    'no-console': [
      'error',
      {
        allow: ['debug', 'info', 'warn', 'error', 'table'],
      },
    ],
    'no-empty-static-block': 'off',
    'no-new-native-nonconstructor': 'off',
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        endOfLine: 'crlf',
        printWidth: 80,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-no-bind': 'error',
    'react/jsx-sort-props': [
      2,
      {
        callbacksLast: true,
        multiline: 'last',
        shorthandFirst: true,
      },
    ],
    'react/no-array-index-key': 'error',
    'react/no-unknown-property': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'error',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sort-keys-fix/sort-keys-fix': 'error',
    'unicorn/no-keyword-prefix': 'off',
    'unicorn/no-null': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],
  },
};
