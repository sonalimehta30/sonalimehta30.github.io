// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      '@typescript-eslint/no-empty-function': "off", //[ 'warn', {allow: ['constructors'] } ],
      "@angular-eslint/no-empty-lifecycle-method": "off",
      '@typescript-eslint/no-unused-vars': "off",
      '@typescript-eslint/no-explicit-any': "off",
      '@angular-eslint/template/click-events-have-key-events': 'off',
      '@angular-eslint/template/mouse-events-have-key-events': 'off',
      '@angular-eslint/no-output-on-prefix': 'off',
      '@angular-eslint/template/accessibility-valid-aria': 'off',
      '@angular-eslint/template/no-negative-async': 'off'
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {
      '@typescript-eslint/no-empty-function': "off", //[ 'warn', {allow: ['constructors'] } ],
      "@angular-eslint/no-empty-lifecycle-method": "off",
      '@typescript-eslint/no-unused-vars': "off",
      '@typescript-eslint/no-explicit-any': "off",
      '@angular-eslint/template/click-events-have-key-events': 'off',
      '@angular-eslint/template/mouse-events-have-key-events': 'off',
      '@angular-eslint/no-output-on-prefix': 'off',
      '@angular-eslint/template/accessibility-valid-aria': 'off',
      '@angular-eslint/template/no-negative-async': 'off',
    },
  }
);
