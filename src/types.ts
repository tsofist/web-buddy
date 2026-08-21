import type { ConfigWithExtends } from '@eslint/config-helpers';
import type { Linter } from 'eslint';
import type { defineConfig } from 'eslint/config';

export type WebBuddyESLintConfig = RO<ReturnType<ESLintDefineConfig>>;

// eslint-disable-next-line @typescript-eslint/no-restricted-types
export type ESLintRuleSet = Record<string, Linter.RuleEntry>;
export type ESLintConfigChainItem = ConfigWithExtends;
export type ESLintConfigChain = ConfigWithExtends[];

export type StylelintRuleSet = {
    [rule in string]: null | boolean | [boolean, object];
};

type ESLintDefineConfig = typeof defineConfig;

type RO<T> =
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    T extends Function ? T : T extends object ? { readonly [K in keyof T]: RO<T[K]> } : T;
