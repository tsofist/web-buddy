import type { ESLintConfigChain } from '../types.js';

export const WebBuddyESLintFrameworkSpecificConfigForMercurio: ESLintConfigChain = [
    {
        files: ['**/*.controller.ts', '**/*.service.ts'],
        rules: {
            '@typescript-eslint/require-await': 'off',
        },
    },
    {
        files: ['**/service-api.types.ts'],
        rules: {
            '@typescript-eslint/consistent-type-definitions': 'off',
            '@typescript-eslint/method-signature-style': ['error', 'method'],
        },
    },
];
