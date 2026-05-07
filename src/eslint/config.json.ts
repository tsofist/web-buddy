import epJSONC from 'eslint-plugin-jsonc';
import type { ESLintConfigChain } from '../types.js';
import { WebBuddyESLintJSONCRules, WebBuddyESLintJSONRules } from './config.json.rules.js';
import { WebBuddyESLintRulesShared } from './config.shared.rules.js';

export const WebBuddyESLintJSON: ESLintConfigChain = [
    {
        files: ['**/*.{json,jsonc,json5}'],
        extends: [epJSONC.configs['flat/all'], epJSONC.configs['flat/prettier']],
        rules: {
            ...WebBuddyESLintRulesShared,
            ...WebBuddyESLintJSONRules,
        },
    },

    {
        files: ['**/*.{jsonc,json5}', 'tsconfig.json', 'tsconfig.*.json'],
        rules: {
            ...WebBuddyESLintRulesShared,
            ...WebBuddyESLintJSONCRules,
        },
    },
];
