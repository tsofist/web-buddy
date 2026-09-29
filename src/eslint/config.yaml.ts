import { configs } from 'eslint-plugin-yml';
import * as parser from 'yaml-eslint-parser';
import type { ESLintConfigChainItem } from '../types.js';
import { WebBuddyESLintRulesShared } from './config.shared.rules.js';
import { WebBuddyESLintYAMLRules } from './config.yaml.rules.js';

export const WebBuddyESLintYAML: ESLintConfigChainItem = {
    files: ['**/*.{yaml,yml}'],
    languageOptions: { parser },
    extends: [configs['flat/standard'], configs['flat/prettier']],
    rules: {
        ...WebBuddyESLintRulesShared,
        ...WebBuddyESLintYAMLRules,
    },
};
