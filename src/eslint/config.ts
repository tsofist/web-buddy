import epJS from '@eslint/js';
import epStylistic from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';
import { importX as epImportX } from 'eslint-plugin-import-x';
import epPrettier from 'eslint-plugin-prettier';
import type { ESLintConfigChain, WebBuddyESLintConfig } from '../types.js';
import { WebBuddyESLintFrameworkSpecificConfigForMercurio } from './config.fws-mercurio.js';
import { WebBuddyESLintJSON } from './config.json.js';
import { WebBuddyESLintRulesShared } from './config.shared.rules.js';
import { WebBuddyESLintTypeScript } from './config.typescript.js';
import { WebBuddyESLintVue } from './config.vue.js';
import { WebBuddyESLintYAML } from './config.yaml.js';
import { WebBuddyESLintIgnores } from './ignores.js';

export default createWebBuddyESLintConfig();

export function createWebBuddyESLintConfig(): WebBuddyESLintConfig {
    return defineConfig(...createWebBuddyESLintConfigChain());
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
        { ignores: WebBuddyESLintIgnores },

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

        epJS.configs.recommended,

        {
            rules: {
                'prettier/prettier': 'error',
                ...WebBuddyESLintRulesShared,
            },
        },
    ];
}
