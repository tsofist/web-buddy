import { createWebBuddyESLintConfig } from './lib/eslint/config.js';

process.env.WEB_BUDDY_STRICT = 'true';

export default createWebBuddyESLintConfig((chain) => {
    chain.push(
        {
            files: ['**/*.d.ts'],
            rules: {
                '@typescript-eslint/consistent-type-definitions': 'off',
            },
        },
        {
            files: ['**/*.ts'],
            rules: {
                '@typescript-eslint/no-restricted-types': 'off',
            },
        },
    );

    return chain;
});
