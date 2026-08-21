import type { ESLintRuleSet } from '../types.js';

export const WebBuddyESLintVueExtraFileExtensions = ['.vue'] as const;

export const WebBuddyESLintRulesShared: ESLintRuleSet = {
    'semi': 'error',
    'object-shorthand': ['error', 'properties'],
    'spaced-comment': ['error', 'always', { block: { balanced: true } }],
    //
    'one-var': ['error', 'never'],
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
    'object-curly-spacing': ['error', 'always'],
    'quotes': [
        'error',
        'single',
        {
            allowTemplateLiterals: true,
            avoidEscape: true,
        },
    ],
    'no-restricted-imports': [
        'error',
        {
            paths: [
                {
                    name: 'lodash',
                    message: 'NEVER IMPORT lodash. Use ONLY DIRECT lodash-es/<SOME-TOOL>',
                },
                {
                    name: 'lodash-es',
                    message: 'NEVER IMPORT lodash-es. Use ONLY lodash-es/<SOME-TOOL>',
                },
            ],
        },
    ],
    'no-new-wrappers': 'error',
    'quote-props': ['error', 'consistent-as-needed'],
    'no-return-await': 'error',
    'key-spacing': 'error',
    'block-spacing': 'error',
    'semi-spacing': 'error',
    'keyword-spacing': 'error',
    'space-before-blocks': 'error',
    'brace-style': 'error',
    'arrow-spacing': 'error',

    //

    'import-x/no-named-as-default-member': 'off',
    'import-x/newline-after-import': 'error',
    'import-x/no-duplicates': 'error',
    'import-x/order': [
        'error',
        {
            'newlines-between': 'never',
            'alphabetize': {
                order: 'asc',
                caseInsensitive: false,
            },
            'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        },
    ],
    'no-restricted-syntax': [
        'warn',
        {
            selector:
                "BinaryExpression[operator='==='][right.type='Identifier'][right.name='undefined']",
            message: 'Do not compare directly to undefined. Use == null instead.',
        },
        {
            selector:
                "BinaryExpression[operator='==='][left.type='Identifier'][left.name='undefined']",
            message: 'Do not compare directly to undefined. Use == null instead.',
        },
    ],
};
