import epJS from '@eslint/js';
import epDecoratorPosition from 'eslint-plugin-decorator-position/config/recommended';
import { importX as epImportX } from 'eslint-plugin-import-x';
import epTS from 'typescript-eslint';
import type { ESLintConfigChainElement } from '../types.js';
import {
    WebBuddyESLintRulesShared,
    WebBuddyESLintVueExtraFileExtensions,
} from './config.shared.rules.js';
import { WebBuddyESLintTypeScriptRules } from './config.typescript.rules.js';

export const WebBuddyESLintTypeScript: ESLintConfigChainElement = {
    files: ['**/*.{ts,mts,tsx}'],
    extends: [
        epJS.configs.recommended,
        //
        epImportX.flatConfigs.recommended,
        epImportX.flatConfigs.typescript,
        //
        ...epTS.configs.strictTypeChecked,
        ...epTS.configs.stylisticTypeChecked,
        //
        epDecoratorPosition,
    ],
    languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: epTS.parser,
        parserOptions: {
            projectService: true,
            extraFileExtensions: WebBuddyESLintVueExtraFileExtensions,
        },
    },
    rules: {
        ...WebBuddyESLintRulesShared,
        ...WebBuddyESLintTypeScriptRules,
    },
};
