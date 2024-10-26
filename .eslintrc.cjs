// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'react-refresh'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    // 'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/exhaustive-deps': 'off', // Tắt cảnh báo về phụ thuộc của hook
    '@typescript-eslint/no-explicit-any': 'off',
    semi: ['error'],
    quotes: ['error', 'single'],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '^_',
      },
    ],
    'no-useless-escape': 'off',
    '@typescript-eslint/ban-types': 'off', // Tắt cảnh báo về kiểu `{}`
    'react/no-array-index-key': 'off', // Tắt cảnh báo về việc sử dụng chỉ mục mảng làm key
    'react/display-name': 'off', // Tắt cảnh báo về việc không có displayName
    // 'react/no-array-index-key': 'error',
    // 'react/display-name': 'error',
  },
};
