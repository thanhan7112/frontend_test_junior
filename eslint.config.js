import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

const styleCodeRule = {
    'no-unused-vars': ['error', {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
    }],
    'no-empty-pattern': 'error',
    'semi': ['error', 'always'],
    'prefer-const': 'error',
    'no-useless-catch': 'off',
    'indent': ['error', 4, { SwitchCase: 1 }],
    'linebreak-style': ['off', 'unix'],
    'quotes': ['error', 'single'],
    'no-trailing-spaces': 'error',
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': ['error', {
        max: 1,
        maxBOF: 0,
    }],
    'max-len': ['error', {
        code: 120,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignorePattern: 'class="*',
    }],
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': ['error', 'always'],
    'arrow-parens': ['error', 'always'],
};

export default [
    {
        files: ['src/**/*.ts', 'src/**/*.tsx'],
        ignores: ['node_modules/**', 'dist/**'],

        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            parser: typescriptParser,
        },

        plugins: {
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
            '@typescript-eslint': typescriptPlugin,
        },

        rules: {
            ...styleCodeRule,
            'react/react-in-jsx-scope': 'off',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            '@typescript-eslint/no-unused-vars': ['warn', { varsIgnorePattern: '^_' }],
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/ban-types': 'off',
            'react/prop-types': 'off', // Không yêu cầu prop-types khi dùng TypeScript
            'react/jsx-indent': ['error', 4],
            'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
            'react/jsx-indent-props': ['error', 4],
        },
    },
];
