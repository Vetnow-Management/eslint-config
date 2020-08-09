module.exports = {
  extends: [
    '@vetnow-management/eslint-config'
  ],
  "plugins": [
    "react",
    'import',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    "ecmaFeatures": {
      "jsx": true
    },
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }],
    'react/jsx-uses-vars': ['error'],
    "react/jsx-uses-react": ['error'],
    'react/prop-types': ['off', {}],
    'react/boolean-prop-naming': ['warn'],
    'react/button-has-type': ['warn'],
    'react/destructuring-assignment': ['warn'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        mjs: 'never',
      },
    ],
  },
}
