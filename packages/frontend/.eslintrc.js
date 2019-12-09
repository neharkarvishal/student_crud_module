module.exports = {
  'parser': 'babel-eslint',
  'extends': [
    'airbnb',
    'prettier',
    'prettier/react',
    'prettier/standard',
    'prettier/unicorn'
  ],
  'env': {
    'browser': true,
    'node': true,
    'es6': true
  },
  "plugins": ["prettier"],
  rules: {
    'no-multiple-empty-lines': ["error", {'max': 1, 'maxEOF': 0, 'maxBOF': 0}],
    'import/prefer-default-export': 'off',
    'no-use-before-define': ['error', {'variables': false}],
    'no-console': ['warn', {allow: ['info', 'warn', 'error']}],
    'no-restricted-properties': 'off',
    'class-methods-use-this': 'off',
    'react/jsx-filename-extension': 'off',
    'react/no-multi-comp': 'off',
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/destructuring-assignment': 'off',
    'prettier/prettier': 'error'
  },
};
