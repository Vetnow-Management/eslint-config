module.exports = {
  extends: [
    '@cade-tecnologia/eslint-config/react',
    '@cade-tecnologia/eslint-config/typescript',
  ],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.js', '.tsx', '.jsx'],
      },
    },
  },
}
