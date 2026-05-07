import type { ESLintRuleSet } from '../types.js';

export const WebBuddyESLintYAMLRules: ESLintRuleSet = {
    'yml/plain-scalar': ['error', 'always'],
    'yml/indent': 'off',
    'yml/quotes': ['error', { avoidEscape: true, prefer: 'single' }],
    'yml/block-sequence-hyphen-indicator-newline': ['error', 'never', { nestedHyphen: 'never' }],
};
