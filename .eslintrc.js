module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': ['error', 'windows'],
    'no-param-reassign': 'error',
    'no-unused-vars': 'error',
    'no-shadow': ['error', { allow: ['state'] }],
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'always-multiline'],
    'camelcase': ['error', { allow: ['^\\$_'] }],
    'no-else-return': 'error',
    'no-var': 'error',
    'prefer-template': 'error',
    'template-curly-spacing': 'error',
    'no-template-curly-in-string': 'error',
    'no-lonely-if': 'error',
    'quote-props': ['error', 'consistent'],
    'consistent-this': ['error', 'self'],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
