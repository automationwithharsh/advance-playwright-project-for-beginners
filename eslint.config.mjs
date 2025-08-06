import { defineConfig } from 'eslint-define-config';

export default defineConfig({
  root: true,
  env: {
    node: true,
    es2021: true,
    browser: false,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'playwright', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:playwright/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    // Naming convention rules
    '@typescript-eslint/naming-convention': [
      'error',
      // Variable-like
      {
        selector: 'variableLike',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      // Type-like (interfaces, types, classes, enums)
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      // Class names
      {
        selector: 'class',
        format: ['PascalCase'],
      },
      // Method names
      {
        selector: 'method',
        format: ['camelCase'],
      },
      // Function names
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      // Component names (React, etc.)
      {
        selector: 'variable',
        types: ['function'],
        format: ['PascalCase'],
        filter: {
          regex: '^[A-Z]',
          match: true,
        },
      },
      // Constants (const variables)
      {
        selector: 'variable',
        modifiers: ['const'],
        format: ['PascalCase', 'UPPER_CASE'],
        filter: {
          regex: '^([A-Z0-9_]+|[A-Z][a-zA-Z0-9]*)$',
          match: true,
        },
      },
      // Enum members
      {
        selector: 'enumMember',
        format: ['PascalCase', 'UPPER_CASE'],
      },
      // Constants (const variables)
      {
        selector: 'variable',
        modifiers: ['const'],
        format: ['PascalCase', 'UPPER_CASE'],
        filter: {
          regex: '^([A-Z0-9_]+|[A-Z][a-zA-Z0-9]*)$',
          match: true,
        },
      },
      // Enum members
    {
      selector: 'enumMember',
      format: ['PascalCase', 'UPPER_CASE'],
    },
    ],
    // Enforce ordered imports
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    // Enforce private methods at the bottom of classes
    'typescript-sort-class-members': [
      'error',
      {
        order: [
          '[static-properties]',
          '[static-methods]',
          '[properties]',
          'constructor',
          '[public-methods]',
          '[protected-methods]',
          '[private-methods]',
        ],
        accessorPairPositioning: 'getThenSet',
        groups: {
          'public-methods': [{ name: '/.*/', type: 'method', accessibility: 'public' }],
          'protected-methods': [{ name: '/.*/', type: 'method', accessibility: 'protected' }],
          'private-methods': [{ name: '/.*/', type: 'method', accessibility: 'private' }],
        },
      },
    ],
    // Only allow console.error and console.warn
    'no-console': ['error', { allow: ['warn', 'error'] }],
    // Remove unused variables and functions
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    // Prettier rule
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    {
      files: ['tests/**/*.ts'],
      env: {
        'playwright/playwright-test': true,
      },
    },
  ],
  ignorePatterns: [
    '*.js',
    '*.json',
    '*.md',
    'node_modules/',
    'dist/',
    'build/',
    'coverage/',
  ],
});
