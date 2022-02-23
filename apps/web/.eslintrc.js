module.exports = {
  root: true,
  extends: '@zg/vue',
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.vue', '.tsx', '.ts', '.js', '.json']
      },
      alias: {
        map: [['@', './src/']]
      },
      typescript: {}
    }
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/vite.config.ts', '**/vite.config.*.ts'] }
    ],
    'import/no-unresolved': [2, { ignore: ['^virtual:'] }]
  }
}
