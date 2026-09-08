import { createWebBuddyESLintConfig } from './lib/eslint/config.js';

export default createWebBuddyESLintConfig((chain) => {
    chain.push({
        files: ['**/*.d.ts'],
        rules: {
            '@typescript-eslint/consistent-type-definitions': 'off',
        },
    });

    return chain;
});
