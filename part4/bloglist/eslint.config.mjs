import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
//import babelParser from "@babel/eslint-parser";
import babelParser from "@babel/eslint-parser";
import js from '@eslint/js'
import stylisticJs from '@stylistic/eslint-plugin-js'
// ...
export default [
  js.configs.recommended,
  {
    
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.node,
      },
      ecmaVersion: "latest",
    //   parser: babelParser,
    //   parserOptions: {
    //       // parser: babelParser,
    //   sourceType: 'module',
    //   "allowImportExportEverywhere": true,
    //   requireConfigFile: false
//   }
    },

    plugins: {
      '@stylistic/js': stylisticJs
    },
    rules: {
      '@stylistic/js/indent': [
        'error',
        2
      ],
      '@stylistic/js/linebreak-style': [
        'error',
        'unix'
      ],
      '@stylistic/js/quotes': [
        'error',
        'single'
      ],
      '@stylistic/js/semi': [
        'error',
        'never'
      ],
      'eqeqeq': 'error', //这个规则规定，如果没有用三等号运算符，就会出现警告。
      'no-trailing-spaces': 'error',
      'object-curly-spacing': [
        'error', 'always'
      ],
      'arrow-spacing': [
      'error', { 'before': true, 'after': true }
      ],
      'no-console': 'off',
    },

  // ...

//   languageOptions: {
//     // parser:
//     //parser: 'babel-eslint',
//     parser: babelParser,
//     parserOptions: {
//         // parser: babelParser,
//     sourceType: 'module',
//     "allowImportExportEverywhere": true,
//     requireConfigFile: false
// }
// }
  },

  
  {
    ignores: ["dist/**", "build/**"],
  },

  
]