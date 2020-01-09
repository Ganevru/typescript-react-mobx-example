'use strict';
module.exports = {
  extends: "react-app",
  plugins: [
    'simple-import-sort',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'warn',
    'simple-import-sort/sort': 'warn',
    'sort-imports': 'off'
  }
}

