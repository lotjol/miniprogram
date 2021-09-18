module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  copy: {
    patterns: [
      { from: 'src/static', to: 'dist/static'},
    ],
    options: {
    }
  },
  weapp: {},
  h5: {}
}
