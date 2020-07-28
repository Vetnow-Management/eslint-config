module.exports = {
  extends: [
    '@cade-tecnologia/eslint-config',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.js'],
      },
    },
  },
  rules: {
    // eslint
    'no-unused-vars': ['off'],

    // TypeScript
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/adjacent-overload-signatures': 2,
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array',
      },
    ],
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': 'allow-with-description',
        'ts-check': 'allow-with-description',
        minimumDescriptionLength: 5,
      },
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Number: {
            message:
              '\nUtilizar number pra tipar, motivo:\nhttps://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#general-types',
            fixWith: 'number',
          },
          String: {
            message:
              '\nUtilizar string para tipar, motivo:\nhttps://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#general-types',
            fixWith: 'string',
          },
          Boolean: {
            message:
              '\nUtilizar boolean para tipar, motivo:\nhttps://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#general-types',
            fixWith: 'boolean',
          },
          Symbol: {
            message:
              '\nUtilizar symbol para tipar, motivo:\nhttps://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#general-types',
            fixWith: 'symbol',
          },
          Object: {
            message:
              '\nUtilizar object para tipar, motivo:\nhttps://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#general-types',
            fixWith: 'object',
          },
        },
      },
    ],
    // '@typescript-eslint/await-thenable': 'error', //fixme: Qubra tudo
    // import
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        js: 'never',
      },
    ],
  },
};
