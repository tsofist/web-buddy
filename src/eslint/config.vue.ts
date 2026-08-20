import epJS from '@eslint/js';
import epDecoratorPosition from 'eslint-plugin-decorator-position/config/recommended';
import { importX as epImportX } from 'eslint-plugin-import-x';
import epVue from 'eslint-plugin-vue';
import globals from 'globals';
import epTS from 'typescript-eslint';
import type { ESLintConfigChainElement } from '../types.js';
import {
    WebBuddyESLintRulesShared,
    WebBuddyESLintVueExtraFileExtensions,
} from './config.shared.rules.js';
import { WebBuddyESLintTypeScriptRules } from './config.typescript.rules.js';
import { WebBuddyESLintVueRules } from './config.vue.rules.js';

/**
 * @see https://github.com/oxc-project/oxc/issues/15761 TODO: oxc migration blocker
 */
export const WebBuddyESLintVue: ESLintConfigChainElement = {
    files: ['**/*.vue'],
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
        //
        ...epVue.configs['flat/recommended'],
    ],
    languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        globals: {
            // todo others?
            ...globals.browser,
        },
        parserOptions: {
            parser: epTS.parser,
            projectService: true,
            extraFileExtensions: WebBuddyESLintVueExtraFileExtensions,
        },
    },
    rules: {
        ...WebBuddyESLintRulesShared,
        ...WebBuddyESLintTypeScriptRules,
        ...WebBuddyESLintVueRules,
    },
};
