import type { ESLintRuleSet } from '../types.js';

/**
 * @see https://github.com/oxc-project/oxc/issues/15761 TODO: oxc migration blocker
 */
export const WebBuddyESLintVueRules: ESLintRuleSet = {
    'prettier/prettier': 'off', // !
    //
    'vue/multi-word-component-names': 'off',
    'vue/html-closing-bracket-newline': ['error'],
    'indent': 'off',
    '@typescript-eslint/indent': 'off',
    'vue/html-comment-indent': ['error', 0],
    'vue/html-indent': [
        'error',
        4,
        {
            alignAttributesVertically: true,
            baseIndent: 1,
            closeBracket: 0,
        },
    ],
    'vue/script-indent': [
        'error',
        4,
        {
            baseIndent: 1,
            switchCase: 1,
        },
    ],
    'vue/max-attributes-per-line': [
        'error',
        {
            singleline: 3,
            multiline: 1,
        },
    ],
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/valid-v-for': 'warn',
    'vue/component-api-style': ['error', ['script-setup', 'composition']],
    'vue/no-reserved-component-names': 'off',
    'vue/attributes-order': [
        'error',
        {
            alphabetical: true,
            order: [
                'DEFINITION',
                'LIST_RENDERING',
                'CONDITIONALS',
                'RENDER_MODIFIERS',
                'GLOBAL',
                ['UNIQUE', 'SLOT'],
                'TWO_WAY_BINDING',
                'OTHER_DIRECTIVES',
                'OTHER_ATTR',
                'EVENTS',
                'CONTENT',
            ],
        },
    ],
    'vue/attribute-hyphenation': ['error', 'always'],
    '@typescript-eslint/no-unnecessary-type-arguments': 'off', // odd
};
