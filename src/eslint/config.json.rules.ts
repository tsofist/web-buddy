import type { ESLintRuleSet } from '../types.js';

export const WebBuddyESLintJSONRules: ESLintRuleSet = {
    'jsonc/sort-keys': 'off',
    'jsonc/key-name-casing': 'off',
};

export const WebBuddyESLintJSONCRules: ESLintRuleSet = {
    ...WebBuddyESLintJSONRules,
    'jsonc/no-comments': 'off',
    'jsonc/comma-dangle': ['error', 'never'],
};
