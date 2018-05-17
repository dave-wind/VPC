// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential', 'airbnb-base'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    // else ==> else if can use
    'no-lonely-if': 0,
    // () => { return;}
    'consistent-return': 0,
    // const require
    'import/newline-after-import': 'off',
    // indent close
    'indent': 0,
    // const isJedi = luke['jedi']; == > const isJedi = luke.jedi;
    'dot-notation': 0,
    'camelcase': 0,
    // import 问题
    'import/first': ['error', 'DISABLE-absolute-first'],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: false,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    'no-console': 0,
    // arrow function can no {}
    'arrow-parens': 0,
    // object {}
    'object-curly-spacing': 0,
    //  single function  {}
    'arrow-body-style': [0, "as-needed"],
    'linebreak-style': [0, "window"],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
