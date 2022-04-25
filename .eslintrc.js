module.exports = {
  'env': {
    'es2021': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'ignorePatterns': ['src/templates/**/*', 'dist/**/*'],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    '@typescript-eslint'
  ],
  'rules': {
    'brace-style': ['error', '1tbs'],
    'object-curly-spacing': ['error', 'always'],
    'max-len': ['error', {
      'code': 120,
      'ignoreUrls': true,
      'ignoreStrings': true,
      'ignoreRegExpLiterals': true,
    }],
    'no-trailing-spaces': ['error', { 'ignoreComments': true }],
    'eol-last': ['error', 'always'],
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'windows'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ]
  }
}
