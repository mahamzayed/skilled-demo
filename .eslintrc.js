module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  plugins: [
  ],
  // add your custom rules here
  rules: {
    quotes: [2, "single"],
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }]
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ]
}
