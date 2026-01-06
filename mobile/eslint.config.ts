import { fileURLToPath, URL } from 'node:url'

/**
 * TODO: fix it when this plugin exposes types.
 * @see: https://github.com/eslint-community/eslint-plugin-eslint-comments/issues/214
 */
// @ts-expect-error: TS7016 because this plugin doesn't expose types.
import eslintComments from '@eslint-community/eslint-plugin-eslint-comments'

import { includeIgnoreFile } from '@eslint/compat'
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
// @ts-expect-error: TS7016 because this plugin doesn't expose typings
import reactNative from 'eslint-plugin-react-native';
import { defineConfig } from 'eslint/config';

/* eslint-disable @typescript-eslint/no-unused-vars -- Available constants to set eslint rule level */
const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'
/* eslint-enable */

const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url))

export default defineConfig(
  includeIgnoreFile(gitignorePath, 'Imported .gitignore patterns'),
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      react: react,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- Caused by the absence of types.
      'react-native': reactNative,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- Caused by the absence ot types.
      'eslint-comments': eslintComments,
    },
    rules: {
      '@typescript-eslint/strict-boolean-expressions': [ERROR],
      '@typescript-eslint/consistent-type-imports': [
        ERROR,
        {
          prefer: 'type-imports',
          fixStyle: 'separate-type-imports',
          disallowTypeAnnotations: true,
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        ERROR,
        { ignoreRestSiblings: true },
      ],
      '@typescript-eslint/restrict-template-expressions': [
        ERROR,
        {
          allowNumber: true,
          allowBoolean: false,
          allowAny: false,
          allowNullish: false,
          allowRegExp: false,
          allowNever: false,
          allowArray: false,
          // Default value
          allow: [{ name: ['Error', 'URL', 'URLSearchParams'], from: 'lib' }],
        },
      ],
      '@typescript-eslint/no-extraneous-class': [
        ERROR,
        {
          // Required for declaring NestJS modules.
          allowEmpty: true,
        },
      ],
      '@typescript-eslint/consistent-type-definitions': [ERROR, 'type'],
      '@typescript-eslint/array-type': [
        ERROR,
        { default: 'array-simple', readonly: 'array-simple' },
      ],
      '@typescript-eslint/consistent-indexed-object-style': [
        ERROR,
        'index-signature',
      ],
      eqeqeq: [ERROR, 'always', { null: 'always' }],
      'no-restricted-syntax': [
        ERROR,
        {
          selector: 'ImportSpecifier[importKind=type]',
          message: `Type imports should be separated from value imports. Please use the form "import type { Type } from 'module'"`,
        },
        // {
        //   selector:
        //     'CallExpression > MemberExpression[object.name=Object][property.name=keys]',
        //   message: `"Object.keys" is poorly typed. Please use "import { objectKeys } from 'src/common/lib/object/betterTypes.ts'" instead.`,
        // },
        // {
        //   selector:
        //     'CallExpression > MemberExpression[object.name=Object][property.name=entries]',
        //   message: `"Object.entries" is poorly typed. Please use "import { objectEntries } from 'src/common/lib/object/betterTypes.ts'" instead.`,
        // },
        // {
        //   selector:
        //     'CallExpression > MemberExpression[object.name=Object][property.name=fromEntries]',
        //   message: `"Object.fromEntries" is poorly typed. Please use "import { objectFromEntries } from 'src/common/lib/object/betterTypes.ts'" instead.`,
        // },
        // {
        //   selector:
        //     'CallExpression > MemberExpression[object.name=z][property.name=enum]',
        //   message: `"z.enum" doesn't work well with our enums. Please use "createZodEnumValidator" instead.`,
        // },
        {
          selector: 'TSEnumDeclaration',
          message: `Don't declare enums. Please use "import { Enum } from 'src/common/enums/Enum'" instead.`,
        },
      ],
      'padding-line-between-statements': [
        ERROR,
        { blankLine: 'always', prev: 'directive', next: '*' },
        { blankLine: 'any', prev: 'directive', next: 'directive' },

        { blankLine: 'always', prev: '*', next: ['const', 'let', 'var'] },
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },

        { blankLine: 'always', prev: '*', next: 'if' },
        { blankLine: 'always', prev: 'if', next: '*' },

        { blankLine: 'always', prev: '*', next: 'block-like' },
        { blankLine: 'always', prev: 'block-like', next: '*' },

        { blankLine: 'always', prev: '*', next: 'export' },
        { blankLine: 'always', prev: 'export', next: '*' },
        { blankLine: 'any', prev: 'export', next: 'export' },

        { blankLine: 'always', prev: '*', next: 'return' },
      ],
      ...react.configs.recommended.rules,
      'react/react-in-jsx-scope': OFF,
      'react-native/no-inline-styles': ERROR,
      'eslint-comments/disable-enable-pair': ERROR,
      'eslint-comments/no-duplicate-disable': ERROR,
      'eslint-comments/no-unlimited-disable': ERROR,
      'eslint-comments/no-unused-disable': ERROR,
      'eslint-comments/no-unused-enable': ERROR,
      'eslint-comments/require-description': [
        ERROR,
        { ignore: ['eslint-enable'] },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    ignores: ['node_modules/**', '.expo/**', 'dist/**', 'web-build/**', '*.config.js'],
  },
);
