import epJS from '@eslint/js';
import epStylistic from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';
import { importX as epImportX } from 'eslint-plugin-import-x';
import epPrettier from 'eslint-plugin-prettier';
import globals from 'globals';
import type { ESLintConfigChain, WebBuddyESLintConfig } from '../types.js';
import { WebBuddyESLintFrameworkSpecificConfigForMercurio } from './config.fws-mercurio.js';
import { WebBuddyESLintJSON } from './config.json.js';
import { WebBuddyESLintRulesShared } from './config.shared.rules.js';
import { WebBuddyESLintTypeScript } from './config.typescript.js';
import { WebBuddyESLintVue } from './config.vue.js';
import { WebBuddyESLintYAML } from './config.yaml.js';
import { WebBuddyESLintIgnores } from './ignores.js';

export default createWebBuddyESLintConfig();

export function createWebBuddyESLintConfig(
    onChain?: (chain: ESLintConfigChain) => ESLintConfigChain,
): WebBuddyESLintConfig {
    let chain = createWebBuddyESLintConfigChain();
    if (onChain) chain = onChain(chain);
    return defineConfig(...chain);
}

export function createWebBuddyESLintConfigChain(): ESLintConfigChain {
    return [
        ...createWebBuddyESLintConfigGeneralChain(),
        ...WebBuddyESLintJSON,
        WebBuddyESLintTypeScript,
        WebBuddyESLintVue,
        ...WebBuddyESLintFrameworkSpecificConfigForMercurio,
        WebBuddyESLintYAML,
    ];
}

function createWebBuddyESLintConfigGeneralChain(): ESLintConfigChain {
    return [
        {
            linterOptions: {
                reportUnusedDisableDirectives: 'error',
                reportUnusedInlineConfigs: 'error',
            },
        },

        {
            ignores: WebBuddyESLintIgnores,
        },

        {
            plugins: {
                '@stylistic': epStylistic,
                'prettier': epPrettier,
                'import-x': epImportX,
            },
            settings: {
                'import-x/resolver': { typescript: true },
            },
        },

        {
            // todo manage?
            files: ['**/*.{js,cjs,mjs,jsx}'],
            languageOptions: {
                globals: {
                    ...globals.browser,
                    ...globals.node,
                    ...globals.jest,
                },
            },
        },

        epJS.configs.recommended,

        {
            rules: {
                'prettier/prettier': 'error',
                ...WebBuddyESLintRulesShared,
            },
        },
    ];
}
