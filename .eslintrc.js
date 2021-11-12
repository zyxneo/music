module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },

  extends: 
    'prettier',
    'plugin:prettier/recommended',
  ],

  globals: {
    // eslint was complaining when using jsdom namespace which is declared in global scope
    jsdom: true,
    spyOn: true,
  },

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  plugins: ['sort-destructure-keys'],

  root: true,
  
  settings: {
    react: {
      version: 'detect',
    },
  },
};
