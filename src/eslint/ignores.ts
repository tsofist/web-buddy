import type { ESLintConfigChain, ESLintConfigChainItem } from '../types.js';

export const WebBuddyESLintIgnores: string[] = [
    //
    'package*.json',
    //
    '*.scss',
    '*.css',
    '*.pcss',
    '*.postcss',
    '*.html',
    '*.htm',
    '!.*.yml',
    '!.*.yaml',
    '!.*.json',
    //
    '**/*.tmp.*',
    '**/*.private.*',
    '**/*.tmp/',
    '**/*.private/',
    //
    '.husky/_/',
    //
    './.cache/',
    './.*-cache/',
    //
    './.coverage/',
    //
    './dist/',
    './lib/',
    '**/node_modules/',
    '**/vendor/',
    //
    '.iml',
    '.idea/',
    '.vscode/',
    '.history/',
    //
    './spec/*.schema*.json',
    './spec/*.openapi.json',
    './spec/*.dbml.json',
];

export function appendESLintIgnores(
    ignores: string[],
    chain: ESLintConfigChain,
    matcher: typeof matchIgnores = matchIgnores,
): ESLintConfigChain {
    const list = chain.find(matcher)?.ignores;

    if (list) {
        list.push(...ignores);
    } else {
        chain.unshift({ ignores });
    }

    return chain;
}

function matchIgnores(item: ESLintConfigChainItem): boolean {
    return Array.isArray(item.ignores) && item.files == null;
}
