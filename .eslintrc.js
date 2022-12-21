module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', 'prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'warn', // 0: off | 1: warn | 2: error
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'warn',
  },
};
