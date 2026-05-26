import { WebBuddyStricterMode } from '../stricter-mode.js';
import type { ESLintRuleSet } from '../types.js';

/*
TODO!

https://github.com/typescript-eslint/typescript-eslint/issues/8700
https://typescript-eslint.io/rules/ban-types/
https://typescript-eslint.io/rules/no-empty-object-type/

https://typescript-eslint.io/rules/no-unnecessary-type-assertion/

https://eslint.vuejs.org/rules/script-indent

*/

export const WebBuddyESLintTypeScriptRules: ESLintRuleSet = {
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    '@typescript-eslint/no-deprecated': 'warn',
    '@typescript-eslint/no-empty-object-type': 'off', // harmful
    '@typescript-eslint/consistent-indexed-object-style': 'off', // harmful
    '@typescript-eslint/no-inferrable-types': 'off', // harmful
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

    'decorator-position/decorator-position': ['error', { properties: 'above', methods: 'above' }],

    '@typescript-eslint/no-unnecessary-type-parameters': 'off', // odd
    '@typescript-eslint/no-unnecessary-condition': 'off', // odd
    '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
    '@typescript-eslint/no-restricted-types': [
        'warn',
        {
            types: {
                Record: {
                    message:
                        'Avoid using the Record type as it may pose some risks. Instead, consider using the @tsofist/stem: PRec/Rec type (Your Stem. With LOVE).',
                    suggest: ['PRec', 'Rec'],
                },
            },
        },
    ],
    '@typescript-eslint/ban-ts-comment': [
        'error',
        {
            'minimumDescriptionLength': 7,
            'ts-expect-error': 'allow-with-description',
            'ts-nocheck': 'allow-with-description',
            'ts-ignore': true,
            'ts-check': false,
        },
    ],

    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/return-await': 'off',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'off', // harmful
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',

    'semi': 'error',
    '@stylistic/semi': ['error', 'always'],

    '@stylistic/member-delimiter-style': [
        'error',
        {
            multiline: { delimiter: 'semi', requireLast: true },
            singleline: { delimiter: 'semi', requireLast: false },
        },
    ],

    '@stylistic/space-before-function-paren': [
        'warn',
        {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
        },
    ],
    '@typescript-eslint/no-meaningless-void-operator': 'error',
    '@typescript-eslint/no-redundant-type-constituents': 'off',
    '@typescript-eslint/method-signature-style': ['error', 'property'],

    'lines-between-class-members': 'off',
    '@stylistic/lines-between-class-members': [
        'error',
        'always',
        { exceptAfterSingleLine: true, exceptAfterOverload: true },
    ],

    'indent': 'off',
    '@typescript-eslint/indent': 'off', // by prettier
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off', // by tsc

    'no-trailing-spaces': 'off',

    '@stylistic/space-in-parens': 'error',

    '@stylistic/function-call-spacing': 'error',

    '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
    '@typescript-eslint/no-invalid-void-type': [
        'error',
        {
            allowAsThisParameter: true,
            allowInGenericTypeArguments: true,
        },
    ],
    '@typescript-eslint/no-confusing-void-expression': [
        'warn',
        {
            ignoreArrowShorthand: true,
            ignoreVoidOperator: true,
        },
    ],
    '@typescript-eslint/restrict-plus-operands': [
        'error',
        {
            allowAny: false,
            allowBoolean: false,
            allowNullish: false,
            allowNumberAndString: false,
            allowRegExp: false,
        },
    ],
    '@typescript-eslint/restrict-template-expressions': [
        'error',
        {
            allowAny: false,
            allowNullish: false,
            allowRegExp: false,
            allowNumber: true,
            allowBoolean: true,
            allowNever: true,
        },
    ],

    '@typescript-eslint/no-extraneous-class': [
        'error',
        { allowWithDecorator: true, allowStaticOnly: true },
    ],

    '@typescript-eslint/no-wrapper-object-types': 'error',

    '@typescript-eslint/unified-signatures': 'off', // odd
    '@typescript-eslint/no-unsafe-enum-comparison': 'off', // odd
    '@typescript-eslint/no-duplicate-type-constituents': 'off', // odd
    '@typescript-eslint/no-dynamic-delete': 'off', // fine in general
    '@typescript-eslint/no-unsafe-assignment': 'off', // by tsc
    '@typescript-eslint/no-unsafe-call': 'off', // odd

    '@typescript-eslint/no-unsafe-argument': 'off', // strict
    '@typescript-eslint/no-unsafe-member-access': 'off', // strict
    '@typescript-eslint/no-unsafe-return': 'off', // strict
};

if (WebBuddyStricterMode) {
    Object.assign(WebBuddyESLintTypeScriptRules, {
        '@typescript-eslint/no-unsafe-argument': 'error',
        '@typescript-eslint/no-unsafe-return': 'error',
        '@typescript-eslint/no-unsafe-member-access': 'off', // odd
    } satisfies ESLintRuleSet);
}
