function eae(_) {
  return 1 + 2;
}

module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js'],
      },
    },
  },
  plugins: [
    'import'
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
  },
  rules: {
    // Possible Errors
    'for-direction': 'error',
    'getter-return': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-console': 'error',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': ['error', 'both'],
    'no-invalid-regexp': ['error'],
    'no-irregular-whitespace': 'error',
    'no-loss-of-precision': 'warn',
    'no-misleading-character-class': 'error',
    'no-obj-calls': 'error',
    // 'no-promise-executor-return': 'error',
    'no-prototype-builtins': 'error',
    'no-regex-spaces': 'error',
    'no-setter-return': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    // 'no-unreachable-loop': 'warn',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'warn',
    'use-isnan': 'error',
    'valid-typeof': 'error',

    // Best Practices
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'class-methods-use-this': 'off',
    'no-warning-comments':['warn'],

    // Variables
    'no-unused-vars': ['error', {
      argsIgnorePattern: '^_',
    }],

    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
      },
    ]
  },
}
