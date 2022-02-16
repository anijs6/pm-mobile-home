module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: [
    'plugin:jsdoc/recommended',
    'airbnb-base',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:yml/standard',
    'plugin:unicorn/recommended',
    'prettier'
  ],
  plugins: ['jsdoc', 'html', 'unicorn', 'prettier'],
  settings: {
    'html/report-bad-indent': 'error',
    'html/indent': '+2',
    'html/html-extensions': ['.html', '.ejs', '.html', '.hbs', '.handlebars', '.pug'],
    'import/resolver': {
      node: {
        extensions: ['.tsx', '.ts', '.js', '.json']
      }
    }
  },
  overrides: [
    {
      files: ['**/*.json', '**/*.json5'],
      parser: 'jsonc-eslint-parser',
      rules: {
        quotes: ['error', 'double'],
        'quote-props': ['error', 'always'],
        'comma-dangle': ['error', 'never']
      }
    },
    {
      files: ['**/package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'name',
              'version',
              'description',
              'keywords',
              'license',
              'repository',
              'funding',
              'author',
              'type',
              'files',
              'exports',
              'main',
              'module',
              'unpkg',
              'bin',
              'scripts',
              'husky',
              'lint-staged',
              'peerDependencies',
              'peerDependenciesMeta',
              'dependencies',
              'devDependencies',
              'eslintConfig'
            ]
          },
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
            order: { type: 'asc' }
          }
        ]
      }
    },
    {
      files: ['**/*.js'],
      rules: {
        'unicorn/prefer-module': 'off',
        'jsdoc/no-types': 'off',
        'jsdoc/require-param-type': 'error',
        'jsdoc/require-returns-type': 'error'
      }
    },
    {
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser'
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'jsdoc/require-jsdoc': 'off',
        'jsdoc/require-returns-type': 'off',
        'jsdoc/require-returns': 'off'
      }
    }
  ],
  rules: {
    /** 开头是pre的变量，可以被重新赋值 */
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsForRegex: ['^pre']
      }
    ],
    /** 允许使用array.reduce */
    'unicorn/no-array-reduce': 'off',
    /** 允许直接使用__dirname */
    'unicorn/prefer-module': 'off',
    /** 关闭通过协议使用包：require('node:path') */
    'unicorn/prefer-node-protocol': 'off',
    /** 允许function和class先使用再申明 */
    'no-use-before-define': ['error', { functions: false, classes: false }],
    /**
     * ts文件不需要定义jsdoc类型
     */
    'jsdoc/no-types': ['error', { contexts: ['any'] }],
    'jsdoc/require-param-type': 'off',
    'jsdoc/require-returns-type': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'prettier/prettier': 'error',
    'consistent-return': 'off',
    'unicorn/no-for-loop': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        'd.ts': 'never'
      }
    ],
    'unicorn/filename-case': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-console': 'off',
    'no-new': 'off',
    'import/no-dynamic-require': 'off',
    'global-require': 'off',
    'no-restricted-exports': 'off',
    'yml/quotes': ['error', { prefer: 'double' }],
    'unicorn/no-process-exit': 'off',
    'import/prefer-default-export': 'off',
    'unicorn/prefer-object-from-entries': 'off'
  }
}
