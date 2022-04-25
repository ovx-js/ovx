module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'vue/setup-compiler-macros': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:@typescript-eslint/recommended',
    './.eslintrc-auto-import.json'
  ],
  'parser': 'vue-eslint-parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module'
  },
  'plugins': [
    'vue',
    '@typescript-eslint'
  ],
  'ignorePatterns': [
    'src/assets**/*',
    '.eslintrc.js',
  ],
  'rules': {
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'brace-style': ['error', '1tbs'],
    'object-curly-spacing': ['error', 'always'],
    'max-len': ['error', {
      'code': 120,
      'ignoreUrls': true,
      'ignoreStrings': true,
      'ignoreRegExpLiterals': true
    }],
    'no-trailing-spaces': ['error', {
      'ignoreComments': true,
    }],
    'prefer-destructuring': ['error'],
    'eol-last': ['error', 'always'],
    'indent': [
      'error',
      2
    ],
    'quotes': [
      'error',
      'single'
    ],
    'no-console': ['error'],
  }
}
