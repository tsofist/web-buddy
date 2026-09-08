import { isWebBuddyStrictFor } from '../mode.js';
import { ESLintRuleSet, WebBuddyStrictFeature } from '../types.js';

export function defineESLintRules(
    defaults: ESLintRuleSet,
    strict?: Record<WebBuddyStrictFeature, ESLintRuleSet>,
) {
    return {
        defaults,
        strict,
        get values() {
            const sources: any[] = [Object.create(null), defaults];

            if (strict) {
                for (const [feature, rules] of Object.entries(strict)) {
                    if (isWebBuddyStrictFor(feature as WebBuddyStrictFeature)) {
                        sources.push(rules);
                    }
                }
            }

            // eslint-disable-next-line prefer-spread
            return Object.assign.apply(
                Object,
                // @ts-expect-error It's OK
                sources,
            ) as ESLintRuleSet;
        },
    } as const;
}
